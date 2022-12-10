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
function HomeAr () {
    const language = localStorage.getItem('lan')
    const [active,setactive] = useState(false)
    const Qiimaha = "4"

    // popup activate
    const popup_active = (e) => {
        //e.preventDefault()
        setactive(!active)

    }

    const [singalcv , setsingalcv] = useState();
    const id = useLocation().search
  
    const onclickbnt = async () => {
        popup_active()
            try{
                const getsingalcv = async () => {
                    const data = await axios.get(`http://localhost:8800/Api/Singalcv/${id}`)
                        setsingalcv(data && data.data)
                }
    
                await getsingalcv()
                
            } catch(err){
                console.log(err)
            }

    }

    useEffect(() => {
        if(id) {
            try{
                const getsingalcv = async () => {
                    const data = await axios.get(`http://localhost:8800/Api/Singalcv/${id}`)
                        setsingalcv(data && data.data)
                }
    
                getsingalcv()
                
            } catch(err){
                console.log(err)
            }
        }
    },[id])
   


    // change image evry loading 
    const arr_images = ['somcv.svg','Home1.svg','Home4.svg','Home9.svg']
    const roundom_number = Math.ceil(Math.random() * arr_images.length - 1)
    return (
    <>
    {language === 'En' ? 
    <Navigate to={"/"} />
    :language === "so" ?
    <Navigate to={"/so"} />
    :<></>
    }
    <NavAr />
    <section className="Head" dir="rtl">
        <div className="Home_conten">
            <div className="haye">
             <div className="home_Parts">
                <div className="side left">
                    <div className="qoraalo">
                    <h2 className="ar" style={{lineHeight: "1.85"}}>
                   مرحبا! جهز سيترك ذاتية بقيمة أقل بكثير من  {Qiimaha} $
                    </h2>
                    <p className="desc_Home ar" style={{textAlign: "right"}}>
                    هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص ة .
                    </p>
                    </div>
                    <div className="actions_home">
                        <button className="req">
                            تصاميم السير الذاتية 
                        </button>
                        <button className="video">
                        <i className="fa-regular fa-circle-play"></i> شاهد فيديو
                        </button>
                    </div>
                    <div className="all_clints">
                        <span className="title">عملائنا الجدد :</span>
                        <div className="clints">
                            <div className="clint">
                            <img src="/Images/client-1.svg" alt="1"/>
                            </div>
                            <div className="clint">
                            <img src="/Images/client-2.svg" alt="2"/>
                            </div>
                            <div className="clint">
                            <img src="/Images/client-3.svg" alt="3"/>
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
    <TipsAr />  
    <DesignsAr click={onclickbnt}/>
    <FooterAr />
    </>
    )

}


export default HomeAr