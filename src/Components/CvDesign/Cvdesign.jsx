import { useEffect, useState} from "react"
import { useLocation } from "react-router-dom"
import Feilds from "./inputes"
import Template from "./Template1/Tempalete"
import Template2 from "./Template2/Template2"
// import Pdf from "react-to-pdf";
import React from "react"
import Template3 from "./Template3/Template3"
import { Usecvcontext } from "../Context/Cv"
function CVdesign({cv}) {
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
        <div className="haye">
        <div ref={ref} className="design_cv_containers">
        <div className="leval1">
            { cv && cv[0].id === 1615 ?
           
            <Template cv={cv} color1={color1} color2={color2}/>
            : cv && cv[0].id === 1616 ?
            <Template2 cv={cv} color1={color1} color2={color2}/>
            :cv && cv[0].id === 1617 ? 
            <Template3 cv={cv} color1={color1} color2={color2}/>
            :
            <></>
            }
            </div>
            <div className="previewcv">
            <div className="C_download">
            {/* <Pdf targetRef={ref} filename={name_id}>
            {({toPdf}) => 
            <button onClick={toPdf} className="save_data">
            <i className="fa-solid fa-download"></i> Download CV
            </button>}
            </Pdf> */}
            <button onClick={create_dowanload}><i className="fa-solid fa-download"></i> Download CV</button>
            </div>

            <Feilds color1={setcolor1} c1={color1}  color2={setcolor2} c2={color2} />
            </div>
            
        </div>   
        </div>

        </>
    )
}

export default CVdesign