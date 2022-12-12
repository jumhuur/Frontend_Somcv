import express from "express";
import { getCvs,getSingalcv, updateCv, deleteCv, addCv, getonecv,Downloadcv , geDownloads } from "../Controllers/Cv.js";
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
// download cv add
Cvrouters.post("/downloads", Downloadcv)
// downloads get
Cvrouters.get("/Alldownloads", geDownloads)
// delete cv
Cvrouters.delete('/delete/:id', deleteCv)


export default Cvrouters