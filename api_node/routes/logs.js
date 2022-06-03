//File: controllers/logs.js
var mongoose = require('mongoose');
var Logs  = mongoose.model('Logs');

//GET - Return all logs in the DB
exports.findAllLogs = function(req, res) {
	Logs.find(function(err, logs) {
    if(err) res.send(500, err.message);

    console.log('GET /logs')
		res.status(200).jsonp(logs);
	});
};

//GET - Return a Log with specified ID
exports.findById = function(req, res) {
	Logs.findById( req.params.id  , function(err, log) {
    if(err) return res.send(500, err.message);

    console.log('GET /log/' + req.params.id);
		res.status(200).jsonp(log);
	});
};

//POST - Insert a new Log in the DB
exports.addLog = function(req, res) {
	console.log('POST');
	console.log(req.body);

	var log = new Logs({
		id:    req.body.id,
		fecha: 	  req.body.fecha,
		mensaje:  req.body.mensaje,
		prioridad:   req.body.prioridad,
		usuario:  req.body.usuario,
		subsistema:    req.body.subsistema,
	});

	log.save(function(err, log) {
		if(err) return res.send(500, err.message);
    res.status(200).jsonp(log);
	});
};

//PUT - Update a register already exists
exports.updateLog = function(req, res) {
	TVShow.findById(req.params.id, function(err, log) {
		log.id=    req.body.id,
		log.fecha= 	  req.body.fecha,
		log.mensaje=  req.body.mensaje,
		log.prioridad=   req.body.prioridad,
		log.usuario=  req.body.usuario,
		log.subsistema=    req.body.subsistema,

		log.save(function(err) {
			if(err) return res.send(500, err.message);
      res.status(200).jsonp(log);
		});
	});
};

//DELETE - Delete a Log with specified ID
exports.deleteLog = function(req, res) {
	TVShow.findById(req.params.id, function(err, log) {
		log.remove(function(err) {
			if(err) return res.send(500, err.message);
      res.status(200);
		})
	});
};