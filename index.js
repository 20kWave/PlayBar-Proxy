const express = require('express');
const path = require('path');
const playbar = require('./routes');
const songs = require('./songsRoutes');
const morgan = require('morgan');

const app = express();
const port = 3000;

app.use(morgan('dev'));

app.use('/songs/:id', express.static(path.join(__dirname, 'public')));

// app.use('/songs/:id', songs);
app.use('/playbar', playbar);

app.listen(port);
