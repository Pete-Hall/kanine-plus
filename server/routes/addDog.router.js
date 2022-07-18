const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/', (req, res) => {
  // GET route code here
});

router.post('/', (req, res) => {
  console.log(req.body);
});

module.exports = router;
