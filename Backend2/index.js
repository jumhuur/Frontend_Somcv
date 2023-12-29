require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// app
const app = express();
const cvRouter = require("./Routes/Cv.js");
const UserRouter = require("./Routes/Users");
const DwonloadRouter = require("./Routes/Download");
const UsercvRouters = require("./Routes/UserCv");
const SendMessages = require("./Routes/Message.js");

// init Midallware
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", true);
  res.header("Access-Control-Allow-Private-Network", true);
  next();
});

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
// rounting
app.use("/Api", SendMessages);
app.use("/Api", UserRouter);
app.use("/Api", DwonloadRouter);
app.use("/Api", cvRouter);
app.use("/Api", UsercvRouters);
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // init app
    app.listen(process.env.PORT, () => {
      console.log(`server Is OK ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => {
  res.json({
    massage: "sax mashalaah",
  });
});
