const Blog = require("../models/blog-model");
const mongoose = require("mongoose");

// get Blog
const getBlog = async (req, res, next) => {
  try {
    // will pull the elements from the Blog and sort them base on
    // new to last so descending
    const blog = await Blog.find({}).sort({ createdAt: -1 });
    // 200 code is equivalent to OK
    // provide the json data in payload
    // additionally give the user a success message
    res.status(200).send({
      payload: blog,
      message: "Success",
    });
  } catch (error) {
    // display the error
    console.log(error);
    // handles the error and passes it to the middleware
    next(error);
  }
};

// get Individual blog from database
const getSingleBlog = async (req, res, next) => {
  try {
    // pull the id from the req in url
    const { id } = req.params;
    // locate blog based on id
    const individualBlog = await Blog.findById(id);
    // provide the payload containing the json data
    // provide the message with success
    res.status(200).send({
      payload: individualBlog,
      message: "Success",
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

//create a new blog
const createBlog = async (req, res) => {
  try {
    // will take the content being passed to req from the from end
    const { title, author, content } = req.body;
    /// will create the blog with the following data
    const blog = await Blog.create({ title, author, content });
    // if status is Ok
    // creates the object and gives the newly create the object
    // back in the payload
    // will display succes if content is succesfully loaded
    res.status(200).send({
      payload: blog,
      message: "success",
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

//delete Blog based on id being provided
const deleteBlog = async (req, res) => {
  try {
    // fetch id provide by the req
    const { id } = req.params;
    // find blog assoociate with the id and delete the item,
    const blog = await Blog.findByIdAndDelete(id);
    // provide a message of success when it's deleted properly
    res.status(200).send({
      message: "deleted successfully",
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

// export the functions
module.exports = {
  getBlog,
  getSingleBlog,
  createBlog,
  deleteBlog,
};
