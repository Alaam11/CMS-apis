const express = require("express");
const router = express.Router();
const db = require("../db");
const transport = require("../config/smtp.js");
const common = require("../config/common.js");
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


router.get("/all_question", async function(req, res, next) {
  try {
    const results = await db.query("SELECT * FROM poc_question order by id desc");
    return res.json(results.rows);
  } catch (err) {
    return next(err);
  }
});

router.post("/save_quiz_in_temp", async function(req, res, next) {

  if(req.body.quiz_type && req.body.quiz_sub_type && req.body.quiz_title)
  {
    var question = req.body;
    try {
            

          var quiz = await db.query(
            "INSERT INTO quiz_temp (quiz_type,quiz_sub_type,quiz_title,quiz_description,quiz_icon_url, status) VALUES ($1,$2,$3,$4,$5,$6) RETURNING id",
            [question.quiz_type,question.quiz_sub_type,question.quiz_title,question.quiz_description, question.quiz_icon_url, '0']
          );
                  
          var quiz_id  =  quiz.rows[0].id;
        
        /////////////////////////////////////////////
         return res.json({
           "status": 200,
           "temp_quiz_id":quiz_id,
           "msg":"quiz added successfully"
         });
        
        

    } catch (err) {
      return next(err);
    }
  }
  else{
     return res.json({"status": 403, "msg": "Missing required parameters" });
  }
});

router.post("/save_quiz/:quiz_temp_id", async function(req, res, next) {

  if(req.body[0].option1 && req.body[0].answer &&  req.params.quiz_temp_id)
  { 
    var quiz_temp_id = common.decode64(req.params.quiz_temp_id);

    try {
            
          const temp_quiz = await db.query("SELECT * FROM quiz_temp WHERE id=$1", [quiz_temp_id]);
          
          if(!temp_quiz.rows[0]){
            return res.json({"status": 403, "msg": "Missing required parameters" });
          }

          var quiz_title = temp_quiz.rows[0].quiz_title;
          var quiz_type = temp_quiz.rows[0].quiz_type;
          var quiz_sub_type = temp_quiz.rows[0].quiz_sub_type;
          var quiz_description = temp_quiz.rows[0].quiz_description;
          var quiz_icon_url = temp_quiz.rows[0].quiz_icon_url;

          var quiz = await db.query(
              "INSERT INTO quiz (quiz_type,quiz_sub_type,quiz_title,quiz_description,quiz_icon_url,status) VALUES ($1,$2,$3,$4,$5,$6) RETURNING id",
              [quiz_type,quiz_sub_type,quiz_title,quiz_description,quiz_icon_url,'0']
            );


          var quiz_id  =  quiz.rows[0].id;
           
          for(let i=0;i<req.body.length;i++)
          {
            let question = req.body[i];

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

            //console.log('Converting PDF to SVG ...')


          // nodeHtmlToImage({
          //   output: './public/'+filename_png,
          //   html: '<html><head><style>body {width: 400px;height: 400px;}</style></head><body>'+question.question+'</body></html>'
          // })
          //   .then(() => {
          //     console.log('The image was created successfully!');

              ///svg convertor////
              
              //  var custom_params = {
              //     background: 'white',
              //     color: 'black',
              //     threshold: 120
              // }; 
              // potrace.trace('/var/www/html/allam_cms_live/api/public/'+filename_png, custom_params, function(err, svg) {
              //   if (err) throw err;
              //   fs.writeFileSync('/var/www/html/allam_cms_live/api/public/'+filename, svg);
              //   //aws/////////
              //   const fileContent = fs.readFileSync('/var/www/html/allam_cms_live/api/public/'+filename);
              //   // Setting up S3 upload parameters
              //   const fileName = 'quiz/question/'+Date.now()+"-"+filename.toLowerCase().split(' ').join('-');
              //   const params = {
              //       Bucket: 'allam-stg',
              //       Key: fileName, // File name you want to save as in S3
              //       Body: fileContent
              //   };

              //   // Uploading files to the bucket
              //   s3.upload(params, async function(err, data) {
              //       if (err) {
              //           return res.json({"status": 403,"msg":"question image not uploaded on S3"});
              //           throw err;
              //       }
              //       //console.log(`File uploaded.`+ JSON.stringify(data));
              //       console.log(`File uploaded successfully. ${data.Location}`);
              //       var quiz_url = data.key;
              //       var quiz_question = await db.query(
              //           "INSERT INTO quiz_question (question,question_image,question_image_url,option1,option2,option3,option4,answer,note,level,quiz_type,quiz_sub_type,class,semester,subject,chapter,lesson,groups,type,quant_verbal) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20) RETURNING id",
              //           ['',filename,quiz_url,question.option1,question.option2,question.option3,question.option4,question.answer,question.note,question.level,question.quiz_type,question.quiz_sub_type,question.class,question.semester,question.subject,question.chapter,question.lesson,question.group,'competitive',question.quant_verbal]
              //         );

              //         // var quiz_id  =  quiz.rows[0].id;
              //          var quiz_question_id = quiz_question.rows[0].id;

              //         var quiz_question_map = await db.query(
              //           "INSERT INTO quiz_question_mapping (question_id,quiz_id) VALUES ($1,$2) RETURNING *",
              //           [quiz_question_id, quiz_id]
              //         );
                    
              //   });

              //   //aws end////

              // });
              ////////////////////

              const fileContent = fs.readFileSync('/var/www/html/allam_cms_live/api/public/'+filename_png);
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
                      "INSERT INTO quiz_question (question,question_image,question_image_url,option1,option2,option3,option4,answer,note,level,quiz_type,quiz_sub_type,class,semester,subject,chapter,lesson,groups,type,quant_verbal,status) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21) RETURNING id",
                      ['',filename_png,quiz_url,question.option1,question.option2,question.option3,question.option4,question.answer,question.note,question.level,question.quiz_type,question.quiz_sub_type,question.class,question.semester,question.subject,question.chapter,question.lesson,question.group,'competitive',question.quant_verbal,'0']
                    );

                    // var quiz_id  =  quiz.rows[0].id;
                     var quiz_question_id = quiz_question.rows[0].id;

                    var quiz_question_map = await db.query(
                      "INSERT INTO quiz_question_mapping (question_id,quiz_id) VALUES ($1,$2) RETURNING *",
                      [quiz_question_id, quiz_id]
                    );
                  
              });
              
           // });
           
          }

        db.query("DELETE FROM quiz_temp WHERE id=$1", [quiz_temp_id]);

        /////////////////////////////////////////////
         return res.json({
           "status": 200,
           "msg":"quiz added successfully"
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
            html += `<div id="_" style="width:300px;height:200px;display:inline-block;${reset}">`
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
        headless: true
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

module.exports = router;