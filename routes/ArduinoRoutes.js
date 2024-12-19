const express = require("express");
const arduinoController = require("../controllers/arduinoController");

const router = express.Router();

// router
//   .route("/")
//   .get(arduinoController.getData)
//   .post(arduinoController.writeData);

router.route("/measure").get(arduinoController.measure);

module.exports = router;
