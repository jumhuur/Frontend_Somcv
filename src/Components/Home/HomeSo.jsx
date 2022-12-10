import {Navigate, useLocation } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import "./Home.css"
import NavSo from "../Nav/NavSo";
import TipsSo from "../Tips/TipsSo";
import DesignsSo from "../Designs/DesignsSo";
import FooterSo from "../Footer/FooterSo";
import PopupInfoSo from "../PopupInfo/popupinfoSo";
function HomeSo () {
    const language = localStorage.getItem('lan');
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
    {language === 'Ar' ? 
    <Navigate to={"/ar"} />
    :language === "En" ?
    <Navigate to={"/"} />
    :<></>
    }
    <NavSo />
    <section className="Head">
        <div className="Home_conten">
            <div className="haye">
             <div className="home_Parts">
                <div className="side left">
                    <div className="qoraalo">
                    <h2>
                    Ku Diyaarso CV Qurux Badan qiimo Ka yar {Qiimaha} $
                    </h2>
                    <p className="desc_Home">
                    Shabakada soomali sv waxay kuu fudaydinaysaa inaad samaysto cv qurux badan adoon cidna u baahan .
                    </p>
                    </div>
                    <div className="actions_home">
                        <button className="req">
                            Nashqada cv-yada
                        </button>
                        <button className="video">
                        <i className="fa-regular fa-circle-play"></i> Daawo Muqaal
                        </button>
                    </div>
                    <div className="all_clints">
                        <span className="title">Macaamiisha Cusub :</span>
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
    <PopupInfoSo active={active} onclickpop={popup_active} singalcv={singalcv}  />
    <TipsSo />  
    <DesignsSo click={onclickbnt}/>
    <FooterSo />
    </>
    )

}


export default HomeSo