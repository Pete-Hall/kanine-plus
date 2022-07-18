const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  const queryString = `SELECT * FROM driving_route ORDER BY "id" ASC`;
  pool.query(queryString).then((result) => {
    res.send(result.rows);
  }).catch((err) => {
    console.log('Error in get route router:', err);
    res.sendStatus(500);
  })
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
