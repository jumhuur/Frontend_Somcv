import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { Navigate, useParams } from "react-router-dom"
import { useProtectedPage } from "../Context/Auth"
import CVdesignSo from "../CvDesign/CvdesignSo"
import FooterSo from "../Footer/FooterSo"
import NavSo from "../Nav/NavSo"


function EditcvSo(){
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
        fetchdata()
    },[CrentUser])

    return(
        <>
        {!CrentUser ?
        <Navigate to={"/so"} /> 
        :<></>
        }
        <NavSo />
        <div className="head_edit">
        <div className="haye">
            <div className="qoraal_edit">
                <p>Diyaarinta cv-ga {cv && cv[0].id}</p>
            </div>
        </div>
        </div>
        <CVdesignSo cv={cv}/>
        <FooterSo />
        </>
    )
}

export default EditcvSo