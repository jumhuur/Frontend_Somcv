import { Link } from "react-router-dom"
import {useProtectedPage} from "../Context/Auth"
import Template from "../CvDesign/Template1/Tempalete"
import Template2 from "../CvDesign/Template2/Template2"
import Template3 from "../CvDesign/Template3/Template3"
function PopupInfo({active,onclickpop,singalcv}){
    const {CrentUser} = useProtectedPage()
    return (
        <>
        <div className={active ? "over_vellow_all active" : "over_vellow_all"}>
            <div className="haye">
                {active   ? 
                    <div className="container_pop">
                    <div className="popup">
                        <div className="heead_info_pop">
                            <div className="buttons">
                                <h2>Cv Format Overview {singalcv && singalcv.Magac}</h2>
                            {!CrentUser ? 
                            <Link to={"/Login"}>
                            <button className="edit"><i className="fa-solid fa-right-to-bracket"></i> Login Now</button>
                            </Link>
                            :
                            <Link to={`/Editcv/${singalcv && singalcv._id}`}>
                            <button className="edit"><i className="fa-solid fa-brush"></i> prepare now</button>
                            </Link>
                            }
                            </div>
                            <div className="close">
                                <Link to={'/'}>
                                <div  onClick={onclickpop} className="close_here">
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
                        {singalcv && singalcv._id === "63ad711f28224e162448935d" ?
                        <Template cv={singalcv}/>
                        :singalcv && singalcv._id === "63ad54c8af6c2744ec2373b8" ?
                        <Template2 cv={singalcv}/>
                        :singalcv && singalcv._id === 1617 ?
                        <Template3 cv={singalcv}/>
                        :<></>
                        } 
                      
                        </div>
                    </div>
                    </div>
                    </div>
                    :<></>
                }
            </div>
        </div>
        </>
    )
}


export default PopupInfo