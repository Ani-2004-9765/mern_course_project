const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  aid: {
    type: String
  },

  courseName: {
    type: String
  },

  instructor: {
    type: String
  },

  category: {
    type: String
  },

  duration: {
    type: String
  },

  level: {
    type: String,
    enum: ["Beginner", "Intermediate", "Advanced"]
  },

  thumb: {
    type: String
  }
});

const blogModel = mongoose.model("final", blogSchema);

module.exports = blogModel;