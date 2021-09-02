const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const chalk = require("chalk");
require("dotenv").config();

// import our files
const authRouter = require("./router/authRouter");
const { upload } = require("./middleware/uploadMiddleware");
const app = express();
app.use(morgan("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static("uploads"));

app.post("/", upload.single("avatar"), (req, res, next) => {
  res.send("IMAGE UPLOAD SUCCESSFULLY");
  next();
});
app.use("/user", authRouter);

// 404 error handler
app.use((req, res, next) => {
  res.status(404).send("Request url was not found 🚫🏴‍☠️🚩🏁");
});

// 500 error handler
app.use((err, req, res, next) => {
  res.status(500).send(err.message);
  console.log(chalk.red.inverse(err.message));
  // console.log(err);
});

const PORT = process.env.PORT || 3000;

mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(
    app.listen(PORT, () => {
      console.log("Server && database is running");
    })
  )
  .catch((e) => {
    console.log(e);
  });
