const express = require('express');
const router = express.Router();

const baseURL = 'http://localhost:3020';

router.get('/song', (req, res) => {
  const userId = req.query.userId;
  const songId = req.query.songId;
  if (userId) {
    res.redirect(`${baseURL}/playbar/song?songId=${songId}&userId=${userId}`);
  } else {
    res.redirect(`${baseURL}/playbar/song?songId=${songId}`);
  }
});

router.put('/song', (req, res) => {
  const title = req.query.title;
  const songId = req.query.songId;
  res.redirect(307, `${baseURL}/playbar/song?songId=${songId}&title=${title}`);
});

router.post('/like', (req, res) => {
  const userId = req.query.userId;
  const songId = req.query.songId;
  res.redirect(
    307,
    `${baseURL}/playbar/like?songId=${songId}&userId=${userId}`
  );
});

router.delete('/like', (req, res) => {
  const userId = req.query.userId;
  const songId = req.query.songId;
  res.redirect(
    307,
    `${baseURL}/playbar/like?songId=${songId}&userId=${userId}`
  );
});

module.exports = router;
