import { useEffect, useState } from "react"
import { Link, Navigate, useLocation } from "react-router-dom"
import { useProtectedPage } from "../Context/Auth"
import { Usecvcontext } from "../Context/Cv"
import { UseLogin } from "../Hooks/Login"

function LoginModrAr(){
    const {Login, Looding, Error} = UseLogin()
    const locations = useLocation()
    const {CrentUser, user} = useProtectedPage()
    const {cv,download,GetInfoCv} = Usecvcontext()
    const [inputs,setinputs] = useState({
        Email: "",
        Password: "",
    })

    const Onchange_inputs =(e) => {
        setinputs((prev) => ({...prev, [e.target.name]:e.target.value }))
    }

    const Onclick_login = async (e) => {
        e.preventDefault()
        Login(inputs.Email,inputs.Password)
        if(CrentUser){
            GetInfoCv()
            locations('/ar')
        }
    }
    return (
        <>
        <div className="body_guud" dir="rtl">
            <div className="bidix_design ar">

            </div>
            <div className="Midig_design">
            <div className="geed_cusub ar">
                    <img src="/Images/Mango tree-rafiki.svg"  alt="sawir_qurxin"/>
            </div> 
            </div>
            <div className="haye over_sing_up">
                <div className="content">
                    <div className="bidix">
                        <div className="logo_and_text">
                            <Link to={'/ar'}>
                            <div className="logo_sin">
                                <img src="/Images/logo-whiteAr.png" alt="logo" /> 
                                <h2>صومال سيفي</h2>
                            </div>
                            </Link>
                            <div className="text">
                                <p className="qoraal_sing">هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، </p>
                            </div>
                            <div className="tips_sing">
                                <ul className="qodobad_shabakda">
                                    <li className="qo_shabakada ar">
                                        <div className="icon">
                                        <i className="fa-solid fa-cloud-arrow-down"></i>
                                        </div>
                                        <div className="text_qodo">
                                            <h3>عدد تحميلات {download && download.length} </h3>
                                            <p>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة،</p>
                                        </div>

                                    </li>
                                    <li className="qo_shabakada ar">
                                    <div className="icon">
                                    <i className="fa-solid fa-users"></i>
                                        </div>
                                        <div className="text_qodo">
                                            <h3>عدد مستخدمين {user && user.length}</h3>
                                            <p>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة،</p>
                                        </div>
                                    </li>
                                    <li className="qo_shabakada ar">
                                    <div className="icon">
                                   
                                    <i className="fa-solid fa-layer-group"></i>
                                        </div>
                                        <div className="text_qodo">
                                            <h3>عدد تصاميم {cv && cv.length}</h3>
                                            <p>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة،</p>
                                        </div>
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </div>
                    <div className="midig">
                    <div className="container_login modren" dir="rtl">
            <div className="login_card">
                <form className="login_from">
                    <span className="welcome">
                        دخول حساب
                    </span>
                    <input onChange={Onchange_inputs} type={"email"} placeholder="البريك الإلكتروني" name="Email" autoComplete="off"/>
                    <input onChange={Onchange_inputs} type={"password"} placeholder="كلمة المرور" name="Password"/>
                    <button onClick={Onclick_login} className="submit_btn">
                    {Looding &&
                                <div className="sk-fading-circle">
                                    <div className="sk-circle1 sk-circle"></div>
                                    <div className="sk-circle2 sk-circle"></div>
                                    <div className="sk-circle3 sk-circle"></div>
                                    <div className="sk-circle4 sk-circle"></div>
                                    <div className="sk-circle5 sk-circle"></div>
                                    <div className="sk-circle6 sk-circle"></div>
                                    <div className="sk-circle7 sk-circle"></div>
                                    <div className="sk-circle8 sk-circle"></div>
                                    <div className="sk-circle9 sk-circle"></div>
                                    <div className="sk-circle10 sk-circle"></div>
                                    <div className="sk-circle11 sk-circle"></div>
                                    <div className="sk-circle12 sk-circle"></div>
                                </div>
                            }
                        دخول
                        </button>
                    {Error && 
                    <span className="Massage">
                    {Error.split(",")[2]}
                     </span>
                    }
                    <Link to={"/ar/Register"}>
                    <span>
                        تسجيل حساب جديد
                    </span>
                    </Link>

                </form>
            </div>
        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}


export default LoginModrAr