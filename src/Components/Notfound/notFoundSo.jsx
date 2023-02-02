import { Link } from "react-router-dom"
import { Usecvcontext } from "../Context/Cv"

function NotFoundSo(){
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
                    Oobs! Waan ka xumahay boggan lama heli karo
                    </h2>
                    <p className="desc_Home">
                    Booqdaha qaaliga ah, bogga aad rabto lagama heli karo Shabkadan, fadlan ku noqo bogga Hore, guji badhanka hoose, nasiib wacan
                    </p>
                    </div>
                    <div className="actions_home">
                    <Link to="/so">
                        <button className="req">   
                        Bogga Hore
                        </button>
                    </Link>
                    </div>
                    <div className="all_clints">
                        <span className="title">Tirakoobyo Guud :</span>
                        <div className="clints">
                            <div className="clint">
                            {/* <img src="/Images/client-1.svg" alt="1"/> */}
                            <h2 className="ltr"><i className="fa-solid fa-cloud-arrow-down"></i> dajisashada <span>({download && download.length})</span></h2>
                            </div>
                            <div className="clint">
                            {/* <img src="/Images/client-2.svg" alt="2"/> */}
                            <h2 className="ltr"><i className="fa-solid fa-user"></i> Isticmalayaasha <span>({Allusers && Allusers.length})</span></h2>
                            </div>
                            <div className="clint">
                            {/* <img src="/Images/client-3.svg" alt="3"/> */}
                            <h2 className="ltr"><i className="fa-solid fa-file-lines"></i> Nashqadaha <span>({cv && cv.length})</span></h2>
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


export default NotFoundSo