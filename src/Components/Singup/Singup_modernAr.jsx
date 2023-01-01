import { useRef, useState } from "react"
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom"
import { useProtectedPage } from "../Context/Auth"
import { Usesingup } from "../Hooks/SinupHock"

function SingupModernAr(){
    // state hoocks 
    const {Singupuser, Looding, Error} = Usesingup()
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
    const [err,seterr] = useState("")

    const Onchange_inputs =(e) => {
        setinputs((prev) => ({...prev, [e.target.name]:e.target.value }))
    }


    const Singup_now = async(e) => {
        e.preventDefault()
        Singupuser(inputs.Email,inputs.Password, inputs.Name)
        if(CrentUser){
            location('/ar')
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
        <Navigate to="/ar" />
        :<></>
        }
        <div className="body_guud" dir="rtl">
            <div className="bidix_design ar">

            </div>
            <div className="Midig_design">
            <div className="Midig_design">
                {/* <div className="geed_cusub">
                    <img src="/Images/Robin bird-rafiki.svg"  alt="sawir_qurxin"/>
                </div> */}
                <div className="geed_cusub ar">
                    <img src="/Images/Mango tree-rafiki.svg"  alt="sawir_qurxin"/>
                </div>
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
                                        <i className="fa-solid fa-circle-check"></i>
                                        </div>
                                        <div className="text_qodo">
                                            <h3>إختر </h3>
                                            <p>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة،</p>
                                        </div>

                                    </li>
                                    <li className="qo_shabakada ar">
                                    <div className="icon">
                                    <i className="fa-solid fa-brush"></i>
                                        </div>
                                        <div className="text_qodo">
                                            <h3>جهز</h3>
                                            <p>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة،</p>
                                        </div>
                                    </li>
                                    <li className="qo_shabakada ar">
                                    <div className="icon">
                                   
                                    <i className="fa-solid fa-cloud-arrow-down"></i>
                                        </div>
                                        <div className="text_qodo">
                                            <h3>حمل</h3>
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
                        تسجيل حساب جديد
                    </span>
                    <input onChange={Onchange_inputs} type={"text"} placeholder="اسمك" name="Name"/>
                    <input onChange={Onchange_inputs} type={"email"} placeholder="البريد الإلكتروني" name="Email"/>
                    <input onChange={Onchange_inputs} type={"password"} placeholder="كلمة مرور" name="Password"/>
                    <button onClick={Singup_now} className="submit_btn">تسجيل</button>
                    {Error && 
                    <span className="Massage">
                       {Error.split(",")[1]}
                    </span>
                    }
                    <Link to={"/ar/Login"}>
                    <span>
                        دخول حسابك
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


export default SingupModernAr