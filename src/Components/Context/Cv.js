import axios from "axios";
import React, { useContext, useEffect, useReducer, useState } from "react";
import { useProtectedPage } from "./Auth";
import {ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import {Storage} from "../firebase";
import {CvRadiuse,INITIAL_STATE,ACTIONS} from "../Hooks/Rediuses"
const Cvcontext = React.createContext()
// isticmaalka context-ga 
export function Usecvcontext(){
    return useContext(Cvcontext)
}

export function CvcontextProvaider({children}) {
  const  [state, dispatch] = useReducer(CvRadiuse, INITIAL_STATE)
    const {CrentUser} = useProtectedPage()
    const [cv,setcv] = useState(null)
    const [Allusers,setUsers] = useState(null)
    const [download_info,setdownload_info] = useState({
      Name:CrentUser && CrentUser._id,
      Lacagta:cv && cv.Price
    })
    const [download,setdownload] = useState();
    const [image ,setimage] = useState("")
    const [progimg ,setProgimg] = useState('');
    const [done,setdone] = useState(false)
    const Id = CrentUser && CrentUser._id
        const [info,setinfo] = useState({
        Name: '',
        Jobtitle:'',
        Tell: '',
        Location:'',
        Cvemail: '',
        Image: ``,
        Edyear1: '',
        Eddesc1: '',
        Edunivername1: '',
        Edyear2: '',
        Eddesc2: '',
        Edunivername2: '',
        Edyear3: '',
        Eddesc3: '',
        Edunivername3: '',
        Langname1:'',
        Langprog1: '',
        Langname2: '',
        Langprog2: '',
        Langname3: '',
        Langprog3: '',
        Profile: '',
        Exyear1: '',
        Excompnay1: '',
        Exjob1: '',
        Exdesc1: '',
        Exyear2: '',
        Excompnay2: '',
        Exjob2:'',
        Exdesc2: '',
        Exyear3:'',
        Excompnay3: '',
        Exjob3: '',
        Exdesc3: '',
        Skillname: '',
        Skillprog: '',
        Skillname1: '',
        Skillprog1: '',
        Skillname2: '',
        Skillprog2: '',
        Skillname3: '',
        Skillprog3: '',
        Skillname4: '',
        Skillprog4: '',
        Skillname5: '',
        Skillprog5: '',
        Skillname6: '',
        Skillprog6: '',
        Skillname7: '',
        Skillprog7: '',
        Inters1: '',
        Inters2: '',
        Inters3: '',
        Inters4: '',
    })
    // const Fetch = async() => {
    //     try{
    //     } catch(err){
    //         console.log(err)
    //     }
    // }


  const Onchange_inputs =(e) => {
      setinfo((prev) => ({...prev, [e.target.name]:e.target.value }))
  }
  // const [c01,setc01] = useState("")
  // function onchange({target}){
  //     let file = target.files[0];
  //     if(file){
  //         let file_name = file.name.substring(0,30);
  //         //let file_zise = file.size / 1024 / 1024
  //         //let file_time = file.duration;
  //         const arrsplited = []
  //         arrsplited.push(file_name.split("."))
  //         console.log(arrsplited.length)
  //         setfilename(file_name.substring(0,10))
  //     }
  //     setimage(file)
  // }



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






const HangdaleUpdate =  async(e) => {
    e.preventDefault()
    const data =  await fetch(`http://localhost:8080/Api/UpdateUsercv/${info._id}`,{
      method: 'PATCH',
      body: JSON.stringify(info),
      headers: {
          'Content-Type':'application/json',
          'authorization': `Bearar ${CrentUser.Token}`
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
      const Getallcv = async() => {
        const response = await fetch('http://localhost:8080/Api/Allcv')
        const response1 = await fetch('http://localhost:8080/Api/AllUser')
        const response2 = await fetch('http://localhost:8080/Api/Downloads')
        const response3 = await fetch("http://localhost:8080/Api/OneUser", {
          headers: {
            'authorization': `Bearar ${CrentUser && CrentUser.Token}`
          }
        })
        const res = await response.json()
        const res1 = await response1.json()
        const res2 = await response2.json()
        const res3 = await response3.json()
        if(response.ok){
          dispatch({type: ACTIONS.GET_DATA , payload:res, AllUsers:res1, Downloads:res2, Onecv:res3[0]})
          //setinfo(state.OnecvUser)
        }
      }

      const GetInfoCv = async() => {
        const response3 = await fetch("http://localhost:8080/Api/OneUser", {
            headers: {
              'authorization': `Bearar ${CrentUser && CrentUser.Token}`
            }
          })
        const json = response3.json()
        .then((data) => {
            setinfo(data[0])
        })
    }
    
    const value = {
        cv,
        Allusers,
        HangdaleUpdate,
        Onchange_inputs,
        uploadcvimage,
        download,
        Onchange_inputs_download,
        create_dowanload,
        Getallcv,
        info,
        done,
        setdone,
        progimg,
        setimage,
        state,
        setinfo,
        GetInfoCv,
        uploadcvimage
    }
    useEffect(() => {
      setcv(state.allcv)
      setUsers(state.AllUsers)
      setdownload(state.AllDownloads)
    })

    useEffect(() => {
      GetInfoCv()
    },[])

    useEffect(() => {
    Getallcv()
    },[])
    return (
        <Cvcontext.Provider value={value}>
            {children}
        </Cvcontext.Provider>
    )
}