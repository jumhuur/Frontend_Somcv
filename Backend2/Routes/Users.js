const express = require('express')
const UserRouter = express.Router()
const {GetAllUser, Getone, CreateUser , deleteUser , updateUser, Register} = require("../Controlls/UserContrsll")
// Get All User
UserRouter.get('/AllUser', GetAllUser)

// get one User 
UserRouter.get('/User/:Id', Getone)
// post new User 
UserRouter.post('/AddUser', CreateUser)

// register 
UserRouter.post('/RegisterUser', Register)
// delete User 
UserRouter.delete('/deleteUser/:Id', deleteUser)
//update User 
UserRouter.patch(('/UpdateUser/:Id'), updateUser)


module.exports =  UserRouter


