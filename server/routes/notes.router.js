const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/:id', (req, res) => {
  // GET route code here
  console.log(req.params);
  const queryString = `SELECT note.id, note."userID", content, username, date FROM note JOIN "user" ON note."userID"="user".id WHERE note."dogID"=$1 ORDER BY note.id DESC;`;
  values = [req.params.id];
  pool.query(queryString, values).then((result) => {
    res.send(result.rows)
  }).catch((err) => {
    console.log(err);
    res.sendStatus(500);
  })
});

module.exports = router;
