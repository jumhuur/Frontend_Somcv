const express = require('express')
const cvRouter = express.Router()
const {CreateCv, deletecv,GetAllcv,Getone,updatecv} = require("../Controlls/cvcontroll")

// Get All CV
cvRouter.get('/Allcv', GetAllcv)

// get one cv 
cvRouter.get('/Cv/:Id', Getone)
// post new cv 
cvRouter.post('/Addcv', CreateCv)
// delete cv 
cvRouter.delete('/deletecv/:Id', deletecv)
//update cv 
cvRouter.patch(('/Updatecv/:Id'), updatecv)


module.exports =  cvRouter
