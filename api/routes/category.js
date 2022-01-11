const express = require("express");
const router = express.Router();
const db = require("../db");

var multer  = require('multer');
var aws = require('aws-sdk');
var multerS3 = require('multer-s3');
var bodyParser = require('body-parser')

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
            const fileName = 'category/'+Date.now()+"-"+file.originalname.toLowerCase().split(' ').join('-');
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


router.get("/list", async function(req, res, next) {
  try {
    const results = await db.query("SELECT * FROM categories");
    return res.json(results.rows);
  } catch (err) {
    return next(err);
  }
});


router.get("/get/:id", async function(req, res, next) {
  try {
    const results = await db.query("SELECT * FROM categories WHERE id=$1", [
      req.params.id
    ]);
    console.log(results.rows);

    return res.json(results.rows);
  } catch (err) {
    return next(err);
  }
});

router.post("/add_old", upload.single('icon'), async function(req, res, next) {
  if(req.body.title)
  {
    try {

      if(req.file && req.file.key){
        var app_logo =  req.file.key;
      }else{
        var app_logo =  '';
      }
      //const fileName = Date.now()+"-"+req.file.originalname.toLowerCase().split(' ').join('-');
      //console.log("fileName "+req.file.key);
      //const url = req.protocol + '://' + req.get('host');
      //icon: 'http://52.66.58.148/allam_cms/api/public/' + req.file.filename;
      const result = await db.query(
        "INSERT INTO categories (title,description,icon,status) VALUES ($1,$2,$3,$4) RETURNING *",
        [req.body.title, req.body.description,app_logo,req.body.status]
      );
      //console.log(result);
      //res.send('Successfully uploaded ' + req.file + ' files!')
      return res.json({ message: "Record inserted" });
    } catch (err) {
      return next(err);
    }
  }
  else{
     return res.json({ message: "Missing required parameters" });
  }
});

router.post("/add", async function(req, res, next) {
  if(req.body.title)
  {
    try {

        //var app_logo='default/category.png';
        var default_num = Math.floor(Math.random() * 4) + 1;
        var app_logo = 'default/subject-'+default_num+'.png';
        if(req.body.icon!=null)
        {
          ///s3 upload
          var buf = Buffer.from(req.body.icon.replace(/^data:image\/\w+;base64,/, ""),'base64')
          app_logo="category/"+Date.now()+"-cat.png";
          s3.putObject({Bucket: 'allam-stg', Key: app_logo, Body: buf}, function(err, data) {
            if (err) {
              //return res.send({ success: false, err: err });
            } else {
              //return res.send({ success: true });
            }
          });
        }

      const result = await db.query(
        "INSERT INTO categories (title,description,icon,status) VALUES ($1,$2,$3,$4) RETURNING *",
        [req.body.title, req.body.description,app_logo,req.body.status]
      );
      return res.json({ message: "Record inserted" });
    } catch (err) {
      return next(err);
    }
  }
  else{
     return res.json({ message: "Missing required parameters" });
  }
});

router.patch("/update_old/:id", upload.single('icon'), async function(req, res, next) 
{

  if(req.body.title && req.body.description && req.body.status)
  {
    try {

      const res_cat = await db.query("SELECT * FROM categories WHERE id=$1", [
      req.params.id
      ]);
      console.log("Show "+res_cat.rows[0].icon);
      if (req.file) {
        s3.deleteObject({
          Bucket: 'allam-stg',
          Key: res_cat.rows[0].icon
        },function (err,data){
          //res.status(200).send("File has been deleted successfully");

        })

      // update data

      //console.log("fileName "+JSON.stringify(req.file, null, 2) );

      const result = db.query(
        "UPDATE categories SET title=$1, description=$2, icon=$3, status=$4 WHERE id=$5 RETURNING *",
        [req.body.title, req.body.description,req.file.key,req.body.status, req.params.id]
      );
    }
    else{
       const result = db.query(
          "UPDATE categories SET title=$1, description=$2, status=$3 WHERE id=$4 RETURNING *",
          [req.body.title, req.body.description, req.body.status, req.params.id]
        );
    }
      //return res.json(result.rows[0]);
      return res.json({ message: "Record updated" });
    } catch (err) {
      return next(err);
    }
  }
  else{
    return res.json({ message: "Missing required parameters" });
  }


});

router.patch("/update/:id", async function(req, res, next) 
{
  console.log("--->>update request");
  console.log(req.body.title);
  console.log(req.body['title']);
  console.log("--->>update request-->>");

  if(req.body.title)
  {
    try {

      const res_cat = await db.query("SELECT * FROM categories WHERE id=$1", [
      req.params.id
      ]);
      
      if (req.body.isFile) {
        //delete
        if(res_cat.rows[0].icon !='default/subject-1.png' && res_cat.rows[0].icon !='default/subject-2.png' && res_cat.rows[0].icon !='default/subject-3.png' && res_cat.rows[0].icon !='default/subject-4.png')
        {
          s3.deleteObject({
            Bucket: 'allam-stg',
            Key: res_cat.rows[0].icon
          },function (err,data){
            //res.status(200).send("File has been deleted successfully");

          })
        }
        ///s3 upload
        var buf = Buffer.from(req.body.icon.replace(/^data:image\/\w+;base64,/, ""),'base64')
        var app_logo="category/"+Date.now()+"-cat.png";
        s3.putObject({Bucket: 'allam-stg', Key: app_logo, Body: buf}, function(err, data) {
          if (err) {
            //return res.send({ success: false, err: err });
          } else {
            //return res.send({ success: true });
          }
        });

      // update data
      const result = db.query(
        "UPDATE categories SET title=$1, description=$2, icon=$3, status=$4 WHERE id=$5 RETURNING *",
        [req.body.title, req.body.description,app_logo,req.body.status, req.params.id]
      );
    }
    else{
       const result = db.query(
          "UPDATE categories SET title=$1, description=$2, status=$3 WHERE id=$4 RETURNING *",
          [req.body.title, req.body.description, req.body.status, req.params.id]
        );
    }
      //return res.json(result.rows[0]);
      return res.json({ message: "Record updated" });
    } catch (err) {
      return next(err);
    }
  }
  else{
    return res.json({ message: "Missing required parameters" });
  }


});

//////update status
router.patch("/update_status", async function(req, res, next) {

console.log(req.body.id);
  if(req.body.id)
  {
    var category = req.body;
    try {

        var q_category = await db.query("UPDATE categories SET status=$1 WHERE id=$2",[category.status, category.id]);

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

router.delete("/del/:id", async function(req, res, next) {
  try {
    const result = await db.query("DELETE FROM categories WHERE id=$1", [
      req.params.id
    ]);
    return res.json({ message: "Record deleted" });
  } catch (err) {
    return next(err);
  }
});

router.get("/check_category", async function(req, res, next) {
  if(req.query.title==''){
    var title = req.query.title;
  }
  else{
    var title = req.query.title;
    title=title.toLowerCase();

  }
  try {
    const results = await db.query("SELECT * FROM categories WHERE lower(title)=$1", [title]);
    if(results.rows.length>0){
      return res.json({'status':'1'});
    }
    else{
      return res.json({'status':'0'});
       
    }

   
  } catch (err) {
    return next(err);
  }
});

module.exports = router;