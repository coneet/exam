'user strict';

var sql = require('./db.js');

var Subject = function(){};

Subject.getAllSubject = function getAllSubject(result) {
    sql.query("Select * from subjects", function (err, res) {

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

module.exports= Subject;