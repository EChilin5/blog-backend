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
const db =
  "mongodb+srv://edgar:u73WA5qxgjwkTQz@mernapp.ie02iqy.mongodb.net/?retryWrites=true&w=majority&appName=MernApp";

mongoose
  .connect(db)
  .then(() => {
    app.listen(5000, () => {
      console.log("listening to database", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
