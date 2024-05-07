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
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("listening to database", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
