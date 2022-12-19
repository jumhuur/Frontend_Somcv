import { useProtectedPage } from "../../Context/Auth"
import { Usecvcontext } from "../../Context/Cv"
import Styletemp1 from "./Template3.module.css"
import React from "react";
function Template3({cv,color1,color2}){
    const {CrentUser} = useProtectedPage()
    const {info} = Usecvcontext()
    return(
		<>
<div className={Styletemp1.resume}>
   <div className={Styletemp1.resume_left}  style={{background:`${color1}`}}>
     <div className={Styletemp1.resume_profile}>
       <img src={CrentUser ? info.Image : "/Images/user.png"} alt="profile_pic" />
     </div>
     <div className={Styletemp1.resume_content}>
       <div className={`${Styletemp1.resume_item} ${Styletemp1.resume_info}`}>
         <div className={Styletemp1.title}>
           <p className={Styletemp1.bold}>{CrentUser ? info.Name : "Default Name"}</p>
           <p className={Styletemp1.regular}>Designer</p>
         </div>
         <ul>
           <li>
             <div className={Styletemp1.icon}>
               <i className="fas fa-map-signs"></i>
             </div>
             <div className={Styletemp1.data}>
               21 Street, Texas <br /> USA
             </div>
           </li>
           <li>
             <div className={Styletemp1.icon}>
               <i className="fas fa-mobile-alt"></i>
             </div>
             <div className={Styletemp1.data}>
               +324 4445678
             </div>
           </li>
           <li>
             <div className={Styletemp1.icon}>
               <i className="fas fa-envelope"></i>
             </div>
             <div className={Styletemp1.data}>
               stephen@gmail.com
             </div>
           </li>
         </ul>
       </div>
       <div className={`${Styletemp1.resume_item} ${Styletemp1.resume_skills}`}>
         <div className={Styletemp1.title}>
           <p className={Styletemp1.bold}>skill's</p>
         </div>
         <ul>
           <li>
             <div className={Styletemp1.skill_name}>
               HTML
             </div>
             <div className={Styletemp1.skill_progress}>
               <span style={{width: "80%"}}></span>
             </div>
             <div className={Styletemp1.skill_per}>80%</div>
           </li>
           <li>
             <div className={Styletemp1.skill_name}>
               CSS
             </div>
             <div className={Styletemp1.skill_progress}>
               <span style={{width: "70%"}}></span>
             </div>
             <div className={Styletemp1.skill_per}>70%</div>
           </li>
           <li>
             <div className={Styletemp1.skill_name}>
               SASS
             </div>
             <div className={Styletemp1.skill_progress}>
               <span style={{width: "90%"}}></span>
             </div>
             <div className={Styletemp1.skill_per}>90%</div>
           </li>
           <li>
             <div className={Styletemp1.skill_name}>
               JS
             </div>
             <div className={Styletemp1.skill_progress}>
               <span style={{width: "60%"}}></span>
             </div>
             <div className={Styletemp1.skill_per}>60%</div>
           </li>
           <li>
             <div className={Styletemp1.skill_name}>
               JQUERY
             </div>
             <div className={Styletemp1.skill_progress}>
               <span style={{width: "88%"}}></span>
             </div>
             <div className={Styletemp1.skill_per}>88%</div>
           </li>
         </ul>
       </div>
       <div className={`${Styletemp1.resume_item} ${Styletemp1.resume_social}`}>
         <div className={Styletemp1.title}>
           <p className={Styletemp1.bold}>Social</p>
         </div>
         <ul>
           <li>
             <div className={Styletemp1.icon}>
               <i className="fab fa-facebook-square"></i>
             </div>
             <div className={Styletemp1.data}>
               <p className={Styletemp1.semi_bold}>Facebook</p>
               <p>Stephen@facebook</p>
             </div>
           </li>
           <li>
             <div className={Styletemp1.icon}>
               <i className="fab fa-twitter-square"></i>
             </div>
             <div className={Styletemp1.data}>
               <p className={Styletemp1.semi_bold}>Twitter</p>
               <p>Stephen@twitter</p>
             </div>
           </li>
           <li>
             <div className={Styletemp1.icon}>
               <i className="fab fa-youtube"></i>
             </div>
             <div className={Styletemp1.data}>
               <p className={Styletemp1.semi_bold}>Youtube</p>
               <p>Stephen@youtube</p>
             </div>
           </li>
           <li>
             <div className={Styletemp1.icon}>
               <i className="fab fa-linkedin"></i>
             </div>
             <div className={Styletemp1.data}>
               <p className={Styletemp1.semi_bold}>Linkedin</p>
               <p>Stephen@linkedin</p>
             </div>
           </li>
         </ul>
       </div>
     </div>
  </div>
  <div className={Styletemp1.resume_right}>
    <div className={`${Styletemp1.resume_item} ${Styletemp1.resume_about}`}>
        <div className={Styletemp1.title}>
           <p className={Styletemp1.bold}>About us</p>
         </div>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis illo fugit officiis distinctio culpa officia totam atque exercitationem inventore repudiandae?</p>
    </div>
    <div className={`${Styletemp1.resume_item} ${Styletemp1.resume_work}`}>
        <div className={Styletemp1.title}>
           <p className={Styletemp1.bold}>Work Experience</p>
         </div>
        <ul>
            <li>
                <div className={Styletemp1.date}>2013 - 2015</div> 
                <div className={Styletemp1.info}>
                     <p className={Styletemp1.semi_bold}>Lorem ipsum dolor sit amet.</p> 
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, voluptatibus!</p>
                </div>
            </li>
            <li>
              <div className={Styletemp1.date}>2015 - 2017</div>
              <div className={Styletemp1.info}>
                     <p className={Styletemp1.semi_bold}>Lorem ipsum dolor sit amet.</p> 
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, voluptatibus!</p>
                </div>
            </li>
            <li>
              <div className={Styletemp1.date}>2017 - Present</div>
              <div className={Styletemp1.info}>
                     <p className={Styletemp1.semi_bold}>Lorem ipsum dolor sit amet.</p> 
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, voluptatibus!</p>
                </div>
            </li>
        </ul>
    </div>
    <div className={`${Styletemp1.resume_item} ${Styletemp1.resume_education}`}>
      <div className={Styletemp1.title}>
           <p className={Styletemp1.bold}>Education</p>
         </div>
      <ul>
            <li>
                <div className={Styletemp1.date}>2010 - 2013</div> 
                <div className={Styletemp1.info}>
                     <p className={Styletemp1.semi_bold}>Web Designing (Texas University)</p> 
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, voluptatibus!</p>
                </div>
            </li>
            <li>
              <div className={Styletemp1.date}>2000 - 2010</div>
              <div className={Styletemp1.info}>
                     <p className={Styletemp1.semi_bold}>Texas International School</p> 
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, voluptatibus!</p>
                </div>
            </li>
        </ul>
    </div>
  </div>
</div>
</>
    )
}

export default Template3