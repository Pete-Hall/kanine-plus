const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.put('/', (req, res) => {
  console.log(req.body);
  const queryString = `UPDATE dog SET "dog_name"=$1, "address"=$2, "breed"=$3, "age"=$4, "monday"=$5, "tuesday"=$6, "wednesday"=$7, "thursday"=$8, "friday"=$9, "owner_name"=$10, "owner_email"=$11, "owner_phone_one"=$12, "owner_phone_two"=$13, "pick_up"=$14, "drop_off"=$15, "originID"=$16, "driving_routeID"=$17, "gender"=$18, "image"=$19 WHERE id=$20 AND dog."userID"=${req.user.id};`
  const values = [req.body.dog_name, req.body.address, req.body.breed, req.body.age, req.body.monday, req.body.tuesday, req.body.wednesday, req.body.thursday, req.body.friday, req.body.owner_name, req.body.owner_email, req.body.owner_phone_one, req.body.owner_phone_two, req.body.pick_up, req.body.drop_off, req.body.originID, req.body.driving_routeID, req.body.gender, req.body.image, req.body.id];
  pool.query(queryString, values).then((result) => {
    res.sendStatus(200);
  }).catch((err) => {
    console.log(err);
    res.sendStatus(500);
  })
});

module.exports = router;
