import { useRef, useState } from "react"
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom"
import { useProtectedPage } from "../Context/Auth"
import { Usesingup } from "../Hooks/SinupHock"
import { Usecvcontext } from "../Context/Cv"
function SingupModernSo(){
        // state hoocks 
        const {Singupuser, Looding, Error} = Usesingup()
        const location = useLocation()
        const {GetInfoCv} = Usecvcontext()
        const image = useRef()
        const {CrentUser} = useProtectedPage()
        const [inputs,setinputs] = useState({
            Email: "",
            Password: "",
            Magac: "",
        })
    
        const Onchange_inputs =(e) => {
            setinputs((prev) => ({...prev, [e.target.name]:e.target.value }))
            console.log(inputs)
        }
    
    
        const Singup_now = async(e) => {
            e.preventDefault()
            Singupuser(inputs.Email, inputs.Password,inputs.Magac)
            if(CrentUser){
                GetInfoCv()
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
            <div className="Midig_design">
                {/* <div className="geed_cusub">
                    <img src="/Images/Robin bird-rafiki.svg"  alt="sawir_qurxin"/>
                </div> */}
                <div className="geed_cusub">
                    <img src="/Images/Mango tree-rafiki.svg"  alt="sawir_qurxin"/>
                </div>
            </div>
                
            </div>
            <div className="haye over_sing_up">
                <div className="content">
                    <div className="bidix">
                        <div className="logo_and_text">
                            <Link to={'/so'}>
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
                                            <h3>Dooro</h3>
                                            <p>Dooro mid kamida nashqadaha diyaarsan ee cv-yada</p>
                                        </div>

                                    </li>
                                    <li className="qo_shabakada">
                                    <div className="icon">
                                    <i className="fa-solid fa-brush"></i>
                                        </div>
                                        <div className="text_qodo">
                                            <h3>Diyaarso</h3>
                                            <p>Dooro mid kamida nashqadaha diyaarsan ee cv-yada</p>
                                        </div>
                                    </li>
                                    <li className="qo_shabakada">
                                    <div className="icon">
                                   
                                    <i className="fa-solid fa-cloud-arrow-down"></i>
                                        </div>
                                        <div className="text_qodo">
                                            <h3>Dajiso</h3>
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
                                    samayso Akoon Cusub
                                    </span>
                                    <input onChange={Onchange_inputs} type={"text"} placeholder="Magacaaga" name="Magac"/>
                                    <input onChange={Onchange_inputs} type={"email"} placeholder="Emailkaaga" name="Email"/>
                                    <input onChange={Onchange_inputs} type={"password"} placeholder="Passworka" name="Password"/>
                                    <button onClick={Singup_now} className="submit_btn">
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
                                        Diwaan Gali
                                    </button>
                                    {Error && 
                                    <span className="Massage">
                                    {Error.split(",")[0]}
                                    </span>
                                    }
                                    <Link to={"/so/Login"}>
                                    <span>
                                        Gal Akoon Hore
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


export default SingupModernSo