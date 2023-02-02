import { Link } from "react-router-dom"
import { Usecvcontext } from "../Context/Cv"

function NotFoundAr(){
    const {cv,Allusers,download} = Usecvcontext()
    return (
        <>
    <section className="Head" dir="rtl">
        <div className="Home_conten">
            <div className="haye">
             <div className="home_Parts">
                <div className="side left">
                    <div className="qoraalo">
                    <h2>
                    عفوًا! آسف هذه الصفحة غير متوفرة 404
                    </h2>
                    <p className="desc_Home ar" style={{textAlign: "right"}}>
                    عزيزي الزائر  الصفحة ألتي تريدها  غير متوفر في الموقع من فضلك إرجع إلى الصفحة البداية إضغط هذا الزر الذي في أسفل  حظ سعيد                     </p>
                    </div>
                    <div className="actions_home">
                    <Link to="/ar">
                        <button className="req">   
                        الصفحة البداية
                        </button>
                    </Link>
                    </div>
                    <div className="all_clints">
                        <span className="title">إحصائيات عامة :</span>
                        <div className="clints">
                            <div className="clint">
                            {/* <img src="/Images/client-1.svg" alt="1"/> */}
                            <h2 className="Ar"><i className="fa-solid fa-cloud-arrow-down"></i> عدد تحميلات <span>({download && download.length})</span></h2>
                            </div>
                            <div className="clint">
                            {/* <img src="/Images/client-2.svg" alt="2"/> */}
                            <h2 className="Ar"><i className="fa-solid fa-user"></i> عدد مستخدمين <span>({Allusers && Allusers.length})</span></h2>
                            </div>
                            <div className="clint">
                            {/* <img src="/Images/client-3.svg" alt="3"/> */}
                            <h2 className="Ar"><i className="fa-solid fa-file-lines"></i> عدد تصاميم  <span>({cv && cv.length})</span></h2>
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


export default NotFoundAr