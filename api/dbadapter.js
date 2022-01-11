var pgp = require("pg-promise")(/*options*/);

function PostgresDBAdapter() {
    var db = pgp(process.env.DATABASE_URL || "postgresql://eduadminalaam:3dut3ch2o2!N3wl!v3@alaamlive.crs6xfbo7sst.me-south-1.rds.amazonaws.com:5432/alaamlive");

    function getObjectFromStorage(tableName, callback) {
        db.any("SELECT * FROM " + tableName).then(function (result) {
            var objects = {};
            (result || []).forEach(function (item) {
                objects[item.id] = item;
            });
            callback(objects);
        });
    }

    function getSurveyName(postId, callback) {
        db
            .any("SELECT * FROM surveys WHERE id=$1", [postId])
            .then(function (data) {
                //console.log(JSON.stringify(data));
                var results = (data || []).map(function (item) {
                    return item["name"];
                });
                callback(results);
            });
    }

    function addSurvey(name, callback) {
        if (name.Id == 0) {
            db
                .one("INSERT INTO surveys (name, login_id, json, configuration, is_public) VALUES($1, $2, $3, $4, $5) RETURNING *", [
                    name.Name,
                    name.login_id,
                    "{}",
                    name.Config,
		    name.IsPublic
                ])
                .then(callback);
        }
        else {
            db
                .one("Update surveys set name= $1, login_id=$2, configuration=$3, is_public=$5 where id=$4 RETURNING *", [
                    name.Name,
                    name.login_id,
                    name.Config,
                    name.Id,
		    name.IsPublic
		])
                .then(callback);

        }
    }

    async function pointSystem(user_id, getPoints, competition_type){
        const points = await db.query("SELECT id, user_id, points, competition_type FROM user_points WHERE user_id=$1 and competition_type=$2", [user_id, competition_type]);
        var pointsObj = points.rows;
        // IF A USER ISN'T FOUND
        if (typeof points.rows !== 'undefined' && points.rows.length == 0) { console.log('insert', competition_type)
          await db.query("INSERT INTO user_points (user_id, points, competition_type) VALUES ($1,$2,$3) RETURNING *",
                [user_id, getPoints, competition_type]
                );
        }else{ console.log('update', competition_type+' '+ pointsObj[0].points);
        var updatedPoints = pointsObj[0].points+getPoints;
          await db.query("update user_points set points=$1 where user_id=$2 and competition_type=$3 RETURNING *",
                [updatedPoints, user_id, competition_type]
                );
        }
    }

    function postResults(postId, json, created_by, callback) {
        var getPoints = 10;
        pointSystem(created_by, getPoints, 'referendum');
        db
            .one("INSERT INTO results (postid, json, created_by) VALUES($1, $2, $3) RETURNING *", [
                postId,
                json,
                created_by
            ])
            .then(callback);
    }

    function getResults(postId, callback) {
        db
            .any("SELECT * FROM results WHERE postid=$1", [postId])
            .then(function (data) {
                //console.log(JSON.stringify(data));
                var results = (data || []).map(function (item) {
                    return item["json"];
                });
                callback(results);
            });
    }

    function deleteSurvey(surveyId, callback) {
        db
            .one("DELETE FROM surveys WHERE id=$1 RETURNING *", [surveyId])
            .then(callback);
    }

    function changeName(id, name, callback) {
        console.log("THIS IS THE NAME: " + name + " ID: " + id);
        db
            .one("UPDATE surveys SET name = $1 WHERE id = $2 RETURNING *", [name, id])
            .then(callback);
    }

    function storeSurvey(id, json, callback) {
        db
            .one("UPDATE surveys SET json = $1 WHERE id = $2 RETURNING *", [json, id])
            .then(callback);
    }

    function changeSurveyStatus(id, callback) {
        db
            .one("UPDATE surveys SET is_approved = NOT is_approved WHERE id = $1 RETURNING *", [id])
            .then(callback);
    }

    function getAdvertiserSurveys(login_id, callback) {
        db.any("SELECT * FROM surveys WHERE login_id = $1 ", [login_id]).then(function (result) {
            var objects = {};
            (result || []).forEach(function (item) {
                objects[item.id] = item;
            });
            callback(objects);
        });
    }
    function getSurveys(callback) {
        var surveys = {
            MySurvey1: {
                pages: [
                    {
                        name: "page1",
                        elements: [
                            {
                                type: "radiogroup",
                                choices: ["item1", "item2", "item3"],
                                name: "question from survey1"
                            }
                        ]
                    }
                ]
            },
            MySurvey2: {
                pages: [
                    {
                        name: "page1",
                        elements: [
                            {
                                type: "checkbox",
                                choices: ["item1", "item2", "item3"],
                                name: "question from survey2"
                            }
                        ]
                    }
                ]
            }
        };
        getObjectFromStorage("surveys", function (objects) {
            if (Object.keys(objects).length > 0) {
                callback(objects);
            } else {
                callback(surveys);
            }
        });
    }

    function getAdminSurveys(callback) {
        db.any("SELECT surveys.*, concat_ws(' ',users.first_name ,users.last_name) as username FROM surveys  JOIN users on users.id = surveys.login_id").then(function (result) {
            var objects = {};
            (result || []).forEach(function (item) {
                objects[item.id] = item;
            });
            callback(objects);
        });
    }

    return {
        addSurvey: addSurvey,
        getSurvey: function (surveyId, callback) {
            getSurveys(function (result) {
                callback(JSON.parse(result[surveyId].json));
            });
        },
        storeSurvey: storeSurvey,
        getAdvertiserSurveys: getAdvertiserSurveys,
        changeSurveyStatus: changeSurveyStatus,
        getSurveys: getSurveys,
        getAdminSurveys: getAdminSurveys,
        deleteSurvey: deleteSurvey,
        postResults: postResults,
        getResults: getResults,
        changeName: changeName,
        getFullSurvey: function (surveyId, callback) {
            getSurveys(function (result) {
                callback(result[surveyId]);
            });
        },
        getSurveyName: getSurveyName
    };
}

module.exports = PostgresDBAdapter;
