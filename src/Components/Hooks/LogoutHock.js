import {useProtectedPage} from "../Context/Auth"

export const UseLogin  = () => {
    const {dispatch ,ACTIONS,setDatA} = useProtectedPage()
    const Logout = async() => {
        // setloacal stroge 
        localStorage.removeItem("user")
        dispatch({type:ACTIONS.LOGOUT})
        setDatA()
    }

    return {Logout}
}