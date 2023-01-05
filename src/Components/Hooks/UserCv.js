import { useState } from "react"
import {useProtectedPage} from "../Context/Auth"

export const UseUpdate  = () => {
    const [Error, setError] = useState(null)
    const [Looding, setLooding] = useState(false)
    const {dispatch ,ACTIONS,setDatA} = useProtectedPage()
    const Upadate = async(Name, Image, Location, CreatedAt, leval, Jobtitle, Tell, Cvemail, Edyear1, Eddesc1, Edunivername1, Edyear2, Eddesc2, Edunivername2, Edyear3, Eddesc3, Edunivername3, Langname1, Langprog1, Langname2, Langprog2, Langname3, Langprog3, Profile, Exyear1, Excompnay1, Exjob1, Exdesc1, Exyear2, Excompnay2, Exjob2, Exdesc2, Exyear3, Excompnay3, Exjob3, Exdesc3, Skillname, Skillprog, Skillname1, Skillprog1, Skillname2, Skillprog2, Skillname3, Skillprog3, Skillname4, Skillprog4, Skillname5, Skillprog5, Skillname6, Skillprog6, Skillname7, Skillprog7, Inters1, Inters2, Inters3, Inters4, Ref1,Ref1Com,Ref1Tel,Ref2,Ref2Com,Ref2Tel,Ref3,Ref3Com,Ref3Tel) => {
        setLooding(true)
        setError(false)
        const response = await fetch("http://localhost:8800/Api/RegisterUser", {
            method: "POST",
            headers : {"Content-Type": "application/json"},
            body: JSON.stringify({Name, Image, Location, CreatedAt, leval, Jobtitle, Tell, Cvemail, Edyear1, Eddesc1, Edunivername1, Edyear2, Eddesc2, Edunivername2, Edyear3, Eddesc3, Edunivername3, Langname1, Langprog1, Langname2, Langprog2, Langname3, Langprog3, Profile, Exyear1, Excompnay1, Exjob1, Exdesc1, Exyear2, Excompnay2, Exjob2, Exdesc2, Exyear3, Excompnay3, Exjob3, Exdesc3, Skillname, Skillprog, Skillname1, Skillprog1, Skillname2, Skillprog2, Skillname3, Skillprog3, Skillname4, Skillprog4, Skillname5, Skillprog5, Skillname6, Skillprog6, Skillname7, Skillprog7, Inters1, Inters2, Inters3, Inters4, Ref1,Ref1Com,Ref1Tel,Ref2,Ref2Com,Ref2Tel,Ref3,Ref3Com,Ref3Tel})
        })
    
        const json = await response.json()
    
        if(!response.ok){
            setError(json.error)
            setLooding(false)
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

    return {Upadate, Looding, Error}
}