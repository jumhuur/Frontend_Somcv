import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { useProtectedPage } from "../Context/Auth";
import { Usecvcontext } from "../Context/Cv";
import { Storage } from "../firebase";
function UpdateCv() {
  const [Onecv, setOnecv] = useState();
  const { Getallcv } = Usecvcontext();
  const { CrentUser } = useProtectedPage();
  const [Image, setimage] = useState("");
  const [filename, setfilename] = useState(null);
  const [done, setdone] = useState(false);
  const [qalad, setqalad] = useState("");
  const image = useRef();
  const location = useNavigate();
  const [cvinfo, setcvinfo] = useState();
  const { Id } = useParams();
  const ObjCvinfo = {
    Magac: cvinfo && cvinfo.Magac,
    Qiimaha: cvinfo && cvinfo.Qiimaha,
    Image: Image,
  };

  console.log("Objccv", ObjCvinfo);
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
    console.log(cvinfo);
  }

  const GetInfoCv = async () => {
    const date = await fetch(`http://localhost:8800/Api/Cv/${Id}`);
    const json = date.json().then((data) => {
      setcvinfo(data);
    });
  };
  const addcv = async (e) => {
    e.preventDefault();
    const data = await fetch(`http://localhost:8800/Api/Updatecv/${Id}`, {
      method: "PATCH",
      body: JSON.stringify(cvinfo),
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearar ${CrentUser.Token}`,
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
          setdone(true);
        });
      }
    );
  };

  const Onchange_inputs = (e) => {
    setcvinfo((perv) => ({ ...perv, [e.target.name]: e.target.value }));
  };
  useEffect(() => {
    GetInfoCv();
  }, []);
  return (
    <>
      <div className="container_login">
        <div className="login_card">
          <form className="login_from">
            <span className="welcome">Add New Cv Design</span>
            <input
              value={ObjCvinfo && ObjCvinfo.Magac}
              onChange={Onchange_inputs}
              type={"text"}
              placeholder="Magacaaga"
              name="Magac"
            />
            <input
              value={ObjCvinfo && ObjCvinfo.Qiimaha}
              onChange={Onchange_inputs}
              type={"number"}
              placeholder="Price"
              name="Qiimaha"
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
                <p className="file_name_and_zise">Upload is done</p>
              ) : (
                <p className="file_name_and_zise">Upload Your Image</p>
              )}
            </div>

            <button type="submit" onClick={addcv} className="submit_btn">
              <Link>Update</Link>
            </button>
            {qalad && <span className="Massage">{qalad}</span>}
            <Link to={"/"}>
              <span>Home page</span>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}

export default UpdateCv;
