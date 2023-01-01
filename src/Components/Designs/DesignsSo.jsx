import {Link} from "react-router-dom";
import {Usecvcontext} from "../Context/Cv";
function DesignsSo({click}) {
    const {cv} = Usecvcontext()
    return (
        <>
        <div className="design_cover">
            <div className="haye ciwaan">
                <div className="ciwaan_adv">
                    <h2> <span><i className="fa-solid fa-parachute-box"></i> Nashqada</span> Diyaarsan</h2>
                </div>
                <h3>Isticmaal Nashqadahan Diyaarinta CV-gaaga</h3>
                <div className="designs">
                    {cv && cv.map((cvdata) => (
                    <div className="design" key={cvdata._id}>
                    <div className="info_design">
                        <Link to={"/"}>
                        <h2>Nashaqda {cvdata.Magac}</h2>
                        </Link>
                        <p><i className="fa-solid fa-dollar-sign"></i> 0{cvdata.Price} USD</p>
                    </div>
                    <Link to={`/so/?id=${cvdata._id}`} className="ankar_poin">
                    <button  className="P_previews" onClick={click}><i className="fa-solid fa-eye"></i> Itus Qaabka</button>
                   </Link>
                    <div className="in_design">
                    <Link to={"/so"}>
                        <img src={cvdata.Image}  alt="design_temp"/>
                       </Link>
                    </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
        </>
    )
}

export default DesignsSo