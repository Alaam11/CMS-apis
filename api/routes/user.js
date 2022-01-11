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


router.post("/login", async function(req, res, next) {
  
  if(req.body.email && req.body.password)
  {
    var password =common.encode64(req.body.password);
    try {
         const results = await db.query("SELECT * FROM users WHERE email=$1 AND password=$2 AND status=$3", [
          req.body.email,password,'1'
        ]);

        if(results.rows.length>0)
        {
         
          const permission = await db.query("SELECT permissions.name,user_permission.permission_id FROM user_permission JOIN permissions ON user_permission.permission_id=permissions.id WHERE user_permission.user_id=$1", [
          results.rows[0].id,
        ]);
        
          return res.json({
             "status": true,
             "data": {'user':results.rows,'permission':permission.rows},
             "msg":"login Success"
           });
        } 
        else {
          return res.json({
            "status": false,
            "data": results.rows,
            "msg":"login failed"
          });
        }
        

    } catch (err) {
      return next(err);
    }
  }
  else{
     return res.json({ message: "Missing required parameters" });
  }
});


router.get("/permissions", async function(req, res, next) {
  
    try {
         const results = await db.query("SELECT * FROM permissions WHERE status=$1", [
          '1',
        ]);

          return res.json({
             "status": true,
             "data": results.rows,
             "msg":"Success"
           });
        

    } catch (err) {
      return next(err);
    }
});
router.get("/roles", async function(req, res, next) {
  
    try {
         const results = await db.query("SELECT * FROM roles order by id");

          return res.json({
             "status": true,
             "data": results.rows,
             "msg":"Success"
           });
        

    } catch (err) {
      return next(err);
    }
});

router.post("/create_role", async function(req, res, next) {

  if(req.body.name)
  {
    try {
         const results = await db.query("SELECT * FROM roles WHERE name=$1", [
          req.body.name
        ]);

        if(results.rows.length>0)
        {
         
           return res.json({
             "status": 303,
             "msg":"role already exist"
           });
         }
        else 
        {
          const result = await db.query(
            "INSERT INTO roles (name,description,status,created_by) VALUES ($1,$2,$3,$4) RETURNING *",
            [req.body.name, req.body.description,'1','1']
          );

          //////////update permission table////////////
          const newlyCreatedRoleId = result.rows[0].id;
          req.body.permissionArray.forEach(permission_id => { 
            db.query(
            "INSERT INTO role_permission (role_id,permission_id,created_by) VALUES ($1,$2,$3)",
            [newlyCreatedRoleId, permission_id,'1']);
          });
          /////////////////////////////////////////////
           return res.json({
             "status": 200,
             "msg":"Role created successfully"
           });
        }
        

    } catch (err) {
      return next(err);
    }
  }
  else{
     return res.json({"status": 403, "msg": "Missing required parameters" });
  }
});

router.patch("/update_role/:id", async function(req, res, next) {
  if(req.body.name)
  {
    try {
         const results = await db.query("SELECT * FROM roles WHERE name=$1 and id!=$2", [
          req.body.name,req.params.id
        ]);

        if(results.rows.length>0)
        {
         
           return res.json({
             "status": 303,
             "msg":"role already exist"
           });
         }
        else 
        {

          const result = await db.query("UPDATE roles SET name=$1 WHERE id=$2",
          [req.body.name,req.params.id]);
          //////////update permission table////////////
          const role_id = req.params.id;
          const deletequery = await db.query("DELETE from role_permission WHERE role_id=$1",
          [role_id]);
          
          req.body.permissionArray.forEach(permission_id => { 
            db.query(
            "INSERT INTO role_permission (role_id,permission_id,created_by) VALUES ($1,$2,$3)",
            [role_id, permission_id,'1']);
          });
          /////////////////////////////////////////////
           return res.json({
             "status": 200,
             "msg":"Role updated successfully"
           });
        }
        

    } catch (err) {
      return next(err);
    }
  }
  else{
     return res.json({"status": 403, "msg": "Missing required parameters" });
  }
});

router.patch("/update_role_status/:id", async function(req, res, next) {
  if(req.params.id)
  {
    try {
         

          const result = await db.query("UPDATE roles SET status=$1 WHERE id=$2",
          [req.body.status,req.params.id]);
          /////////////////////////////////////////////
           return res.json({
             "status": 200,
             "msg":"Role updated successfully"
           }); 

    } catch (err) {
      return next(err);
    }
  }
  else{
     return res.json({"status": 403, "msg": "Missing required parameters" });
  }
});

router.get("/role/:id", async function(req, res, next) {
  try {
    const role = await db.query("SELECT * FROM roles WHERE id=$1", [
      req.params.id
    ]);
    const permission = await db.query("SELECT permission_id FROM role_permission WHERE role_id=$1", [
      req.params.id
    ]);
    console.log(role.rows);
    return res.json({'role':role.rows,'permission':permission.rows});
  } catch (err) {
    return next(err);
  }
});


router.get("/check_email/:email", async function(req, res, next) {
  
  console.log(req.params.email)
  if(req.params.email)
  {
    try {
         const results = await db.query("SELECT * FROM users WHERE email=$1", [
          req.params.email
        ]);

        if(results.rows.length>0)
        {
         
          return res.json({
             "status": true,
             "msg":"Email already exists"
           });
        
         
        } 
        else {
          return res.json({
            "status": false,
            "msg":"email is available"
          });
        }
        

    } catch (err) {
      return next(err);
    }
  }
  else{
     return res.json({ message: "Missing required parameters" });
  }
});


router.post("/signup",upload.single('user_avatar'), async function(req, res, next) {
 
  if(req.body.register_as && req.body.email && req.body.name && req.body.password)
  {
    var first_name='';
    var last_name='';
    var name =req.body.name;
    var password =common.encode64(req.body.password);
    if(req.body.register_as==3){
      first_name=name;
      last_name ='';
    }
    else{
       var nameArr = name.split(" ");
       if(nameArr[0]){
        first_name= nameArr[0];
       }
       if(nameArr[1]){
        last_name= nameArr[1];
       }

    }
     var avatar_name='';
    if(req.file.key){
      avatar_name= req.file.key;
    }
    var username  = common.removeSpecialChar(first_name);
    try {
          const result = await db.query(
            "INSERT INTO users (first_name,last_name,email,role_id,password,country,phone_number,website,admin_verify,email_verify,status,created_by,user_avatar) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13) RETURNING *",
            [first_name,last_name, req.body.email, req.body.register_as, password,req.body.country, req.body.mobile, req.body.website,'0','0','0','0',avatar_name]
          );


          const newlyCreatedUserId = result.rows[0].id;

          /////////update username/////////////////////
          username= username+newlyCreatedUserId;
          db.query("UPDATE users SET username=$1 WHERE id=$2",
            [username,newlyCreatedUserId]); 

          //////////update permission table////////////
          const permissions = await db.query("SELECT * FROM role_permission WHERE role_id=$1", [
          req.body.register_as
          ]);

          const permissionsArr = permissions.rows;
          //console.log(permissionsArr);
          permissionsArr.forEach(permission_id => { 
            db.query(
            "INSERT INTO user_permission (user_id,permission_id,created_by) VALUES ($1,$2,$3)",
            [newlyCreatedUserId, permission_id['permission_id'],'0']);
          });
          //////////send mail//////////////////////////
          var verifyUrl=common.appUrl()+'authentication/verify/'+common.encode64(newlyCreatedUserId.toString());
          var html_body='<table style="font-family:Arial, Helvetica, sans-serif;font-size:14px;line-height:20px;color:#666666;" border="0" align="center" width="600" cellspacing="0" cellpadding="0">';
              html_body +='<tbody>';
                html_body +='<tr>';
                html_body +='<td>';      
                  html_body +='<table border="0" bgcolor="#ffffff" width="100%" cellspacing="5" cellpadding="0">';
                    html_body +='<tbody>';
                      html_body +='<tr>';
                        html_body +='<td><a href="'+resetLink+'" rel="nofollow"> ';               
                          html_body +='<img style="float:right;" src="https://alaam.net:4200/assets/images/auth/allam.png" alt="AlaamApp"></a></td>';
                      html_body +='</tr>';
                      html_body +='<tr>';
                        html_body +='<td height="5"><br></td>';
                      html_body +='</tr>';
                      html_body +='<tr>';
                        html_body +='<td bgcolor="#cccccc" height="2"><br></td>';
                      html_body +='</tr>';
                      html_body +='<tr>';
                        html_body +='<td height="5"><br></td>';
                      html_body +='</tr>';
                      html_body +='<tr>';
                        html_body +='<td><strong>'+first_name+',</strong></td>';
                      html_body +='</tr>';
                      html_body +='<tr>';
                        html_body +='<td>&nbsp;</td>';
                      html_body +='</tr>';
                      html_body +='<tr>';
                        html_body +='<td>You have successfully registered with us. Please verify your email id by clicking below button. </td>';
                      html_body +='</tr>';
                      html_body +='<tr>';
                        html_body +='<td>&nbsp;</td>';
                      html_body +='</tr>';
                    html_body +='<tr>';
                      html_body +='<td><table style="width: 70%;margin: 0 auto;">';
                        html_body +='<tbody>';
                          html_body +='<tr>';
                            html_body +='<td style="text-align:center;">';
                              html_body +='<a target="_blank" href="'+verifyUrl+'" style="color:#FFFFFF;font-size:17px;width:200px;font-weight:normal;line-height:42px;font-family:Arial, Helvetica, sans-serif;text-align:center;text-decoration:none;background-color:#2ecc71;padding:10px;" rel="nofollow">Verify Email ID</a></td>';
                          html_body +='</tr>';
                        html_body +='</tbody>';
                      html_body +='</table>';
                    html_body +='</td>';
                  html_body +='</tr>';
                  html_body +='<tr>';
                    html_body +='<td>&nbsp;</td>';
                  html_body +='</tr>';
                  html_body +='<tr>';
                    html_body +='<td><strong>Thanks,</strong></td>';
                  html_body +='</tr>';
                  html_body +='<tr><td><strong>Alaam App</strong><br></td>';
                  html_body +='</tr>';
                  html_body +='<tr>';
                    html_body +='<td><hr>';
                    html_body +='</td>';
                  html_body +='</tr>';
                html_body +='</tbody>';
                html_body +='</table>';
              html_body +='</td>';
            html_body +='</tr>';
            html_body +='</tbody>';
            html_body +='</table>';

            const message = {
                from: 'Alaam App <info@alaam.net>', // Sender address
                to: req.body.email,         // List of recipients
                subject: 'Thanks for choosing Alaam App',
                html: html_body
            };

          transport.sendMail(message, function(err, info) {
              if (err) {
                console.log(err)
              } else {
                console.log(info);
              }
          });
          /////////////////////////////////////////////
           return res.json({
             "status": 200,
             "msg":"User registered successfully"
           });
        
        

    } catch (err) {
      return next(err);
    }
  }
  else{
     return res.json({"status": 403, "msg": "Missing required parameters" });
  }
});


router.get("/verify_email/:id", async function(req, res, next) {
  
  if(req.params.id)
  {
    try {
         const results = await db.query("SELECT * FROM users WHERE id=$1 AND email_verify=$2", [
          req.params.id,'1'
        ]);

        if(results.rows.length==0)
        {
          const userRes = await db.query("SELECT * FROM users WHERE id=$1", [req.params.id]);
          if(userRes.rows[0].role_id==5){
             const user = await db.query("UPDATE users SET email_verify=$1,status=$2 WHERE id=$3",['1','1',req.params.id]);
          }
          else{
             const user = await db.query("UPDATE users SET email_verify=$1 WHERE id=$2",['1',req.params.id]);
          }
         

          return res.json({
             "status": true,
             "msg":"You have successfully verified the email address."
           });
        
         
        } 
        else {
          return res.json({
            "status": false,
            "msg":"email is already verified"
          });
        }
        

    } catch (err) {
      return next(err);
    }
  }
  else{
     return res.json({ message: "Missing required parameters" });
  }
});

router.get("/forgot_password/:email", async function(req, res, next) {
  
  if(req.params.email)
  {
    try {
         const results = await db.query("SELECT * FROM users WHERE email=$1", [
          req.params.email
        ]);

        if(results.rows.length>0)
        {
          
          const user = await db.query("UPDATE users SET forgot_pswd_flag=$1 WHERE id=$2",
          ['1',results.rows[0].id]);
          //////////send mail//////////////////////////
          var resetLink=common.appUrl()+'authentication/resetpassword/'+common.encode64(results.rows[0].id.toString());
          var html_body='<table style="font-family:Arial, Helvetica, sans-serif;font-size:14px;line-height:20px;color:#666666;" border="0" align="center" width="600" cellspacing="0" cellpadding="0">';
              html_body +='<tbody>';
                html_body +='<tr>';
                html_body +='<td>';      
                  html_body +='<table border="0" bgcolor="#ffffff" width="100%" cellspacing="5" cellpadding="0">';
                    html_body +='<tbody>';
                      html_body +='<tr>';
                        html_body +='<td><a href="localhost:4200/authorization/verify" rel="nofollow"> ';               
                          html_body +='<img style="float:right;" src="https://alaam.net:4200/assets/images/auth/allam.png" alt="AlaamApp"></a></td>';
                      html_body +='</tr>';
                      html_body +='<tr>';
                        html_body +='<td height="5"><br></td>';
                      html_body +='</tr>';
                      html_body +='<tr>';
                        html_body +='<td bgcolor="#cccccc" height="2"><br></td>';
                      html_body +='</tr>';
                      html_body +='<tr>';
                        html_body +='<td height="5"><br></td>';
                      html_body +='</tr>';
                      html_body +='<tr>';
                        html_body +='<td><strong>Hi '+results.rows[0].first_name+',</strong></td>';
                      html_body +='</tr>';
                      html_body +='<tr>';
                        html_body +='<td>&nbsp;</td>';
                      html_body +='</tr>';
                      html_body +='<tr>';
                        html_body +='<td>Reset your password by clicking below button. </td>';
                      html_body +='</tr>';
                      html_body +='<tr>';
                        html_body +='<td>&nbsp;</td>';
                      html_body +='</tr>';
                    html_body +='<tr>';
                      html_body +='<td><table style="width: 70%;margin: 0 auto;">';
                        html_body +='<tbody>';
                          html_body +='<tr>';
                            html_body +='<td style="text-align:center;">';
                              html_body +='<a target="_blank" href="'+resetLink+'" style="color:#FFFFFF;font-size:17px;width:200px;font-weight:normal;line-height:42px;font-family:Arial, Helvetica, sans-serif;text-align:center;text-decoration:none;background-color:#2ecc71;padding:10px;" rel="nofollow">Reset password</a></td>';
                          html_body +='</tr>';
                        html_body +='</tbody>';
                      html_body +='</table>';
                    html_body +='</td>';
                  html_body +='</tr>';
                  html_body +='<tr>';
                    html_body +='<td>&nbsp;</td>';
                  html_body +='</tr>';
                  html_body +='<tr>';
                    html_body +='<td><strong>Thanks,</strong></td>';
                  html_body +='</tr>';
                  html_body +='<tr><td><strong>Alaam App</strong><br></td>';
                  html_body +='</tr>';
                  html_body +='<tr>';
                    html_body +='<td><hr>';
                    html_body +='</td>';
                  html_body +='</tr>';
                html_body +='</tbody>';
                html_body +='</table>';
              html_body +='</td>';
            html_body +='</tr>';
            html_body +='</tbody>';
            html_body +='</table>';

            const message = {
                from: 'Alaam App <info@alaam.net>', // Sender address
                to: results.rows[0].email,         // List of recipients
                subject: 'Reset Password - Alaam App',
                html: html_body
            };

          transport.sendMail(message, function(err, info) {
              if (err) {
                console.log(err)
              } else {
                console.log(info);
              }
          });
          /////////////////////////////////////////////
          return res.json({
             "status": true,
             "msg":"Reset link has been sent to your registered email."
           });
        
         
        } 
        else {
          return res.json({
            "status": false,
            "msg":"Email id not found."
          });
        }
        

    } catch (err) {
      return next(err);
    }
  }
  else{
     return res.json({ message: "Missing required parameters" });
  }
});



router.patch("/reset_password", async function(req, res, next) {
 
  if(req.body.password)
  {
    var password =common.encode64(req.body.password);
 
    try {
          const results = await db.query("SELECT * FROM users WHERE forgot_pswd_flag=$1 and id=$2", [
          '1',req.body.id
        ]);

        if(results.rows.length==0)
        {
         
           return res.json({
             "status": false,
             "msg":"Reset link has been expired."
           });
         }
        else 
        {

          const result = await db.query("UPDATE users SET password=$1,forgot_pswd_flag=$2 WHERE id=$3",
          [password,'0',req.body.id]);
           return res.json({
             "status": true,
             "msg":"Password reset successfully"
           });
        }

    } catch (err) {
      return next(err);
    }
  }
  else{
     return res.json({"status": 403, "msg": "Missing required parameters" });
  }
});


router.get("/verify_check_email/:id", async function(req, res, next) {
  
  if(req.params.id)
  {
    try {
         const results = await db.query("SELECT * FROM users WHERE id=$1 AND email_verify=$2 AND is_pswd_created=$3", [
          req.params.id,'1','1'
        ]);

        if(results.rows.length==0)
        {
          const user = await db.query("UPDATE users SET email_verify=$1 WHERE id=$2",
          ['1',req.params.id]);

          return res.json({
             "status": true,
             "msg":"You have successfully verified the email address."
           });
        
         
        } 
        else {
          return res.json({
            "status": false,
            "msg":"email is already verified"
          });
        }
        

    } catch (err) {
      return next(err);
    }
  }
  else{
     return res.json({ message: "Missing required parameters" });
  }
});


router.patch("/generate_password", async function(req, res, next) {
 
  if(req.body.password)
  {
    var password =common.encode64(req.body.password);
 
    try {
          const results = await db.query("SELECT * FROM users WHERE id=$1", [
          req.body.id
        ]);

        if(results.rows.length==0)
        {
         
           return res.json({
             "status": false,
             "msg":"Invalid requested data."
           });
         }
        else 
        {

          const result = await db.query("UPDATE users SET password=$1,is_pswd_created=$2 WHERE id=$3",
          [password,'1',req.body.id]);
           return res.json({
             "status": true,
             "msg":"Password created successfully"
           });
        }

    } catch (err) {
      return next(err);
    }
  }
  else{
     return res.json({"status": 403, "msg": "Missing required parameters" });
  }
});

router.patch("/change_password", async function(req, res, next) {
 
  if(req.body.password)
  {
    var password =common.encode64(req.body.password);
 
    try {
          const results = await db.query("SELECT * FROM users WHERE id=$1", [
          req.body.id
        ]);

        if(results.rows.length==0)
        {
         
           return res.json({
             "status": false,
             "msg":"Invalid requested data."
           });
         }
        else 
        {

          const result = await db.query("UPDATE users SET password=$1 WHERE id=$2",
          [password,req.body.id]);
           return res.json({
             "status": true,
             "msg":"Password changed successfully"
           });
        }

    } catch (err) {
      return next(err);
    }
  }
  else{
     return res.json({"status": 403, "msg": "Missing required parameters" });
  }
});


//backend
router.get("/get_all", async function(req, res, next) {
  
    try {
         const results = await db.query("SELECT users.*, roles.name AS user_type FROM users JOIN roles ON users.role_id::integer=roles.id WHERE users.id!=1 order by users.id desc");

          return res.json({
             "status": true,
             "data": results.rows,
             "msg":"Success"
           });
        

    } catch (err) {
      return next(err);
    }
});

router.get("/get_broadcaster", async function(req, res, next) {
  
    try {
         const results = await db.query("SELECT users.*, roles.name AS user_type FROM users JOIN roles ON users.role_id::integer=roles.id WHERE users.id!=1 and roles.id=9 order by users.id desc");

          return res.json({
             "status": true,
             "data": results.rows,
             "msg":"Success"
           });
        

    } catch (err) {
      return next(err);
    }
});

router.get("/get_mobile_users", async function(req, res, next) {
  
    try {
         const results = await db.query("SELECT users.*, roles.name AS user_type FROM users JOIN roles ON users.role_id::integer=roles.id WHERE users.id!=1 and roles.id=5 order by users.id desc");

          return res.json({
             "status": true,
             "data": results.rows,
             "msg":"Success"
           });
        

    } catch (err) {
      return next(err);
    }
});


router.patch("/update_user_status/:id", async function(req, res, next) {
  if(req.params.id)
  {
    try {
         

          const result = await db.query("UPDATE users SET status=$1 WHERE id=$2",
          [req.body.status,req.params.id]);
          /////////////////////////////////////////////
           return res.json({
             "status": 200,
             "msg":"User updated successfully"
           }); 

    } catch (err) {
      return next(err);
    }
  }
  else{
     return res.json({"status": 403, "msg": "Missing required parameters" });
  }
});

router.get("/user_by_id/:id", async function(req, res, next) {
  try {
    const user = await db.query("SELECT * FROM users WHERE id=$1", [
      req.params.id
    ]);
    return res.json({'data':user.rows});
  } catch (err) {
    return next(err);
  }
});


router.post("/add_user", async function(req, res, next) {
 
  if(req.body.register_as && req.body.email && req.body.first_name)
  {
    var first_name= req.body.first_name;
    var last_name = req.body.last_name;
    var password =common.encode64('pswd~2!1$3%4*9!321');

    
    var username  = common.removeSpecialChar(first_name);
    try {
          const result = await db.query(
            "INSERT INTO users (first_name,last_name,email,role_id,password,country,phone_number,website,admin_verify,email_verify,status,created_by,user_avatar) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13) RETURNING *",
            [first_name,last_name, req.body.email, req.body.register_as, password,req.body.country, req.body.mobile, '','1','0','0',req.body.created_by,'']
          );


          const newlyCreatedUserId = result.rows[0].id;

          /////////update username/////////////////////
          username= username+newlyCreatedUserId;
          db.query("UPDATE users SET username=$1 WHERE id=$2",
            [username,newlyCreatedUserId]); 

          //////////update permission table////////////
          const permissions = await db.query("SELECT * FROM role_permission WHERE role_id=$1", [
          req.body.register_as
          ]);

          const permissionsArr = permissions.rows;
          //console.log(permissionsArr);
          permissionsArr.forEach(permission_id => { 
            db.query(
            "INSERT INTO user_permission (user_id,permission_id,created_by) VALUES ($1,$2,$3)",
            [newlyCreatedUserId, permission_id['permission_id'],'0']);
          });
          //////////send mail//////////////////////////
          var verifyUrl=common.appUrl()+'authentication/generate_pswd/'+common.encode64(newlyCreatedUserId.toString());
          var html_body='<table style="font-family:Arial, Helvetica, sans-serif;font-size:14px;line-height:20px;color:#666666;" border="0" align="center" width="600" cellspacing="0" cellpadding="0">';
              html_body +='<tbody>';
                html_body +='<tr>';
                html_body +='<td>';      
                  html_body +='<table border="0" bgcolor="#ffffff" width="100%" cellspacing="5" cellpadding="0">';
                    html_body +='<tbody>';
                      html_body +='<tr>';
                        html_body +='<td><a href="'+verifyUrl+'" rel="nofollow"> ';               
                          html_body +='<img style="float:right;" src="https://alaam.net:4200/assets/images/auth/allam.png" alt="AlaamApp"></a></td>';
                      html_body +='</tr>';
                      html_body +='<tr>';
                        html_body +='<td height="5"><br></td>';
                      html_body +='</tr>';
                      html_body +='<tr>';
                        html_body +='<td bgcolor="#cccccc" height="2"><br></td>';
                      html_body +='</tr>';
                      html_body +='<tr>';
                        html_body +='<td height="5"><br></td>';
                      html_body +='</tr>';
                      html_body +='<tr>';
                        html_body +='<td><strong>Hi '+first_name+',</strong></td>';
                      html_body +='</tr>';
                      html_body +='<tr>';
                        html_body +='<td>&nbsp;</td>';
                      html_body +='</tr>';
                      html_body +='<tr>';
                        html_body +='<td>You have successfully registered with us. Please verify your email id & generate your login password by clicking below button. </td>';
                      html_body +='</tr>';
                      html_body +='<tr>';
                        html_body +='<td>&nbsp;</td>';
                      html_body +='</tr>';
                    html_body +='<tr>';
                      html_body +='<td><table style="width: 70%;margin: 0 auto;">';
                        html_body +='<tbody>';
                          html_body +='<tr>';
                            html_body +='<td style="text-align:center;">';
                              html_body +='<a target="_blank" href="'+verifyUrl+'" style="color:#FFFFFF;font-size:17px;width:200px;font-weight:normal;line-height:42px;font-family:Arial, Helvetica, sans-serif;text-align:center;text-decoration:none;background-color:#2ecc71;padding:10px;" rel="nofollow">Verify Email ID</a></td>';
                          html_body +='</tr>';
                        html_body +='</tbody>';
                      html_body +='</table>';
                    html_body +='</td>';
                  html_body +='</tr>';
                  html_body +='<tr>';
                    html_body +='<td>&nbsp;</td>';
                  html_body +='</tr>';
                  html_body +='<tr>';
                    html_body +='<td><strong>Thanks,</strong></td>';
                  html_body +='</tr>';
                  html_body +='<tr><td><strong>Alaam App</strong><br></td>';
                  html_body +='</tr>';
                  html_body +='<tr>';
                    html_body +='<td><hr>';
                    html_body +='</td>';
                  html_body +='</tr>';
                html_body +='</tbody>';
                html_body +='</table>';
              html_body +='</td>';
            html_body +='</tr>';
            html_body +='</tbody>';
            html_body +='</table>';

            const message = {
                from: 'Alaam App <info@alaam.net>', // Sender address
                to: req.body.email,         // List of recipients
                subject: 'Thanks for choosing Alaam App',
                html: html_body
            };

          transport.sendMail(message, function(err, info) {
              if (err) {
                console.log(err)
              } else {
                console.log(info);
              }
          });
          /////////////////////////////////////////////
           return res.json({
             "status": 200,
             "msg":"User registered successfully"
           });
        
        

    } catch (err) {
      return next(err);
    }
  }
  else{
     return res.json({"status": 403, "msg": "Missing required parameters" });
  }
});

router.post("/add_broadcaster", async function(req, res, next) {
 
  if(req.body.register_as && req.body.email && req.body.first_name)
  {
    var first_name= req.body.first_name;
    var last_name = req.body.last_name;
    var password =common.encode64('pswd~2!1$3%4*9!321');

    
    var username  = common.removeSpecialChar(first_name);
    try {
          const result = await db.query(
            "INSERT INTO users (first_name,last_name,email,role_id,password,country,phone_number,website,admin_verify,email_verify,status,created_by,user_avatar) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13) RETURNING *",
            [first_name,last_name, req.body.email, req.body.register_as, password,req.body.country, req.body.mobile, '','1','0','1',req.body.created_by,'']
          );


          const newlyCreatedUserId = result.rows[0].id;

          /////////update username/////////////////////
          username= username+newlyCreatedUserId;
          db.query("UPDATE users SET username=$1 WHERE id=$2",
            [username,newlyCreatedUserId]); 

          //////////update permission table////////////
          const permissions = await db.query("SELECT * FROM role_permission WHERE role_id=$1", [
          req.body.register_as
          ]);

          const permissionsArr = permissions.rows;
          //console.log(permissionsArr);
          permissionsArr.forEach(permission_id => { 
            db.query(
            "INSERT INTO user_permission (user_id,permission_id,created_by) VALUES ($1,$2,$3)",
            [newlyCreatedUserId, permission_id['permission_id'],'0']);
          });
          //////////send mail//////////////////////////
          var verifyUrl=common.appUrl()+'authentication/generate_pswd/'+common.encode64(newlyCreatedUserId.toString());
          var html_body='<table style="font-family:Arial, Helvetica, sans-serif;font-size:14px;line-height:20px;color:#666666;" border="0" align="center" width="600" cellspacing="0" cellpadding="0">';
              html_body +='<tbody>';
                html_body +='<tr>';
                html_body +='<td>';      
                  html_body +='<table border="0" bgcolor="#ffffff" width="100%" cellspacing="5" cellpadding="0">';
                    html_body +='<tbody>';
                      html_body +='<tr>';
                        html_body +='<td><a href="'+verifyUrl+'" rel="nofollow"> ';               
                          html_body +='<img style="float:right;" src="https://alaam.net:4200/assets/images/auth/allam.png" alt="AlaamApp"></a></td>';
                      html_body +='</tr>';
                      html_body +='<tr>';
                        html_body +='<td height="5"><br></td>';
                      html_body +='</tr>';
                      html_body +='<tr>';
                        html_body +='<td bgcolor="#cccccc" height="2"><br></td>';
                      html_body +='</tr>';
                      html_body +='<tr>';
                        html_body +='<td height="5"><br></td>';
                      html_body +='</tr>';
                      html_body +='<tr>';
                        html_body +='<td><strong>Hi '+first_name+',</strong></td>';
                      html_body +='</tr>';
                      html_body +='<tr>';
                        html_body +='<td>&nbsp;</td>';
                      html_body +='</tr>';
                      html_body +='<tr>';
                        html_body +='<td>You have successfully registered with us. Please verify your email id & generate your login password by clicking below button. </td>';
                      html_body +='</tr>';
                      html_body +='<tr>';
                        html_body +='<td>&nbsp;</td>';
                      html_body +='</tr>';
                    html_body +='<tr>';
                      html_body +='<td><table style="width: 70%;margin: 0 auto;">';
                        html_body +='<tbody>';
                          html_body +='<tr>';
                            html_body +='<td style="text-align:center;">';
                              html_body +='<a target="_blank" href="'+verifyUrl+'" style="color:#FFFFFF;font-size:17px;width:200px;font-weight:normal;line-height:42px;font-family:Arial, Helvetica, sans-serif;text-align:center;text-decoration:none;background-color:#2ecc71;padding:10px;" rel="nofollow">Verify Email ID</a></td>';
                          html_body +='</tr>';
                        html_body +='</tbody>';
                      html_body +='</table>';
                    html_body +='</td>';
                  html_body +='</tr>';
                  html_body +='<tr>';
                    html_body +='<td>&nbsp;</td>';
                  html_body +='</tr>';
                  html_body +='<tr>';
                    html_body +='<td><strong>Thanks,</strong></td>';
                  html_body +='</tr>';
                  html_body +='<tr><td><strong>Alaam App</strong><br></td>';
                  html_body +='</tr>';
                  html_body +='<tr>';
                    html_body +='<td><hr>';
                    html_body +='</td>';
                  html_body +='</tr>';
                html_body +='</tbody>';
                html_body +='</table>';
              html_body +='</td>';
            html_body +='</tr>';
            html_body +='</tbody>';
            html_body +='</table>';

            const message = {
                from: 'Alaam App <info@alaam.net>', // Sender address
                to: req.body.email,         // List of recipients
                subject: 'Thanks for choosing Alaam App',
                html: html_body
            };

          transport.sendMail(message, function(err, info) {
              if (err) {
                console.log(err)
              } else {
                console.log(info);
              }
          });
          /////////////////////////////////////////////
           return res.json({
             "status": 200,
             "msg":"User registered successfully"
           });
        
        

    } catch (err) {
      return next(err);
    }
  }
  else{
     return res.json({"status": 403, "msg": "Missing required parameters" });
  }
});


router.patch("/update_user/:id", async function(req, res, next) {
  if(req.params.id)
  {
    try {
         

          const result = await db.query("UPDATE users SET first_name=$1,last_name=$2,phone_number=$3,country=$4 WHERE id=$5",
          [req.body.first_name,req.body.last_name,req.body.mobile,req.body.country,req.params.id]);
          /////////////////////////////////////////////
           return res.json({
             "status": 200,
             "msg":"User updated successfully"
           }); 

    } catch (err) {
      return next(err);
    }
  }
  else{
     return res.json({"status": 403, "msg": "Missing required parameters" });
  }
});


//all country
router.get("/get_all_country", async function(req, res, next) {
  
    try {
         const results = await db.query("SELECT * FROM master_country WHERE status='1'");

          return res.json({
             "status": true,
             "data": results.rows,
             "msg":"Success"
           });
        

    } catch (err) {
      return next(err);
    }
});

//all teacher
router.get("/get_all_teacher", async function(req, res, next) {
  
    try {
         const results = await db.query("SELECT id,email,first_name,last_name FROM users WHERE status='1' AND role_id='4' order by first_name");

          return res.json({
             "status": true,
             "data": results.rows,
             "msg":"Success"
           });
        

    } catch (err) {
      return next(err);
    }
});
module.exports = router;