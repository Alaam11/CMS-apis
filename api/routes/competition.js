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

//broadcast
const RtcTokenBuilder = require('../src/RtcTokenBuilder').RtcTokenBuilder;
const RtcRole = require('../src/RtcTokenBuilder').Role;

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

/* In case you want to validate your file type */
const fileFilter = (req, file, cb) => { console.log(file.fieldname);
  /* if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
   cb(null, true);
  } else {
   cb(new Error('Wrong file type, only upload JPEG and/or PNG !'), 
   false);
  } */
 };

var upload = multer({
    storage: multerS3({
        s3: s3,
        fileFilter: fileFilter,
        bucket: 'allam-stg',
        key: function (req, file, cb) {
            console.log(file);
            const fileName = 'daily_competition/'+Date.now()+"-"+file.originalname.toLowerCase().split(' ').join('-');
            cb(null, fileName); //use Date.now() for unique file keys
        },
        metadata: (req, file, callBack) => {
            callBack(null, { fieldName: file.fieldname })
        } /*,
        destination: (req, file, cb)=>{
            if(file.fieldname==="logo")
            {
            cb(null, './daily_competition/logo/')
            }
           else if(file.fieldname==="app_logo")
           {
               cb(null, './daily_competition/app_logo/');
           }
           else if(file.fieldname==="company_logo")
           {
               cb(null, './daily_competition/company_logo/')
           }
        },*/
        /*filename:(req,file,cb)=>{
            if(file.fieldname==="logo"){
                const logoName = 'daily_competition/'+Date.now()+"-"+file.originalname.toLowerCase().split(' ').join('-');
                cb(null, logoName);
            }
          else if(file.fieldname==="app_logo"){
             const appLogoName = 'daily_competition/'+Date.now()+"-"+file.originalname.toLowerCase().split(' ').join('-');
            cb(null, appLogoName);
          }
          else if(file.fieldname==="company_logo"){
            const companyLogoName = 'daily_competition/'+Date.now()+"-"+file.originalname.toLowerCase().split(' ').join('-');
            cb(null, companyLogoName);
          }
          else if(file.fieldname==="image_upload"){
            const imageUploadName = 'daily_competition/'+Date.now()+"-"+file.originalname.toLowerCase().split(' ').join('-');
            cb(null, imageUploadName);
          }
        }*/
    })
});

router.get('/api/upload', (req, res) => {
    res.json({ 'message': 'hello' });
});

router.post('/api/upload', multipartMiddleware, (req, res, next) => {
  //res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  var exceltojson; //Initialization
  //res.json({ 'message': req.files.uploads[0].originalFilename });
  console.log('file count', req.files.uploads[1]);
  /* if (req.files.uploads.length != 2) {
      return res.status(200).json({ error_code: 1, err_desc: "Files are not uploaded correctly, upload both file", data: null });
  } */
  if (req.files.uploads[0] !== undefined && req.files.uploads[0].originalFilename.split('.')[req.files.uploads[0].originalFilename.split('.').length - 1] !== 'xlsx') {
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
              /* if (excelRecord.category == "") {
                  excelRecord.Remarks += "Category Can not be blank.<br/>";
              } */
              
              if (excelRecord.question == "") {
                  excelRecord.Remarks += "Question Can not be blank.<br/>";
              }
              /*if (excelRecord.question_file_url != "") {
                  let zipData = zipEntries.map(a => a.entryName.toLowerCase());
                  
                  if (zipData.indexOf(excelRecord.question_file_url.toLowerCase()) == -1) {
                      excelRecord.Remarks += "Question File does not exist.<br/>";
                  }
              }*/
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
              if (excelRecord.duration == "") {
                excelRecord.Remarks += "Duration Can not be blank.<br/>";
              }
              // if (excelRecord.level == "") {
              //     excelRecord.Remarks += "Level Can not be blank.<br/>";
              // }
              // if (excelRecord.note == "") {
              //     excelRecord.Remarks += "Note Can not be blank.<br/>";
              // }
              // if (excelRecord.category != "") {
                
              //   //console.log("SELECT id, title FROM categories WHERE title like '"+excelRecord.category+"'");
              //   db.query("SELECT id, title FROM categories WHERE title like '"+excelRecord.category+"'").then(function(result) {
              //       //console.log(result.rows) // "Some User token"
              //        console.log(typeof result.rows );
              //       console.log(result.rows.length );
              //       if (result.rows.length == 0) {
              //         excelRecord.Remarks += "Category does not exists.<br/>";
              //         //console.log('inside category');
              //       }
              //       if (excelRecord.Remarks != "") {
              //         validateArray.push(excelRecord);
              //       }
              //       console.log(JSON.stringify(excelRecord));
              //    });
                  
              // //  console.log("Show "+ JSON.stringify(categoryData));
              // }

              if (excelRecord.Remarks != "") {
                validateArray.push(excelRecord);
              }  
              
          });
          //zipEntries.forEach(function (zipEntry) {
          //    console.log(zipEntry.toString()); // outputs zip entries information
          //    if (zipEntry.entryName == "my_file.txt") {
          //        console.log(zipEntry.getData().toString('utf8'));
          //    }
          //});

          //setTimeout(function() { 
            console.log('validateArray.length', validateArray.length);
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
          //}, 2000); 
      });
  } catch (e) {
      res.status(500).json({ error_code: 1, err_desc: "Corupted excel file" });
  }
  //res.json({ 'message': req.files });
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
    const results = await db.query("SELECT * FROM category_group");
    return res.json(results.rows);
  } catch (err) {
    return next(err);
  }
});

router.get("/get_list_old", async function(req, res, next) {
  try {
    
    const results = await db.query("SELECT *, to_timestamp(start_date || ' ' || start_time, 'YYYY-MM-DD HH24:MI:SS') as league_date FROM competition where competition_type='daily' order by league_date DESC ");
    //const results = await db.query("select * from ( SELECT *, to_timestamp(start_date || ' ' || start_time, 'YYYY-MM-DD HH24:MI:SS') as league_date FROM league) t where league_date >= now() ");
    // IF A USER ISN'T FOUND
    if (typeof results.rows !== 'undefined' && results.rows.length == 0) {
      return res.json({ status: 201, success: false, message: 'results not found' });
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
router.get("/get_list", async function(req, res, next) {
  try {
    
    const results = await db.query("SELECT *, start_date_time as league_date FROM competition where competition_type='daily' order by league_date DESC ");
    //const results = await db.query("select * from ( SELECT *, to_timestamp(start_date || ' ' || start_time, 'YYYY-MM-DD HH24:MI:SS') as league_date FROM league) t where league_date >= now() ");
    // IF A USER ISN'T FOUND
    if (typeof results.rows !== 'undefined' && results.rows.length == 0) {
      return res.json({ status: 201, success: false, message: 'results not found' });
    }
   // console.log(results.rows);
   var projetList = results.rows;
   
    /* var result = projetList.map( function(el) {
      isPaused = true;
      var question = db.query("SELECT count(*) as total FROM competition_question where competition_id =$1 ", [el.id]);
      console.log('question', question.rows);
      var o = Object.assign({}, el);
      o.total_question = 6;// question.rows[0].total;
      return o;
    }); */
    result = [];
    for (const item of projetList) {
      //await delayedLog(item);
      var question = await db.query("SELECT count(*) as total FROM competition_question where competition_id =$1 ", [item.id]);
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
      /* projetList.forEach(async proj => {   console.log('proj', proj.id);
        var question = await db.query("SELECT count(*) as total FROM competition_question where competition_id =$1 ", [proj.id]);
        proj.total_question = question.rows[0].total;
        resultArr.push(proj);
      }); */
      //console.log('project', proj);
      
      return res.json({
        "status": 200,
        'data':result,
      });
  } catch (err) {
    return next(err);
  }
});
router.get("/get_special_list_old", async function(req, res, next) {
  try {

    const results = await db.query("SELECT *, to_timestamp(start_date || ' ' || start_time, 'YYYY-MM-DD HH24:MI:SS') as league_date FROM competition where competition_type='special' order by league_date DESC ");
    //const results = await db.query("select * from ( SELECT *, to_timestamp(start_date || ' ' || start_time, 'YYYY-MM-DD HH24:MI:SS') as league_date FROM league) t where league_date >= now() ");
    // IF A USER ISN'T FOUND
    if (typeof results.rows !== 'undefined' && results.rows.length == 0) {
      return res.json({ status: 201, success: false, message: 'results not found' });
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
router.get("/get_special_list", async function(req, res, next) {
  console.log("klklklkl")
  try {
    
    const results = await db.query("SELECT *, start_date_time as league_date FROM competition where competition_type='special' order by league_date DESC ");
    //const results = await db.query("select * from ( SELECT *, to_timestamp(start_date || ' ' || start_time, 'YYYY-MM-DD HH24:MI:SS') as league_date FROM league) t where league_date >= now() ");
    // IF A USER ISN'T FOUND
    if (typeof results.rows !== 'undefined' && results.rows.length == 0) {
      return res.json({ status: 201, success: false, message: 'results not found' });
    }
   // console.log(results.rows);
   var projetList = results.rows;
   
    /* var result = projetList.map( function(el) {
      isPaused = true;
      var question = db.query("SELECT count(*) as total FROM competition_question where competition_id =$1 ", [el.id]);
      console.log('question', question.rows);
      var o = Object.assign({}, el);
      o.total_question = 6;// question.rows[0].total;
      return o;
    }); */
    result = [];
    for (const item of projetList) {
      //await delayedLog(item);
      var question = await db.query("SELECT count(*) as total FROM competition_question where competition_id =$1 ", [item.id]);
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
      /* projetList.forEach(async proj => {   console.log('proj', proj.id);
        var question = await db.query("SELECT count(*) as total FROM competition_question where competition_id =$1 ", [proj.id]);
        proj.total_question = question.rows[0].total;
        resultArr.push(proj);
      }); */
      //console.log('project', proj);
      
      return res.json({
        "status": 200,
        'data':result,
      });
  } catch (err) {
    return next(err);
  }
});

router.get("/get_country", async function(req, res, next) {
  try {
    const results = await db.query("SELECT id, name FROM master_country where status=1 order by name asc ");
    //const results = await db.query("select * from ( SELECT *, to_timestamp(start_date || ' ' || start_time, 'YYYY-MM-DD HH24:MI:SS') as league_date FROM league) t where league_date >= now() ");
    // IF A USER ISN'T FOUND
    if (typeof results.rows !== 'undefined' && results.rows.length == 0) {
      return res.json({ status: 201, success: false, message: 'results not found' });
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
router.get("/get_nationality", async function(req, res, next) {
  try {
    const results = await db.query("SELECT id, name FROM master_nationality where status=1 order by name asc ");
    //const results = await db.query("select * from ( SELECT *, to_timestamp(start_date || ' ' || start_time, 'YYYY-MM-DD HH24:MI:SS') as league_date FROM league) t where league_date >= now() ");
    // IF A USER ISN'T FOUND
    if (typeof results.rows !== 'undefined' && results.rows.length == 0) {
      return res.json({ status: 201, success: false, message: 'results not found' });
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

router.get("/get-broadcaster", async function(req, res, next) {
  try {

    const results = await db.query("SELECT id, email, first_name FROM users where role_id='9' and status=1 order by first_name asc ");
    //const results = await db.query("select * from ( SELECT *, to_timestamp(start_date || ' ' || start_time, 'YYYY-MM-DD HH24:MI:SS') as league_date FROM league) t where league_date >= now() ");
    // IF A USER ISN'T FOUND
    if (typeof results.rows !== 'undefined' && results.rows.length == 0) {
      return res.json({ status: 201, success: false, message: 'results not found' });
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

router.get("/get-broadcaster-data/:broadcaster_id", async function(req, res, next) {
  if(req.params.broadcaster_id)
  {
    try {
      let broadcaster_id = req.params.broadcaster_id;
      const results = await db.query("SELECT id, broadcaster_id, compitition_name, description, logo, start_date, start_time, slot_time, waiting_time, competition_type, start_date_time as league_date, start_date_time, now() FROM competition where start_date_time >= now() and broadcaster_id=$1 and status=$2 order by league_date asc", [broadcaster_id, 1]);
      
      //console.log(broadcaster_id);
      // IF A USER ISN'T FOUND
      if (typeof results.rows !== 'undefined' && results.rows.length == 0) {
        return res.json({ status: 201, success: false, message: 'results not found' });
      }
    // console.log(results.rows);
    return res.json({
            "status": 200,
            'data':results.rows,
          });
    } catch (err) {
      return next(err);
    }
  }else{
  return res.json({ status: 200, message: "Missing required parameters" });
  }
});

router.get("/get-broadcaster-list", async function(req, res, next) {
  try {

    const results = await db.query("SELECT cm.id, cm.broadcaster_id, cm.compitition_name, cm.start_date, cm.start_time, cm.slot_time, start_date_time as league_date, now()  FROM competition cm inner join users u on cm.broadcaster_id = u.id order by league_date asc" );
    
    //console.log(broadcaster_id);
    // IF A USER ISN'T FOUND
    if (typeof results.rows !== 'undefined' && results.rows.length == 0) {
      return res.json({ status: 201, success: false, message: 'results not found' });
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

router.get("/go-live/:competition_id", async function(req, res, next) {
  if(req.params.competition_id){
    try {
      let competition_id = req.params.competition_id;
      const appID = '407deb8eaa634e0482b0f5481eefd1e9';
      const appCertificate = '93a1d8b056cf45e59bb41f0765fdfe5e';
      const channelName = (Math.random()+1).toString(36).slice(2, 18);
      //const channelName = 'testchannel';
      const uid = 0;
      const account = "1";
      const role = RtcRole.PUBLISHER;

      const expirationTimeInSeconds = 3600

      const currentTimestamp = Math.floor(Date.now() / 1000)

      const privilegeExpiredTs = currentTimestamp + expirationTimeInSeconds

      // IMPORTANT! Build token with either the uid or with the user account. Comment out the option you do not want to use below.

      // Build token with uid
      const tokenA = RtcTokenBuilder.buildTokenWithUid(appID, appCertificate, channelName, uid, role, privilegeExpiredTs);
      console.log("Token With Integer Number Uid: " + tokenA);

      await db.query("UPDATE competition set channel_name =$1, token=$2, is_live=$3 where id = $4 RETURNING *", [channelName, tokenA, true, competition_id]);

      return res.json({
                "status": 200,
                //'data':results.rows,
                'tokenA': tokenA,
                'channelName':channelName
              });
    } catch (err) {
      return next(err);
    }
  }else{
  return res.json({ status: 200, message: "Missing required parameters" });
  }
});

router.get("/edit_competition/:id", async function(req, res, next) {
  const competition_id = req.params.id;
  var results = [];
  try {
    const competition = await db.query("SELECT *, start_date_time as league_date FROM competition where id =$1 ", [competition_id]);
    // IF A Competition ISN'T FOUND
    if (typeof competition.rows !== 'undefined' && competition.rows.length == 0) {
      return res.status(401).json({ status: 201, success: false, message: 'results not found' });
    }
    var competitionObj = competition.rows;
    results.push({competition : competitionObj});

    // GET QUESTIONS ACCORDING TO COMPETITION ID
    const question = await db.query("SELECT competition_question.* FROM competition_question_mapping JOIN competition ON competition_question_mapping.competition_id::integer=competition.id JOIN competition_question ON competition_question_mapping.question_id::integer=competition_question.id WHERE competition_question_mapping.competition_id=$1", [
      competition_id]);
      // IF A question ISN'T FOUND
    if (typeof question.rows !== 'undefined' && question.rows.length == 0) {
      return res.status(401).json({ success: false, message: 'Question not found' });
    }
    var questionObj = question.rows;
    results.push({question : questionObj});

    // GET NARRATION ACCORDING TO COMPETITION ID
    const narration = await db.query('SELECT * FROM competition_narration_company_details WHERE competition_id = $1', [competition_id]);
    // IF A narration ISN'T FOUND
    if (typeof narration.rows !== 'undefined' && narration.rows.length == 0) {
      return res.status(401).json({ success: false, message: 'Narration not found' });
    }
    var narrationObj = narration.rows;
    results.push({narration : narrationObj});

    // GET competition_set_audience ACCORDING TO COMPETITION ID
    const set_audience = await db.query('SELECT * FROM competition_set_audience WHERE competition_id = $1', [competition_id]);
    // IF A set_audience ISN'T FOUND
    if (typeof set_audience.rows !== 'undefined' && set_audience.rows.length == 0) {
      return res.status(401).json({ success: false, message: 'Set Audience not found' });
    }
    var set_audienceObj = set_audience.rows;
    results.push({setAudience : set_audienceObj});

   // console.log(results.rows);
   return res.json({
           "status": 200,
           'data':results,
         });
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
        var quiz_question = await db.query("UPDATE competition_question SET question_name=$1,answer=$2,option2=$3,option3=$4,option4=$5,note=$6,level=$7,modified_by=$8, duration=$9, option1=$10 WHERE id=$11 RETURNING *",[question.question, 'a',  question.option2, question.option3, question.option4, question.note, question.level, question.created_by, question.duration, question.option1, question.id]);

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

//delete draft data
router.delete("/delete_question/:id", async function(req, res, next) {
  try {
    const result = await db.query("DELETE FROM competition_question WHERE id=$1", [
      req.params.id
    ]);
    return res.json({ message: "Record deleted" });
  } catch (err) {
    return next(err);
  }
});

router.get("/fcm", async function(req, res, next){
            const push_title= 'New competition in Daily Competition';
            const push_body = 'You have been invited to play for Daily Competition'; 
            const push_type =  'competition_invite_user';
            //update notification table
            let competition_id = 79;
            let invited_user_id = 136;
            let user_id = 39;
            //console.log(invited_user_id);
            const notify = await db.query("INSERT INTO notification (module,type,title,payload,sent_to,status,created_by,ref_id) VALUES ($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *",
              ['dc',push_type,push_title,push_body,invited_user_id,'0',user_id,competition_id]
              );
            //////////////FCM/////////////
              //registration_ids
              const deviceQuery = await db.query("SELECT * FROM device WHERE user_id=$1", [invited_user_id]);
              var regTokens=[];
            
              for(var i =0; i< deviceQuery.rows.length; i++){
                var questionObj=deviceQuery.rows[i];
                regTokens.push(questionObj.device_token);
              }
              var message = { 
                // to: '', 
                registration_ids:regTokens,
                  collapse_key: 'green',
                  
                  notification: {
                      title: push_title, 
                      body: push_body,
                      image: 'https://allam-stg.s3.ap-south-1.amazonaws.com/daily_competition/1623740844864-logo.png'
                  },
                  
                  data: {  
                      "competition_invite_user":{
                            "game_id": competition_id,
                            "competition_type":'daily',
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
            return res.json({ message: "Record added" });
});

router.post("/update_status/:id", async function(req, res, next) 
{

  if( req.body.status)
  {
    try {
      let competition_id = req.params.id;
      const result = await db.query("UPDATE competition set status =$1 WHERE id=$2 RETURNING *", [
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

//delet competition data
router.delete("/delete_competition/:id", async function(req, res, next) {
  try {
    let competition_id = req.params.id;
    const result = await db.query("DELETE FROM competition WHERE id=$1", [
      competition_id
    ]);
    await db.query("DELETE FROM competition_narration_company_details WHERE competition_id=$1", [
      competition_id
    ]);
    await db.query("DELETE FROM competition_set_audience WHERE competition_id=$1", [
      competition_id
    ]);
    
    await db.query("DELETE FROM competition_question B USING competition_question_mapping C WHERE B.id = C.question_id::integer AND  C.competition_id =$1", [
      competition_id]);
    await db.query("DELETE FROM competition_question_mapping WHERE competition_id=$1", [
      competition_id
    ]);
    return res.json({ message: "Record deleted" });
  } catch (err) {
    return next(err);
  }
});

router.get("/competition-slot", async function(req, res, next) {
  try {
    const results = await db.query("SELECT id, slot_time FROM competition WHERE competition_type='daily' and created_at >= now()::date + interval '1h' ");
    return res.json(results.rows);
  } catch (err) {
    return next(err);
  }
});
router.get("/competition-slot-special", async function(req, res, next) {
  try {
    const results = await db.query("SELECT id, slot_time FROM competition WHERE competition_type='special' and created_at >= now()::date + interval '1h' ");
    return res.json(results.rows);
  } catch (err) {
    return next(err);
  }
});



/*router.get("/categories/:id", async function(req, res, next) {
  try {

    const results = await db.query("SELECT id, category_group_id, category_ids FROM category_group_relation WHERE category_group_id=$1", [
      req.params.id
    ]);

    return res.json(results.rows);
  } catch (err) {
    return next(err);
  }
});

router.get("/:id", async function(req, res, next) {
  try {
    const results = await db.query("SELECT * FROM category_group WHERE id=$1", [
      req.params.id
    ]);
    //console.log(results.rows);
    return res.json(results.rows);
  } catch (err) {
    return next(err);
  }
});*/

/*var cpUpload = upload.fields([{
           name: 'logo', maxCount: 1
         }, {
           name: 'app_logo', maxCount: 1
         }, {
           name: 'company_logo', maxCount: 1
         }, {
           name: 'image_upload', maxCount: 8
         }]);*/

router.post("/addCompetition", upload.fields([{
           name: 'logo', maxCount: 1
         }, {
           name: 'app_logo', maxCount: 1
         }, {
           name: 'company_logo', maxCount: 1
         }, {
           name: 'image_upload', maxCount: 8
         }, {
           name: 'narration_url', maxCount: 1
        }, {
          name: 'notification_logo', maxCount: 1
        }]), async function(req, res, next) { console.log('req.body '+req.body.compitition_name);
  if(req.body.compitition_name  && req.body.promotion_type && req.body.slot_time)
  {
    try {
      
      //console.log('req.body '+req.body.fileData);
      //console.log("fileName "+ req.files.logo[0].key);
      //console.log("fileObj "+ JSON.stringify(req.files));
      //console.log("fileObj "+ req.files[0].fieldname);
      //const url = req.protocol + '://' + req.get('host');
      //icon: 'http://52.66.58.148/allam_cms/api/public/' + req.file.filename;
      
      if(Object.keys(req.files).length !== 0 ){
        var logo =  req.files.logo[0].key;
      }else{
        return res.json({ message: "Competition logo can not be blank." });
      }
      if(req.files && req.files.app_logo){
        var app_logo =  req.files.app_logo[0].key;
      }else{
        var app_logo =  '';
      }
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
      if(req.files && req.files.image_upload){
        var image_upload =  req.files.image_upload[0].key;
      }else{
        var image_upload =  '';
      }
      if(req.files && req.files.notification_logo){
        var notification_logo =  req.files.notification_logo[0].key;
        }else{
        var notification_logo =  '';
      }
      // console.log('inside');
       console.log('logo', logo);
      // console.log('app_logo', app_logo);
      // console.log('company_logo', company_logo);
      // console.log('image_upload', image_upload);
      // throw new Error('your die message here');
     
      /*const result = await db.query("INSERT INTO competition (compitition_name,description,logo,start_date,end_date,start_time,end_time,promotion_type,instagram_url,twitter_url,snapchat_url,app_name,apple_store_url,google_play_url,affiliate_url,slot_time, competition_type) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17) RETURNING *",
        [req.body.compitition_name, req.body.description, logo, req.body.start_date, req.body.end_date, req.body.start_time, req.body.end_time, req.body.promotion_type, req.body.instagram_url, req.body.twitter_url, req.body.snapchat_url, req.body.app_name, req.body.apple_store_url, req.body.google_play_url, req.body.affiliate_url, req.body.slot_time, req.body.competition_type]
      );*/
      //console.log('status '+req.body.status);
      //console.log('competition_type '+req.body.competition_type);
      //throw new Error('your die message here');

      // (1 means social, 2 means download, 3 means affiliate). 
      let filedata = JSON.parse(req.body.fileData);
      let promotion_type = '';
      if(req.body.promotion_type == 'social_media'){
        promotion_type = 1;
      }else if(req.body.promotion_type == 'Download'){
        promotion_type = 2;
      }else if(req.body.promotion_type == 'Affiliate'){
        promotion_type = 3;
      }

      var date_timeISO = new Date(req.body.start_date_time); // .toISOString();
      var start_date = new Date(req.body.start_date).toISOString();
      var date_timeUTC = new Date(date_timeISO).toUTCString();
      dateString = date_timeUTC.split(' ').slice(0, 4).join(' ');
      
      //timeString = date_timeUTC.split(' ').slice(4, 5).join(' ');
      var enddate_timeISO = new Date(req.body.end_date_time).toISOString();
      var enddate_timeUTC = new Date(enddate_timeISO).toUTCString();
      enddateString  = enddate_timeUTC.split(' ').slice(0, 4).join(' ');

      if(req.body.bypass_audience == 'yes'){
        set_audience = false;
      }else{
        set_audience = true;
      }

      console.log('date_timeISO', date_timeISO);
      console.log('date_timeUTC', date_timeUTC);
      const result = await db.query("INSERT INTO competition (compitition_name, description, logo,start_date, end_date, start_time, end_time, promotion_type, instagram_url,facebook_url, twitter_url, snapchat_url,app_logo, app_name, apple_store_url, google_play_url, affiliate_url, slot_time, competition_type, waiting_time, status, broadcaster_id, start_date_time, end_date_time, set_audience, narration_type, notification_type, notification_text, notification_logo, apple_schema) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25,$26,$27,$28, $29,$30) RETURNING *",
        [req.body.compitition_name, req.body.description, logo, dateString, enddateString, req.body.start_time, req.body.end_time, promotion_type, req.body.instagram_url,req.body.facebook_url, req.body.twitter_url, req.body.snapchat_url, app_logo, req.body.app_name, req.body.apple_store_url, req.body.google_play_url, req.body.affiliate_url, req.body.slot_time, req.body.competition_type, req.body.waiting_time, req.body.status,req.body.broadcaster_id,date_timeISO, enddate_timeISO, set_audience, req.body.narration_type, req.body.notification_type, req.body.notification_text, notification_logo, req.body.apple_schema]
      );
      //console.log(JSON.stringify(result.rows, null, 2));
      console.log("results "+result.rows[0].id);
      //console.log("length "+filedata.length);
      //console.log(req.body.category_ids);
      
      if (result.rows[0].id) {
        /*for (var i = 0; i< filedata.length; i++) {
          filedata
        }*/

        const competitionNarrationCompany = db.query("INSERT INTO competition_narration_company_details (competition_id, narration_type, narration_url, narration_text, narration_time, company_logo, company_name, company_link, company_about, live_stream_url) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10) RETURNING *",
          [result.rows[0].id, req.body.narration_type, narration_url, req.body.narration_text, req.body.narration_time, company_logo, req.body.company_name, req.body.company_link, req.body.company_about, req.body.live_stream_url]
        );

        const competitionSetAudience = db.query("INSERT INTO competition_set_audience (competition_id, gender, age_range, city, state, country, nationality, area_locality, push_notification, title, image_upload, audience_description) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12) RETURNING *",
          [result.rows[0].id, req.body.gender, req.body.age_range, req.body.city, req.body.state, req.body.country, req.body.nationality, req.body.area_locality, req.body.push_notification, req.body.title, image_upload, req.body.audience_description]
        );

        var output;
        for ( var key = 0; key < filedata.length ; key++ ) {
             tVal = filedata[key];//some manipulation of someArr[key]
             (function(val){
              // Here check upload image is empty or not 
              if(filedata[key].question_file_url == "" || filedata[key].question_file_url == null)
              {
                var question_image_url = '';
                db.query( "INSERT INTO competition_question (question_name, category_id, question_file_url, answer, option1, option2, option3, option4, level, duration, file_type, competition_id) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12) RETURNING *",
                [filedata[key].question, filedata[key].category_id, filedata[key].question_file_url, filedata[key].answer, filedata[key].option1, filedata[key].option2, filedata[key].option3, filedata[key].option4, filedata[key].level, filedata[key].duration, filedata[key].file_type, result.rows[0].id], function(err, res, fields) {
                    if ( err ) {
                     console.log( 'competition_question '+err );
                    } else {
                     //output.push( rows[0].id );//push query output to this variable
                     console.log('insertId '+res.rows[0].id)
                     console.log('competitionQuestionMapping.rows'+JSON.stringify(res.rows));
                     const competitionQuestionMapping =  db.query(
                        "INSERT INTO competition_question_mapping (competition_id, question_id) VALUES ($1,$2) RETURNING *",
                        [result.rows[0].id, res.rows[0].id]
                      );

                  }
                });
              }else{  // Here check upload image and upload on s3 and insert into DB

                if (fs.existsSync(filedata[key].question_file_url)) { // check here file path put in xlsx file but path not exists.
                var filename = filedata[key].question_file_url.replace(/^.*[\\\/]/, '');
                const fileContent = fs.readFileSync(filedata[key].question_file_url);
                  // Setting up S3 upload parameters
                  const fileName = 'daily_competition/question/'+Date.now()+"-"+filename.toLowerCase().split(' ').join('-');
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
                      db.query( "INSERT INTO competition_question (question_name, category_id, question_file_url, answer, option1, option2, option3, option4, level, duration, file_type, competition_id) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12) RETURNING *",
                        [val.question, val.category_id, question_image_url, val.answer, val.option1, val.option2, val.option3, val.option4, val.level, val.duration, val.file_type, result.rows[0].id], function(err, res, fields) {
                           if ( err ) {
                             console.log( 'competition_question '+err );
                           } else {
                             //output.push( rows[0].id );//push query output to this variable
                             console.log('insertId '+res.rows[0].id)
                             console.log('competitionQuestionMapping.rows'+JSON.stringify(res.rows));
                             const competitionQuestionMapping =  db.query(
                                "INSERT INTO competition_question_mapping (competition_id, question_id) VALUES ($1,$2) RETURNING *",
                                [result.rows[0].id, res.rows[0].id]
                              );

                           }
                       });

                  });
                } /* else{ // check here else part of file path put in xlsx file but path blank or ignore.
                  db.query( "INSERT INTO competition_question (question_name, category_id, answer, option1, option2, option3, option4, level, duration, file_type, competition_id) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11) RETURNING *",
                  [filedata[key].question, filedata[key].category_id, filedata[key].answer, filedata[key].option1, filedata[key].option2, filedata[key].option3, filedata[key].option4, filedata[key].level, filedata[key].duration, 'text', result.rows[0].id], function(err, res, fields) {
                      if ( err ) {
                      console.log( 'competition_question '+err );
                      } else {
                      //output.push( rows[0].id );//push query output to this variable
                      console.log('insertId '+res.rows[0].id)
                      console.log('competitionQuestionMapping.rows'+JSON.stringify(res.rows));
                      const competitionQuestionMapping =  db.query(
                          "INSERT INTO competition_question_mapping (competition_id, question_id) VALUES ($1,$2) RETURNING *",
                          [result.rows[0].id, res.rows[0].id]
                        );

                    }
                  });
                } */
             }

             })(tVal);
        }

        // Object.keys(filedata).forEach(function(key) {
        //     //console.log(key, filedata[key]);
        //     //console.log('question_name '+filedata[key].question);
        //     const competitionQuestion = db.query("INSERT INTO competition_question (question_name, category_id, question_file_url, answer, option2, option3, option4, level) VALUES ($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *",
        //     [filedata[key].question, filedata[key].category_id, filedata[key].question_file_url, filedata[key].answer, filedata[key].option2, filedata[key].option3, filedata[key].option4, filedata[key].level]);

        //     //console.log('competitionQuestion '+competitionQuestion.rows[0].id);
        //     /*if (competitionQuestion.rows[0].id) {
        //       const competitionQuestionMapping =  db.query(
        //         "INSERT INTO competition_question_mapping (question_id, competition_id) VALUES ($1,$2) RETURNING *",
        //         [result.rows[0].id, competitionQuestion.rows[0].id]
        //       );
        //       console.log('competitionQuestionMapping.rows'+result.rows[0].id);
        //     }*/

        // });
      }
      
      //res.send('Successfully uploaded ' + req.file + ' files!')
      return res.json({ status: 200, message: "Record inserted" });
    } catch (err) {
      return next('Error '+err);
    }
  }
  else{
     return res.json({ message: "Missing required parameters or slot_time is Missing" });
  }
});

router.post("/updateCompetition/:competition_id", upload.fields([{
  name: 'logo', maxCount: 1
  }, {
    name: 'app_logo', maxCount: 1
  }, {
    name: 'company_logo', maxCount: 1
  }, {
    name: 'image_upload', maxCount: 8
  }, 
  , {
    name: 'narration_url', maxCount: 1
 }, {
    name: 'notification_logo', maxCount: 1
  }]), async function(req, res, next) { console.log('req.body '+req.body.compitition_name);
  if(req.body.compitition_name && req.body.promotion_type && req.body.narration_type && req.params.competition_id)
  {
  try {

  //console.log('req.body '+req.body.fileData);
  //console.log("fileName "+ req.files.logo[0].key);
  //console.log("fileObj "+ JSON.stringify(req.files));
  //console.log("fileObj "+ req.files[0].fieldname);
  //const url = req.protocol + '://' + req.get('host');
  //icon: 'http://52.66.58.148/allam_cms/api/public/' + req.file.filename;
  let competition_id = req.params.competition_id;

  if(Object.keys(req.files).length !== 0 && req.files.logo){
    var logo =  req.files.logo[0].key;
    await db.query("UPDATE competition set logo =$1 where id = $2 RETURNING *", [logo, competition_id]);
  }else{
  //return res.json({ message: "Competition logo can not be blank." });
  }
  if(req.files && req.files.app_logo){
  var app_logo =  req.files.app_logo[0].key;
  await db.query("UPDATE competition set app_logo =$1 where id = $2 RETURNING *", [app_logo, competition_id]);
  }else{
  var app_logo =  '';
  }
  if(req.files && req.files.company_logo){
  var company_logo =  req.files.company_logo[0].key;
  await db.query("UPDATE competition_narration_company_details set company_logo =$1 where competition_id = $2 RETURNING *", [company_logo, competition_id]);
  }else{
  var company_logo =  '';
  }
  if(req.files && req.files.image_upload ){
  var image_upload =  req.files.image_upload[0].key;
  await db.query("UPDATE competition_set_audience set image_upload =$1 where competition_id = $2 RETURNING *", [image_upload, competition_id]);
  }else{
  var image_upload =  '';
  }
  if(req.files && req.files.narration_url){
    var narration_url =  req.files.narration_url[0].key;
    await db.query("UPDATE competition_narration_company_details set narration_url =$1 where competition_id = $2 RETURNING *", [narration_url, competition_id]);
  }else{
    var narration_url =  '';
  }
  if(req.files && req.files.notification_logo){
    var notification_logo =  req.files.notification_logo[0].key;
    await db.query("UPDATE competition set notification_logo =$1 where id = $2 RETURNING *", [notification_logo, competition_id]);
    }else{
    var notification_logo =  '';
    }
  
  
  //console.log('competition_dt '+req.body.start_date_time);
  //var date_time = req.body.start_date_time;
   var date_timeUTC = new Date(req.body.start_date_time).toUTCString();
   dateString = date_timeUTC.split(' ').slice(0, 4).join(' ');
  // timeString = date_timeUTC.split(' ').slice(4, 5).join(' ');

  var date_timeISO = new Date(req.body.start_date_time);//.toISOString();
  var start_date = new Date(req.body.start_date).toISOString();
  var date_timeUTC = new Date(date_timeISO).toUTCString();

  var enddate_timeISO = new Date(req.body.end_date_time);//.toISOString();
      var enddate_timeUTC = new Date(enddate_timeISO).toUTCString();
      enddateString  = enddate_timeUTC.split(' ').slice(0, 4).join(' ');
      
  console.log('date_timeISO', date_timeISO);
  console.log('date_timeUTC', date_timeUTC);

  //return res.json({ status: 200,  dateString: dateString, start_date: start_date, date_timeISO: date_timeISO });
  //throw new Error('your die message here');

  if(req.body.bypass_audience == 'yes'){
    set_audience = false;
  }else{
    set_audience = true;
  }

  // (1 means social, 2 means download, 3 means affiliate). 
  let promotion_type = req.body.promotion_type;
  if(req.body.promotion_type == 'social_media'){
  promotion_type = 1;
  }else if(req.body.promotion_type == 'Download'){
  promotion_type = 2;
  }else if(req.body.promotion_type == 'Affiliate'){
  promotion_type = 3;
  }

  const result = await db.query("UPDATE competition set compitition_name=$1, description=$2, start_date=$3, end_date=$4, start_time=$5, end_time=$6, promotion_type=$7, instagram_url=$8, twitter_url=$9,snapchat_url=$10, app_name=$11, apple_store_url=$12, google_play_url=$13, affiliate_url=$14, slot_time=$15, waiting_time=$16, status=$17, start_date_time=$18, broadcaster_id=$19, set_audience=$20, narration_type=$21, notification_type=$22, notification_text=$23, end_date_time=$24, apple_schema=$25 where id = $26 RETURNING *",
  [req.body.compitition_name, req.body.description, dateString, enddateString, req.body.start_time, req.body.end_time, promotion_type, req.body.instagram_url, req.body.twitter_url, req.body.snapchat_url, req.body.app_name, req.body.apple_store_url, req.body.google_play_url, req.body.affiliate_url, req.body.slot_time, req.body.waiting_time, req.body.status, date_timeISO, req.body.broadcaster_id, set_audience, req.body.narration_type, req.body.notification_type, req.body.notification_text, enddate_timeISO, req.body.apple_schema, competition_id]
  );
  //console.log(JSON.stringify(result.rows, null, 2));
  console.log("results "+result.rows[0].id);
  //console.log("length "+filedata.length);
  //console.log(req.body.category_ids);
  //throw new Error('your die message here');
    const competitionNarrationCompany = db.query("UPDATE competition_narration_company_details set  narration_type=$1, narration_url=$2, narration_text=$3, narration_time=$4, company_name=$5, company_link=$6, company_about=$7, live_stream_url=$8 where competition_id = $9 RETURNING *",
    [ req.body.narration_type, req.body.narration_url, req.body.narration_text, req.body.narration_time, req.body.company_name, req.body.company_link, req.body.company_about, req.body.live_stream_url, competition_id]
    );

    const competitionSetAudience = db.query("UPDATE competition_set_audience set gender=$1, age_range=$2, city=$3, state=$4, country=$5, nationality=$6, area_locality=$7, push_notification=$8, title=$9, audience_description=$10 where competition_id = $11 RETURNING *",
    [req.body.gender, req.body.age_range, req.body.city, req.body.state, req.body.country, req.body.nationality, req.body.area_locality, req.body.push_notification, req.body.title, req.body.audience_description, competition_id]
    );

  //res.send('Successfully uploaded ' + req.file + ' files!')
  return res.json({ status: 200, message: "Record inserted" });
  } catch (err) {
  return next('Error '+err);
  }
  }
  else{
  return res.json({ message: "Missing required parameters or slot_time is Missing" });
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


router.get("/notifi", async function(req, res, next){
  //if(req.body.status == 1){ // check here for status 1 
  let competition_id = 79;
    const competition = await db.query("select id, competition_name, competition_type from competition WHERE id=$1 ", [
      competition_id
    ]);
    var competitionType = competition.rows;
    var competition_name = competitionType[0].competition_name;
    var competition_type = competitionType[0].competition_type;
    if(competition_type == 'daily'){
      competition_type_name = 'Daily Competition';
    }else if(competition_type == 'special'){
      competition_type_name = 'Special Competition';
    }

    const audienceCompetition = await db.query("select id, competition_id, gender, push_notification from competition_set_audience WHERE competition_id=$1 ", [
      competition_id
    ]);

    var setAudience = audienceCompetition.rows;
    var push_notification = setAudience[0].push_notification;
    if(push_notification == 'yes'){ // check here push notification is yes
      gender = setAudience[0].gender;
      if(gender == 'male'){
        gender_name = 'Male';
        users = await db.query("select id, email, gender from users WHERE gender=$1 and status=$2 ", [
          gender_name, 1
        ]);
      }else if(gender == 'female'){
        gender_name = 'Female';
        users = await db.query("select id, email, gender from users WHERE gender=$1 and status=$2", [
          gender_name, 1
        ]);
      }else if(gender == 'both'){
        gender_name = 'Male';
        gender_name1 = 'Female';
        users = await db.query("select id, email, gender from users WHERE (gender=$1 or gender=$2) and status=$3 ", [
          gender_name, gender_name1, 1
        ]);
      }
      console.log('users.rows.length', users.rows.length);
      //console.log(JSON.stringify(users.rows));
      
      //throw new Error('your die message here');
      for(var i =0; i< users.rows.length; i++){
        let invited_user_id=users.rows[i].id;
        ///FCM
        const push_title= 'مسابقة جديدة في '+competition_name+' '+competition_type_name;
        const push_body = 'لقد تمت دعوتك لتلعب  '+competition_name+' '+competition_type_name; 
        const push_type =  'competition_invite_user';
        //update notification table
        //let invited_user_id = usersObj.id;
        let user_id = 39;
        console.log(invited_user_id);
        const notify = await db.query("INSERT INTO notification (module,type,title,payload,sent_to,status,created_by,ref_id) VALUES ($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *",
          ['dc',push_type,push_title,push_body,invited_user_id,'0',user_id,competition_id]
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
                        "competition_type":competition_type,
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

    }
    return res.json({"message": "succss"});
    //throw new Error('your die message here');  
  //}
});

async function notification(req, res, next) {
  //  router.get("/check_noti", async function(req, res, next) {
  
    //let competition_id = 80; now() - INTERVAL '15 min' as less
    const competition = await db.query("select id, compitition_name, promotion_type, affiliate_url, competition_type, notification_type, notification_text, notification_logo, start_date_time, NOW() from competition WHERE start_date_time >=now() and status =1 ");
    var competitionType = competition.rows;
    // IF A USER ISN'T FOUND
    if (typeof competition.rows !== 'undefined' && competition.rows.length == 0) {
      return competition;
    }
  
    for (let index = 0; index < competition.rows.length; index++) {
      
      //console.log(competitionType);
      var competition_id = competitionType[index].id;
      var competition_name = competitionType[index].compitition_name;
      var competition_type = competitionType[index].competition_type;
      var promotion_type = competitionType[index].promotion_type;
      var affiliate_code = competitionType[index].affiliate_url;
      var notification_type = competitionType[index].notification_type;
      var notification_text = competitionType[index].notification_text;
      var notification_logo = competitionType[index].notification_logo;
      var competition_type_name = 'المسابقة الخاصة';
      if(competition_type == 'daily'){
        //competition_type_name = 'المسابقة اليومية';
        competition_type_name = 'سباق التحدي';
        module = 'dc';
      }else if(competition_type == 'special'){
        competition_type_name = 'المسابقة الخاصة';
        module = 'sc';
      }
  
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
        const audienceCompetition = await db.query("select id, competition_id, gender, age_range, city, country, nationality, push_notification from competition_set_audience WHERE competition_id=$1 ", [  competition_id ]);
    
        var setAudience = audienceCompetition.rows;
        var push_notification = setAudience[0].push_notification;
        var gender = setAudience[0].gender;
        var age_range = setAudience[0].age_range;
        var country_id = setAudience[0].country;
        var nationality_id = setAudience[0].nationality;
        console.log(typeof country_id)
        console.log('country_id', country_id)
        if(typeof country_id !== 'undefined' && country_id != ''){
          const countryData = await db.query("select id, name, country_code, status from master_country WHERE id=$1 ", [  country_id ]);
    
          var countryRow = countryData.rows;
          var country = countryRow[0].name;
        } 
        if(typeof nationality_id !== 'undefined' && nationality_id != ''){
          const nationalityData = await db.query("select id, name, status from master_nationality WHERE id=$1 ", [  nationality_id ]);
    
          var nationalityRow = nationalityData.rows;
          var nationality = nationalityRow[0].name;
          // console.log(JSON.stringify(nationalityRow))
        }
        if(push_notification == 'yes'){ // check here push notification is yes
          //const users = await db.query("select id, email, gender from users WHERE status=$1 and country=$2 and nationality=$3 and gender=$4 and age=$5 ", [ 1, country, nationality, gender, age_range]);
          
  
          var query = "select id, email, gender from users WHERE status=$1 and country=$2 and nationality=$3 ";
        
        if(typeof gender !== 'undefined' && gender =='both'){
          gender_name = '1';
          gender_name1 = '2';
          query +=  " and (gender='"+gender_name+"' or gender='"+gender_name1+"' OR gender='0')";
        }else if(typeof gender !== 'undefined' && gender =='male') {
          gender_name = '1';
          query +=  " and (gender='"+gender_name+"')";
        }else if(typeof gender !== 'undefined' && gender =='female') {
          gender_name = '2';
          query +=  " and (gender='"+gender_name+"')";
        }
        if(typeof age_range !== 'undefined' && age_range !='') {
          var fields = age_range.split('-');
          var min_age = fields[0];
          var max_age = fields[1];
          query +=  " and (age>='"+min_age+"' and age<='"+max_age+"')";
        }
        query += " order by first_name asc ";
        console.log(query, [ 1, country, nationality, gender, age_range]);
  
        const users = await db.query(query , [ 1, country, nationality]);
        console.log('users.rows.length', users.rows.length);
          //console.log(JSON.stringify(users.rows));
        
          //throw new Error('your die message here');
          for(var i =0; i< users.rows.length; i++){
            let invited_user_id=users.rows[i].id;
            ///FCM
            if(promotion_type == 3){
              push_title = 'مسابقة جديدة في "'+competition_type_name+'" بعنوان "'+competition_name+'"   رمز المسابقة '+affiliate_code ;
            
              push_body = notification_text; // 'لقد تمت دعوتك لتلعب  "'+competition_name+'" '+competition_type_name+' مع رمز '+affiliate_code; 
            }else if(promotion_type == 2) {
              push_title = 'مسابقة جديدة في "'+competition_type_name+'" بعنوان "'+competition_name+'"  ' ;
              push_body = notification_text; //'لقد تمت دعوتك لتلعب  "'+competition_name+'" '+competition_type_name ; 
            }else {
              push_title = 'مسابقة جديدة في "'+competition_type_name+'" بعنوان "'+competition_name+'"  ' ;
              push_body = notification_text; //'لقد تمت دعوتك لتلعب  "'+competition_name+'" '+competition_type_name ; 
            }
            
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
                      body: push_body,
                      image: notification_logo
                  },
                  
                  data: {  
                      "competition_invite_user":{
                            "game_id": competition_id,
                            "competition_type":competition_type,
                            "sender_id": user_id,
                            "user_id":invited_user_id
                      }
                  }
              };
              
              fcm.send(message, function(err, response){
                  if (err) { console.log('err', JSON.stringify(err))
                      console.log("Something has gone wrong!");
                  } else {
                      console.log("Successfully sent with response: ", response);
                  }
              });
            /////////END FCM/////////////
  
          }
        } // end push notification check
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


/*
*********************************
* Function for user selection option (Reports)
*********************************
*/

router.post("/reports_competition_name", async function(req, res, next) {
  try {
    //let competition_type = req.params.competition_type;
    let competition_type = req.body.competition_type;
    //let gender = req.body.gender;
    
    let created_at = req.body.created_at;
    var date_timeUTC = new Date(req.body.created_at).toUTCString();
    var  dateString = date_timeUTC.split(' ').slice(0, 4).join(' ');
      timeString = date_timeUTC.split(' ').slice(4, 5).join(' ');
    var convertDate = new Date(dateString);
    var curr_date = convertDate.getDate();
    var curr_month = convertDate.getMonth() + 1; //Months are zero based
    var curr_year = convertDate.getFullYear();
    var dateStringFinal = curr_year + "-" + curr_month + "-" + curr_date;

      console.log('dateString', dateString);
    console.log('dateStringFinal', dateStringFinal);
    
      var query = "SELECT c.id, c.compitition_name, c.start_date_time FROM competition as c inner join competition_download as cd on cd.competition_id= c.id where c.status=$1 and c.competition_type=$2";
      
      if(typeof created_at !== 'undefined' && created_at != ''){
        query +=  " and date(c.start_date)='"+dateStringFinal+"'";
      }
      query += " group by c.id order by compitition_name asc ";
      console.log(query, [ 1, competition_type]);
      results = await db.query(query , [ 1, competition_type]);
    

    // IF A USER ISN'T FOUND
    if (typeof results.rows !== 'undefined' && results.rows.length == 0) {
      return res.json({ status: 201, success: false, message: 'competition not found' });
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
router.post("/quiz_reports", async function(req, res, next) {
  try {
    let competition_id = req.body.competition_id;
    let competition_type = req.body.competition_type;
    let created_at = req.body.created_at;
    if(created_at=='1970-01-01'){
      created_at= new Date();
    }
    var date_timeUTC = new Date(req.body.created_at).toUTCString();
    var  dateString = date_timeUTC.split(' ').slice(0, 4).join(' ');
      timeString = date_timeUTC.split(' ').slice(4, 5).join(' ');
    var convertDate = new Date(dateString);
    var curr_date = convertDate.getDate();
    var curr_month = convertDate.getMonth() + 1; //Months are zero based
    var curr_year = convertDate.getFullYear();
    var dateStringFinal = curr_year + "-" + curr_month + "-" + curr_date;
    console.log(competition_id+' '+competition_type+' '+dateStringFinal);
    //throw new Error('your die message here');
    /* var quiz_type =  '';
    if(!req.params.type){
      return res.status(401).json({ success: false, message: 'Quiz type can not blank' });
    }else if(req.params.type == 'daily'){
      quiz_type = 'daily_competition';
    }else{
      quiz_type = 'special_competition';
    } */
    
      //console.log("SELECT DISTINCT ON (user_id) user_id FROM user_answer as cqt  WHERE quiz_id="+competition_id);
        //const competition = await db.query("SELECT DISTINCT ON (user_id) user_id FROM user_answer as cqt  WHERE quiz_id=$1 " , [competition_id]);
        var ans_query = "SELECT  c.compitition_name, c.start_date_time, cd.user_id, cd.click_count, cd.app_download, cd.device_type FROM competition_download as cd  inner join competition as c on cd.competition_id= c.id::INTEGER  where cd.competition_id =$1 and date(start_date)=$2";
        // console.log('before print--')
        // console.log(ans_query);
        // console.log('after print--')

        //ans_query += " group by user_id";
        console.log(ans_query, [competition_id, dateStringFinal]);
  
        const competition = await db.query(ans_query, [competition_id, dateStringFinal])
  
        if (typeof competition.rows !== 'undefined' && competition.rows.length == 0) {
          return res.json({  status: 201, data:[], message: 'لا يؤجد نتيجة للمسابقة المختارة' // 'Results not found for selected competition' 
        });
        }
        var refObj = competition.rows;
        var result = [];
        var totalAndroid = 0;
        var totalIos = 0;
        
        for(var i =0; i< refObj.length; i++){
          var ress = {};
          var query = "SELECT cqt.user_id, cqt.competition_id, cqt.click_count, cqt.app_download, cqt.device_type, users.username, users.first_name || ' ' || users.last_name as full_name, users.email, users.country, users.nationality, users.user_avatar FROM competition_download as cqt JOIN users on users.id = cqt.user_id::integer  WHERE user_id=$1 AND competition_id=$2";
  
          
          console.log(query , [refObj[i].user_id, competition_id]);
          var userAnsArr = await db.query(query , [refObj[i].user_id, competition_id]);
  
            var userAnsObj = userAnsArr.rows;
            var totalUser = Object.keys(userAnsObj).length;
            //console.log(JSON.stringify(userAnsObj));
            
           
            console.log(userAnsObj[0]);
            //var user_answer = userAnswer.push(userAnsObj[0].user_id);
            
            ress = {user_id : refObj[i].user_id, user_name : userAnsObj[0].username, full_name : userAnsObj[0].full_name, user_email : userAnsObj[0].email, user_image: userAnsObj[0].user_avatar, country: userAnsObj[0].country, click_count: userAnsObj[0].click_count, app_download: userAnsObj[0].app_download, device_type: userAnsObj[0].device_type, total_user: totalUser};
          result.push(ress);
        }
      
      return res.json({
          "status": 200,
          'data':result,
          "message": "success"
        });
  
      } catch (err) {
          console.log("ERROR : " + err)
      }
  });



/*
*********************************
* Function for user selection option (LeaderBoard)
*********************************
*/

router.post("/leaderboard_competition_name", async function(req, res, next) {
  try {
    let competition_type = req.body.competition_type;
    //let gender = req.body.gender;
    
    let created_at = req.body.created_at;
    var date_timeUTC = new Date(req.body.created_at).toUTCString();
    var  dateString = date_timeUTC.split(' ').slice(0, 4).join(' ');
      timeString = date_timeUTC.split(' ').slice(4, 5).join(' ');
    var convertDate = new Date(dateString);
    var curr_date = convertDate.getDate();
    var curr_month = convertDate.getMonth() + 1; //Months are zero based
    var curr_year = convertDate.getFullYear();
    var dateStringFinal = curr_year + "-" + curr_month + "-" + curr_date;

      console.log('dateString', dateString);
    console.log('dateStringFinal', dateStringFinal);
    if(competition_type == 'daily_competition'){
      competitionType = 'daily';
      var query = "SELECT c.id, c.compitition_name, ca.gender, c.start_date FROM competition as c inner join competition_set_audience as ca on ca.competition_id= c.id where competition_type=$1 and c.status=$2";
      
      /* else if(typeof action_flag !== 'undefined' && action_flag == 3){ //3-Nationality
        query +=  " and ca.nationality='"+action_value+"'";
      } */
      if(typeof created_at !== 'undefined' && created_at != ''){
        query +=  " and date(c.start_date)='"+dateStringFinal+"'";
      }
      query += " order by compitition_name asc ";
      console.log(query, [competitionType, 1]);
      results = await db.query(query , [competitionType, 1]);
    }else if(competition_type == 'special_competition'){
      competitionType = 'special';
      var query = "SELECT c.id, c.compitition_name, ca.gender, c.created_at FROM competition as c inner join competition_set_audience as ca on ca.competition_id= c.id where competition_type=$1 and c.status=$2";
      // if(typeof action_flag !== 'undefined' && action_flag == 0){ // 0-Gender
      //   query +=  " and ca.gender='"+action_value+"'";
      // }
      // else if(typeof action_flag !== 'undefined' && action_flag == 1){ //1--Age
      //   query +=  " and ca.age_range='"+action_value+"'";
      // }
      // else if(typeof action_flag !== 'undefined' && action_flag == 2){ //2-Country
      //   query +=  " and ca.country='"+action_value+"'";
      // }
      /* else if(typeof action_flag !== 'undefined' && action_flag == 3){ //3-Nationality
        query +=  " and ca.nationality='"+action_value+"'";
      } */
      if(typeof created_at !== 'undefined' && created_at != ''){
        query +=  " and date(c.start_date)='"+dateStringFinal+"'";
      }
      query += " order by compitition_name asc ";
      console.log(query, [competitionType, 1]);
      results = await db.query(query , [competitionType, 1]);
    }else if(competition_type == 'league_competition'){
      var query = "SELECT id, compitition_name FROM league where status=$1 ";
      if(typeof created_at !== 'undefined' && created_at != ''){
        query +=  " and date(start_date)='"+dateStringFinal+"'";
      }
      query += " order by compitition_name asc ";
      console.log(query, [ 1]);
      results = await db.query(query , [1]);
    }
    

    // IF A USER ISN'T FOUND
    if (typeof results.rows !== 'undefined' && results.rows.length == 0) {
      return res.json({ status: 201, success: false, message: 'results not found' });
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

router.post("/leaderboard", async function(req, res, next) {
try {
  let competition_id = req.body.competition_id;
  let competition_type = req.body.competition_type;
  let action_flag = req.body.action_flag;
  let action_value = req.body.action_value;
  let sort_type = req.body.sort_type;
  let group_id = 0;
  console.log(competition_id+' '+competition_type+' '+action_flag);
  //throw new Error('your die message here');
  /* var quiz_type =  '';
  if(!req.params.type){
    return res.status(401).json({ success: false, message: 'Quiz type can not blank' });
  }else if(req.params.type == 'daily'){
    quiz_type = 'daily_competition';
  }else{
    quiz_type = 'special_competition';
  } */
  if(competition_type == 'league_competition'){
    competition = await db.query("SELECT DISTINCT ON (user_id) user_id FROM league_result as cqt  WHERE competition_id =$1 and group_id =$2" , [competition_id, 0]);
    if (typeof competition.rows !== 'undefined' && competition.rows.length == 0) {
      return res.status(403).json({ status:201, data: [], message: 'لا يؤجد نتيجة للمسابقة المختارة' // 'Results not found for selected competition' 
    });
    }
    console.log("SELECT DISTINCT ON (user_id) user_id FROM league_result as cqt  WHERE competition_id =$1 and group_id =$2" , [competition_id, 0]);
    var refObj = competition.rows;
    //console.log('refObj', JSON.stringify(refObj));
    
    var result = [];
    for(var i =0; i< refObj.length; i++){
      /* const results = await db.query("SELECT * FROM league_result WHERE league_result.competition_id=$1 and league_result.group_id=$2 and league_result.level=$3 and user_id =$4 ", [competition_id, group_id, level, refObj[i].user_id]);
      var userAnsObj = results.rows; */

      var userAnsArr = await db.query("SELECT cqt.user_id, cqt.question_id, cqt.correct_answer, cqt.user_answer, cqt.answer_time, users.first_name || ' ' || users.last_name as full_name, users.country, users.nationality, users.phone_number, users.email, users.user_avatar FROM league_result as cqt JOIN users on users.id = cqt.user_id::integer  WHERE cqt.user_id=$1 AND cqt.competition_id=$2 and cqt.group_id=$3" , [refObj[i].user_id, competition_id, group_id]);
      var userAnsObj = userAnsArr.rows;
      console.log('userAnsObj', JSON.stringify(userAnsObj.length));
      var totalAnswer = Object.keys(userAnsObj).length;
    
      var correctAnswer = [];
      var scoreData = 0;
      var totalTime = 0;
      for(var j =0; j< userAnsObj.length; j++){
        if(userAnsObj[j].user_answer == userAnsObj[j].correct_answer){
          correctAnswer.push(userAnsObj[j].correct_answer);
          scoreData += 5;
        }
        if(userAnsObj[j].answer_time == null){
          userAnsObj[j].answer_time = 0;
        }
        totalTime += parseInt(userAnsObj[j].answer_time);
      }

      var totalAnswerss = Object.keys(correctAnswer).length;
          //var user_answer = userAnswer.push(userAnsObj[0].user_id);
          var ress = {user_id : refObj[i].user_id, user_name : userAnsObj[0].full_name, user_email : userAnsObj[0].email, user_mobile : userAnsObj[0].phone_number, user_image: userAnsObj[0].user_avatar, country: userAnsObj[0].country, nationality: userAnsObj[0].nationality, user_answers: totalAnswer, correct_answers : totalAnswerss, score :scoreData, total_times : totalTime};
        result.push(ress);
    }

  }else{
    //console.log("SELECT DISTINCT ON (user_id) user_id FROM user_answer as cqt  WHERE quiz_id="+competition_id);
      //const competition = await db.query("SELECT DISTINCT ON (user_id) user_id FROM user_answer as cqt  WHERE quiz_id=$1 " , [competition_id]);
      var ans_query = "select cqt.user_id from user_answer as cqt JOIN users on users.id = cqt.user_id::integer where cqt.quiz_id = $1";

      if(typeof action_flag !== 'undefined' && action_flag == 0){ // 0-Gender
        if(action_value == 'Both' || action_value == ''){
          Male = 'Male'; Female = 'Female';
          ans_query +=  " and (users.gender='"+Male+"' or users.gender='"+Female+"')";
        }else{
          ans_query +=  " and users.gender='"+action_value+"'";
        }
        
      }
      else if(typeof action_flag !== 'undefined' && action_flag == 1){ //1--Age
        ans_query +=  " and users.age='"+action_value+"'";
      }
      else if(typeof action_flag !== 'undefined' && action_flag == 2){ //2-Country
        ans_query +=  " and users.country='"+action_value+"'";
      }
      ans_query += "group by user_id";

      const competition = await db.query(ans_query, [competition_id])

      if (typeof competition.rows !== 'undefined' && competition.rows.length == 0) {
        return res.json({  status: 201, data:[], message: 'لا يؤجد نتيجة للمسابقة المختارة' // 'Results not found for selected competition' 
      });
      }
      var refObj = competition.rows;
      var result = [];
      
      for(var i =0; i< refObj.length; i++){
        var ress = {};
        var query = "SELECT cqt.user_id, cqt.quiz_id, cqt.correct_answer, cqt.user_answer, cqt.total_time, users.username, users.first_name || ' ' || users.last_name as full_name, users.email, users.country, users.nationality, users.phone_number, users.user_avatar FROM user_answer as cqt JOIN users on users.id = cqt.user_id::integer  WHERE user_id=$1 AND quiz_id=$2";

        
        console.log(query , [refObj[i].user_id, competition_id]);
        var userAnsArr = await db.query(query , [refObj[i].user_id, competition_id]);

          var userAnsObj = userAnsArr.rows;
          var totalAnswer = Object.keys(userAnsObj).length;
          //console.log(JSON.stringify(userAnsObj));
          var correctAnswer = [];
          var scoreData = 0;
          var totalTime = 0;
          for(var j =0; j< userAnsObj.length; j++){
            if(userAnsObj[j].user_answer == userAnsObj[j].correct_answer){
              correctAnswer.push(userAnsObj[j].correct_answer);
              scoreData += 5;
            }
            if(userAnsObj[j].total_time == null){
              userAnsObj[j].total_time = 0;
            }
            totalTime += parseInt(userAnsObj[j].total_time);
          }
          //console.log(scoreData, totalTime);
          var totalAnswerss = Object.keys(correctAnswer).length;
          console.log(userAnsObj[0]);
          //var user_answer = userAnswer.push(userAnsObj[0].user_id);
          // 
          ress = {user_id : refObj[i].user_id, user_name : userAnsObj[0].username, full_name : userAnsObj[0].full_name, user_email : userAnsObj[0].email, user_mobile : userAnsObj[0].phone_number, user_image: userAnsObj[0].user_avatar, country: userAnsObj[0].country, nationality: userAnsObj[0].nationality, user_answers: totalAnswer, correct_answers : totalAnswerss, score :scoreData, total_times : totalTime};
        result.push(ress);
      }
  }
    if(sort_type == 'desc'){
      result.sort((a,b) => parseInt(a.score) - parseInt(b.score) || parseInt(b.total_times) - parseInt(a.total_times));
    }else{
      //result.sort((a, b) => parseFloat(b.score) - parseFloat(a.score)); // sorting scorewise
      result.sort((a,b) => parseInt(b.score) - parseInt(a.score) || parseInt(a.total_times) - parseInt(b.total_times));
    }
    
    // Show rank according to score sorting
    for (var i = 0; i < result.length; i++) {
      result[i].rank = i+1;
    }
    return res.json({
        "status": 200,
        'data':result,
        "message": "success"
      });

    } catch (err) {
        console.log("ERROR : " + err)
    }
});

module.exports = router;