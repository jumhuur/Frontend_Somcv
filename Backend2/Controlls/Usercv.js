const UsercvModel = require("../Models/userCv")
const mongoose = require("mongoose")
// Get One cv 

const GetOneUserCv = async (req,res) => {
    const User_Id = req.User._id
    try{
        const Usercv = await UsercvModel.find({User_Id}).limit(1)
        if(!Usercv){
            res.status(404).json({msg:"Not Created"})
        } else {
            return res.status(200).json(Usercv)
        }
    } catch(Fariin) {
        res.status(400).json({Fariin:[
        'Qalad Ayaa Jira',
        "Wrong is validations",
       "خطأ في التسجيل "
       ]})
    }
}
// post new cv 
const CreateUserCV  = async(req,res) => {
    const {Name, Image, Location, CreatedAt, leval, Jobtitle, Tell, Cvemail, Edyear1, Eddesc1, Edunivername1, Edyear2, Eddesc2, Edunivername2, Edyear3, Eddesc3, Edunivername3, Langname1, Langprog1, Langname2, Langprog2, Langname3, Langprog3, Profile, Exyear1, Excompnay1, Exjob1, Exdesc1, Exyear2, Excompnay2, Exjob2, Exdesc2, Exyear3, Excompnay3, Exjob3, Exdesc3, Skillname, Skillprog, Skillname1, Skillprog1, Skillname2, Skillprog2, Skillname3, Skillprog3, Skillname4, Skillprog4, Skillname5, Skillprog5, Skillname6, Skillprog6, Skillname7, Skillprog7, Inters1, Inters2, Inters3, Inters4,Ref1,Ref1Com,Ref1Tel,Ref2,Ref2Com,Ref2Tel,Ref3,Ref3Com,Ref3Tel } = req.body
    try{
        const User_Id = req.User._id
        const cv = await UsercvModel.create({User_Id, Name, Image, Location, CreatedAt, leval, Jobtitle, Tell, Cvemail, Edyear1, Eddesc1, Edunivername1, Edyear2, Eddesc2, Edunivername2, Edyear3, Eddesc3, Edunivername3, Langname1, Langprog1, Langname2, Langprog2, Langname3, Langprog3, Profile, Exyear1, Excompnay1, Exjob1, Exdesc1, Exyear2, Excompnay2, Exjob2, Exdesc2, Exyear3, Excompnay3, Exjob3, Exdesc3, Skillname, Skillprog, Skillname1, Skillprog1, Skillname2, Skillprog2, Skillname3, Skillprog3, Skillname4, Skillprog4, Skillname5, Skillprog5, Skillname6, Skillprog6, Skillname7, Skillprog7, Inters1, Inters2, Inters3, Inters4,Ref1,Ref1Com,Ref1Tel,Ref2,Ref2Com,Ref2Tel,Ref3,Ref3Com,Ref3Tel })
        res.status(200).json(cv)
    } catch (err) {
        console.log(err)
    }
}


//update cv 
const updateUsercv  = async(req,res) => {
    const Id = req.params.Id
    try{
        if(mongoose.Types.ObjectId.isValid(Id)){
            const update_one = await UsercvModel.findOneAndUpdate({_id:Id}, {...req.body})
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



// delete cv 
const deleteUsercv  = async(req,res) => {
    const Id = req.params.Id
    try{
        if(mongoose.Types.ObjectId.isValid(Id)){
            const d_cv = await UsercvModel.findOneAndDelete({_id:Id})
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

module.exports = {
    CreateUserCV,
    updateUsercv,
    deleteUsercv,
    GetOneUserCv
}





