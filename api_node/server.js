var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    methodOverride = require("method-override");
    mongoose = require("mongoose");

    // Connection to DB
mongoose.connect('mongodb://localhost/logs', function(err, res) {
    if(err) throw err;
    console.log('Connected to Database');
  });

  //Middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride());

//Import Models and controllers

var models = require('./models/logs')(app, mongoose);
var LogsContr = require('./routes/logs');

// Example Route
var router = express.Router();
router.get('/', function(req, res) {
  res.send("Hello world!");
});
app.use(router);

// API routes
var logs = express.Router();

logs.route('/logs')
  .get(LogsContr.findAllLogs)
  .post(LogsContr.addLog);


logs.route('/logs/:id')
  .get(LogsContr.findById)
  .put(LogsContr.updateLog)
  .delete(LogsContr.deleteLog);
app.use('/api', logs);
// Start server
app.listen(3000, function() {
console.log("Node server running on http://localhost:3000");
});

