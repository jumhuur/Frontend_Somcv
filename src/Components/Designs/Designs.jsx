import { useEffect } from "react";
import {Link} from "react-router-dom";
import { useProtectedPage } from "../Context/Auth";
import {Usecvcontext} from "../Context/Cv";
import Cvskl from "../Sklations/cvskl";
function Designs({click}) {
    const {cv} = Usecvcontext()
    const {CrentUser} = useProtectedPage()
    return (
        <>
        <div className="design_cover">
            <div className="haye ciwaan">
                <div className="ciwaan_adv">
                    <h2> <span><i className="fa-solid fa-parachute-box"></i> ready </span> designs</h2>
                </div>
                <h3>use ready-made designs</h3>
                <div className="designs">
                    {cv && cv.map((cvdata) => (
                    <div className="design" key={cvdata._id}>
                    <div className="info_design">
                        {CrentUser && CrentUser.leval === "Mamul"?
                        <>
                        <div className="update">
                            <Link to={`/updateCv/${cvdata._id}`}><p>Update</p></Link> 
                        </div>
                        </>
                        :<></>
                        }

                        <Link to={"/"}>
                        <h2>Design {cvdata.Magac}</h2>
                        </Link>
                        <p><i className="fa-solid fa-dollar-sign"></i> 0{cvdata.Qiimaha} USD</p>
                    </div>
                    <Link to={`/?id=${cvdata._id}`} className="ankar_poin">
                    <button  className="P_previews" onClick={click}><i className="fa-solid fa-eye"></i> Preview</button>
                   </Link>
                    <div className="in_design">
                    <Link to={"/"}>
                        <img src={cvdata.Image}  alt="design_temp"/>
                       </Link>
                    </div>
                    </div>  
                    ))}

                    
                    {!cv  && [0,1,2,3,4,5,6,7,8].map((Num) => (
                        <Cvskl key={Num} />
                    ))}


                </div>
            </div>
        </div>
        </>
    )
}

export default Designs