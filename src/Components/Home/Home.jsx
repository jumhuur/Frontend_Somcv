import {Navigate, useLocation } from "react-router-dom";
import Nav from "../Nav/Nav";
import Tips from "../Tips/Tips";
import Designs from "../Designs/Designs";
import Footer from "../Footer/Footer";
import PopupInfo from "../PopupInfo/popupinfo";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import "./Home.css"
function Home () {
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
    :language === "so" ?
    <Navigate to={"/so"} />
    :<></>
    }
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
                        <button className="video">
                        <i className="fa-regular fa-circle-play"></i> Wotch Video
                        </button>
                    </div>
                    <div className="all_clints">
                        <span className="title">Out Top Clints :</span>
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
    <PopupInfo active={active} onclickpop={popup_active} singalcv={singalcv}  />
    <Tips />  
    <Designs click={onclickbnt}/>
    <Footer />
    </>
    )

}


export default Home