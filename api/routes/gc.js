const express = require("express");
const router = express.Router();
const db = require("../db");

var multer  = require('multer');
var aws = require('aws-sdk');
var multerS3 = require('multer-s3');
var bodyParser = require('body-parser')

var xlsxtojson = require("xlsx-to-json-lc");
var xlsxj = require("xlsx-to-json");
var AdmZip = require('adm-zip');
const multipart = require('connect-multiparty');
const multipartMiddleware = multipart({ uploadDir: './uploads' });
const common = require("../config/common.js");

////html to png lib
const nodeHtmlToImage = require('node-html-to-image');
const fs = require('fs');
var potrace = require('potrace');
var JSFiddle = require("jsfiddle");
var puppeteer = require("puppeteer");
var open = require('open');
var exec = require('child_process').exec;

const sharp = require('sharp');

var streamifier = require('streamifier');
var Inkscape = require('inkscape');
//const uploadVideo = multer({dest: __dirname + '/uploads/questions/videos'});


var SVGO = require('svgo');
var pdfToSvgConverter = new Inkscape([
    '--export-plain-svg', 
    '--import-pdf', 
    '--export-text-to-path'
]);


aws.config.update({
    secretAccessKey: 'ux+vTbSHoOAGOh6kd9EajeF6eq6hH8gAjLSFYspq',
    accessKeyId: 'AKIAUSOI5LFUXODF3IVR',
    region: 'ap-south-1'
});

var app = express(),
    s3 = new aws.S3();
    videos3 = new aws.S3();

app.use(bodyParser.json());

//local save
const uploadVideo = multer.diskStorage({
    destination: function(req, file, cb) {
      console.log(file);
        cb(null, 'uploads/questions/videos/');
    },

    // By default, multer removes file extensions so let's add them back
    key: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});
//server save
var upload = multer({
    storage: multerS3({
        s3: videos3,
        bucket: 'allam-stg',
        key: function (req, file, cb) {
            console.log('--before save--file--');
            console.log(file);
            console.log('--after save--file--');

            const fileName = 'gc/question/'+Date.now()+"-"+file.originalname.toLowerCase().split(' ').join('-');
            cb(null, fileName); //use Date.now() for unique file keys
        }
    })
});

// var upload_old = multer({
//     storage: multerS3({
//         s3: s3,
//         bucket: 'allam-stg',
//         key: function (req, file, cb) {
//             console.log(file);
//             const fileName = 'gc/question/'+Date.now()+"-"+file.originalname.toLowerCase().split(' ').join('-');
//             cb(null, fileName); //use Date.now() for unique file keys
//         },
//         metadata: (req, file, callBack) => {
//             callBack(null, { fieldName: file.fieldname })
//         } 
//     })
// });


router.get('/api/upload', (req, res) => {
    res.json({ 'message': 'hello' });
});


const uploadFile = (filePath, fileName) => {
    // Read content from the file

    const fileContent = fs.readFileSync(filePath);

    // Setting up S3 upload parameters
    const filename = 'gc/question/'+Date.now()+"-"+fileName.toLowerCase().split(' ').join('-');
    const params = {
        Bucket: 'allam-stg',
        Key: filename, // File name you want to save as in S3
        Body: fileContent
    };

    // Uploading files to the bucket
    s3.upload(params, function(err, data) {
        if (err) {
            throw err;
        }
        //console.log(`File uploaded.`+ JSON.stringify(data));
        console.log(`File uploaded successfully. ${data.Location}`);
        return data.key;
    });
};

router.post('/api/upload', multipartMiddleware, (req, res, next) => {
    //res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    var exceltojson; //Initialization
    //res.json({ 'message': req.files.uploads[0].originalFilename });
    //console.log(req.files);
    let existImage = req.body.existImage;
    let quiz_type = 1;
    
    if (req.files.uploads.length != 2 && existImage == 'true') { 
        return res.status(200).json({ error_code: 1, err_desc: "Files are not uploaded correctly, upload both file", data: null });
    }
    if (req.files.uploads[0].originalFilename.split('.')[req.files.uploads[0].originalFilename.split('.').length - 1] !== 'xlsx') {
        return res.status(200).json({ error_code: 1, err_desc: "First File should be an xlsx file", data: null });
    }
    if (req.files.uploads[1] == undefined && existImage == 'true') { 
      return res.status(200).json({ error_code: 1, err_desc: "You have to upload zip file because you have choose yes for images", data: null });
    }
    //console.log('file', req.files.uploads[1]);
    if (req.files.uploads[1] && existImage == 'false') { 
      return res.status(200).json({ error_code: 1, err_desc: "You have to select checkbox if you select zip file", data: null });
    }
    if (req.files.uploads[1] && existImage == 'true' && req.files.uploads[1].originalFilename.split('.')[req.files.uploads[1].originalFilename.split('.').length - 1] !== 'zip' ) {
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
        }, async function (err, result, cb) {
            if (err) {
                return res.status(200).json({ error_code: 1, err_desc: err, data: null });
            }
             var validateArray = [];
            // reading archives
            if (existImage == 'true') { 
              var zip = new AdmZip(req.files.uploads[1].path);
              var zipEntries = zip.getEntries(); // an array of ZipEntry records

              zip.extractAllTo(/*target path*/"./uploads/", /*overwrite*/true);
            }
            result.forEach(async function (excelRecord) {
                excelRecord.Remarks = "";
                excelRecord.category_id = 0;
                excelRecord.header_id   = 0;
                console.log('<------------------>');

                console.log( excelRecord);
                console.log('<------------------>');
                // if (excelRecord.heading == "") {
                //     excelRecord.Remarks += "Heading Can not be blank.<br/>";
                // }else{
                //   var master_heading     = await db.query("SELECT id FROM category_group where title=$1", [excelRecord.heading]);
                //   if (master_heading.rows.length > 0) {
                //     excelRecord.header_id = master_heading.rows[0].id;
                //   }else{ 
                //     excelRecord.Remarks += "Heading not same as per master category heading data.<br/>";
                //   }

                // }
                
                // if (excelRecord.category == "" ) {
                //     excelRecord.Remarks += "Category Can not be blank.<br/>";
                // }else{
                //   var master_category     = await db.query("SELECT id FROM categories where title=$1", [excelRecord.category]);
                 
                //   if (master_category.rows.length > 0) {
                //     excelRecord.category_id = master_category.rows[0].id;
                //   }else{
                //     excelRecord.Remarks += "Category not same as per master category data.<br/>";
                //   }
                // }
                
                
                if (excelRecord.question_type == "") {
                    excelRecord.Remarks += "Question type can not be blank.<br/>";
                }

                if (excelRecord.question == "" && excelRecord.question_type=="text") {
                    excelRecord.Remarks += "Question Can not be blank.<br/>";
                }
                if (excelRecord.question_file_url != "" && existImage == 'true') {
                    let zipData = zipEntries.map(a => a.entryName.toLowerCase());
                    //console.log(JSON.stringify(zipData[zipData.indexOf(excelRecord.question_file_url.toLowerCase())]));

                    if (zipData.indexOf(excelRecord.question_file_url.toLowerCase()) == -1) {
                        excelRecord.Remarks += "Question File path does not exist.<br/>";
                    }else{
                      //console.log('excelRecord.question_file_url '+excelRecord.question_file_url)
                      excelRecord.question_file_url = '/var/www/html/allam_cms_live/api/uploads/'+zipData[zipData.indexOf(excelRecord.question_file_url.toLowerCase())];
                      
                    }
                }
                if(excelRecord.optiona != 'undefined' && excelRecord.optiona != "") {
                  excelRecord['option1']=excelRecord.optiona;
                }
                else{
                  excelRecord.Remarks += "Option A Can not be blank.<br/>";
                }
                if (excelRecord.optionb != 'undefined' && excelRecord.optionb != "") {
                  excelRecord['option2']=excelRecord.optionb;
                }
                else{
                  excelRecord.Remarks += "Option B Can not be blank.<br/>";
                }
                if (excelRecord.optionc != 'undefined' && excelRecord.optionc != "") {
                  excelRecord['option3']=excelRecord.optionc;
                }
                else{
                  excelRecord.Remarks += "Option C Can not be blank.<br/>";
                }
                if (excelRecord.optiond !='undefined'  && excelRecord.optiond != "") {
                  excelRecord['option4']=excelRecord.optiond;
                }
                else{
                  excelRecord.Remarks += "Option D Can not be blank.<br/>";
                }

                if (excelRecord.duration == "") {
                    excelRecord.Remarks += "Question duration Can not be blank.<br/>";
                }
                if (excelRecord.Remarks != "") {
                    validateArray.push(excelRecord);
                }
                //console.log(JSON.stringify(excelRecord));
            });



            var fs = require('fs');
            try {
                
                fs.unlinkSync(req.files.uploads[0].path);
                if(existImage == 'true'){
                  fs.unlinkSync(req.files.uploads[1].path);
                }
                
            } catch (e) {
                //error deleting the file
            }
            //console.log(validateArray.length);
            setTimeout(function() { 
              //console.log(validateArray.length);
              if (validateArray.length != 0) {
                  res.status(200).json({ error_code: 2, err_desc: "Validation Failed", data: validateArray });
              }
              else {
                  res.status(200).json({ error_code: 0, err_desc: "Successfully validated", data: result });
              }
            }, 2000); 

            
            
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

router.get("/videos3", async function(req, res, next) {
  const params = {
          Bucket: 'allam-stg',
          Key: "user-default.png" //if any sub folder-> path/of/the/folder.ext
  }
  try {
        await videos3.headObject(params).promise()
        console.log("File Found in S3")

        videos3.getObject(params, function(err, data) {
            res.writeHead(200, {'Content-Type': 'video/mp4'});
            res.write(data.Body, 'binary');
            res.end(null, 'binary');
        });
    } catch (err) {
        console.log("File not Found ERROR : " + err.code)
    }
});



router.post("/add_question", async function(req, res, next) {
  
    try {
      //console.log('req.body '+req.body.selectedData);
      //console.log("fileName "+ req.files.logo[0].key);
      //console.log("fileObj "+ JSON.stringify(req.files));
      
      let filedata = req.body.selectedData; //JSON.parse(req.body.fileData);
      
      //console.log("length "+filedata.length);
      //console.log(req.body.category_ids);

        // var output;
        for ( var key = 0; key < filedata.length ; key++ ) {
             tVal = filedata[key];//some manipulation of someArr[key]
             (function(val){
                if(filedata[key].question_file_url == ""){
                 db.query( "INSERT INTO quiz_question (question, question_image, question_image_url, answer, option1, option2, option3, option4,  note, level, quiz_type, quiz_sub_type, class, semester, subject, chapter, lesson, groups, quant_verbal, type) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20) RETURNING *",
                    [filedata[key].question, filedata[key].question_image, filedata[key].question_file_url, filedata[key].answer, filedata[key].option1, filedata[key].option2, filedata[key].option3, filedata[key].option4, filedata[key].note, filedata[key].level, filedata[key].quiz_type, filedata[key].quiz_sub_type, filedata[key].class, filedata[key].semester, filedata[key].subject, filedata[key].chapter, filedata[key].lesson, filedata[key].group, filedata[key].quant_verbal, 'curriculum']);
                }else{
                  var filename = filedata[key].question_file_url.replace(/^.*[\\\/]/, '');
                  const fileContent = fs.readFileSync(filedata[key].question_file_url);
                  // Setting up S3 upload parameters
                  const fileName = 'gc/question/'+Date.now()+"-"+filename.toLowerCase().split(' ').join('-');
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
                    //console.log(`File uploaded.`+ JSON.stringify(data));
                    //console.log(`File uploaded successfully. ${data.Location}`);
                      var quiz_url = data.key;

                      //console.log(val.question);
                      //console.log('val '+JSON.stringify(val))
                      //console.log('tVal '+JSON.stringify(tVal))

                     db.query( "INSERT INTO quiz_question (question, question_image, question_image_url, answer, option1, option2, option3, option4,  note, level, quiz_type, quiz_sub_type, class, semester, subject, chapter, lesson, groups, quant_verbal, type) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20) RETURNING *",
                      [val.question, val.question_image, quiz_url, val.answer, val.option1, val.option2, val.option3, val.option4, val.note, val.level, val.quiz_type, val.quiz_sub_type, val.class, val.semester, val.subject, val.chapter, val.lesson, val.group, val.quant_verbal, 'curriculum']);
               });
              }
             })(tVal);
        }
      //res.send('Successfully uploaded ' + req.file + ' files!')
      return res.json({ "status": 200, message: "Record inserted" });
    } catch (err) {
      return next('Error '+err);
    }
  
});
router.post("/add_question_temp", async function(req, res, next) {
  
    try {
      
      let filedata = req.body.selectedData; //JSON.parse(req.body.fileData);
      let created_by  = req.body.created_by;
      let header_id   = req.body.header_id;
      let category_id = req.body.category_id;

        // var output;
        for ( var key = 0; key < filedata.length ; key++ ) {
             tVal = filedata[key];//some manipulation of someArr[key]
             (function(val){
              var image_name='';
                if(filedata[key].question_file_url!=''){
                  image_name = filedata[key].question_file_url.replace('/var/www/html/allam_cms_live/api/','');
                }
                console.log(image_name);
                 db.query( "INSERT INTO gc_question_temp (header_id,category_id,file_type,question, question_image, question_image_url, answer, option1, option2, option3, option4,  note, level, duration,created_by,status,type,qui_type) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18) RETURNING *",
                    [header_id,category_id,filedata[key].question_type,filedata[key].question, image_name, filedata[key].question_file_url, filedata[key].answer, filedata[key].option1, filedata[key].option2, filedata[key].option3, filedata[key].option4, filedata[key].note, filedata[key].level,filedata[key].duration,created_by,'0','bulk',filedata[key].question_type]);
                
             })(tVal);
        }
      //res.send('Successfully uploaded ' + req.file + ' files!')
      return res.json({ "status": 200, message: "Record inserted" });
    } catch (err) {
      return next('Error '+err);
    }
  
});

router.post("/add_single_question_temp_old", async function(req, res, next) {
  
    try {
      
      let question = req.body.selectedData; 
      let created_by = req.body.created_by;

      var q= await db.query( "INSERT INTO gc_question_temp (header_id,category_id,file_type,question, question_image, question_image_url, answer, option1, option2, option3, option4,  note, level, duration,created_by,status,type) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17) RETURNING *",
                    [question.heading,question.category,'image',question.question, '', '', question.answer, question.option1, question.option2, question.option3, question.option4, question.note, question.level,question.duration,created_by,'0','single']);
      return res.json({ "status": 200, message: "Record inserted" });
    } catch (err) {
      return next('Error '+err);
    }
  
});

router.post("/add_single_question_temp",  upload.single('video_file'),async function(req, res, next) {
  
  if(req.body.option1 && req.body.answer)
  {
    var question = req.body; 
    var created_by = question.created_by;
   
    //console.log(question);
    var file_url='';
    var questionTxt=question.question;
    var question_type='image';

    if(req.file && req.file.key){
      file_url =  req.file.key;
    }else{
      file_url =  '';
    }

    try {
        
        if(question.question_type=='image' || question.question_type=='text_and_image')
        {
          ///s3 upload
          var buf = Buffer.from(questionTxt.replace(/^data:image\/\w+;base64,/, ""),'base64')
          file_url="gc/question/"+Date.now()+".png";
          s3.putObject({Bucket: 'allam-stg', Key: file_url, Body: buf}, function(err, data) {
            if (err) {
              //return res.send({ success: false, err: err });
            } else {
              //return res.send({ success: true });
            }
          });
          questionTxt='';
          if(question.question_type=='text_and_image'){
            questionTxt=question.question_text;
            question_type=question.question_type;
          }
        }
        if(question.question_type=='video' || question.question_type=='text_and_video')
        {
          questionTxt='';
          if(question.question_type=='text_and_video'){
            questionTxt=question.question_text;
          }
          question_type=question.question_type;
        }
        var q= await db.query( "INSERT INTO gc_question_temp (header_id,category_id,file_type,question, question_image, question_image_url, answer, option1, option2, option3, option4,  note, level, duration,created_by,status,type,qui_type) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18) RETURNING *",
                    [question.heading,question.category,question_type,questionTxt, '', file_url, question.answer, question.option1, question.option2, question.option3, question.option4, question.note, question.level,question.duration,created_by,'0','single',question.question_type]);
        /////////////////////////////////////////////
         return res.json({
           "status": 200,
           "msg":"question successfully saved in draft"
         });
        
        

    } catch (err) {
      return next(err);
    }
  }
  else{
     return res.json({"status": 403, "msg": "Missing required parameters" });
  }
});

//////update question in draft(temp table)
router.post("/update_question_in_draft_old", async function(req, res, next) {

  if(req.body.option1 && req.body.answer)
  {
    var question = req.body;
    try {

        //var quiz_question = await db.query("UPDATE cms_quiz_question_temp SET question=$1,question_image=$2,question_image_url=$3,option1=$4,option2=$5,option3=$6,option4=$7,answer=$8,note=$9,level=$10,quiz_type=$11,quiz_sub_type=$12,class=$13,semester=$14,subject=$15,chapter=$16,lesson=$17,groups=$18,type=$19,quant_verbal=$20,status=$21,save_type=$22,modified_by=$23, duration=$24 WHERE id=$25 RETURNING *",[question.question,'','',question.option1,question.option2,question.option3,question.option4,question.answer,question.note,question.level,question.quiz_type,question.quiz_sub_type,question.class,question.semester,question.subject,question.chapter,question.lesson,question.group,'curriculum',question.quant_verbal,'0','bulk',question.created_by, question.duration, question.id]);
         var quiz_question = await db.query( "UPDATE gc_question_temp SET header_id=$1,category_id=$2,file_type=$3,question=$4, question_image=$5, question_image_url=$6, answer=$7, option1=$8, option2=$9, option3=$10, option4=$11,  note=$12, level=$13, duration=$14,modified_by=$15,status=$16 WHERE id=$17",
                    [question.heading,question.category,'text',question.question, '', '', question.answer, question.option1, question.option2, question.option3, question.option4, question.note, question.level,question.duration,question.created_by,'0',question.id]);
        /////////////////////////////////////////////
         return res.json({
           "status": 200,
           "msg":"question updated successfully"
         });
        
        

    } catch (err) {
      return next(err);
    }
  }
  else{
     return res.json({"status": 403, "msg": "Missing required parameters" });
  }
});

//////update question in draft(temp table)
router.post("/update_question_in_draft",upload.single('video_file'),async function(req, res, next) {

  if(req.body.option1 && req.body.answer)
  {
    var question = req.body;
    var file_name_url='';
    var file_url='';
    var questionTxt=question.question;
    var question_type=question.question_type;
    if(req.file && req.file.key){
      file_url =  req.file.key;
    }else{
      file_url =  '';
    }

    console.log(question);
    try {
        if(question.question_type=='image' || question.question_type=='text_and_image')
          {
            if(question.isFile=='true')
            {
              ///local upload
              var buf = Buffer.from(question.question_image.replace(/^data:image\/\w+;base64,/, ""),'base64')
              var filename =Date.now()+".png";
              file_url="/var/www/html/allam_cms_live/api/uploads/questions/images/"+filename;
              file_name_url="uploads/questions/images/"+filename;
              require("fs").writeFile(file_url, buf, function(err) {
              });
            }
            else
            {
              file_name_url=question.question_image;
              file_url=question.question_image_url;
            }
            questionTxt='';
            if(question.question_type=='text_and_image'){
                questionTxt  =question.question_text;
                question_type=question.question_type;
            }
          }

          if(question.question_type=='video' || question.question_type=='text_and_video')
          {
            if(question.isVideo=='true')
            {
              ///local upload
              file_name_url="live";
              file_url=file_url;
            }
            else
            {
              file_name_url=question.question_image;
              file_url=question.question_image_url;
            }
            questionTxt='';
            if(question.question_type=='text_and_video'){
                questionTxt  =question.question_text;
                question_type=question.question_type;
            }
          }

         var quiz_question = await db.query( "UPDATE gc_question_temp SET header_id=$1,category_id=$2,file_type=$3,question=$4, question_image=$5, question_image_url=$6, answer=$7, option1=$8, option2=$9, option3=$10, option4=$11,  note=$12, level=$13, duration=$14,modified_by=$15,status=$16,qui_type=$17 WHERE id=$18",
                    [question.heading,question.category,question_type,questionTxt, file_name_url, file_url, question.answer, question.option1, question.option2, question.option3, question.option4, question.note, question.level,question.duration,question.created_by,'0',question_type,question.id]);
        /////////////////////////////////////////////
         return res.json({
           "status": 200,
           "msg":"question successfully saved in draft"
         });

    } catch (err) {
      return next(err);
    }
  }
  else{
     return res.json({"status": 403, "msg": "Missing required parameters" });
  }
});

//////update question in draft(temp table)
router.post("/update_single_question_in_draft",  upload.single('video_file'),async function(req, res, next) {
  
  if(req.body.option1 && req.body.answer)
  {
    var question = req.body; 
    var created_by = question.created_by;
   
    console.log(question);
    var file_url='';
    var questionTxt=question.question;
    var question_type='image';

    if(req.file && req.file.key){
      file_url =  req.file.key;
    }else{
      file_url =  '';
    }

    try {
        
        if(question.question_type=='image' || question.question_type=='text_and_image')
        {
          ///s3 upload
          if(question.isFile=='true')
          {
            var buf = Buffer.from(questionTxt.replace(/^data:image\/\w+;base64,/, ""),'base64')
            file_url="gc/question/"+Date.now()+".png";
            s3.putObject({Bucket: 'allam-stg', Key: file_url, Body: buf}, function(err, data) {
              if (err) {
                //return res.send({ success: false, err: err });
              } else {
                //return res.send({ success: true });
              }
            });
            console.log('right turn');
          }
          else{
             console.log('wrong turn');
             file_url=question.question_image_url;
          }
          questionTxt='';
          if(question.question_type=='text_and_image'){
            questionTxt=question.question_text;
            question_type=question.question_type;
          }
        }
        if(question.question_type=='video' || question.question_type=='text_and_video')
        {
          if(question.isVideo=='true')
          {
             file_url=file_url;
          }
          else{
             file_url=question.question_image_url;
          }
          questionTxt='';
          if(question.question_type=='text_and_video'){
            questionTxt=question.question_text;
          }
          question_type=question.question_type;
        }

        var quiz_question = await db.query( "UPDATE gc_question_temp SET header_id=$1,category_id=$2,file_type=$3,question=$4, question_image=$5, question_image_url=$6, answer=$7, option1=$8, option2=$9, option3=$10, option4=$11,  note=$12, level=$13, duration=$14,modified_by=$15,status=$16,qui_type=$17 WHERE id=$18",
                    [question.heading,question.category,question_type,questionTxt, '', file_url, question.answer, question.option1, question.option2, question.option3, question.option4, question.note, question.level,question.duration,question.created_by,'0',question.question_type,question.id]);
        /////////////////////////////////////////////
         return res.json({
           "status": 200,
           "msg":"question successfully saved in draft"
         });
        
        

    } catch (err) {
      return next(err);
    }
  }
  else{
     return res.json({"status": 403, "msg": "Missing required parameters" });
  }
});

router.post("/update_single_question_in_draft_old", async function(req, res, next) {

  if(req.body.option1 && req.body.answer)
  {
    var question = req.body;
    try {

        //var quiz_question = await db.query("UPDATE cms_quiz_question_temp SET question=$1,question_image=$2,question_image_url=$3,option1=$4,option2=$5,option3=$6,option4=$7,answer=$8,note=$9,level=$10,quiz_type=$11,quiz_sub_type=$12,class=$13,semester=$14,subject=$15,chapter=$16,lesson=$17,groups=$18,type=$19,quant_verbal=$20,status=$21,save_type=$22,modified_by=$23, duration=$24 WHERE id=$25 RETURNING *",[question.question,'','',question.option1,question.option2,question.option3,question.option4,question.answer,question.note,question.level,question.quiz_type,question.quiz_sub_type,question.class,question.semester,question.subject,question.chapter,question.lesson,question.group,'curriculum',question.quant_verbal,'0','bulk',question.created_by, question.duration, question.id]);
         var quiz_question = await db.query( "UPDATE gc_question_temp SET header_id=$1,category_id=$2,file_type=$3,question=$4, question_image=$5, question_image_url=$6, answer=$7, option1=$8, option2=$9, option3=$10, option4=$11,  note=$12, level=$13, duration=$14,modified_by=$15,status=$16 WHERE id=$17",
                    [question.heading,question.category,'image',question.question, '', '', question.answer, question.option1, question.option2, question.option3, question.option4, question.note, question.level,question.duration,question.created_by,'0',question.id]);
        /////////////////////////////////////////////
         return res.json({
           "status": 200,
           "msg":"question updated successfully"
         });
        
        

    } catch (err) {
      return next(err);
    }
  }
  else{
     return res.json({"status": 403, "msg": "Missing required parameters" });
  }
});

//////update status
router.patch("/update_status", async function(req, res, next) {

  if(req.body.id)
  {
    var question = req.body;
    try {

        var quiz_question = await db.query("UPDATE gc_question SET status=$1 WHERE id=$2",[question.status, question.id]);

        /////////////////////////////////////////////
         return res.json({
           "status": 200,
           "msg":"status updated successfully"
         });
        
        

    } catch (err) {
      return next(err);
    }
  }
  else{
     return res.json({"status": 403, "msg": "Missing required parameters" });
  }
});

router.post("/publish_question", async function(req, res, next) {

  if(req.body[0].option1 && req.body[0].answer)
  {

    try {
            
        for(let i=0;i<req.body.length;i++)
        {
          let question = req.body[i];
          if(question.file_type=='text' || question.question_image=='live' || question.question_image_url == "" || question.question_image_url == null){
            
            var gc_question = await db.query(
                    "INSERT INTO gc_question (header_id,category_id,file_type, question_image, question_image_url,question, answer, option1, option2, option3, option4,  note, level, duration,created_by,status,qui_type) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17) RETURNING id",
                    [question.header_id,question.category_id,question.file_type,question.question_image,question.question_image_url,question.question,question.answer,question.option1,question.option2,question.option3,question.option4,question.note,question.level,question.duration,question.created_by, '1',question.qui_type]
                  );
          }else{ 
                 //resize image 
                  if(question.file_type=='image' || question.file_type=='text_and_image'){
                     question = await resizeImage(question);
                  }
                 
                  console.log(question.question_image_url);
                  var filename = question.question_image_url.replace(/^.*[\\\/]/, '');
                  const fileContent = fs.readFileSync(question.question_image_url);
                  const fileName = 'gc/question/'+Date.now()+"-"+filename.toLowerCase().split(' ').join('-');
                  const params = {
                      Bucket: 'allam-stg',
                      Key: fileName, 
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
                        
                        fs.unlinkSync(question.question_image_url);
                    } catch (e) {
                        //error deleting the file
                    }

                    var file_url = data.key;
                    var gc_question = await db.query(
                    "INSERT INTO gc_question (header_id,category_id,file_type, question_image, question_image_url,question, answer, option1, option2, option3, option4,  note, level, duration,created_by,status,qui_type) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17) RETURNING id",
                    [question.header_id,question.category_id,question.file_type,fileName,file_url,question.question,question.answer,question.option1,question.option2,question.option3,question.option4,question.note,question.level,question.duration,question.created_by, '1',question.qui_type]
                  );

                  
                });
          }
            //delete temp table
            const del = await db.query("DELETE FROM gc_question_temp WHERE id=$1", [question.id]);
        }
        /////////////////////////////////////////////
        return res.json({
          "status": 200,
          "msg":"question added successfully"
        });
    } catch (err) {
      return next(err);
    }
  }
  else{
     return res.json({"status": 403, "msg": "Missing required parameters" });
  }
});

router.post("/add_question_competitive", async function(req, res, next) {
  
    try {

      //upload.single(req.body.quizData[0].quiz_icon);
      /*upload(req, res, (err) => {
        if(err) {
          res.status(400).send("Something went wrong!");
        }
        res.send(req.file);
      });*/

      //console.log('req.body '+req.body.selectedData);
      //console.log("fileName "+ req.files.logo[0].key);
      //console.log("fileObjs "+ JSON.stringify(req.files));
      //console.log("fileObj "+ JSON.stringify(req.file));
      
      let filedata = req.body.selectedData; //JSON.parse(req.body.fileData);
      let quizData = req.body.quizData
      //console.log("length "+filedata.length);
      //console.log('quizDatas '+ JSON.stringify(quizData));

      if (quizData.length == 0) {
        return res.json({ "status": 200, error_code: 2, err_desc: "quiz data not selected", data: '' });
      }else{
        
          const result = await db.query("INSERT INTO quiz (quiz_type, quiz_sub_type, quiz_title, quiz_description, quiz_icon_url, status) VALUES ($1,$2,$3,$4,$5,$6) RETURNING *",
          [quizData[0].quiz_type, quizData[0].quiz_sub_type, quizData[0].quiz_title, quizData[0].quiz_description, quizData[0].quiz_icon_url, '0']
          );

          if (result.rows[0].id) {
            //console.log('quiz_type '+quizData[0].quiz_type);

             // var output;
            for ( var key = 0; key < filedata.length ; key++ ) {
              tVal = filedata[key];//some manipulation of someArr[key]
              (function(val){
                if(filedata[key].question_file_url == ""){
                  db.query( "INSERT INTO quiz_question (question, question_image, question_image_url, answer, option1, option2, option3, option4,  note, level, quiz_type, quiz_sub_type, class, semester, subject, chapter, lesson, groups, quant_verbal, type) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20) RETURNING *",
                    [filedata[key].question, filedata[key].question_image, filedata[key].question_file_url, filedata[key].answer, filedata[key].option1, filedata[key].option2, filedata[key].option3, filedata[key].option4, filedata[key].note, filedata[key].level, filedata[key].quiz_type, filedata[key].quiz_sub_type, filedata[key].class, filedata[key].semester, filedata[key].subject, filedata[key].chapter, filedata[key].lesson, filedata[key].group, filedata[key].quant_verbal, 'Competitive'],function(err, res, fields) {
                       if ( err ) {
                         console.log( 'quiz_question '+err );
                       } else {
                         //output.push( rows[0].id );//push query output to this variable
                         //console.log('insertId '+res.rows[0].id)
                         //console.log('quizQuestionMapping.rows'+JSON.stringify(res.rows));
                         const quizQuestionMapping =  db.query(
                            "INSERT INTO quiz_question_mapping (quiz_id, question_id) VALUES ($1,$2) RETURNING *",
                            [result.rows[0].id, res.rows[0].id]
                          );
                        }
                   });
                }else{
                  var filename = filedata[key].question_file_url.replace(/^.*[\\\/]/, '');
                  const fileContent = fs.readFileSync(filedata[key].question_file_url);
                  // Setting up S3 upload parameters
                  const fileName = 'quiz/question/'+Date.now()+"-"+filename.toLowerCase().split(' ').join('-');
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
                    //console.log(`File uploaded.`+ JSON.stringify(data));
                    //console.log(`File uploaded successfully. ${data.Location}`);
                      var quiz_url = data.key;

                      //console.log(val.question);
                      //console.log('val '+JSON.stringify(val))
                      //console.log('tVal '+JSON.stringify(tVal))

                     db.query( "INSERT INTO quiz_question (question, question_image, question_image_url, answer, option1, option2, option3, option4,  note, level, quiz_type, quiz_sub_type, class, semester, subject, chapter, lesson, groups, quant_verbal, type) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20) RETURNING *",
                      [val.question, val.question_image, quiz_url, val.answer, val.option1, val.option2, val.option3, val.option4, val.note, val.level, val.quiz_type, val.quiz_sub_type, val.class, val.semester, val.subject, val.chapter, val.lesson, val.group, val.quant_verbal, 'Competitive'],function(err, res, fields) {
                         if ( err ) {
                           console.log( 'quiz_question '+err );
                         } else {
                           //output.push( rows[0].id );//push query output to this variable
                           //console.log('insertId '+res.rows[0].id)
                           //console.log('quizQuestionMapping.rows'+JSON.stringify(res.rows));
                           const quizQuestionMapping =  db.query(
                              "INSERT INTO quiz_question_mapping (quiz_id, question_id) VALUES ($1,$2) RETURNING *",
                              [result.rows[0].id, res.rows[0].id]
                            );
                          }
                        });
                  });
                }
              })(tVal);
            }
          }
          //res.send('Successfully uploaded ' + req.file + ' files!')
          return res.json({ "status": 200, error_code: 0, message: "Record inserted" });
      }
    } catch (err) {
      return next('Error '+err);
    }
  
});

//delet draft data
router.delete("/delete_draft_question/:id", async function(req, res, next) {
  try {
    const result = await db.query("DELETE FROM gc_question_temp WHERE id=$1", [
      req.params.id
    ]);
    return res.json({ message: "Record deleted" });
  } catch (err) {
    return next(err);
  }
});

///get all draft qustion
router.get("/get_draft_question_by_user/:id/:type", async function(req, res, next) {
  try {

    const results = await db.query("SELECT gcqt.*, categories.title as category_name,category_group.title as header_name FROM gc_question_temp as gcqt JOIN categories on categories.id = gcqt.category_id::integer JOIN category_group on category_group.id = gcqt.header_id::integer WHERE gcqt.type=$1",[req.params.type]);
    return res.json(results.rows);
  } catch (err) {
    return next(err);
  }
});



// router.post("/add_question_competitive_temp", async function(req, res, next) {
  
//     try {
//       //console.log('req.body '+req.body.selectedData);
//       //console.log("fileName "+ req.files.logo[0].key);
//       //console.log("fileObj "+ JSON.stringify(req.files));
      
//       let filedata = req.body.selectedData; //JSON.parse(req.body.fileData);
//       let created_by = req.body.created_by;
//       var quiz_temp_id = common.decode64(req.body.quiz_temp_id);
//       //console.log("length "+filedata.length);
//       //console.log(req.body.category_ids);

//       //console.log("created_by "+created_by);

//         // var output;
//         for ( var key = 0; key < filedata.length ; key++ ) {
//              tVal = filedata[key];//some manipulation of someArr[key]
//              (function(val){

//                  db.query( "INSERT INTO cms_quiz_question_temp (question, question_image, question_image_url, answer, option1, option2, option3, option4,  note, level, quiz_type, quiz_sub_type, class, semester, subject, chapter, lesson, groups, quant_verbal, type, status,save_type,created_by,quiz_temp_id, duration) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24, $25) RETURNING *",
//                     [filedata[key].question, filedata[key].question_image, filedata[key].question_file_url, filedata[key].answer, filedata[key].option1, filedata[key].option2, filedata[key].option3, filedata[key].option4, filedata[key].note, filedata[key].level, filedata[key].quiz_type, filedata[key].quiz_sub_type, filedata[key].class, filedata[key].semester, filedata[key].subject, filedata[key].chapter, filedata[key].lesson, filedata[key].group, filedata[key].quant_verbal, 'Competitive', '0','bulk', created_by,quiz_temp_id, filedata[key].duration]);

//              })(tVal);
//         }
//       //res.send('Successfully uploaded ' + req.file + ' files!')
//       return res.json({ "status": 200, message: "Record inserted" });
//     } catch (err) {
//       return next('Error '+err);
//     }
  
// });

// router.post("/update_question_competitive_draft", async function(req, res, next) {

//   if(req.body.option1 && req.body.answer)
//   {
//     var question = req.body;
//     try {

//         var quiz_question = await db.query("UPDATE cms_quiz_question_temp SET question=$1,question_image=$2,question_image_url=$3,option1=$4,option2=$5,option3=$6,option4=$7,answer=$8,note=$9,level=$10,quiz_type=$11,quiz_sub_type=$12,class=$13,semester=$14,subject=$15,chapter=$16,lesson=$17,groups=$18,type=$19,quant_verbal=$20,status=$21,save_type=$22,modified_by=$23, duration=$24 WHERE id=$25 RETURNING *",[question.question,question.question_image,question.question_image_url, question.option1,question.option2,question.option3,question.option4,question.answer,question.note,question.level,question.quiz_type,question.quiz_sub_type,question.class,question.semester,question.subject,question.chapter,question.lesson,question.group,'Competitive',question.quant_verbal,'0','bulk',question.created_by, question.duration, question.id]);

//         /////////////////////////////////////////////
//          return res.json({
//            "status": 200,
//            "msg":"question successfully saved in draft"
//          });
        
        

//     } catch (err) {
//       return next(err);
//     }
//   }
//   else{
//      return res.json({"status": 403, "msg": "Missing required parameters" });
//   }
// });

// router.post("/save_competitive_quiz", async function(req, res, next) {

//   let filedata = req.body.questionData; //JSON.parse(req.body.fileData);
//   var quiz_temp_id = common.decode64(req.body.quiz_temp_id);

//   if(filedata.length > 0 && quiz_temp_id)
//   {

//     try {
//       var quiz_temp_id = common.decode64(req.body.quiz_temp_id);
//       //console.log('quiz_temp_id '+quiz_temp_id)
//       const temp_quiz = await db.query("SELECT * FROM cms_quiz_temp WHERE id=$1", [quiz_temp_id]);
          
//           if(!temp_quiz.rows[0]){
//             return res.json({"status": 403, "msg": "Missing required parameters" });
//           }

//           var quiz_title = temp_quiz.rows[0].quiz_title;
//           var quiz_type = temp_quiz.rows[0].quiz_type;
//           var quiz_sub_type = temp_quiz.rows[0].quiz_sub_type;
//           var quiz_description = temp_quiz.rows[0].quiz_description;
//           var quiz_icon_url = temp_quiz.rows[0].quiz_icon_url;
//           var save_type = temp_quiz.rows[0].save_type;
//           var created_by = temp_quiz.rows[0].created_by;

//           var quiz = await db.query(
//               "INSERT INTO cms_quiz (quiz_type,quiz_sub_type,quiz_title,quiz_description,quiz_icon_url,status,save_type,created_by) VALUES ($1,$2,$3,$4,$5,$6,$7,$8) RETURNING id",
//               [quiz_type,quiz_sub_type,quiz_title,quiz_description,quiz_icon_url,'0',save_type,created_by]
//             );
//           var quiz_id  =  quiz.rows[0].id;
            
//         for(let i=0;i<filedata.length;i++)
//         {
//           let question = filedata[i];
//           //console.log("fileObj "+ JSON.stringify(question))
//           ////// check image exists or not ////////
//           if(question.question_image_url == "" || question.question_image_url == null){
//             var quiz_url = '';
//             var quiz_question = await db.query(
//                     "INSERT INTO cms_quiz_question (question,question_image,question_image_url,option1,option2,option3,option4,answer,note,level,quiz_type,quiz_sub_type,class,semester,subject,chapter,lesson,groups,type,quant_verbal,status,save_type,created_by, duration) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23, $24) RETURNING id",
//                     [question.question,'',quiz_url,question.option1,question.option2,question.option3,question.option4,question.answer,question.note,question.level,question.quiz_type,question.quiz_sub_type,question.class,question.semester,question.subject,question.chapter,question.lesson,question.group,'Competitive',question.quant_verbal,'0',question.save_type,question.created_by, question.duration]
//                   );
//                     var quiz_question_id = quiz_question.rows[0].id;
//                     var quiz_question_map = db.query(
//                       "INSERT INTO cms_quiz_question_mapping (question_id,quiz_id) VALUES ($1,$2) RETURNING *",
//                       [quiz_question_id, quiz_id]
//                     );
//           }else{
//                   var filename = question.question_image_url.replace(/^.*[\\\/]/, '');
//                   const fileContent = fs.readFileSync(question.question_image_url);
//                   // Setting up S3 upload parameters
//                   const fileName = 'quiz/question/'+Date.now()+"-"+filename.toLowerCase().split(' ').join('-');
//                   const params = {
//                       Bucket: 'allam-stg',
//                       Key: fileName, // File name you want to save as in S3
//                       Body: fileContent
//                   };
//                   s3.upload(params, async function(err, data) {
//                     if (err) {
//                         return res.json({"status": 403,"msg":"question image not uploaded on S3"});
//                         throw err;
//                     }
//                     //console.log(`File uploaded.`+ JSON.stringify(data));
//                     //console.log(`File uploaded successfully. ${data.Location}`);
//                       var quiz_url = data.key;
//                       var quiz_question = await db.query(
//                     "INSERT INTO cms_quiz_question (question,question_image,question_image_url,option1,option2,option3,option4,answer,note,level,quiz_type,quiz_sub_type,class,semester,subject,chapter,lesson,groups,type,quant_verbal,status,save_type,created_by, duration) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23, $24) RETURNING id",
//                     [question.question,fileName,quiz_url,question.option1,question.option2,question.option3,question.option4,question.answer,question.note,question.level,question.quiz_type,question.quiz_sub_type,question.class,question.semester,question.subject,question.chapter,question.lesson,question.group,'Competitive',question.quant_verbal,'0',question.save_type,question.created_by, question.duration]
//                   );
//                     var quiz_question_id = quiz_question.rows[0].id;
//                     var quiz_question_map = db.query(
//                       "INSERT INTO cms_quiz_question_mapping (question_id,quiz_id) VALUES ($1,$2) RETURNING *",
//                       [quiz_question_id, quiz_id]
//                     );

                  
//                 });
//           }
//             //delete temp table
//             db.query("DELETE FROM cms_quiz_temp WHERE id=$1", [quiz_temp_id]);
//             db.query("DELETE FROM cms_quiz_question_temp WHERE quiz_temp_id=$1", [quiz_temp_id]);
//         }
//         /////////////////////////////////////////////
//         return res.json({
//           "status": 200,
//           "msg":"question added successfully"
//         });
//     } catch (err) {
//       return next(err);
//     }
//   }
//   else{
//      return res.json({"status": 403, "msg": "Missing required parameters" });
//   }
// });

///get all draft qustion by user id
router.get("/get_draft_question_competitive_by_user/:id/:quiz_temp_id", async function(req, res, next) {
  var quiz_temp_id = common.decode64(req.params.quiz_temp_id);
  try {
    const results = await db.query("SELECT cqt.*, master_quiz.name as quiz_type_name, master_sub_quiz.name as quiz_sub_type_name FROM cms_quiz_question_temp as cqt JOIN master_quiz on master_quiz.id = cqt.quiz_type::integer JOIN master_sub_quiz on master_sub_quiz.id = cqt.quiz_sub_type::integer  WHERE created_by=$1 AND save_type=$2 AND type=$3 AND quiz_temp_id=$4" , [
      req.params.id,'bulk','Competitive',quiz_temp_id 
    ]);

    return res.json(results.rows);
  } catch (err) {
    return next(err);
  }
});

///get all qustion
router.get("/get_all_question_by_user/:id/:role_id", async function(req, res, next) {
  try {
    console.log('---before---');
    console.log(req.query);
    console.log('---after---');
    var created_by = req.params.id;
    var role_id    = req.params.role_id;
    var header_id  = req.query.header_id;
    var category_id= req.query.category_id;
    var page       = req.query.page;
    var size       = req.query.size;
    var limit  = 5;
    var offset = 0;
    console.log('page-----'+page);
    if(page==0){
      limit  = size;
      offset = 0;
    }
    else if(page >0){
      limit  = size;
      //offset = (page*size)-1;
      offset = (page*size);
    }
    else
    {
      limit  = size;
      offset = 0;
    }
    console.log('limit--'+limit);
    console.log('size--'+offset);
    var status='1';
    if(role_id==2){
       status='0';
       //var results = await db.query("SELECT gcqt.*, categories.title as category_name,category_group.title as header_name FROM gc_question as gcqt JOIN categories on categories.id = gcqt.category_id::integer JOIN category_group on category_group.id = gcqt.header_id::integer WHERE gcqt.status=$1 order by gcqt.id desc",[status]);
    }
    else{
      //var results = await db.query("SELECT gcqt.*, categories.title as category_name,category_group.title as header_name FROM gc_question as gcqt JOIN categories on categories.id = gcqt.category_id::integer JOIN category_group on category_group.id = gcqt.header_id::integer order by gcqt.id desc");
    }
    
   
    if(header_id!=0 && category_id!=0){ console.log('---->>1');
      var all_results = await db.query("SELECT gcqt.*, categories.title as category_name,category_group.title as header_name FROM gc_question as gcqt JOIN categories on categories.id = gcqt.category_id::integer JOIN category_group on category_group.id = gcqt.header_id::integer WHERE gcqt.header_id=$1 AND gcqt.category_id=$2 order by gcqt.id desc",[header_id,category_id]);    
      var results = await db.query("SELECT gcqt.*, categories.title as category_name,category_group.title as header_name FROM gc_question as gcqt JOIN categories on categories.id = gcqt.category_id::integer JOIN category_group on category_group.id = gcqt.header_id::integer WHERE gcqt.header_id=$1 AND gcqt.category_id=$2 order by gcqt.id desc limit $3 offset $4",[header_id,category_id,limit,offset]);    
    }
    else if(header_id!=0){ console.log('---->>2');
      var all_results = await db.query("SELECT gcqt.*, categories.title as category_name,category_group.title as header_name FROM gc_question as gcqt JOIN categories on categories.id = gcqt.category_id::integer JOIN category_group on category_group.id = gcqt.header_id::integer WHERE gcqt.header_id=$1 order by gcqt.id desc",[header_id]);    
      var results = await db.query("SELECT gcqt.*, categories.title as category_name,category_group.title as header_name FROM gc_question as gcqt JOIN categories on categories.id = gcqt.category_id::integer JOIN category_group on category_group.id = gcqt.header_id::integer WHERE gcqt.header_id=$1 order by gcqt.id desc limit $2 offset $3",[header_id,limit,offset]);
    }
    else{ console.log('---->>3');
      var all_results = await db.query("SELECT gcqt.*, categories.title as category_name,category_group.title as header_name FROM gc_question as gcqt JOIN categories on categories.id = gcqt.category_id::integer JOIN category_group on category_group.id = gcqt.header_id::integer order by gcqt.id desc");    
      var results = await db.query("SELECT gcqt.*, categories.title as category_name,category_group.title as header_name FROM gc_question as gcqt JOIN categories on categories.id = gcqt.category_id::integer JOIN category_group on category_group.id = gcqt.header_id::integer order by gcqt.id desc limit $1 offset $2 ",[limit,offset]);    
    }
    return res.json({'count':all_results.rows.length,'data':results.rows});
  } catch (err) {
    return next(err);
  }
});

///get all heading
router.get("/get_heading", async function(req, res, next) {
  try {

    const results = await db.query("SELECT * FROM category_group where status='1' order by title asc");

    return res.json(results.rows);
  } catch (err) {
    return next(err);
  }
});

///get category by heading
router.get("/get_category_by_heading/:id", async function(req, res, next) {
  try {

    const results = await db.query("SELECT * FROM category_group_relation where category_group_id=$1",[req.params.id]);
    //
    var category_ids=[];
    var finalArr=[];
    if(results.rows.length > 0){
      if(results.rows[0].category_ids!='' && results.rows[0].category_ids!='undefined' && results.rows[0].category_ids!=null){
      category_ids=JSON.parse(results.rows[0].category_ids);
      console.log(category_ids);
       for(var i =0; i< category_ids.length; i++){
        if(category_ids[i].id!='undefined' && category_ids[i].id!=null && category_ids[i].id!='')
        {
          var catArr = await db.query("SELECT * FROM categories  WHERE id=$1" , [category_ids[i].id]);
          if(catArr.rows.length  >0 )
          {
            var catObj = catArr.rows[0];
            finalArr.push({'id':catObj.id,'title':catObj.title});
          }
        }
        }
      }
    }
    
    return res.json(finalArr);
  } catch (err) {
    return next(err);
  }
});

router.post("/publish_single_question", async function(req, res, next) {

  if(req.body[0].option1 && req.body[0].answer)
  {

    try {
            
        for(let i=0;i<req.body.length;i++)
        {
          let question = req.body[i];
           if(question.qui_type=='video' || question.qui_type=='text_and_video' || question.qui_type=='image' || question.qui_type=='text_and_image')
          {
              var quiz_url = question.question_image_url;
              var gc_question = await db.query(
                    "INSERT INTO gc_question (header_id,category_id,file_type, question_image, question_image_url,question, answer, option1, option2, option3, option4,  note, level, duration,created_by,status,qui_type) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17) RETURNING id",
                    [question.header_id,question.category_id,question.file_type,question.question_image,quiz_url,question.question,question.answer,question.option1,question.option2,question.option3,question.option4,question.note,question.level,question.duration,question.created_by, '1',question.qui_type]
              );

              //delete temp table
              const del = await db.query("DELETE FROM gc_question_temp WHERE id=$1", [question.id]);
                  
          }
          else
          { 
            ///////////generete image////////////
            var timeInMss = Date.now()
            var filename_png =timeInMss+'.png'; 
            var filename =timeInMss+'.svg'; 
            var htmlDiv = '<html><head><style>body {width: 400px;height: 400px;}</style></head><body>'+question.question+'</body></html>;'
            var reset = 'margin:0;padding:0;border:0;'
            var html = `<html style="${reset}">`
            html += `<body style="${reset}">`
            html += `<div id="_" style="width:300px;height:130px;vertical-align: middle;text-align: center;margin:0;padding:0;border:0px; display: table-cell;${reset}">`
            html += '<div style="display: inline-block;">'+question.question+'</div>'
            html += '</div>'
            html += '</body></html>'
            var pdf = await convertHtmlToPdf(html,filename_png)
            //live
            var fileContent = fs.readFileSync('/var/www/html/allam_cms_live/api/public/'+filename_png);
            // Setting up S3 upload parameters
            var fileName = 'gc/question/'+Date.now()+"-"+filename_png.toLowerCase().split(' ').join('-');
            var params = {
                  Bucket: 'allam-stg',
                  Key: fileName, // File name you want to save as in S3
                  Body: fileContent
            };

            // Uploading files to the bucket
            s3.upload(params, async function(err, data) {
                  if (err) {
                      return res.json({"status": 403,"msg":"question image not uploaded on S3"});
                      throw err;
                  }
                  //console.log(`File uploaded.`+ JSON.stringify(data));
                  console.log(`File uploaded successfully. ${data.Location}`);
                    var quiz_url = data.key;

                  var gc_question = await db.query(
                    "INSERT INTO gc_question (header_id,category_id,file_type, question_image, question_image_url,question, answer, option1, option2, option3, option4,  note, level, duration,created_by,status,qui_type) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17) RETURNING id",
                    [question.header_id,question.category_id,question.file_type,filename_png,quiz_url,'',question.answer,question.option1,question.option2,question.option3,question.option4,question.note,question.level,question.duration,question.created_by, '1',question.qui_type]
                  );

                  //delete temp table
                  const del = await db.query("DELETE FROM gc_question_temp WHERE id=$1", [question.id]);
                  
              });
            }
          }

        /////////////////////////////////////////////
         return res.json({
           "status": 200,
           "msg":"question added successfully"
         });
        
        

    } catch (err) {
      return next(err);
    }
  }
  else{
     return res.json({"status": 403, "msg": "Missing required parameters" });
  }
});

/////convert html to img
async function getJsFiddleHtml(url) {

    const identifierRegex = /(https?:\/\/jsfiddle.net\/[^/]+\/)?(.+)$/i
    const match = identifierRegex.exec(url)
    if (!match) {
        throw "Could not find an identifier!"
    }

    const identifier = match[2]
    return await new Promise((resolve, reject) => {
        JSFiddle.getFiddle(identifier, (err, fiddle) => {

            if (err) return reject(err)

            const reset = 'margin:0;padding:0;border:0;'

            let html = `<html style="${reset}">`
            html += `<body style="${reset}">`
            html += `<div id="_" style="width:300px;height:200px; display:inline-block;${reset}">`
            html += fiddle.html
            html += '</div><style>'
            html += fiddle.css
            html += '</style></body></html>'

            resolve(html)
        })
    })
}

async function convertHtmlToPdf(html,filepng) {

    const settings = {
        pageRanges: '1',
        displayHeaderFooter: false,
        printBackground: true
    }

    // setup browser
    const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage()
    await page.setContent(html)

    // calc size
    const size = await page.evaluate(() => {
        const div = document.querySelector('#_')
        return {
            height: div.offsetHeight + 'px',
            width: div.offsetWidth + 'px'
        }
    })

    // wait until all images have loaded
    await page.evaluate(async () => {
        const selectors = Array.from(document.querySelectorAll("img"))
        await Promise.all(selectors.map(img => {
            if (img.complete) return
            return new Promise((resolve, reject) => {
                img.addEventListener('load', resolve)
                img.addEventListener('error', reject)
            })
        }))
    })

    // wait a second for other resources
    await new Promise(resolve => {
        setTimeout(resolve, 1000);
    });

    // debug screenshot for debugging
    await page.screenshot({
        path: './public/'+filepng,
        type: "png",
        omitBackground: "true",
        clip: {
            x: 0,
            y: 0,
            width: parseInt(size.width),
            height: parseInt(size.height)
        }
    });

    // print PDF
    const buffer = await page.pdf(Object.assign(settings, size));
    await browser.close();
    return buffer;
}

function convertPdfToSvg(buffer, destination) {
    const stream = streamifier.createReadStream(buffer);
    stream.pipe(pdfToSvgConverter).pipe(destination);
}


async function optimizeSvg(stream) {

    const data = await new Promise((resolve, reject) => {
        const chunks = [];
        stream.on('data', chunk => chunks.push(chunk))
        stream.on('error', reject)
        stream.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')))
    })

    const svgo = new SVGO({})
    const osvg = await svgo.optimize(data)

    return osvg.data
}

async function resizeImage(question) {

    //const data = await new Promise((resolve, reject) => {
        //let question = question;
          var filename = question.question_image_url.replace(/^.*[\\\/]/, '');
          //image resize////
          var newfilename ='300x200-'+filename;
          var newfilePath = question.question_image_url.replace(filename,newfilename);
          question['old_file'] =question.question_image_url;
          await sharp( question.question_image_url)
            .resize(300, 200)
            .toFile(newfilePath, function(err) {

            });
            question.question_image_url=newfilePath;
            question.question_image=newfilename;
           
    //})
     // wait a second for other resources
    await new Promise(resolve => {
        setTimeout(resolve, 2000);
    });
    return question;
}

module.exports = router;