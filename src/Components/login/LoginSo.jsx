import { useEffect, useState } from "react"
import {Link, Navigate } from "react-router-dom"
import {useProtectedPage} from "../Context/Auth"

function  LoginSo() {
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
            console.log(Err)
            seterr(Err.response.data[0])
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
        <Navigate to="/so" />
        :<></>
        }
        <div className="container_login">
            <div className="login_card">
                <form className="login_from">
                    <span className="welcome">
                        Gal Akoon Hore
                    </span>
                    <input onChange={Onchange_inputs} type={"email"} placeholder="Emailkaaga" name="Email" autoComplete="off"/>
                    <input onChange={Onchange_inputs} type={"password"} placeholder="Passwor-kaaga" name="Password"/>
                    <button onClick={Onclick_login} className="submit_btn">Gal</button>
                    {err && 
                    <span className="Massage">
                    {err}
                     </span>
                    }
                    <Link to={"/so/Register"}>
                    <span>
                        Samayso Akoon cusub
                    </span>
                    </Link>

                </form>
            </div>
        </div>
        </>
    )
}

export default LoginSo