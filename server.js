require("dotenv").config();

const express = require("express");
var cors = require("cors");
const mongoose = require("mongoose");
const blogRoutes = require("./routes/blog-routes");

// express app
const app = express();

//middleware
app.use(cors());
app.use(express.json());

// routes
app.use("/api/blogs", blogRoutes);

// connect to db
const port = process.env.PORT || 5000;
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(port, () => {
      console.log("listening to database", port);
    });
  })
  .catch((error) => {
    console.log(error);
  });
