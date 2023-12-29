const DownloadModel = require("../Models/Download");
const mongoose = require("mongoose");

// create new dowanload
const Newdownload = async (req, res) => {
  const { Name, Price } = req.body;

  try {
    const Download = await DownloadModel.Download(Name, Price);
    res.status(200).json(Download);
  } catch (err) {
    res
      .status(400)
      .json({
        Fariin: ["Qalad Ayaa Jira", "Wrong is validations", "خطأ في التسجيل "],
      });
  }
};
// get all downloads

const getalldownloads = async (req, res) => {
  try {
    const Dwonloads_all = await DownloadModel.find({}).sort({ createdAt: -1 });
    res.status(200).json(Dwonloads_all);
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
};

module.exports = {
  Newdownload,
  getalldownloads,
};
