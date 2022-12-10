import { useRef, useState } from "react"
import { Link, Navigate, useNavigate } from "react-router-dom"
import {useProtectedPage} from "../Context/Auth"
function Register() {
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
            console.log(Err)
            seterr(Err.response.data)
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
        <div className="container_login">
            <div className="login_card">
                <form className="login_from">
                    <span className="welcome">
                        Register
                    </span>
                    <input onChange={Onchange_inputs} type={"text"} placeholder="Magacaaga" name="Name"/>
                    <input onChange={Onchange_inputs} type={"email"} placeholder="Emailkaaga" name="Email"/>
                    <input onChange={Onchange_inputs} type={"password"} placeholder="Passworka" name="Password"/>
                    <input onChange={upload_image} ref={image} onInput={Onchange_inputs} type="file" placeholder="Image" name="Image" hidden/>
                    <div onClick={upload_img} className="upload" type={"submit"}>
                        <i className="fa-solid fa-circle-up"></i>
                        <p className="file_name_and_zise">Upload Your Image</p>
                        {/* <p className="file_name_and_zise">Musee.png | 21 MB</p> */}
                    </div>
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
        </>
    )
}

export default Register