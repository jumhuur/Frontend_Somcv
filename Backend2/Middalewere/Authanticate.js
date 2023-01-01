const jwt = require("jsonwebtoken")
const usermodel = require("../Models/users")


const requeredAuth = async(req,res, next) => {

    //ubinta shakhsiga 

    const {authorization} = req.headers

    if(!authorization){
        return res.status(401).json({err:"Lama Hubin Galidaada"})

    }

    const Token = authorization.split(" ")[1]

    try{

        const {_id} = jwt.verify(Token, process.env.SECRET)
        req.User = usermodel.findOne({_id}).select('_id')
        next()

    } catch(err){
        res.status(401).json({err: "Lama Xaqiijin isticmaalahan"})

    }

}


module.exports = requeredAuth