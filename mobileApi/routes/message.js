const express = require("express");
const router = express.Router();
const db = require("../db");
const transport = require("../config/smtp.js");
const common = require("../config/common.js");


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
 

router.post("/send", async function (req, res, next) {
    let date = new Date(Date.now())
    let read_by_sender = false;
    let read_by_receiver = false;
    const isTrue= await isValidToken(req.body.access_token);
    if(!isTrue){
           return res.json({
               "status": 201,
               "data":[],
               "message":"رمز الدخول غير صالح"
             });
    }
    try {
        if (req.body.email) {
            const results = await db.query("SELECT * FROM users WHERE email=$1", [
                req.body.email
            ]);
            if (results.rows[0].id) {
                req.body.sender_id = results.rows[0].id
            } else {
                return next(err);
            }
        }
        if (req.body.sender_id) {
            const result = await db.query(
                "INSERT INTO messages (sender_id,receiver_id,message,read_by_sender,read_by_receiver , date) VALUES ($1,$2,$3,$4,$5,$6) RETURNING *",
                [req.body.sender_id, req.body.receiver_id, req.body.message, read_by_sender, read_by_receiver, date]
            );
            console.log(req.body)
            return res.json({
                data: result.rows,
                "status": 200,
                error: false,
                "msg": "message send successfully"
            });
        } else {
            return next(err);
        }

    } catch (err) {
        return next(err);
    }
});

router.post("/get-message/:access_token", async (req, res, next) => {
    const sender_id = parseInt(req.body.sender_id)
    const receiver_id = parseInt(req.body.receiver_id)

    const isTrue= await isValidToken(req.params.access_token);
    if(!isTrue){
           return res.json({
               "status": 201,
               "data":[],
               "message":"رمز الدخول غير صالح"
             });
    }
    
    try {
        const result = await db.query(
            'SELECT messages.id, messages.sender_id,messages.receiver_id,messages.read_by_sender,messages.read_by_receiver,messages.date,messages.message ,users.first_name,users.last_name FROM messages JOIN users ON messages.sender_id = users.id  WHERE ((messages.sender_id = $1 AND messages.receiver_id = $2) OR messages.sender_id = $2 AND messages.receiver_id = $1) ORDER BY id ASC',
            [sender_id, receiver_id]
        );
        return res.json({
            data: result.rows.reverse(),
            "status": 200,
            "msg": "message get successfully"
        });
    } catch (error) {
        return next(error);
    }
})

module.exports = router;