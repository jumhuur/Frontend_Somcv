import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
// import Pdf from "react-to-pdf";
import React from "react";
import { useProtectedPage } from "../Context/Auth";
import TemplateAr from "./Template1/TempaleteAr";
import FeildsAr from "./inputesAr";
import Template2Ar from "./Template2/Template2Ar";
import { Usecvcontext } from "../Context/Cv";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import Template3 from "./Template3/Template3";
import NativicationsAr from "../Nativications/NativicationAr";
import { UseDawnload } from "../Hooks/Download";
function CVdesignAr({ cv }) {
  const [color1, setcolor1] = useState("#001d3d");
  const [color2, setcolor2] = useState("#4361ee");
  const { CrentUser } = useProtectedPage();
  const { create_dowanload, updateDone } = Usecvcontext();
  const { Download } = UseDawnload();
  const date = new Date();
  const Sanad = date.getFullYear();
  const Milisecconds = date.getMilliseconds();
  const name_id = CrentUser && `${CrentUser.Magac}_${Sanad}_${Milisecconds}`;
  const Price = cv && cv.Qiimaha;
  const Name = CrentUser && `${CrentUser.Magac}`;

  function Bugscroll() {
    const path = useLocation();
    useEffect(
      function () {
        window.scrollTo(0, 0);
      },
      [path]
    );
  }

  Bugscroll();

  // samaynta download pdf using html2canvas and jspdf
  const btn_download = useRef();
  const downloadPdf = () => {
    const cv = document.getElementById("leval1");
    html2canvas(cv, { logging: true, letterRendering: 1, useCORS: true }).then(
      (canvas) => {
        const imgWidth = 208;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        const imgData = canvas.toDataURL("img/png");
        const pdf = new jsPDF("p", "mm", "a4");
        pdf.addImage(imgData, "PNG", 2.2, 0, imgWidth, imgHeight);
        pdf.save(`${name_id}.pdf`);
        Download(Name, Price);
      }
    );

    btn_download.current.click();
  };
  //pdf samayn

  const ref = React.createRef();

  return (
    <>
      <div className="haye" dir="rtl">
        <div className="design_cv_containers" dir="rtl">
          <div ref={ref} className="leval1" id="leval1" dir="rtl">
            {cv && cv._id === "66b4de136bfa0197afcc1628" ? (
              <TemplateAr cv={cv} color1={color1} color2={color2} />
            ) : cv && cv._id === "63b01e5f71489ef1e996d28d" ? (
              <Template2Ar cv={cv} color1={color1} color2={color2} />
            ) : cv && cv._id === "63b01da971489ef1e996d282" ? (
              <Template3 cv={cv} color1={color1} color2={color2} />
            ) : (
              <></>
            )}
            {updateDone && <NativicationsAr />}
          </div>
          <div className="previewcv">
            <div className="C_download">
              {/* <Pdf targetRef={ref} filename={name_id}>
            {({toPdf}) => 
            <button onClick={toPdf} className="save_data">
            <i className="fa-solid fa-download"></i> حمل السيرة الذاتية
            </button>}
            </Pdf> */}
              <button className="save_data" onClick={downloadPdf}>
                <i className="fa-solid fa-download"></i> حمل السيرة الذاتية
              </button>
              <button
                hidden
                ref={btn_download}
                onClick={create_dowanload}
              ></button>
            </div>
            <FeildsAr
              color1={setcolor1}
              c1={color1}
              color2={setcolor2}
              c2={color2}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default CVdesignAr;
