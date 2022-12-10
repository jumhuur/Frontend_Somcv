import express from "express";
import { getCvs,getSingalcv, updateCv, deleteCv, addCv, getonecv } from "../Controllers/Cv.js";
const Cvrouters =  express.Router()

// get all cvs
Cvrouters.get('/cvs', getCvs)


// get singal cvs
Cvrouters.get('/Singalcv', getSingalcv)


// add cv
Cvrouters.post('/addcv', addCv)

// update  and gt  cv
Cvrouters.put('/updatecv/:id', updateCv)
Cvrouters.get('/getonecv/:id', getonecv)

// delete cv
Cvrouters.delete('/delete/:id', deleteCv)


export default Cvrouters