'use strict';

var sql = require('./db');

var Questions = function(){};

Questions.getSelectedQuestions = function getSelectedQuestions(id, result) {
  sql.query("Select question_id_pk, ques_name, CONCAT_WS(',',option_a,option_b,option_c,answer) choices, answer from questions where chapter_id_fk = ? ", id, function (err, res) {

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

module.exports= Questions;
