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


///get qustion by quiz id
router.get("/get_question_by_quiz/:access_token/:quiz_id", async function(req, res, next) {
  try {

      //####check is valid access_token#####
      const isTrue= await isValidToken(req.params.access_token);
      if(!isTrue){
             return res.json({
                 "status": 201,
                 "data":{},
                 "message":"Invalid access token"
               });
      }

      const question = await db.query("SELECT cms_quiz_question.* FROM cms_quiz_question_mapping JOIN cms_quiz_question ON cms_quiz_question_mapping.question_id::integer=cms_quiz_question.id WHERE cms_quiz_question_mapping.quiz_id=$1", [
          req.params.quiz_id]);
      let questionObj      = question.rows;
      var qFinal      = [];
      for(let i=0;i<questionObj.length;i++)
      {
        let qObj     = questionObj[i];
        if((questionObj[i].question!='' && questionObj[i].question!=null) && (questionObj[i].question_image_url!='' && questionObj[i].question_image_url!=null))
        {
          qObj['question_type']='text_and_image';  
        }
        else if((questionObj[i].question!='' && questionObj[i].question!=null) && (questionObj[i].question_image_url=='' || questionObj[i].question_image_url==null))
        {
          qObj['question_type']='text';  
        }
        else if((questionObj[i].question=='' || questionObj[i].question==null) && (questionObj[i].question_image_url!='' && questionObj[i].question_image_url!=null))
        {
          qObj['question_type']='image';  
        }
        else{
          qObj['question_type']='text'; 
        }

         //text/image/text_and_image
        qFinal.push(qObj);
      }

         return res.json({
             "status": 200,
             'data':qFinal,
             "message":"success"
           });

  } catch (err) {
    return next(err);
  }
});

///get qustion new by quiz id
router.get("/get_question_by_quiz_new/:access_token/:quiz_id/:user_id", async function(req, res, next) {
  try {

      //####check is valid access_token#####
      const isTrue= await isValidToken(req.params.access_token);
      if(!isTrue){
             return res.json({
                 "status": 201,
                 "data":{},
                 "message":"Invalid access token"
               });
      }
      var quiz_id = req.params.quiz_id;
      var user_id = req.params.user_id;

      ///////////////////////////////////////////
        var newlyGameId=0;
        const checkGame = await db.query("SELECT * FROM se_user_game WHERE type=$1 AND quiz_id=$2 AND user_id=$3 AND status=$4 ", [
           'competitive',quiz_id,user_id,'0']);
        
        if(checkGame.rows.length==0)
        {
          const newGameq = await db.query(
              "INSERT INTO se_user_game (type,quiz_id,user_id,status) VALUES ($1,$2,$3,$4) RETURNING *",
              ['competitive',quiz_id,user_id,'0']);

          newlyGameId = newGameq.rows[0].id;

          ///insert questons
          const question = await db.query("SELECT cms_quiz_question.* FROM cms_quiz_question_mapping JOIN cms_quiz_question ON cms_quiz_question_mapping.question_id::integer=cms_quiz_question.id WHERE cms_quiz_question_mapping.quiz_id=$1", [quiz_id]);
          var questionArr=question.rows;
          var questionData = [];
          for (var i=0; i<questionArr.length; i++)
          { 
            let questionObj = questionArr[i];
            var insert = await db.query("INSERT INTO se_game_result (se_game_id,question_id,correct_answer,user_id,is_answered,created_by) VALUES ($1,$2,$3,$4,$5,$6) RETURNING *",
            [newlyGameId, questionObj.id, questionObj.answer, user_id,'no',user_id]
             );
          }
          //////////////////////////////
        }
        else{
          newlyGameId=checkGame.rows[0].id;
        }
        ///////////////////////////////////////////
        const questionQuery = await db.query("SELECT cqq.*,sgr.is_answered,sgr.user_answer FROM se_game_result sgr INNER JOIN cms_quiz_question cqq ON sgr.question_id=cqq.id WHERE sgr.se_game_id=$1", [newlyGameId]);

        var questionArrObj=questionQuery.rows;
        var questionData = [];
        for (var i=0; i<questionArrObj.length; i++)
        { 
           var item =questionArrObj[i];
           //////////////////////////////
           if((item.question!='' && item.question!=null) && (item.question_image_url!='' && item.question_image_url!=null))
            {
              item['question_type']='text_and_image';  
            }
            else if((item.question!='' && item.question!=null) && (item.question_image_url=='' || item.question_image_url==null))
            {
              item['question_type']='text';  
            }
            else if((item.question=='' || item.question==null) && (item.question_image_url!='' && item.question_image_url!=null))
            {
              item['question_type']='image';  
            }
            else{
              item['question_type']='text'; 
            }
            item['game_id']=newlyGameId;
           //////////////////////////////
            questionData.push(item);
        }

         return res.json({
             "status": 200,
             'data':questionData,
             "message":"success"
           });

  } catch (err) {
    return next(err);
  }
});


///get quiz lession
router.post("/get_unit_lesson", async function(req, res, next) {
  if(req.body.access_token && req.body.user_id && req.body.subject_id && req.body.class_id && req.body.semester_id && req.body.district_id)
  {
    var access_token    = req.body.access_token;
    var user_id         = req.body.user_id;
    var class_id        = req.body.class_id;
    var semester_id     = req.body.semester_id;
    var district_id     = req.body.district_id;
    var subject_id      = req.body.subject_id;
   
    try {

        //####check is valid access_token#####
        const isTrue= await isValidToken(access_token);
        if(!isTrue){
               return res.json({
                   "status": 201,
                   "data":{},
                   "message":"Invalid access token"
                 });
        }

       const units = await db.query("SELECT cqq.*,cqq.quiz_type as quiz_id,cqq.subject as subject_id,ms.name as subject,cqq.chapter as chapter_id,mc.name as chapter FROM cms_quiz_question cqq JOIN master_chapter mc ON mc.id=cqq.chapter::integer JOIN master_subject ms ON ms.id=cqq.subject::integer WHERE cqq.type=$1 AND cqq.subject=$2 AND cqq.class=$3 AND cqq.semester=$4", [
            'curriculum',subject_id,class_id,semester_id]);
         var arrayData = [];
         var unitsArr=units.rows;
         var uniqueData = [];
         var uniqueSeData=[];
           
          for (var i=0; i<unitsArr.length; i++)
          { 
            var item =unitsArr[i];

            if(uniqueData.indexOf(item['chapter_id']) ==-1)
            {
              var lesson =  await db.query("SELECT cqq.*,cqq.chapter as chapter_id, mc.name as chapter,cqq.lesson as lesson_id, ml.name as lesson FROM cms_quiz_question cqq JOIN master_chapter mc ON mc.id=cqq.chapter::integer JOIN master_lesson ml ON ml.id=cqq.lesson::integer WHERE cqq.type=$1 AND cqq.subject=$2 AND cqq.class=$3 AND cqq.semester=$4 AND cqq.chapter=$5", ['curriculum',subject_id,class_id,semester_id,item['chapter_id']]);

              var lessonData = [];
              var lessionArr=lesson.rows;
              var uniqueSeData=[];

              for (var j=0; j<lessionArr.length; j++) 
              {
                var sub_item = lessionArr[j];
                var status=0;
                var lesson_check = await db.query("SELECT * FROM user_quiz_attempt WHERE user_id=$1 AND class_id=$2 AND subject_id=$3 AND semester_id=$4 AND chapter_id=$5 AND lesson_id=$6", [user_id,class_id,subject_id,semester_id,item['chapter_id'],sub_item['lesson_id']]);
                 if(lesson_check.rows.length > 0){
                  status=lesson_check.rows[0].status;
                 }

                if(!uniqueSeData.includes(sub_item['lesson_id'])){
                    uniqueSeData.push(sub_item['lesson_id']);
                    lessonData.push({"id": sub_item['lesson_id'],"name": sub_item['lesson'],"status": status});
                }
              }

            
              uniqueData.push(item['chapter_id']);
              arrayData.push({subject: item['subject'],subject_id: item['subject_id'],name: item['chapter'], id: item['chapter_id'],'lesson':lessonData});
            }
          }

           return res.json({
               "status": 200,
               'data':{'chapter':arrayData},
               "message":"success"
             });

    } catch (err) {
      return next(err);
    }
  }
  else{
     return res.json({"status": 403, "data":{},"message": "Missing required parameters" });
  }
});

///get quiz lession
router.post("/get_unit_lesson_new", async function(req, res, next) {
  if(req.body.access_token && req.body.user_id && req.body.subject_id && req.body.class_id && req.body.semester_id && req.body.district_id)
  {
    var access_token    = req.body.access_token;
    var user_id         = req.body.user_id;
    var class_id        = req.body.class_id;
    var semester_id     = req.body.semester_id;
    var district_id     = req.body.district_id;
    var subject_id      = req.body.subject_id;
   
    try {

        //####check is valid access_token#####
        const isTrue= await isValidToken(access_token);
        if(!isTrue){
               return res.json({
                   "status": 201,
                   "data":{},
                   "message":"Invalid access token"
                 });
        }

       const units = await db.query("SELECT cqq.*,cqq.quiz_type as quiz_id,cqq.subject as subject_id,ms.name as subject,cqq.chapter as chapter_id,mc.name as chapter FROM cms_quiz_question cqq INNER JOIN master_chapter mc ON mc.id=cqq.chapter::integer INNER JOIN master_subject ms ON ms.id=cqq.subject::integer WHERE cqq.type=$1 AND cqq.subject=$2 AND cqq.class=$3 AND cqq.semester=$4", [
            'curriculum',subject_id,class_id,semester_id]);
         var arrayData = [];
         var unitsArr=units.rows;
         var uniqueData = [];
         var uniqueSeData=[];
           
          for (var i=0; i<unitsArr.length; i++)
          { 
            var item =unitsArr[i];

            if(uniqueData.indexOf(item['chapter_id']) ==-1)
            {
              var lesson =  await db.query("SELECT cqq.*,cqq.chapter as chapter_id, mc.name as chapter,cqq.lesson as lesson_id, ml.name as lesson FROM cms_quiz_question cqq JOIN master_chapter mc ON mc.id=cqq.chapter::integer JOIN master_lesson ml ON ml.id=cqq.lesson::integer WHERE cqq.type=$1 AND cqq.subject=$2 AND cqq.class=$3 AND cqq.semester=$4 AND cqq.chapter=$5", ['curriculum',subject_id,class_id,semester_id,item['chapter_id']]);

              var lessonData = [];
              var lessionArr=lesson.rows;
              var uniqueSeData=[];

              for (var j=0; j<lessionArr.length; j++) 
              {
                var sub_item = lessionArr[j];
                var status=0;
                var lesson_check = await db.query("SELECT * FROM se_user_game WHERE user_id=$1 AND class_id=$2 AND subject_id=$3 AND semester_id=$4 AND chapter_id=$5 AND lesson_id=$6", [user_id,class_id,subject_id,semester_id,item['chapter_id'],sub_item['lesson_id']]);
                 if(lesson_check.rows.length > 0)
                 {
                  
                  if(lesson_check.rows[0].attempt_status==null){
                    status=0;
                  }
                  else{
                    status=lesson_check.rows[0].attempt_status;
                  }
                 }

                if(!uniqueSeData.includes(sub_item['lesson_id'])){
                    uniqueSeData.push(sub_item['lesson_id']);
                    lessonData.push({"id": sub_item['lesson_id'],"name": sub_item['lesson'],"status": status});
                }
              }

              uniqueData.push(item['chapter_id']);
              arrayData.push({subject: item['subject'],subject_id: item['subject_id'],name: item['chapter'], id: item['chapter_id'],'lesson':lessonData});
            }
          }

           return res.json({
               "status": 200,
               'data':{'chapter':arrayData},
               "message":"success"
             });

    } catch (err) {
      return next(err);
    }
  }
  else{
     return res.json({"status": 403, "data":{},"message": "Missing required parameters" });
  }
});


///get subject by class & semester
router.post("/get_subject_by_class_sem", async function(req, res, next) {
  
  if(req.body.access_token && req.body.class_id && req.body.semester_id)
  {
    var access_token    = req.body.access_token;
    var class_id        = req.body.class_id;
    var semester_id     = req.body.semester_id;
    var district_id     = req.body.district_id;

    try {

        //####check is valid access_token#####
        const isTrue= await isValidToken(access_token);
        if(!isTrue){
               return res.json({
                   "status": 201,
                   "data":{},
                   "message":"Invalid access token"
                 });
        }

          const question = await db.query("SELECT ms.* FROM cms_quiz_question cqq INNER JOIN master_subject ms ON ms.id=cqq.subject::integer WHERE cqq.type=$1 AND cqq.class=$2 AND cqq.semester=$3 group by ms.id order by ms.name asc", [
           'curriculum',class_id,semester_id]);

           return res.json({
               "status": 200,
               'data':question.rows,
               "message":"success"
             });

    } catch (err) {
      return next(err);
    }
  }
  else{
     return res.json({"status": 403, "data":{},"message": "Missing required parameters" });
  }
});


///get all curriculum qustion
router.post("/get_curriculam_question", async function(req, res, next) {
  
  if(req.body.access_token && req.body.user_id && req.body.subject_id && req.body.class_id && req.body.semester_id)
  {
    var access_token    = req.body.access_token;
    var user_id         = req.body.user_id;
    var class_id        = req.body.class_id;
    var semester_id     = req.body.semester_id;
    var subject_id      = req.body.subject_id;
    var chapter_id      = req.body.chapter_id;
    var lesson_id       = req.body.lesson_id;


    try {

        //####check is valid access_token#####
        const isTrue= await isValidToken(access_token);
        if(!isTrue){
               return res.json({
                   "status": 201,
                   "data":{},
                   "message":"Invalid access token"
                 });
        }

          //const question = await db.query("SELECT cqq.* FROM cms_quiz_question cqq LEFT JOIN user_answer ua ON cqq.id=ua.question_id WHERE ua.question_id IS NULL AND cqq.type=$1 AND cqq.subject=$2 AND cqq.class=$3 AND cqq.semester=$4 AND cqq.chapter=$5 AND cqq.lesson=$6 order by cqq.id desc limit 20", [
           //'curriculum',subject_id,class_id,semester_id,chapter_id,lesson_id]);

          const question = await db.query("SELECT cqq.* FROM cms_quiz_question cqq  WHERE cqq.type=$1 AND cqq.subject=$2 AND cqq.class=$3 AND cqq.semester=$4 AND cqq.chapter=$5 AND cqq.lesson=$6 AND cqq.id NOT IN (SELECT question_id FROM user_answer WHERE user_id=$7 AND is_answered=$8) order by cqq.id desc limit 20", [
           'curriculum',subject_id,class_id,semester_id,chapter_id,lesson_id,user_id,'yes']);

          var questionArr=question.rows;
          var questionData = [];
          for (var i=0; i<questionArr.length; i++)
          { 
            var item =questionArr[i];
            var is_answered ='no';
            const chkQueSave = await db.query("SELECT * FROM user_answer WHERE class_id=$1 AND semester_id=$2 AND subject_id=$3 AND chapter_id=$4 AND lesson_id=$5 AND user_id=$6 AND question_id=$7", [class_id,semester_id,subject_id,chapter_id,lesson_id,user_id,item['id']]);
             if(chkQueSave.rows.length > 0){
               is_answered=chkQueSave.rows[0].is_answered;
             }
             item['is_answered'] =is_answered;
             //////////////////////////////
             if((item.question!='' && item.question!=null) && (item.question_image_url!='' && item.question_image_url!=null))
              {
                item['question_type']='text_and_image';  
              }
              else if((item.question!='' && item.question!=null) && (item.question_image_url=='' || item.question_image_url==null))
              {
                item['question_type']='text';  
              }
              else if((item.question=='' || item.question==null) && (item.question_image_url!='' && item.question_image_url!=null))
              {
                item['question_type']='image';  
              }
              else{
                item['question_type']='text'; 
              }

             //////////////////////////////

            questionData.push(item);

          }
           return res.json({
               "status": 200,
               'data':question.rows,
               "message":"success"
             });

    } catch (err) {
      return next(err);
    }
  }
  else{
     return res.json({"status": 403, "data":{},"message": "Missing required parameters" });
  }
});

///get all curriculum qustion new
router.post("/get_curriculam_question_new", async function(req, res, next) {
  
  if(req.body.access_token && req.body.user_id && req.body.subject_id && req.body.class_id && req.body.semester_id)
  {
    var access_token    = req.body.access_token;
    var user_id         = req.body.user_id;
    var class_id        = req.body.class_id;
    var semester_id     = req.body.semester_id;
    var subject_id      = req.body.subject_id;
    var chapter_id      = req.body.chapter_id;
    var lesson_id       = req.body.lesson_id;

    try {

        //####check is valid access_token#####
        const isTrue= await isValidToken(access_token);
        if(!isTrue){
               return res.json({
                   "status": 201,
                   "data":{},
                   "message":"Invalid access token"
                 });
        }

        var newlyGameId=0;
        const checkGame = await db.query("SELECT * FROM se_user_game WHERE type=$1 AND class_id=$2 AND semester_id=$3 AND subject_id=$4 AND chapter_id=$5 AND lesson_id=$6 AND user_id=$7 AND status=$8 ", [
           'curriculum',class_id,semester_id,subject_id,chapter_id,lesson_id,user_id,'0']);
        
        if(checkGame.rows.length==0)
        {
          const newGameq = await db.query(
              "INSERT INTO se_user_game (type,class_id,semester_id,subject_id,chapter_id,lesson_id,user_id,status) VALUES ($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *",
              ['curriculum',class_id,semester_id,subject_id,chapter_id,lesson_id,user_id,'0']);
          newlyGameId = newGameq.rows[0].id;

          ///insert questons

          const question = await db.query("SELECT cqq.* FROM cms_quiz_question cqq  WHERE cqq.type=$1 AND cqq.subject=$2 AND cqq.class=$3 AND cqq.semester=$4 AND cqq.chapter=$5 AND cqq.lesson=$6 order by random() limit 20", [
           'curriculum',subject_id,class_id,semester_id,chapter_id,lesson_id]);

          var questionArr=question.rows;
          console.log(questionArr);
          var questionData = [];
          for (var i=0; i<questionArr.length; i++)
          { 
            let questionObj = questionArr[i];
            var insert = await db.query("INSERT INTO se_game_result (se_game_id,question_id,correct_answer,user_id,is_answered,created_by) VALUES ($1,$2,$3,$4,$5,$6) RETURNING *",
            [newlyGameId, questionObj.id, questionObj.answer, user_id,'no',user_id]
             );
          }
          //////////////////////////////
        }
        else{
          newlyGameId=checkGame.rows[0].id;
        }
        //
          const questionQuery = await db.query("SELECT cqq.*,sgr.is_answered,sgr.user_answer FROM se_game_result sgr INNER JOIN cms_quiz_question cqq ON sgr.question_id=cqq.id WHERE sgr.se_game_id=$1", [newlyGameId]);

          var questionArrObj=questionQuery.rows;
          var questionData = [];
          for (var i=0; i<questionArrObj.length; i++)
          { 
             var item =questionArrObj[i];
             //////////////////////////////
             if((item.question!='' && item.question!=null) && (item.question_image_url!='' && item.question_image_url!=null))
              {
                item['question_type']='text_and_image';  
              }
              else if((item.question!='' && item.question!=null) && (item.question_image_url=='' || item.question_image_url==null))
              {
                item['question_type']='text';  
              }
              else if((item.question=='' || item.question==null) && (item.question_image_url!='' && item.question_image_url!=null))
              {
                item['question_type']='image';  
              }
              else{
                item['question_type']='text'; 
              }
              item['game_id']=newlyGameId;
             //////////////////////////////
              questionData.push(item);
          }
          return res.json({
               "status": 200,
               'data':questionData,
               "message":"success"
             });

    } catch (err) {
      return next(err);
    }
  }
  else{
     return res.json({"status": 403, "data":{},"message": "Missing required parameters" });
  }
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


/*
*********************************
* Function for save user answer
*********************************
*/

router.post("/save_answer", async function(req, res, next) {
  
  if(req.body.access_token && req.body.user_id && req.body.quiz_id && req.body.answer)
  {
    var answerArr       = req.body.answer;
    var user_id         = req.body.user_id;
    var quiz_id         = req.body.quiz_id;
    var quiz_type       = req.body.quiz_type;
    var quiz_sub_type   = req.body.quiz_sub_type;
    var total_time   = req.body.total_time;

    //####check is valid access_token#####
      const isTrue= await isValidToken(req.body.access_token);
      if(!isTrue){
             return res.json({
                 "status": 201,
                 "data":{},
                 "message":"Invalid access token"
               });
      }
      try {
         var total_correct_answer=0;
         var total_incorrect_answer=0;
        answerArr.forEach(answer => { 
            if(answer['correct_answer']==answer['user_answer']){
              total_correct_answer=total_correct_answer+1;
            }
            else{
              total_incorrect_answer=total_incorrect_answer+1;
            }

            db.query(
            "INSERT INTO user_answer (user_id,quiz_id,quiz_type,quiz_sub_type,question_id,correct_answer,user_answer,created_by, total_time) VALUES ($1,$2,$3,$4,$5,$6,$7,$8, $9)",
            [user_id, quiz_id,quiz_type,quiz_sub_type,answer['question_id'],answer['correct_answer'],answer['user_answer'],user_id,answer['total_time']]);
          });   

        return res.json({
             "status": 200,
             "data": {"total_correct_answer":total_correct_answer,"total_incorrect_answer":total_incorrect_answer,"total_points":total_correct_answer},
             "message":"data saved successfully"
           });

    } catch (err) {
      return next(err);
    }
  }
  else{
     return res.json({"status": 403, "data":{},"message": "Missing required parameters" });
  }
});


/*
*************************************
* Function for get quiz - competitive
*************************************
*/

router.get("/get_quiz/:quiz_type_id/:quiz_sub_type_id/:access_token", async function(req, res, next) {
  if(req.params.access_token && req.params.quiz_type_id && req.params.quiz_sub_type_id)
  {
    try {

      //####check is valid access_token#####
      const isTrue= await isValidToken(req.params.access_token);
      if(!isTrue){
           return res.json({
               "status": 201,
               "data":{},
               "message":"Invalid access token"
             });
      }

      const quiz = await db.query("SELECT cq.quiz_type as quiz_type_id,cq.quiz_sub_type as quiz_sub_type_id,cq.quiz_title,cq.quiz_description,cq.quiz_icon_url,cq.status,cq.save_type,cq.id,cq.created_at,u.first_name || ' ' || u.last_name AS created_by FROM cms_quiz cq JOIN users u ON cq.created_by=u.id WHERE cq.quiz_type=$1 AND cq.quiz_sub_type=$2 order by cq.quiz_title",[req.params.quiz_type_id,req.params.quiz_sub_type_id]);
       return res.json({
               "status": 200,
               'data':quiz.rows,
               "message":"success"
             });

    } catch (err) {
      return next(err);
    }
  }
  else{
     return res.json({"status": 403, "data":{},"message": "Missing required parameters" });
  }
});

/*
*************************************
* Function for save competitive exam
*************************************
*/

router.post("/save_competitive_answer", async function(req, res, next) {
  
  if(req.body.access_token && req.body.user_id && req.body.quiz_id && req.body.answer)
  {
    var answerArr       = req.body.answer;
    var user_id         = req.body.user_id;
    var quiz_id         = req.body.quiz_id;
    var quiz_type       = req.body.quiz_type;
    var quiz_type_id    = req.body.quiz_type_id;
    var quiz_sub_type_id= req.body.quiz_sub_type_id;
    var total_time      = req.body.total_time;
    var total_points    = 0;

    //####check is valid access_token#####
      const isTrue= await isValidToken(req.body.access_token);
      if(!isTrue){
             return res.json({
                 "status": 201,
                 "data":{},
                 "message":"Invalid access token"
               });
      }
      try {
         var total_correct_answer=0;
         var total_incorrect_answer=0;
          for (var i=0; i<answerArr.length; i++)
          {
            var answer = answerArr[i];
            if(answer['correct_answer']==answer['user_answer']){
              total_correct_answer=total_correct_answer+1;
              total_points=total_points+5;
            }
            else{
              total_incorrect_answer=total_incorrect_answer+1;
            }

            const chkQueSave = await db.query("SELECT * FROM user_answer WHERE user_id=$1 AND quiz_id=$2 AND quiz_type=$3 AND quiz_type_id=$4 AND quiz_sub_type_id=$5 AND question_id=$6", [user_id,quiz_id,quiz_type,quiz_type_id,quiz_sub_type_id,answer['question_id']]);
            if(chkQueSave.rows.length == 0)
              {
                db.query(
                "INSERT INTO user_answer (user_id,quiz_id,quiz_type,quiz_sub_type,question_id,correct_answer,user_answer,created_by, total_time, spend_time,quiz_type_id,quiz_sub_type_id) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12)",
                [user_id, quiz_id,quiz_type,quiz_sub_type_id,answer['question_id'],answer['correct_answer'],answer['user_answer'],user_id,total_time,answer['spend_time'],quiz_type_id,quiz_sub_type_id]);
              }
          }

          ///////summery/////////////////////////
           const summeryQ = await db.query("SELECT cqq.* ,us.user_answer FROM user_answer us INNER JOIN cms_quiz_question cqq ON us.question_id::integer=cqq.id WHERE us.quiz_type=$1 AND us.user_id=$2 order by us.id desc limit 20", [
           'competitive',user_id]);
           //var summeryArr=summeryQ.rows;

            let questionObj     = summeryQ.rows;
            var summeryArr      = [];
            for(let i=0;i<questionObj.length;i++)
            {
              let qObj     = questionObj[i];
              if((questionObj[i].question!='' && questionObj[i].question!=null) && (questionObj[i].question_image_url!='' && questionObj[i].question_image_url!=null))
              {
                qObj['question_type']='text_and_image';  
              }
              else if((questionObj[i].question!='' && questionObj[i].question!=null) && (questionObj[i].question_image_url=='' || questionObj[i].question_image_url==null))
              {
                qObj['question_type']='text';  
              }
              else if((questionObj[i].question=='' || questionObj[i].question==null) && (questionObj[i].question_image_url!='' && questionObj[i].question_image_url!=null))
              {
                qObj['question_type']='image';  
              }
              else{
                qObj['question_type']='text'; 
              }

               //text/image/text_and_image
              summeryArr.push(qObj);
            }
          ///////////////////////////////////////

        return res.json({
             "status": 200,
             "data": {"question":summeryArr,"total_correct_answer":total_correct_answer,"total_incorrect_answer":total_incorrect_answer,"total_points":total_points},
             "message":"data saved successfully"
           });

    } catch (err) {
      return next(err);
    }
  }
  else{
     return res.json({"status": 403, "data":{},"message": "Missing required parameters" });
  }
});
//save competitive answer new
router.post("/save_competitive_answer_new", async function(req, res, next) {
  
  if(req.body.access_token && req.body.user_id  && req.body.answer && req.body.game_id)
  {
    var answerArr       = req.body.answer;
    var user_id         = req.body.user_id;
    var game_id         = req.body.game_id;
    var total_time      = req.body.total_time;
    var attempt_status  = 2;
    var total_points    = 0;
    var quiz_type_id    = 2; //for competitve
    var quiz_sub_type_id= 0;

    //####check is valid access_token#####
      const isTrue= await isValidToken(req.body.access_token);
      if(!isTrue){
             return res.json({
                 "status": 201,
                 "data":{},
                 "message":"Invalid access token"
               });
      }
      try {
         var total_correct_answer=0;
         var total_incorrect_answer=0;
          for (var i=0; i<answerArr.length; i++)
          {
            var answer = answerArr[i];
            var is_answered     = answer['is_answered'];
            var question_id     = answer['question_id'];
            var spend_time      = answer['spend_time'];
            var user_answer     = answer['user_answer'];
            var ugr= await db.query("UPDATE se_game_result SET is_answered=$1,user_answer=$2,spend_time=$3 WHERE question_id=$4 AND se_game_id=$5 AND user_id=$6",[is_answered,user_answer,spend_time,question_id,game_id,user_id]);
          } 

          var game_status_q= await db.query("UPDATE se_user_game SET attempt_status=$1 WHERE id=$2",[attempt_status,game_id]);

          ///////summery/////////////////////////
          const summeryQ = await db.query("SELECT cqq.*,sgr.is_answered,sgr.user_answer,sgr.correct_answer FROM se_game_result sgr INNER JOIN cms_quiz_question cqq ON sgr.question_id=cqq.id WHERE sgr.se_game_id=$1", [game_id]);

          let questionObj     = summeryQ.rows;
          var summeryArr      = [];
          for(let i=0;i<questionObj.length;i++)
          {
            let qObj     = questionObj[i];
            ///////////calculate summery//
            var is_answered_val     = qObj.is_answered;
            //if(is_answered_val=='yes'){
              if(qObj.correct_answer.toLowerCase() == qObj.user_answer.toLowerCase()){
                total_correct_answer=total_correct_answer+1;
                total_points=total_points+5;
              }
              else{
                total_incorrect_answer=total_incorrect_answer+1;
              }
            //}
            //////////////////////////////
            if((questionObj[i].question!='' && questionObj[i].question!=null) && (questionObj[i].question_image_url!='' && questionObj[i].question_image_url!=null))
            {
              qObj['question_type']='text_and_image';  
            }
            else if((questionObj[i].question!='' && questionObj[i].question!=null) && (questionObj[i].question_image_url=='' || questionObj[i].question_image_url==null))
            {
              qObj['question_type']='text';  
            }
            else if((questionObj[i].question=='' || questionObj[i].question==null) && (questionObj[i].question_image_url!='' && questionObj[i].question_image_url!=null))
            {
              qObj['question_type']='image';  
            }
            else{
              qObj['question_type']='text'; 
            }

             //text/image/text_and_image
            summeryArr.push(qObj);
          }

          ///////////////////////////////////////
          if(attempt_status==2){ //compete game
             var ug_game= await db.query("UPDATE se_user_game SET status=$1,attempt_status=$2 WHERE id=$3",['1','2',game_id]);
          }
        return res.json({
             "status": 200,
             "data": {"question":summeryArr,"total_correct_answer":total_correct_answer,"total_incorrect_answer":total_incorrect_answer,"total_points":total_points},
             "message":"data saved successfully"
           });

    } catch (err) {
      return next(err);
    }
  }
  else{
     return res.json({"status": 403, "data":{},"message": "Missing required parameters" });
  }
});


//save curriculam answer
router.post("/save_curriculum_answer", async function(req, res, next) {
  
  if(req.body.access_token && req.body.user_id  && req.body.answer)
  {
    var answerArr       = req.body.answer;
    var user_id         = req.body.user_id;
    var quiz_id         = req.body.quiz_id;
    var quiz_type       = req.body.quiz_type;
    var quiz_sub_type   = "";
    var sub_quiz_id     = 0;
    var class_id        = req.body.class_id;
    var semester_id     = req.body.semester_id;
    var subject_id      = req.body.subject_id;
    var chapter_id      = req.body.chapter_id;
    var lesson_id       = req.body.lesson_id;
    var total_time      = req.body.total_time;
    var attempt_status  = req.body.attempt_status;
    var total_points    = 0;
    var quiz_type_id    = 1; //for curricluam
    var quiz_sub_type_id= 0;

    //####check is valid access_token#####
      const isTrue= await isValidToken(req.body.access_token);
      if(!isTrue){
             return res.json({
                 "status": 201,
                 "data":{},
                 "message":"Invalid access token"
               });
      }
      try {
         var total_correct_answer=0;
         var total_incorrect_answer=0;
          for (var i=0; i<answerArr.length; i++)
          {
            var answer = answerArr[i];
            var is_answered     = answer['is_answered'];
            if(is_answered=='yes'){
              if(answer['correct_answer']==answer['user_answer']){
                total_correct_answer=total_correct_answer+1;
                total_points=total_points+5;
              }
              else{
                total_incorrect_answer=total_incorrect_answer+1;
              }
            }
            

             const chkQueSave = await db.query("SELECT * FROM user_answer WHERE class_id=$1 AND semester_id=$2 AND subject_id=$3 AND chapter_id=$4 AND lesson_id=$5 AND user_id=$6 AND question_id=$7", [class_id,semester_id,subject_id,chapter_id,lesson_id,user_id,answer['question_id']]);
             if(chkQueSave.rows.length == 0)
              {
                db.query(
                "INSERT INTO user_answer (user_id,quiz_id,quiz_type,quiz_sub_type,question_id,correct_answer,user_answer,created_by,total_time,class_id,semester_id,subject_id,chapter_id,lesson_id,spend_time,quiz_type_id,quiz_sub_type_id,is_answered) VALUES ($1,$2,$3,$4,$5,$6,$7,$8, $9,$10,$11,$12,$13,$14,$15,$16,$17,$18)",
                [user_id, quiz_id,quiz_type,quiz_sub_type,answer['question_id'],answer['correct_answer'],answer['user_answer'],user_id,total_time,class_id,semester_id,subject_id,chapter_id,lesson_id,answer['spend_time'],quiz_type_id,quiz_sub_type_id,is_answered]);          
              }
              else
              {
                var chkIsAnswered=chkQueSave.rows[0].is_answered;
                var answeredId   =chkQueSave.rows[0].id;
                if(chkIsAnswered=='no'){
                  db.query("UPDATE user_answer SET is_answered=$1,total_time=$2,correct_answer=$3,user_answer=$4,spend_time=$5 WHERE id=$6",[is_answered,total_time,answer['correct_answer'],answer['user_answer'],answer['spend_time'],answeredId]); 
                }
              }
            } 


          const chkSave = await db.query("SELECT * FROM user_quiz_attempt WHERE class_id=$1 AND semester_id=$2 AND subject_id=$3 AND chapter_id=$4 AND lesson_id=$5 AND user_id=$6", [class_id,semester_id,subject_id,chapter_id,lesson_id,user_id]);
          if(chkSave.rows.length > 0)
            {
              db.query("UPDATE user_quiz_attempt SET status=$1,total_time=$2,modified_by=$3 WHERE id=$4",[attempt_status,total_time,user_id,chkSave.rows[0].id]); 
           }
           else{
              db.query(
              "INSERT INTO user_quiz_attempt (user_id,quiz_id,quiz_type,sub_quiz_id,created_by,total_time,class_id,semester_id,subject_id,chapter_id,lesson_id,status) VALUES ($1,$2,$3,$4,$5,$6,$7,$8, $9,$10,$11,$12)",
              [user_id, quiz_id,quiz_type,sub_quiz_id,user_id,total_time,class_id,semester_id,subject_id,chapter_id,lesson_id,attempt_status]);
           }

          //get result summery
          const userResult = await db.query("SELECT * FROM user_answer WHERE class_id=$1 AND semester_id=$2 AND subject_id=$3 AND chapter_id=$4 AND lesson_id=$5 AND user_id=$6 order by id desc limit 20", [class_id,semester_id,subject_id,chapter_id,lesson_id,user_id]);
          var resultArr=userResult.rows;

          var total_correct_answer  =0;
          var total_incorrect_answer=0;
          for (var k=0; k<resultArr.length; k++) 
          {
                var user_question = resultArr[k];
                var is_answered_val     = user_question['is_answered'];
                if(is_answered_val=='yes'){
                  if(user_question['correct_answer'].toLowerCase()==user_question['user_answer'].toLowerCase()){
                    total_correct_answer=total_correct_answer+1;
                    total_points=total_points+5;
                  }
                  else{
                    total_incorrect_answer=total_incorrect_answer+1;
                  }
                }
          }

          ///////summery/////////////////////////

           const summeryQ = await db.query("SELECT cqq.* ,us.user_answer FROM user_answer us INNER JOIN cms_quiz_question cqq ON us.question_id::integer=cqq.id WHERE us.quiz_type=$1 AND us.subject_id=$2 AND us.class_id=$3 AND us.semester_id=$4 AND us.chapter_id=$5 AND us.lesson_id=$6 AND us.user_id=$7 order by us.id desc limit 20", [
           'curriculum',subject_id,class_id,semester_id,chapter_id,lesson_id,user_id]);
           //var summeryArr=summeryQ.rows;

            let questionObj     = summeryQ.rows;
            var summeryArr      = [];
            for(let i=0;i<questionObj.length;i++)
            {
              let qObj     = questionObj[i];
              if((questionObj[i].question!='' && questionObj[i].question!=null) && (questionObj[i].question_image_url!='' && questionObj[i].question_image_url!=null))
              {
                qObj['question_type']='text_and_image';  
              }
              else if((questionObj[i].question!='' && questionObj[i].question!=null) && (questionObj[i].question_image_url=='' || questionObj[i].question_image_url==null))
              {
                qObj['question_type']='text';  
              }
              else if((questionObj[i].question=='' || questionObj[i].question==null) && (questionObj[i].question_image_url!='' && questionObj[i].question_image_url!=null))
              {
                qObj['question_type']='image';  
              }
              else{
                qObj['question_type']='text'; 
              }

               //text/image/text_and_image
              summeryArr.push(qObj);
            }

          ///////////////////////////////////////

        return res.json({
             "status": 200,
             "data": {"question":summeryArr,"total_correct_answer":total_correct_answer,"total_incorrect_answer":total_incorrect_answer,"total_points":total_points},
             "message":"data saved successfully"
           });

    } catch (err) {
      return next(err);
    }
  }
  else{
     return res.json({"status": 403, "data":{},"message": "Missing required parameters" });
  }
});

//save curriculam answer new
router.post("/save_curriculum_answer_new", async function(req, res, next) {
  
  if(req.body.access_token && req.body.user_id  && req.body.answer && req.body.game_id)
  {
    var answerArr       = req.body.answer;
    var user_id         = req.body.user_id;
    var game_id         = req.body.game_id;

    // var quiz_id         = req.body.quiz_id;
    // var quiz_type       = req.body.quiz_type;
    // var quiz_sub_type   = "";
    // var sub_quiz_id     = 0;
    // var class_id        = req.body.class_id;
    // var semester_id     = req.body.semester_id;
    // var subject_id      = req.body.subject_id;
    // var chapter_id      = req.body.chapter_id;
    // var lesson_id       = req.body.lesson_id;
    var total_time      = req.body.total_time;
    var attempt_status  = req.body.attempt_status;
    var total_points    = 0;
    var quiz_type_id    = 1; //for curricluam
    var quiz_sub_type_id= 0;

    //####check is valid access_token#####
      const isTrue= await isValidToken(req.body.access_token);
      if(!isTrue){
             return res.json({
                 "status": 201,
                 "data":{},
                 "message":"Invalid access token"
               });
      }
      try {
         var total_correct_answer=0;
         var total_incorrect_answer=0;
          for (var i=0; i<answerArr.length; i++)
          {
            var answer = answerArr[i];
            var is_answered     = answer['is_answered'];
            var question_id     = answer['question_id'];
            var spend_time      = answer['spend_time'];
            var user_answer     = answer['user_answer'];
            var ugr= await db.query("UPDATE se_game_result SET is_answered=$1,user_answer=$2,spend_time=$3 WHERE question_id=$4 AND se_game_id=$5 AND user_id=$6",[is_answered,user_answer,spend_time,question_id,game_id,user_id]);
          } 

          var game_status_q= await db.query("UPDATE se_user_game SET attempt_status=$1 WHERE id=$2",[attempt_status,game_id]);

          ///////summery/////////////////////////
          const summeryQ = await db.query("SELECT cqq.*,sgr.is_answered,sgr.user_answer,sgr.correct_answer FROM se_game_result sgr INNER JOIN cms_quiz_question cqq ON sgr.question_id=cqq.id WHERE sgr.se_game_id=$1", [game_id]);

            let questionObj     = summeryQ.rows;
            var summeryArr      = [];
            for(let i=0;i<questionObj.length;i++)
            {
              let qObj     = questionObj[i];
              ///////////calculate summery//
              var is_answered_val     = qObj.is_answered;
              if(is_answered_val=='yes'){
                if(qObj.correct_answer.toLowerCase() == qObj.user_answer.toLowerCase()){
                  total_correct_answer=total_correct_answer+1;
                  total_points=total_points+5;
                }
                else{
                  total_incorrect_answer=total_incorrect_answer+1;
                }
              }
              //////////////////////////////
              if((questionObj[i].question!='' && questionObj[i].question!=null) && (questionObj[i].question_image_url!='' && questionObj[i].question_image_url!=null))
              {
                qObj['question_type']='text_and_image';  
              }
              else if((questionObj[i].question!='' && questionObj[i].question!=null) && (questionObj[i].question_image_url=='' || questionObj[i].question_image_url==null))
              {
                qObj['question_type']='text';  
              }
              else if((questionObj[i].question=='' || questionObj[i].question==null) && (questionObj[i].question_image_url!='' && questionObj[i].question_image_url!=null))
              {
                qObj['question_type']='image';  
              }
              else{
                qObj['question_type']='text'; 
              }

               //text/image/text_and_image
              summeryArr.push(qObj);
            }

          ///////////////////////////////////////
          if(attempt_status==2){ //complete game
             var ug_game= await db.query("UPDATE se_user_game SET status=$1,attempt_status=$2 WHERE id=$3",['1','2',game_id]);
          }
        return res.json({
             "status": 200,
             "data": {"question":summeryArr,"total_correct_answer":total_correct_answer,"total_incorrect_answer":total_incorrect_answer,"total_points":total_points},
             "message":"data saved successfully"
           });

    } catch (err) {
      return next(err);
    }
  }
  else{
     return res.json({"status": 403, "data":{},"message": "Missing required parameters" });
  }
});



module.exports = router;