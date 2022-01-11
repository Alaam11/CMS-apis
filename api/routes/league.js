const express = require("express");
const router = express.Router();
const db = require("../db");

var multer  = require('multer');
var aws = require('aws-sdk');
var multerS3 = require('multer-s3');
var bodyParser = require('body-parser')
const fs = require('fs');
var xlsxtojson = require("xlsx-to-json-lc");
var AdmZip = require('adm-zip');
const multipart = require('connect-multiparty');
const multipartMiddleware = multipart({ uploadDir: './uploads' });

//cron
var cron = require('node-cron');

//fcm
const common = require("../config/common.js");
var FCM = require('fcm-node');
var serverKey = common.fcmServerKey(); //put your server key here
var fcm = new FCM(serverKey);

// Multer File upload settings
/*const DIR = './public/';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, DIR);
  },
  filename: (req, file, cb) => {
    const fileName = file.originalname.toLowerCase().split(' ').join('-');
    cb(null, fileName)
  }
});*/

aws.config.update({
    secretAccessKey: 'ux+vTbSHoOAGOh6kd9EajeF6eq6hH8gAjLSFYspq',
    accessKeyId: 'AKIAUSOI5LFUXODF3IVR',
    region: 'ap-south-1'
});

var app = express(),
    s3 = new aws.S3();

app.use(bodyParser.json());

// Multer Mime Type Validation
/*var upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: (req, file, cb) => {
    if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
    }
  }
});*/

var upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: 'allam-stg',
        key: function (req, file, cb) {
            console.log(file);
            const fileName = 'league/'+Date.now()+"-"+file.originalname.toLowerCase().split(' ').join('-');
            cb(null, fileName); //use Date.now() for unique file keys
        },
        metadata: (req, file, callBack) => {
            callBack(null, { fieldName: file.fieldname })
        } 
    })
});

var fieldsUpload = multer({
    storage: multerS3({
        s3: s3,
        bucket: 'allam-stg',
        key: function (req, file, cb) {
            console.log(file);
            const fileName = 'league/'+Date.now()+"-"+file.originalname.toLowerCase().split(' ').join('-');
            cb(null, fileName); //use Date.now() for unique file keys
        },
        metadata: (req, file, callBack) => {
            callBack(null, { fieldName: file.fieldname })
        } 
    })
}).fields([{ name: 'logo', maxCount: 1 }, { name: 'company_logo', maxCount: 1 }]);

const uploadMultiS3 = multer({

    storage: multerS3({
        s3: s3,
        acl: 'public-read',
        bucket: 'allam-stg',
        metadata: (req, file, callBack) => {
            callBack(null, { fieldName: file.fieldname })
        },
        key: (req, file, callBack) => {
            console.log(file);
            var fullPath = 'league/files/'+file.originalname.toLowerCase().split(' ').join('-');//If you want to save into a folder concat de name of the folder to the path
            callBack(null, fullPath)
        }
    })/* ,
    limits: { fileSize: 2000000 }, // In bytes: 2000000 bytes = 2 MB
    fileFilter: function (req, file, cb) {
        checkFileType(file, cb);
    } */
}).array('file[]', 10);

router.post("/uploadLeagueImages",  async function(req, res, next) {
    
   /*  fieldsUpload(req, res, (err) => {
        if (err) throw err;
        console.log('files', req.files);
    }); */
    uploadMultiS3(req, res, (error) => {
        //console.log('files', req.files);
        if (error) {
            console.log('errors', error);
            res.status(500).json({
                status: 'fail',
                error: error
            });
        } else {
            // If File not found
            if (req.files === undefined) {
                console.log('uploadProductsImages Error: No File Selected!');
                res.status(500).json({
                    status: 'fail',
                    message: 'Error: No File Selected'
                });
            } else {
                // If Success
                let fileArray = req.files,
                    fileLocation, fileKey;
                let timeArray = req.body.file_time, file_time;
                const images = [];
                
                for (let i = 0; i < fileArray.length; i++) {
                  var obj = {}
                    fileLocation = fileArray[i].location;
                    fileKey = fileArray[i].key;
                    console.log('filenm', fileLocation);
                    file_time = timeArray[i];
                    obj.fileKey = fileKey;
                    obj.fileLocation = fileLocation;
                    obj.file_time = file_time;
                    images.push(obj);
                }
                
                // Save the file name into database
                return res.status(200).json({
                    status: 'ok',
                    filesArray: fileArray,
                    locationArray: images
                });

            }
        }
    }); 
});

router.get('/api/upload', (req, res) => {
    res.json({ 'message': 'hello' });
});

router.get("/s3", async function(req, res, next) {
  const params = {
          Bucket: 'allam-stg',
          Key: "user-default.png" //if any sub folder-> path/of/the/folder.ext
  }
  try {
        await s3.headObject(params).promise()
        console.log("File Found in S3")

        s3.getObject(params, function(err, data) {
            res.writeHead(200, {'Content-Type': 'image/jpeg'});
            res.write(data.Body, 'binary');
            res.end(null, 'binary');
        });
    } catch (err) {
        console.log("File not Found ERROR : " + err.code)
    }
});


router.get("/", async function(req, res, next) {
  try {
    const results = await db.query("SELECT * FROM league");
    return res.json(results.rows);
  } catch (err) {
    return next(err);
  }
});
router.get("/get_league_list_old", async function(req, res, next) {
    try {
      const results = await db.query("SELECT *, to_timestamp(start_date || ' ' || start_time, 'YYYY-MM-DD HH24:MI:SS') as league_date FROM league order by league_date DESC ");
      //const results = await db.query("select * from ( SELECT *, to_timestamp(start_date || ' ' || start_time, 'YYYY-MM-DD HH24:MI:SS') as league_date FROM league) t where league_date >= now() ");
      // IF A USER ISN'T FOUND
      if (typeof results.rows !== 'undefined' && results.rows.length == 0) {
        return res.status(401).json({ status: 201, success: false, message: 'results not found' });
      }
     // console.log(results.rows);
     return res.json({
             "status": 200,
             'data':results.rows,
           });
    } catch (err) {
      return next(err);
    }
  });
  router.get("/get_league_list", async function(req, res, next) {
    try {
      const results = await db.query("SELECT *, to_timestamp(start_date || ' ' || start_time, 'YYYY-MM-DD HH24:MI:SS') as league_date FROM league order by league_date DESC ");
      //const results = await db.query("select * from ( SELECT *, to_timestamp(start_date || ' ' || start_time, 'YYYY-MM-DD HH24:MI:SS') as league_date FROM league) t where league_date >= now() ");
      // IF A USER ISN'T FOUND
      if (typeof results.rows !== 'undefined' && results.rows.length == 0) {
        return res.json({ status: 201, success: false, message: 'results not found' });
      }
     // console.log(results.rows);
     const projetList = results.rows;
     result = [];
      for (const item of projetList) {
        //await delayedLog(item);
        if(item.question_type == 'category'){
          var o = Object.assign({}, item);
          var categories = await db.query("SELECT competition_id, categories  FROM league_categories where competition_id =$1 ", [item.id]);
          if (typeof categories.rows !== 'undefined' && categories.rows.length > 0) {
            var categoriesObj   = categories.rows[0];
            console.log(categoriesObj);
            var categoriesArr = JSON.parse(categoriesObj.categories);
            var catString = [];
            for (const cat of categoriesArr) {
              catString.push(cat.id);
            }
            console.log(catString);
            //var catSplit = catString.split(',');
            //var resCat= catString.join(',')      
            //console.log(catString);
            if(typeof catString !='undefined'){
              console.log("SELECT * FROM gc_question where category_id in ("+catString+") ");
              var question = await db.query("SELECT count(*) as total FROM gc_question where category_id in ("+catString+") " );
              //console.log('question', question.rows);
              o.total_question = question.rows[0].total;
            }else{
              o.total_question = 0;
            }
            
          }else{
            o.total_question = 0;
          }
          
          
          var countLeague = await db.query("SELECT count(distinct(interest_user_id)) as total FROM league_user_in WHERE competition_id=$1 ",[item.id]);
          var intrstObj   = countLeague.rows[0];
          var totalInterest= intrstObj.total;
          //console.log(totalInterest);
          
          
          o.total_interest = totalInterest;
          result.push(o);
        }else{
          var question = await db.query("SELECT count(*) as total FROM league_question where competition_id =$1 ", [item.id]);
          //console.log('question', question.rows);
          var countLeague = await db.query("SELECT count(distinct(created_by)) as total FROM competition_affiliate_check WHERE competition_id=$1 ",[item.id]);
          var intrstObj   = countLeague.rows[0];
          var totalInterest= intrstObj.total;
          //console.log(totalInterest);
          var o = Object.assign({}, item);
          o.total_question = question.rows[0].total;
          o.total_interest = totalInterest;
          result.push(o);
        }
        
      }
     return res.json({
             "status": 200,
             'data':result,
           });
    } catch (err) {
      return next(err);
    }
  });
  router.get("/categories/:id", async function(req, res, next) {
    try {
  
      const results = await db.query("SELECT * FROM league_categories WHERE competition_id=$1", [
        req.params.id
      ]);
  
      return res.json(results.rows);
    } catch (err) {
      return next(err);
    }
  });
  //////update question(competition_question table)
router.post("/update_question_competition", async function(req, res, next) {
    if(req.body.option1 && req.body.answer)
    {
      var question = req.body;
      try {
          var quiz_question = await db.query("UPDATE league_question SET question=$1,answer=$2,option2=$3,option3=$4,option4=$5,note=$6,level=$7,modified_by=$8, duration=$9, option1=$10 WHERE id=$11 RETURNING *",[question.question, question.answer, question.option2, question.option3, question.option4, question.note, question.level, question.created_by, question.duration, question.option1, question.id]);
          /////////////////////////////////////////////
           return res.json({
             "status": 200,
             "data" : quiz_question.rows,
             "msg":"question successfully saved"
           });
      } catch (err) {
        return next(err);
      }
    }
    else{
       return res.json({"status": 403, "msg": "Missing required parameters" });
    }
  });
  
  //delet draft data
  router.delete("/delete_question/:id", async function(req, res, next) {
    try {
      const result = await db.query("DELETE FROM league_question WHERE id=$1", [
        req.params.id
      ]);
      return res.json({ message: "Record deleted" });
    } catch (err) {
      return next(err);
    }
  });

  router.post("/update_status/:id", async function(req, res, next) 
  {

    if( req.body.status)
    {
        try {
        const result = await db.query("UPDATE league set status =$1 WHERE id=$2 RETURNING *", [
            req.body.status, req.params.id
        ]);
        return res.json({ message: "Record updated", "data" : result.rows});
        } catch (err) {
        return next(err);
        }
    }
    else{
        return res.json({ message: "Missing required parameters" });
    }


    });

//delete competition data
router.delete("/delete_competition/:id", async function(req, res, next) {
    try {
      let competition_id = req.params.id;
      const result = await db.query("DELETE FROM league WHERE id=$1", [
        competition_id
      ]);
      await db.query("DELETE FROM league_categories WHERE competition_id=$1", [
        competition_id
      ]);
      await db.query("DELETE FROM league_file WHERE competition_id=$1", [
        competition_id
      ]);
      await db.query("DELETE FROM league_question B USING league_question_mapping C WHERE B.id = C.question_id::integer AND  C.competition_id =$1", [
        competition_id]);
        await db.query("DELETE FROM league_question_mapping WHERE competition_id=$1", [
            competition_id
            ]);
      return res.json({ message: "Record deleted" });
    } catch (err) {
      return next(err);
    }
  });

  router.get("/edit_competition/:id", async function(req, res, next) {
    const competition_id = req.params.id;
    var results = [];
    try {
      const competition = await db.query("SELECT *, to_timestamp(start_date || ' ' || start_time, 'YYYY-MM-DD HH24:MI:SS') as league_date FROM league where id =$1 ", [competition_id]);
      // IF A Competition ISN'T FOUND
      if (typeof competition.rows !== 'undefined' && competition.rows.length == 0) {
        return res.status(401).json({ status: 201, success: false, message: 'results not found' });
      }
      var competitionObj = competition.rows;
      results.push({competition : competitionObj});
      console.log(competitionObj[0].question_type);
      if(competitionObj[0].question_type == 'bulk'){
        // GET QUESTIONS ACCORDING TO COMPETITION ID
        const question = await db.query("SELECT league_question.* FROM league_question_mapping JOIN league ON league_question_mapping.competition_id::integer=league.id JOIN league_question ON league_question_mapping.question_id::integer=league_question.id WHERE league_question_mapping.competition_id=$1", [
            competition_id]);
            // IF A question ISN'T FOUND
        if (typeof question.rows !== 'undefined' && question.rows.length == 0) {
            return res.status(401).json({ success: false, message: 'Question not found' });
        }
        var questionObj = question.rows;
        results.push({question : questionObj});
    }else{
        // GET LEAGUE CATEGORIES ACCORDING TO COMPETITION ID
        const categories = await db.query('SELECT * FROM league_categories WHERE competition_id = $1', [competition_id]);
        // IF A categories ISN'T FOUND
        if (typeof categories.rows !== 'undefined' && categories.rows.length == 0) {
            return res.status(401).json({ success: false, message: 'league categories not found' });
        }
        var categoriesObj = categories.rows;
        results.push({leagueCategories : categoriesObj});
    }
  
      // GET NARRATION ACCORDING TO COMPETITION ID
      const narration = await db.query('SELECT * FROM league_file WHERE competition_id = $1', [competition_id]);
      // IF A narration ISN'T FOUND
      if (typeof narration.rows !== 'undefined' && narration.rows.length == 0) {
        return res.status(401).json({ success: false, message: 'Narration not found' });
      }
      var narrationObj = narration.rows;
      results.push({leagueFile : narrationObj});
  
     // console.log(results.rows);
     return res.json({
             "status": 200,
             'data':results,
           });
    } catch (err) {
      return next(err);
    }
  });

router.get("/getCategoryQuestion", async function(req, res, next) {
    try {
        var catString =req.query.categories;
        var catSplit = catString.split(',');
        var resCat= catSplit.join(',')      
        console.log(resCat);
        /* 
        //var categoriesIds = JSON.parse(catSplit);
        catSplit.forEach(function (categoriesIds) {
            //excelRecord.Remarks = "";
            console.log(categoriesIds);
            var question = await db.query("SELECT * FROM league_group where category_id in $1 ", [ catSplit]);

        }); */
        //console.log("SELECT * FROM poc_question where category_id in ("+resCat+") ");
        const question = await db.query("SELECT * FROM gc_question where category_id in ("+resCat+") " );
        
      //const results = await db.query("SELECT * FROM league");
      return res.json(question.rows);
    } catch (err) {
      return next(err);
    }
  });

router.post('/api/upload', multipartMiddleware, (req, res, next) => {
    //res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    var exceltojson; //Initialization
    //res.json({ 'message': req.files.uploads[0].originalFilename });
    /* if (req.files.uploads.length != 2) { 
        return res.status(200).json({ error_code: 1, err_desc: "Files are not uploaded correctly, upload both file", data: null });

    } */
    if (req.files.uploads[0] !== undefined &&  req.files.uploads[0].originalFilename.split('.')[req.files.uploads[0].originalFilename.split('.').length - 1] !== 'xlsx') {
        return res.status(200).json({ error_code: 1, err_desc: "First File should be an xlsx file", data: null });
    }
    if (req.files.uploads[1] !== undefined && req.files.uploads[1].originalFilename.split('.')[req.files.uploads[1].originalFilename.split('.').length - 1] !== 'zip') {
        return res.status(200).json({ error_code: 1, err_desc: "Second File should be a zip file", data: null });
    }
    if (req.files.uploads[0].originalFilename.split('.')[req.files.uploads[0].originalFilename.split('.').length - 1] === 'xlsx') {
        exceltojson = xlsxtojson;
    }
    try {
        exceltojson({
            input: req.files.uploads[0].path, //the same path where we uploaded our file
            output: null, //since we don't need output.json
            lowerCaseHeaders: true
        }, function (err, result, cb) {
            if (err) {
                return res.status(200).json({ error_code: 1, err_desc: err, data: null });
            }
            var validateArray = [];
            // reading archives
            if(req.files.uploads[1] !== undefined){
              var zip = new AdmZip(req.files.uploads[1].path);
              var zipEntries = zip.getEntries(); // an array of ZipEntry records

              zip.extractAllTo(/*target path*/"./uploads/", /*overwrite*/true);
            }
            result.forEach(function (excelRecord) {
                excelRecord.Remarks = "";
                excelRecord.category_id = 0;
                if (excelRecord.category == "") {
                    excelRecord.Remarks += "Category Can not be blank.<br/>";
                }
                if (excelRecord.category != "") {
                  
                  /*excelRecord.category_id = function(req, resp, cb) {
                    db.query("SELECT id, title FROM categories WHERE title='"+excelRecord.category+"'", (error, res) => {
                    if (error) {
                      throw error
                    }
                    //excelRecord.category_id = res.rows[0].id;
                    cb(null, res.rows[0].id);
                    
                    console.log("Show1 "+ res.rows[0].id);
                      //console.log("Show "+ JSON.stringify(res.rows));
                  })
                  }*/
                    //const categoryData = db.query("SELECT id, title FROM categories WHERE title='"+excelRecord.category+"'");
                    /*try {
                      var categoryData =  db.query("SELECT id, title FROM categories WHERE title='"+excelRecord.category+"'");
                      console.log("Show1 "+ categoryData.rows[0].id);

                      if (categoryData.rows == 0) {
                        excelRecord.Remarks += "Category does not exists.<br/>";
                      }else{
                        excelRecord.category_id = categoryData.rows[0].id;
                      }
                    }catch (err) {
                      excelRecord.Remarks += next(err);
                    }*/

                  //console.log("SELECT id, title FROM categories WHERE title='"+excelRecord.category+"'");
                  /*if (categoryData.rows == 0) {
                    excelRecord.Remarks += "Category does not exists.<br/>";
                  }else{
                    //excelRecord.category_id = categoryData.rows[0].id;
                  }*/
                  
                //  console.log("Show "+ JSON.stringify(categoryData));
                }
                if (excelRecord.question == "") {
                    excelRecord.Remarks += "Question Can not be blank.<br/>";
                }
                /*if (excelRecord.question_file_url != "") {
                    let zipData = zipEntries.map(a => a.entryName.toLowerCase());
                    
                    if (zipData.indexOf(excelRecord.question_file_url.toLowerCase()) == -1) {
                        excelRecord.Remarks += "Question File does not exist.<br/>";
                    }
                }*/
                //if (excelRecord.question_file_url != "") {
                if (excelRecord.question_file_url != "" && req.files.uploads[1] !== undefined) {
                    let zipData = zipEntries.map(a => a.entryName);
                    //console.log(JSON.stringify(zipData[zipData.indexOf(excelRecord.question_file_url.toLowerCase())]));

                    if (zipData.indexOf(excelRecord.question_file_url) == -1) {
                        excelRecord.Remarks += "Question File path does not exist.<br/>";
                    }else{
                      //console.log('excelRecord.question_file_url '+excelRecord.question_file_url)
                      excelRecord.question_file_url = '/var/www/html/allam_cms_live/api/uploads/'+zipData[zipData.indexOf(excelRecord.question_file_url)];
                      
                    }
                }
                if (excelRecord.file_type == "") {
                    excelRecord.Remarks += "File Type Can not be blank.<br/>";
                }
                if (excelRecord.answer == "") {
                    excelRecord.Remarks += "Answer Can not be blank.<br/>";
                }
                if (excelRecord.option1 == "") {
                    excelRecord.Remarks += "Option 1 Can not be blank.<br/>";
                }
                if (excelRecord.option2 == "") {
                    excelRecord.Remarks += "Option 2 Can not be blank.<br/>";
                }
                if (excelRecord.option3 == "") {
                    excelRecord.Remarks += "Option 3 Can not be blank.<br/>";
                }
                if (excelRecord.option4 == "") {
                    excelRecord.Remarks += "Option 4 Can not be blank.<br/>";
                }
                /* if (excelRecord.level == "") {
                    excelRecord.Remarks += "Level Can not be blank.<br/>";
                }
                if (excelRecord.note == "") {
                    excelRecord.Remarks += "Note Can not be blank.<br/>";
                } */
                if (excelRecord.Remarks != "") {
                    validateArray.push(excelRecord);
                }
                //console.log(JSON.stringify(excelRecord));
            });
            //zipEntries.forEach(function (zipEntry) {
            //    console.log(zipEntry.toString()); // outputs zip entries information
            //    if (zipEntry.entryName == "my_file.txt") {
            //        console.log(zipEntry.getData().toString('utf8'));
            //    }
            //});


            var fs = require('fs');
            try {
                fs.unlinkSync(req.files.uploads[0].path);
                if(req.files.uploads[1] !== undefined){
                  fs.unlinkSync(req.files.uploads[1].path);
                }
            } catch (e) {
                //error deleting the file
            }
            if (validateArray.length != 0) {
                res.status(200).json({ error_code: 2, err_desc: "Validation Failed", data: validateArray });
            }
            else {
                res.status(200).json({ error_code: 0, err_desc: "Successfully validated", data: result });
            }
        });
    } catch (e) {
        res.status(500).json({ error_code: 1, err_desc: "Corupted excel file" });
    }
    //res.json({ 'message': req.files });
});

router.post("/addLeague", upload.fields([{ 
  name: 'logo', maxCount: 1 
}, { 
  name: 'company_logo', maxCount: 1 
}, {
  name: 'narration_url', maxCount: 1
},{
  name: 'narration_url1', maxCount: 1
},{
  name: 'narration_url2', maxCount: 1
}]), async function(req, res, next) { console.log('req.body '+req.body.compitition_name);
if(req.body.compitition_name && req.body.question_type)
{
  try {
  
  //console.log('req.body '+req.body.fileData);
  //console.log("fileName "+ req.files.logo[0].key);
  //console.log("fileObj "+ JSON.stringify(req.files));
  //console.log("fileObj "+ req.files[0].fieldname);
  //const url = req.protocol + '://' + req.get('host');
  //icon: 'http://52.66.58.148/allam_cms_live/api/public/' + req.file.filename;
  
  if(Object.keys(req.files).length !== 0 ){
      var logo =  req.files.logo[0].key;
  }else{
      return res.json({ message: "Competition logo can not be blank." });
  }
  /* if(req.files && req.files.app_logo){
      var app_logo =  req.files.app_logo[0].key;
  }else{
      var app_logo =  '';
  } */
  if(req.files && req.files.company_logo){
      var company_logo =  req.files.company_logo[0].key;
  }else{
      var company_logo =  '';
  }
  if(req.files && req.files.narration_url){
    var narration_url =  req.files.narration_url[0].key;
  }else{
    var narration_url =  '';
  }
  if(req.files && req.files.narration_url1){
    var narration_url1 =  req.files.narration_url1[0].key;
  }else{
    var narration_url1 =  '';
  }

  if(req.files && req.files.narration_url2){
    var narration_url2 =  req.files.narration_url2[0].key;
  }else{
    var narration_url2 =  '';
  }
  /* if(req.files && req.files.image_upload){
      var image_upload =  req.files.image_upload[0].key;
  }else{
      var image_upload =  '';
  } */
  
  //console.log('status '+req.body.status);
  //console.log('competition_type '+req.body.competition_type);
  //throw new Error('your die message here');
  console.log('req.body fff '+req.body.compitition_name);
  let filedata = JSON.parse(req.body.fileData);
  //let fileArray = JSON.parse(req.body.fileArray);
  
  var date_timeUTC = new Date(req.body.start_date_time).toUTCString();
  dateString = date_timeUTC.split(' ').slice(0, 4).join(' ');
  timeString = date_timeUTC.split(' ').slice(4, 5).join(' ');

  const result = await db.query("INSERT INTO league (compitition_name,description,logo,start_date,end_date,start_time,end_time, waiting_time, company_logo,company_name, company_url, question_type, company_about, start_date_time) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14) RETURNING *",
      [req.body.compitition_name, req.body.description, logo, dateString, req.body.end_date, timeString, req.body.end_time, req.body.waiting_time, company_logo, req.body.company_name, req.body.company_url, req.body.question_type, req.body.company_about, date_timeUTC]
  );
  //console.log(JSON.stringify(result.rows, null, 2));
  console.log("results "+result.rows[0].id);
  //console.log("length "+filedata.length);
  //console.log(req.body.category_ids);
  
  if (result.rows[0].id) {
      // console.log('fileArray', result.rows[0].id+' '+ JSON.stringify(fileArray));
      // //throw new Error('your die message here');
      // for ( var i = 0; i < fileArray.length ; i++ ) {
      //     tFile = fileArray[i];//some manipulation of someArr[i]
      //     (function(val){ //console.log('fileArray', fileArray[i].key);
      //         // Here check upload image is empty or not 
      //         if(fileArray[i].fileKey != "" || fileArray[i].fileKey != null)
      //         {
      //             db.query(
      //                 "INSERT INTO league_file (competition_id, file_url, file_path, file_time) VALUES ($1,$2,$3,$4) RETURNING *",
      //                 [result.rows[0].id, fileArray[i].fileKey, fileArray[i].fileLocation, fileArray[i].file_time]
      //             );
      //         }
      //     })(tFile);
      // }

      db.query(
        "INSERT INTO league_file (competition_id, narration_text, file_time, narration_text1, file_time1, file_url, file_url1,narration_text2,file_time2,file_url2) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10) RETURNING *",
        [result.rows[0].id, req.body.narration_text, req.body.narration_time, req.body.narration_text1, req.body.narration_time1, narration_url, narration_url1,req.body.narration_text2,req.body.narration_time2,narration_url2]
      );

      
      var output;
      if(req.body.question_type == 'bulk'){
          for ( var key = 0; key < filedata.length ; key++ ) {
              tVal = filedata[key];//some manipulation of someArr[key]
              (function(val){
              // Here check upload image is empty or not 
              if(filedata[key].question_file_url == "" || filedata[key].question_file_url == null)
              {
                  var question_image_url = '';
                  db.query( "INSERT INTO league_question (question, category_id, question_image_url, answer, option1, option2, option3, option4, level, duration, file_type, competition_id) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12) RETURNING *",
                  [filedata[key].question, filedata[key].category_id, filedata[key].question_file_url, filedata[key].answer, filedata[key].option1, filedata[key].option2, filedata[key].option3, filedata[key].option4, filedata[key].level, filedata[key].duration, filedata[key].file_type, result.rows[0].id], function(err, res, fields) {
                      if ( err ) {
                      console.log( 'league_question '+err );
                      } else {
                      //output.push( rows[0].id );//push query output to this variable
                      console.log('insertId '+res.rows[0].id)
                      console.log('leagueQuestionMapping.rows'+JSON.stringify(res.rows));
                      const leagueQuestionMapping =  db.query(
                          "INSERT INTO league_question_mapping (competition_id, question_id) VALUES ($1,$2) RETURNING *",
                          [result.rows[0].id, res.rows[0].id]
                      );

                  }
                  });
              }else{  // Here check upload image and upload on s3 and insert into DB
                if (fs.existsSync(filedata[key].question_file_url)) { // check here file path put in xlsx file but path not exists.
                  var filename = filedata[key].question_file_url.replace(/^.*[\\\/]/, '');
                  const fileContent = fs.readFileSync(filedata[key].question_file_url);
                  // Setting up S3 upload parameters
                  const fileName = 'league/question/'+Date.now()+"-"+filename.toLowerCase().split(' ').join('-');
                  const params = {
                      Bucket: 'allam-stg',
                      Key: fileName, // File name you want to save as in S3
                      Body: fileContent
                  };
                  s3.upload(params, async function(err, data) {
                      if (err) {
                          return res.json({"status": 403,"msg":"question image not uploaded on S3"});
                          throw err;
                      }
                      // Delete image from local after upload on s3
                      var fs = require('fs');
                      try {
                          
                          fs.unlinkSync(val.question_file_url);
                      } catch (e) {
                          //error deleting the file
                      }

                      //console.log(`File uploaded.`+ JSON.stringify(data));
                      //console.log(`File uploaded successfully. ${data.Location}`);
                      var question_image_url = data.key;
                      db.query( "INSERT INTO league_question (question, category_id, question_image_url, answer, option1, option2, option3, option4, level, duration, file_type, competition_id) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12) RETURNING *",
                          [val.question, val.category_id, question_image_url, val.answer, val.option1, val.option2, val.option3, val.option4, val.level, val.duration, val.file_type, result.rows[0].id], function(err, res, fields) {
                          if ( err ) {
                              console.log( 'league_question '+err );
                          } else {
                              //output.push( rows[0].id );//push query output to this variable
                              console.log('insertId '+res.rows[0].id)
                              console.log('leagueQuestionMapping.rows'+JSON.stringify(res.rows));
                              const leagueQuestionMapping =  db.query(
                                  "INSERT INTO league_question_mapping (competition_id, question_id) VALUES ($1,$2) RETURNING *",
                                  [result.rows[0].id, res.rows[0].id]
                              );

                          }
                      });

                  });
              }
            }

              })(tVal);
          }
      }else{
          var categories = req.body.categories;
          await db.query(
              "INSERT INTO league_categories (competition_id, categories) VALUES ($1,$2) RETURNING *",
              [result.rows[0].id, categories]
          );
      }
  }
  //res.send('Successfully uploaded ' + req.file + ' files!')
  return res.json({ status: 200, message: "Record inserted" });
  } catch (err) {
      return next('Error '+err);
  }
}
else{
  return res.json({ message: "Missing required parameters" });
}
});

router.post("/updateCompetition/:competition_id", upload.fields([{ 
  name: 'logo', maxCount: 1 
  }, { 
      name: 'company_logo', maxCount: 1 
  }, {
    name: 'narration_url', maxCount: 1
},{
    name: 'narration_url1', maxCount: 1
}]), async function(req, res, next) { console.log('req.body '+req.body.compitition_name);
  if(req.body.compitition_name && req.body.question_type && req.params.competition_id)
  {
      try {
      let competition_id = req.params.competition_id;
      //console.log('req.body '+req.body.fileData);
      //console.log("fileName "+ req.files.logo[0].key);
      //console.log("fileObj "+ JSON.stringify(req.files));
      //console.log("fileObj "+ req.files[0].fieldname);
      //const url = req.protocol + '://' + req.get('host');
      //icon: 'http://52.66.58.148/allam_cms_live/api/public/' + req.file.filename;
      
      if(req.files && Object.keys(req.files).length !== 0 && req.files.logo){
          var logo =  req.files.logo[0].key;
          await db.query("UPDATE league set logo =$1 where id = $2 RETURNING *", [logo, competition_id]);
      }else{
          //return res.json({ message: "Competition logo can not be blank." });
      }
      /* if(req.files && req.files.app_logo){
          var app_logo =  req.files.app_logo[0].key;
      }else{
          var app_logo =  '';
      } */
      if(req.files && req.files.company_logo){
          var company_logo =  req.files.company_logo[0].key;
          await db.query("UPDATE league set company_logo =$1 where id = $2 RETURNING *", [company_logo, competition_id]);
      }else{
          var company_logo =  '';
      }
      console.log('req.files ', req.files.narration_url)
      if(req.files && req.files.narration_url){
        var narration_url =  req.files.narration_url[0].key;
        await db.query("UPDATE league_file set file_url=$1 where competition_id = $2 RETURNING *", [narration_url, competition_id]);
      }else{
        var narration_url =  '';
      }
      if(req.files && req.files.narration_url1){
        var narration_url1 =  req.files.narration_url1[0].key;
        await db.query("UPDATE league_file set file_url1=$1 where competition_id = $2 RETURNING *", [narration_url1, competition_id]);
      }else{
        var narration_url1 =  '';
      }
      /* if(req.files && req.files.image_upload){
          var image_upload =  req.files.image_upload[0].key;
      }else{
          var image_upload =  '';
      } */

      var date_timeUTC = new Date(req.body.start_date_time).toUTCString();
      dateString = date_timeUTC.split(' ').slice(0, 4).join(' ');
      timeString = date_timeUTC.split(' ').slice(4, 5).join(' ');

      console.log('dateString', dateString);
      console.log('timeString', timeString);

      var date_timeISO = new Date(req.body.start_date_time);//.toISOString();
      var start_date = new Date(req.body.start_date).toISOString();
      var date_timeUTC = new Date(date_timeISO).toUTCString();

      // var enddate_timeISO = new Date(req.body.end_date_time);//.toISOString();
      //     var enddate_timeUTC = new Date(enddate_timeISO).toUTCString();
      //     enddateString  = enddate_timeUTC.split(' ').slice(0, 4).join(' ');
          
      console.log('date_timeISO', date_timeISO);
      console.log('date_timeUTC', date_timeUTC);
      
      //console.log('status '+req.body.status);
      //console.log('competition_type '+req.body.competition_type);
      //throw new Error('your die message here');
      console.log('req.body fff'+req.body.compitition_name);
      //let filedata = JSON.parse(req.body.fileData);
      //let fileArray = JSON.parse(req.body.fileArray);
      
      const result = await db.query("UPDATE league set compitition_name=$1, description=$2, start_date=$3,end_date=$4, start_time=$5, end_time=$6, waiting_time=$7, company_name=$8, company_url=$9, question_type=$10, company_about=$11, start_date_time=$12 where id =$13 RETURNING *",
          [req.body.compitition_name, req.body.description, dateString, req.body.end_date, timeString, req.body.end_time, req.body.waiting_time, req.body.company_name, req.body.company_url, req.body.question_type, req.body.company_about, date_timeISO, competition_id]
      );
      //console.log(JSON.stringify(result.rows, null, 2));
      console.log("results "+result.rows[0].id);
      
      //console.log('fileArray', JSON.stringify(fileArray));
      //await db.query("DELETE FROM league_file WHERE competition_id=$1", [competition_id ]);
      //console.log("UPDATE league_file set narration_text=$1, file_time=$2, narration_text1=$3, file_time1=$4, file_url=$5, file_url1=$6 where competition_id =$7 RETURNING *", [ req.body.narration_text, req.body.narration_time, req.body.narration_text1, req.body.narration_time1, narration_url, narration_url1, competition_id])
      await db.query(
        "UPDATE league_file set narration_text=$1, file_time=$2, narration_text1=$3, file_time1=$4 where competition_id =$5 RETURNING *",
        [ req.body.narration_text, req.body.narration_time, req.body.narration_text1, req.body.narration_time1, competition_id]
      );

      // for ( var i = 0; i < fileArray.length ; i++ ) {
      //     tFile = fileArray[i];//some manipulation of someArr[i]
      //     (function(val){ //console.log('fileArray', fileArray[i].key);
      //         // Here check upload image is empty or not 
      //         if(fileArray[i].key != "" || fileArray[i].key != null)
      //         {
      //             db.query(
      //                 "INSERT INTO league_file (competition_id, file_url, file_path) VALUES ($1,$2,$3) RETURNING *",
      //                 [competition_id, fileArray[i].key, fileArray[i].location]
      //             );
      //         }
      //     })(tFile);
      // }
          var output;
          if(req.body.question_type == 'category'){
              var categories = req.body.categories;
              await db.query(
                  "UPDATE league_categories set  categories=$1 where competition_id=$2 RETURNING *",
                  [ categories, competition_id]
              );
          }
      
      //res.send('Successfully uploaded ' + req.file + ' files!')
      return res.json({ status: 200, message: "Record inserted" });
      } catch (err) {
          return next('Error '+err);
      }
  }
  else{
      return res.json({ message: "Missing required parameters" });
  }
});


router.post("/league_interest", async function(req, res, next) { //console.log('req.body '+JSON.stringify(req.body));
if(req.body.competition_id && req.body.interest_id)
{
    try {
        //console.log('competition_type '+req.body);
        //throw new Error('your die message here');
        const checkRecords = await db.query("select exists(select 1 from league_user_in where competition_id=$1 and interest_user_id=$2)", [req.body.competition_id, req.body.interest_id]);
        //console.log(checkRecords);
        //throw new Error('your die message here');
        if(checkRecords.rows[0].exists == false) {
            const result = await db.query("INSERT INTO league_user_in (competition_id, interest_user_id, status) VALUES ($1,$2,$3) RETURNING *",
                [req.body.competition_id, req.body.interest_id, req.body.status]
            );
            //console.log(JSON.stringify(result.rows, null, 2));
            console.log("results "+result.rows[0].id);
            return res.json({ status: 200, message: "Thanks you have entered in league" });
        }else{
            return res.json({ status: 201, message: "You have already inserted in league" });
        }
    } catch (err) {
        return next('Error '+err);
    }
}
else{
 return res.json({ message: "Missing required parameters" });
}
});

router.post("/league_group", async function(req, res, next) { //console.log('req.body '+JSON.stringify(req.body));
if(req.body.interest_id && req.body.competition_id)
{
    try {
        //console.log('competition_type '+req.body);
        //throw new Error('your die message here');
        const checkGroup = await db.query("select exists(select 1 from league_group where competition_id=$1 and user_id=$2)", [req.body.competition_id, req.body.interest_id]);
        //console.log(checkGroup);
        //throw new Error('your die message here');
        if(checkGroup.rows[0].exists == false) {
            const checkRecords = await db.query("select * from league_user_in where competition_id=$1 and is_group=$2 and interest_user_id not in ($3) order by random() limit 1 ", [req.body.competition_id, 0, req.body.interest_id]);
            //console.log(checkRecords.rows);
            //throw new Error('your die message here');
            if(checkRecords && checkRecords.rows.length) {
                var paired_id = checkRecords.rows[0].interest_user_id;
                var paired_level = 1; //checkRecords.rows[0].level;
                var user_level = 1; //checkRecords.rows[0].level;
                
                const result = await db.query("INSERT INTO league_group (competition_id, user_id, user_level, paired_id, paired_level, status) VALUES ($1,$2,$3,$4,$5,$6) RETURNING *",
                    [req.body.competition_id, req.body.interest_id, user_level, paired_id, paired_level, req.body.status]
                );
                /* await db.query("INSERT INTO league_group (competition_id, user_id, user_level, paired_id, paired_level, status) VALUES ($1,$2,$3,$4,$5,$6) RETURNING *",
                    [req.body.competition_id, paired_id, paired_level, req.body.interest_id, user_level, req.body.status]
                ); */

                const result1 = await db.query("UPDATE league_user_in SET is_group=$1 where id =$2 RETURNING *",
                    [1, checkRecords.rows[0].id]
                );
                //console.log(JSON.stringify(result.rows, null, 2));
                //console.log("results "+result.rows[0].id);
                return res.json({ status: 200, message: "Thanks you group added in league" });
            }else{
                return res.json({ status: 403, message: "Records not exists in league" });
            }
        }else{
            return res.json({ status: 201, message: "You have already grouped in league" });
        }
    } catch (err) {
        return next('Error '+err);
    }
}
else{
 return res.json({ message: "Missing required parameters" });
}
});

router.patch("/:id", upload.single('icon'), async function(req, res, next) 
{

  if(req.body.title && req.body.description && req.body.status)
  {
    try {
      const res_cat = await db.query("SELECT * FROM category_group WHERE id=$1", [
      req.params.id
      ]);
      console.log("Show "+res_cat.rows[0].icon);
      if (req.file) {
        s3.deleteObject({
          Bucket: 'allam-stg',
          Key: res_cat.rows[0].icon
        },function (err,data){
          //res.status(200).send("File has been deleted successfully");

        })

        const result = db.query(
          "UPDATE category_group SET title=$1, description=$2, icon=$3, status=$4 WHERE id=$5 RETURNING *",
          [req.body.title, req.body.description,req.file.key,req.body.status, req.params.id]
        );

      }else{
        const result = db.query(
          "UPDATE category_group SET title=$1, description=$2, status=$3 WHERE id=$4 RETURNING *",
          [req.body.title, req.body.description, req.body.status, req.params.id]
        );
      }
      // update data

      //console.log("fileName "+JSON.stringify(req.file, null, 2) );

      /*const result = db.query(
        "UPDATE category_group SET title=$1, description=$2, icon=$3, status=$4 WHERE id=$5 RETURNING *",
        [req.body.title, req.body.description,req.file.key,req.body.status, req.params.id]
      );*/
      //return res.json(result.rows[0]);

      db.query("SELECT * FROM category_group_relation WHERE category_group_id = '"+req.params.id+"'",function(err,data)
      {
        if(data.rows && data.rows.length > 0){
           const result1 =  db.query(
            "UPDATE category_group_relation SET category_ids=$1 WHERE category_group_id = $2 RETURNING *",
            [req.body.category_ids, req.params.id]
          ); console.log('update');
        } else {
           const result1 =  db.query(
            "INSERT INTO category_group_relation (category_group_id,category_ids) VALUES ($1,$2) RETURNING *",
            [req.params.id, req.body.category_ids]
          ); console.log('insert');
        }
      });

      return res.json({ message: "Record updated" });
    } catch (err) {
      return next(err);
    }
  }
  else{
    return res.json({ message: "Missing required parameters" });
  }


});

router.delete("/:id", async function(req, res, next) {
  try {
    const result = await db.query("DELETE FROM category_group WHERE id=$1", [
      req.params.id
    ]);

    const result1 = db.query("DELETE FROM category_group_relation WHERE category_group_id=$1", [
      req.params.id
    ]);
    return res.json({ message: "Record deleted" });
  } catch (err) {
    return next(err);
  }
});

async function notification(req, res, next) {
  
  //let competition_id = 80; now() - INTERVAL '15 min' as less
  const competition = await db.query("select id, compitition_name, start_date_time, NOW() from league WHERE start_date_time >=now() and status =1 ");
  var competitionType = competition.rows;
  // IF A USER ISN'T FOUND
  if (typeof competition.rows !== 'undefined' && competition.rows.length == 0) {
    return competition;
  }

  for (let index = 0; index < competition.rows.length; index++) {
    
    //console.log(competitionType);
    var competition_id = competitionType[index].id;
    var competition_name = competitionType[index].compitition_name;

    
      competition_type_name = 'مسابقة الدوري';
      module = 'league';
      promotion_type = "league";
      affiliate_code = "0000";


    var start_date_time = competitionType[index].start_date_time;
    var current_date_time = competitionType[index].now;
    //console.log('ccc', competition_id+' '+start_date_time+ ' and '+current_date_time);
    var FIFTEEN_MIN=15*60*1000;
    var FOURTEEN_MIN=14*60*1000;
    var FOUR_MIN=4*60*1000;
    var THREE_MIN=3*60*1000;
    //console.log('ddd', competition_id+ ' '+ (start_date_time - current_date_time)+ ' ' +FOUR_MIN);
    //console.log('eee', competition_id+ ' '+ (start_date_time - current_date_time)+ ' ' +THREE_MIN);
    if((((start_date_time - current_date_time) <= FIFTEEN_MIN) && ((start_date_time - current_date_time) > FOURTEEN_MIN)) || (((start_date_time - current_date_time) <= FOUR_MIN) && ((start_date_time - current_date_time) > THREE_MIN))) {
      console.log('Result of cron '+competition_id);
      //return res.json({ status: 200, data: [], message: 'Your time has expired.' });
      //const audienceCompetition = await db.query("select id, competition_id, gender, push_notification from competition_set_audience WHERE competition_id=$1 ", [  competition_id ]);
  
      //var setAudience = audienceCompetition.rows;
      //var push_notification = setAudience[0].push_notification;
      //if(push_notification == 'yes'){ // check here push notification is yes
        const users = await db.query("select id, email, gender from users WHERE status=$1 ", [ 1 ]);
        console.log('users.rows.length', users.rows.length);
        //console.log(JSON.stringify(users.rows));
      
        //throw new Error('your die message here');
        for(var i =0; i< users.rows.length; i++){
          let invited_user_id=users.rows[i].id;
          ///FCM
          push_title = 'مسابقة جديدة في "'+competition_type_name+'" بعنوان "'+competition_name+'" ' ;
        
          push_body =  'لقد تمت دعوتك لتلعب  "'+competition_name+'" '+competition_type_name; 
          
          const push_type =  'competition_invite_user';
          //update notification table
          //let invited_user_id = usersObj.id;
          let user_id = 39;
          console.log(invited_user_id);
          const notify = await db.query("INSERT INTO notification (module,type,title,payload,sent_to,status,created_by,ref_id, promotion_type, affiliate_code) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10) RETURNING *",
            [module,push_type,push_title,push_body,invited_user_id,'0',user_id,competition_id, promotion_type, affiliate_code]
            );
          //////////////FCM/////////////
            //registration_ids
            const deviceQuery = await db.query("SELECT * FROM device WHERE user_id=$1", [invited_user_id]);
            var regTokens=[];
          
            for(var j =0; j< deviceQuery.rows.length; j++){
              var questionObj=deviceQuery.rows[j];
              regTokens.push(questionObj.device_token);
            }
            var message = { 
              // to: '', 
              registration_ids:regTokens,
                collapse_key: 'green',
                
                notification: {
                    title: push_title, 
                    body: push_body
                },
                
                data: {  
                    "competition_invite_user":{
                          "game_id": competition_id,
                          "competition_type":"league",
                          "sender_id": user_id,
                          "user_id":invited_user_id
                    }
                }
            };
            
            fcm.send(message, function(err, response){
                if (err) {
                    console.log("Something has gone wrong!");
                } else {
                    console.log("Successfully sent with response: ", response);
                }
            });
          /////////END FCM/////////////

        }
      //}// end push notification check
    }
  }
    //console.log('Result of cron after')
  //return res.json({"message": "succss", "data": current_date_time, "dateWithouthSecond": dateWithouthSecond});
  //return dateWithouthSecond;
};

// Schedule tasks to be run on the server.
cron.schedule('* * * * *', function() {
  console.log('running a task every minute');
  notification();
});

module.exports = router;