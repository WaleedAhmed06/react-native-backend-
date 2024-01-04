require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const taskrouter = require("./routes/taskroute");
const authRoute = require("./routes/authroute");
const cors = require("cors");

const App = express();
App.use(express.json());
App.use(cors());

App.use("/task", taskrouter);
App.use("/auth", authRoute);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    App.listen(process.env.PORT, () => {
      console.log(
        `Database Connected and server is listening http://localhost:${process.env.PORT}`
      );
    });
  })
  .catch((err) => {
    console.log("err", err);
  });
