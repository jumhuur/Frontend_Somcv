import { useState } from "react"
import {useProtectedPage} from "../Context/Auth"

export const UseLogin  = () => {
    const [Error, setError] = useState(null)
    const [Looding, setLooding] = useState(false)
    const {dispatch ,ACTIONS,setDatA} = useProtectedPage()
    const Login = async(Email,Password) => {
        setLooding(true)
        setError(false)
        const response = await fetch("http://localhost:8080/Api/Login", {
            method: "POST",
            headers : {"Content-Type": "application/json"},
            body: JSON.stringify({Email,Password})
        })
    
        const json = await response.json()
    
        if(!response.ok){
            setError(json.error)
        }
    
        if(response.ok){
            setError(false)
            // setloacal stroge 
            localStorage.setItem("user", JSON.stringify(json))
            dispatch({type:ACTIONS.LOGIN, payload: json})
            setLooding(false)
            setDatA()
        }
    }

    return {Login, Looding, Error}
}