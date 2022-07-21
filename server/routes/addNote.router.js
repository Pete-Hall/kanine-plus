const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/', (req, res) => {
  // GET route code here
});

router.post('/', (req, res) => {
  console.log(req.body);
  // const queryString = ``
  // const values = [req.body.newNote];
  // pool.query(queryString, values).then((result) => {
  //   res.sendStatus(201);
  // }).catch((err) => {
  //   console.log(err);
  //   res.sendStatus(500);
  // })
});

module.exports = router;
