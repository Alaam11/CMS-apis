const express = require("express");
const router = express.Router();
const db = require("../db");
const transport = require("../config/smtp.js");
const common = require("../config/common.js");

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


async function isValidToken(access_token){
   const results = await db.query("SELECT * FROM users WHERE access_token=$1", [access_token]);
    if(results.rows.length > 0)
      {
        return true;
     }
     else{
        return false;
     }
}

router.get("/get_referendum/:access_token", async function(req, res, next) {
  //####check is valid access_token#####
  const isTrue= await isValidToken(req.params.access_token);
  if(!isTrue){
         return res.json({
             "status": 201,
             "data":[],
             "message":"Invalid access token"
           });
  }
  try {
    const competition = await db.query("SELECT id, name, json, login_id, configuration FROM surveys where configuration != '{}' AND is_approved = true");
    // IF A USER ISN'T FOUND
      if (typeof competition.rows !== 'undefined' && competition.rows.length == 0) {
        return res.status(401).json({ success: false, message: 'Referendum not found' });
      }
      var refObj = competition.rows;

      var result = [];
      for(var i =0; i< refObj.length; i++){
      	var conf = JSON.parse(refObj[i].configuration);
      	var ress = {title: conf.title, referendum_icon_url : conf.referendum_icon_url, description: conf.description, ref_time: conf.ref_time, price_type: conf.price_type, ref_date: conf.ref_date, ref_lottery_date:conf.ref_lottery_date, price_number: conf.price_number, url: 'http://alaam.net:4200/authentication/survey-viewer/app/'+refObj[i].id+'/<app-user-id>'};
      	result.push(ress);
      }

     return res.json({
             "status": 200,
             'data':result,
           });

  } catch (err) {
    return next(err);
  }
});

module.exports = router;