'use strict';

require('dotenv').config();

const express    = require('express'),
  app            = express(),
  port           = process.env.PORT || 8000,
  host           = process.env.HOST || 'localhost',
  expressLayouts = require('express-ejs-layouts'),
  mongoose       = require('mongoose'),
  bodyParser     = require('body-parser'),
  session        = require('express-session'),
  MongoStore     = require('connect-mongo')(session),
  cookieParser   = require('cookie-parser'),
  flash          = require('connect-flash');


// Connect to db
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });
mongoose.connection.on('error', function(err) {
    console.error('MongoDB connection error: ' + err);
    process.exit(-1);
  }
);

app.set('trust proxy', 1);
// Set sessions and cookie parser
app.use(cookieParser());
app.use(session({
  secret: 'my-super-secret',
  cookie: { maxAge: 6000 },
  resave: false, // forces session to be saved to store
  saveUninitialized: false, // dont save unmodified
  store: new MongoStore({ mongooseConnection: mongoose.connection })
}));
app.use(function(req,res,next){
  if(!req.session){
    return next(new Error('Oh no! No session found.')) //handle error
  }
  next();
});
app.use(flash());

// Set public directories
app.use('/public', express.static(__dirname + '/public'));

// Set ejs as templating engine
app.set('view engine', 'ejs');
app.use(expressLayouts);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Set routes
app.use(require('./app/routes'));


app.listen(port, host, function() {
  console.log('Server running on port ' + port);
});
