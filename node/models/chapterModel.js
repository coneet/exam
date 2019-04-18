'user strict';

var sql = require('./db.js');

var Chapter = function(){};

Chapter.getAllChapter = function getAllChapter(result) {
    sql.query("Select * from chapters where subject_id_fk", function (err, res) {

            if(err) {
                console.log("error: ", err);
                result(null, err);
            }
            else{
              console.log('tasks : ', res);  

             result(null, res);
            }
        });   
};

Chapter.getSelectedChapter = function getSelectedChapter(id, result) {
    sql.query("Select * from chapters where subject_id_fk = ? ", id, function (err, res) {

            if(err) {
                console.log("error: ", err);
                result(null, err);
            }
            else{
              console.log('tasks : ', res);  

             result(null, res);
            }
        });   
};


module.exports= Chapter;