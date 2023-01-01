const cvmodel = require("../Models/cvModdel")
const mongoose = require("mongoose")


// Get All CV
const GetAllcv  = async(req,res) => {
    try{
        const cvs = await cvmodel.find({}).sort({createdAt: -1})
        res.status(200).json(cvs)
    } catch(err) {
        console.log({err: err.massage})
    }
}



// get one cv 
const Getone  = async(req,res) => {
    const Id = req.params.Id
        if(mongoose.Types.ObjectId.isValid(Id)){
            const onecv = await cvmodel.findById(Id)
            if(!onecv) {
                return res.status(404).json({massage: "not found"})
            } else {
                res.status(200).json(onecv)
            }
        } else {
            res.status(404).json({msg:"Id Is Nod Valid"})
        }
}


// post new cv 
const CreateCv  = async(req,res) => {
    const {Magac,Qiimaha,Image} = req.body
    try{
        const cv = await cvmodel.create({Magac,Qiimaha,Image})
        res.status(200).json(cv)
    } catch (Fariin) {
        res.status(400).json({Fariin:
        ['Qalad Ayaa Jira',
         "Wrong is validations",
        "خطأ في التسجيل "
        ]})
    }
}


// delete cv 
const deletecv  = async(req,res) => {
    const Id = req.params.Id
    try{
        if(mongoose.Types.ObjectId.isValid(Id)){
            const d_cv = await cvmodel.findOneAndDelete({_id:Id})
            res.status(200).json(d_cv)
        } else {
            res.status(404).json({massage:"Id Is Not Avalid Id"})
        }
    } catch(Fariin){
        res.status(404).json({Fariin:[
            "Update Is Not compilate",
            "التحديث لن يتم ",
            "lama Cusboonaysiin cv-ga"            
        ]})

    }

    
}



//update cv 
const updatecv  = async(req,res) => {
    const Id = req.params.Id
    try{
        if(mongoose.Types.ObjectId.isValid(Id)){
            const update_one = await cvmodel.findOneAndUpdate({_id:Id}, {...req.body})
            res.status(200).json({msg:"cv updated"})
        } else {
            res.status(200).json({massage:"update not complated"})
        }
    } catch(Fariin){
        res.status(404).json({Fariin:[
            "Update Is Not compilate",
            "التحديث لن يتم ",
            "lama Cusboonaysiin cv-ga"            
        ]})
    }

    
}
module.exports = {
    CreateCv,
    GetAllcv,
    updatecv,
    Getone,
    deletecv
}