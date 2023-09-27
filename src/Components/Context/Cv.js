import React, { useContext, useEffect, useReducer, useState } from "react";
import { useProtectedPage } from "./Auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { Storage } from "../firebase";
import { CvRadiuse, INITIAL_STATE, ACTIONS } from "../Hooks/Rediuses";
const Cvcontext = React.createContext();
// isticmaalka context-ga
export function Usecvcontext() {
  return useContext(Cvcontext);
}

export function CvcontextProvaider({ children }) {
  const [state, dispatch] = useReducer(CvRadiuse, INITIAL_STATE);
  const { CrentUser } = useProtectedPage();
  const [cv, setcv] = useState(null);
  const [Allusers, setUsers] = useState(null);
  const [download_info, setdownload_info] = useState({
    Name: CrentUser && CrentUser._id,
    Lacagta: cv && cv.Price,
  });
  const [download, setdownload] = useState();
  const [image, setimage] = useState("/Images/User.png");
  const [progimg, setProgimg] = useState("");
  const [done, setdone] = useState(false);
  const [updateDone, setUpdatedone] = useState(false);
  const Id = CrentUser && CrentUser.Email;
  const [filename, setfilename] = useState(null);
  const [info, setinfo] = useState({
    Name: "",
    Jobtitle: "",
    Tell: "",
    Location: "",
    Cvemail: "",
    Image: ``,
    Edyear1: "",
    Eddesc1: "",
    Edunivername1: "",
    Edyear2: "",
    Eddesc2: "",
    Edunivername2: "",
    Edyear3: "",
    Eddesc3: "",
    Edunivername3: "",
    Langname1: "",
    Langprog1: "",
    Langname2: "",
    Langprog2: "",
    Langname3: "",
    Langprog3: "",
    Profile: "",
    Exyear1: "",
    Excompnay1: "",
    Exjob1: "",
    Exdesc1: "",
    Exyear2: "",
    Excompnay2: "",
    Exjob2: "",
    Exdesc2: "",
    Exyear3: "",
    Excompnay3: "",
    Exjob3: "",
    Exdesc3: "",
    Skillname: "",
    Skillprog: "",
    Skillname1: "",
    Skillprog1: "",
    Skillname2: "",
    Skillprog2: "",
    Skillname3: "",
    Skillprog3: "",
    Skillname4: "",
    Skillprog4: "",
    Skillname5: "",
    Skillprog5: "",
    Skillname6: "",
    Skillprog6: "",
    Skillname7: "",
    Skillprog7: "",
    Inters1: "",
    Inters2: "",
    Inters3: "",
    Inters4: "",
    Color1: "",
    Color2: "",
  });

  const Onchange_inputs = (e) => {
    setinfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setUpdatedone(false);
    console.log(info);
  };

  const storageRef = ref(Storage, `images/${Id}${image.name}`);
  const uploadcvimage = () => {
    const uploadTask = uploadBytesResumable(storageRef, image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgimg(progress.toFixed(1));
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
          info.Image = downloadURL;
          setdone(true);
        });
      }
    );
  };

  const Closenativations = () => {
    setInterval(() => {
      setUpdatedone(false);
    }, 7000);
  };

  const HangdaleUpdate = async (e) => {
    e.preventDefault();
    const data = await fetch(
      `https://frontend-somcv.vercel.app/Api/UpdateUsercv/${info._id}`,
      {
        method: "PATCH",
        body: JSON.stringify(info),
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearar ${CrentUser.Token}`,
        },
      }
    );
    const json = data.json();
    if (!data.ok) {
      console.log(json.Fariin);
    }
    if (data.ok) {
      setUpdatedone(true);
      Closenativations();
      setdone(false);
      setfilename(null);
    }
  };

  const Onchange_inputs_download = (e) => {
    setdownload_info((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // const create_dowanload = async(e) => {
  // e.preventDefault()
  // try{
  //   await axios.post("http://localhost:8800/Api/downloads/", download_info)
  // } catch(err){
  //   console.log(err)
  // }
  // }
  // GET ALL DATA CVS
  const Getallcv = async () => {
    const response = await fetch("https://frontend-somcv.vercel.app/Api/Allcv");
    const response1 = await fetch(
      "https://frontend-somcv.vercel.app/Api/AllUser"
    );
    const response2 = await fetch(
      "https://frontend-somcv.vercel.app/Api/Downloads"
    );
    const response3 = await fetch(
      "https://frontend-somcv.vercel.app/Api/OneUser",
      {
        headers: {
          authorization: `Bearar ${CrentUser && CrentUser.Token}`,
        },
      }
    );
    const res = await response.json();
    const res1 = await response1.json();
    const res2 = await response2.json();
    const res3 = await response3.json();
    if (response.ok) {
      dispatch({
        type: ACTIONS.GET_DATA,
        payload: res,
        AllUsers: res1,
        Downloads: res2,
        Onecv: res3[0],
      });
      //setinfo(state.OnecvUser)
    }
  };

  const GetInfoCv = async () => {
    const response3 = await fetch("http://localhost:8800/Api/OneUser", {
      headers: {
        authorization: `Bearar ${CrentUser && CrentUser.Token}`,
      },
    });
    const json = response3.json().then((data) => {
      setinfo(data[0]);
    });
  };

  const value = {
    cv,
    Allusers,
    HangdaleUpdate,
    Onchange_inputs,
    uploadcvimage,
    download,
    Onchange_inputs_download,
    Getallcv,
    info,
    done,
    setdone,
    progimg,
    setimage,
    state,
    setinfo,
    GetInfoCv,
    uploadcvimage,
    updateDone,
    filename,
    setfilename,
  };
  useEffect(() => {
    setcv(state.allcv);
    setUsers(state.AllUsers);
    setdownload(state.AllDownloads);
  });

  useEffect(() => {
    GetInfoCv();
  }, []);

  useEffect(() => {
    Getallcv();
  }, []);
  return <Cvcontext.Provider value={value}>{children}</Cvcontext.Provider>;
}
