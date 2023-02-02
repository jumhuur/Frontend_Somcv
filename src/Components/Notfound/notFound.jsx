import { Link } from "react-router-dom"
import { Usecvcontext } from "../Context/Cv"
function NotFound(){
    const {cv,Allusers,download} = Usecvcontext()
    return (
        <>
    <section className="Head">
        <div className="Home_conten">
            <div className="haye">
             <div className="home_Parts">
                <div className="side left">
                    <div className="qoraalo">
                    <h2>
                    Oobs ! Sorray This page is not available 404
                    </h2>
                    <p className="desc_Home">
                    Dear visitor, the page you want is not available on the site. Please return to the home page. Click this button below. Good luck
                    </p>
                    </div>
                    <div className="actions_home">
                    <Link to="/">
                        <button className="req">   
                        Home Page
                        </button>
                    </Link>
                    </div>
                    <div className="all_clints">
                        <span className="title">General statistics :</span>
                        <div className="clints">
                            <div className="clint">
                            {/* <img src="/Images/client-1.svg" alt="1"/> */}
                            <h2 className="ltr"><i className="fa-solid fa-cloud-arrow-down"></i> downloads <span>({download && download.length})</span></h2>
                            </div>
                            <div className="clint">
                            {/* <img src="/Images/client-2.svg" alt="2"/> */}
                            <h2 className="ltr"><i className="fa-solid fa-user"></i> Users <span>({Allusers && Allusers.length})</span></h2>
                            </div>
                            <div className="clint">
                            {/* <img src="/Images/client-3.svg" alt="3"/> */}
                            <h2 className="ltr"><i className="fa-solid fa-file-lines"></i> CV Design  <span>({cv && cv.length})</span></h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="side right">
                    <img src={`/Images/Not_Found_image.svg`} alt="Home"/>
                </div>
            </div>   
            </div>
        </div>
    </section>
        </>
    )
}


export default NotFound