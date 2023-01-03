const { async } = require("@firebase/util")
const mongoose = require("mongoose")
const schema = mongoose.Schema

const DownloadModel = new schema({
    Name: {
        type: String,
        required: true
    },
    Price: {
        type: String,
        required: false
    }
},{timestamps: true})



DownloadModel.statics.Download = async function(Name, Price) {
    const download = await this.create({Name,Price})
    return download
}
module.exports = mongoose.model("Downloads", DownloadModel)