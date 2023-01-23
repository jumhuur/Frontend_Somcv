import { Link } from "react-router-dom"
import Footer from "../../Footer/Footer"
import Nav from "../../Nav/Nav"
function OneJob() {
    const Pagetitle = "Web Develeper neded"
    return (
        <>
        <Nav />
        <div className="head_edit">
        <div className="haye">
            <div className="qoraal_edit">
                <p> {Pagetitle}</p>
            </div>
        </div>
        </div>
        <div className="Xajiye_guud onejob">
        <div className="xajiye">
            <div className="job_one_container">
                <div className="qayb_midi">
                <div className="jobs_in_job n_ar">
                 <div className="logo_job">
                     <img src="/Images/Web.png" alt="sawir_shaqo" />
                 </div>
                 <div className="info_and_title">
                    <Link to={`/job/689870`}>
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
                <div className="job_desc">
                    {<>
                        <p>sjdkhsajdhsajdas</p><p>sjdkhsajdhsajdas</p><p>sjdkhsajdhsajdas</p><p>sjdkhsajdhsajdas</p><p>sjdkhsajdhsajdas</p><p>sjdkhsajdhsajdas</p><p>sjdkhsajdhsajdas</p><p>sjdkhsajdhsajdas</p><p>sjdkhsajdhsajdas</p><p>sjdkhsajdhsajdas</p><p>sjdkhsajdhsajdas</p><p>sjdkhsajdhsajdas</p><p>sjdkhsajdhsajdas</p><p>sjdkhsajdhsajdas</p>
<ul>
<li>sajdhgsahdsa</li>
<li>sajdhgsahdsa</li>
<li>sajdhgsahdsa</li>
<li>sajdhgsahdsa</li>
<li>sajdhgsahdsa</li>
<li>sajdhgsahdsa</li>
<li>sajdhgsahdsa</li>

</ul>                
                    </>}
                </div>
                </div>
                <div className="qayb_bidix">
                    <p>Qayb Bidix</p>
                </div>
            </div>
        </div>
        </div>
        <Footer />

        </>
    )
}



export default OneJob