const mongoose = require("mongoose");

const nonInvasiveSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name of invasive reading is required"],
  },
  value: {
    type: Number,
    required: [true, "Non-invasive reading is required"],
  },
  username: {
    type: String,
  },
});

const NonInvasive = mongoose.model("NonInvasive", nonInvasiveSchema);

module.exports = NonInvasive;
