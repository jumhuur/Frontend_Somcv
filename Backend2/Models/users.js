const mongoose = require("mongoose")
const schema = mongoose.Schema

const UserSchema = new schema({
    Name : {
        type: String,
        required: true
    },
    Email : {
        type: String,
        required: true
    },
    Password:{
        type: String,
        required: true
    },

    Image:{
        type: String,
        required: false
    },

    Email:{
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
    }
})

module.exports = mongoose.model("Users", UserSchema)