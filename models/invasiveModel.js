const mongoose = require("mongoose");

const invasiveSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name of invasive reading is required"],
    },
    value: {
      type: Number,
      required: [true, "Invasive reading is required"],
    },
    username: {
      type: String,
    },
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

const Invasive = mongoose.model("Invasive", invasiveSchema);

module.exports = Invasive;
