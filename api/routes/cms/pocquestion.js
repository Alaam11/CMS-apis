const express = require("express");
const router = express.Router();
const db = require("../../db");
const transport = require("../../config/smtp.js");
const common = require("../../config/common.js");
const nodeHtmlToImage = require('node-html-to-image');

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

router.post("/add_question", async function(req, res, next) {
 var timeInMss = Date.now()
 var filename =timeInMss+'.png'; 


 nodeHtmlToImage({
  output: './public/'+filename,
  html: '<html><head><style>body {width: 400px;height: 400px;}</style></head><body>'+req.body.question+'</body></html>'
})
  .then(() => console.log('The image was created successfully!'))

 console.log(req.body);
  if(req.body.option1 && req.body.question)
  {
    
    try {
          const result = await db.query(
            "INSERT INTO poc_question (category_id,status,option1,option2,option3,option4,answer,duration,question,question_file_url) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10) RETURNING *",
            [req.body.category,req.body.status, req.body.option1,req.body.option2,req.body.option3,req.body.option4,req.body.answer,req.body.duration,req.body.question,filename]
          );


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


module.exports = router;