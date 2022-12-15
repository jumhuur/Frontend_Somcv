const  Express   = require("express");
const app = Express()
// routes
const  Authrouter = require("./Routes/Auth.js");
const  Cvrouters = require("./Routes/cv.js");
const  cors = require("cors");
const  cookieParse = require('cookie-parser');


// middale 
app.use((req,res , next) => {
    res.header("Access-Control-Allow-Origin", true)
    next()
})
app.use(Express.json())
// app.use(cors({
//     origin:"http://localhost:3000",
//     credentials: true
// }
app.use(cors({
    origin:"http://5.182.18.172",
    credentials: true
}
))
app.use(cookieParse())
app.use('/Api', Authrouter)
app.use('/Api', Cvrouters)
app.listen(8800, () => {
    console.log('Api Working')
})