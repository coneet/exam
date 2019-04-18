'use strict';

var questions = require('../models/quetionsModel');

exports.get_selected_questions = function(req, res){
    questions.getSelectedQuestions(req.params.chapterId, function(err, questions){
        res.send(questions);
    });
}