const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

require('dotenv').config();

const multer = require('multer')

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "Kanine+",
  },
});

const upload = multer({storage: storage});

router.post('/', upload.single('file'), (req, res) => {
  console.log(req.file); // send this to a reducer, then the addDog form would call that reducer and send all the info to the database
  res.send(req.file.path);
});

module.exports = router;
