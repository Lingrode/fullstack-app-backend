const express = require("express");
const router = express.Router();
const multer = require("multer");

const destination = "uploads";

// Shows where files must be saved
const storage = multer.diskStorage({
  destination: destination,
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const uploads = multer({ storage: storage });

router.get("/register", (req, res) => {
  res.send("Register");
});

module.exports = router;
