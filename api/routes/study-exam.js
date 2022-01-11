const express = require("express");
const router = express.Router();
const db = require("../db");

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

    console.log("image is ",req.file.key);
    return res.json({'status': 200, 'quiz_icon': req.file.key});
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

router.post('/api/upload', multipartMiddleware, (req, res, next) => {
    //res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    var exceltojson; //Initialization
    //res.json({ 'message': req.files.uploads[0].originalFilename });
    //console.log(req.files.uploads.length);
    if (req.files.uploads.length != 2) { 
        return res.status(200).json({ error_code: 1, err_desc: "Files are not uploaded correctly, upload both file", data: null });

    }
    if (req.files.uploads[0].originalFilename.split('.')[req.files.uploads[0].originalFilename.split('.').length - 1] !== 'xlsx') {
        return res.status(200).json({ error_code: 1, err_desc: "First File should be an xlsx file", data: null });
    }
    if (req.files.uploads[1].originalFilename.split('.')[req.files.uploads[1].originalFilename.split('.').length - 1] !== 'zip') {
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
            var zip = new AdmZip(req.files.uploads[1].path);
            var zipEntries = zip.getEntries(); // an array of ZipEntry records

            zip.extractAllTo(/*target path*/"./uploads/", /*overwrite*/true);

            result.forEach(function (excelRecord) {
                excelRecord.Remarks = "";
                excelRecord.category_id = 0;
                if (excelRecord.quiz_type == "") {
                    excelRecord.Remarks += "Quiz type Can not be blank.<br/>";
                }
                if (excelRecord.quiz_sub_type == "") {
                    excelRecord.Remarks += "Quiz Sub type Can not be blank.<br/>";
                }
                if (excelRecord.class == "") {
                    excelRecord.Remarks += "Quiz class Can not be blank.<br/>";
                }
                if (excelRecord.semester == "") {
                    excelRecord.Remarks += "Quiz semester Can not be blank.<br/>";
                }
                if (excelRecord.subject == "") {
                    excelRecord.Remarks += "Quiz subject Can not be blank.<br/>";
                }
                if (excelRecord.chapter == "") {
                    excelRecord.Remarks += "Quiz chapter Can not be blank.<br/>";
                }
                if (excelRecord.lesson == "") {
                    excelRecord.Remarks += "Quiz lesson Can not be blank.<br/>";
                }
                if (excelRecord.group == "") {
                    excelRecord.Remarks += "Quiz group Can not be blank.<br/>";
                }
                if (excelRecord.quant_verbal == "") {
                    excelRecord.Remarks += "Quant verbal Can not be blank.<br/>";
                }

                if (excelRecord.question == "") {
                    excelRecord.Remarks += "Question Can not be blank.<br/>";
                }
                if (excelRecord.question_file_url != "") {
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
                if (excelRecord.option2 == "") {
                    excelRecord.Remarks += "Option 2 Can not be blank.<br/>";
                }
                if (excelRecord.option3 == "") {
                    excelRecord.Remarks += "Option 3 Can not be blank.<br/>";
                }
                if (excelRecord.option4 == "") {
                    excelRecord.Remarks += "Option 4 Can not be blank.<br/>";
                }
                if (excelRecord.level == "") {
                    excelRecord.Remarks += "Level Can not be blank.<br/>";
                }
                if (excelRecord.note == "") {
                    excelRecord.Remarks += "Note Can not be blank.<br/>";
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
                fs.unlinkSync(req.files.uploads[1].path);
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
                    [filedata[key].question, filedata[key].question_image, filedata[key].question_file_url, filedata[key].answer, filedata[key].option1, filedata[key].option2, filedata[key].option3, filedata[key].option4, filedata[key].note, filedata[key].level, filedata[key].quiz_type, filedata[key].quiz_sub_type, filedata[key].class, filedata[key].semester, filedata[key].subject, filedata[key].chapter, filedata[key].lesson, filedata[key].group, filedata[key].quant_verbal, 'Curriculum']);
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
                      [val.question, val.question_image, quiz_url, val.answer, val.option1, val.option2, val.option3, val.option4, val.note, val.level, val.quiz_type, val.quiz_sub_type, val.class, val.semester, val.subject, val.chapter, val.lesson, val.group, val.quant_verbal, 'Curriculum']);
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

module.exports = router;