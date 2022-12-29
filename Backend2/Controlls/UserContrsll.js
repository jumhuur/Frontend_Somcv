const Usermodel = require("../Models/users")
const mongoose = require("mongoose")

const GetAllUser = async(req,res) => {
    res.status(200).json({Msg:"Good"})
}
const Getone = async(req,res) => {
    res.status(200).json({Msg:"Good"})
}
const CreateUser  = async(req,res) => {
    res.status(200).json({Msg:"Good"})
}

const Register  = async(req,res) => {
    res.status(200).json({Msg:"Good"})
}


const deleteUser  = async(req,res) => {
    res.status(200).json({Msg:"Good"})
}
const updateUser  = async(req,res) => {
    res.status(200).json({Msg:"Good"})
}



module.exports = {
    GetAllUser,
    Getone,
    CreateUser,
    deleteUser,
    updateUser,
    Register
}