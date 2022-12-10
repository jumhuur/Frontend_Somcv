import { useEffect, useState} from "react"
import { useLocation } from "react-router-dom"
// import Pdf from "react-to-pdf";
import React from "react"
import { useProtectedPage } from "../Context/Auth"
import FeildsSo from "./inputesSo"
import TemplateSo from "./Template1/TempaleteSo";
import Template2So from "./Template2/Template2So";
function CVdesignSo({cv}) {
    const [color1,setcolor1] = useState("#001d3d")
    const [color2,setcolor2] = useState("#4361ee")
    const {CrentUser} = useProtectedPage()
    const name_id = CrentUser && `${CrentUser.Name}_${CrentUser.Id}`;
    function Bugscroll(){
        const path = useLocation()
        useEffect (function(){
            window.scrollTo(0,0)
        },[path])
        console.log('scrolled')
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
            <TemplateSo cv={cv} color1={color1} color2={color2}/>
            : cv && cv[0].id === 1616 ?
            <Template2So cv={cv} color1={color1} color2={color2} />
            :
            <></>
            }
        </div>
            <div className="previewcv">
            <div className="C_download">
            {/* <Pdf targetRef={ref} filename={name_id}>
            {({toPdf}) => 
            <button onClick={toPdf} className="save_data">
            <i className="fa-solid fa-download"></i> Dajiso CV-ga
            </button>}
            </Pdf> */}
            </div>
            <FeildsSo color1={setcolor1} c1={color1}  color2={setcolor2} c2={color2} />
            </div>
            
        </div>   
        </div>

        </>
    )
}

export default CVdesignSo