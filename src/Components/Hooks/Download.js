import {useState } from "react"
export const UseDawnload  = () => {
    const [Error, setError] = useState(null)
    const [Looding, setLooding] = useState(false)
    const Download = async(Name,Price) => {
        setLooding(true)
        setError(false)
        const response = await fetch("http://localhost:8080/Api/addDownload", {
            method: "POST",
            headers : {"Content-Type": "application/json"},
            body: JSON.stringify({Name,Price})
        })

    
        const json = await response.json()
    
        if(!response.ok){
            setError(json.error)
            setLooding(false)
        }
    
        if(response.ok){
            setError(false)
            setLooding(false)

        }
    }

    return {Download, Looding, Error}
}