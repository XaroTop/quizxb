var models = require('../models/models.js')
/* Controller question */

exports.question = function(req, res, next) {
	models.Quiz.findAll().then(function(quiz){
  res.render('quizes/question.ejs', { title: 'Quiz', Pregunta: quiz[0].pregunta });});
};

/* Controller answer*/

exports.answer = function(req, res, next) {
	models.Quiz.findAll().then(function(quiz){	  
  	if (req.query.Respuesta === quiz[0].respuesta) 
  	{res.render('quizes/answer', { title: 'Quiz', Respuesta:'Correcto' });}
  	else {res.render('quizes/answer', { title: 'Quiz', Respuesta:'Incorrecto' });};
});};
