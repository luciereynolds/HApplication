var createError = require('http-errors');
var express = require('express');
var cors = require('cors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());

// Mock database of users (replace this with your actual database integration)
const users = [
  { id: 1, username: 'user1', password: 'password1' },
  { id: 2, username: 'user2', password: 'password2' },
  // Add more users as needed
];

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  
  // Check if the provided username and password match any user in the database
  const user = users.find(u => u.username === username && u.password === password);
  
  if (user) {
    // If user is found, generate a token (you can use JWT or any other method)
    const token = generateToken(); // Implement this function to generate token
    
    res.status(200).json({ token });
  } else {
    // If user is not found or credentials are incorrect, return error
    res.status(401).json({ message: 'Invalid username or password' });
  }
});

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
