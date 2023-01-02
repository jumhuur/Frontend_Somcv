const mongoose = require("mongoose")
const schema = mongoose.Schema
const bcrypt = require("bcrypt");
const validator = require("validator")

const UserSchema = new schema({
    Name : {
        type: String,
        required: true
    },
    Email : {
        type: String,
        required: true,
        unique: true
    },
    Password:{
        type: String,
        required: true
    },
})


UserSchema.statics.singup = async function(Email,Password,Name){
    if(!Email || !Password || !Name){
        throw Error(["Buuxi Sadexda Meeloodba",
         "جميع الخقول مطلوبة",
          "All fields are required"])
    }

    if(!validator.isEmail(Email)){
        throw Error(["Emailka Maaha Mid saxa",
        "هذا البريد غير صحيح",
        "This mail is incorrect"
    ])
    }
    if(!validator.isStrongPassword(Password)){
        throw Error(["Passworkaagu wuu fudud yahay",
        "كلمة السر الخاصة بك ليست قوية",
        "Your password is not strong",
    
    ])
    }
    const Jira = await this.findOne({Email})
    if(Jira){
        throw Error(["Horaa Loo Diwaan Galiyay Emailkan",
        "وقد تم بالفعل استخدام هذا البريد الإلكتروني",
        "This Email Has Already Been Used"
    
    ])
    }
    const salt = await bcrypt.genSalt(10)
    const Hash = await bcrypt.hash(Password,salt)
    const user = await this.create({Email, Password:Hash,Name})
    return user
}


UserSchema.statics.Login = async function(Email,Password) {
    if(!Email || !Password){
        throw Error(["Buuxi Sadexda Meeloodba",
        "جميع الخقول مطلوبة",
         "All fields are required"])
    }
    const User = await this.findOne({Email})
    if(!User){
        throw Error(["Emailkaagu Waa Qalad",
        "بريدك الالكتروني غير صحيح",
        "Your email is incorrect"
    ])
    }

    const match = await bcrypt.compare(Password, User.Password)
    if(!match){
        throw Error([
            "Passworkaagu Waa Qalad !",
            "Your Password Is In correct !",
            'كلمة المرور غير صحيحة'
    ])
    }

    return User
}


module.exports = mongoose.model("User", UserSchema)





