const express = require("express");
const SendMessages = express.Router();
const { SendMessage } = require("../Controlls/Message");

// get all downloads
SendMessages.post("/Message", SendMessage);

module.exports = SendMessages;
