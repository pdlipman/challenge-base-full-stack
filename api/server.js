const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const morgan = require('morgan');

const mongoose = require('mongoose');
const MockGoose = require('mockgoose').Mockgoose;

const router = require('./router.js');
const config = require('./config/config');

const mockGoose = new MockGoose(mongoose);

const allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Accept, Content-Type, Authorization, Content-Length, X-Requested-With');
  res.header('Access-Control-Allow-Credentials', 'true');

  // intercept OPTIONS method
  if ('OPTIONS' == req.method) {
    res.send(200);
  }
  else {
    next();
  }
};

app.use(morgan('dev'));

mockGoose.prepareStorage().then(function() {
  mongoose.connect('mongodb://foobar/baz');
  mongoose.connection.on('connected', () => {
    console.log('db connection is now open');
  });
});

app.use(allowCrossDomain);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(config.port);
console.log('Using port:' + config.port);

function handleError(res, reason, message, code) {
  console.log('ERROR: ' + reason);
  res.status(code || 500).json({ 'error': message });
}

router(app);
