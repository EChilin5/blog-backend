const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Blog Table/Document
// _id is created by default by mongoose
// Title
// Author
// Content
// all fields should be required

const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("blog", blogSchema);
