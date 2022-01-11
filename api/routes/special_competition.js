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

/////end s3 integration////

///get all draft qustion by user id
router.get("/get_competition_question/:id/:access_token", async function(req, res, next) {
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
     const question = await db.query("SELECT competition_question.* FROM competition_question_mapping JOIN competition ON competition_question_mapping.competition_id::integer=competition.id JOIN competition_question ON competition_question_mapping.question_id::integer=competition_question.id WHERE competition_question_mapping.competition_id=$1", [
          req.params.id]);
     		var questionObj = question.rows;

     		//var changeObj = questionObj.map((item) => ({ option1: item.answer }));

     		var changeObj = questionObj.map( s => {
			  if ( s.hasOwnProperty("answer") )
			  {
			     s.option1 = s.answer;
			     delete s.answer;   
			  }
			  if ( s.hasOwnProperty("question_file_url") )
			  {
			     s.question_image = s.question_file_url;
			     delete s.question_file_url;   
			  }
			  return s;
			})


     		//console.log(changeObj);
     		//Object.assign(questionObj, {key3: "value3"});
     		var result = changeObj.map(function(el) {
			  var o = Object.assign({}, el);
			  o.answer = "a";
			  return o;
			})

         return res.json({
             "status": 200,
             'data':result,
           });

  } catch (err) {
    return next(err);
  }
});


router.get("/get_all/:access_token", async function(req, res, next) {
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
    //SELECT id, compitition_name, logo, description, start_date, end_date, start_time, end_time, slot_time, waiting_time, status, created_at FROM competition where competition_type='special'  and start_date >= now()::date
    const competition = await db.query("select * from ( SELECT id, compitition_name, logo, description, start_date, end_date, start_time, end_time, slot_time, waiting_time, status, competition_type, created_at, to_timestamp(start_date || ' ' || start_time, 'YYYY-MM-DD HH24:MI:SS') as league_date FROM competition) t where league_date >= now() and competition_type='special' ");
    // IF A USER ISN'T FOUND
      if (typeof competition.rows !== 'undefined' && competition.rows.length == 0) {
        return res.status(401).json({ success: false, message: 'Competition not found' });
      }
     // console.log(competition.rows);
     return res.json({
             "status": 200,
             'data':competition.rows,
           });

  } catch (err) {
    return next(err);
  }
});

router.get("/get_promotion/:id/:access_token", async function(req, res, next) {
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
    const competition = await db.query('SELECT id, compitition_name, promotion_type, instagram_url, twitter_url, snapchat_url, app_logo, app_name, apple_store_url, google_play_url, affiliate_url, status, created_at FROM competition WHERE id = $1', [req.params.id]);
    // IF A USER ISN'T FOUND
      if (typeof competition.rows !== 'undefined' && competition.rows.length == 0) {
        return res.status(401).json({ success: false, message: 'Promotion not found' });
      }
      var questionObj = competition.rows;

     		//var changeObj = questionObj.map((item) => ({ option1: item.answer }));

     		var changeObj = questionObj.map( s => {
			  if ( s.hasOwnProperty("affiliate_url") )
			  {
			     s.affiliate_code = s.affiliate_url;
			     delete s.affiliate_url;   
			  }
			  
			  return s;
			})

     return res.json({
             "status": 200,
             'data':changeObj,
           });

  } catch (err) {
    return next(err);
  }
});

router.get("/get_narration/:id/:access_token", async function(req, res, next) {
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
    const competition = await db.query('SELECT * FROM competition_narration_company_details WHERE competition_id = $1', [req.params.id]);
    // IF A USER ISN'T FOUND
      if (typeof competition.rows !== 'undefined' && competition.rows.length == 0) {
        return res.status(401).json({ success: false, message: 'Narration not found' });
      }
     return res.json({
             "status": 200,
             'data':competition.rows,
           });

  } catch (err) {
    return next(err);
  }
});


module.exports = router;