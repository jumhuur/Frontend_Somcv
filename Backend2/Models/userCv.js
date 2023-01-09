const mongoose = require("mongoose")

const schema = mongoose.Schema


const UserSchema = new schema({
    Image:{
        type: String,
        required: false
    },
    Name : {
        type: String,
        required: false
    }, 
     Location : {
        type: String,
        required: false
     }, 
    leval : {
        type: String,
        required: false
    },
    Jobtitle : {
        type: String,
        required: false
    }, 
    Tell : {
        type: String,
        required: false
    },
    Cvemail : {
        type: String,
        required: false
    }, 
    
    Edyear1: {
        type: String,
        required: false
    }, 
    Eddesc1 : {
        type: String,
        required: false
    }, 
    Edunivername1: {
        type: String,
        required: false
    }, 
    Edyear2 : {
        type: String,
        required: false
    }, 
    Eddesc2 : {
        type: String,
        required: false
    }, 
    Edunivername2 : {
        type: String,
        required: false
    }, 
    Edyear3 : {
        type: String,
        required: false
    }, 
    Eddesc3 : {
        type: String,
        required: false
    }, 
    Edunivername3 : {
        type: String,
        required: false
    }, 
    Langname1 : {
        type: String,
        required: false
    }, 
    Langprog1 : {
        type: String,
        required: false
    }, 
    Langname2 : {
        type: String,
        required: false
    }, 
    Langprog2 : {
        type: String,
        required: false
    }, 
    Langname3 : {
        type: String,
        required: false
    }, 
    Langprog3 : {
        type: String,
        required: false
    }, 
    Profile : {
        type: String,
        required: false
    }, 
    Exyear1 :{ 
        type: String,
        required: false
    }, 
    Excompnay1 : {
        type: String,
        required: false
    }, 
    Exjob1: {
        type: String,
        required: false
    }, 
    Exdesc1: {
        type: String,
        required: false
    }, 
    Exyear2 : {
        type: String,
        required: false
    }, 
    Excompnay2 : {
        type: String,
        required: false
    }, 
    Exjob2 :  {
        type: String,
        required: false
    }, 
    Exdesc2 : {
        type: String,
        required: false
    }, 
    Exyear3 : {
        type: String,
        required: false
    }, 
    Excompnay3 : {
        type: String,
        required: false
    }, 
    Exjob3 : {
        type: String,
        required: false
    }, 
    Exdesc3 : {
        type: String,
        required: false
    }, 
    Skillname : {
        type: String,
        required: false
    }, 
    Skillprog : {
        type: String,
        required: false
    }, 
    Skillname1 : {
        type: String,
        required: false
    }, 
    Skillprog1 : {
        type: String,
        required: false
    }, 
    Skillname2 : {
        type: String,
        required: false
    }, 
    Skillprog2 : {
        type: String,
        required: false
    },
    Skillname3 : {
        type: String,
        required: false
    }, 
    Skillprog3 : {
        type: String,
        required: false
    }, 
    Skillname4 : {
        type: String,
        required: false
    }, 
    
    Skillprog4 : {
        type: String,
        required: false
    }, 
    Skillname5 : {
        type: String,
        required: false
    },
    Skillprog5: {
        type: String,
        required: false
    }, 
    Skillname6 : {
        type: String,
        required: false
    }, 
    Skillprog6 : {
        type: String,
        required: false
    }, 
    Skillname7 : {
        type: String,
        required: false
    }, 
    Skillprog7 : {
        type: String,
        required: false
    }, 
    Inters1 : {
        type: String,
        required: false
    }, 
    Inters2 : {
        type: String,
        required: false
    }, 
    Inters3 : {
        type: String,
        required: false
    }, 
    Inters4 : {
        type: String,
        required: false
    },

    Ref1: {
        type: String,
        required: false
    },
    Ref1Com : {
        type: String,
        required: false
    },
    Ref1Tel : {
        type: String,
        required: false
    },

    Ref2: {
        type: String,
        required: false
    },
    Ref2Com : {
        type: String,
        required: false
    },
    Ref2Tel : {
        type: String,
        required: false
    },

    Ref3: {
        type: String,
        required: false
    },
    Ref3Com : {
        type: String,
        required: false
    },
    Ref3Tel : {
        type: String,
        required: false
    },

    Color1: {
        type: String,
        required: false
    },

    Color2: {
        type: String,
        required: false
    },

    User_Id : {
        type: String,
        required: true
    }
})


UserSchema.statics.Create = async function(User_Id, Name, Image, Location, CreatedAt, leval, Jobtitle, Tell, Cvemail, Edyear1, Eddesc1, Edunivername1, Edyear2, Eddesc2, Edunivername2, Edyear3, Eddesc3, Edunivername3, Langname1, Langprog1, Langname2, Langprog2, Langname3, Langprog3, Profile, Exyear1, Excompnay1, Exjob1, Exdesc1, Exyear2, Excompnay2, Exjob2, Exdesc2, Exyear3, Excompnay3, Exjob3, Exdesc3, Skillname, Skillprog, Skillname1, Skillprog1, Skillname2, Skillprog2, Skillname3, Skillprog3, Skillname4, Skillprog4, Skillname5, Skillprog5, Skillname6, Skillprog6, Skillname7, Skillprog7, Inters1, Inters2, Inters3, Inters4,Ref1,Ref1Com,Ref1Tel,Ref2,Ref2Com,Ref2Tel,Ref3,Ref3Com,Ref3Tel ){
    if(!mongoose.Types.ObjectId.isValid(User_Id)){
        throw Error(["Id_gaaga Sax Maaha",
        "المعرف غير صالح",
         "Id Is Not Valid Id"])
    }

    const Usercv = this.create({User_Id, Name, Image, Location, CreatedAt, leval, Jobtitle, Tell, Cvemail, Edyear1, Eddesc1, Edunivername1, Edyear2, Eddesc2, Edunivername2, Edyear3, Eddesc3, Edunivername3, Langname1, Langprog1, Langname2, Langprog2, Langname3, Langprog3, Profile, Exyear1, Excompnay1, Exjob1, Exdesc1, Exyear2, Excompnay2, Exjob2, Exdesc2, Exyear3, Excompnay3, Exjob3, Exdesc3, Skillname, Skillprog, Skillname1, Skillprog1, Skillname2, Skillprog2, Skillname3, Skillprog3, Skillname4, Skillprog4, Skillname5, Skillprog5, Skillname6, Skillprog6, Skillname7, Skillprog7, Inters1, Inters2, Inters3, Inters4,Ref1,Ref1Com,Ref1Tel,Ref2,Ref2Com,Ref2Tel,Ref3,Ref3Com,Ref3Tel })
    return Usercv
}


module.exports = mongoose.model("UserCv", UserSchema)








