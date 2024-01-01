const Usermodel = require("../Models/users");
const UsercvModel = require("../Models/userCv");
const jwt = require("jsonwebtoken");

const Epxin = 1 * 24 * 60 * 60; // 1 day
const CreateToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: Epxin });
};

const GetAllUser = async (req, res) => {
  try {
    const Allusers = await Usermodel.find({}).sort({ createdAt: -1 });
    res.status(200).json(Allusers);
  } catch (err) {
    console.log({ err: err.massage });
  }
};
const Getone = async (req, res) => {
  res.status(200).json({ Msg: "Good" });
};

// singup
const singup = async (req, res) => {
  const { Email, Password, Magac } = req.body;
  const {
    Name,
    Image,
    Location,
    CreatedAt,
    leval,
    Jobtitle,
    Tell,
    Cvemail,
    Edyear1,
    Eddesc1,
    Edunivername1,
    Edyear2,
    Eddesc2,
    Edunivername2,
    Edyear3,
    Eddesc3,
    Edunivername3,
    Langname1,
    Langprog1,
    Langname2,
    Langprog2,
    Langname3,
    Langprog3,
    Profile,
    Exyear1,
    Excompnay1,
    Exjob1,
    Exdesc1,
    Exyear2,
    Excompnay2,
    Exjob2,
    Exdesc2,
    Exyear3,
    Excompnay3,
    Exjob3,
    Exdesc3,
    Skillname,
    Skillprog,
    Skillname1,
    Skillprog1,
    Skillname2,
    Skillprog2,
    Skillname3,
    Skillprog3,
    Skillname4,
    Skillprog4,
    Skillname5,
    Skillprog5,
    Skillname6,
    Skillprog6,
    Skillname7,
    Skillprog7,
    Inters1,
    Inters2,
    Inters3,
    Inters4,
    Ref1,
    Ref1Com,
    Ref1Tel,
    Ref2,
    Ref2Com,
    Ref2Tel,
    Ref3,
    Ref3Com,
    Ref3Tel,
  } = req.body;
  try {
    const user = await Usermodel.singup(Email, Password, Magac);
    // create token
    const Token = CreateToken(user._id);
    //const User_Id = req.User._id
    const cv = await UsercvModel.create({
      User_Id: user._id,
      Name,
      Image,
      Location,
      CreatedAt,
      leval,
      Jobtitle,
      Tell,
      Cvemail,
      Edyear1,
      Eddesc1,
      Edunivername1,
      Edyear2,
      Eddesc2,
      Edunivername2,
      Edyear3,
      Eddesc3,
      Edunivername3,
      Langname1,
      Langprog1,
      Langname2,
      Langprog2,
      Langname3,
      Langprog3,
      Profile,
      Exyear1,
      Excompnay1,
      Exjob1,
      Exdesc1,
      Exyear2,
      Excompnay2,
      Exjob2,
      Exdesc2,
      Exyear3,
      Excompnay3,
      Exjob3,
      Exdesc3,
      Skillname,
      Skillprog,
      Skillname1,
      Skillprog1,
      Skillname2,
      Skillprog2,
      Skillname3,
      Skillprog3,
      Skillname4,
      Skillprog4,
      Skillname5,
      Skillprog5,
      Skillname6,
      Skillprog6,
      Skillname7,
      Skillprog7,
      Inters1,
      Inters2,
      Inters3,
      Inters4,
      Ref1,
      Ref1Com,
      Ref1Tel,
      Ref2,
      Ref2Com,
      Ref2Tel,
      Ref3,
      Ref3Com,
      Ref3Tel,
    });
    //res.status(200).json(cv)
    res.status(200).json({ Magac, Email, Token });
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.log(error.message);
  }
};

const Login = async (req, res) => {
  const { Email, Password } = req.body;
  try {
    const user = await Usermodel.Login(Email, Password);
    // create token
    const Token = CreateToken(user._id);
    //Get name of user
    const Magac = user.Magac;
    //console.log(user)
    res.cookie("Token", Token, {
      httpOnly: true,
      secure: false,
      maxAge: Epxin * 1000,
    });

    res.status(200).json({ Magac, Email, Token, Epxin });
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.log(error.message);
  }
};

const deleteUser = async (req, res) => {
  res.status(200).json({ Msg: "Good" });
};
const updateUser = async (req, res) => {
  res.status(200).json({ Msg: "Good" });
};

module.exports = {
  GetAllUser,
  Getone,
  singup,
  deleteUser,
  updateUser,
  Login,
};
