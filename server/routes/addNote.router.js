const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/', (req, res) => {
  // GET route code here
});

router.post('/', (req, res) => {
  console.log(req.body.id, req.body.newNote);
  console.log(req.user.id);
  const queryString = `INSERT INTO note ("dogID", "userID", "content") VALUES ($1, $2, $3);`
  const values = [req.body.id, req.user.id, req.body.newNote];
  pool.query(queryString, values).then((result) => {
    res.sendStatus(201);
  }).catch((err) => {
    console.log(err);
    res.sendStatus(500);
  })
});

module.exports = router;
