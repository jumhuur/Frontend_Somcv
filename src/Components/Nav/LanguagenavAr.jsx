function LangNavAr({Lan}){
    const storage_language01 = () => {
        const lang = localStorage.getItem('lan')
        if(lang === "Ar"){
            localStorage.setItem("lan","En")
        } else {
            localStorage.setItem("lan","En")
        }
    }
    const storage_language02 = () => {
        const lang = localStorage.getItem('lan')
        if(lang === "Ar"){
            localStorage.setItem("lan","so")
        } else  {
            localStorage.setItem("lan","so")
        }
    }
    return (
        <>
        <div className={Lan ? "nav_lang active" :"nav_lang"} style={{right: "224px"}}>
            <div className="language_ul">
            <div className="lan_list">
                <a href="/" className="anchar" onClick={storage_language01}>
                <div className="calan">
                    <img src="/Images/united-states.png" alt="calan"/>
                    
                </div>
                الإندجليزية
                </a>
            </div>
            <div className="lan_list">
                <a href="/so" className="anchar" onClick={storage_language02}>
                <div className="calan">
                    <img src="/Images/somaliland.png" alt="calan"/>
                </div>
                الصومالية
                </a>
            </div>
            </div>
        </div>
        </>
    )
}

export default LangNavAr