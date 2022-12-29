import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useProtectedPage } from "./Auth";
import {ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import {Storage} from "../firebase";
const Cvcontext = React.createContext()
// isticmaalka context-ga 
export function Usecvcontext(){
    return useContext(Cvcontext)
}

export function CvcontextProvaider({children}) {
    const {CrentUser,get} = useProtectedPage()
    const [cv,setcv] = useState(null)
    const [download_info,setdownload_info] = useState({
      Name:CrentUser && CrentUser.Name,
      Lacagta:cv && cv.Price
    })
    const [onecv,setOneCv] = useState(null)
    const [download,setdownload] = useState();
    const [image ,setimage] = useState("")
    const [progimg ,setProgimg] = useState('');
    const [done,setdone] = useState(false)
    const Id = CrentUser && CrentUser.Id
    const info_user = useState([CrentUser])
    onecv && localStorage.setItem('cv', null)
    const [info,setinfo] = useState({
      Name: onecv && onecv.Magac,
      Jobtitle:onecv && onecv.Jobtitle,
      Tell: onecv && onecv.Tell,
      Location: onecv && onecv.Location,
      Cvemail: onecv && onecv.Cvemail,
      Image: onecv && onecv.Image,
      Edyear1: onecv && onecv.Edyear1,
      Eddesc1: onecv && onecv.Eddesc1,
      Edunivername1: onecv && onecv.Edunivername1,
      Edyear2: onecv && onecv.Edyear2,
      Eddesc2: onecv && onecv.Eddesc2,
      Edunivername2: onecv && onecv.Edunivername2,
      Edyear3: onecv && onecv.Edyear3,
      Eddesc3: onecv && onecv.Eddesc3,
      Edunivername3: onecv && onecv.Edunivername3,
      Langname1: onecv && onecv.Langname1,
      Langprog1: onecv && onecv.Langprog1,
      Langname2: onecv && onecv.Langname2,
      Langprog2: onecv && onecv.Langprog2,
      Langname3: onecv && onecv.Langname3,
      Langprog3: onecv && onecv.Langprog3,
      Profile: onecv && onecv.Profile,
      Exyear1: onecv && onecv.Exyear1,
      Excompnay1: onecv && onecv.Excompnay1,
      Exjob1: onecv && onecv.Exjob1,
      Exdesc1: onecv && onecv.Exdesc1,
      Exyear2: onecv && onecv.Exyear2,
      Excompnay2: onecv && onecv.Excompnay2,
      Exjob2: onecv && onecv.Exjob2,
      Exdesc2: onecv && onecv.Exdesc2,
      Exyear3: onecv && onecv.Exyear3,
      Excompnay3: onecv && onecv.Excompnay3,
      Exjob3: onecv && onecv.Exjob3,
      Exdesc3: onecv && onecv.Exdesc3,
      Skillname: onecv && onecv.Skillname,
      Skillprog: onecv && onecv.Skillprog,
      Skillname1: onecv && onecv.Skillname1,
      Skillprog1: onecv && onecv.Skillprog1,
      Skillname2: onecv && onecv.Skillname2,
      Skillprog2: onecv && onecv.Skillprog2,
      Skillname3: onecv && onecv.Skillname3,
      Skillprog3: onecv && onecv.Skillprog3,
      Skillname4: onecv && onecv.Skillname4,
      Skillprog4: onecv && onecv.Skillprog4,
      Skillname5: onecv && onecv.Skillname5,
      Skillprog5: onecv && onecv.Skillprog5,
      Skillname6: onecv && onecv.Skillname6,
      Skillprog6: onecv && onecv.Skillprog6,
      Skillname7: onecv && onecv.Skillname7,
      Skillprog7: onecv && onecv.Skillprog7,
      Inters1: onecv && onecv.Inters1,
      Inters2: onecv && onecv.Inters2,
      Inters3: onecv && onecv.Inters3,
      Inters4: onecv && onecv.Inters4,
  })
  console.log(onecv)


    
const storageRef = ref(Storage, `images/${image.name}${Id}`);

const uploadcvimage = () => {
const uploadTask = uploadBytesResumable(storageRef, image);
uploadTask.on('state_changed', 
  (snapshot) => {
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    setProgimg(progress.toFixed(1))
    console.log('Upload is ' + progress + '% done');
    switch (snapshot.state) {
      case 'paused':
        console.log('Upload is paused');
        break;
      case 'running':
        console.log('Upload is running');
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
      console.log('File available at', downloadURL);
      info.Image = downloadURL
      setdone(true)
    });
  }
);
}






const Onchange_inputs =(e) => {
    setinfo((prev) => ({...prev, [e.target.name]:e.target.value }))
}
const HangdaleUpdate =  async(e) => {
    e.preventDefault()
    const data =  await fetch(`http://localhost:8080/Api/Updatecv/${info._id}`,{
      method: 'PATCH',
      body: JSON.stringify(info),
      headers: {
          'Content-Type':'application/json'
      }
    })
    const json = data.json()
    if(!data.ok){
      console.log(json.Fariin)
    }
    if(data.ok){
      console.log('updated')
      //get()
    }

}

const Onchange_inputs_download = (e) => {
setdownload_info((prev) => ({...prev, [e.target.name]:e.target.value }))
}

const create_dowanload = async(e) => {
e.preventDefault()
try{
  await axios.post("http://localhost:8800/Api/downloads/", download_info)


} catch(err){
  console.log(err)
}
}
    
    // GET ALL DATA CVS
    const Getallcv = async () => {
        const response = await fetch('http://localhost:8080/Api/Allcv')
        response.json()
        .then((data) => {
          setcv(data)   
        })
    }

    // get one cv 
    const getonecv = async(id) => {
      const jawaab = await fetch(`http://localhost:8080/Api/Cv/${id}`)
      jawaab.json()
      .then((data) => {
        setOneCv(data)
      })

    }
    // get all downloads
    const getalldownloads = async () => {
      const data = await axios.get("http://localhost:8800/Api/Alldownloads");
      return setdownload(data.data)
    }
    const value = {
        cv,
        Onchange_inputs,
        HangdaleUpdate,
        info,
        uploadcvimage,
        setimage,
        progimg,
        done,
        setdone,
        download,
        Onchange_inputs_download,
        create_dowanload,
        //getsingalcv
        getonecv,
        onecv,
    }

    useEffect(() => {
      setinfo(info && JSON.parse(localStorage.getItem('cv')))
    },[onecv])
    useEffect(() => {
        Getallcv()
        getalldownloads()
    },[])
    return (
        <Cvcontext.Provider value={value}>
            {children}
        </Cvcontext.Provider>
    )
}