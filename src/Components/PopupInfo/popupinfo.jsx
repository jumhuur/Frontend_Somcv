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
                                <h2>Cv Format Overview {singalcv && singalcv[0].id}</h2>
                            {!CrentUser ? 
                            <Link to={"/Login"}>
                            <button className="edit"><i className="fa-solid fa-right-to-bracket"></i> Login Now</button>
                            </Link>
                            :
                            <a href={`/Editcv/${singalcv && singalcv[0].id}`}>
                            <button className="edit"><i className="fa-solid fa-brush"></i> prepare now</button>
                            </a>
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
                        {singalcv && singalcv[0].id === 1615 ?
                        <Template cv={singalcv}/>
                        :singalcv && singalcv[0].id === 1616 ?
                        <Template2 cv={singalcv}/>
                        :singalcv && singalcv[0].id === 1617 ?
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