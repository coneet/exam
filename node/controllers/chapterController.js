'use strict';
var chapter = require('../models/chapterModel');

exports.get_all_chapter = function (req, res) {
    chapter.getAllChapter(function (err, chaps) {
        res.send(chaps);
    });
}

exports.get_selected_chapter = function (req, res) {
    chapter.getSelectedChapter(req.params.appid, function (err, chaps) {
        res.send(chaps);
    })
}