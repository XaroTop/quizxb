var express = require('express');
var router = express.Router();
var quizController = require('../controllers/quiz_controller');

router.get('/', function(req, res) {
  res.render('index', { title: 'Quiz', errors: []});
});

router.param ('quizId', quizController.load);
router.get('/quizes', quizController.index);
router.get('/quizes/:quizId(\\d+)', quizController.show);
router.get('/quizes/:quizId(\\d+)/answer', quizController.answer);
router.get('/quizes/nuevo', quizController.nuevo);
router.post('/quizes/crear', quizController.crear);
router.get('/quizes/:quizId(\\d+)/edit', quizController.edit);
router.post('/quizes/:quizId(\\d+)', quizController.update);

  
module.exports = router;
