const express = require("express");
const DwonloadRouter = express.Router();
const { Newdownload, getalldownloads } = require("../Controlls/Download");

// get all downloads

DwonloadRouter.get("/Downloads", getalldownloads);

// new download
DwonloadRouter.post("/addDownload", Newdownload);

module.exports = DwonloadRouter;
