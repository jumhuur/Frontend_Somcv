const express = require("express")
const {GetOneUserCv, CreateUserCV , updateUsercv ,deleteUsercv} = require("../Controlls/Usercv")
const requeredAuth = require("../Middalewere/Authanticate")
const UsercvRouters = express.Router()


UsercvRouters.use(requeredAuth)
// get one user cv 
UsercvRouters.get("/OneUser", GetOneUserCv)
// New Cv 

UsercvRouters.post("/NewUserCv", CreateUserCV)

// update User cv 

UsercvRouters.patch("/UpdateUsercv/:Id" , updateUsercv)


// Dlete User cv 
UsercvRouters.delete("/UpdateUsercv/:Id" , deleteUsercv)




module.exports = UsercvRouters;


