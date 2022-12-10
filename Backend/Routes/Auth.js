import express from "express";
import { login, Logout, Register, Update_info,getuser } from "../Controllers/Auth.js";
const Authrouter =  express.Router()
// login 
Authrouter.post('/Login', login)
// register
Authrouter.post('/Register', Register)
// Logout 
Authrouter.post("/Logout", Logout)

// update info
Authrouter.get('/user/:id', getuser)

// update info
Authrouter.put('/update/:id', Update_info)
export default Authrouter