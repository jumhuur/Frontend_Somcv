const mongoose = require("mongoose")
const schema = mongoose.Schema


// cvs
const cvSchema = new schema({
    Magac : {
        type: String,
        required: true
    },
    Qiimaha : {
        type: String,
        required: true
    },
    Image:{
        type: String,
        required: true
    },
}, {timestamps: true})



module.exports = mongoose.model("cvs", cvSchema)