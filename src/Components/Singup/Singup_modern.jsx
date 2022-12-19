import { useRef, useState } from "react"
import { Link, Navigate, useNavigate } from "react-router-dom"
import { useProtectedPage } from "../Context/Auth"

function SingupModern(){
        // state hoocks 
        const image = useRef()
        const {Singup,CrentUser} = useProtectedPage()
        const navigate = useNavigate()
        const [inputs,setinputs] = useState({
            Email: "",
            Password: "",
            Name: "",
            Image:""
        })
        const [err,seterr] = useState("")
    
        const Onchange_inputs =(e) => {
            setinputs((prev) => ({...prev, [e.target.name]:e.target.value }))
        }
    
    
        const Singup_now = async(e) => {
            e.preventDefault()
            try{
               await Singup(inputs)
               navigate('/Login')
    
            } catch(Err){
                seterr(Err.response.data[2])
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
        {CrentUser ? 
        <Navigate to="/" />
        :<></>
        }
        <div className="body_guud">
            <div className="bidix_design">

            </div>
            <div className="Midig_design">
                
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
                                    <input onChange={Onchange_inputs} type={"text"} placeholder="Your Name" name="Name"/>
                                    <input onChange={Onchange_inputs} type={"email"} placeholder="Email" name="Email"/>
                                    <input onChange={Onchange_inputs} type={"password"} placeholder="Password" name="Password"/>
                                    <button onClick={Singup_now} className="submit_btn">Register</button>
                                    {err && 
                                    <span className="Massage">
                                    {err}
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