var express = require("express");
const router = express.Router();
var bodyParser = require("body-parser");
var session = require("express-session");
var dbadapter = require("../dbadapter");

var multer  = require('multer');
var aws = require('aws-sdk');
var multerS3 = require('multer-s3');
var bodyParser = require('body-parser')

//var inmemorydbadapter = require("./inmemorydbadapter");

/*var app = express();
app.use(
  session({
    secret: "mysecret",
    resave: true,
    saveUninitialized: true,
    //cookie: { secure: true }
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));*/

aws.config.update({
    secretAccessKey: 'ux+vTbSHoOAGOh6kd9EajeF6eq6hH8gAjLSFYspq',
    accessKeyId: 'AKIAUSOI5LFUXODF3IVR',
    region: 'ap-south-1'
});

var app = express(),
    s3 = new aws.S3();

app.use(bodyParser.json());


var upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: 'allam-stg',
        key: function (req, file, cb) {
            console.log(file);
            const fileName = 'referendum/'+Date.now()+"-"+file.originalname.toLowerCase().split(' ').join('-');
            cb(null, fileName); //use Date.now() for unique file keys
        },
        metadata: (req, file, callBack) => {
            callBack(null, { fieldName: file.fieldname })
        } 
    })
});

router.post('/save_referendum_image', upload.single('logo'), async function(req, res, next){

    console.log("image is ",req.file.key);
    return res.json({'status': 200, 'referendum_icon': req.file.key});
})

function getDBAdapter(req) {
  var db = new dbadapter();
  //var db = new inmemorydbadapter(req.session);
  return db;
}

function sendJsonResult(res, obj) {
  res.setHeader("Content-Type", "application/json");
  res.send(JSON.stringify(obj));
}

router.get("/getSurveyName", function(req, res) {
  var db = getDBAdapter(req);
  var surveyId = req.query["surveyId"];
  db.getSurveyName(surveyId, function(result) {
    sendJsonResult(res, result);
  });
});

router.get("/getActive", function(req, res) {
  var db = getDBAdapter(req);
  var login_id = req.query["login_id"];
  db.getAdvertiserSurveys(login_id, function(result) {
    sendJsonResult(res, result);
  });
});
router.get("/getAdminSurveys", function(req, res) {
  var db = getDBAdapter(req);
  db.getAdminSurveys( function(result) {
    sendJsonResult(res, result);
  });
});

router.get("/getFullSurvey", function(req, res) {
  var db = getDBAdapter(req);
  var surveyId = req.query["surveyId"];
  db.getFullSurvey(surveyId, function(result) {
    sendJsonResult(res, result);
  });
});


router.get("/getSurvey", function(req, res) {
  var db = getDBAdapter(req);
  var surveyId = req.query["surveyId"];
  db.getSurvey(surveyId, function(result) {
    sendJsonResult(res, result);
  });
});

router.get("/changeName", function(req, res) {
  var db = getDBAdapter(req);
  var id = req.query["id"];
  var name = req.query["name"];
  db.changeName(id, name, function(result) {
    sendJsonResult(res, result);
  });
});

router.get("/create", function(req, res) {
  var db = getDBAdapter(req);
  var name = req.query["name"];
  var login_id = req.query["login_id"];
  var id = req.query["id"];
  var config = req.query["config"];
  var is_public = req.query["is_public"];
  var request = {Name : name, login_id: login_id, Config : config, Id: id, IsPublic: is_public}
  db.addSurvey(request, function(result) {
    sendJsonResult(res, { Name: result.name, Id: result.id });
  });
});

router.post("/changeJson", function(req, res) {
  var db = getDBAdapter(req);
  var id = req.body.Id;
  var json = req.body.Json;
  db.storeSurvey(id, json, function(result) {
    sendJsonResult(res, result.json);
  });
});

router.get("/changeSurveyStatus", function(req, res) {
  var db = getDBAdapter(req);
  var surveyId = req.query["id"];
  db.changeSurveyStatus(surveyId, function(result) {
    sendJsonResult(res, {});
  });
});

router.post("/post", function(req, res) {
  var db = getDBAdapter(req);
  var postId = req.body.postId;
  var surveyResult = req.body.surveyResult;
  var created_by = req.body.userId;
  db.postResults(postId, surveyResult, created_by, function(result) {
    sendJsonResult(res, result.json);
  });
});

router.get("/delete", function(req, res) {
  var db = getDBAdapter(req);
  var surveyId = req.query["id"];
  db.deleteSurvey(surveyId, function(result) {
    sendJsonResult(res, {});
  });
});

router.get("/results", function(req, res) {
  var db = getDBAdapter(req);
  var postId = req.query["postId"];
  db.getResults(postId, function(result) {
    sendJsonResult(res, result);
  });
});

module.exports = router;
