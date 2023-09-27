import axios from "axios";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useRef } from "react";
import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useProtectedPage } from "../Context/Auth";
import { Usecvcontext } from "../Context/Cv";
import { Storage } from "../firebase";

function AddcvAr() {
  const { Getallcv } = Usecvcontext();
  const { CrentUser } = useProtectedPage();
  const [qalad, setqalad] = useState("");
  const location = useNavigate();
  const [Image, setimage] = useState("");
  const [filename, setfilename] = useState(null);
  const [done, setdone] = useState(false);
  const [err, seterr] = useState("");
  const image = useRef();
  const [cvinfo, setcvinfo] = useState({
    Name: "",
    Price: "",
    Image: Image,
    Imagecover: "",
  });

  const upload_img = () => {
    image.current.click();
  };
  function onchange({ target }) {
    let file = target.files[0];
    if (file) {
      let file_name = file.name.substring(0, 30);
      //let file_zise = file.size / 1024 / 1024
      //let file_time = file.duration;
      const arrsplited = [];
      arrsplited.push(file_name.split("."));
      console.log(arrsplited.length);
      setfilename(file_name.substring(0, 10));
    }
    setimage(file);
    console.log(Image);
  }

  const addcv = async (e) => {
    e.preventDefault();
    const data = await fetch("https://frontend-somcv.vercel.app/Api/Addcv", {
      method: "POST",
      body: JSON.stringify(cvinfo),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await data.json();
    if (!data.ok) {
      setqalad(json.Fariin[1]);
      console.log(json.Fariin[2]);
    }

    if (data.ok) {
      setqalad(null);
      Getallcv();
      location("/");
    }
  };

  const storageRef = ref(Storage, `Cvimages/${Date.now()}${Image.name}`);

  const uploadcvimage = () => {
    const uploadTask = uploadBytesResumable(storageRef, Image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          cvinfo.Image = downloadURL;
          console.log(Image);
          console.log(cvinfo.Image);
          setdone(true);
        });
      }
    );
  };

  const Onchange_inputs = (e) => {
    setcvinfo((perv) => ({ ...perv, [e.target.name]: e.target.value }));
    console.log(cvinfo);
  };
  return (
    <>
      {!CrentUser ? <Navigate to="/ar" /> : <></>}
      <>
        {CrentUser && CrentUser.leval !== "Mamul" ? (
          <>
            <Navigate to="/ar" />
          </>
        ) : (
          <></>
        )}
      </>
      <div className="container_login" dir="rtl">
        <div className="login_card">
          <form className="login_from">
            <span className="welcome">شكل سيرة ذاتية جديدة</span>
            <input
              onChange={Onchange_inputs}
              type={"text"}
              placeholder="اسم "
              name="Name"
            />
            <input
              onChange={Onchange_inputs}
              type={"number"}
              placeholder="القيمة"
              name="Price"
            />
            <input
              onChange={function (e) {
                setimage(`${e.target.files[0].name}`);
                uploadcvimage();
              }}
              ref={image}
              onInput={onchange}
              type="file"
              placeholder="Image"
              name="Image"
              hidden
            />
            <div onClick={upload_img} className="upload" type={"submit"}>
              <i className="fa-solid fa-circle-up"></i>
              {done ? (
                <p className="file_name_and_zise">تم رفع الصورة</p>
              ) : (
                <p className="file_name_and_zise">إختر الصورة</p>
              )}
            </div>

            <button onClick={addcv} className="submit_btn">
              <Link to={"/ar"}>Add Cv</Link>
            </button>
            {qalad && <span className="Massage">{qalad}</span>}
            <Link to={"/ar"}>
              <span>الصفحة الرئيسة</span>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddcvAr;
