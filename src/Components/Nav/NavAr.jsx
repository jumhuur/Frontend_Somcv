import { useState } from "react";
import {Link} from "react-router-dom";
import {useProtectedPage} from "../Context/Auth";
import LangNavAr from "./LanguagenavAr";
function NavAr(){
    const {Logout,CrentUser} = useProtectedPage()
    const [q_scroll,setq_scroll]= useState(0)
    const name = CrentUser ? CrentUser.Name.split(' ') : "";
    const splitname = name[0]
    const [Lan,setLang] = useState(false)

    // change activity language nav 
    const language = () => {
        setLang(!Lan)
    }

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
        <div className={"header_nav Cadaan"} dir="rtl">
        <div className="haye">
        <nav className="Nav">
            <div className="logo">
                <Link to={'/ar'}>
                <img src={q_scroll > 20 ? "/Images/logo-colorAr.png": "/Images/logo-colorAr.png"} alt="Logo" />
                </Link>
                <Link to={'/ar'}>
                <h2 className="logo_desc cadaan_logo">صومالي سيفي</h2>
                </Link>
            </div>
            <div className="nav_links">
                <ul className="links_items">
                    <li className="items_nav">
                       الرئيسة
                    </li>
                    <li className="items_nav">
                    من نحن
                    </li>
                    <li className="items_nav">
                        خدمات
                    </li>
                    <li className="items_nav">
                        أسعار
                    </li>
                    <li className="items_nav" onClick={language}>
                        اللغة <i className="i fa-solid fa-caret-down"></i>
                    </li>
                    <LangNavAr Lan={Lan} />
                    {CrentUser && CrentUser.leval === "Mamul" ?
                    <Link to={"/ar/Addcv"}>
                    <li className="items_nav">
                        إضافة سيرة ذاتية
                    </li>
                    </Link>
                    :<></>
                    }
                </ul>
            </div>
            <div className="actions">
                {CrentUser ?
                <>
                <Link to={'/ar'}>
                <button onClick={loged_out} className="sing">
                    تسجيل الحروج
                </button>
                </Link>
                <button className="start reg">
                    {CrentUser ? splitname : "أبدا الان"}
                </button>
                </>
                :
                <>
                <Link to={"/ar/Login"}>
                <button className="sing">
                تسجيل الدخول
                </button>
                </Link>
                <Link className="reg" to={"/ar/Register"}>
                <button className="start">
                    {CrentUser ? splitname : "أبدا الان"}
                </button>
                </Link>
                </>
                }
            </div>
        </nav>
        </div>    
        </div>
        :
        <div className={q_scroll > 20 ? "header_nav": "header_nav"} dir="rtl">
        <div className="haye">
        <nav className="Nav">
            <div className="logo">
                <Link to={'/ar'}>
                <img src={q_scroll > 20 ? "/Images/logo-whiteAr.png": "/Images/logo-whiteAr.png"} alt="Logo" />
                </Link>
                <Link to={'/ar'}>
                <h2 className="logo_desc" dir="rtl">صومالي سيفي</h2>
                </Link>
            </div>
            <div className="nav_links">
                <ul className="links_items">
                    <li className="items_nav">
                       الرئيسة
                    </li>
                    <li className="items_nav">
                    من نحن
                    </li>
                    <li className="items_nav">
                        خدمات
                    </li>
                    <li className="items_nav">
                        أسعار
                    </li>
                    <li className="items_nav" onClick={language}>
                        اللغة <i className="i fa-solid fa-caret-down"></i>
                    </li>
                    <LangNavAr Lan={Lan} />
                    {CrentUser && CrentUser.leval === "Mamul" ?
                    <Link to={"/ar/Addcv"}>
                    <li className="items_nav">
                        إضافة سيرة ذاتية
                    </li>
                    </Link>
                    :<></>
                    }
                </ul>
            </div>
            <div className="actions">
            {CrentUser ?
                <>
                <Link to={'/ar'}>
                <button onClick={loged_out} className="sing">
                    تسجيل الحروج
                </button>
                </Link>
                <button className="start reg">
                    {CrentUser ? splitname : "أبدا الان"}
                </button>
                </>
                :
                <>
                <Link to={"/ar/Login"}>
                <button className="sing">
                تسجيل الدخول
                </button>
                </Link>
                <Link className="reg" to={"/ar/Register"}>
                <button className="start">
                    {CrentUser ? splitname : "أبدا الان"}
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
export default NavAr