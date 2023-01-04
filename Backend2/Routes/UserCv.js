const express = require("express")
const {GetOneUserCv, CreateUserCV , updateUsercv ,deleteUsercv} = require("../Controlls/Usercv")
const requeredAuth = require("../Middalewere/Authanticate")
const UsercvRouters = express.Router()



// New Cv 
UsercvRouters.post("/NewUserCv", CreateUserCV)


UsercvRouters.use(requeredAuth)
// update User cv 
UsercvRouters.patch("/UpdateUsercv/:Id" , updateUsercv)
// get one user cv 
UsercvRouters.get("/OneUser", GetOneUserCv)

// Dlete User cv 
UsercvRouters.delete("/UpdateUsercv/:Id" , deleteUsercv)




module.exports = UsercvRouters;


