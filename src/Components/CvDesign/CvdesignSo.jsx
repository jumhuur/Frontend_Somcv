import { useEffect, useState} from "react"
import { useLocation } from "react-router-dom"
// import Pdf from "react-to-pdf";
import React from "react"
import { useProtectedPage } from "../Context/Auth"
import FeildsSo from "./inputesSo"
import TemplateSo from "./Template1/TempaleteSo";
import Template2So from "./Template2/Template2So";
import { Usecvcontext } from "../Context/Cv";
import html2canvas from "html2canvas"
import jsPDF from "jspdf"
import { useRef } from "react"
function CVdesignSo({cv}) {
    const [color1,setcolor1] = useState("#001d3d")
    const [color2,setcolor2] = useState("#4361ee")
    const {CrentUser} = useProtectedPage()
    const name_id = CrentUser && `${CrentUser.Name}_${CrentUser.Id}`;
    const {create_dowanload} = Usecvcontext()
    function Bugscroll(){
        const path = useLocation()
        useEffect (function(){
            window.scrollTo(0,0)
        },[path])
    }

    Bugscroll()
    // samaynta download pdf using html2canvas and jspdf
    const btn_download = useRef()
    const downloadPdf = () => {
        const cv = document.getElementById("leval1");
        html2canvas(cv,{logging: true, letterRendering: 1, useCORS: false, }).then(canvas => {
            const imgWidth = 208;
            const imgHeight = canvas.height * imgWidth / canvas.width;
            const imgData = canvas.toDataURL("img/png");
            const pdf = new jsPDF("p", "mm", "a4");
            pdf.addImage(imgData, "PNG", 0,0,imgWidth, imgHeight);
            pdf.save(`${name_id}.pdf`)
        })

        btn_download.current.click()
    }
    
    //pdf samayn 

    const ref = React.createRef()
    
    return (
        <>
        <div className="haye">
        <div ref={ref} className="design_cv_containers">
        <div className="leval1" id="leval1">
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
            <button  className="save_data" onClick={downloadPdf}><i className="fa-solid fa-download"></i> Download CV</button>
            <button ref={btn_download} onClick={create_dowanload} id="btn_download" hidden></button>
            </div>
            <FeildsSo color1={setcolor1} c1={color1}  color2={setcolor2} c2={color2} />
            </div>
            
        </div>   
        </div>

        </>
    )
}

export default CVdesignSo