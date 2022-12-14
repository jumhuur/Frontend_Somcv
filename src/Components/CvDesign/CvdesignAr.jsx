import { useEffect, useState} from "react"
import { useLocation } from "react-router-dom"
// import Pdf from "react-to-pdf";
import React from "react"
// import { useProtectedPage } from "../Context/Auth"
import TemplateAr from "./Template1/TempaleteAr"
import FeildsAr from "./inputesAr";
import Template2Ar from "./Template2/Template2Ar";
import { Usecvcontext } from "../Context/Cv";
function CVdesignAr({cv}) {
    const [color1,setcolor1] = useState("#001d3d")
    const [color2,setcolor2] = useState("#4361ee")
    // const {CrentUser} = useProtectedPage()
    const {create_dowanload} = Usecvcontext()
    // const name_id = CrentUser && `${CrentUser.Name}_${CrentUser.Id}`;
    function Bugscroll(){
        const path = useLocation()
        useEffect (function(){
            window.scrollTo(0,0)
        },[path])
    }

    Bugscroll()

    
    //pdf samayn 

    const ref = React.createRef()
    
    return (
        <>
        <div className="haye" dir="rtl">
        <div  className="design_cv_containers" dir="rtl">
            <div  ref={ref} className="leval1" dir="rtl">
            { cv && cv[0].id === 1615 ?
            <TemplateAr cv={cv} color1={color1} color2={color2}/>
            : cv && cv[0].id === 1616 ?
            <Template2Ar cv={cv} color1={color1} color2={color2}/>
            :
            <></>
            }
            </div>
            <div className="previewcv">
            <div className="C_download">
            {/* <Pdf targetRef={ref} filename={name_id}>
            {({toPdf}) => 
            <button onClick={toPdf} className="save_data">
            <i className="fa-solid fa-download"></i> حمل السيرة الذاتية
            </button>}
            </Pdf> */}
             <button onClick={create_dowanload}><i className="fa-solid fa-download"></i> Download CV</button>
            </div>
            <FeildsAr color1={setcolor1} c1={color1}  color2={setcolor2} c2={color2}/>
            </div>
        </div>   
        </div>

        </>
    )
}

export default CVdesignAr