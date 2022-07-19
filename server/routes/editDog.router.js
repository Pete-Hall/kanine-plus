const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/', (req, res) => {
  // GET route code here
});

router.post('/', (req, res) => {
  console.log(req.body);
  // const queryString = ``
  // const values = [req.body.dog_name, req.body.address, req.body.breed, req.body.age, req.body.monday, req.body.tuesday, req.body.wednesday, req.body.thursday, req.body.friday, req.body.owner_name, req.body.owner_email, req.body.owner_phone_one, req.body.owner_phone_two, req.body.pick_up, req.body.drop_off, req.body.originID, req.body.driving_routeID, req.body.id];
  // pool.query(queryString, values).then((result) => {
  //   res.sendStatus(200);
  // }).catch((err) => {
  //   console.log(err);
  //   res.sendStatus(500);
  // })
});

module.exports = router;
