var models = require('../models/models.js');
/* Controller question */

exports.load = function (req, res, next, quizId) {
	models.Quiz.findById(quizId).then(function (quiz) {
		if (quiz) {
			req.quiz= quiz;
			next();
		} else {next (new Error("No existe quiz con el id", + quizId));
		}}).catch(function(error) {next(error);});
}; 

exports.index = function (req,res) {
	models.Quiz.findAll().then(function(quizes){
	res.render ('quizes/index.ejs', { quizes: quizes, errors: [] });
	}).catch(function(error) {next(error);});
};
		
exports.show = function(req, res) {
	console.log("Acceso punto 4");
	res.render('quizes/show', { quiz: req.quiz, errors: [] });
};

/* Controller answer*/

exports.answer = function(req, res) {
		  
  	if (req.query.Respuesta === req.quiz.respuesta) 
  	{res.render('quizes/answer', { quiz: req.quiz, Respuesta:'Correcto', errors: [] });}
  	else {res.render('quizes/answer', { quiz: req.quiz, Respuesta:'Incorrecto', errors: [] });};
};

/* Controller crear*/

exports.crear = function(req, res) {
		  
  	
  	var quiz = models.Quiz.build (req.body.quiz);
  	quiz.validate().then(function(err){if (err)
  		{res.render('quizes/nuevo', {quiz: quiz, errors : err.errors});}
  		else {
  	quiz.save({fields: ["pregunta","respuesta"]}).then(function() {
  	res.redirect('/quizes');})}});
  	
};


/* Controller crear*/

exports.nuevo = function(req, res) {
	var quiz = models.Quiz.build ({pregunta: "Pregunta", respuesta: "Respuesta"});	  
  	res.render('quizes/nuevo', {quiz: quiz, errors: []});
  	
};

exports.edit = function(req, res) {
	console.log("Acceso punto 5");
	res.render('quizes/edit', { quiz: req.quiz, errors: [] });
};


exports.update = function(req, res) {
	console.log("Acceso punto 6");	  
  	req.quiz.pregunta = req.body.quiz.pregunta;
  	req.quiz.respuesta = req.body.quiz.respuesta;
  	req.quiz.save({fields: ["pregunta","respuesta"]}).then(function() {
  	res.redirect('/quizes');});
  	
};

