function MobileSo({Lan}){
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
        <div id="mobile_languge" className={Lan ? "nav_lang active" :"nav_lang active"}>
            <div className="language_ul">
                <div className="lan_list">
                <a href="/ar" className="anchar" onClick={storage_language01}>
                <div className="calan">
                    <img src="/Images/saudi-arabia.png" alt="calan"/>
                    
                </div>
                Carabi
                </a>
                </div>
                <div className="lan_list">
                <a href="/" className="anchar" onClick={storage_language02}>
                <div className="calan">
                    <img src="/Images/united-states.png" alt="calan"/>
                </div>
                English
                </a>
                </div>

            </div>
        </div>
        </>
    )
}

export default MobileSo