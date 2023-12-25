import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { useProtectedPage } from "../Context/Auth";
import CVdesignSo from "../CvDesign/CvdesignSo";
import FooterSo from "../Footer/FooterSo";
import NavSo from "../Nav/NavSo";

function EditcvSo() {
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
      {!CrentUser ? <Navigate to={"/so"} /> : <></>}
      <NavSo />
      <div className="head_edit">
        <div className="haye">
          <div className="qoraal_edit">
            <p>Diyaarinta cv-ga {cv && cv.Magac}</p>
          </div>
        </div>
      </div>
      <CVdesignSo cv={cv} cuser={usercv} />
      <FooterSo />
    </>
  );
}

export default EditcvSo;
