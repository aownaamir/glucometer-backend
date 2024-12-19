const express = require("express");
const arduinoController = require("../controllers/arduinoController");

const router = express.Router();

router
  .route("/")
  .get(arduinoController.getData)
  .post(arduinoController.writeData);

module.exports = router;
