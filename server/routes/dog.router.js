const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {
  // const queryString = `SELECT * FROM dog ORDER BY "id" ASC`;
  // const queryString = `SELECT * FROM dog JOIN origin ON dog."originID" = origin.id JOIN driving_route ON dog."driving_routeID" = driving_route.id ORDER BY dog.id ASC;`;
  // const queryString = `SELECT dog.id AS dogID, dog_name, address, breed, age, monday, tuesday, wednesday, thursday, friday, owner_name, owner_email, owner_phone_one, owner_phone_two, pick_up, drop_off, "originID", "driving_routeID", origin.type, driving_route.name FROM dog JOIN origin ON dog."originID" = origin.id JOIN driving_route ON dog."driving_routeID" = driving_route.id ORDER BY dog.id ASC;`
  const queryString =`SELECT dog.id, dog_name, address, breed, age, monday, tuesday, wednesday, thursday, friday, owner_name, owner_email, owner_phone_one, owner_phone_two, pick_up, drop_off, "originID", "driving_routeID", origin.type, driving_route.name FROM dog JOIN origin ON dog."originID" = origin.id JOIN driving_route ON dog."driving_routeID" = driving_route.id ORDER BY dog.id ASC;`
  pool.query(queryString).then((result) => {
    res.send(result.rows);
  }).catch((err) => {
    console.log('Error in get dog router:', err);
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
