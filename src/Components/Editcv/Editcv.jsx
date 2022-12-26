import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { Navigate, useParams } from "react-router-dom"
import { useProtectedPage } from "../Context/Auth"
import CVdesign from "../CvDesign/Cvdesign"
import Footer from "../Footer/Footer"
import Nav from "../Nav/Nav"


function Editcv(){
    const {id} = useParams()
    const {CrentUser} = useProtectedPage()
    const [cv,setcv] = useState('')
    const fetchdata = async () => {
        try {

            const data = await axios.get(`http://localhost:8800/Api/getonecv/${id}`);
            if(data) return setcv(data.data)

        } catch(err){
            console.log(err)
        }
    }

    useEffect(() => {
        document.title = "Soomali cv | Pripare Cv"
        fetchdata()
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
                <p>Diyaarinta cv-ga {cv && cv[0].id}</p>
            </div>
        </div>
        </div>
        <CVdesign cv={cv}/>
        <Footer />
        </>
    )
}

export default Editcv