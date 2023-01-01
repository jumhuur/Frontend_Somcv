import { useRef, useState } from "react"
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom"
import { useProtectedPage } from "../Context/Auth";
import { Usecvcontext } from "../Context/Cv";
import {Usesingup} from "../Hooks/SinupHock";

function SingupModern(){
        // state hoocks 
        const {Singupuser, Looding, Error} = Usesingup()
        const {Getallcv} = Usecvcontext()
        const location = useLocation()
        const image = useRef()
        const {CrentUser} = useProtectedPage()
        const navigate = useNavigate()
        const [inputs,setinputs] = useState({
            Email: "",
            Password: "",
            Name: "",
            Image:""
        })
        //const [err,seterr] = useState("")
    
        const Onchange_inputs =(e) => {
            setinputs((prev) => ({...prev, [e.target.name]:e.target.value }))
            console.log(inputs)
        }
    
    
        const Singup_now = async(e) => {
            e.preventDefault()
            Singupuser(inputs.Email, inputs.Password,inputs.Name)
            Getallcv()
            if(CrentUser){
                location('/')
            }
        }
    
    
        // functions
        function upload_image({Target}){
            const file = Target.file[0];
            if(file){
                console.log(file)
            }
        }
        const upload_img = () => {
            image.current.click()
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
                                        <i className="fa-solid fa-circle-check"></i>
                                        </div>
                                        <div className="text_qodo">
                                            <h3>Select</h3>
                                            <p>Dooro mid kamida nashqadaha diyaarsan ee cv-yada</p>
                                        </div>

                                    </li>
                                    <li className="qo_shabakada">
                                    <div className="icon">
                                    <i className="fa-solid fa-brush"></i>
                                        </div>
                                        <div className="text_qodo">
                                            <h3>prepair</h3>
                                            <p>Dooro mid kamida nashqadaha diyaarsan ee cv-yada</p>
                                        </div>
                                    </li>
                                    <li className="qo_shabakada">
                                    <div className="icon">
                                   
                                    <i className="fa-solid fa-cloud-arrow-down"></i>
                                        </div>
                                        <div className="text_qodo">
                                            <h3>Download</h3>
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
                                    Create your new account
                                    </span>
                                    <input onInput={Onchange_inputs} type={"text"} placeholder="Your Name" name="Name"/>
                                    <input onInput={Onchange_inputs} type={"email"} placeholder="Email" name="Email"/>
                                    <input onInput={Onchange_inputs} type={"password"} placeholder="Password" name="Password"/>
                                    <button onClick={Singup_now} className="submit_btn">
                                    {Looding &&
                                <div class="sk-fading-circle">
                                    <div class="sk-circle1 sk-circle"></div>
                                    <div class="sk-circle2 sk-circle"></div>
                                    <div class="sk-circle3 sk-circle"></div>
                                    <div class="sk-circle4 sk-circle"></div>
                                    <div class="sk-circle5 sk-circle"></div>
                                    <div class="sk-circle6 sk-circle"></div>
                                    <div class="sk-circle7 sk-circle"></div>
                                    <div class="sk-circle8 sk-circle"></div>
                                    <div class="sk-circle9 sk-circle"></div>
                                    <div class="sk-circle10 sk-circle"></div>
                                    <div class="sk-circle11 sk-circle"></div>
                                    <div class="sk-circle12 sk-circle"></div>
                                </div>
                            }
                                        Register
                                    </button>
                                    {Error && 
                                    <span className="Massage">
                                    {Error.split(",")[2]}
                                    </span>
                                    }
                                    <Link to={"/Login"}>
                                    <span>
                                        Login Your Account
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


export default SingupModern