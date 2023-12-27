//Crud Operation using ES6 Backend PostMan usid and API create?
import express from "express";
import coursesRouter from "./routers/coursesRouter.js";
import bodyParser from "body-parser";
import dotenv from "dotenv";
dotenv.config(); // Load environment variables from .env file
import mongoose from "mongoose";
const app = express();

app.use(bodyParser.json());
app.use("/api/v1", coursesRouter);

//mongoose db connection
mongoose.connect(process.env.DB_CONNECTION_URL, () => {
  console.log("Connected db...");
});

app.listen(process.env.PORT, () => {
  console.log("Server is Running....");
});
