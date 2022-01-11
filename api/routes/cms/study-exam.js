const express = require("express");
const router = express.Router();
const db = require("../../db");

var multer  = require('multer');
var aws = require('aws-sdk');
var multerS3 = require('multer-s3');
var bodyParser = require('body-parser')

const fs = require('fs');
var xlsxtojson = require("xlsx-to-json-lc");
var xlsxj = require("xlsx-to-json");
var AdmZip = require('adm-zip');
const multipart = require('connect-multiparty');
const multipartMiddleware = multipart({ uploadDir: './uploads' });
const common = require("../../config/common.js");
const sharp = require('sharp');
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
            const fileName = 'quiz/'+Date.now()+"-"+file.originalname.toLowerCase().split(' ').join('-');
            cb(null, fileName); //use Date.now() for unique file keys
        },
        metadata: (req, file, callBack) => {
            callBack(null, { fieldName: file.fieldname })
        } 
    })
});

router.post('/save_quiz_image', upload.single('quiz_icon'), async function(req, res, next){
  var quiz_icon = "";
    if(req.file){
      console.log("image is ",req.file.key);
      quiz_icon = req.file.key;
    }
    return res.json({'status': 200, 'quiz_icon': quiz_icon});
});

router.post('/save_quiz_image_new', async function(req, res, next){
  var quiz_icon = "";
  console.log(req.body);

    if(req.body.isFile){
       ///s3 upload 
      var buf = Buffer.from(req.body.quiz_icon.replace(/^data:image\/\w+;base64,/, ""),'base64')
      var quiz_icon="quiz/"+Date.now()+"-quiz.png";
      s3.putObject({Bucket: 'allam-stg', Key: quiz_icon, Body: buf}, function(err, data) {
        if (err) {
          //return res.send({ success: false, err: err });
        } else {
          //return res.send({ success: true });
        }
      });

      //quiz_icon = req.file.key;
    }
    return res.json({'status': 200, 'quiz_icon': quiz_icon});
});

router.post('/update_quiz_image', upload.single('quiz_icon'), async function(req, res, next){
    var quiz_temp_id = common.decode64(req.body.quiz_temp_id);
    console.log("id is ",quiz_temp_id);
    const res_cat = await db.query("SELECT * FROM cms_quiz_temp WHERE id=$1", [
      quiz_temp_id
      ]);

    var quiz_icon = res_cat.rows[0].quiz_icon_url;
    if(req.file){
      console.log("image is ",req.file.key);
    
      console.log("Show "+res_cat.rows[0].quiz_icon_url);
      s3.deleteObject({
        Bucket: 'allam-stg',
        Key: res_cat.rows[0].quiz_icon_url
      },function (err,data){
        //res.status(200).send("File has been deleted successfully");

      })
      quiz_icon = req.file.key;
    }

    return res.json({'status': 200, 'quiz_icon': quiz_icon});
})

router.post('/update_quiz_image_new', async function(req, res, next){
    var quiz_temp_id = common.decode64(req.body.quiz_temp_id);

    const res_cat = await db.query("SELECT * FROM cms_quiz_temp WHERE id=$1", [
      quiz_temp_id
      ]);

    var quiz_icon = res_cat.rows[0].quiz_icon_url;
    if(req.body.isFile)
    {
      console.log("Show "+res_cat.rows[0].quiz_icon_url);
      s3.deleteObject({
        Bucket: 'allam-stg',
        Key: res_cat.rows[0].quiz_icon_url
      },function (err,data){
        //res.status(200).send("File has been deleted successfully");

      })
     ///////////
      ///s3 upload
      var buf = Buffer.from(req.body.quiz_icon.replace(/^data:image\/\w+;base64,/, ""),'base64')
      var quiz_icon="quiz/"+Date.now()+"-cat.png";
      s3.putObject({Bucket: 'allam-stg', Key: quiz_icon, Body: buf}, function(err, data) {
        if (err) {
          //return res.send({ success: false, err: err });
        } else {
          //return res.send({ success: true });
        }
      });

    }

    return res.json({'status': 200, 'quiz_icon': quiz_icon});
})

router.get('/api/upload', (req, res) => {
    res.json({ 'message': 'hello' });
});

/*router.post('/api/upload', multipartMiddleware, (req, res, next) => {
  xlsxj({
    input: req.files.uploads[0].path,
    output: null,
    //sheet: "tags"
  }, function(err, result) {
    if(err) {
      console.error(err);
    }else {
      console.log(result);
    }
  })

});*/

const uploadFile = (filePath, fileName) => {
    // Read content from the file

    const fileContent = fs.readFileSync(filePath);

    // Setting up S3 upload parameters
    const filename = 'quiz/question/'+Date.now()+"-"+fileName.toLowerCase().split(' ').join('-');
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

router.post('/api/upload/:quiz_type', multipartMiddleware, (req, res, next) => {
    //res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    var exceltojson; //Initialization
    //res.json({ 'message': req.files.uploads[0].originalFilename });
    //console.log(req.files);
    console.log('existImage ' + req.body.existImage);
    //console.log('file '+req.files.uploads[1])
    //throw new Error('your die message here');
    let existImage = req.body.existImage;
    let quiz_type = req.params.quiz_type;
    console.log('quiz_type ' + quiz_type);
    //throw new Error('your die message here');
    /*if (req.files && req.files.uploads.length == 0) { 
        return res.status(200).json({ error_code: 1, err_desc: "Files are not uploaded correctly, upload both file", data: null });
    }*/
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
                if (excelRecord.quiz_type == "") {
                    excelRecord.Remarks += "Quiz type Can not be blank.<br/>";
                }else{
                  var master_quiz     = await db.query("SELECT id,name FROM master_quiz where name=$1", [excelRecord.quiz_type]);
                  var quizData = master_quiz.rows;
                  //console.log('quizData', quizData);
                  //console.log('master_quiz.rows.length', master_quiz.rows.length);
                  if (typeof quizData !== 'undefined' && quizData.length > 0) {
                    //console.log('in ', master_quiz.rows[0].id);
                    excelRecord.quiz_type = master_quiz.rows[0].id;
                  }else{ //console.log('out ');
                    excelRecord.Remarks += "Quiz type not same as per master quiz data.<br/>";
                  }

                }
                if(quiz_type == 2){
                  if (excelRecord.quiz_sub_type == "" ) {
                      excelRecord.Remarks += "Quiz Sub type Can not be blank.<br/>";
                  }else{
                    var master_sub_quiz     = await db.query("SELECT id,name FROM master_sub_quiz where name=$1", [excelRecord.quiz_sub_type]);
                    var quizData = master_sub_quiz.rows;
                    if (typeof quizData !== 'undefined' && quizData.length > 0) {
                      excelRecord.quiz_sub_type = master_sub_quiz.rows[0].id;
                    }else{
                      excelRecord.Remarks += "Quiz Sub type not same as per master sub quiz data.<br/>";
                    }
                  }
                }
                if(quiz_type == 1){
                  if (excelRecord.class == "") {
                      excelRecord.Remarks += "Quiz class Can not be blank.<br/>";
                  }else{
                    var master_class     = await db.query("SELECT id,name FROM master_class where name=$1", [excelRecord.class]);
                    var quizData = master_class.rows;
                    if (typeof quizData !== 'undefined' && quizData.length > 0) {
                      excelRecord.class = master_class.rows[0].id;
                    }else{
                      excelRecord.Remarks += "Class not same as per master data.<br/>";
                    }
                  }
                }
                if(quiz_type == 1){
                  if (excelRecord.semester == "") {
                      excelRecord.Remarks += "Quiz semester Can not be blank.<br/>";
                  }else{
                    var master_semester     = await db.query("SELECT id,name FROM master_semester where name=$1", [excelRecord.semester]);
                    var quizData = master_semester.rows;
                    if (typeof quizData !== 'undefined' && quizData.length > 0) {
                      excelRecord.semester = master_semester.rows[0].id;
                    }else{
                      excelRecord.Remarks += "Semester not same as per master data.<br/>";
                    }
                  }
                }
                if(quiz_type == 1){
                  if (excelRecord.subject == "") {
                      excelRecord.Remarks += "Quiz subject Can not be blank.<br/>";
                  }else{
                    var master_subject = await db.query('SELECT id,name FROM master_subject where name = $1', [excelRecord.subject]);
                    var subjectData = master_subject.rows;
                    if (typeof subjectData !== 'undefined' && subjectData.length > 0) {
                      
                      excelRecord.subject = master_subject.rows[0].id;
                    }else{
                      excelRecord.Remarks += "Subject not same as per master data.<br/>";
                    }
                  }
                }
                if(quiz_type == 1){
                  if (excelRecord.chapter == "") {
                      excelRecord.Remarks += "Quiz chapter Can not be blank.<br/>";
                  }else{
                    var master_chapter     = await db.query("SELECT id,name FROM master_chapter where name=$1", [excelRecord.chapter]);
                    var quizData = master_chapter.rows;
                    if (typeof quizData !== 'undefined' && quizData.length > 0) {
                      excelRecord.chapter = master_chapter.rows[0].id;
                    }else{
                      excelRecord.Remarks += "Chapter not same as per master data.<br/>";
                    }
                  }
                }
                if(quiz_type == 1){
                  if (excelRecord.lesson == "") {
                      excelRecord.Remarks += "Quiz lesson Can not be blank.<br/>";
                  }else{
                    var master_lesson     = await db.query("SELECT id,name FROM master_lesson where name=$1", [excelRecord.lesson]);
                    var quizData = master_lesson.rows;
                    if (typeof quizData !== 'undefined' && quizData.length > 0) {
                      excelRecord.lesson = master_lesson.rows[0].id;
                    }else{
                      excelRecord.Remarks += "Lesson not same as per master data.<br/>";
                    }
                  }
                }
                if(quiz_type == 2){
                  if (excelRecord.group == "") {
                      excelRecord.Remarks += "Quiz group Can not be blank.<br/>";
                  }else{
                    var master_group     = await db.query("SELECT id,name FROM master_group where name=$1", [excelRecord.group]);
                    var quizData = master_group.rows;
                    if (typeof quizData !== 'undefined' && quizData.length > 0) {
                      excelRecord.group = master_group.rows[0].id;
                    }else{
                      excelRecord.Remarks += "Group not same as per master data.<br/>";
                    }
                  }
                }
                if (excelRecord.quant_verbal == "" && quiz_type==2) {
                    excelRecord.Remarks += "Quant verbal Can not be blank.<br/>";
                }

                if (excelRecord.level == "" && quiz_type==1) {
                    excelRecord.Remarks += "Level Can not be blank.<br/>";
                }
                if (excelRecord.level != "" && quiz_type==1 && isNaN(parseInt(excelRecord.level))) {
                    excelRecord.Remarks += "Level should be number only.<br/>";
                }

                if (excelRecord.question == "") {
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
                if (excelRecord.answer == "") { 
                    excelRecord.Remarks += "Answer Can not be blank.<br/>";
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
                console.log(excelRecord);
                // if (excelRecord.option2 == "") {
                //     excelRecord.Remarks += "Option 2 Can not be blank.<br/>";
                // }
                // if (excelRecord.option3 == "") {
                //     excelRecord.Remarks += "Option 3 Can not be blank.<br/>";
                // }
                // if (excelRecord.option4 == "") {
                //     excelRecord.Remarks += "Option 4 Can not be blank.<br/>";
                // }
                // if (excelRecord.level == "") {
                //     excelRecord.Remarks += "Level Can not be blank.<br/>";
                // }
                // if (excelRecord.note == "") {
                //     excelRecord.Remarks += "Note Can not be blank.<br/>";
                // }
                if (excelRecord.duration == "") {
                    excelRecord.Remarks += "Question duration Can not be blank.<br/>";
                }
                if (excelRecord.Remarks != "") {
                    validateArray.push(excelRecord);
                }
                //console.log(JSON.stringify(excelRecord));
            });

            // zipEntries.forEach(function (zipEntry) {
            //   //console.log(zipEntry.toString()); // outputs zip entries information
            //   console.log(zipEntry.name );
            //   if (zipEntry.name != '') {
            //     console.log('/var/www/html/allam_cms_live/api/uploads/'+zipEntry.entryName)
            //     result['question_url'] = '/var/www/html/allam_cms_live/api/uploads/'+zipEntry.entryName;
            //   }
            //    if (zipEntry.entryName == "my_file.txt") {
            //        console.log(zipEntry.getData().toString('utf8'));
            //    }
                  /*zlib.gunzip(data.Body, function (err, result) {
                    if (err) {
                        console.log(err);
                    } else {
                        var extractedData = result;
                        s3.putObject({
                        Bucket: "bucketName",
                        Key: "filename",
                        Body: extractedData,
                        ContentType: 'content-type'
                        }, function (err) {
                             console.log('uploaded file: ' + err);
                        });
                    }
                  });*/
            //});


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

router.post('/api/curr_upload/:quiz_type', multipartMiddleware, (req, res, next) => {
    //res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    var exceltojson; //Initialization
    //console.log(req.files);
    console.log('existImage ' + req.body.existImage);
    //console.log('file '+req.files.uploads[1])

    let existImage = req.body.existImage;
    let quiz_type = req.params.quiz_type;
    var timeInMss = Date.now();
   
    if (req.files.uploads.length != 2 && existImage == 'true') { 
        return res.status(200).json({ error_code: 1, err_desc: "Files are not uploaded correctly, upload both file", data: null });
    }
    if (req.files.uploads[0].originalFilename.split('.')[req.files.uploads[0].originalFilename.split('.').length - 1] !== 'xlsx') {
        return res.status(200).json({ error_code: 1, err_desc: "First File should be an xlsx file", data: null });
    }
    if (req.files.uploads[1] == undefined && existImage == 'true') { 
      return res.status(200).json({ error_code: 1, err_desc: "You have to upload zip file because you have choose yes for images", data: null });
    }
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

              zip.extractAllTo(/*target path*/"./uploads/"+timeInMss+"/", /*overwrite*/true);
            }
            result.forEach(async function (excelRecord) {
                excelRecord.Remarks = "";
                excelRecord.category_id = 0;
                if (excelRecord.quiz_type == "") {
                    excelRecord.Remarks += "Quiz type Can not be blank.<br/>";
                }else{
                  var master_quiz     = await db.query("SELECT id,name FROM master_quiz where name=$1", [excelRecord.quiz_type]);
                  var quizData = master_quiz.rows;
                  //console.log('quizData', quizData);
                  //console.log('master_quiz.rows.length', master_quiz.rows.length);
                  if (typeof quizData !== 'undefined' && quizData.length > 0) {
                    //console.log('in ', master_quiz.rows[0].id);
                    excelRecord.quiz_type = master_quiz.rows[0].id;
                  }else{ //console.log('out ');
                    excelRecord.Remarks += "Quiz type not same as per master quiz data.<br/>";
                  }

                }
                if(quiz_type == 2){
                  if (excelRecord.quiz_sub_type == "" ) {
                      excelRecord.Remarks += "Quiz Sub type Can not be blank.<br/>";
                  }else{
                    var master_sub_quiz     = await db.query("SELECT id,name FROM master_sub_quiz where name=$1", [excelRecord.quiz_sub_type]);
                    var quizData = master_sub_quiz.rows;
                    if (typeof quizData !== 'undefined' && quizData.length > 0) {
                      excelRecord.quiz_sub_type = master_sub_quiz.rows[0].id;
                    }else{
                      excelRecord.Remarks += "Quiz Sub type not same as per master sub quiz data.<br/>";
                    }
                  }
                }
                if(quiz_type == 1){
                  if (excelRecord.class == "") {
                      excelRecord.Remarks += "Quiz class Can not be blank.<br/>";
                  }else{
                    var master_class     = await db.query("SELECT id,name FROM master_class where name=$1", [excelRecord.class]);
                    var quizData = master_class.rows;
                    if (typeof quizData !== 'undefined' && quizData.length > 0) {
                      excelRecord.class = master_class.rows[0].id;
                    }else{
                      excelRecord.Remarks += "Class not same as per master data.<br/>";
                    }
                  }
                }
                if(quiz_type == 1){
                  if (excelRecord.semester == "") {
                      excelRecord.Remarks += "Quiz semester Can not be blank.<br/>";
                  }else{
                    var master_semester     = await db.query("SELECT id,name FROM master_semester where name=$1", [excelRecord.semester]);
                    var quizData = master_semester.rows;
                    if (typeof quizData !== 'undefined' && quizData.length > 0) {
                      excelRecord.semester = master_semester.rows[0].id;
                    }else{
                      excelRecord.Remarks += "Semester not same as per master data.<br/>";
                    }
                  }
                }
                if(quiz_type == 1){
                  if (excelRecord.subject == "") {
                      excelRecord.Remarks += "Quiz subject Can not be blank.<br/>";
                  }else{
                    var master_subject = await db.query('SELECT id,name FROM master_subject where name = $1', [excelRecord.subject]);
                    var subjectData = master_subject.rows;
                    if (typeof subjectData !== 'undefined' && subjectData.length > 0) {
                      
                      excelRecord.subject = master_subject.rows[0].id;
                    }else{
                      excelRecord.Remarks += "Subject not same as per master data.<br/>";
                    }
                  }
                }
                if(quiz_type == 1){
                  if (excelRecord.chapter == "") {
                      excelRecord.Remarks += "Quiz chapter Can not be blank.<br/>";
                  }else{
                    var master_chapter     = await db.query("SELECT id,name FROM master_chapter where name=$1", [excelRecord.chapter]);
                    var quizData = master_chapter.rows;
                    if (typeof quizData !== 'undefined' && quizData.length > 0) {
                      excelRecord.chapter = master_chapter.rows[0].id;
                    }else{
                      excelRecord.Remarks += "Chapter not same as per master data.<br/>";
                    }
                  }
                }
                if(quiz_type == 1){
                  if (excelRecord.lesson == "") {
                      excelRecord.Remarks += "Quiz lesson Can not be blank.<br/>";
                  }else{
                    var master_lesson     = await db.query("SELECT id,name FROM master_lesson where name=$1", [excelRecord.lesson]);
                    var quizData = master_lesson.rows;
                    if (typeof quizData !== 'undefined' && quizData.length > 0) {
                      excelRecord.lesson = master_lesson.rows[0].id;
                    }else{
                      excelRecord.Remarks += "Lesson not same as per master data.<br/>";
                    }
                  }
                }
                if(quiz_type == 2){
                  if (excelRecord.group == "") {
                      excelRecord.Remarks += "Quiz group Can not be blank.<br/>";
                  }else{
                    var master_group     = await db.query("SELECT id,name FROM master_group where name=$1", [excelRecord.group]);
                    var quizData = master_group.rows;
                    if (typeof quizData !== 'undefined' && quizData.length > 0) {
                      excelRecord.group = master_group.rows[0].id;
                    }else{
                      excelRecord.Remarks += "Group not same as per master data.<br/>";
                    }
                  }
                }
                if (excelRecord.quant_verbal == "" && quiz_type==2) {
                    excelRecord.Remarks += "Quant verbal Can not be blank.<br/>";
                }

                if (excelRecord.level == "" && quiz_type==1) {
                    excelRecord.Remarks += "Level Can not be blank.<br/>";
                }
                if (excelRecord.level != "" && quiz_type==1 && isNaN(parseInt(excelRecord.level))) {
                    excelRecord.Remarks += "Level should be number only.<br/>";
                }

                if (excelRecord.question_type == "") {
                    excelRecord.Remarks += "Question Type Can not be blank.<br/>";
                }
                if (excelRecord.question_type!="" && (excelRecord.question_type != "text" && excelRecord.question_type != "image" && excelRecord.question_type != "text_and_image")) {
                    excelRecord.Remarks += "Question Type shule be text, image or text_and_image.<br/>";
                }
                if (excelRecord.question == "" && excelRecord.question_type !='image') {
                    excelRecord.Remarks += "Question Can not be blank.<br/>";
                }
                if (excelRecord.question_file_url != "" && existImage == 'true') {
                    let zipData = zipEntries.map(a => a.entryName.toLowerCase());
                    //console.log(JSON.stringify(zipData[zipData.indexOf(excelRecord.question_file_url.toLowerCase())]));

                    if (zipData.indexOf(excelRecord.question_file_url.toLowerCase()) == -1) {
                        excelRecord.Remarks += "Question File path does not exist.<br/>";
                    }else{
                      //console.log('excelRecord.question_file_url '+excelRecord.question_file_url)
                      excelRecord.question_file_url = '/var/www/html/allam_cms_live/api/uploads/'+timeInMss+'/'+zipData[zipData.indexOf(excelRecord.question_file_url.toLowerCase())];
                      
                    }
                }
                if (excelRecord.answer == "") { 
                    excelRecord.Remarks += "Answer Can not be blank.<br/>";
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
                
                if (quiz_type == 2 && excelRecord.duration == "") {
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

router.get("/all_quiz", async function(req, res, next) {
  try {
    const results = await db.query("SELECT * FROM quiz order by id DESC limit 10 ");
    return res.json(results.rows);
  } catch (err) {
    return next(err);
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
      //console.log('req.body '+req.body.selectedData);
      //console.log("fileName "+ req.files.logo[0].key);
      //console.log("fileObj "+ JSON.stringify(req.files));
      
      let filedata = req.body.selectedData; //JSON.parse(req.body.fileData);
      let created_by = req.body.created_by;
      
      //console.log("length "+filedata.length);
      //console.log(req.body.category_ids);

      //console.log("created_by "+created_by);

        // var output;
        for ( var key = 0; key < filedata.length ; key++ ) {
             tVal = filedata[key];//some manipulation of someArr[key]
             (function(val){
              //if(filedata[key].question_file_url == ""){
                var image_name='';
                if(filedata[key].question_file_url!='' && filedata[key].question_image!="no"){
                  image_name = filedata[key].question_file_url.replace('/var/www/html/allam_cms_live/api/','');
                }

                 db.query( "INSERT INTO cms_quiz_question_temp (question, question_image, question_image_url, answer, option1, option2, option3, option4,  note, level, quiz_type, quiz_sub_type, class, semester, subject, chapter, lesson, groups, quant_verbal, type, status,save_type,created_by, duration,question_type,qui_type) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25,$26) RETURNING *",
                    [filedata[key].question, image_name, filedata[key].question_file_url, filedata[key].answer, filedata[key].option1, filedata[key].option2, filedata[key].option3, filedata[key].option4, filedata[key].note, filedata[key].level, filedata[key].quiz_type, filedata[key].quiz_sub_type, filedata[key].class, filedata[key].semester, filedata[key].subject, filedata[key].chapter, filedata[key].lesson, filedata[key].group, filedata[key].quant_verbal, 'curriculum', '0','bulk', created_by, filedata[key].duration,filedata[key].question_type,filedata[key].question_type]);
                
              //   }else{

              //     var filename = filedata[key].question_file_url.replace(/^.*[\\\/]/, '');
              //     const fileContent = fs.readFileSync(filedata[key].question_file_url);
              //     // Setting up S3 upload parameters
              //     const fileName = 'quiz/question/'+Date.now()+"-"+filename.toLowerCase().split(' ').join('-');
              //     const params = {
              //         Bucket: 'allam-stg',
              //         Key: fileName, // File name you want to save as in S3
              //         Body: fileContent
              //     };
              //     s3.upload(params, async function(err, data) {
              //       if (err) {
              //           return res.json({"status": 403,"msg":"question image not uploaded on S3"});
              //           throw err;
              //       }
              //       //console.log(`File uploaded.`+ JSON.stringify(data));
              //       //console.log(`File uploaded successfully. ${data.Location}`);
              //         var quiz_url = data.key;

              //         //console.log(val.question);
              //         //console.log('val '+JSON.stringify(val))
              //         //console.log('tVal '+JSON.stringify(tVal))

              //        db.query( "INSERT INTO quiz_question (question, question_image, question_image_url, answer, option1, option2, option3, option4,  note, level, quiz_type, quiz_sub_type, class, semester, subject, chapter, lesson, groups, quant_verbal, type) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20) RETURNING *",
              //         [val.question, val.question_image, quiz_url, val.answer, val.option1, val.option2, val.option3, val.option4, val.note, val.level, val.quiz_type, val.quiz_sub_type, val.class, val.semester, val.subject, val.chapter, val.lesson, val.group, val.quant_verbal, 'Curriculum']);
              //  });
              // }
             })(tVal);
        }
      //res.send('Successfully uploaded ' + req.file + ' files!')
      return res.json({ "status": 200, message: "Record inserted" });
    } catch (err) {
      return next('Error '+err);
    }
  
});

//////update question in draft(temp table)
router.post("/update_question_in_deaft", async function(req, res, next) {

  if(req.body.option1 && req.body.answer)
  {
    var question = req.body;
    var file_name_url='';
    var file_url='';
    var questionTxt=question.question;
    var question_type=question.question_type;
    console.log(question);
    try {
        if(question.question_type=='image' || question.question_type=='text_and_image')
          {
            if(question.isFile)
            {
              ///local upload
              var buf = Buffer.from(question.edit_question_image.replace(/^data:image\/\w+;base64,/, ""),'base64')
              var filename =Date.now()+".png";
              file_url="/var/www/html/allam_cms_live/api/uploads/questions/images/"+filename;
              file_name_url="uploads/questions/images/"+filename;
              require("fs").writeFile(file_url, buf, function(err) {
                //console.log(err);
                //fs.chmodSync(file_url, 0666);
              });
              
              //fs.chmod(file_url, '0777')
  
            }
            else
            {
              file_name_url=question.question_image;
              file_url=question.question_image_url;
            }
            questionTxt='';
            if(question.question_type=='text_and_image'){
                questionTxt  =question.question;
                question_type=question.question_type;
            }
          }

        var quiz_question = await db.query("UPDATE cms_quiz_question_temp SET question=$1,question_image=$2,question_image_url=$3,option1=$4,option2=$5,option3=$6,option4=$7,answer=$8,note=$9,level=$10,quiz_type=$11,quiz_sub_type=$12,class=$13,semester=$14,subject=$15,chapter=$16,lesson=$17,groups=$18,type=$19,quant_verbal=$20,status=$21,save_type=$22,modified_by=$23, duration=$24, question_type=$25, qui_type=$26 WHERE id=$27 RETURNING *",[question.question,file_name_url,file_url,question.option1,question.option2,question.option3,question.option4,question.answer,question.note,question.level,question.quiz_type,question.quiz_sub_type,question.class,question.semester,question.subject,question.chapter,question.lesson,question.group,'curriculum',question.quant_verbal,'0','bulk',question.created_by, question.duration,question.question_type,question.question_type,question.id]);

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

router.post("/save_quiz", async function(req, res, next) {

  if(req.body[0].option1 && req.body[0].answer)
  {

    try {
        var questionArr=req.body;
        var oldImage=[]; 
        var newImage=[]; 
       
        for(let i=0;i<questionArr.length;i++)
        {
          let question = questionArr[i];
          //console.log("fileObj "+ JSON.stringify(question))
          ////// check image exists or not ////////
          if(question.question_image_url == "" || question.question_image_url == null){
            var quiz_url = '';
            var quiz_question = await db.query(
                    "INSERT INTO cms_quiz_question (question,question_image,question_image_url,option1,option2,option3,option4,answer,note,level,quiz_type,quiz_sub_type,class,semester,subject,chapter,lesson,groups,type,quant_verbal,status,save_type,created_by, duration,question_type,qui_type,option_type) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23, $24,$25,$26,$27) RETURNING id",
                    [question.question,'',quiz_url,question.option1,question.option2,question.option3,question.option4,question.answer,question.note,question.level,question.quiz_type,question.quiz_sub_type,question.class,question.semester,question.subject,question.chapter,question.lesson,question.group,'curriculum',question.quant_verbal,'1',question.save_type,question.created_by, question.duration,question.question_type,question.qui_type,'text']
                  );
          }else{ 
                 //console.log('question.question_image_url '+question.question_image_url);
                 
                  ///end image resize
                  question = await resizeImage(question);
                  console.log(question.question_image_url);
                  var filename = question.question_image_url.replace(/^.*[\\\/]/, '');
                  const fileContent = fs.readFileSync(question.question_image_url);
                  // Setting up S3 upload parameters
                  const fileName = 'quiz/question/'+Date.now()+"-"+question.question_image.toLowerCase().split(' ').join('-');
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
                        
                        //fs.unlinkSync(question.question_image_url);
                        //fs.unlinkSync(question.old_file);
                        oldImage.push(question.old_file);
                        newImage.push(question.question_image_url);

                    } catch (e) {
                        //error deleting the file
                    }

                    //console.log(`File uploaded.`+ JSON.stringify(data));
                    //console.log(`File uploaded successfully. ${data.Location}`);
                      var quiz_url = data.key;
                      var quiz_question = await db.query(
                    "INSERT INTO cms_quiz_question (question,question_image,question_image_url,option1,option2,option3,option4,answer,note,level,quiz_type,quiz_sub_type,class,semester,subject,chapter,lesson,groups,type,quant_verbal,status,save_type,created_by, duration,question_type,qui_type,option_type) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23, $24,$25,$26,$27) RETURNING id",
                    [question.question,fileName,quiz_url,question.option1,question.option2,question.option3,question.option4,question.answer,question.note,question.level,question.quiz_type,question.quiz_sub_type,question.class,question.semester,question.subject,question.chapter,question.lesson,question.group,'curriculum',question.quant_verbal,'1',question.save_type,question.created_by, question.duration,question.question_type,question.qui_type,'text']
                  );

                  
                });
          }
            //delete temp table
            const del = await db.query("DELETE FROM cms_quiz_question_temp WHERE id=$1", [question.id]);
        }
        //delete old file
        oldImage.forEach(element => { 
          try {                   
              fs.unlinkSync(element);
          } catch (e) {
              //error deleting the file
          }
        }); 
         //delete new file
        newImage.forEach(element => { 
          try {                   
              fs.unlinkSync(element);
          } catch (e) {
              //error deleting the file
          }
        }); 
       
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
                  db.query( "INSERT INTO quiz_question (question, question_image, question_image_url, answer, option1, option2, option3, option4,  note, level, quiz_type, quiz_sub_type, class, semester, subject, chapter, lesson, groups, quant_verbal, type,option_type) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21) RETURNING *",
                    [filedata[key].question, filedata[key].question_image, filedata[key].question_file_url, filedata[key].answer, filedata[key].option1, filedata[key].option2, filedata[key].option3, filedata[key].option4, filedata[key].note, filedata[key].level, filedata[key].quiz_type, filedata[key].quiz_sub_type, filedata[key].class, filedata[key].semester, filedata[key].subject, filedata[key].chapter, filedata[key].lesson, filedata[key].group, filedata[key].quant_verbal, 'competitive','text'],function(err, res, fields) {
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

                     db.query( "INSERT INTO quiz_question (question, question_image, question_image_url, answer, option1, option2, option3, option4,  note, level, quiz_type, quiz_sub_type, class, semester, subject, chapter, lesson, groups, quant_verbal, type,option_type) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21) RETURNING *",
                      [val.question, val.question_image, quiz_url, val.answer, val.option1, val.option2, val.option3, val.option4, val.note, val.level, val.quiz_type, val.quiz_sub_type, val.class, val.semester, val.subject, val.chapter, val.lesson, val.group, val.quant_verbal, 'competitive','text'],function(err, res, fields) {
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
    const result = await db.query("DELETE FROM cms_quiz_question_temp WHERE id=$1", [
      req.params.id
    ]);
    return res.json({ message: "Record deleted" });
  } catch (err) {
    return next(err);
  }
});

///get all draft qustion by user id
router.get("/get_draft_question_by_user/:id", async function(req, res, next) {
  try {
    /*const results = await db.query("SELECT * FROM cms_quiz_question_temp WHERE created_by=$1 AND save_type=$2 AND type=$3" , [
      req.params.id,'bulk','Curriculum'
    ]);*/
    const results = await db.query("SELECT cqt.*, master_quiz.name as quiz_type_name FROM cms_quiz_question_temp as cqt JOIN master_quiz on master_quiz.id = cqt.quiz_type::integer  WHERE created_by=$1 AND save_type=$2 AND type=$3" , [
      req.params.id,'bulk','curriculum']);

    return res.json(results.rows);
  } catch (err) {
    return next(err);
  }
});

router.get("/all_quiz_by_user/:id", async function(req, res, next) {
  try {
    const quiz = await db.query("SELECT * FROM cms_quiz WHERE created_by=$1 order by id DESC",[
      req.params.id
    ]);

    const draft_quiz = await db.query("SELECT * FROM cms_quiz_temp WHERE created_by=$1 order by id DESC",[
      req.params.id ]);
    return res.json({'quiz':quiz.rows,'draft_quiz':draft_quiz.rows});
  } catch (err) {
    return next(err);
  }
});

//////// Here start for competitive data //////////////////////

router.post("/add_question_competitive_temp", async function(req, res, next) {
  
    try {
      //console.log('req.body '+req.body.selectedData);
      //console.log("fileName "+ req.files.logo[0].key);
      //console.log("fileObj "+ JSON.stringify(req.files));
      
      let filedata = req.body.selectedData; //JSON.parse(req.body.fileData);
      let created_by = req.body.created_by;
      var quiz_temp_id = common.decode64(req.body.quiz_temp_id);
      //console.log("length "+filedata.length);
      //console.log(req.body.category_ids);

      //console.log("created_by "+created_by);

        // var output;
        for ( var key = 0; key < filedata.length ; key++ ) {
             tVal = filedata[key];//some manipulation of someArr[key]
             (function(val){
                var image_name = filedata[key].question_file_url.replace('/var/www/html/allam_cms_live/api/','');
                 db.query( "INSERT INTO cms_quiz_question_temp (question, question_image, question_image_url, answer, option1, option2, option3, option4,  note, level, quiz_type, quiz_sub_type, class, semester, subject, chapter, lesson, groups, quant_verbal, type, status,save_type,created_by,quiz_temp_id, duration,question_type,qui_type) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24, $25,$26,$27) RETURNING *",
                    [filedata[key].question, image_name, filedata[key].question_file_url, filedata[key].answer, filedata[key].option1, filedata[key].option2, filedata[key].option3, filedata[key].option4, filedata[key].note, '', filedata[key].quiz_type, filedata[key].quiz_sub_type, filedata[key].class, filedata[key].semester, filedata[key].subject, filedata[key].chapter, filedata[key].lesson, filedata[key].group, filedata[key].quant_verbal, 'competitive', '0','bulk', created_by,quiz_temp_id, filedata[key].duration,filedata[key].question_type,filedata[key].question_type]);

             })(tVal);
        }
      //res.send('Successfully uploaded ' + req.file + ' files!')
      return res.json({ "status": 200, message: "Record inserted" });
    } catch (err) {
      return next('Error '+err);
    }
  
});

//////update question in draft(temp table)
router.post("/update_question_competitive_draft", async function(req, res, next) {

  if(req.body.option1 && req.body.answer)
  {
    var question = req.body;
    var file_name_url='';
    var file_url='';
    var questionTxt=question.question;
    var question_type=question.question_type;
    console.log(question);

    try {

        if(question.question_type=='image' || question.question_type=='text_and_image')
          {
            if(question.isFile)
            {
              ///local upload
              var buf = Buffer.from(question.edit_question_image.replace(/^data:image\/\w+;base64,/, ""),'base64')
              var filename =Date.now()+".png";
              file_url="/var/www/html/allam_cms_live/api/uploads/questions/images/"+filename;
              file_name_url="uploads/questions/images/"+filename;
              require("fs").writeFile(file_url, buf, function(err) {
                //console.log(err);
              });
            }
            else
            {
              file_name_url=question.question_image;
              file_url=question.question_image_url;
            }
            questionTxt='';
            if(question.question_type=='text_and_image'){
                questionTxt  =question.question;
                question_type=question.question_type;
            }
          }

        var quiz_question = await db.query("UPDATE cms_quiz_question_temp SET question=$1,question_image=$2,question_image_url=$3,option1=$4,option2=$5,option3=$6,option4=$7,answer=$8,note=$9,level=$10,quiz_type=$11,quiz_sub_type=$12,class=$13,semester=$14,subject=$15,chapter=$16,lesson=$17,groups=$18,type=$19,quant_verbal=$20,status=$21,save_type=$22,modified_by=$23, duration=$24, question_type=$25, qui_type=$26 WHERE id=$27 RETURNING *",[question.question,file_name_url,file_url, question.option1,question.option2,question.option3,question.option4,question.answer,question.note,question.level,question.quiz_type,question.quiz_sub_type,question.class,question.semester,question.subject,question.chapter,question.lesson,question.group,'competitive',question.quant_verbal,'0','bulk',question.created_by, question.duration,question_type,question_type, question.id]);

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

router.post("/save_competitive_quiz", async function(req, res, next) {

  let filedata = req.body.questionData; //JSON.parse(req.body.fileData);
  var quiz_temp_id = common.decode64(req.body.quiz_temp_id);

  if(filedata.length > 0 && quiz_temp_id)
  {

    try {
      var quiz_temp_id = common.decode64(req.body.quiz_temp_id);
      //console.log('quiz_temp_id '+quiz_temp_id)
      const temp_quiz = await db.query("SELECT * FROM cms_quiz_temp WHERE id=$1", [quiz_temp_id]);
          
          if(!temp_quiz.rows[0]){
            return res.json({"status": 403, "msg": "Missing required parameters" });
          }

          var quiz_title = temp_quiz.rows[0].quiz_title;
          var quiz_type = temp_quiz.rows[0].quiz_type;
          var quiz_sub_type = temp_quiz.rows[0].quiz_sub_type;
          var quiz_description = temp_quiz.rows[0].quiz_description;
          var quiz_icon_url = temp_quiz.rows[0].quiz_icon_url;
          var save_type = temp_quiz.rows[0].save_type;
          var created_by = temp_quiz.rows[0].created_by;

          var quiz = await db.query(
              "INSERT INTO cms_quiz (quiz_type,quiz_sub_type,quiz_title,quiz_description,quiz_icon_url,status,save_type,created_by) VALUES ($1,$2,$3,$4,$5,$6,$7,$8) RETURNING id",
              [quiz_type,quiz_sub_type,quiz_title,quiz_description,quiz_icon_url,'0',save_type,created_by]
            );
          var quiz_id  =  quiz.rows[0].id;
          var oldImage=[];
          var newImage=[];
        for(let i=0;i<filedata.length;i++)
        {
          let question = filedata[i];
          //console.log("fileObj "+ JSON.stringify(question))
          ////// check image exists or not ////////
          if(question.question_image_url == "" || question.question_image_url == null){
            var quiz_url = '';
            var quiz_question = await db.query(
                    "INSERT INTO cms_quiz_question (question,question_image,question_image_url,option1,option2,option3,option4,answer,note,level,quiz_type,quiz_sub_type,class,semester,subject,chapter,lesson,groups,type,quant_verbal,status,save_type,created_by, duration,question_type,qui_type,option_type) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23, $24,$25,$26,$27) RETURNING id",
                    [question.question,'',quiz_url,question.option1,question.option2,question.option3,question.option4,question.answer,question.note,question.level,question.quiz_type,question.quiz_sub_type,question.class,question.semester,question.subject,question.chapter,question.lesson,question.groups,'competitive',question.quant_verbal,'1',question.save_type,question.created_by, question.duration,question.question_type,question.question_type,'text']
                  );
                    var quiz_question_id = quiz_question.rows[0].id;
                    var quiz_question_map = db.query(
                      "INSERT INTO cms_quiz_question_mapping (question_id,quiz_id) VALUES ($1,$2) RETURNING *",
                      [quiz_question_id, quiz_id]
                    );
          }else{
                  //resize image 
                  question = await resizeImage(question);
                  console.log(question.question_image_url);
                  var filename = question.question_image_url.replace(/^.*[\\\/]/, '');
                  const fileContent = fs.readFileSync(question.question_image_url);
                  // Setting up S3 upload parameters
                  const fileName = 'quiz/question/'+Date.now()+"-"+question.question_image.toLowerCase().split(' ').join('-');
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
                        
                        //fs.unlinkSync(question.question_image_url);
                        //fs.unlinkSync(question.old_file);
                         newImage.push(question.question_image_url);
                         oldImage.push(question.old_file);
                    } catch (e) {
                        //error deleting the file
                    }
                    //console.log(`File uploaded.`+ JSON.stringify(data));
                    //console.log(`File uploaded successfully. ${data.Location}`);
                    var quiz_url = data.key;
                    var quiz_question = await db.query(
                    "INSERT INTO cms_quiz_question (question,question_image,question_image_url,option1,option2,option3,option4,answer,note,level,quiz_type,quiz_sub_type,class,semester,subject,chapter,lesson,groups,type,quant_verbal,status,save_type,created_by, duration,question_type,qui_type,option_type) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23, $24,$25,$26,$27) RETURNING id",
                    [question.question,fileName,quiz_url,question.option1,question.option2,question.option3,question.option4,question.answer,question.note,question.level,question.quiz_type,question.quiz_sub_type,question.class,question.semester,question.subject,question.chapter,question.lesson,question.groups,'competitive',question.quant_verbal,'1',question.save_type,question.created_by, question.duration,question.question_type,question.question_type,'text']
                  );
                    var quiz_question_id = quiz_question.rows[0].id;
                    var quiz_question_map = db.query(
                      "INSERT INTO cms_quiz_question_mapping (question_id,quiz_id) VALUES ($1,$2) RETURNING *",
                      [quiz_question_id, quiz_id]
                    );

                  
                });
          }
            //delete temp table
            db.query("DELETE FROM cms_quiz_temp WHERE id=$1", [quiz_temp_id]);
            db.query("DELETE FROM cms_quiz_question_temp WHERE quiz_temp_id=$1", [quiz_temp_id]);
        }
         //delete old file
        oldImage.forEach(element => { 
          try {                   
              fs.unlinkSync(element);
          } catch (e) {
              //error deleting the file
          }
        }); 
         //delete new file
        newImage.forEach(element => { 
          try {                   
              fs.unlinkSync(element);
          } catch (e) {
              //error deleting the file
          }
        }); 
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

///get all draft qustion by user id
router.get("/get_draft_question_competitive_by_user/:id/:quiz_temp_id", async function(req, res, next) {
  var quiz_temp_id = common.decode64(req.params.quiz_temp_id);
  try {
    const results = await db.query("SELECT cqt.*, master_quiz.name as quiz_type_name, master_sub_quiz.name as quiz_sub_type_name FROM cms_quiz_question_temp as cqt JOIN master_quiz on master_quiz.id = cqt.quiz_type::integer JOIN master_sub_quiz on master_sub_quiz.id = cqt.quiz_sub_type::integer  WHERE created_by=$1 AND save_type=$2 AND type=$3 AND quiz_temp_id=$4" , [
      req.params.id,'bulk','competitive',quiz_temp_id 
    ]);

    return res.json(results.rows);
  } catch (err) {
    return next(err);
  }
});

///get all draft quiz by user id
router.get("/get_draft_quiz_by_user/:id/:quiz_id", async function(req, res, next) {
  var quiz_temp_id = common.decode64(req.params.quiz_id);
  //console.log(quiz_temp_id);
  try {
    const results = await db.query("SELECT * FROM cms_quiz_temp WHERE created_by=$1 AND id=$2", [
      req.params.id,quiz_temp_id
    ]);

    return res.json(results.rows);
  } catch (err) {
    return next(err);
  }
});

//////for teacher supervisor
router.get("/get_publish_question_by_user/:id", async function(req, res, next) {
  try {
    var u_id=common.decode64(req.params.id);
    console.log(u_id);
    const results = await db.query("SELECT cq.*,mq.name as quiz_type_name FROM cms_quiz_question cq INNER JOIN master_quiz  mq ON cq.quiz_type::integer=mq.id WHERE cq.created_by=$1 AND cq.status=$2 order by cq.id desc", [u_id,'0']);
    const questionObj=results.rows;
    var resultObj = [];
    for(var i =0; i< questionObj.length; i++)
    {
      var qObj= questionObj[i];
      var sub_quiz_name = '';
      if(qObj.quiz_sub_type!='' && qObj.quiz_sub_type!=null && Number(qObj.quiz_sub_type) != 'NaN'){
        var sub_quiz = await db.query("SELECT name FROM master_sub_quiz WHERE id="+qObj.quiz_sub_type);
        if(sub_quiz.rows.length>0){
          sub_quiz_name = sub_quiz.rows[0].name;
        }
      }
      qObj['sub_quiz_name']=sub_quiz_name;

      var class_name = '';
      if(qObj.class!='' && qObj.class!=null && !isNaN(qObj.class)){
        var classQ = await db.query("SELECT name FROM master_class WHERE id="+qObj.class);
        if(classQ.rows.length>0){
          class_name = classQ.rows[0].name;
        }
      }
      qObj['class_name']=class_name;

      var semester_name = '';
      if(qObj.semester!='' && qObj.semester!=null && !isNaN(qObj.semester)){
        var semQ = await db.query("SELECT name FROM master_semester WHERE id="+qObj.semester);
        if(semQ.rows.length>0){
          semester_name = semQ.rows[0].name;
        }
      }
      qObj['semester_name']=semester_name;

       var lesson_name = '';
      if(qObj.lesson!='' && qObj.lesson!=null && !isNaN(qObj.lesson)){
        var lessonQ = await db.query("SELECT name FROM master_lesson WHERE id="+qObj.lesson);
        if(lessonQ.rows.length>0){
          lesson_name = lessonQ.rows[0].name;
        }
      }
      qObj['lesson_name']=lesson_name;

      var chapter_name = '';
      if(qObj.chapter!='' && qObj.chapter!=null && !isNaN(qObj.chapter)){
        var chapterQ = await db.query("SELECT name FROM master_chapter WHERE id="+qObj.chapter);
        if(chapterQ.rows.length>0){
          chapter_name = chapterQ.rows[0].name;
        }
      }
      qObj['chapter_name']=chapter_name;

      var level_name = '';
      if(qObj.level!='' && qObj.level!=null && !isNaN(qObj.level)){
        var levelQ = await db.query("SELECT name FROM master_level WHERE id="+qObj.level);
        if(levelQ.rows.length>0){
          level_name = levelQ.rows[0].name;
        }
      }
      qObj['level_name']=level_name;

      var group_name = '';
      if(qObj.groups!='' && qObj.groups!=null && !isNaN(qObj.groups)){
        var groupQ = await db.query("SELECT name FROM master_group WHERE id="+qObj.groups);
        if(groupQ.rows.length>0){
          group_name = groupQ.rows[0].name;
        }
      }
      qObj['level_name']=level_name;

      var subject_name = '';
      if(qObj.subject!='' && qObj.subject!=null && !isNaN(qObj.subject)){ 
        var subjectQ = await db.query("SELECT name FROM master_subject WHERE id="+qObj.subject);
        if(subjectQ.rows.length>0){
          subject_name = subjectQ.rows[0].name;
        }
      }
      qObj['subject_name']=subject_name;


      resultObj.push(qObj);

    }
    return res.json(resultObj);
  } catch (err) {
    return next(err);
  }
});

//////for teacher supervisor pagination
router.get("/get_publish_question_by_user_new/:id", async function(req, res, next) {
  try {
    var u_id=common.decode64(req.params.id);
    var page       = req.query.page;
    var size       = req.query.size;
    var limit  = 5;
    var offset = 0;
   
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

    const all_results = await db.query("SELECT cq.*,mq.name as quiz_type_name FROM cms_quiz_question cq INNER JOIN master_quiz  mq ON cq.quiz_type::integer=mq.id WHERE cq.created_by=$1 AND cq.status=$2 order by cq.id desc", [u_id,'0']);
    const results     = await db.query("SELECT cq.*,mq.name as quiz_type_name FROM cms_quiz_question cq INNER JOIN master_quiz  mq ON cq.quiz_type::integer=mq.id WHERE cq.created_by=$1 AND cq.status=$2 order by cq.id desc limit $3 offset $4", [u_id,'0',limit,offset]);
    const questionObj=results.rows;
    var resultObj = [];
    for(var i =0; i< questionObj.length; i++)
    {
      var qObj= questionObj[i];
      var sub_quiz_name = '';
      if(qObj.quiz_sub_type!='' && qObj.quiz_sub_type!=null && Number(qObj.quiz_sub_type) != 'NaN'){
        var sub_quiz = await db.query("SELECT name FROM master_sub_quiz WHERE id="+qObj.quiz_sub_type);
        if(sub_quiz.rows.length>0){
          sub_quiz_name = sub_quiz.rows[0].name;
        }
      }
      qObj['sub_quiz_name']=sub_quiz_name;

      var class_name = '';
      if(qObj.class!='' && qObj.class!=null && !isNaN(qObj.class)){
        var classQ = await db.query("SELECT name FROM master_class WHERE id="+qObj.class);
        if(classQ.rows.length>0){
          class_name = classQ.rows[0].name;
        }
      }
      qObj['class_name']=class_name;

      var semester_name = '';
      if(qObj.semester!='' && qObj.semester!=null && !isNaN(qObj.semester)){
        var semQ = await db.query("SELECT name FROM master_semester WHERE id="+qObj.semester);
        if(semQ.rows.length>0){
          semester_name = semQ.rows[0].name;
        }
      }
      qObj['semester_name']=semester_name;

       var lesson_name = '';
      if(qObj.lesson!='' && qObj.lesson!=null && !isNaN(qObj.lesson)){
        var lessonQ = await db.query("SELECT name FROM master_lesson WHERE id="+qObj.lesson);
        if(lessonQ.rows.length>0){
          lesson_name = lessonQ.rows[0].name;
        }
      }
      qObj['lesson_name']=lesson_name;

      var chapter_name = '';
      if(qObj.chapter!='' && qObj.chapter!=null && !isNaN(qObj.chapter)){
        var chapterQ = await db.query("SELECT name FROM master_chapter WHERE id="+qObj.chapter);
        if(chapterQ.rows.length>0){
          chapter_name = chapterQ.rows[0].name;
        }
      }
      qObj['chapter_name']=chapter_name;

      var level_name = '';
      if(qObj.level!='' && qObj.level!=null && !isNaN(qObj.level)){
        var levelQ = await db.query("SELECT name FROM master_level WHERE id="+qObj.level);
        if(levelQ.rows.length>0){
          level_name = levelQ.rows[0].name;
        }
      }
      qObj['level_name']=level_name;

      var group_name = '';
      if(qObj.groups!='' && qObj.groups!=null && !isNaN(qObj.groups)){
        var groupQ = await db.query("SELECT name FROM master_group WHERE id="+qObj.groups);
        if(groupQ.rows.length>0){
          group_name = groupQ.rows[0].name;
        }
      }
      qObj['level_name']=level_name;

      var subject_name = '';
      if(qObj.subject!='' && qObj.subject!=null && !isNaN(qObj.subject)){ 
        var subjectQ = await db.query("SELECT name FROM master_subject WHERE id="+qObj.subject);
        if(subjectQ.rows.length>0){
          subject_name = subjectQ.rows[0].name;
        }
      }
      qObj['subject_name']=subject_name;


      resultObj.push(qObj);

    }
    return res.json({'count':all_results.rows.length,'data':results.rows});
    //return res.json(resultObj);
  } catch (err) {
    return next(err);
  }
});

//////for super admin
router.get("/get_active_question", async function(req, res, next) {
  try {
   
    const results = await db.query("SELECT cq.*,mq.name as quiz_type_name,ust.first_name || ' ' || ust.last_name AS ts_name,ut.first_name || ' ' || ut.last_name AS t_name, cqqm.quiz_id FROM cms_quiz_question cq INNER JOIN master_quiz  mq ON cq.quiz_type::integer=mq.id INNER JOIN users ut ON ut.id=cq.created_by INNER JOIN users ust ON ust.id=cq.modified_by LEFT JOIN cms_quiz_question_mapping cqqm ON cq.id=cqqm.question_id::integer WHERE cq.status=$1", ['1']);
    const questionObj=results.rows;
    var resultObj = [];
    for(var i =0; i< questionObj.length; i++)
    {
      var qObj= questionObj[i];
      var sub_quiz_name = '';
      if(qObj.quiz_sub_type!='' && qObj.quiz_sub_type!=null && !isNaN(qObj.quiz_sub_type)){
        var sub_quiz = await db.query("SELECT name FROM master_sub_quiz WHERE id="+qObj.quiz_sub_type);
        if(sub_quiz.rows.length>0){
          sub_quiz_name = sub_quiz.rows[0].name;
        }
      }
      qObj['sub_quiz_name']=sub_quiz_name;

      var class_name = '';
      if(qObj.class!='' && qObj.class!=null && !isNaN(qObj.class)){
        var classQ = await db.query("SELECT name FROM master_class WHERE id="+qObj.class);
        if(classQ.rows.length>0){
          class_name = classQ.rows[0].name;
        }
      }
      qObj['class_name']=class_name;

      var semester_name = '';
      if(qObj.semester!='' && qObj.semester!=null && !isNaN(qObj.semester)){
        var semQ = await db.query("SELECT name FROM master_semester WHERE id="+qObj.semester);
        if(semQ.rows.length>0){
          semester_name = semQ.rows[0].name;
        }
      }
      qObj['semester_name']=semester_name;

       var lesson_name = '';
      if(qObj.lesson!='' && qObj.lesson!=null && !isNaN(qObj.lesson)){
        var lessonQ = await db.query("SELECT name FROM master_lesson WHERE id="+qObj.lesson);
        if(lessonQ.rows.length>0){
          lesson_name = lessonQ.rows[0].name;
        }
      }
      qObj['lesson_name']=lesson_name;

      var chapter_name = '';
      if(qObj.chapter!='' && qObj.chapter!=null && !isNaN(qObj.chapter)){
        var chapterQ = await db.query("SELECT name FROM master_chapter WHERE id="+qObj.chapter);
        if(chapterQ.rows.length>0){
          chapter_name = chapterQ.rows[0].name;
        }
      }
      qObj['chapter_name']=chapter_name;

      var level_name = '';
      if(qObj.level!='' && qObj.level!=null && !isNaN(qObj.level)){
        var levelQ = await db.query("SELECT name FROM master_level WHERE id="+qObj.level);
        if(levelQ.rows.length>0){
          level_name = levelQ.rows[0].name;
        }
      }
      qObj['level_name']=level_name;

      var group_name = '';
      if(qObj.groups!='' && qObj.groups!=null && !isNaN(qObj.groups)){
        var groupQ = await db.query("SELECT name FROM master_group WHERE id="+qObj.groups);
        if(groupQ.rows.length>0){
          group_name = groupQ.rows[0].name;
        }
      }
      qObj['level_name']=level_name;

      var subject_name = '';
      if(qObj.subject!='' && qObj.subject!=null && !isNaN(qObj.subject)){
        var subjectQ = await db.query("SELECT name FROM master_subject WHERE id="+qObj.subject);
        if(subjectQ.rows.length>0){
          subject_name = subjectQ.rows[0].name;
        }
      }
      qObj['subject_name']=subject_name;


      resultObj.push(qObj);

    }
    return res.json(resultObj);
  } catch (err) {
    return next(err);
  }
});

router.get("/get_active_question_new", async function(req, res, next) {
  try {
      var teacher_id = req.query.teacherText;
      var searchText = req.query.searchText;
      var page       = req.query.page;
      var size       = req.query.size;
      var type       = req.query.type;
      var quiz_id    = req.query.quiz_id;
      var limit  = 5;
      var offset = 0;
      console.log('page-----'+page);
      if(page==0){
        limit  = size;
        offset = 0;
      }
      else if(page >0){
        limit  = size;
        offset = (page*size)-1;
      }
      else
      {
        limit  = size;
        offset = 0;
      }
   
   if(quiz_id!=0){ console.log('1-->');
      if(teacher_id!=0){
        var results = await db.query("SELECT cq.*,mq.name as quiz_type_name,ust.first_name || ' ' || ust.last_name AS ts_name,ut.first_name || ' ' || ut.last_name AS t_name, cqqm.quiz_id FROM cms_quiz_question cq INNER JOIN master_quiz  mq ON cq.quiz_type::integer=mq.id INNER JOIN users ut ON ut.id=cq.created_by INNER JOIN users ust ON ust.id=cq.modified_by LEFT JOIN cms_quiz_question_mapping cqqm ON cq.id=cqqm.question_id::integer WHERE cq.status=$1 AND cq.created_by=$2 AND cq.type=$3 AND cqqm.quiz_id=$4", ['1',teacher_id,type,quiz_id]);
      }
      else{
        var results = await db.query("SELECT cq.*,mq.name as quiz_type_name,ust.first_name || ' ' || ust.last_name AS ts_name,ut.first_name || ' ' || ut.last_name AS t_name, cqqm.quiz_id FROM cms_quiz_question cq INNER JOIN master_quiz  mq ON cq.quiz_type::integer=mq.id INNER JOIN users ut ON ut.id=cq.created_by INNER JOIN users ust ON ust.id=cq.modified_by LEFT JOIN cms_quiz_question_mapping cqqm ON cq.id=cqqm.question_id::integer WHERE cq.status=$1 AND cq.type=$2 AND cqqm.quiz_id=$3", ['1',type,quiz_id]);
      }
   }
   else
   { console.log('2-->');
      if(teacher_id!=0){
        var results = await db.query("SELECT cq.*,mq.name as quiz_type_name,ust.first_name || ' ' || ust.last_name AS ts_name,ut.first_name || ' ' || ut.last_name AS t_name, cqqm.quiz_id FROM cms_quiz_question cq INNER JOIN master_quiz  mq ON cq.quiz_type::integer=mq.id INNER JOIN users ut ON ut.id=cq.created_by INNER JOIN users ust ON ust.id=cq.modified_by LEFT JOIN cms_quiz_question_mapping cqqm ON cq.id=cqqm.question_id::integer WHERE cq.status=$1 AND cq.created_by=$2 AND cq.type=$3", ['1',teacher_id,type]);
      }
      else{
        var results = await db.query("SELECT cq.*,mq.name as quiz_type_name,ust.first_name || ' ' || ust.last_name AS ts_name,ut.first_name || ' ' || ut.last_name AS t_name, cqqm.quiz_id FROM cms_quiz_question cq INNER JOIN master_quiz  mq ON cq.quiz_type::integer=mq.id INNER JOIN users ut ON ut.id=cq.created_by INNER JOIN users ust ON ust.id=cq.modified_by LEFT JOIN cms_quiz_question_mapping cqqm ON cq.id=cqqm.question_id::integer WHERE cq.status=$1 AND cq.type=$2", ['1',type]);
      }
    }
    const questionObj=results.rows;
    var resultObj = [];
    for(var i =0; i< questionObj.length; i++)
    {
      var qObj= questionObj[i];
      var sub_quiz_name = '';
      if(qObj.quiz_sub_type!='' && qObj.quiz_sub_type!=null && !isNaN(qObj.quiz_sub_type)){
        var sub_quiz = await db.query("SELECT name FROM master_sub_quiz WHERE id="+qObj.quiz_sub_type);
        if(sub_quiz.rows.length>0){
          sub_quiz_name = sub_quiz.rows[0].name;
        }
      }
      qObj['sub_quiz_name']=sub_quiz_name;

      var class_name = '';
      if(qObj.class!='' && qObj.class!=null && !isNaN(qObj.class)){
        var classQ = await db.query("SELECT name FROM master_class WHERE id="+qObj.class);
        if(classQ.rows.length>0){
          class_name = classQ.rows[0].name;
        }
      }
      qObj['class_name']=class_name;

      var semester_name = '';
      if(qObj.semester!='' && qObj.semester!=null && !isNaN(qObj.semester)){
        var semQ = await db.query("SELECT name FROM master_semester WHERE id="+qObj.semester);
        if(semQ.rows.length>0){
          semester_name = semQ.rows[0].name;
        }
      }
      qObj['semester_name']=semester_name;

       var lesson_name = '';
      if(qObj.lesson!='' && qObj.lesson!=null && !isNaN(qObj.lesson)){
        var lessonQ = await db.query("SELECT name FROM master_lesson WHERE id="+qObj.lesson);
        if(lessonQ.rows.length>0){
          lesson_name = lessonQ.rows[0].name;
        }
      }
      qObj['lesson_name']=lesson_name;

      var chapter_name = '';
      if(qObj.chapter!='' && qObj.chapter!=null && !isNaN(qObj.chapter)){
        var chapterQ = await db.query("SELECT name FROM master_chapter WHERE id="+qObj.chapter);
        if(chapterQ.rows.length>0){
          chapter_name = chapterQ.rows[0].name;
        }
      }
      qObj['chapter_name']=chapter_name;

      var level_name = '';
      if(qObj.level!='' && qObj.level!=null && !isNaN(qObj.level)){
        var levelQ = await db.query("SELECT name FROM master_level WHERE id="+qObj.level);
        if(levelQ.rows.length>0){
          level_name = levelQ.rows[0].name;
        }
      }
      qObj['level_name']=level_name;

      var group_name = '';
      if(qObj.groups!='' && qObj.groups!=null && !isNaN(qObj.groups)){
        var groupQ = await db.query("SELECT name FROM master_group WHERE id="+qObj.groups);
        if(groupQ.rows.length>0){
          group_name = groupQ.rows[0].name;
        }
      }
      qObj['level_name']=level_name;

      var subject_name = '';
      if(qObj.subject!='' && qObj.subject!=null && !isNaN(qObj.subject)){
        var subjectQ = await db.query("SELECT name FROM master_subject WHERE id="+qObj.subject);
        if(subjectQ.rows.length>0){
          subject_name = subjectQ.rows[0].name;
        }
      }
      qObj['subject_name']=subject_name;


      resultObj.push(qObj);

    }
    return res.json(resultObj);
  } catch (err) {
    return next(err);
  }
});

router.patch("/approve_publish_question/:id/:created_by", async function(req, res, next) {
  console.log(req.body);
  console.log(req.params);
  if(req.params.id && req.params.created_by)
  {
    try {
         

          const result = await db.query("UPDATE cms_quiz_question SET status=$1,modified_by=$2 WHERE id=$3",
          ['1',req.params.created_by,req.params.id]);
          /////////////////////////////////////////////
           return res.json({
             "status": 200,
             "msg":"question approved successfully"
           }); 

    } catch (err) {
      return next(err);
    }
  }
  else{
     return res.json({"status": 403, "msg": "Missing required parameters" });
  }
});


//////update draft question bt ts
router.post("/update_question_by_ts", async function(req, res, next) {

  if(req.body.option1 && req.body.answer)
  {
    var question = req.body;
    try {
        if(question.save_type=='bulk'){
        var quiz_question = await db.query("UPDATE cms_quiz_question SET question=$1,question_image=$2,question_image_url=$3,option1=$4,option2=$5,option3=$6,option4=$7,answer=$8,note=$9,level=$10,quiz_type=$11,quiz_sub_type=$12,class=$13,semester=$14,subject=$15,chapter=$16,lesson=$17,groups=$18,quant_verbal=$19,modified_by=$20, duration=$21 WHERE id=$22 RETURNING *",[question.question,'','',question.option1,question.option2,question.option3,question.option4,question.answer,question.note,question.level,question.quiz_type,question.quiz_sub_type,question.class,question.semester,question.subject,question.chapter,question.lesson,question.group,question.quant_verbal,question.created_by, question.duration, question.id]);
        }
        /////////////////////////////////////////////
         return res.json({
           "status": 200,
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


//////update question by id 
router.post("/update_question_by_id", async function(req, res, next) {

  if(req.body.option1 && req.body.answer)
  {
    var question = req.body;
    var file_url='';
    var questionTxt  = question.question;
    var question_type= question.question_type;
    
    try {
           if(question.question_type=='image' || question.question_type=='text_and_image')
          {
            if(question.isFile)
            {
              //delete
              if(question.question_image_url!='')
              {
                s3.deleteObject({
                  Bucket: 'allam-stg',
                  Key: question.question_image_url
                },function (err,data){
                  //res.status(200).send("File has been deleted successfully");

                })
              }
              ///s3 upload
              var buf = Buffer.from(question.question_image.replace(/^data:image\/\w+;base64,/, ""),'base64')
              file_url="quiz/question/"+Date.now()+".png";
              s3.putObject({Bucket: 'allam-stg', Key: file_url, Body: buf}, function(err, data) {
                if (err) {
                  //return res.send({ success: false, err: err });
                } else {
                  //return res.send({ success: true });
                }
              });
            }
            else{
              file_url=question.question_image_url;
            }
            questionTxt='';
            if(question.question_type=='text_and_image')
            {
                questionTxt  =question.question;
                question_type=question.question_type;
            }
          }
          if(question.type=='curriculum')
          {
            var quiz_question = await db.query("UPDATE cms_quiz_question SET question=$1,question_image=$2,question_image_url=$3,option1=$4,option2=$5,option3=$6,option4=$7,answer=$8,note=$9,level=$10,quiz_type=$11,quiz_sub_type=$12,class=$13,semester=$14,subject=$15,chapter=$16,lesson=$17,groups=$18,quant_verbal=$19,modified_by=$20, duration=$21,question_type=$22,qui_type=$23 WHERE id=$24 RETURNING *",[questionTxt,'',file_url,question.option1,question.option2,question.option3,question.option4,question.answer,question.note,question.level,question.quiz_type,question.quiz_sub_type,question.class,question.semester,question.subject,question.chapter,question.lesson,question.group,question.quant_verbal,question.created_by, question.duration,question.question_type, question.question_type,question.id]);
          }
          else{
            var quiz_question = await db.query("UPDATE cms_quiz_question SET question=$1,question_image=$2,question_image_url=$3,option1=$4,option2=$5,option3=$6,option4=$7,answer=$8,note=$9,groups=$10,quant_verbal=$11,modified_by=$12, duration=$13,question_type=$14,qui_type=$15 WHERE id=$16 RETURNING *",[questionTxt,'',file_url,question.option1,question.option2,question.option3,question.option4,question.answer,question.note,question.group,question.quant_verbal,question.created_by, question.duration,question.question_type,question.question_type,question.id]);
          }                                     
        /////////////////////////////////////////////
         return res.json({
           "status": 200,
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



//////for teacher supervisor
router.get("/get_user_by_id/:id", async function(req, res, next) {
  try {
    var u_id=req.params.id;
    
    const results = await db.query("SELECT roles.name as role_name,u.first_name,u.last_name,u.id,u.email,u.phone_number,u.gender,u.education,u.country,u.city,u.nationality,u.region,u.user_avatar FROM users u INNER JOIN roles ON roles.id=u.role_id::integer WHERE u.id=$1", [u_id]);
 
    return res.json(results.rows);
  } catch (err) {
    return next(err);
  }
});

//get all quiz
router.get("/get_all_quiz", async function(req, res, next) {
  try {
    const quiz = await db.query("SELECT cq.*,u.first_name as teacher_fname,u.last_name as teacher_lname FROM cms_quiz cq INNER JOIN users u ON u.id=cq.created_by WHERE cq.status!=2 order by cq.id DESC");
    return res.json(quiz.rows);
  } catch (err) {
    return next(err);
  }
});

//update quiz status
//////update status
router.patch("/update_status", async function(req, res, next) {

  if(req.body.quiz_id && req.body.status && req.body.modified_by)
  {
    var data         = req.body;
    var quiz_id      = data.quiz_id; 
    var status       = data.status; 
    var modified_by  = data.modified_by; 
    var timeInMss = new Date().toISOString();
    if(status==1){
      status=0;
    }
    else{
      status=1;
    }
    try {

        var quiz_update = await db.query("UPDATE cms_quiz SET status=$1,modified_by=$2,modified_at=$3 WHERE id=$4",[status,modified_by,timeInMss,quiz_id]);
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
        setTimeout(resolve, 1000);
    });
    return question;
}

//////delte question

router.patch("/delete_publish_question/:id/:created_by", async function(req, res, next) {

  if(req.params.id && req.params.created_by)
  {
    var data         = req.params;
    var question_id  = data.id; 
    var modified_by  = data.created_by; 
    var timeInMss = new Date().toISOString();

    try {

        var quiz_update = await db.query("UPDATE cms_quiz_question SET status=$1,modified_by=$2,modified_at=$3 WHERE id=$4",['2',modified_by,timeInMss,question_id]);
        /////////////////////////////////////////////
         return res.json({
           "status": 200,
           "msg":"question deleted successfully"
         });
        
    } catch (err) {
      return next(err);
    }
  }
  else{
     return res.json({"status": 403, "msg": "Missing required parameters" });
  }
});

module.exports = router;