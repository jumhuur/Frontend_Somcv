import {json, Navigate, useLocation } from "react-router-dom";
import Nav from "../Nav/Nav";
import Tips from "../Tips/Tips";
import Designs from "../Designs/Designs";
import Footer from "../Footer/Footer";
import PopupInfo from "../PopupInfo/popupinfo";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import "./Home.css"
import { Usecvcontext } from "../Context/Cv";
import { useProtectedPage } from "../Context/Auth";
import HelpVideo from "../Video/video";
import JobsDesign from "../Jobs/JobsDesign/JobsDesign";
function Home () {
    const language = localStorage.getItem('lan');
    const [active,setactive] = useState(false)
    const [active_vide,setactive_video] = useState(false)
    const Qiimaha = "4"
    const {cv,Allusers,download} = Usecvcontext()
    const {CrentUser} = useProtectedPage()

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
    const arr_images = ['Home1.svg','Home4.svg']
    const roundom_number = Math.ceil(Math.random() * arr_images.length - 1)
    return (
    <>
    {language === 'Ar' ? 
    <Navigate to={"/ar"} />
    :language === "so" ?
    <Navigate to={"/so"} />
    :<></>
    }

    <HelpVideo active={active_vide} func={video_active}/>
    <Nav />
    <section className="Head">
        <div className="Home_conten">
            <div className="haye">
             <div className="home_Parts">
                <div className="side left">
                    <div className="qoraalo">
                    <h2>
                    Prepare a Beautiful CV at Less Cost {Qiimaha}  Dollar
                    </h2>
                    <p className="desc_Home">
                    Somali Cv website makes it easy for you to create a beautiful cv without needing anyone.
                    </p>
                    </div>
                    <div className="actions_home">
                        <button className="req">
                           Cv Designs
                        </button>
                        <button className="video" onClick={video_active}>
                        <i className="fa-regular fa-circle-play"></i> Wotch Video
                        </button>
                    </div>
                    <div className="all_clints">
                        <span className="title">General statistics :</span>
                        <div className="clints">
                            <div className="clint">
                            {/* <img src="/Images/client-1.svg" alt="1"/> */}
                            <h2 className="ltr"><i className="fa-solid fa-cloud-arrow-down"></i> downloads <span>({download && download.length})</span></h2>
                            </div>
                            <div className="clint">
                            {/* <img src="/Images/client-2.svg" alt="2"/> */}
                            <h2 className="ltr"><i className="fa-solid fa-user"></i> Users <span>({Allusers && Allusers.length})</span></h2>
                            </div>
                            <div className="clint">
                            {/* <img src="/Images/client-3.svg" alt="3"/> */}
                            <h2 className="ltr"><i className="fa-solid fa-file-lines"></i> CV Design  <span>({cv && cv.length})</span></h2>
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
    <PopupInfo active={active} onclickpop={popup_active} singalcv={singalcv}  />
    <JobsDesign />
    <Tips />  
    <Designs click={onclickbnt}/>
    <Footer />
    </>
    )

}


export default Home