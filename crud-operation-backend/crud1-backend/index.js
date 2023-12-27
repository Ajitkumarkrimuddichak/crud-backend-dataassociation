//Crud Operation using ES5 Backend PostMan usid and API create?
const express = require("express");
const coursesRouter = require("./routes/courses");
const bodyParser = require("body-parser");
require("dotenv").config();
const mongoose = require("mongoose");
const app = express();

app.use(bodyParser.json());
app.use("/api/v1/courses", coursesRouter);

//mongoose db connection
mongoose.connect(process.env.DB_CONNECTION_URL, () => {
  console.log("Connected db...");
});

app.listen(process.env.PORT, () => {
  console.log("Server is Running....");
});
