const express = require("express");
// pull items from the controller
const {
  getBlog,
  getSingleBlog,
  createBlog,
  deleteBlog,
} = require("../controllers/blog-controller");

const router = express.Router();

// get all blogs
router.get("/", getBlog);

// get individual blofs
router.get("/singleBlog/:id", getSingleBlog);

// create blog route
router.post("/create-blog", createBlog);

// create delete path
router.delete("/delete-blog/:id", deleteBlog);

module.exports = router;
