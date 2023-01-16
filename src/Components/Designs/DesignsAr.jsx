import {Link} from "react-router-dom";
import {Usecvcontext} from "../Context/Cv";
import Cvskl from "../Sklations/cvskl";
function DesignsAr({click}) {
    const {cv} = Usecvcontext()
    return (
        <>
        <div className="design_cover" dir="rtl">
            <div className="haye ciwaan">
                <div className="ciwaan_adv">
                    <h2> <span><i className="fa-solid fa-parachute-box"></i> التصاميم</span> الجاخهزة الان</h2>
                </div>
                <h3>إسنخدم واحد من التصاميم الجاهزة</h3>
                <div className="designs">
                    {cv && cv.map((cvdata) => (
                    <div className="design" key={cvdata._id}>
                    <div className="info_design">
                        <Link to={"/"}>
                        <h2>السيرة الذاتية رقم {cvdata.Magac}</h2>
                        </Link>
                        <p><i className="fa-solid fa-dollar-sign"></i> 0{cvdata.Price} USD</p>
                    </div>
                    <Link to={`/ar/?id=${cvdata._id}`} className="ankar_poin">
                    <button  className="P_previews" onClick={click}><i className="fa-solid fa-eye"></i> نظرة سريعة</button>
                   </Link>
                    <div className="in_design">
                    <Link to={"/"}>
                        <img src={cvdata.Image}  alt="design_temp"/>
                       </Link>
                    </div>
                    </div>
                    ))}

                    {!cv && [0,1,2,3,4,5,6,7,8].map((Num) => (
                                            <Cvskl key={Num} />
                    ))}
                </div>
            </div>
        </div>
        </>
    )
}

export default DesignsAr