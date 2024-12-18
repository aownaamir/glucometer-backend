const User = require("../models/userModel");

exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find({});
    res.status(200).json({ status: "succes", users });
  } catch (err) {
    res.status(500).json({ status: "error", error: err });
  }
};

exports.createUser = async (req, res, next) => {
  try {
    console.log(req.body);
    const user = await User.create(req.body);
    res.status(200).json({ status: "succes", user });
  } catch (err) {
    res.status(500).json({ status: "error", error: err });
  }
};
