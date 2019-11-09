const express = require('express');
const router = express.Router();
const request = require('request');

const baseURL = 'http://localhost:3020';

router.get('/song', (req, res) => {
  const userId = req.query.userId;
  const songId = req.query.songId;
  if (userId) {
    request.get(`${baseURL}/song?songId=${songId}&userId=${userId}`).pipe(res);
  } else {
    request.get(`${baseURL}/song?songId=${songId}`).pipe(res);
  }
});

router.put('/song', (req, res) => {
  const title = req.query.title;
  const songId = req.query.songId;
  request.put(`${baseURL}/song?songId=${songId}&title=${title}`).pipe(res);
});

router.post('/like', (req, res) => {
  const userId = req.query.userId;
  const songId = req.query.songId;
  request.post(`${baseURL}/like?songId=${songId}&userId=${userId}`).pipe(res);
});

router.delete('/like', (req, res) => {
  const userId = req.query.userId;
  const songId = req.query.songId;
  request.delete(`${baseURL}/like?songId=${songId}&userId=${userId}`).pipe(res);
});

module.exports = router;
