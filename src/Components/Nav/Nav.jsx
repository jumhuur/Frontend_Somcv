import { useState } from "react";
import {Link} from "react-router-dom";
import {useProtectedPage} from "../Context/Auth";
import LangNav from "./Languagenav";
import Mobile from "./n_mobile";
import {UseLogin} from "../Hooks/LogoutHock"
function Nav(){
    const {Logout} = UseLogin()
    const {CrentUser} = useProtectedPage()
    const [q_scroll,setq_scroll]= useState(0)
    const name = CrentUser && CrentUser.Magac;
    const splitname = name
    const [Lan,setLang] = useState(false)

    const [Activenav,setActivenav] = useState(false)
    const activenav_mobile = () => {
        setActivenav(!Activenav)
    }

    // change activity language nav 
    const language = () => {
        setLang(!Lan)
    }

    window.onscroll = function(){
        const scroll = window.scrollY;
        setq_scroll(scroll)
    }

    const loged_out = async(e) => {
        Logout()
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
                {/* <h2 className="logo_desc cadaan_logo">soomali cv</h2> */}
                </Link>
            </div>
            <div onClick={activenav_mobile} className="nav_icon_mobile cadaan_mbl">
                <i className="fa-solid fa-bars"></i>
            </div>
            <div className="nav_links">
                <ul className="links_items">
                    <li className="items_nav">
                        <Link to="/">
                        Home
                        </Link>
                       
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
            {/* dhamaadka nav mobile */} 
            <div className={Activenav ? "nav_mobile active":"nav_mobile"}>
                <div className="nav_mbl">
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
                        <Mobile Lan={Lan} />
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
                <div className="actions_mob">
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
            </div>
            {/* dhamaadka nav mobile */}      
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
                {/* <h2 className="logo_desc">soomali cv</h2> */}
                </Link>
            </div>
            <div onClick={activenav_mobile} className="nav_icon_mobile">
                <i className="fa-solid fa-bars"></i>
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
            {/* dhamaadka nav mobile */} 
            <div className={Activenav ? "nav_mobile active":"nav_mobile"}>
                <div className="nav_mbl">
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
                        <Mobile Lan={Lan} />
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
                <div className="actions_mob">
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
            </div>
            {/* dhamaadka nav mobile */}       
        </div>
        }

        </>
    )
}
export default Nav