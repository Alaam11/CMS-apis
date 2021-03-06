const express = require("express");
const router = express.Router();
const db = require("../../db");
const transport = require("../../config/smtp.js");
const common = require("../../config/common.js");
const nodeHtmlToImage = require('node-html-to-image');
const fs = require('fs');
var potrace = require('potrace');
var JSFiddle = require("jsfiddle");
var puppeteer = require("puppeteer");
var open = require('open');
var exec = require('child_process').exec;


var streamifier = require('streamifier');
var Inkscape = require('inkscape');

var SVGO = require('svgo');
var pdfToSvgConverter = new Inkscape([
    '--export-plain-svg', 
    '--import-pdf', 
    '--export-text-to-path'
]);


//aws s3
var multer  = require('multer');
var aws = require('aws-sdk');
var multerS3 = require('multer-s3');

aws.config.update({
    secretAccessKey: 'ux+vTbSHoOAGOh6kd9EajeF6eq6hH8gAjLSFYspq',
    accessKeyId: 'AKIAUSOI5LFUXODF3IVR',
    region: 'ap-south-1'
});

var app = express(),
    s3 = new aws.S3();

 var upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: 'allam-stg',
        key: function (req, file, cb) {
            console.log('--before file--')
            console.log(file);
            console.log('---after file---')
            const fileName = "user_file/"+Date.now()+"-"+file.originalname.toLowerCase().split(' ').join('-');
            cb(null, fileName); //use Date.now() for unique file keys
        }
    })
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

/////end s3 integration////


router.get("/get_master_data", async function(req, res, next) {
    try {
          const master_quiz     = await db.query("SELECT id,name FROM master_quiz");
          const master_sub_quiz = await db.query("SELECT id,master_quiz_id,name FROM master_sub_quiz");
          const master_level    = await db.query("SELECT id,name FROM master_level");
          const master_group    = await db.query("SELECT id,name FROM master_group");
          const master_chapter  = await db.query("SELECT id,name FROM master_chapter");
          const master_lesson   = await db.query("SELECT id,name FROM master_lesson");
          const master_semester = await db.query("SELECT id,name FROM master_semester");
          const master_class = await db.query("SELECT id,name FROM master_class");
          // const master_university = await db.query("SELECT id,name FROM master_university");
          // const master_school   = await db.query("SELECT id,name FROM master_school");
          const master_district = await db.query("SELECT id,name FROM master_district");
          const master_subject  = await db.query("SELECT id,name,icon FROM master_subject");


           return res.json({
             "status": 200,
             "data":{
                      "master_quiz":master_quiz.rows,
                      "master_sub_quiz":master_sub_quiz.rows,
                      "master_level":master_level.rows,
                      "master_group":master_group.rows,
                      "master_chapter":master_chapter.rows,
                      "master_lesson":master_lesson.rows, 
                      "master_semester":master_semester.rows, 
                      "master_class":master_class.rows, 
                      // "master_university":master_university.rows,
                      // "master_school":master_school.rows, 
                      "master_district":master_district.rows,
                      "master_subject":master_subject.rows,
                    },
             "message":"Success"
           });
        

    } catch (err) {
      return next(err);
    }

});


router.get("/all_question", async function(req, res, next) {
  try {
    const results = await db.query("SELECT * FROM poc_question order by id desc");
    return res.json(results.rows);
  } catch (err) {
    return next(err);
  }
});

///get all draft qustion by user id
router.get("/get_draft_question_by_user/:id", async function(req, res, next) {
  try {
    const results = await db.query("SELECT * FROM cms_quiz_question_temp WHERE created_by=$1 AND save_type=$2 AND type=$3", [
      req.params.id,'single','curriculum'
    ]);

    return res.json(results.rows);
  } catch (err) {
    return next(err);
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

//////save question in draft(temp table)
router.post("/save_question_in_deaft", async function(req, res, next) {

  if(req.body.option1 && req.body.answer)
  {
    var question = req.body;
    //console.log(question);
    var file_url='';
    var questionTxt=question.question;
    var question_type='image';
    try {
        
        if(question.question_type=='image' || question.question_type=='text_and_image')
        {
          ///s3 upload
          var buf = Buffer.from(questionTxt.replace(/^data:image\/\w+;base64,/, ""),'base64')
          file_url="quiz/question/"+Date.now()+".png";
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
        var quiz_question = await db.query("INSERT INTO cms_quiz_question_temp (question,question_image,question_image_url,option1,option2,option3,option4,answer,note,level,quiz_type,quiz_sub_type,class,semester,subject,chapter,lesson,groups,type,quant_verbal,status,save_type,created_by,duration,question_type,qui_type) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25,$26) RETURNING id",
                    [questionTxt,'',file_url,question.option1,question.option2,question.option3,question.option4,question.answer,question.note,question.level,question.quiz_type,question.quiz_sub_type,question.class,question.semester,question.subject,question.chapter,question.lesson,question.group,'curriculum',question.quant_verbal,'0','single',question.created_by,question.duration,question_type,question.question_type]);

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
router.post("/update_question_in_deaft", async function(req, res, next) {

  if(req.body.option1 && req.body.answer)
  {
    var question = req.body;
    var file_url='';
    var questionTxt=question.question;
    var question_type='image';
    try {
        
          if(question.question_type=='image' || question.question_type=='text_and_image')
          {
            if(question.isFile)
            {
              //delete
              if(question.question_image_url && question.question_image_url!='')
              {
                s3.deleteObject({
                  Bucket: 'allam-stg',
                  Key: question.question_image_url
                },function (err,data){
                  //res.status(200).send("File has been deleted successfully");

                })
              }
              ///s3 upload
              var buf = Buffer.from(questionTxt.replace(/^data:image\/\w+;base64,/, ""),'base64')
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
            if(question.question_type=='text_and_image'){
                questionTxt  =question.question_text;
                question_type=question.question_type;
            }
          }
          
        var quiz_question = await db.query("UPDATE cms_quiz_question_temp SET question=$1,question_image=$2,question_image_url=$3,option1=$4,option2=$5,option3=$6,option4=$7,answer=$8,note=$9,level=$10,quiz_type=$11,quiz_sub_type=$12,class=$13,semester=$14,subject=$15,chapter=$16,lesson=$17,groups=$18,type=$19,quant_verbal=$20,status=$21,save_type=$22,modified_by=$23,duration=$24,question_type=$25,qui_type=$26 WHERE id=$27 RETURNING *",[questionTxt,'',file_url,question.option1,question.option2,question.option3,question.option4,question.answer,question.note,question.level,question.quiz_type,question.quiz_sub_type,question.class,question.semester,question.subject,question.chapter,question.lesson,question.group,'curriculum',question.quant_verbal,'0','single',question.created_by,question.duration,question_type,question.question_type,question.id]);

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


router.post("/save_quiz_old", async function(req, res, next) {

  if(req.body[0].option1 && req.body[0].answer)
  {

    try {
            
        for(let i=0;i<req.body.length;i++)
        {
          let question = req.body[i];

          if(question.qui_type=='image' || question.qui_type=='text_and_image')
          {
              var quiz_url = question.question_image_url;
                var quiz_question = await db.query(
                  "INSERT INTO cms_quiz_question (question,question_image,question_image_url,option1,option2,option3,option4,answer,note,level,quiz_type,quiz_sub_type,class,semester,subject,chapter,lesson,groups,type,quant_verbal,status,save_type,created_by,duration,question_type,qui_type) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25,$26) RETURNING id",
                  [question.question,filename_png,quiz_url,question.option1,question.option2,question.option3,question.option4,question.answer,question.note,question.level,question.quiz_type,question.quiz_sub_type,question.class,question.semester,question.subject,question.chapter,question.lesson,question.groups,'curriculum',question.quant_verbal,'0',question.save_type,question.created_by,question.duration,question.question_type,question.qui_type]
                );

                //delete temp table
                const del = await db.query("DELETE FROM cms_quiz_question_temp WHERE id=$1", [question.id]);
          }
          else
          {
            ///////////generete image////////////
            var timeInMss = Date.now()
            var filename_png =timeInMss+'.png'; 
            var filename =timeInMss+'.svg'; 

            const htmlDiv = '<html><head><style>body {width: 400px;height: 400px;}</style></head><body>'+question.question+'</body></html>;'
             
            //fs.writeFileSync('./public/in.html', question.question)

            const reset = 'margin:0;padding:0;border:0;'

            let html = `<html style="${reset}">`
            html += `<body style="${reset}">`
            html += `<div id="_" style="width:300px;height:200px;vertical-align: middle;text-align: center;margin:0;padding:0;border:0px; display: table-cell;${reset}">`
            html += '<div style="display: inline-block;">'+question.question+'</div>'
            html += '</div>'
            html += '</body></html>'

            console.log('Converting HTML to PDF...')
            const pdf = await convertHtmlToPdf(html,filename_png)
            //fs.writeFileSync('./public/out.pdf', pdf)
            console.log('Converting PDF to SVG ...')
            //live
            const fileContent = fs.readFileSync('/var/www/html/allam_cms_live/api/public/'+filename_png);

            //local
            //const fileContent = fs.readFileSync('./public/'+filename_png);

            // Setting up S3 upload parameters
            const fileName = 'quiz/question/'+Date.now()+"-"+filename_png.toLowerCase().split(' ').join('-');
            const params = {
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
                var quiz_question = await db.query(
                  "INSERT INTO cms_quiz_question (question,question_image,question_image_url,option1,option2,option3,option4,answer,note,level,quiz_type,quiz_sub_type,class,semester,subject,chapter,lesson,groups,type,quant_verbal,status,save_type,created_by,duration,question_type,qui_type) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25,$26) RETURNING id",
                  ['',filename_png,quiz_url,question.option1,question.option2,question.option3,question.option4,question.answer,question.note,question.level,question.quiz_type,question.quiz_sub_type,question.class,question.semester,question.subject,question.chapter,question.lesson,question.groups,'curriculum',question.quant_verbal,'0',question.save_type,question.created_by,question.duration,question.question_type,question.qui_type]
                );

                //delete temp table
                const del = await db.query("DELETE FROM cms_quiz_question_temp WHERE id=$1", [question.id]);
                
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

router.post("/save_quiz", async function(req, res, next) {

  if(req.body[0].option1 && req.body[0].answer)
  {

    try {
            
        for(let i=0;i<req.body.length;i++)
        {
          let question = req.body[i];
          /******Option-A convert to IMG******/
          var timeInMss    = Date.now()
          var filename_png = timeInMss+'.png'; 
          var reset = 'margin:0;padding:0;border:0;'
          var html = `<html style="${reset}">`
          html += `<body style="${reset}">`
          html += `<div id="_" style="width:300px;height:60px;vertical-align: middle;text-align: center;margin:0;padding:0;border:0px; display: table-cell;${reset}">`
          html += '<div style="display: inline-block;">'+question.option1+'</div>'
          html += '</div>'
          html += '</body></html>'
          var pdf = await convertHtmlToPdf(html,filename_png);
          var fileContent = fs.readFileSync('/var/www/html/allam_cms_live/api/public/'+filename_png);
          var fileName = 'quiz/question/options/'+filename_png;
          // S3 upload
          var optiona_file_url = await uploadImage(fileName,fileContent);
          /********END OptionA IMG************/

          /******Option-B convert to IMG******/
          var timeInMss    = Date.now()
          var filename_png = timeInMss+'.png'; 
          var reset = 'margin:0;padding:0;border:0;'
          var html = `<html style="${reset}">`
          html += `<body style="${reset}">`
          html += `<div id="_" style="width:300px;height:60px;vertical-align: middle;text-align: center;margin:0;padding:0;border:0px; display: table-cell;${reset}">`
          html += '<div style="display: inline-block;">'+question.option2+'</div>'
          html += '</div>'
          html += '</body></html>'
          var pdf = await convertHtmlToPdf(html,filename_png);
          var fileContent = fs.readFileSync('/var/www/html/allam_cms_live/api/public/'+filename_png);
          var fileName = 'quiz/question/options/'+filename_png;
          // S3 upload
          var optionb_file_url = await uploadImage(fileName,fileContent);
          /********END OptionB IMG************/

          /******Option-C convert to IMG******/
          var timeInMss    = Date.now()
          var filename_png = timeInMss+'.png';           
          var reset = 'margin:0;padding:0;border:0;'
          var html = `<html style="${reset}">`
          html += `<body style="${reset}">`
          html += `<div id="_" style="width:300px;height:60px;vertical-align: middle;text-align: center;margin:0;padding:0;border:0px; display: table-cell;${reset}">`
          html += '<div style="display: inline-block;">'+question.option3+'</div>'
          html += '</div>'
          html += '</body></html>'
          var pdf = await convertHtmlToPdf(html,filename_png);
          var fileContent = fs.readFileSync('/var/www/html/allam_cms_live/api/public/'+filename_png);
          var fileName = 'quiz/question/options/'+Date.now()+"-"+filename_png.toLowerCase().split(' ').join('-');
          // S3 upload
          var optionc_file_url = await uploadImage(fileName,fileContent);
          /*********END OptionC IMG***********/

          /******Option-D convert to IMG******/
          var timeInMss    = Date.now()
          var filename_png = timeInMss+'.png'; 
          var filename     = timeInMss+'.svg'; 
          var htmlDiv = '<html><head><style>body {width: 40px;height: 40px;}</style></head><body>'+question.question+'</body></html>;'
          var reset = 'margin:0;padding:0;border:0;'
          var html = `<html style="${reset}">`
          html += `<body style="${reset}">`
          html += `<div id="_" style="width:300px;height:60px;vertical-align: middle;text-align: center;margin:0;padding:0;border:0px; display: table-cell;${reset}">`
          html += '<div style="display: inline-block;">'+question.option4+'</div>'
          html += '</div>'
          html += '</body></html>'
          var pdf = await convertHtmlToPdf(html,filename_png);
          var fileContent = fs.readFileSync('/var/www/html/allam_cms_live/api/public/'+filename_png);
          var fileName = 'quiz/question/options/'+filename_png;
          // S3 upload
          var optiond_file_url = await uploadImage(fileName,fileContent);
          /******END OptionD IMG*********/

          if(question.qui_type=='image' || question.qui_type=='text_and_image')
          {
              var quiz_url = question.question_image_url;
              if(question.semester==3)
              {
                var question_sem1 = await db.query(
                  "INSERT INTO cms_quiz_question (question,question_image,question_image_url,option1,option2,option3,option4,answer,note,level,quiz_type,quiz_sub_type,class,semester,subject,chapter,lesson,groups,type,quant_verbal,status,save_type,created_by,duration,question_type,qui_type,option_type) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25,$26,$27) RETURNING id",
                  [question.question,filename_png,quiz_url,optiona_file_url,optionb_file_url,optionc_file_url,optiond_file_url,question.answer,question.note,question.level,question.quiz_type,question.quiz_sub_type,question.class,1,question.subject,question.chapter,question.lesson,question.groups,'curriculum',question.quant_verbal,'0',question.save_type,question.created_by,question.duration,question.question_type,question.qui_type,'image']
                );
                 var question_sem2 = await db.query(
                  "INSERT INTO cms_quiz_question (question,question_image,question_image_url,option1,option2,option3,option4,answer,note,level,quiz_type,quiz_sub_type,class,semester,subject,chapter,lesson,groups,type,quant_verbal,status,save_type,created_by,duration,question_type,qui_type,option_type) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25,$26,$27) RETURNING id",
                  [question.question,filename_png,quiz_url,optiona_file_url,optionb_file_url,optionc_file_url,optiond_file_url,question.answer,question.note,question.level,question.quiz_type,question.quiz_sub_type,question.class,2,question.subject,question.chapter,question.lesson,question.groups,'curriculum',question.quant_verbal,'0',question.save_type,question.created_by,question.duration,question.question_type,question.qui_type,'image']
                );
              }
              else{
                var quiz_question = await db.query(
                  "INSERT INTO cms_quiz_question (question,question_image,question_image_url,option1,option2,option3,option4,answer,note,level,quiz_type,quiz_sub_type,class,semester,subject,chapter,lesson,groups,type,quant_verbal,status,save_type,created_by,duration,question_type,qui_type,option_type) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25,$26,$27) RETURNING id",
                  [question.question,filename_png,quiz_url,optiona_file_url,optionb_file_url,optionc_file_url,optiond_file_url,question.answer,question.note,question.level,question.quiz_type,question.quiz_sub_type,question.class,question.semester,question.subject,question.chapter,question.lesson,question.groups,'curriculum',question.quant_verbal,'0',question.save_type,question.created_by,question.duration,question.question_type,question.qui_type,'image']
                );
              }
                

                //delete temp table
                const del = await db.query("DELETE FROM cms_quiz_question_temp WHERE id=$1", [question.id]);
          }
          else
          {
            /******Question convert to IMG******/
            var timeInMss    = Date.now()
            var filename_png = timeInMss+'.png'; 
            var filename     = timeInMss+'.svg'; 
            var htmlDiv = '<html><head><style>body {width: 400px;height: 400px;}</style></head><body>'+question.question+'</body></html>;'
            var reset = 'margin:0;padding:0;border:0;'
            var html = `<html style="${reset}">`
            html += `<body style="${reset}">`
            html += `<div id="_" style="width:300px;height:130px;vertical-align: middle;text-align: center;margin:0;padding:0;border:0px; display: table-cell;${reset}">`
            html += '<div style="display: inline-block;">'+question.question+'</div>'
            html += '</div>'
            html += '</body></html>'
            var pdf = await convertHtmlToPdf(html,filename_png);
            var fileContent = fs.readFileSync('/var/www/html/allam_cms_live/api/public/'+filename_png);
            var fileName = 'quiz/question/'+Date.now()+"-"+filename_png.toLowerCase().split(' ').join('-');
            // S3 upload
            var question_file_url = await uploadImage(fileName,fileContent);

            /******END Question IMG*********/

             if(question.semester==3){
                var question_sem1 = await db.query(
                 "INSERT INTO cms_quiz_question (question,question_image,question_image_url,option1,option2,option3,option4,answer,note,level,quiz_type,quiz_sub_type,class,semester,subject,chapter,lesson,groups,type,quant_verbal,status,save_type,created_by,duration,question_type,qui_type,option_type) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25,$26,$27) RETURNING id",
                 ['','',question_file_url,optiona_file_url,optionb_file_url,optionc_file_url,optiond_file_url,question.answer,question.note,question.level,question.quiz_type,question.quiz_sub_type,question.class,1,question.subject,question.chapter,question.lesson,question.groups,'curriculum',question.quant_verbal,'0',question.save_type,question.created_by,question.duration,question.question_type,question.qui_type,'image']
                );
                var question_sem2 = await db.query(
                 "INSERT INTO cms_quiz_question (question,question_image,question_image_url,option1,option2,option3,option4,answer,note,level,quiz_type,quiz_sub_type,class,semester,subject,chapter,lesson,groups,type,quant_verbal,status,save_type,created_by,duration,question_type,qui_type,option_type) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25,$26,$27) RETURNING id",
                 ['','',question_file_url,optiona_file_url,optionb_file_url,optionc_file_url,optiond_file_url,question.answer,question.note,question.level,question.quiz_type,question.quiz_sub_type,question.class,2,question.subject,question.chapter,question.lesson,question.groups,'curriculum',question.quant_verbal,'0',question.save_type,question.created_by,question.duration,question.question_type,question.qui_type,'image']
                );
             }  
             else{
                var quiz_question = await db.query(
                 "INSERT INTO cms_quiz_question (question,question_image,question_image_url,option1,option2,option3,option4,answer,note,level,quiz_type,quiz_sub_type,class,semester,subject,chapter,lesson,groups,type,quant_verbal,status,save_type,created_by,duration,question_type,qui_type,option_type) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25,$26,$27) RETURNING id",
                 ['','',question_file_url,optiona_file_url,optionb_file_url,optionc_file_url,optiond_file_url,question.answer,question.note,question.level,question.quiz_type,question.quiz_sub_type,question.class,question.semester,question.subject,question.chapter,question.lesson,question.groups,'curriculum',question.quant_verbal,'0',question.save_type,question.created_by,question.duration,question.question_type,question.qui_type,'image']
                );
             }
            

            const del = await db.query("DELETE FROM cms_quiz_question_temp WHERE id=$1", [question.id]);

           
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

router.post("/update_question_by_ts", async function(req, res, next) {

  if(req.body.option1 && req.body.answer)
  {

    try {
            
          let question = req.body;
          ///////////generete image////////////
          var timeInMss = Date.now()
          var filename_png =timeInMss+'.png'; 
          var filename =timeInMss+'.svg'; 


           const htmlDiv = '<html><head><style>body {width: 400px;height: 400px;}</style></head><body>'+question.question+'</body></html>;'
           
           //fs.writeFileSync('./public/in.html', question.question)

           const reset = 'margin:0;padding:0;border:0;'

            let html = `<html style="${reset}">`
            html += `<body style="${reset}">`
            html += `<div id="_" style="width:300px;height:200px;vertical-align: middle;text-align: center;margin:0;padding:0;border:0px; display: table-cell;${reset}">`
            html += '<div style="display: inline-block;">'+question.question+'</div>'
            html += '</div>'
            html += '</body></html>'

            console.log('Converting HTML to PDF...')
            const pdf = await convertHtmlToPdf(html,filename_png)
            //fs.writeFileSync('./public/out.pdf', pdf)

            console.log('Converting PDF to SVG ...')
              ////////////////////
              //live
              const fileContent = fs.readFileSync('/var/www/html/allam_cms_live/api/public/'+filename_png);

              //local
              //const fileContent = fs.readFileSync('./public/'+filename_png);

              // Setting up S3 upload parameters
              const fileName = 'quiz/question/'+Date.now()+"-"+filename_png.toLowerCase().split(' ').join('-');
              const params = {
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
                  //console.log(`File uploaded successfully. ${data.Location}`);
                  var quiz_url = data.key;

                  var quiz_question = await db.query("UPDATE cms_quiz_question SET question=$1,question_image=$2,question_image_url=$3,option1=$4,option2=$5,option3=$6,option4=$7,answer=$8,note=$9,level=$10,quiz_type=$11,quiz_sub_type=$12,class=$13,semester=$14,subject=$15,chapter=$16,lesson=$17,groups=$18,quant_verbal=$19,modified_by=$20, duration=$21 WHERE id=$22 RETURNING *",[question.question,filename_png,quiz_url,question.option1,question.option2,question.option3,question.option4,question.answer,question.note,question.level,question.quiz_type,question.quiz_sub_type,question.class,question.semester,question.subject,question.chapter,question.lesson,question.group,question.quant_verbal,question.created_by, question.duration, question.id]);

              });

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


async function uploadImage(fileName,fileContent) {
    var quiz_url=fileName;
    const params = {
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
    });

    // wait a second for other resources
    await new Promise(resolve => {
        setTimeout(resolve, 500);
    });
    return quiz_url;
}
module.exports = router;