import { useState } from "react"
import { Link } from "react-router-dom"
import Jobskalaton from "../../Sklations/jobsskl"
import FilltersAr from "./filltersAr"

function JobsDesignAr() {
    const [jobs, setjobs] = useState(null)
    return (
        <>
        <div className="job_haye" dir="rtl">
        <div className="">
            <div className="jobs_Design">
                <FilltersAr />
                <div className="jobs">
                <div className="filtter_dush">
                    <div className="inf_and_title">
                    {jobs  && 
                    <h2 className="ciwaan_jobs">يوجد (235) وظيفة</h2>
                    }

                    {!jobs &&
                    <h2 className="ciwaan_jobs">إنتظر قليلا من فضلك !</h2>
                    }
                    
                    </div>
                    <div className="selector_qaybta">
                        <form action="" className="selet_qayb">
                            <select className="qayb">
                                <option>إجتر قسم وظيفة</option>
                                <option>Qaybta 2aad</option>
                                <option>Qaybta 3aad</option>
                                <option>Qaybta 4aad</option>
                                <option>Qaybta 5aad</option>
                                <option>Qaybta 6aad</option>
                            </select>
                            {/* <select className="qayb">
                                <option>Dooro Wakhtiga</option>
                                <option>full-time</option>
                                <option>Part-time</option>
                            </select>
                            <select className="qayb">
                                <option>Dooro Magaalada</option>
                                <option>Hargeisa</option>
                                <option>Muqdiso</option>
                                <option>Boorama</option>
                                <option>Burco </option>
                                <option>Berbera</option>
                                <option>Gabilay</option>
                                <option>Boosaaso</option>
                            </select> */}
                        </form>
                    </div>
                </div>
                {/* <div className="jobs_in_job ar">
                    <div className="logo_job">
                        <img src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="sawir_shaqo" />
                    </div>
                    <div className="info_and_title">
                        <div className="ciwaan_shaqo">
                            <h2>مظور مواقع بالغة جافا سكريبت </h2>
                            <div className="info">
                            <h3><i className="fa-solid fa-location-dot"></i> هرجيسا </h3>
                            <h3><i className="fa-regular fa-clock"></i> دوام كامل</h3>
                            <h3><i className="fa-solid fa-user-tie"></i> 265</h3>
                        </div>
                        </div>
                    </div>
                    <div className="actions_btn" dir="ltr">
                        <button className="btn_job_applay">قدم طالبك</button>
                        <h3><i className="fa-regular fa-clock"></i> 3 days ago</h3>
                    </div>
                </div>
                <div className="jobs_in_job ar">
                    <div className="logo_job">
                        <img src="/Images/Web.png" alt="sawir_shaqo" />
                    </div>
                    <div className="info_and_title">
                        <div className="ciwaan_shaqo">
                            <h2>طبيب الأسنان محترف </h2>
                            <div className="info">
                            <h3><i className="fa-solid fa-location-dot"></i> بورما </h3>
                            <h3><i className="fa-regular fa-clock"></i> دوام جزئي</h3>
                            <h3><i className="fa-solid fa-user-tie"></i> 65</h3>
                        </div>
                        </div>
                    </div>
                    <div className="actions_btn" dir="ltr">
                        <button className="btn_job_applay">قدم طالبك</button>
                        <h3><i className="fa-regular fa-clock"></i> 9 days ago</h3>
                    </div>
                </div>
                <div className="jobs_in_job ar">
                    <div className="logo_job">
                        <img src="https://preview.colorlib.com/theme/jobsco/assets/img/icon/1.svg" alt="sawir_shaqo" />
                    </div>
                    <div className="info_and_title">
                        <div className="ciwaan_shaqo">
                            <h2>مدرسة اللغة العربية </h2>
                            <div className="info">
                            <h3><i className="fa-solid fa-location-dot"></i> برعو </h3>
                            <h3><i className="fa-regular fa-clock"></i> دوام كامل </h3>
                            <h3><i className="fa-solid fa-user-tie"></i> 65</h3>
                        </div>
                        </div>
                    </div>
                    <div className="actions_btn" dir="ltr">
                        <button className="btn_job_applay">قدم طالبك</button>
                        <h3><i className="fa-regular fa-clock"></i> 9 days ago</h3>
                    </div>
                </div>
                <div className="jobs_in_job ar">
                    <div className="logo_job">
                        <img src="https://images.unsplash.com/photo-1526379095098-d400fd0bf935?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80" alt="sawir_shaqo" />
                    </div>
                    <div className="info_and_title">
                        <div className="ciwaan_shaqo">
                            <h2>مدير معهد </h2>
                            <div className="info">
                            <h3><i className="fa-solid fa-location-dot"></i> جبلي </h3>
                            <h3><i className="fa-regular fa-clock"></i> دام جزئي</h3>
                            <h3><i className="fa-solid fa-user-tie"></i> 105</h3>
                        </div>
                        </div>
                    </div>
                    <div className="actions_btn" dir="ltr">
                        <button className="btn_job_applay">قدم طالبك</button>
                        <h3><i className="fa-regular fa-clock"></i> 16 days ago</h3>
                    </div>
                </div>
                <div className="jobs_in_job ar">
                    <div className="logo_job">
                        <img src="https://preview.colorlib.com/theme/jobsco/assets/img/icon/4.svg" alt="sawir_shaqo" />
                    </div>
                    <div className="info_and_title">
                        <div className="ciwaan_shaqo">
                            <h2>محاسب بنكي </h2>
                            <div className="info">
                            <h3><i className="fa-solid fa-location-dot"></i> هرجيسا</h3>
                            <h3><i className="fa-regular fa-clock"></i> دوام جزئي</h3>
                            <h3><i className="fa-solid fa-user-tie"></i> 22</h3>
                        </div>
                        </div>
                    </div>
                    <div className="actions_btn" dir="ltr">
                        <button className="btn_job_applay">قدم طالبك</button>
                        <h3><i className="fa-regular fa-clock"></i> 11 days ago</h3>
                    </div>
                </div>
                <div className="jobs_in_job ar">
                    <div className="logo_job">
                        <img src="https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGpvYnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="sawir_shaqo" />
                    </div>
                    <div className="info_and_title">
                        <div className="ciwaan_shaqo">
                            <h2>مشرف أنظمة دولية </h2>
                            <div className="info">
                            <h3><i className="fa-solid fa-location-dot"></i> هرجيسا</h3>
                            <h3><i className="fa-regular fa-clock"></i> دوام كامل</h3>
                            <h3><i className="fa-solid fa-user-tie"></i> 1652</h3>
                        </div>
                        </div>
                    </div>
                    <div className="actions_btn" dir="ltr">
                        <button className="btn_job_applay">قدم طالبك</button>
                        <h3><i className="fa-regular fa-clock"></i> 17 days ago</h3>
                    </div>
                </div>
                <div className="jobs_in_job ar">
                    <div className="logo_job">
                        <img src="https://images.unsplash.com/file-1636585210491-f28ca34ea8ecimage?dpr=2&auto=format&fit=crop&w=416&q=60" alt="sawir_shaqo" />
                    </div>
                    <div className="info_and_title">
                        <div className="ciwaan_shaqo">
                            <h2>مطور تطبيقات الهوتف - الأندرويد </h2>
                            <div className="info">
                            <h3><i className="fa-solid fa-location-dot"></i> بربرى </h3>
                            <h3><i className="fa-regular fa-clock"></i> دوام كامل</h3>
                            <h3><i className="fa-solid fa-user-tie"></i> 5</h3>
                        </div>
                        </div>
                    </div>
                    <div className="actions_btn" dir="ltr">
                        <button className="btn_job_applay">Applay</button>
                        <h3><i className="fa-regular fa-clock"></i> 22 days ago</h3>
                    </div>
                </div>
                <div className="jobs_in_job ar">
                    <div className="logo_job">
                        <img src="/Images/Web.png" alt="sawir_shaqo" />
                    </div>
                    <div className="info_and_title">
                        <div className="ciwaan_shaqo">
                            <h2>سائق سيارة التوصيل مع مسؤولية التوصيل</h2>
                            <div className="info">
                            <h3><i className="fa-solid fa-location-dot"></i> هرجيسا</h3>
                            <h3><i className="fa-regular fa-clock"></i> دام كامل</h3>
                            <h3><i className="fa-solid fa-user-tie"></i> 12</h3>
                        </div>
                        </div>
                    </div>
                    <div className="actions_btn" dir="ltr">
                        <button className="btn_job_applay">Applay</button>
                        <h3><i className="fa-regular fa-clock"></i> 26 days ago</h3>
                    </div>
                </div> */}
                {jobs && [0,1,2,3,4,5,6,7].map((key) => (
                <div className="jobs_in_job ar">
                <div className="logo_job">
                    <img src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="sawir_shaqo" />
                </div>
                <div className="info_and_title">
                    <div className="ciwaan_shaqo">
                        <h2>مظور مواقع بالغة جافا سكريبت </h2>
                        <div className="info">
                        <h3><i className="fa-solid fa-location-dot"></i> هرجيسا </h3>
                        <h3><i className="fa-regular fa-clock"></i> دوام كامل</h3>
                        <h3><i className="fa-solid fa-user-tie"></i> 265</h3>
                    </div>
                    </div>
                </div>
                <div className="actions_btn" dir="ltr">
                    <button className="btn_job_applay">قدم طالبك</button>
                    <h3><i className="fa-regular fa-clock"></i> 3 days ago</h3>
                </div>
                </div>
                ))}

                {!jobs && [0,1,2,3,4,5,6,7].map((n) => (
                    <Jobskalaton key={n} />
                ))}
                <div className="dhamaad">
                    <button><i className="fa-solid fa-circle-arrow-left"></i> تصفح جميع الوظائف </button>
                </div>
                </div>
            </div>
        </div>
        </div>
        
        </>
    )
}


export default JobsDesignAr