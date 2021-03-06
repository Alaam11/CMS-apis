const express = require("express");
const router = express.Router();
const db = require("../db");
const transport = require("../config/smtp.js");
const common = require("../config/common.js");

//fcm
var FCM = require('fcm-node');
var serverKey = common.fcmServerKey(); //put your server key here
var fcm = new FCM(serverKey);

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
             "message":"رمز الدخول غير صالح" ////Invalid access token
           });
  }

  try { 
     const question = await db.query("SELECT competition_question.* FROM competition_question_mapping JOIN competition ON competition_question_mapping.competition_id::integer=competition.id JOIN competition_question ON competition_question_mapping.question_id::integer=competition_question.id WHERE competition_question_mapping.competition_id::integer=$1", [
          req.params.id]);
     		var questionObj = question.rows;

     		//var changeObj = questionObj.map((item) => ({ option1: item.answer }));

     		var changeObj = questionObj.map( s => {
			  /* if ( s.hasOwnProperty("answer") )
			  {
			     s.option1 = s.answer;
			     delete s.answer;   
			  } */
			  if ( s.hasOwnProperty("question_file_url") )
			  {
			     s.question_image = s.question_file_url;
			     delete s.question_file_url;   
			  }
			  return s;
			})


     		//console.log(changeObj);
     		//Object.assign(questionObj, {key3: "value3"});
     		/* var result = changeObj.map(function(el) {
			  var o = Object.assign({}, el);
			  o.answer = "a";
			  return o;
			  }) */
        var result =  changeObj;
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
             "message":"رمز الدخول غير صالح" //Invalid access token
           });
  }
  try { //console.log(Intl.DateTimeFormat().resolvedOptions().timeZone);
    //SELECT id, compitition_name, logo, description, start_date, end_date, start_time, end_time, slot_time, waiting_time, status, created_at FROM competition where competition_type='daily' and start_date >= now()::date   to_timestamp(start_date || ' ' || start_time, 'YYYY-MM-DD HH24:MI:SS') as league_date
    const competition = await db.query("select * from ( SELECT id, compitition_name, logo, description, start_date, end_date, start_time, end_time, slot_time, waiting_time, status, competition_type, created_at, start_date_time as league_date, now() FROM competition) t where competition_type='daily' and status=1 order by league_date desc");
    // IF A USER ISN'T FOUND
      if (typeof competition.rows !== 'undefined' && competition.rows.length == 0) {
        return res.status(200).json({ success: false, data:[], message: 'المسابقة غير موجودة' //'Competition not found' 
      });
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

router.post("/go_live_user", async function(req, res, next) {
  //####check is valid access_token#####
  const isTrue= await isValidToken(req.body.access_token);
  if(!isTrue){
         return res.json({
             "status": 201,
             "data":[],
             "message":"رمز الدخول غير صالح" ////Invalid access token
           });
  }
  if(req.body.competition_id){
    let competition_id = req.body.competition_id;
    try {
      const results = await db.query("SELECT id, broadcaster_id, compitition_name, description, logo, channel_name, token, is_live FROM competition where id=$1 ", [competition_id]);

      // IF A USER ISN'T FOUND
      if (typeof results.rows !== 'undefined' && results.rows.length == 0) {
        return res.status(200).json({ success: false, data:[], message: 'لا توجد نتائج' //'results not found' 
        });
      }
      
      return res.json({
        "status": 200,
        'data':results.rows,
      });
    } catch (err) {
      return next(err);
    }
  }else{
  return res.json({ status: 200, message: 'المعلومات المطلوبة غير متوفرة' // "Missing required parameters" 
  });
  }
});

router.get("/get_slot_data/:competition_id/:access_token", async function(req, res, next) {
  //####check is valid access_token#####
  const isTrue= await isValidToken(req.params.access_token);
  if(!isTrue){
         return res.json({
             "status": 201,
             "data":[],
             "message":"رمز الدخول غير صالح" //Invalid access token
           });
  }
  try {
    var competition_id = req.params.competition_id;
    //console.log("select * from ( SELECT id, competition_type, status, to_timestamp(start_date || ' ' || start_time, 'YYYY-MM-DD HH24:MI:SS') as league_date, now() FROM competition) t where competition_type='daily' and status=1 and id="+competition_id);
    const competition = await db.query("select * from ( SELECT id, competition_type, status, start_date_time as league_date, now() FROM competition) t where status=1 and id="+competition_id );
    // IF A USER ISN'T FOUND
      if (typeof competition.rows !== 'undefined' && competition.rows.length == 0) {
        return res.json({ status:201, success: false, message: 'أيقونه المسابقة غير موجودة' //'Competition slot not found' 
      });
      }
     // console.log(competition.rows);
     return res.json({
             "status": 200,
             'data':competition.rows,
             'message': 'success'
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
             "message":"رمز الدخول غير صالح" ////Invalid access token
           });
  }
  try {
    const competition = await db.query('SELECT id, compitition_name, promotion_type,facebook_url, instagram_url, twitter_url, snapchat_url, app_logo, app_name, apple_store_url, apple_schema, google_play_url, affiliate_url, status, created_at FROM competition WHERE id = $1', [req.params.id]);
    // IF A USER ISN'T FOUND
      if (typeof competition.rows !== 'undefined' && competition.rows.length == 0) {
        return res.status(200).json({ success: false, data:[], message: 'لا توجد نتائج' });
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
             "message":"رمز الدخول غير صالح" //Invalid access token
           });
  }
  try {
    /* select * from ( SELECT id, compitition_name, logo, description, start_date, end_date, start_time, end_time, slot_time, waiting_time, status, competition_type, created_at, to_timestamp(start_date || ' ' || start_time, 'YYYY-MM-DD HH24:MI:SS') as league_date FROM competition) t where league_date >= now() and competition_type='daily' and status=1 */

    const competition = await db.query("SELECT cn.*, start_date_time as league_date, now()  FROM competition_narration_company_details cn inner join competition cm on cm.id = cn.competition_id WHERE cn.competition_id = $1", [req.params.id]);
    // IF A USER ISN'T FOUND
      if (typeof competition.rows !== 'undefined' && competition.rows.length == 0) {
        return res.status(200).json({ success: false, data:[], message: 'لا توجد نتائج' });
      }
      var current_date = await db.query("select now() ");
      var current_date_time = current_date.rows[0].now;
      
      var date_from_database = competition.rows[0].league_date;
      //data from database
      //console.log("db: " + date_from_database)
      //console.log("current date: " + current_date_time)
      //console.log('current_date_time - date_from_database', current_date_time - date_from_database)
      var TWO_MIN=2*60*1000;

      if((date_from_database - current_date_time) <= TWO_MIN) {
        return res.json({ status: 201, data: [], message: 'لقد انتهي وقتك' });
      }

      var narrationObj = competition.rows;

     		//var changeObj = narrationObj.map((item) => ({ option1: item.answer }));

        //let obj = narrationObj.find(f=>f.narration_type=='narration');
        //if(obj)
         // obj.narration_type='1';

        //obj =  narrationObj.find(f=>f.narration_type=='live_stareaming');

        // Change narration type value in numeric type
        if(narrationObj[0].narration_type=='narration'){
          narrationObj[0].narration_type = '1';
        }else{
          narrationObj[0].narration_type = '2';
        }


     return res.json({
             "status": 200,
             'data':narrationObj,
             'message':'success'
           });

  } catch (err) {
    return next(err);
  }
});

router.post("/download_check", async function(req, res, next){
  //####check is valid access_token#####
  const isTrue= await isValidToken(req.body.access_token);
  if(!isTrue){
         return res.json({
             "status": 201,
             "data":[],
             "message":"رمز الدخول غير صالح" //Invalid access token
           });
  }
  console.log(req.body);
  let user_id = req.body.user_id;
  let competition_id = req.body.competition_id;
  let click_count = req.body.click_count;
  let app_download = req.body.app_download;
  let competition_type = req.body.competition_type;
  let device_type = req.body.device_type;
  
  /* return res.json({
    'status': 200,
    'data':typeof affiliate_code,
    'message':'success'
  }); */

  //result = {};
  const competition = await db.query("SELECT * FROM competition_download WHERE competition_id=$1 and user_id=$2", [competition_id, user_id]);

  if (typeof competition.rows !== 'undefined' && competition.rows.length == 0) {
    await db.query("INSERT INTO competition_download (competition_id, user_id, click_count, app_download, device_type, competition_type) VALUES ($1,$2,$3,$4, $5, $6) RETURNING *",
          [competition_id, user_id, click_count, app_download, device_type, competition_type]
          );
    
          //point system
    var points = 5;
    pointSystem(user_id, points, competition_type);

  }else{
    var competitionObj = competition.rows;
    //var affiliate_code_db = competitionObj[0].affiliate_url;
    var click_count_update = competitionObj[0].click_count+1;
    //var app_download = competitionObj[0].app_download;

    const result1 =  db.query(
      "UPDATE competition_download SET click_count=$1, app_download=$2, device_type=$3 WHERE competition_id = $4 and user_id =$5 RETURNING *",
      [click_count_update, app_download, device_type, competition_id, user_id] )
  }

  return res.json({
    'status': 200,
    'message':'success'
  });

});

router.post("/affiliate_check", async function(req, res, next){
  //####check is valid access_token#####
  const isTrue= await isValidToken(req.body.access_token);
  if(!isTrue){
         return res.json({
             "status": 201,
             "data":[],
             "message":"رمز الدخول غير صالح" //Invalid access token
           });
  }
  let user_id = req.body.user_id;
  let competition_id = req.body.competition_id;
  let affiliate_code = req.body.affiliate_code;
  let download = req.body.download;
  
  /* return res.json({
    'status': 200,
    'data':typeof affiliate_code,
    'message':'success'
  }); */

  result = {};
  const competition = await db.query("SELECT id, affiliate_url, competition_type, promotion_type FROM competition WHERE id=$1", [competition_id]);
  var competitionObj = competition.rows;
  var affiliate_code_db = competitionObj[0].affiliate_url;
  var competition_type = competitionObj[0].competition_type;
  var promotion_type = competitionObj[0].promotion_type;
 


  result.promotion_type = promotion_type;

  if(typeof affiliate_code !== 'undefined' && affiliate_code_db == affiliate_code){
    is_verify = true;
    const affiliate = await db.query("INSERT INTO competition_affiliate_check (competition_id, code, user_code, competition_type, created_by, is_verify, promotion_type) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING *",
          [competition_id, affiliate_code_db, affiliate_code, competition_type, user_id, is_verify, promotion_type]
          );
    result.affiliate_code = affiliate_code;
    result.is_verify = is_verify;

    //point system
    var points = 5;
    pointSystem(user_id, points, competition_type);

    return res.json({
      'status': 200,
      'data':result,
      'message':'success'
    });
    
  }else if(typeof download !== 'undefined'){
    is_verify = true;
    const affiliate = await db.query("INSERT INTO competition_affiliate_check (competition_id, competition_type, created_by, is_verify, promotion_type, download) VALUES ($1,$2,$3,$4,$5,$6) RETURNING *",
          [competition_id,  competition_type, user_id, is_verify, promotion_type, download]
          );

    result.is_verify = is_verify;

    //point system
    var points = 5;
    pointSystem(user_id, points, competition_type);

    return res.json({
      'status': 200,
      'data':result,
      'message':'success'
    });
  }else{
    is_verify = false;
    result.is_verify = is_verify;
    return res.json({
      'status': 200,
      'data':result,
      'message':'الرمز غير صحيح! من فضلك إحفص عن OTP وحاول مرة أخرى.' // 'Incorrect Code! Please check the OTP and Try again'
    });
  }

});

async function pointSystem(user_id, getPoints, competition_type){
  if(competition_type == 'daily'){
    competitionType = 'daily_competition';
  }else{
    competitionType = 'special_competition';
  }
  const points = await db.query("SELECT id, user_id, points, competition_type FROM user_points WHERE user_id=$1 and competition_type=$2", [user_id, competitionType]);
  var pointsObj = points.rows;
  // IF A USER ISN'T FOUND
  if (typeof points.rows !== 'undefined' && points.rows.length == 0) { console.log('insert', competitionType)
    await db.query("INSERT INTO user_points (user_id, points, competition_type) VALUES ($1,$2,$3) RETURNING *",
          [user_id, getPoints, competitionType]
          );
  }else{ console.log('update', competitionType+' '+ pointsObj[0].points);
  var updatedPoints = pointsObj[0].points+getPoints;
    await db.query("update user_points set points=$1 where user_id=$2 and competition_type=$3 RETURNING *",
          [updatedPoints, user_id, competitionType]
          );
  }
}

router.post("/affiliate_check_list", async function(req, res, next){
  //####check is valid access_token#####
  const isTrue= await isValidToken(req.body.access_token);
  if(!isTrue){
         return res.json({
             "status": 201,
             "data":[],
             "message":"رمز الدخول غير صالح" //Invalid access token
           });
  }
  let user_id = req.body.user_id;
  let competition_id = req.body.competition_id;

  result = {};
  const affiliate = await db.query("SELECT id, code, is_verify, download FROM competition_affiliate_check WHERE competition_id=$1 and created_by=$2 order by id desc", [competition_id, user_id]);

  const promotion = await db.query("SELECT id, promotion_type FROM competition WHERE id=$1 order by id desc", [competition_id]);

  var affiliateObj = affiliate.rows;
  //console.log(affiliateObj);
  var promotionObj = promotion.rows;
  var promotion_type = promotionObj[0].promotion_type;
  result.promotion_type = promotion_type;

  // IF A USER ISN'T FOUND
  if (typeof affiliate.rows !== 'undefined' && affiliate.rows.length == 0) {
    result.is_verify = false;
    return res.json({
      'status': 200,
      'data':result,
      'message': 'الرمز غير صحيح! من فضلك إحفص عن OTP وحاول مرة أخرى.' // 'Incorrect Code! Please check the OTP and Try again'
    });
  }
  if(promotion_type == '1'){
    result.is_verify = affiliateObj[0].is_verify;
  }else if(promotion_type == '2'){
    result.is_verify = affiliateObj[0].download;
  }else if(promotion_type == '3'){
    result.is_verify = affiliateObj[0].is_verify;
  }

  

  return res.json({
    'status': 200,
    'data':result,
    'message':'success'
  });

});

/*
*********************************
* Function for user selection option (LeaderBoard)
*********************************
*/

router.post("/leaderboard_competition_name", async function(req, res, next) {
  //####check is valid access_token#####
  const isTrue= await isValidToken(req.body.access_token);
  if(!isTrue){
         return res.json({
             "status": 201,
             "data":[],
             "message":"رمز الدخول غير صالح" //Invalid access token
           });
  }

  try {
    let user_id = req.body.user_id;
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
      var query = "SELECT c.id, c.compitition_name, c.start_date FROM competition as c inner join competition_affiliate_check as cf on cf.competition_id= c.id where c.competition_type=$1 and c.status=$2 and cf.created_by=$3";
      
      /* else if(typeof action_flag !== 'undefined' && action_flag == 3){ //3-Nationality
        query +=  " and ca.nationality='"+action_value+"'";
      } */
      if(typeof created_at !== 'undefined' && created_at != ''){
        query +=  " and date(c.start_date)='"+dateStringFinal+"'";
      }
      query += " order by compitition_name asc ";
      console.log(query, [competitionType, 1, user_id]);
      results = await db.query(query , [competitionType, 1, user_id]);
    }else if(competition_type == 'special_competition'){
      competitionType = 'special';
      var query = "SELECT c.id, c.compitition_name, c.created_at FROM competition as c inner join competition_affiliate_check as cf on cf.competition_id= c.id where c.competition_type=$1 and c.status=$2 and cf.created_by=$3";
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
      console.log(query, [competitionType, 1, user_id]);
      results = await db.query(query , [competitionType, 1, user_id]);
    }else if(competition_type == 'league_competition'){
      var query = "SELECT c.id, c.compitition_name FROM league as c inner join league_result as cf on cf.competition_id= c.id   where c.status=$1 and cf.user_id=$2 "
      //var query = "SELECT c.id, c.compitition_name FROM league as c inner join league_user_in as cf on cf.competition_id= c.id where c.status=$1 and cf.interest_user_id=$2 ";
      if(typeof created_at !== 'undefined' && created_at != ''){
        query +=  " and date(cf.created_at)='"+dateStringFinal+"'";
      }
      query += " GROUP BY c.id order by compitition_name asc ";
      console.log(query, [ 1, user_id]);
      results = await db.query(query , [1, user_id]);
    }
    

    // IF A USER ISN'T FOUND
    if (typeof results.rows !== 'undefined' && results.rows.length == 0) {
      return res.json({ status: 201, success: false, message: 'لا توجد نتائج' //'results not found' 
    });
    }
   // console.log(results.rows);
   return res.json({
           "status": 200,
           'data':results.rows,
           "massage":"success"
         });
  } catch (err) {
    return next(err);
  }
});

/*
*********************************
* Function for user answer (LeaderBoard)
*********************************
*/
router.post("/leaderboard", async function(req, res, next) {
  //####check is valid access_token#####
  const isTrue= await isValidToken(req.body.access_token);
  if(!isTrue){
         return res.json({
             "status": 201,
             "data":[],
             "message":"رمز الدخول غير صالح" ////Invalid access token
           });
  }

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
    return res.status(200).json({ success: false, message: 'Quiz type can not blank' });
  }else if(req.params.type == 'daily'){
    quiz_type = 'daily_competition';
  }else{
    quiz_type = 'special_competition';
  } */
  if(competition_type == 'league_competition'){
    //competition = await db.query("SELECT DISTINCT ON (user_id) user_id FROM league_result as cqt  WHERE competition_id =$1 " , [competition_id]);
    var ans_query = "select cqt.user_id from league_result as cqt JOIN users on users.id = cqt.user_id::integer where cqt.competition_id = $1 ";
    if(typeof action_flag !== 'undefined' && action_flag == 2){ //1--city
      ans_query +=  " and users.city='"+action_value+"'";
    }
    if(typeof action_flag !== 'undefined' && action_flag == 1){ //1--Nationality
      ans_query +=  " and users.nationality='"+action_value+"'";
    }
    if(typeof action_flag !== 'undefined' && action_flag == 0){ //2-Country
      ans_query +=  " and users.country='"+action_value+"'";
    }
    ans_query += "group by user_id";

    console.log(ans_query, [competition_id]);
    const competition = await db.query(ans_query, [competition_id])

    if (typeof competition.rows !== 'undefined' && competition.rows.length == 0) {
      return res.status(200).json({ status:201, data: [], message: 'لا يؤجد نتيجة للمسابقة المختارة' // 'Results not found for selected competition' 
    });
    }
    //console.log("SELECT DISTINCT ON (user_id) user_id FROM league_result as cqt  WHERE competition_id =$1 and group_id =$2" , [competition_id, 0]);
    var refObj = competition.rows;
    //console.log('refObj', JSON.stringify(refObj));
    
    var result = [];
    for(var i =0; i< refObj.length; i++){
      /* const results = await db.query("SELECT * FROM league_result WHERE league_result.competition_id=$1 and league_result.group_id=$2 and league_result.level=$3 and user_id =$4 ", [competition_id, group_id, level, refObj[i].user_id]);
      var userAnsObj = results.rows; */

      var userAnsArr = await db.query("SELECT cqt.user_id, cqt.question_id, cqt.correct_answer, cqt.user_answer, cqt.answer_time, users.first_name || ' ' || users.last_name as full_name, users.country, users.user_avatar FROM league_result as cqt JOIN users on users.id = cqt.user_id::integer  WHERE cqt.user_id=$1 AND cqt.competition_id=$2 " , [refObj[i].user_id, competition_id]);
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
          var ress = {user_id : refObj[i].user_id, user_name : userAnsObj[0].full_name, user_image: userAnsObj[0].user_avatar, country: userAnsObj[0].country, user_answers: totalAnswer, correct_answers : totalAnswerss, score :scoreData, total_times : totalTime};
        result.push(ress);
    }

  }else{
    //console.log("SELECT DISTINCT ON (user_id) user_id FROM user_answer as cqt  WHERE quiz_id="+competition_id);
      //const competition = await db.query("SELECT DISTINCT ON (user_id) user_id FROM user_answer as cqt  WHERE quiz_id=$1 " , [competition_id]);
      var ans_query = "select cqt.user_id from user_answer as cqt JOIN users on users.id = cqt.user_id::integer where cqt.quiz_id = $1";

      /* if(typeof action_flag !== 'undefined' && action_flag == 0){ // 0-Gender
        if(action_value == 'Both' || action_value == ''){
          Male = 'Male'; Female = 'Female';
          ans_query +=  " and (users.gender='"+Male+"' or users.gender='"+Female+"')";
        }else{
          ans_query +=  " and users.gender='"+action_value+"'";
        }
        
      } */
      if(typeof action_flag !== 'undefined' && action_flag == 2){ //1--city
        ans_query +=  " and users.city='"+action_value+"'";
      }
      if(typeof action_flag !== 'undefined' && action_flag == 1){ //1--Nationality
        ans_query +=  " and users.nationality='"+action_value+"'";
      }
      if(typeof action_flag !== 'undefined' && action_flag == 0){ //2-Country
        ans_query +=  " and users.country='"+action_value+"'";
      }
      ans_query += "group by user_id";

      console.log(ans_query, [competition_id]);
      const competition = await db.query(ans_query, [competition_id])

      if (typeof competition.rows !== 'undefined' && competition.rows.length == 0) {
        return res.json({  status: 201, data:[], message: 'لا يؤجد نتيجة للمسابقة المختارة' // 'Results not found for selected competition' 
      });
      }
      var refObj = competition.rows;
      var result = [];
      
      for(var i =0; i< refObj.length; i++){
        var ress = {};
        var query = "SELECT cqt.user_id, cqt.quiz_id, cqt.correct_answer, cqt.user_answer, cqt.total_time, users.username, users.first_name || ' ' || users.last_name as full_name, users.email, users.country, users.user_avatar FROM user_answer as cqt JOIN users on users.id = cqt.user_id::integer  WHERE user_id=$1 AND quiz_id=$2";

        
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
          ress = {user_id : refObj[i].user_id, user_name : userAnsObj[0].username, full_name : userAnsObj[0].full_name, user_email : userAnsObj[0].email, user_image: userAnsObj[0].user_avatar, country: userAnsObj[0].country, user_answers: totalAnswer, correct_answers : totalAnswerss, score :scoreData, total_times : totalTime};
        result.push(ress);
      }
  }
    if(sort_type == '1'){
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

/*
*********************************
* Function for user points selection (PointSystem)
*********************************
*/

router.post("/points", async function(req, res, next) {
  //####check is valid access_token#####
  const isTrue= await isValidToken(req.body.access_token);
  if(!isTrue){
         return res.json({
             "status": 201,
             "data":[],
             "message":"رمز الدخول غير صالح" //Invalid access token
           });
  }

  try {
    let user_id = req.body.user_id;
    ///////summery/////////////////////////
    const summeryQ = await db.query("SELECT * FROM user_points WHERE user_id=$1 ", [
       user_id]);
      //var summeryArr=summeryQ.rows;

       var questionObj     = summeryQ.rows;
       var summeryArr      = [];
       let points = 0;
      for(let i=0;i<questionObj.length;i++)
      {
        let qObjs     = questionObj[i];
        var total_points = (points +=qObjs.points);
      }

      for(let i=0;i<questionObj.length;i++)
      {
        let pointObj = {}
        let qObj     = questionObj[i];
        pointObj['competiiton_type'] = qObj.competition_type;
        pointObj['points'] = qObj.points;
        pointObj['total_points'] = total_points;
        if(total_points>0 && total_points <=100){
          pointObj['level'] = 'Lavel 1';
        }else if(total_points>100 && total_points <=200){
          pointObj['level'] = 'Lavel 2';
        }else if(total_points>200 && total_points <=300){
          pointObj['level'] = 'Lavel 3';
        }else if(total_points>300 && total_points <=400){
          pointObj['level'] = 'Lavel 4';
        }else if(total_points>400 && total_points <=500){
          pointObj['level'] = 'Lavel 5';
        }
        summeryArr.push(pointObj);
      }
    
    
   // console.log(results.rows);
   return res.json({
           "status": 200,
           'data':summeryArr,
           "massage":"success"
         });
  } catch (err) {
    return next(err);
  }
});

// ================social counts API===============================


router.post("/social_counts", async function (req, res, next) {
  let date = new Date(Date.now())
  //####check is valid access_token#####
  const isTrue= await isValidToken(req.body.access_token);
  if(!isTrue){
         return res.json({
             "status": 201,
             "data":[],
             "message":"رمز الدخول غير صالح" ////Invalid access token
           });
  }
  try {
    delete req.body.access_token;
    const social = await db.query('SELECT * FROM competition_social_media WHERE (user_id = $1 AND competition_id = $2 AND competition_type =$3 AND social_type =$4)', [req.body.user_id, req.body.competition_id, req.body.competition_type , req.body.social_type]);
    if (social.rows.length > 0) {
      let count = parseInt(social.rows[0].click_count) + 1;
      const social_update = await db.query('UPDATE competition_social_media SET click_count = $1 WHERE id = $2',
        [count, social.rows[0].id]
      );
      social.rows[0].click_count = count
      return res.json({
        'status': 200,
        data: {},
        'message': 'success'
      });
    } else {
      const result = await db.query(
        "INSERT INTO competition_social_media (user_id,competition_id,competition_type,social_type,click_count ,device_type,is_share, created_at) VALUES ($1,$2,$3,$4,$5,$6 ,$7,$8) RETURNING *",
        [req.body.user_id, req.body.competition_id, req.body.competition_type, req.body.social_type, req.body.click_count,req.body.device_type, req.body.is_share,date]
      );
                //point system
    var points = 5;
    pointSystem(req.body.user_id, points, req.body.competition_type);
    
      return res.json({
        "status": 200,
        'data': {},
        'message': 'success'
      });
    }
  } catch (err) {
    return next(err);
  }
});


router.post("/get_social_counts/:access_token", async function (req, res, next) {
  //####check is valid access_token#####
  const isTrue= await isValidToken(req.params.access_token);
  if(!isTrue){
         return res.json({
             "status": 201,
             "data":[],
             "message":"رمز الدخول غير صالح" ////Invalid access token
           });
  }
  try {
    const social = await db.query('SELECT users.first_name ,users.last_name, competition_social_media.* FROM competition_social_media JOIN users ON competition_social_media.user_id = users.id WHERE (user_id = $1 AND competition_id = $2)', [req.body.user_id, req.body.competition_id]);
    return res.json({
      "status": 200,
      'data': social.rows,
      'message': 'success'
    });

  } catch (err) {
    return next(err);
  }
});


//==================================================================

module.exports = router;