const mongoose = require("mongoose");

const PinSchema = new mongoose.Schema(
  {
    usename: {
      type: String,
      require: true,
    },
    title: {
      type: String,
      require: true,
      max: 50,
      unique: true,
    },
    desc: {
      type: String,
      require: true,
      min: 3,
    },
    rating: {
      type: String,
      require: true,
      min: 0,
      max: 5,
    },
    lat: {
      type: Number,
      require: true,
    },
    long: {
      type: Number,
      require: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Pin", PinSchema);