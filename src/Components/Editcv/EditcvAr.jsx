import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { Navigate, useParams } from "react-router-dom"
import { useProtectedPage } from "../Context/Auth"
import CVdesignAr from "../CvDesign/CvdesignAr"
import FooterAr from "../Footer/FooterAr"
import NavAr from "../Nav/NavAr"


function EditcvAR(){
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
        <Navigate to={"/ar"} /> 
        :<></>
        }
        <NavAr />
        <div className="head_edit" dir="rtl">
        <div className="haye">
            <div className="qoraal_edit">
                <p>صفحة التجهيز سيرة ذاتية {cv && cv[0].id}</p>
            </div>
        </div>
        </div>
        <CVdesignAr cv={cv}/>
        <FooterAr />
        </>
    )
}

export default EditcvAR