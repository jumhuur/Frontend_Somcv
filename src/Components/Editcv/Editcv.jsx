import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { Navigate, useParams } from "react-router-dom"
import { useProtectedPage } from "../Context/Auth"
import { Usecvcontext } from "../Context/Cv"
import CVdesign from "../CvDesign/Cvdesign"
import Footer from "../Footer/Footer"
import Nav from "../Nav/Nav"


function Editcv(){
    const {id} = useParams()
    const {CrentUser} = useProtectedPage()
    const {getonecv,onecv} = Usecvcontext()
    const [cv,setcv] = useState('')
    const fetchdata = async () => {
        try {

            const data = await fetch(`http://localhost:8080/Api/Cv/${id}`);
            data.json()
            .then((datacv) => {
                if(datacv) return setcv(datacv)
            })
            

        } catch(err){
            console.log(err)
        }
    }

    console.log(onecv)

    useEffect(() => {
        document.title = "Soomali cv | Pripare Cv"
        fetchdata()
        getonecv(id)
    },[CrentUser])

    return(
        <>
        {!CrentUser ?
        <Navigate to={"/"} /> 
        :<></>
        }
        <Nav />
        <div className="head_edit">
        <div className="haye">
            <div className="qoraal_edit">
                <p>Diyaarinta cv-ga {cv && cv._id}</p>
            </div>
        </div>
        </div>
        <CVdesign cv={cv}/>
        <Footer />
        </>
    )
}

export default Editcv