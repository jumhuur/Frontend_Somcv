const Usermodel = require("../Models/users");
const jwt = require('jsonwebtoken');

const CreateToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET, {expiresIn: "3d"})
}

const GetAllUser = async(req,res) => {
    try{
        const Allusers = await Usermodel.find({}).sort({createdAt: -1})
        res.status(200).json(Allusers)
    } catch(err){
        console.log({err: err.massage})
    }
}
const Getone = async(req,res) => {
    res.status(200).json({Msg:"Good"})
}

// singup
const singup  = async(req,res) => {
    const {Email,Password, Name} = req.body
    try{
        const user  = await Usermodel.singup(Email,Password,Name)
        // create token 
        const Token = CreateToken(user._id)
        res.status(200).json({Email, Token})

    } catch(error){
        res.status(400).json({error:error.message})
        console.log(error.message)
    }
}

const Login  = async(req,res) => {
    const {Email,Password} = req.body
    try{

        const user  = await Usermodel.Login(Email,Password)
        // create token 
        const Token = CreateToken(user._id)
        res.status(200).json({Email, Token})

    } catch(error){
        res.status(400).json({error:error.message})
        console.log(error.message)
    }
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
    singup,
    deleteUser,
    updateUser,
    Login
}