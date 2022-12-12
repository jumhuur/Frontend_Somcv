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
    const [cv,setcv] = useState()
    const [download_info,setdownload_info] = useState({
      Name:CrentUser && CrentUser.Name,
      Lacagta:cv && cv.Price
    })
    const [download,setdownload] = useState();
    const [image ,setimage] = useState("")
    const [progimg ,setProgimg] = useState('');
    const [done,setdone] = useState(false)
    const Id = CrentUser && CrentUser.Id
    const [info,setinfo] = useState({
        Name:CrentUser && CrentUser.Name,
        Jobtitle: CrentUser && CrentUser.Jobtitle,
        Tell: CrentUser && CrentUser.Tell,
        Location: CrentUser && CrentUser.Location,
        Cvemail: CrentUser && CrentUser.Cvemail,
        Image: CrentUser && CrentUser.Image,
        Edyear1: CrentUser && CrentUser.Edyear1,
        Eddesc1: CrentUser && CrentUser.Eddesc1,
        Edunivername1: CrentUser && CrentUser.Edunivername1,
        Edyear2: CrentUser && CrentUser.Edyear2,
        Eddesc2: CrentUser && CrentUser.Eddesc2,
        Edunivername2: CrentUser && CrentUser.Edunivername2,
        Edyear3: CrentUser && CrentUser.Edyear3,
        Eddesc3: CrentUser && CrentUser.Eddesc3,
        Edunivername3: CrentUser && CrentUser.Edunivername3,
        Langname1: CrentUser && CrentUser.Langname1,
        Langprog1: CrentUser && CrentUser.Langprog1,
        Langname2: CrentUser && CrentUser.Langname2,
        Langprog2: CrentUser && CrentUser.Langprog2,
        Langname3: CrentUser && CrentUser.Langname3,
        Langprog3: CrentUser && CrentUser.Langprog3,
        Profile: CrentUser && CrentUser.Profile,
        Exyear1: CrentUser && CrentUser.Exyear1,
        Excompnay1: CrentUser && CrentUser.Excompnay1,
        Exjob1: CrentUser && CrentUser.Exjob1,
        Exdesc1: CrentUser && CrentUser.Exdesc1,
        Exyear2: CrentUser && CrentUser.Exyear2,
        Excompnay2: CrentUser && CrentUser.Excompnay2,
        Exjob2: CrentUser && CrentUser.Exjob2,
        Exdesc2: CrentUser && CrentUser.Exdesc2,
        Exyear3: CrentUser && CrentUser.Exyear3,
        Excompnay3: CrentUser && CrentUser.Excompnay3,
        Exjob3: CrentUser && CrentUser.Exjob3,
        Exdesc3: CrentUser && CrentUser.Exdesc3,
        Skillname: CrentUser && CrentUser.Skillname,
        Skillprog: CrentUser && CrentUser.Skillprog,
        Skillname1: CrentUser && CrentUser.Skillname1,
        Skillprog1: CrentUser && CrentUser.Skillprog1,
        Skillname2: CrentUser && CrentUser.Skillname2,
        Skillprog2: CrentUser && CrentUser.Skillprog2,
        Skillname3: CrentUser && CrentUser.Skillname3,
        Skillprog3: CrentUser && CrentUser.Skillprog3,
        Skillname4: CrentUser && CrentUser.Skillname4,
        Skillprog4: CrentUser && CrentUser.Skillprog4,
        Skillname5: CrentUser && CrentUser.Skillname5,
        Skillprog5: CrentUser && CrentUser.Skillprog5,
        Skillname6: CrentUser && CrentUser.Skillname6,
        Skillprog6: CrentUser && CrentUser.Skillprog6,
        Skillname7: CrentUser && CrentUser.Skillname7,
        Skillprog7: CrentUser && CrentUser.Skillprog7,
        Inters1: CrentUser && CrentUser.Inters1,
        Inters2: CrentUser && CrentUser.Inters2,
        Inters3: CrentUser && CrentUser.Inters3,
        Inters4: CrentUser && CrentUser.Inters4,
    })


    
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
        try{
            await axios.put(`http://localhost:8800/Api/update/${CrentUser.Id}`, info)
            get()
        } catch(err){
            console.log(err)
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
        const data = await axios.get('http://localhost:8800/Api/cvs')
        return setcv(data.data)
    }
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
    }
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