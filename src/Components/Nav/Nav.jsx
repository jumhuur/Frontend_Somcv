import { useState } from "react";
import {Link} from "react-router-dom";
import {useProtectedPage} from "../Context/Auth";
import LangNav from "./Languagenav";
function Nav(){
    const {Logout,CrentUser} = useProtectedPage()
    const [q_scroll,setq_scroll]= useState(0)
    const name = CrentUser ? CrentUser.Name.split(' ') : "";
    const splitname = name[0]
    const [Lan,setLang] = useState(false)

    // change activity language nav 
    const language = () => {
        setLang(!Lan)
        console.log(Lan)
    }
    console.log(splitname)

    window.onscroll = function(){
        const scroll = window.scrollY;
        setq_scroll(scroll)
    }

    const loged_out = async(e) => {
        e.preventDefault()
        try{
            await Logout()
        } catch(Err){
            console.log(Err)
        }
    }
    return (
        <>
        {q_scroll > 20 ? 
        <div className={"header_nav Cadaan"}>
        <div className="haye">
        <nav className="Nav">
            <div className="logo">
                <Link to={'/'}>
                <img src={q_scroll > 20 ? "/Images/logo-color.png": "/Images/logo-color.png"} alt="Logo" />
                </Link>
                <Link to={'/'}>
                <h2 className="logo_desc cadaan_logo">soomali cv</h2>
                </Link>
            </div>
            <div className="nav_links">
                <ul className="links_items">
                    <li className="items_nav">
                       Home
                    </li>
                    <li className="items_nav">
                    About
                    </li>
                    <li className="items_nav">
                        Services
                    </li>

                    <li className="items_nav">
                        Pricing
                    </li>
                    <li className="items_nav" onClick={language}>
                        Language <i className="i fa-solid fa-caret-down"></i>
                    </li>
                    <LangNav Lan={Lan} />
                    {CrentUser && CrentUser.leval === "Mamul" ?
                    <Link to={"/Addcv"}>
                    <li className="items_nav">
                        New Cv
                    </li>
                    </Link>
                    :<></>
                    }
                </ul>
            </div>
            <div className="actions">
                {CrentUser ? 
                <>
                <Link to={'/'}>
                <button onClick={loged_out} className="sing">
                    Logout
                </button>
                </Link>
                <button className="start reg">
                    {CrentUser ? splitname : "Get Started"}
                </button>
                </>
                :
                <>
                <Link to={"/Login"}>
                <button className="sing">
                Singin
                </button>
                </Link>
                <Link className="reg" to={"/Register"}>
                <button className="start">
                    {CrentUser ? splitname : "Get Started"}
                </button>
                </Link>
                </>
                }
            </div>
        </nav>
        </div>    
        </div>
        :
        <div className={q_scroll > 20 ? "header_nav": "header_nav"}>
        <div className="haye">
        <nav className="Nav">
            <div className="logo">
                <Link to={'/'}>
                <img src={q_scroll > 20 ? "/Images/logo-white.png": "/Images/logo-white.png"} alt="Logo" />
                </Link>
                <Link to={'/'}>
                <h2 className="logo_desc">soomali cv</h2>
                </Link>
            </div>
            <div className="nav_links">
                <ul className="links_items">
                    <li className="items_nav">
                        Home
                    </li>
                    <li className="items_nav">
                    About
                    </li>
                    <li className="items_nav">
                        Services
                    </li>
                    <li className="items_nav">
                        Pricing
                    </li>
                    <li className="items_nav" onClick={language}>
                        Language <i className="i fa-solid fa-caret-down"></i>
                    </li>
                    <LangNav Lan={Lan} />
                    {CrentUser && CrentUser.leval === "Mamul" ?
                    <Link to={"/Addcv"}>
                    <li className="items_nav">
                        New Cv
                    </li>
                    </Link>
                    :<></>
                    } 

                </ul>
            </div>
            <div className="actions">
            {CrentUser ? 
                <>
                <Link to={'/'}>
                <button onClick={loged_out} className="sing">
                    Logout
                </button>
                </Link>
                <button className="start reg">
                    {CrentUser ? splitname : "Get Started"}
                </button>
                </>
                :
                <>
                <Link to={"/Login"}>
                <button className="sing">
                Singin
                </button>
                </Link>
                <Link className="reg" to={"/Register"}>
                <button className="start">
                    {CrentUser ? splitname : "Get Started"}
                </button>
                </Link>
                </>
                }
            </div>
        </nav>
        </div>    
        </div>
        }

        </>
    )
}
export default Nav