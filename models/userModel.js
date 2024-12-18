const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: "String",
    required: [true, "User must have first name"],
    trim: true,
  },
  lastName: {
    type: "String",
    required: [true, "User must have first name"],
    trim: true,
  },
  dateOfBirth: {
    type: Date,
    required: [true, "User must have date of birth"],
  },
  email: {
    type: String,
    required: [true, "User must have email"],
    unique: true,
  },
  password: {
    type: String,
    minLength: [8, "Password must be at least 8 characters"],
    required: [true, "User must have password"],
    select: false,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
