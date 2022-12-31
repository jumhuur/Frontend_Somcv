import React, { useContext, useEffect, useReducer, useState } from "react"
import axios from "axios"
import {AuthRadiuse, INITIAL_STATE, ACTIONS} from "../Hooks/AuthReduse";
const ProtectPages = React.createContext()
// isticmaalka 
export function useProtectedPage(){
    return useContext(ProtectPages)
}
export function ContextProvider({children}){
    const [state, dispatch] = useReducer(AuthRadiuse, INITIAL_STATE)
    const [CrentUser,setCrentUser] = useState(
       JSON.parse(localStorage.getItem('user')) || null
    )

    const setDatA = () => {
        setCrentUser(JSON.parse(localStorage.getItem('user')) || null)
    }

    console.log(CrentUser)


    const value = {
        CrentUser,
        state,
        dispatch,
        ACTIONS,
        setDatA,
    }
    console.log('AUTH STATE ', state)

    useEffect(() => {
        setDatA()
    },[])
    return (
        <ProtectPages.Provider value={value}>
            {children}
        </ProtectPages.Provider>
    )
}