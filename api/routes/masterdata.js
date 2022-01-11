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
            const fileName = "master_icon/"+Date.now()+"-"+file.originalname.toLowerCase().split(' ').join('-');
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


//school
router.get("/get_school", async function(req, res, next) {
  
    try {
         const results = await db.query("SELECT id,name,status FROM master_school order by name asc");
          return res.json({
             "status": true,
             "data": results.rows,
             "msg":"Success"
           });
        

    } catch (err) {
      return next(err);
    }
});

router.patch("/update_school_status", async function(req, res, next) {
  if(req.body.id)
  {
    try {
         

          const result = await db.query("UPDATE master_school SET status=$1 WHERE id=$2",
          [req.body.status,req.body.id]);
          /////////////////////////////////////////////
           return res.json({
             "status": 200,
             "msg":"Status updated successfully"
           }); 

    } catch (err) {
      return next(err);
    }
  }
  else{
     return res.json({"status": 403, "msg": "Missing required parameters" });
  }
});

router.get("/school_by_id/:id", async function(req, res, next) {
  try {
    const result = await db.query("SELECT * FROM master_school WHERE id=$1", [
      req.params.id
    ]);
    return res.json({'data':result.rows});
  } catch (err) {
    return next(err);
  }
});


router.post("/add_school", async function(req, res, next) {
 
  if(req.body.name)
  {
    var name= req.body.name;

    try {

        const check = await db.query("SELECT * FROM master_school WHERE name=$1", [
          name
        ]);

        if(check.rows.length>0)
        {
          return res.json({
           "status": 409,
             "msg":"Data already exists"
           });
        } 

        const result = await db.query(
          "INSERT INTO master_school (name,status) VALUES ($1,$2) RETURNING *",
          [req.body.name,'1']
        );

         return res.json({
           "status": 200,
           "msg":"Data added successfully"
         });
        
        

    } catch (err) {
      return next(err);
    }
  }
  else{
     return res.json({"status": 403, "msg": "Missing required parameters" });
  }
});

router.patch("/update_school/:id", async function(req, res, next) {
  if(req.params.id)
  {
    var name= req.body.name;

    
    try {
         
         const check = await db.query("SELECT * FROM master_school WHERE name=$1 and id!=$2", [
          name,req.params.id
        ]);

        if(check.rows.length>0)
        {
          return res.json({
           "status": 409,
             "msg":"Data already exists"
           });
        } 

        const result = await db.query(
          "UPDATE master_school SET name=$1 WHERE id=$2",
          [req.body.name,req.params.id]
        );

         return res.json({
           "status": 200,
           "msg":"Data updated successfully"
         });

    } catch (err) {
      return next(err);
    }
  }
  else{
     return res.json({"status": 403, "msg": "Missing required parameters" });
  }
});


//university

router.get("/get_university", async function(req, res, next) {
  
    try {
         const results = await db.query("SELECT id,name,status FROM master_university order by name asc");
          return res.json({
             "status": true,
             "data": results.rows,
             "msg":"Success"
           });
        

    } catch (err) {
      return next(err);
    }
});

router.patch("/update_university_status", async function(req, res, next) {
  if(req.body.id)
  {
    try {
         

          const result = await db.query("UPDATE master_university SET status=$1 WHERE id=$2",
          [req.body.status,req.body.id]);
          /////////////////////////////////////////////
           return res.json({
             "status": 200,
             "msg":"Status updated successfully"
           }); 

    } catch (err) {
      return next(err);
    }
  }
  else{
     return res.json({"status": 403, "msg": "Missing required parameters" });
  }
});

router.get("/university_by_id/:id", async function(req, res, next) {
  try {
    const result = await db.query("SELECT * FROM master_university WHERE id=$1", [
      req.params.id
    ]);
    return res.json({'data':result.rows});
  } catch (err) {
    return next(err);
  }
});

router.post("/add_university", async function(req, res, next) {
 
  if(req.body.name)
  {
    var name= req.body.name;

    try {

        const check = await db.query("SELECT * FROM master_university WHERE name=$1", [
          name
        ]);

        if(check.rows.length>0)
        {
          return res.json({
           "status": 409,
             "msg":"Data already exists"
           });
        } 

        const result = await db.query(
          "INSERT INTO master_university (name,status) VALUES ($1,$2) RETURNING *",
          [req.body.name,'1']
        );

         return res.json({
           "status": 200,
           "msg":"Data added successfully"
         });
        
        

    } catch (err) {
      return next(err);
    }
  }
  else{
     return res.json({"status": 403, "msg": "Missing required parameters" });
  }
});

router.patch("/update_university/:id", async function(req, res, next) {
  if(req.params.id)
  {
    var name= req.body.name;

    
    try {
         
         const check = await db.query("SELECT * FROM master_university WHERE name=$1 and id!=$2", [
          name,req.params.id
        ]);

        if(check.rows.length>0)
        {
          return res.json({
           "status": 409,
             "msg":"Data already exists"
           });
        } 

        const result = await db.query(
          "UPDATE master_university SET name=$1 WHERE id=$2",
          [req.body.name,req.params.id]
        );

         return res.json({
           "status": 200,
           "msg":"Data updated successfully"
         });

    } catch (err) {
      return next(err);
    }
  }
  else{
     return res.json({"status": 403, "msg": "Missing required parameters" });
  }
});

///quiz

router.get("/get_quiz", async function(req, res, next) {
  
    try {
         const results = await db.query("SELECT id,name,status FROM master_quiz order by name asc");
          return res.json({
             "status": true,
             "data": results.rows,
             "msg":"Success"
           });
        

    } catch (err) {
      return next(err);
    }
});

router.patch("/update_quiz_status", async function(req, res, next) {
  if(req.body.id)
  {
    try {
         

          const result = await db.query("UPDATE master_quiz SET status=$1 WHERE id=$2",
          [req.body.status,req.body.id]);
          /////////////////////////////////////////////
           return res.json({
             "status": 200,
             "msg":"Status updated successfully"
           }); 

    } catch (err) {
      return next(err);
    }
  }
  else{
     return res.json({"status": 403, "msg": "Missing required parameters" });
  }
});

router.get("/quiz_by_id/:id", async function(req, res, next) {
  try {
    const result = await db.query("SELECT * FROM master_quiz WHERE id=$1", [
      req.params.id
    ]);
    return res.json({'data':result.rows});
  } catch (err) {
    return next(err);
  }
});

router.post("/add_quiz", async function(req, res, next) {
 
  if(req.body.name)
  {
    var name= req.body.name;

    try {

        const check = await db.query("SELECT * FROM master_quiz WHERE name=$1", [
          name
        ]);

        if(check.rows.length>0)
        {
          return res.json({
           "status": 409,
             "msg":"Data already exists"
           });
        } 

        const result = await db.query(
          "INSERT INTO master_quiz (name,status) VALUES ($1,$2) RETURNING *",
          [req.body.name,'1']
        );

         return res.json({
           "status": 200,
           "msg":"Data added successfully"
         });
        
        

    } catch (err) {
      return next(err);
    }
  }
  else{
     return res.json({"status": 403, "msg": "Missing required parameters" });
  }
});

router.patch("/update_quiz/:id", async function(req, res, next) {
  if(req.params.id)
  {
    var name= req.body.name;

    
    try {
         
         const check = await db.query("SELECT * FROM master_quiz WHERE name=$1 and id!=$2", [
          name,req.params.id
        ]);

        if(check.rows.length>0)
        {
          return res.json({
           "status": 409,
             "msg":"Data already exists"
           });
        } 

        const result = await db.query(
          "UPDATE master_quiz SET name=$1 WHERE id=$2",
          [req.body.name,req.params.id]
        );

         return res.json({
           "status": 200,
           "msg":"Data updated successfully"
         });

    } catch (err) {
      return next(err);
    }
  }
  else{
     return res.json({"status": 403, "msg": "Missing required parameters" });
  }
});


///sub quiz

router.get("/get_sub_quiz", async function(req, res, next) {
  
    try {
         const results = await db.query("SELECT id,name,status FROM master_sub_quiz order by name asc");
          return res.json({
             "status": true,
             "data": results.rows,
             "msg":"Success"
           });
        

    } catch (err) {
      return next(err);
    }
});

router.patch("/update_sub_quiz_status", async function(req, res, next) {
  if(req.body.id)
  {
    try {
         

          const result = await db.query("UPDATE master_sub_quiz SET status=$1 WHERE id=$2",
          [req.body.status,req.body.id]);
          /////////////////////////////////////////////
           return res.json({
             "status": 200,
             "msg":"Status updated successfully"
           }); 

    } catch (err) {
      return next(err);
    }
  }
  else{
     return res.json({"status": 403, "msg": "Missing required parameters" });
  }
});

router.get("/sub_quiz_by_id/:id", async function(req, res, next) {
  try {
    const result = await db.query("SELECT * FROM master_sub_quiz WHERE id=$1", [
      req.params.id
    ]);
    return res.json({'data':result.rows});
  } catch (err) {
    return next(err);
  }
});

router.post("/add_sub_quiz", async function(req, res, next) {
 
  if(req.body.name)
  {
    var name= req.body.name;

    try {

        const check = await db.query("SELECT * FROM master_sub_quiz WHERE name=$1", [
          name
        ]);

        if(check.rows.length>0)
        {
          return res.json({
           "status": 409,
             "msg":"Data already exists"
           });
        } 

        const result = await db.query(
          "INSERT INTO master_sub_quiz (name,status) VALUES ($1,$2) RETURNING *",
          [req.body.name,'1']
        );

         return res.json({
           "status": 200,
           "msg":"Data added successfully"
         });
        
        

    } catch (err) {
      return next(err);
    }
  }
  else{
     return res.json({"status": 403, "msg": "Missing required parameters" });
  }
});

router.patch("/update_sub_quiz/:id", async function(req, res, next) {
  if(req.params.id)
  {
    var name= req.body.name;

    
    try {
         
         const check = await db.query("SELECT * FROM master_sub_quiz WHERE name=$1 and id!=$2", [
          name,req.params.id
        ]);

        if(check.rows.length>0)
        {
          return res.json({
           "status": 409,
             "msg":"Data already exists"
           });
        } 

        const result = await db.query(
          "UPDATE master_sub_quiz SET name=$1 WHERE id=$2",
          [req.body.name,req.params.id]
        );

         return res.json({
           "status": 200,
           "msg":"Data updated successfully"
         });

    } catch (err) {
      return next(err);
    }
  }
  else{
     return res.json({"status": 403, "msg": "Missing required parameters" });
  }
});

///subject

router.get("/get_subject", async function(req, res, next) {
  
    try {
         const results = await db.query("SELECT id,name,status FROM master_subject order by name asc");
          return res.json({
             "status": true,
             "data": results.rows,
             "msg":"Success"
           });
        

    } catch (err) {
      return next(err);
    }
});

router.patch("/update_subject_status", async function(req, res, next) {
  if(req.body.id)
  {
    try {
         

          const result = await db.query("UPDATE master_subject SET status=$1 WHERE id=$2",
          [req.body.status,req.body.id]);
          /////////////////////////////////////////////
           return res.json({
             "status": 200,
             "msg":"Status updated successfully"
           }); 

    } catch (err) {
      return next(err);
    }
  }
  else{
     return res.json({"status": 403, "msg": "Missing required parameters" });
  }
});

router.get("/subject_by_id/:id", async function(req, res, next) {
  try {
    const result = await db.query("SELECT * FROM master_subject WHERE id=$1", [
      req.params.id
    ]);
    return res.json({'data':result.rows});
  } catch (err) {
    return next(err);
  }
});

router.post("/add_subject", async function(req, res, next) {
  
  if(req.body.name)
  { 
    var icon='';
    var name= req.body.name;
   
    try {

        const check = await db.query("SELECT * FROM master_subject WHERE name=$1", [
          name
        ]);

        if(check.rows.length>0)
        {
          return res.json({
           "status": 409,
             "msg":"Data already exists"
           });
        } 
         var default_num = Math.floor(Math.random() * 4) + 1;
         var app_logo = 'default/subject-'+default_num+'.png';
         if(req.body.icon!=null){
          ///s3 upload
          var buf = Buffer.from(req.body.icon.replace(/^data:image\/\w+;base64,/, ""),'base64')
          var app_logo="master_icon/"+Date.now()+"-subject.png";
          s3.putObject({Bucket: 'allam-stg', Key: app_logo, Body: buf}, function(err, data) {
            if (err) {
              //return res.send({ success: false, err: err });
            } else {
              //return res.send({ success: true });
            }
          });
        }
        
        const result = await db.query(
          "INSERT INTO master_subject (name,icon,status) VALUES ($1,$2,$3) RETURNING *",
          [req.body.name,app_logo,'1']
        );

         return res.json({
           "status": 200,
           "msg":"Data added successfully"
         });
        
        

    } catch (err) {
      return next(err);
    }
  }
  else{
     return res.json({"status": 403, "msg": "Missing required parameters" });
  }
});

router.patch("/update_subject/:id", async function(req, res, next) {
  if(req.params.id)
  {
    var name= req.body.name;

    
    try {
         
        const check = await db.query("SELECT * FROM master_subject WHERE name=$1 and id!=$2", [
          name,req.params.id
        ]);

        const res_cat = await db.query("SELECT * FROM master_subject WHERE id=$1", [req.params.id]);

        if(check.rows.length>0)
        {
          return res.json({
           "status": 409,
             "msg":"Data already exists"
           });
        } 
        if(req.body.isFile) {
              if(res_cat.rows[0].icon !='default/subject-1.png' && res_cat.rows[0].icon !='default/subject-2.png' && res_cat.rows[0].icon !='default/subject-3.png' && res_cat.rows[0].icon !='default/subject-4.png')
              {
                //delete
                s3.deleteObject({
                  Bucket: 'allam-stg',
                  Key: res_cat.rows[0].icon
                },function (err,data){
                  //res.status(200).send("File has been deleted successfully");

                })
              }
                ///s3 upload
                var buf = Buffer.from(req.body.icon.replace(/^data:image\/\w+;base64,/, ""),'base64')
                var app_logo="master_icon/"+Date.now()+"-subject.png";
                s3.putObject({Bucket: 'allam-stg', Key: app_logo, Body: buf}, function(err, data) {
                  if (err) {
                    //return res.send({ success: false, err: err });
                  } else {
                    //return res.send({ success: true });
                  }
                });

                // update data
                const result = await db.query(
                  "UPDATE master_subject SET name=$1,icon=$2 WHERE id=$3",
                  [req.body.name,app_logo,req.params.id]
                );
            }
            else
            {
                const result = await db.query(
                  "UPDATE master_subject SET name=$1 WHERE id=$2",
                  [req.body.name,req.params.id]
                );
            }
         return res.json({
           "status": 200,
           "msg":"Data updated successfully"
         });

    } catch (err) {
      return next(err);
    }
  }
  else{
     return res.json({"status": 403, "msg": "Missing required parameters" });
  }
});

///district

router.get("/get_district", async function(req, res, next) {
  
    try {
         const results = await db.query("SELECT id,name,status FROM master_district order by name asc");
          return res.json({
             "status": true,
             "data": results.rows,
             "msg":"Success"
           });
        

    } catch (err) {
      return next(err);
    }
});

router.patch("/update_district_status", async function(req, res, next) {
  if(req.body.id)
  {
    try {
         

          const result = await db.query("UPDATE master_district SET status=$1 WHERE id=$2",
          [req.body.status,req.body.id]);
          /////////////////////////////////////////////
           return res.json({
             "status": 200,
             "msg":"Status updated successfully"
           }); 

    } catch (err) {
      return next(err);
    }
  }
  else{
     return res.json({"status": 403, "msg": "Missing required parameters" });
  }
});

router.get("/district_by_id/:id", async function(req, res, next) {
  try {
    const result = await db.query("SELECT * FROM master_district WHERE id=$1", [
      req.params.id
    ]);
    return res.json({'data':result.rows});
  } catch (err) {
    return next(err);
  }
});

router.post("/add_district", async function(req, res, next) {
 
  if(req.body.name)
  {
    var name= req.body.name;

    try {

        const check = await db.query("SELECT * FROM master_district WHERE name=$1", [
          name
        ]);

        if(check.rows.length>0)
        {
          return res.json({
           "status": 409,
             "msg":"Data already exists"
           });
        } 

        const result = await db.query(
          "INSERT INTO master_district (name,status) VALUES ($1,$2) RETURNING *",
          [req.body.name,'1']
        );

         return res.json({
           "status": 200,
           "msg":"Data added successfully"
         });
        
        

    } catch (err) {
      return next(err);
    }
  }
  else{
     return res.json({"status": 403, "msg": "Missing required parameters" });
  }
});

router.patch("/update_district/:id", async function(req, res, next) {
  if(req.params.id)
  {
    var name= req.body.name;

    
    try {
         
         const check = await db.query("SELECT * FROM master_district WHERE name=$1 and id!=$2", [
          name,req.params.id
        ]);

        if(check.rows.length>0)
        {
          return res.json({
           "status": 409,
             "msg":"Data already exists"
           });
        } 

        const result = await db.query(
          "UPDATE master_district SET name=$1 WHERE id=$2",
          [req.body.name,req.params.id]
        );

         return res.json({
           "status": 200,
           "msg":"Data updated successfully"
         });

    } catch (err) {
      return next(err);
    }
  }
  else{
     return res.json({"status": 403, "msg": "Missing required parameters" });
  }
});



///country

router.get("/get_country", async function(req, res, next) {
  
    try {
         const results = await db.query("SELECT id,name,status FROM master_country order by name asc");
          return res.json({
             "status": true,
             "data": results.rows,
             "msg":"Success"
           });
        

    } catch (err) {
      return next(err);
    }
});

router.patch("/update_country_status", async function(req, res, next) {
  if(req.body.id)
  {
    try {
         

          const result = await db.query("UPDATE master_country SET status=$1 WHERE id=$2",
          [req.body.status,req.body.id]);
          /////////////////////////////////////////////
           return res.json({
             "status": 200,
             "msg":"Status updated successfully"
           }); 

    } catch (err) {
      return next(err);
    }
  }
  else{
     return res.json({"status": 403, "msg": "Missing required parameters" });
  }
});

router.get("/country_by_id/:id", async function(req, res, next) {
  try {
    const result = await db.query("SELECT * FROM master_country WHERE id=$1", [
      req.params.id
    ]);
    return res.json({'data':result.rows});
  } catch (err) {
    return next(err);
  }
});

router.post("/add_country", async function(req, res, next) {
 
  if(req.body.name)
  {
    var name= req.body.name;

    try {

        const check = await db.query("SELECT * FROM master_country WHERE name=$1", [
          name
        ]);

        if(check.rows.length>0)
        {
          return res.json({
           "status": 409,
             "msg":"Data already exists"
           });
        } 

        const result = await db.query(
          "INSERT INTO master_country (name,status) VALUES ($1,$2) RETURNING *",
          [req.body.name,'1']
        );

         return res.json({
           "status": 200,
           "msg":"Data added successfully"
         });
        
        

    } catch (err) {
      return next(err);
    }
  }
  else{
     return res.json({"status": 403, "msg": "Missing required parameters" });
  }
});

router.patch("/update_country/:id", async function(req, res, next) {
  if(req.params.id)
  {
    var name= req.body.name;

    
    try {
         
         const check = await db.query("SELECT * FROM master_country WHERE name=$1 and id!=$2", [
          name,req.params.id
        ]);

        if(check.rows.length>0)
        {
          return res.json({
           "status": 409,
             "msg":"Data already exists"
           });
        } 

        const result = await db.query(
          "UPDATE master_country SET name=$1 WHERE id=$2",
          [req.body.name,req.params.id]
        );

         return res.json({
           "status": 200,
           "msg":"Data updated successfully"
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