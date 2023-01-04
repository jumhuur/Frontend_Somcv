import { useEffect, useState } from "react"
import { Link, Navigate, useLocation } from "react-router-dom"
import { useProtectedPage } from "../Context/Auth"
import { Usecvcontext } from "../Context/Cv";
import {UseLogin} from "../Hooks/Login";

function LoginModr(){
    const {Login, Looding, Error} = UseLogin()
    const locations = useLocation()
    const {CrentUser,user} = useProtectedPage()
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
            locations('/')
        }
    }
    return (
        <>
        <div className="body_guud">
            <div className="bidix_design">

            </div>
            <div className="Midig_design">
            <div className="geed_cusub">
                    <img src="/Images/Mango tree-rafiki.svg"  alt="sawir_qurxin"/>
                </div>
            </div>
            <div className="haye over_sing_up">
                <div className="content">
                    <div className="bidix">
                        <div className="logo_and_text">
                            <Link to={'/'}>
                            <div className="logo_sin">
                                <img src="/Images/logo-white.png" alt="logo" />
                                <h2>Soomali cv</h2>
                            </div>
                            </Link>
                            <div className="text">
                                <p className="qoraal_sing">Waa shabakad aad kuu sahlaysa diyaarinta cvcasriya wakhtiyar iyo qiimo yar </p>
                            </div>
                            <div className="tips_sing">
                                <ul className="qodobad_shabakda">
                                    <li className="qo_shabakada">
                                        <div className="icon">
                                        <i className="fa-solid fa-cloud-arrow-down"></i>
                                        </div>
                                        <div className="text_qodo">
                                            <h3>Downloads {download && download.length}</h3>
                                            <p>Dooro mid kamida nashqadaha diyaarsan ee cv-yada</p>
                                        </div>

                                    </li>
                                    <li className="qo_shabakada">
                                    <div className="icon">
                                    <i className="fa-solid fa-users"></i>
                                        </div>
                                        <div className="text_qodo">
                                            <h3>Users {user && user.length}</h3>
                                            <p>Dooro mid kamida nashqadaha diyaarsan ee cv-yada</p>
                                        </div>
                                    </li>
                                    <li className="qo_shabakada">
                                    <div className="icon">
                                   
                                    <i className="fa-solid fa-layer-group"></i>
                                        </div>
                                        <div className="text_qodo">
                                            <h3>Designs {cv && cv.length}</h3>
                                            <p>Dooro mid kamida nashqadaha diyaarsan ee cv-yada</p>
                                        </div>
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </div>
                    <div className="midig">
                    <div className="container_login modren">
                    <div className="login_card">
                        <form className="login_from">
                            <span className="welcome">
                                Log In Here
                            </span>
                            <input onInput={Onchange_inputs} type={"email"} placeholder="Emailkaaga" name="Email" autoComplete="off" required/>
                            <input onInput={Onchange_inputs} type={"password"} placeholder="Passworka" name="Password"  required/>
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
                            Login
                            </button>
                            {Error && 
                            <span className="Massage">
                            {Error.split(",")[1]}
                            </span>
                            }
                            <Link to={"/Register"}>
                            <span>
                                Register Now
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


export default LoginModr