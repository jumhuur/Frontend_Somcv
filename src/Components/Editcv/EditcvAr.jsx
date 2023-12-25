import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { useProtectedPage } from "../Context/Auth";
import CVdesignAr from "../CvDesign/CvdesignAr";
import FooterAr from "../Footer/FooterAr";
import NavAr from "../Nav/NavAr";

function EditcvAR() {
  const { id } = useParams();
  const { CrentUser } = useProtectedPage();
  // const {getonecv,onecv} = Usecvcontext()
  const [cv, setcv] = useState("");
  const [usercv, setusercv] = useState();
  const fetchdata = async () => {
    try {
      const data = await fetch(`http://localhost:8800/Api/Cv/${id}`);
      await data.json().then((datacv) => {
        if (datacv) return setcv(datacv);
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <>
      {!CrentUser ? <Navigate to={"/ar"} /> : <></>}
      <NavAr />
      <div className="head_edit" dir="rtl">
        <div className="haye">
          <div className="qoraal_edit">
            <p>صفحة التجهيز سيرة ذاتية {cv && cv.Magac}</p>
          </div>
        </div>
      </div>
      <CVdesignAr cv={cv} cuser={usercv} />
      <FooterAr />
    </>
  );
}

export default EditcvAR;
