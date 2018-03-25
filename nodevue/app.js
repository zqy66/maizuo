var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var api = require('./routes/api');

var index = require('./routes/index');
var userdata = require('./routes/userdata');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
/*****************************/
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/nodevue");


var session = require("express-session");
/******************************/
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
/******注册session 模块， 配合cookie完成身份验证***************************/

app.use(session({
    name: "kerwinNodeSessID",
    secret:"dw3243dw",
    cookie: {maxAge: 1000*3600 }, //1小时
    resave: true,
    saveUninitialized: true
}));

/***********************************************/
app.use('/', index);
app.use('/userdata', userdata);
app.use('./api',api);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
