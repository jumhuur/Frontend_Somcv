const express = require('express')
const UserRouter = express.Router()
const {GetAllUser, Getone, singup , deleteUser , updateUser, Login} = require("../Controlls/UserContrsll")
// Get All User
UserRouter.get('/AllUser', GetAllUser)

// get one User 
UserRouter.get('/User/:Id', Getone)


// login 
UserRouter.post('/Login', Login)

// sing up
UserRouter.post('/RegisterUser', singup)


// delete User 
UserRouter.delete('/deleteUser/:Id', deleteUser)
//update User 
UserRouter.patch(('/UpdateUser/:Id'), updateUser)


module.exports =  UserRouter


