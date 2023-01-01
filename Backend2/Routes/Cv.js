const express = require('express')
const {CreateCv, deletecv,GetAllcv,Getone,updatecv} = require("../Controlls/cvcontroll")
const requeredAuth = require("../Middalewere/Authanticate")
const cvRouter = express.Router()



// Get All CV
cvRouter.get('/Allcv', GetAllcv)
// get one cv 
cvRouter.get('/Cv/:Id', Getone)
// post new cv 
cvRouter.use(requeredAuth)
cvRouter.post('/Addcv', CreateCv)
// delete cv 
cvRouter.delete('/deletecv/:Id', deletecv)
//update cv 
cvRouter.patch(('/Updatecv/:Id'),updatecv)


module.exports =  cvRouter
