import { Link } from "react-router-dom"

function LangNavSo({Lan}){
    const storage_language01 = () => {
        const lang = localStorage.getItem('lan')
        if(lang === "so"){
            localStorage.setItem("lan","Ar")
        } else {
            localStorage.setItem("lan","Ar")
        }
    }
    const storage_language02 = () => {
        const lang = localStorage.getItem('lan')
        if(lang === "so"){
            localStorage.setItem("lan","En")
        } else {
            localStorage.setItem("lan","En")
        }
    }
    return (
        <>
        <div className={Lan ? "nav_lang active" :"nav_lang"}>
            <div className="language_ul">
                <div className="lan_list">
                <Link href="/ar" className="anchar" onClick={storage_language01}>
                <div className="calan">
                    <img src="/Images/saudi-arabia.png" alt="calan"/>
                    
                </div>
                Carabi
                </Link>
                </div>
                <div className="lan_list">
                <Link href="/" className="anchar" onClick={storage_language02}>
                <div className="calan">
                    <img src="/Images/united-states.png" alt="calan"/>
                </div>
                English
                </Link>
                </div>

            </div>
        </div>
        </>
    )
}

export default LangNavSo