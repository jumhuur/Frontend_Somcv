import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Feilds from "./inputes";
import Template from "./Template1/Tempalete";
import Template2 from "./Template2/Template2";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
// import Pdf from "react-to-pdf";
import React from "react";
import Template3 from "./Template3/Template3";
import { Usecvcontext } from "../Context/Cv";
import { useProtectedPage } from "../Context/Auth";
import { useRef } from "react";
import { UseDawnload } from "../Hooks/Download";
import Nativications from "../Nativications/Nativication";
function CVdesign({ cv }) {
  const [color1, setcolor1] = useState("#001d3d");
  const [color2, setcolor2] = useState("#4361ee");
  const { CrentUser } = useProtectedPage();
  const { create_dowanload, updateDone, Closenativations } = Usecvcontext();
  const { Download } = UseDawnload();
  const name_id = CrentUser && `${CrentUser.Magac}_2023`;
  const Name = CrentUser && `${CrentUser.Magac}`;
  const Price = cv && cv.Qiimaha;
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
  //pdf samayn
  const ref = React.createRef();
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
        pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
        pdf.save(`${name_id}.pdf`);
        Download(Name, Price);
      }
    );

    btn_download.current.click();
  };

  return (
    <>
      <div className="haye">
        <div ref={ref} className="design_cv_containers">
          <div className="leval1" id="leval1">
            {cv && cv._id === "66b4de136bfa0197afcc1628" ? (
              <Template cv={cv} color1={color1} color2={color2} />
            ) : cv && cv._id === "645b74afe010f1c9f077464b" ? (
              <Template2 cv={cv} color1={color1} color2={color2} />
            ) : cv && cv._id === "645b7482e010f1c9f077463c" ? (
              <Template3 cv={cv} color1={color1} color2={color2} />
            ) : (
              <></>
            )}

            {updateDone && <Nativications />}
          </div>
          <div className="previewcv">
            <div className="C_download">
              {/* <Pdf targetRef={ref} filename={name_id}>
            {({toPdf}) => 
            <button onClick={toPdf} className="save_data">
            <i className="fa-solid fa-download"></i> Download CV
            </button>}
            </Pdf> */}
              <button className="save_data" onClick={downloadPdf}>
                <i className="fa-solid fa-download"></i> Download CV
              </button>
              <button
                hidden
                ref={btn_download}
                onClick={create_dowanload}
              ></button>
            </div>
            <Feilds
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

export default CVdesign;
