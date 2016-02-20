var express = require('express');
var expressHandlebars = require('express-handlebars');
var bodyParser = require('body-parser');
var Sequelize = require('sequelize');
var mySql = require('mysql');
var sequelize = new Sequelize('chocolate_db', 'root');
var PORT = process.env.NODE_ENV || 3000;
var app = express();


//handlebars setup
app.engine('handlebars', expressHandlebars({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

var Chocolate = sequelize.define('chocolate', {
  name: Sequelize.STRING,
  satisfaction: Sequelize.INTEGER
});


//handlebars setup
var expressHandlebars = require('express-handlebars');
app.engine('handlebars', expressHandlebars({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

//routes
app.get('/', function(req, res) {
//NEW from class
  Chocolate.findAll({}).then(function(chocolates) {
    res.render('chocolate', {chocolates});
  });
});

sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("LISTNEING!");
  });
});


