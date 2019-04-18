'use strict';
module.exports = function (app) {
  var subject_route = require('../controllers/subjectController');
  var chapter = require('../controllers/chapterController');
  var questions = require('../controllers/questionController');

  // todoList Routes
  app.route('/api/subjects')
    .get(subject_route.get_all_subject)

  //.post(subject_route.create_a_task);

  app.route('/api/subjects/:taskId').get(subject_route.get_single_subject)
  /*.put(subject_route.update_a_task)
  .delete(subject_route.delete_a_task);*/

  app.route('/api/chapters')
    .get(chapter.get_all_chapter);

  app.route('/api/chapters/:appid')
    .get(chapter.get_selected_chapter);

  app.route('/api/questions/:chapterId')
  .get(questions.get_selected_questions);
};
