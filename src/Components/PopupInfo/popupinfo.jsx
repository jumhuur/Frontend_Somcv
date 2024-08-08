import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useProtectedPage } from "../Context/Auth";
import { Usecvcontext } from "../Context/Cv";
import Template from "../CvDesign/Template1/Tempalete";
import Template2 from "../CvDesign/Template2/Template2";
import Template3 from "../CvDesign/Template3/Template3";
function PopupInfo({ active, onclickpop, singalcv }) {
  const { CrentUser } = useProtectedPage();
  const { GetInfoCv } = Usecvcontext();

  useEffect(() => {
    GetInfoCv();
  }, []);
  return (
    <>
      <div className={active ? "over_vellow_all active" : "over_vellow_all"}>
        <div className="haye">
          {active ? (
            <div className="container_pop">
              <div className="popup">
                <div className="heead_info_pop">
                  <div className="buttons">
                    <h2>Cv Format Overview {singalcv && singalcv.Magac}</h2>
                    {!CrentUser ? (
                      <Link to={"/Login"}>
                        <button className="edit">
                          <i className="fa-solid fa-right-to-bracket"></i> Login
                          Now
                        </button>
                      </Link>
                    ) : (
                      <Link to={`/Editcv/${singalcv && singalcv._id}`}>
                        <button className="edit">
                          <i className="fa-solid fa-brush"></i> prepare now
                        </button>
                      </Link>
                    )}
                  </div>
                  <div className="close">
                    <Link to={"/"}>
                      <div onClick={onclickpop} className="close_here">
                        <i className="fa-solid fa-xmark"></i>
                      </div>
                    </Link>
                    {/* <div  onClick={onclickpop} className="close_here">
                                <i className="fa-solid fa-xmark"></i>
                                </div> */}
                  </div>
                </div>
                <div className="cv">
                  <div className="cv_image">
                    {singalcv && singalcv._id === "66b4de136bfa0197afcc1628" ? (
                      <Template cv={singalcv} />
                    ) : singalcv &&
                      singalcv._id === "645b74afe010f1c9f077464b" ? (
                      <Template2 cv={singalcv} />
                    ) : singalcv &&
                      singalcv._id === "645b7482e010f1c9f077463c" ? (
                      <Template3 cv={singalcv} />
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
}

export default PopupInfo;
