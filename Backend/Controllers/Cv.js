import { db } from "../Db.js";
// add cv
export const addCv = (req,res) => {
    const query = "INSERT INTO  cv (`Name` ,`Price` , `Image` , `Imagecover`) VALUE (?)";
    const Values = [
        req.body.Name,
        req.body.Price,
        req.body.Image,
        req.body.Imagecover,
    ]

    db.query(query,[Values], (err,data) => {
        if(err) return res.status(500).json("Lama Samayn Cv-gan")
        return res.status(200).json("Cv Created")
    })
}
// get all cvs
export const getCvs = (req,res) => {
    const query = "SELECT * FROM cv LIMIT 9"
    db.query(query, (err,data) => {
        if(err) return res.status(400).json(err)
        return res.status(200).json(data)
    })
}

// get singal cvs
export const getSingalcv = (req,res) => {
    const query = req.query.id && "SELECT * FROM cv WHERE id=?";
    const value = req.query.id;
    db.query(query,[value], (err, data) => {
        if(err) return res.status(400).json("Not found cv")
        return res.status(200).json(data);
    })
}

// update cv
export const updateCv = (req,res) => {
    const query = "UPDATE cv SET (`Name` ,`Price` , `Image` , `Imagecover`)  VALUE (?)  WHERE id = ?"
    const id = req.params.id
    console.log(id)
    const values = [
        req.body.Name,
        req.body.Price,
        req.body.Image,
        req.body.Imagecover,
    ]
    db.query(query[values, id], (err,data) => {
        if(err) res.status(500).json(err)
        return res.status(200).json('cv updated succesfully')
    })
}

// get one cv 
export const getonecv = (req,res) => {
    const query = "SELECT * FROM cv WHERE id=?";
    const id = req.params.id
    db.query(query,[id], (err,data) => {
        if(err) return res.status(400).json('Cv Not Found')
        if(data) return res.status(200).json(data)
    })
}

// delete cv
export const deleteCv = (req,res) => {
    res.json('delete Cv')
}