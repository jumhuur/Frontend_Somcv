import { useProtectedPage } from "../../Context/Auth"
import { Usecvcontext } from "../../Context/Cv"
import Styletemp1 from "./Template3.module.css"
import React from "react";

function Template3({cv,color1,color2}){
    const {CrentUser} = useProtectedPage()
    const {info} = Usecvcontext()
    return(
        <>
        <p>soo dhawaaw degsign 3aad</p>
        </>
    )
}

export default Template3