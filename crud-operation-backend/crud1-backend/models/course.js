const mongoose = require("mongoose");

const Course = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  video: {
    type: Number,
    required: true,
  },
  active: Boolean,
});

module.exports = mongoose.model("courses", Course);
