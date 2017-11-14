
/* Controller question */

exports.question = function(req, res, next) {
  res.render('quizes/question.ejs', { title: 'Quiz', Pregunta: 'Capital de Italia' });
};

/* Controller answer*/

exports.answer = function(req, res, next) {
  if (req.query.Respuesta === 'Roma') 
  {res.render('quizes/answer', { title: 'Quiz', Respuesta:'Correcto' });}
  else {res.render('quizes/answer', { title: 'Quiz', Respuesta:'Incorrecto' });};
};
