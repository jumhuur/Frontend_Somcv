import { Link } from "react-router-dom"
import {useProtectedPage} from "../Context/Auth"
import TemplateAr from "../CvDesign/Template1/TempaleteAr"
import Template2Ar from "../CvDesign/Template2/Template2Ar"
function PopupInfoAr({active,onclickpop,singalcv}){
    const {CrentUser} = useProtectedPage()
    return (
        <>
        <div className={active ? "over_vellow_all active" : "over_vellow_all"} dir="rtl">
            <div className="haye">
                {active   ? 
                    <div className="container_pop">
                    <div className="popup">
                        <div className="heead_info_pop">
                            <div className="buttons">
                                <h2>شكل السيرة الذاتية {singalcv && singalcv[0].id}</h2>
                            {!CrentUser ? 
                            <Link to={"/ar/Login"}>
                            <button className="edit"><i className="fa-solid fa-right-to-bracket"></i> تسجيل الدخول</button>
                            </Link>
                            :
                            <a href={`/ar/Editcv/${singalcv && singalcv[0].id}`}>
                            <button className="edit"><i className="fa-solid fa-brush"></i> جهز الان</button>
                            </a>
                            }
                            </div>
                            <div className="close">
                                <Link to={'/ar'}>
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
                        <TemplateAr cv={singalcv}/>
                        :singalcv && singalcv[0].id === 1616 ?
                        <Template2Ar cv={singalcv}/>
                        :<></>
                        } 
                      
                        </div>
                        {/* <div className="cv_short_descr">
                            <h2><i className="fa-solid fa-circle"></i> Warbixn Kooban</h2>
                            <p>
                                Hadii nashqadan ay ku qancisay dalbo hada adoo ku dalbanaya qiimo jaban 
                                oo ah kaliya 2$ Hada Diyaarso Isla Hada La deg cv qurux badan
                            </p>
                            {!CrentUser ? 
                            <Link to={"/Login"}>
                            <button className="edit"><i className="fa-solid fa-right-to-bracket"></i> Gal Akonkaga</button>
                            </Link>
                            :
                            <Link to={`/Editcv/${singalcv && singalcv[0].id}`}>
                            <button className="edit"><i className="fa-solid fa-brush"></i> Diyaarso Hada</button>
                            </Link>
                            }
                            <h3><i className="fa-solid fa-circle"></i> Qaybaha Uu Ka kooban yahay</h3>
                            <p>Cv-gan waxa uu ka koobanyahay qaybahan .</p>
                            <ul className="ul_cv">
                                <li className="li_items_cv">
                                <i className="fa-solid fa-circle-check"></i> Profile
                                </li>
                                <li className="li_items_cv">
                                <i className="fa-solid fa-circle-check"></i> Experience
                                </li>
                                <li className="li_items_cv">
                                <i className="fa-solid fa-circle-check"></i> Education
                                </li>
                                <li className="li_items_cv">
                                <i className="fa-solid fa-circle-check"></i> Skills
                                </li>
                                <li className="li_items_cv">
                                <i className="fa-solid fa-circle-check"></i> Summary
                                </li>
                                <li className="li_items_cv">
                                <i className="fa-solid fa-circle-check"></i> Interests
                                </li>
                                <li className="li_items_cv">
                                <i className="fa-solid fa-circle-check"></i> Software
                                </li>
                                <li className="li_items_cv">
                                <i className="fa-solid fa-circle-check"></i> Certifications
                                </li>
                                <li className="li_items_cv">
                                <i className="fa-solid fa-circle-check"></i> Awards
                                </li>
                                <li className="li_items_cv">
                                <i className="fa-solid fa-circle-check"></i> Languages
                                </li>
                                <li className="li_items_cv">
                                <i className="fa-solid fa-circle-check"></i> Publications
                                </li>
                                <li className="li_items_cv">
                                <i className="fa-solid fa-circle-check"></i> Accomplishments
                                </li>
                                <li className="li_items_cv">
                                <i className="fa-solid fa-circle-check"></i> Affiliations
                                </li>
                                <li className="li_items_cv">
                                <i className="fa-solid fa-circle-check"></i> Additional Information

                                </li>
                                <li className="li_items_cv">
                                <i className="fa-solid fa-circle-check"></i> Others
                                </li>
                                <li className="li_items_cv">
                                <i className="fa-solid fa-circle-check"></i> Photo & Social Links
                                </li>                                
                            </ul>
                            {!CrentUser ? 
                            <Link to={"/Login"}>
                            <button className="edit"><i className="fa-solid fa-right-to-bracket"></i> Gal Akonkaga</button>
                            </Link>
                            :
                            <Link to={`/Editcv/${singalcv && singalcv[0].id}`}>
                            <button className="edit"><i className="fa-solid fa-brush"></i> Diyaarso Hada</button>
                            </Link>
                            }
                        </div> */}
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


export default PopupInfoAr