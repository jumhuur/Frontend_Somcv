import { useProtectedPage } from "../../Context/Auth"
import { Usecvcontext } from "../../Context/Cv"
import Styletemp1 from "./Template1.module.css"
import React from "react";
function Template({cv,color1,color2}){
    const {CrentUser} = useProtectedPage()
    const {info} = Usecvcontext()
    return (
        <>
        <div className={Styletemp1.page_cv_container}>
            <div className={Styletemp1.cv_doc} style={{backgroundColor: `${color1}`}}>
                <div className={Styletemp1.image_and_name}>
                    <div className={Styletemp1.image} style={{backgroundImage: `Url(${info ? info.Image : "/Images/User.png"})`}}>
                        <img src={CrentUser ? info.Image : "/Images/User.png"} alt="image_user" />
                    </div>
                    <h2>{CrentUser ? info.Name : "John Due"}</h2>
                    <h3 style={{color: color2}}>{CrentUser ? info.Jobtitle : "Your Job Title"}</h3>
                    <div className={Styletemp1.qurxin}>
                        <span></span>
                    </div>
                    <div className={Styletemp1.person_contects}>
                        <h2 className={Styletemp1.ciwaan}>CONTECT INFO</h2>
                        <ul className={Styletemp1.ul_contect}>
                            <li className={Styletemp1.list_contect}>
                            <i style={{color: color2}} className="fa-solid fa-phone"></i>  {CrentUser ? info.Tell : " 063-4XXXXXXX"}
                            </li>
                            <li className={Styletemp1.list_contect}>
                            <i style={{color: color2}} className="fa-solid fa-envelope"></i>  {CrentUser ? info.Cvemail : " example123@hotmail.com"}
                            </li>
                            <li className={Styletemp1.list_contect}>
                            <i style={{color: color2}} className="fa-solid fa-location-dot"></i> {CrentUser ? info.Location : "Your Cantry | City"}
                            </li>
                            
                        </ul>
                    </div>
                    <div  className={Styletemp1.qurxin}>
                        <span></span>
                    </div>
                    <div className={`${Styletemp1.person_contects} ${Styletemp1.edecation}`}>
                        <h2 className={Styletemp1.ciwaan}>EDUCATION</h2>
                        <div className={Styletemp1.heer_waxbrasho}>
                            <h3 style={{color: color2}} className={Styletemp1.Ciwaan_hoose}>{CrentUser ? info.Edyear1 : "2022-2030"}</h3>
                            <p className={Styletemp1.qoraal_hoose}>
                             {CrentUser ? info.Eddesc1 : "Simple text deskription this"}
                            </p>
                            <h4 style={{color: color2}} className={Styletemp1.Ciwaan_hoose}><i className="fa-solid fa-graduation-cap"></i> {CrentUser ? info.Edunivername1 : "Name Universaty"}</h4>
                        </div>
                        <div className={Styletemp1.heer_waxbrasho}>
                            <h3 style={{color: color2}} className={Styletemp1.Ciwaan_hoose}>{CrentUser ? info.Edyear2 : "2022-2030"}</h3>
                            <p className={Styletemp1.qoraal_hoose}>
                             {CrentUser ? info.Eddesc2 : "Simple text deskription this"}
                            </p>
                            <h4 style={{color: color2}} className={Styletemp1.Ciwaan_hoose}><i className="fa-solid fa-graduation-cap"></i> {CrentUser ? info.Edunivername2 : "Name Universaty"}</h4>
                        </div>
                        <div className={Styletemp1.heer_waxbrasho}>
                            <h3 style={{color: color2}} className={Styletemp1.Ciwaan_hoose}>{CrentUser ? info.Edyear3 : "2022-2030"}</h3>
                            <p className={Styletemp1.qoraal_hoose}>
                             {CrentUser ? info.Eddesc3 : "Simple text deskription this"}
                            </p>
                            <h4 style={{color: color2}} className={Styletemp1.Ciwaan_hoose}><i className="fa-solid fa-graduation-cap"></i> {CrentUser ? info.Edunivername3 : "Name Universaty"}</h4>
                        </div>
                    </div>
                    <div className={Styletemp1.qurxin}>
                        <span></span>
                    </div>
                    <div  className={`${Styletemp1.person_contects} ${Styletemp1.Luuqadaha}`}>
                        <h2 className={Styletemp1.ciwaan}>LANGUAGES</h2>
                        <div className={Styletemp1.heer_waxbrasho}>
                            <h3 className={`${Styletemp1.Ciwaan_hoose} ${Styletemp1.Langugage}`}>{CrentUser ? info.Langname1 : "language Name"} {CrentUser ? info.Langprog1 : "50"}%</h3>
                            <div className={Styletemp1.lan_prog}>
                                <span className={Styletemp1.prog}  style={{width:`${CrentUser ? info.Langprog1 : "50"}%`, backgroundColor: color2}}>

                                </span>
                            </div>
                            <h3 className={`${Styletemp1.Ciwaan_hoose} ${Styletemp1.Langugage}`}>{CrentUser ? info.Langname2 : "language Name"} {CrentUser ? info.Langprog2 : "50"}%</h3>
                            <div className={Styletemp1.lan_prog}>
                                <span className={Styletemp1.prog} style={{width:`${CrentUser ? info.Langprog2 : "50"}%`, backgroundColor: color2}}>

                                </span>
                            </div>
                            <h3 className={`${Styletemp1.Ciwaan_hoose} ${Styletemp1.Langugage}`}>{CrentUser ? info.Langname3 : "language Name"} {CrentUser ? info.Langprog3 : "50"}%</h3>
                            <div className={Styletemp1.lan_prog}>
                                <span className={Styletemp1.prog}  style={{width:`${CrentUser ? info.Langprog3 : "50"}%`, backgroundColor: color2}}>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={Styletemp1.work_info}>
                <div className={`${Styletemp1.sections} ${Styletemp1.Profile}`}>
                    <h3 style={{color: color2}} className={Styletemp1.ciwaano_left}>POFILE</h3>
                    <p className={Styletemp1.qoraal_hoose}>
                    {CrentUser ? info.Profile : "  Lorem Ipsum is simply dummy text of the  Lorem Ipsum is simply dummy text of the Lorem Ipsum is simply dummy text of the Lorem Ipsum is simply dummy text of the Lorem Ipsum is simply dummy text of the "}
                  
                    </p>
                </div>
                <div className={`${Styletemp1.sections} ${Styletemp1.Exprians}`}>
                    <h3 style={{color: color2}} className={Styletemp1.ciwaano_left}>EXPERIANS</h3>
                    <div className={Styletemp1.exp}>
                        <div className={`${Styletemp1.qayb} ${Styletemp1.date_compny}`}>
                            <h4 className={Styletemp1.Ciwaan_hoose}>{CrentUser ? info.Exyear1 : "2022-2030"}</h4>
                            <h4  className={Styletemp1.Ciwaan_hoose}><i className="fa-solid fa-building"></i> {CrentUser ? info.Excompnay1 : "Compny Name"}</h4>
                        </div>
                        <div className={`${Styletemp1.qayb} ${Styletemp1.info}`}>
                            <h4 style={{color:color2}} className={Styletemp1.Ciwaan_hoose}>{CrentUser ? info.Exjob1 : "Job Title Here"}</h4>
                            <p className={Styletemp1.qoraal_hoose}>
                            {CrentUser ? info.Exdesc1 : "Lorem Ipsum is simply dummy text of the Lorem Ipsum is simply dummy text of the"}</p>
                        </div>
                    </div>
                    <div className={Styletemp1.exp}>
                        <div className={`${Styletemp1.qayb} ${Styletemp1.date_compny}`}>
                            <h4 className={Styletemp1.Ciwaan_hoose}>{CrentUser ? info.Exyear2 : "2022-2030"}</h4>
                            <h4 className={Styletemp1.Ciwaan_hoose}><i className="fa-solid fa-building"></i> {CrentUser ? info.Excompnay2 : "Compny Name"} </h4>
                        </div>
                        <div className={`${Styletemp1.qayb} ${Styletemp1.info}`}>
                            <h4 style={{color:color2}} className={Styletemp1.Ciwaan_hoose}>{CrentUser ? info.Exjob2 : "Job Title Here"}</h4>
                            <p className={Styletemp1.qoraal_hoose}>
                            {CrentUser ? info.Exdesc2 : "Lorem Ipsum is simply dummy text of the Lorem Ipsum is simply dummy text of the"}</p>
                        </div>
                    </div>
                    <div className={Styletemp1.exp}>
                        <div className={`${Styletemp1.qayb} ${Styletemp1.date_compny}`}>
                            <h4 className={Styletemp1.Ciwaan_hoose}>{CrentUser ? info.Exyear3 : "2022-2030"}</h4>
                            <h4 className={Styletemp1.Ciwaan_hoose}><i className="fa-solid fa-building"></i> {CrentUser ? info.Excompnay3 : "Compny Name"} </h4>
                        </div>
                        <div className={`${Styletemp1.qayb} ${Styletemp1.info}`}>
                            <h4 style={{color:color2}} className={Styletemp1.Ciwaan_hoose}>{CrentUser ? info.Exjob3 : "Job Title Here"}</h4>
                            <p className={Styletemp1.qoraal_hoose}>
                            {CrentUser ? info.Exdesc3 : "Lorem Ipsum is simply dummy text of the Lorem Ipsum is simply dummy text of the"}</p>
                        </div>
                    </div>
                </div>
                <div className={`${Styletemp1.sections} ${Styletemp1.Exprians}`}>
                    <h3 style={{color:color2}} className={Styletemp1.ciwaano_left}>SKILLS</h3>
                    <div className={Styletemp1.exp}>
                        <div className={`${Styletemp1.qayb} ${Styletemp1.date_compny} ${Styletemp1.SKILLS}`}>
                            <h4  className={Styletemp1.Ciwaan_hoose}> {CrentUser ? info.Skillname : "Skill Name Here"} </h4>
                        </div>
                        <div className={`${Styletemp1.qayb} ${Styletemp1.info} ${Styletemp1.SKILLS}`}>
                        <span  className={`${Styletemp1.prog}  ${Styletemp1.skills}`} style={{width:`${CrentUser ? info.Skillprog : "50"}%`, backgroundColor: color2}}>

                        </span>
                        </div>
                    </div>
                    <div className={Styletemp1.exp}>
                        <div className={`${Styletemp1.qayb} ${Styletemp1.date_compny} ${Styletemp1.SKILLS}`}>
                            <h4  className={Styletemp1.Ciwaan_hoose}> {CrentUser ? info.Skillname1 : "Skill Name Here"} </h4>
                        </div>
                        <div className={`${Styletemp1.qayb} ${Styletemp1.info} ${Styletemp1.SKILLS}`}>
                        <span  className={`${Styletemp1.prog}  ${Styletemp1.skills}`} style={{width:`${CrentUser ? info.Skillprog1 : "50"}%`, backgroundColor: color2}}>

                        </span>
                        </div>
                    </div>
                    <div className={Styletemp1.exp}>
                        <div className={`${Styletemp1.qayb} ${Styletemp1.date_compny} ${Styletemp1.SKILLS}`}>
                            <h4  className={Styletemp1.Ciwaan_hoose}> {CrentUser ? info.Skillname2 : "Skill Name Here"} </h4>
                        </div>
                        <div className={`${Styletemp1.qayb} ${Styletemp1.info} ${Styletemp1.SKILLS}`}>
                        <span  className={`${Styletemp1.prog}  ${Styletemp1.skills}`} style={{width:`${CrentUser ? info.Skillprog2 : "50"}%`, backgroundColor: color2}}>

                        </span>
                        </div>
                    </div>
                    <div className={Styletemp1.exp}>
                        <div className={`${Styletemp1.qayb} ${Styletemp1.date_compny} ${Styletemp1.SKILLS}`}>
                            <h4  className={Styletemp1.Ciwaan_hoose}> {CrentUser ? info.Skillname3 : "Skill Name Here"} </h4>
                        </div>
                        <div className={`${Styletemp1.qayb} ${Styletemp1.info} ${Styletemp1.SKILLS}`}>
                        <span  className={`${Styletemp1.prog}  ${Styletemp1.skills}`} style={{width:`${CrentUser ? info.Skillprog3 : "50"}%`, backgroundColor: color2}}>

                        </span>
                        </div>
                    </div>
                    <div className={Styletemp1.exp}>
                        <div className={`${Styletemp1.qayb} ${Styletemp1.date_compny} ${Styletemp1.SKILLS}`}>
                            <h4  className={Styletemp1.Ciwaan_hoose}> {CrentUser ? info.Skillname4 : "Skill Name Here"}</h4>
                        </div>
                        <div className={`${Styletemp1.qayb} ${Styletemp1.info} ${Styletemp1.SKILLS}`}>
                        <span  className={`${Styletemp1.prog}  ${Styletemp1.skills}`} style={{width:`${CrentUser ? info.Skillprog4 : "50"}%`, backgroundColor: color2}}>

                        </span>
                        </div>
                    </div>
                    <div className={Styletemp1.exp}>
                        <div className={`${Styletemp1.qayb} ${Styletemp1.date_compny} ${Styletemp1.SKILLS}`}>
                            <h4  className={Styletemp1.Ciwaan_hoose}> {CrentUser ? info.Skillname5 : "Skill Name Here"} </h4>
                        </div>
                        <div className={`${Styletemp1.qayb} ${Styletemp1.info} ${Styletemp1.SKILLS}`}>
                        <span  className={`${Styletemp1.prog}  ${Styletemp1.skills}`} style={{width:`${CrentUser ? info.Skillprog5 : "50"}%`, backgroundColor: color2}}>

                        </span>
                        </div>
                    </div>
                    <div className={Styletemp1.exp}>
                        <div className={`${Styletemp1.qayb} ${Styletemp1.date_compny} ${Styletemp1.SKILLS}`}>
                            <h4  className={Styletemp1.Ciwaan_hoose}> {CrentUser ? info.Skillname6 : "Skill Name Here"}</h4>
                        </div>
                        <div className={`${Styletemp1.qayb} ${Styletemp1.info} ${Styletemp1.SKILLS}`}>
                        <span  className={`${Styletemp1.prog}  ${Styletemp1.skills}`} style={{width:`${CrentUser ? info.Skillprog6 : "50"}%` , backgroundColor: color2}}>
                        </span>
                        </div>
                    </div>
                </div>
                <div className={`${Styletemp1.sections} ${Styletemp1.Interest}`}>
                    <h3 style={{color:color2}} className={Styletemp1.ciwaano_left}>INTARESTES</h3>
                    <ul className={Styletemp1.interst}>
                        <li className={Styletemp1.lits_inters}>
                        <i style={{color:color2}} className="fa-solid fa-circle-dot"></i> {CrentUser  ? info.Inters1 : "Name"} 
                        </li>
                        <li className={Styletemp1.lits_inters}>
                        <i style={{color:color2}} className="fa-solid fa-circle-dot"></i> {CrentUser  ? info.Inters2 : "Name"} 
                        </li>
                        <li className={Styletemp1.lits_inters}>
                        <i style={{color:color2}} className="fa-solid fa-circle-dot"></i> {CrentUser  ? info.Inters3 : "Name"} 
                        </li>
                        <li className={Styletemp1.lits_inters}>
                        <i style={{color:color2}} className="fa-solid fa-circle-dot"></i> {CrentUser  ? info.Inters4 : "Name"}
                        </li>

                    </ul>
                </div>
                
            </div>
        </div>
        </>
    )
}

export default Template