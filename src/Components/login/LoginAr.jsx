import { useEffect, useState } from "react"
import {Link, Navigate } from "react-router-dom"
import {useProtectedPage} from "../Context/Auth"

function  LoginAr() {
    const {Login, CrentUser} = useProtectedPage()
    const [err,seterr] = useState(null)
    const [inputs,setinputs] = useState({
        Email: "",
        Password: "",
    })

    const Onchange_inputs =(e) => {
        setinputs((prev) => ({...prev, [e.target.name]:e.target.value }))
    }



    const Onclick_login = async (e) => {
        e.preventDefault()
        try{
           await Login(inputs)
        } catch(Err){
            seterr(Err.response.data[1])
        }
    }
    function Check(){
        if(CrentUser){
          return <Navigate to="/" />
        }
    }
    useEffect(() => {
        Check()
    })
    return (
        <>
        {CrentUser ? 
        <Navigate to="/ar/" />
        :<></>
        }
        <div className="container_login" dir="rtl">
            <div className="login_card">
                <form className="login_from">
                    <span className="welcome">
                        دخول حساب
                    </span>
                    <input onChange={Onchange_inputs} type={"email"} placeholder="البريك الإلكتروني" name="Email" autoComplete="off"/>
                    <input onChange={Onchange_inputs} type={"password"} placeholder="كلمة المرور" name="Password"/>
                    <button onClick={Onclick_login} className="submit_btn">دخول</button>
                    {err && 
                    <span className="Massage">
                    {err}
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
        </>
    )
}

export default LoginAr