const express = require('express');
const router = express.Router();
const request = require('request');

const playbarURL = 'http://localhost:3020';

router.get('/', (req, res) => {
  const songId = req.query.songId;
  request.get(`${playbarURL}/song?songId=${songId}`).pipe(res);
});

// routger.get('/', (req, res) => {
//   request.get(``)
// })

module.exports = router;
