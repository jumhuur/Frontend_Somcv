import React, { useContext, useEffect, useState } from "react"
import axios from "axios"
const ProtectPages = React.createContext()
// isticmaalka 
export function useProtectedPage(){
    return useContext(ProtectPages)
}
export function ContextProvider({children}){
    const [CrentUser,setCrentUser] = useState(
       JSON.parse(localStorage.getItem('user')) || null
    )
    const Id = localStorage.getItem('user')




    const [user,setuser_data] = useState("");

    const Singup  = async(inputs) => {
        const data = await axios.post("http://localhost:8800/Api/Register", inputs,)
        return data.data
    }
    const Login = async (inputs) => {
        // login Work here
        const data = await axios.post("http://localhost:8800/Api/Login",inputs, {
            withCredentials: true
        })
        localStorage.setItem("user", JSON.stringify(data.data.Id))
        return setCrentUser(data.data)
    }

    const get = async () => {
        // login Work here
        const data = await axios.get(`http://localhost:8800/Api/user/${Id}`,{
            withCredentials: true
        })
        return setCrentUser(data.data)
        // setinfo(userdata)
    }

    const Logout = async() => {
        await axios.post("http://localhost:8800/Api/Logout", {
            withCredentials: true
        })
        setCrentUser(null)
        localStorage.setItem('user', null)
    }

    const Allusers = async() => {
        const response = await axios.get("http://localhost:8800/Api/allusers/")
        return setuser_data(response.data)

    }


    const value = {
        CrentUser,
        setCrentUser,
        Login,
        Singup,
        Logout,
        get,
        user
    }

    useEffect(() => {
        Allusers()
        get()
    },[])
    // useEffect(() => {
    //     localStorage.setItem('user', JSON.stringify(CrentUser ? CrentUser.Id : null))
    // },[])
    return (
        <ProtectPages.Provider value={value}>
            {children}
        </ProtectPages.Provider>
    )
}