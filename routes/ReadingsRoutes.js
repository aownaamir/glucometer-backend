const express = require("express");
const readingsController = require("../controllers/readingController");

const router = express.Router();

router.route("/invasive").post(readingsController.createInvasive);
router.route("/noninvasive").post(readingsController.createNonInvasive);

module.exports = router;
