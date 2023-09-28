import axios from "axios";
import { useEffect, useReducer } from "react";
import { useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { useProtectedPage } from "../Context/Auth";
import { Usecvcontext } from "../Context/Cv";
import CVdesign from "../CvDesign/Cvdesign";
import Footer from "../Footer/Footer";
import Nativications from "../Nativications/Nativication";
import Nav from "../Nav/Nav";

function Editcv() {
  const { id } = useParams();
  const { CrentUser } = useProtectedPage();
  // const {getonecv,onecv} = Usecvcontext()
  const [cv, setcv] = useState("");
  const [usercv, setusercv] = useState();
  const fetchdata = async () => {
    try {
      const data = await fetch(
        `https://frontend-somcv.vercel.app/Api/Cv/${id}`
      );
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
      {!CrentUser ? <Navigate to={"/"} /> : <></>}
      <Nav />
      <div className="head_edit">
        <div className="haye">
          <div className="qoraal_edit">
            <p>Diyaarinta cv-ga {cv && cv.Magac}</p>
          </div>
        </div>
      </div>
      <CVdesign cv={cv} cuser={usercv} />
      <Footer />
    </>
  );
}

export default Editcv;
