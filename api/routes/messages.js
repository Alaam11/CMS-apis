const express = require("express");
const router = express.Router();
const db = require("../db");
const transport = require("../config/smtp.js");
const common = require("../config/common.js");

router.post("/send", async function (req, res, next) {
    let date = new Date(Date.now())
    let read_by_sender = false;
    let read_by_receiver = false;
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

router.post("/get-message", async (req, res, next) => {
    const sender_id = parseInt(req.body.sender_id)
    const receiver_id = parseInt(req.body.receiver_id)
    try {
        const result = await db.query(
            'SELECT messages.id, messages.sender_id,messages.receiver_id,messages.read_by_sender,messages.read_by_receiver,messages.date,messages.message ,users.first_name,users.last_name FROM messages JOIN users ON messages.sender_id = users.id  WHERE ((messages.sender_id = $1 AND messages.receiver_id = $2) OR messages.sender_id = $2 AND messages.receiver_id = $1) ORDER BY id ASC',
            [sender_id, receiver_id]
        );
        return res.json({
            data: result.rows,
            "status": 200,
            "msg": "message get successfully"
        });
    } catch (error) {
        return next(error);
    }
})

router.put("/read-message/:id", async (req, res, next) => {
    const id = parseInt(req.params.id)
    let read_by_receiver = true
    let read_by_sender = false
    db.query(
        'UPDATE messages SET read_by_receiver = $1, read_by_sender = $2 WHERE sender_id = $3',
        [read_by_receiver, read_by_sender, id],
        (error, results) => {
            if (error) {
                return next(err);
            }
            return res.json({ status: 200, error: false, data: results, msg: "Message read successfull.!" });
        })

})

router.get("/get-RequestList", async (req, res, next) => {
    try {
        const result = await db.query(
            "SELECT users.id ,users.first_name,users.last_name,COUNT(messages.id) chat_count,(SELECT a.date FROM messages a WHERE a.sender_id = users.id ORDER BY a.date desc LIMIT 1) last_date FROM users LEFT JOIN messages ON messages.sender_id = users.id WHERE messages.read_by_receiver = false GROUP BY users.id",
        );
        const results = await db.query("SELECT users.id, users.first_name ,users.last_name , roles.name AS user_type FROM users JOIN roles ON users.role_id::integer=roles.id WHERE users.id!=1 order by users.id desc");
        let arr3 = results.rows.map((item, i) => Object.assign({}, item, result.rows[i]));
        return res.json({ status: 200, error: false, data: arr3, msg: "Requested user successfull.!" });
    } catch (error) {
        return next(error);
    }
})

router.get("/get-MessageNotification", (req, res, next) => {
    db.query(
        'SELECT messages.id,messages.date ,users.first_name,users.last_name FROM messages JOIN users ON messages.sender_id = users.id  WHERE ((messages.read_by_receiver = false AND messages.receiver_id = 1)) ORDER BY id ASC',
        (error, results) => {
            if (error) {
                return next(error);
            }
            return res.json({ status: 200, error: false, data: results.rows, msg: "Requested user successfull.!" });
        })
})


module.exports = router;