require('newrelic');

const express = require('express');
const path = require('path');
const playbar = require('./routes');
// const morgan = require('morgan');

const app = express();
const port = 3000;

// app.use(morgan('dev'));

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.use('/songs/:id', express.static(path.join(__dirname, 'public')));

app.use('/playbar', playbar);

app.listen(port, () => {
  console.log('server connected');
});
