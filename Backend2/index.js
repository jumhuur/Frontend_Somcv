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

// init Midallware
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", true);
  res.header("Access-Control-Allow-Private-Network", true);
  next();
});

app.use(express.json());
app.use(
  cors(
    {
      origin: "https://frontend-somcv-txca.vercel.app/",
      credentials: true,
    }
    // app.use(cors({
    //     origin:"http://5.182.18.172:8800",
    //     credentials: true
    // }
  )
);
// rounting
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
