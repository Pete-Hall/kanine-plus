const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/:id', (req, res) => {
  // GET route code here
  console.log(req.params);
  // const queryString = ``;
  // values = [req.params.id];
  // pool.query(queryString, values).then((result) => {
  //   res.send(result.rows)
  // }).catch((err) => {
  //   console.log(err);
  //   res.sendStatus(500);
  // })
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
