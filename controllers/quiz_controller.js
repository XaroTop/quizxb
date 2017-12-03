var models = require('../models/models.js');
/* Controller question */

exports.index = function (req,res) {
	models.Quiz.findAll().then(function(quizes){
	res.render ('quizes/index.ejs', { quizes: quizes});});
};
		
exports.show = function(req, res) {
	console.log("Acceso punto 4",req.params.quizId,"req.param.quiz.id");
	models.Quiz.findById(req.params.quizId).then(function(quiz){
	console.log("Accediendo a Punto 5",quiz.id,"quiz.id despues de query");
  res.render('quizes/show', { quiz: quiz });});
};

/* Controller answer*/

exports.answer = function(req, res) {
	models.Quiz.findById(req.params.quizId).then(function(quiz){	  
  	if (req.query.Respuesta === quiz.respuesta) 
  	{res.render('quizes/answer', { quiz: quiz, Respuesta:'Correcto' });}
  	else {res.render('quizes/answer', { quiz: quiz, Respuesta:'Incorrecto' });};
});};
