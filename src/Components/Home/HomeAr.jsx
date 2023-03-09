import {Navigate, useLocation } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import "./HomeAr.css";
import NavAr from "../Nav/NavAr";
import TipsAr from "../Tips/TipsAr";
import DesignsAr from "../Designs/DesignsAr";
import FooterAr from "../Footer/FooterAr";
import PopupInfoAr from "../PopupInfo/popupinfoAr";
import { Usecvcontext } from "../Context/Cv";
import { useProtectedPage } from "../Context/Auth";
import HelpVideo from "../Video/video";
import JobsDesignAr from "../Jobs/JobsDesign/JobsDesignAr";
function HomeAr () {
    const language = localStorage.getItem('lan')
    const [active,setactive] = useState(false)
    const [active_vide,setactive_video] = useState(false)
    const Qiimaha = "4"
    const {cv,Allusers,download} = Usecvcontext()
    const {user} = useProtectedPage()


    // popup activate
    const popup_active = (e) => {
        //e.preventDefault()
        setactive(!active)
    }

    // video activate
    const video_active = (e) => {
        e.preventDefault()
        setactive_video(!active_vide)
    }

    const [singalcv , setsingalcv] = useState();
    const id = useLocation().search.split('=')[1]
  
    const onclickbnt = async () => {
        popup_active()
    }

    useEffect(() => {
        if(id) {
            try{
                const getsingalcv = async () => {
                    const data = await fetch(`http://localhost:8800/Api/Cv/${id}`)
                    data.json()
                    .then((cvdata) => {
                    setsingalcv(cvdata)
                    })
                }
                getsingalcv()
                localStorage.setItem('cv', JSON.stringify(singalcv))
                
            } catch(err){
                console.log(err)
            }
        }
    },[id])
   


    // change image evry loading 
    // const arr_images = ['02.png' ,"Home5.png"]
    const arr_images = ["Home1.svg"]
    const roundom_number = Math.ceil(Math.random() * arr_images.length - 1)
    return (
    <>
    {language === 'En' ? 
    <Navigate to={"/"} />
    :language === "so" ?
    <Navigate to={"/so"} />
    :<></>
    }
    <HelpVideo active={active_vide} func={video_active}/>
    <NavAr />
    <section className="Head" dir="rtl">
        <div className="Home_conten">
            <div className="haye">
             <div className="home_Parts">
                <div className="side left">
                    <div className="qoraalo">
                    <h2 className="ar" style={{lineHeight: "1.85"}}>
                   أهلا بك! جهز سيترك ذاتية بقيمة أقل بكثير من  {Qiimaha} $
                    </h2>
                    <p className="desc_Home ar" style={{textAlign: "right"}}>
                    هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص ة .
                    </p>
                    </div>
                    <div className="actions_home">
                        <button className="req">
                            تصاميم السير الذاتية 
                        </button>
                        <button className="video" onClick={video_active}>
                        <i className="fa-regular fa-circle-play"></i> شاهد فيديو
                        </button>
                    </div>
                    <div className="all_clints">
                        <span className="title">إحصائيات عامة :</span>
                        <div className="clints">
                            <div className="clint">
                            {/* <img src="/Images/client-1.svg" alt="1"/> */}
                            <h2 className="Ar"><i className="fa-solid fa-cloud-arrow-down"></i> عدد تحميلات <span>({download && download.length})</span></h2>
                            </div>
                            <div className="clint">
                            {/* <img src="/Images/client-2.svg" alt="2"/> */}
                            <h2 className="Ar"><i className="fa-solid fa-user"></i> عدد مستخدمين <span>({Allusers && Allusers.length})</span></h2>
                            </div>
                            <div className="clint">
                            {/* <img src="/Images/client-3.svg" alt="3"/> */}
                            <h2 className="Ar"><i className="fa-solid fa-file-lines"></i> عدد تصاميم  <span>({cv && cv.length})</span></h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="side right">
                    <img src={`/Images/${arr_images[roundom_number]}`} alt="Home"/>
                </div>
            </div>   
            </div>
        </div>
    </section>
    <PopupInfoAr active={active} onclickpop={popup_active} singalcv={singalcv}  />
    <DesignsAr click={onclickbnt}/>
    <TipsAr />  
    <FooterAr />
    </>
    )

}


export default HomeAr