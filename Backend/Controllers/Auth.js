import { db } from "../Db.js"
import bcrypt from 'bcrypt'
import Jwt from "jsonwebtoken"

// log in 
export const Register = (req,res) => {
    // hubi in hore loo qaatay emailkan 
    const query = 'SELECT * FROM users WHERE Email = ?'
    db.query(query, [req.body.Email], (err,data) => {
        if(err) return res.status(500).json(err)
        if(data.length) return res.status(409).json("Horaa Loo Qaatay Emailkan")
        const salat = bcrypt.genSaltSync(10);
        const Hashedpassword = bcrypt.hashSync(req.body.Password, salat)
        const q_insert = "INSERT INTO users (`Email`, `Password` ,`Name` , `Image`) VALUE (?)";
    
        const values = [
            req.body.Email,
            Hashedpassword,
            req.body.Name,
            req.body.Image,
        ]
    
        db.query(q_insert,[values], (err,data) => {
            if(err) return res.status(500).json(err)
            return res.status(200).json('User Created')
        })
    })

}

// log in 
export const login = (req,res) => {
    const q = 'SELECT * FROM users WHERE Email = ?';
    db.query(q,[req.body.Email] , (err,data) => {
        if(err) return res.status(500).json(err)
        if(data.length == 0) return res.status(404).json('Akoonkan Ma Samaysna !')
        const passwordCheck = bcrypt.compareSync(req.body.Password, data[0].Password)
        if(!passwordCheck) return res.status(400).json('Waa Qalad Passworkaagu')
        const token = Jwt.sign({id:data[0].Id}, "Takriimsecret")
        const {Password, ...athers} = data[0];
        res.cookie('Token', token, {
            httpOnly: true,
            sameSite: "none",
            maxAge: 147859669888
        }).status(200).json(athers)
    })
}


// log in 
export const Logout = (req,res) => {
    res.clearCookie("Token", {
        sameSite: "none",
        httpOnly: true
    }).status(200).json('Waa Xidhay Akoonka')
    // res.cookie("Token", "" ,{
    //     maxAge: 1,
    //     httpOnly: true,
    //     sameSite: "none",
    // }).status(200).json("Waa Xidhay Akoonka")
}


export const getuser = (req,res) => {
    const id = req.params.id
    const q = 'SELECT * FROM users WHERE Id = ?';
    db.query(q,[id] , (err,data) => {
        if(err) return res.status(500).json(err)
        if(data) return res.status(200).json(data[0])
    })
}

export const Update_info = (req,res) => {
    const q = "UPDATE users SET `Name` = ?,`Jobtitle` = ?,`Tell` = ?,`Location` =  ?, `Cvemail` = ?, `Image` = ?, `Edyear1` = ?, `Eddesc1` = ?, `Edunivername1` = ?, `Edyear2` = ?, `Eddesc2` = ?, `Edunivername2`= ?, `Edyear3` = ?, `Eddesc3` = ?, `Edunivername3` = ?, `Langname1` = ?, `Langprog1` = ?, `Langname2` = ?, `Langprog2` = ?, `Langname3` = ?,  `Langprog3` = ? , `Profile` = ?, `Exyear1` = ?, `Excompnay1` = ?, `Exjob1` = ?, `Exdesc1` = ?, `Exyear2` = ?, `Excompnay2` = ?, `Exjob2` = ?, `Exdesc2` = ?, `Exyear3` = ?, `Excompnay3` = ?, `Exjob3` = ?, `Exdesc3` = ?, `Skillname` = ?, `Skillprog` = ?,  `Skillname1` = ?, `Skillprog1` = ?, `Skillname2` = ?, `Skillprog2` = ?, `Skillname3` = ?, `Skillprog3` = ?, `Skillname4` = ?, `Skillprog4` = ?, `Skillname5` = ?,  `Skillprog5` = ?, `Skillname6` = ?, `Skillprog6` = ?, `Skillname7`  = ?, `Skillprog7` = ?, `Inters1` = ?, `Inters2` = ?, `Inters3` = ?,  `Inters4` = ? WHERE Id = ?"
    const id = req.params.id
    const  values = [
        req.body.Name,
        req.body.Jobtitle,
        req.body.Tell,
        req.body.Location,
        req.body.Cvemail,
        req.body.Image,
        req.body.Edyear1,
        req.body.Eddesc1,
        req.body.Edunivername1,
        req.body.Edyear2,
        req.body.Eddesc2,
        req.body.Edunivername2,
        req.body.Edyear3,
        req.body.Eddesc3,
        req.body.Edunivername3,
        req.body.Langname1,
        req.body.Langprog1,
        req.body.Langname2,
        req.body.Langprog2,
        req.body.Langname3,
        req.body.Langprog3,
        req.body.Profile,
        req.body.Exyear1,
        req.body.Excompnay1,
        req.body.Exjob1,
        req.body.Exdesc1,
        req.body.Exyear2,
        req.body.Excompnay2,
        req.body.Exjob2,
        req.body.Exdesc2,
        req.body.Exyear3,
        req.body.Excompnay3,
        req.body.Exjob3,
        req.body.Exdesc3,
        req.body.Skillname,
        req.body.Skillprog,
        req.body.Skillname1,
        req.body.Skillprog1,
        req.body.Skillname2,
        req.body.Skillprog2,
        req.body.Skillname3,
        req.body.Skillprog3,
        req.body.Skillname4,
        req.body.Skillprog4,
        req.body.Skillname5,
        req.body.Skillprog5,
        req.body.Skillname6,
        req.body.Skillprog6,
        req.body.Skillname7,
        req.body.Skillprog7,
        req.body.Inters1,
        req.body.Inters2,
        req.body.Inters3,
        req.body.Inters4,
    ]
    db.query(q,[...values,id], (err,data) => {
        if(err) return res.status(500).json(err)
        if(data) return res.status(200).json("Updated")
    })
}

