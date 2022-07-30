const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/:id', (req, res) => {
  // GET route code here
  console.log(req.params);
  const queryString = `SELECT dog.id, dog_name, address, breed, age, monday, tuesday, wednesday, thursday, friday, owner_name, owner_email, owner_phone_one, owner_phone_two, pick_up, drop_off, "originID", "driving_routeID", gender, image, origin.type, driving_route.name FROM dog JOIN origin ON dog."originID" = origin.id JOIN driving_route ON dog."driving_routeID" = driving_route.id WHERE dog.id=$1 AND dog."userID"=${req.user.id};`
  values = [req.params.id];
  pool.query(queryString, values).then((result) => {
    res.send(result.rows)
  }).catch((err) => {
    console.log(err);
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
