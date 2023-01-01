const mongoose = require("mongoose")
const schema = mongoose.Schema

const DownloadModel = new schema({
    Name: {
        type: String,
        required: true
    },
    Price: {
        type: String,
        required: true
    }
},{timestamps: true})
module.exports = mongoose.model("Downloads", DownloadModel)