'use strict';

var Subject = require('../models/subjectModel.js');

exports.get_all_subject = function(req, res) {
    Subject.getAllSubject(function(err, subs){
        res.send(subs);
    });
    //res.send("All Subjects");
};

exports.get_single_subject = function(req, res){
    res.send("Single Method");
};