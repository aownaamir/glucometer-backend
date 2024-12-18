const Invasive = require("../models/invasiveModel");
const NonInvasive = require("../models/nonInvasiveModel");

exports.createInvasive = async (req, res, next) => {
  try {
    console.log(req.body);
    const invasive = await Invasive.create(req.body);
    res.status(201).json({ status: "success", invasive });
  } catch (error) {
    res.status(500).json({ status: "error", error });
  }
};
exports.createNonInvasive = async (req, res, next) => {
  try {
    console.log(req.body);
    const nonInvasive = await NonInvasive.create(req.body);
    res.status(201).json({ status: "success", nonInvasive });
  } catch (error) {
    res.status(500).json({ status: "error", error });
  }
};
