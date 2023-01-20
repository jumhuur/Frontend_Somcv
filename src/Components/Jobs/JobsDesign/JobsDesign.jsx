import { useState } from "react"
import { Link } from "react-router-dom"
import Jobskalaton from "../../Sklations/jobsskl"
import Fillters from "./fillters"

function JobsDesign() {
    const [jobs,setjobs] = useState(null)
    return (
        <>
        <div className="job_haye">
        <div className="">
            <div className="jobs_Design">
                <Fillters />
                <div className="jobs">
                <div className="filtter_dush">
                    <div className="inf_and_title">
                    <h2 className="ciwaan_jobs">Job list (235) jobs</h2>
                    </div>
                    <div className="selector_qaybta">
                        <form action="" className="selet_qayb">
                            <select className="qayb">
                                <option>Dooro Qaybta</option>
                                <option>Qaybta 2aad</option>
                                <option>Qaybta 3aad</option>
                                <option>Qaybta 4aad</option>
                                <option>Qaybta 5aad</option>
                                <option>Qaybta 6aad</option>
                            </select>
                        </form>
                    </div>
                </div>
                {/* <div className="jobs_in_job n_ar">
                    <div className="logo_job">
                        <img src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="sawir_shaqo" />
                    </div>
                    <div className="info_and_title">
                        <div className="ciwaan_shaqo">
                            <h2>React js Developer</h2>
                            <div className="info">
                                <h3><i className="fa-solid fa-location-dot"></i> Hargeis</h3>
                                <h3><i className="fa-regular fa-clock"></i> Full-Time</h3>
                                <h3><i className="fa-solid fa-user-tie"></i> 265</h3>
                            </div>
                        </div>
                    </div>
                    <div className="actions_btn">
                        <button className="btn_job_applay">Applay</button>
                        <h3><i className="fa-regular fa-clock"></i> 3 days ago</h3>
                    </div>
                </div>
                <div className="jobs_in_job n_ar">
                    <div className="logo_job">
                        <img src="/Images/Web.png" alt="sawir_shaqo" />
                    </div>
                    <div className="info_and_title">
                        <div className="ciwaan_shaqo">
                            <h2>Python and django Developer</h2>
                            <div className="info">
                            <h3><i className="fa-solid fa-location-dot"></i> Hargeis</h3>
                            <h3><i className="fa-regular fa-clock"></i> Full-Time</h3>
                            <h3><i className="fa-solid fa-user-tie"></i> 65</h3>
                        </div>
                        </div>
                    </div>
                    <div className="actions_btn">
                        <button className="btn_job_applay">Applay</button>
                        <h3><i className="fa-regular fa-clock"></i> 9 days ago</h3>
                    </div>
                </div>
                <div className="jobs_in_job n_ar">
                    <div className="logo_job">
                        <img src="https://preview.colorlib.com/theme/jobsco/assets/img/icon/1.svg" alt="sawir_shaqo" />
                    </div>
                    <div className="info_and_title">
                        <div className="ciwaan_shaqo">
                            <h2>Python and react js Developer</h2>
                            <div className="info">
                            <h3><i className="fa-solid fa-location-dot"></i> Hargeis</h3>
                            <h3><i className="fa-regular fa-clock"></i> Full-Time</h3>
                            <h3><i className="fa-solid fa-user-tie"></i> 65</h3>
                        </div>
                        </div>
                    </div>
                    <div className="actions_btn">
                        <button className="btn_job_applay">Applay</button>
                        <h3><i className="fa-regular fa-clock"></i> 9 days ago</h3>
                    </div>
                </div>
                <div className="jobs_in_job n_ar">
                    <div className="logo_job">
                        <img src="https://images.unsplash.com/photo-1526379095098-d400fd0bf935?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80" alt="sawir_shaqo" />
                    </div>
                    <div className="info_and_title">
                        <div className="ciwaan_shaqo">
                            <h2>Mern stack Developer</h2>
                            <div className="info">
                            <h3><i className="fa-solid fa-location-dot"></i> Hargeis</h3>
                            <h3><i className="fa-regular fa-clock"></i> Full-Time</h3>
                            <h3><i className="fa-solid fa-user-tie"></i> 65</h3>
                        </div>
                        </div>
                    </div>
                    <div className="actions_btn">
                        <button className="btn_job_applay">Applay</button>
                        <h3><i className="fa-regular fa-clock"></i> 9 days ago</h3>
                    </div>
                </div>
                <div className="jobs_in_job n_ar">
                    <div className="logo_job">
                        <img src="https://preview.colorlib.com/theme/jobsco/assets/img/icon/4.svg" alt="sawir_shaqo" />
                    </div>
                    <div className="info_and_title">
                        <div className="ciwaan_shaqo">
                            <h2>Rubby and reails Developer</h2>
                            <div className="info">
                            <h3><i className="fa-solid fa-location-dot"></i> Hargeis</h3>
                            <h3><i className="fa-regular fa-clock"></i> Full-Time</h3>
                            <h3><i className="fa-solid fa-user-tie"></i> 65</h3>
                        </div>
                        </div>
                    </div>
                    <div className="actions_btn">
                        <button className="btn_job_applay">Applay</button>
                        <h3><i className="fa-regular fa-clock"></i> 9 days ago</h3>
                    </div>
                </div>
                <div className="jobs_in_job n_ar">
                    <div className="logo_job">
                        <img src="https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGpvYnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="sawir_shaqo" />
                    </div>
                    <div className="info_and_title">
                        <div className="ciwaan_shaqo">
                            <h2>front end developer neded</h2>
                            <div className="info">
                            <h3><i className="fa-solid fa-location-dot"></i> Hargeis</h3>
                            <h3><i className="fa-regular fa-clock"></i> Full-Time</h3>
                            <h3><i className="fa-solid fa-user-tie"></i> 65</h3>
                        </div>
                        </div>
                    </div>
                    <div className="actions_btn">
                        <button className="btn_job_applay">Applay</button>
                        <h3><i className="fa-regular fa-clock"></i> 9 days ago</h3>
                    </div>
                </div>
                <div className="jobs_in_job n_ar">
                    <div className="logo_job">
                        <img src="https://images.unsplash.com/file-1636585210491-f28ca34ea8ecimage?dpr=2&auto=format&fit=crop&w=416&q=60" alt="sawir_shaqo" />
                    </div>
                    <div className="info_and_title">
                        <div className="ciwaan_shaqo">
                            <h2>express and node js developer</h2>
                            <div className="info">
                            <h3><i className="fa-solid fa-location-dot"></i> Hargeis</h3>
                            <h3><i className="fa-regular fa-clock"></i> Full-Time</h3>
                            <h3><i className="fa-solid fa-user-tie"></i> 65</h3>
                        </div>
                        </div>
                    </div>
                    <div className="actions_btn">
                        <button className="btn_job_applay">Applay</button>
                        <h3><i className="fa-regular fa-clock"></i> 9 days ago</h3>
                    </div>
                </div>
                <div className="jobs_in_job n_ar">
                    <div className="logo_job">
                        <img src="/Images/Web.png" alt="sawir_shaqo" />
                    </div>
                    <div className="info_and_title">
                        <div className="ciwaan_shaqo">
                            <h2>Driver Texi Neded</h2>
                            <div className="info">
                            <h3><i className="fa-solid fa-location-dot"></i> Hargeis</h3>
                            <h3><i className="fa-regular fa-clock"></i> Full-Time</h3>
                            <h3><i className="fa-solid fa-user-tie"></i> 65</h3>
                        </div>
                        </div>
                    </div>
                    <div className="actions_btn">
                        <button className="btn_job_applay">Applay</button>
                        <h3><i className="fa-regular fa-clock"></i> 9 days ago</h3>
                    </div>
                </div> */}
                {!jobs && [689870,689871,689872,689873,689874,689875,689876,689877].map((key) => (
                 <div className="jobs_in_job n_ar" key={key}>
                 <div className="logo_job">
                     <img src="/Images/Web.png" alt="sawir_shaqo" />
                 </div>
                 <div className="info_and_title">
                    <Link to={`/job/${key}`}>
                        <div className="ciwaan_shaqo">
                         <h2>Driver Texi Neded</h2>
                         <div className="info">
                         <h3><i className="fa-solid fa-location-dot"></i> Hargeis</h3>
                         <h3><i className="fa-regular fa-clock"></i> Full-Time</h3>
                         <h3><i className="fa-solid fa-user-tie"></i> 65</h3>
                     </div>
                     </div>
                     </Link>  
                 </div>
                 <div className="actions_btn">
                     <button className="btn_job_applay">Applay</button>
                     <h3><i className="fa-regular fa-clock"></i> 9 days ago</h3>
                 </div>
                </div> 
                ))}

                {jobs && [0,1,2,3,4,5,6,7].map((n) => (
                    <Jobskalaton key={n} />
                ))}
                
                <div className="dhamaad">
                    <button><i className="fa-solid fa-circle-arrow-right"></i> Borwse All Jobs</button>
                </div>
                </div>
            </div>
        </div>
        </div>
        
        </>
    )
}


export default JobsDesign