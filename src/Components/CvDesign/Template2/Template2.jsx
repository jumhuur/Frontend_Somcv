import { useProtectedPage } from "../../Context/Auth"
import { Usecvcontext } from "../../Context/Cv"
import Styletemp2 from "./Template2.module.css"
 function Template2({color1}){
    const {CrentUser} = useProtectedPage()
    const {info} = Usecvcontext()
    return (
        <div className={Styletemp2.page_cv_container}>
            <div className={Styletemp2.cv_doc}>
                <div className={Styletemp2.image_and_name}>
                    <div className={Styletemp2.image}  style={{backgroundImage: `Url(${CrentUser ? info.Image : "/Images/User.png"})`}}>
                    <img src={CrentUser ? info.Image : "/Images/User.png"} alt="image_user" />
                    </div>
                    <h2>{CrentUser ? info.Name : "John Due"}</h2>
                    <h3 style={{color: color1}} className={Styletemp2.Jobtitle}>{CrentUser ? info.Jobtitle : "Your Job Title"}</h3>
                    <div className={Styletemp2.qurxin}>
                        <span></span>
                    </div>
                    <div className={Styletemp2.person_contects}>
                        <h2 className={Styletemp2.ciwaan}>CONTECT INFO</h2>
                        <ul className={Styletemp2.ul_contect}>
                            <li className={Styletemp2.list_contect}>
                            <i  style={{color: color1}} className="fa-solid fa-phone"></i>  {CrentUser ? info.Tell : " 063-4XXXXXXX"}
                            </li>
                            <li className={Styletemp2.list_contect}>
                            <i  style={{color: color1}} className="fa-solid fa-envelope"></i>  {CrentUser ? info.Cvemail : " example123@hotmail.com"}
                            </li>
                            <li className={Styletemp2.list_contect}>
                            <i  style={{color: color1}} className="fa-solid fa-location-dot"></i> {CrentUser ? info.Location : "Your Cantry | City"}
                            </li>
                            
                        </ul>
                    </div>
                    <div  className={Styletemp2.qurxin}>
                        <span></span>
                    </div>
                    <div className={`${Styletemp2.person_contects} ${Styletemp2.edecation}`}>
                        <h2 className={Styletemp2.ciwaan}>EDUCATION</h2>
                        <div className={Styletemp2.heer_waxbrasho}>
                            <h3  style={{color: color1}} className={Styletemp2.Ciwaan_hoose}>{CrentUser ? info.Edyear1 : "2022-2030"}</h3>
                            <p className={Styletemp2.qoraal_hoose}>
                             {CrentUser ? info.Eddesc1 : "Simple text deskription this"}
                            </p>
                            <h4  style={{color: color1}} className={Styletemp2.Ciwaan_hoose}><i className="fa-solid fa-graduation-cap"></i> {CrentUser ? info.Edunivername1 : "Name Universaty"}</h4>
                        </div>
                        <div className={Styletemp2.heer_waxbrasho}>
                            <h3  style={{color: color1}} className={Styletemp2.Ciwaan_hoose}>{CrentUser ? info.Edyear2 : "2022-2030"}</h3>
                            <p className={Styletemp2.qoraal_hoose}>
                             {CrentUser ? info.Eddesc2 : "Simple text deskription this"}
                            </p>
                            <h4  style={{color: color1}} className={Styletemp2.Ciwaan_hoose}><i className="fa-solid fa-graduation-cap"></i> {CrentUser ? info.Edunivername2 : "Name Universaty"}</h4>
                        </div>
                        <div className={Styletemp2.heer_waxbrasho}>
                            <h3  style={{color: color1}} className={Styletemp2.Ciwaan_hoose}>{CrentUser ? info.Edyear3 : "2022-2030"}</h3>
                            <p className={Styletemp2.qoraal_hoose}>
                             {CrentUser ? info.Eddesc3 : "Simple text deskription this"}
                            </p>
                            <h4  style={{color: color1}} className={Styletemp2.Ciwaan_hoose}><i className="fa-solid fa-graduation-cap"></i> {CrentUser ? info.Edunivername3 : "Name Universaty"}</h4>
                        </div>
                    </div>
                    <div className={Styletemp2.qurxin}>
                        <span></span>
                    </div>
                    <div  className={`${Styletemp2.person_contects} ${Styletemp2.Luuqadaha}`}>
                        <h2 className={Styletemp2.ciwaan}>LANGUAGES</h2>
                        <div className={Styletemp2.heer_waxbrasho}>
                            <h3 className={`${Styletemp2.Ciwaan_hoose} ${Styletemp2.Langugage}`}>{CrentUser ? info.Langname1 : "language Name"} {CrentUser ? info.Langprog1 : "50"}%</h3>
                            <div className={Styletemp2.lan_prog}>
                                <span className={Styletemp2.prog}  style={{width:`${CrentUser ? info.Langprog1 : "50"}%`, backgroundColor: color1}}>

                                </span>
                            </div>
                            <h3 className={`${Styletemp2.Ciwaan_hoose} ${Styletemp2.Langugage}`}>{CrentUser ? info.Langname2 : "language Name"} {CrentUser ? info.Langprog2 : "50"}%</h3>
                            <div className={Styletemp2.lan_prog}>
                                <span className={Styletemp2.prog} style={{width:`${CrentUser ? info.Langprog2 : "50"}%`, backgroundColor: color1}}>

                                </span>
                            </div>
                            <h3 className={`${Styletemp2.Ciwaan_hoose} ${Styletemp2.Langugage}`}>{CrentUser ? info.Langname3 : "language Name"} {CrentUser ? info.Langprog3 : "50"}%</h3>
                            <div className={Styletemp2.lan_prog}>
                                <span className={Styletemp2.prog}  style={{width:`${CrentUser ? info.Langprog3 : "50"}%`, backgroundColor: color1}}>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={Styletemp2.work_info}>
                <div className={`${Styletemp2.sections} ${Styletemp2.Profile}`}>
                    <h3 style={{color: color1}} className={Styletemp2.ciwaano_left}>POFILE</h3>
                    <p className={Styletemp2.qoraal_hoose}>
                    {CrentUser ? info.Profile : "  Lorem Ipsum is simply dummy text of the  Lorem Ipsum is simply dummy text of the Lorem Ipsum is simply dummy text of the Lorem Ipsum is simply dummy text of the Lorem Ipsum is simply dummy text of the "}
                  
                    </p>
                </div>
                <div className={`${Styletemp2.sections} ${Styletemp2.Exprians}`}>
                    <h3 style={{color: color1}} className={Styletemp2.ciwaano_left}>EXPERIANS</h3>
                    <div className={Styletemp2.exp}>
                        <div className={`${Styletemp2.qayb} ${Styletemp2.date_compny}`}>
                            <h4 className={Styletemp2.Ciwaan_hoose}>{CrentUser ? info.Exyear1 : "2022-2030"}</h4>
                            <h4  className={Styletemp2.Ciwaan_hoose}><i className="fa-solid fa-building"></i> {CrentUser ? info.Excompnay1 : "Compny Name"}</h4>
                        </div>
                        <div className={`${Styletemp2.qayb} ${Styletemp2.info}`}>
                            <h4 style={{color: color1}} className={Styletemp2.Ciwaan_hoose}>{CrentUser ? info.Exjob1 : "Job Title Here"}</h4>
                            <p className={Styletemp2.qoraal_hoose}>
                            {CrentUser ? info.Exdesc1 : "Lorem Ipsum is simply dummy text of the Lorem Ipsum is simply dummy text of the"}</p>
                        </div>
                    </div>
                    <div className={Styletemp2.exp}>
                        <div className={`${Styletemp2.qayb} ${Styletemp2.date_compny}`}>
                            <h4 className={Styletemp2.Ciwaan_hoose}>{CrentUser ? info.Exyear2 : "2022-2030"}</h4>
                            <h4 className={Styletemp2.Ciwaan_hoose}><i className="fa-solid fa-building"></i> {CrentUser ? info.Excompnay2 : "Compny Name"} </h4>
                        </div>
                        <div className={`${Styletemp2.qayb} ${Styletemp2.info}`}>
                            <h4 style={{color: color1}} className={Styletemp2.Ciwaan_hoose}>{CrentUser ? info.Exjob2 : "Job Title Here"}</h4>
                            <p className={Styletemp2.qoraal_hoose}>
                            {CrentUser ? info.Exdesc2 : "Lorem Ipsum is simply dummy text of the Lorem Ipsum is simply dummy text of the"}</p>
                        </div>
                    </div>
                    <div className={Styletemp2.exp}>
                        <div className={`${Styletemp2.qayb} ${Styletemp2.date_compny}`}>
                            <h4 className={Styletemp2.Ciwaan_hoose}>{CrentUser ? info.Exyear3 : "2022-2030"}</h4>
                            <h4 className={Styletemp2.Ciwaan_hoose}><i className="fa-solid fa-building"></i> {CrentUser ? info.Excompnay3 : "Compny Name"} </h4>
                        </div>
                        <div className={`${Styletemp2.qayb} ${Styletemp2.info}`}>
                            <h4 style={{color: color1}} className={Styletemp2.Ciwaan_hoose}>{CrentUser ? info.Exjob3 : "Job Title Here"}</h4>
                            <p className={Styletemp2.qoraal_hoose}>
                            {CrentUser ? info.Exdesc3 : "Lorem Ipsum is simply dummy text of the Lorem Ipsum is simply dummy text of the"}</p>
                        </div>
                    </div>
                </div>
                <div className={`${Styletemp2.sections} ${Styletemp2.Exprians}`}>
                    <h3 style={{color: color1}} className={Styletemp2.ciwaano_left}>SKILLS</h3>
                    <div className={Styletemp2.exp}>
                        <div className={`${Styletemp2.qayb} ${Styletemp2.date_compny} ${Styletemp2.SKILLS}`}>
                            <h4  className={Styletemp2.Ciwaan_hoose}> {CrentUser ? info.Skillname : "Skill Name Here"} </h4>
                        </div>
                        <div className={`${Styletemp2.qayb} ${Styletemp2.info} ${Styletemp2.SKILLS}`}>
                        <span className={`${Styletemp2.prog} ${Styletemp2.skills}`} style={{width:`${CrentUser ? info.Skillprog : "50"}%`, backgroundColor: color1}}>

                        </span>
                        </div>
                    </div>
                    <div className={Styletemp2.exp}>
                        <div className={`${Styletemp2.qayb} ${Styletemp2.date_compny} ${Styletemp2.SKILLS}`}>
                            <h4  className={Styletemp2.Ciwaan_hoose}> {CrentUser ? info.Skillname1 : "Skill Name Here"} </h4>
                        </div>
                        <div className={`${Styletemp2.qayb} ${Styletemp2.info} ${Styletemp2.SKILLS}`}>
                        <span className={`${Styletemp2.prog} ${Styletemp2.skills}`} style={{width:`${CrentUser ? info.Skillprog1 : "50"}%`, backgroundColor: color1}}>

                        </span>
                        </div>
                    </div>
                    <div className={Styletemp2.exp}>
                        <div className={`${Styletemp2.qayb} ${Styletemp2.date_compny} ${Styletemp2.SKILLS}`}>
                            <h4  className={Styletemp2.Ciwaan_hoose}> {CrentUser ? info.Skillname2 : "Skill Name Here"} </h4>
                        </div>
                        <div className={`${Styletemp2.qayb} ${Styletemp2.info} ${Styletemp2.SKILLS}`}>
                        <span className={`${Styletemp2.prog} ${Styletemp2.skills}`} style={{width:`${CrentUser ? info.Skillprog2 : "50"}%`, backgroundColor: color1}}>

                        </span>
                        </div>
                    </div>
                    <div className={Styletemp2.exp}>
                        <div className={`${Styletemp2.qayb} ${Styletemp2.date_compny} ${Styletemp2.SKILLS}`}>
                            <h4  className={Styletemp2.Ciwaan_hoose}> {CrentUser ? info.Skillname3 : "Skill Name Here"} </h4>
                        </div>
                        <div className={`${Styletemp2.qayb} ${Styletemp2.info} ${Styletemp2.SKILLS}`}>
                        <span className={`${Styletemp2.prog} ${Styletemp2.skills}`} style={{width:`${CrentUser ? info.Skillprog3 : "50"}%`, backgroundColor: color1}}>

                        </span>
                        </div>
                    </div>
                    <div className={Styletemp2.exp}>
                        <div className={`${Styletemp2.qayb} ${Styletemp2.date_compny} ${Styletemp2.SKILLS}`}>
                            <h4  className={Styletemp2.Ciwaan_hoose}> {CrentUser ? info.Skillname4 : "Skill Name Here"}</h4>
                        </div>
                        <div className={`${Styletemp2.qayb} ${Styletemp2.info} ${Styletemp2.SKILLS}`}>
                        <span className={`${Styletemp2.prog} ${Styletemp2.skills}`} style={{width:`${CrentUser ? info.Skillprog4 : "50"}%`, backgroundColor: color1}}>

                        </span>
                        </div>
                    </div>
                    <div className={Styletemp2.exp}>
                        <div className={`${Styletemp2.qayb} ${Styletemp2.date_compny} ${Styletemp2.SKILLS}`}>
                            <h4  className={Styletemp2.Ciwaan_hoose}> {CrentUser ? info.Skillname5 : "Skill Name Here"} </h4>
                        </div>
                        <div className={`${Styletemp2.qayb} ${Styletemp2.info} ${Styletemp2.SKILLS}`}>
                        <span className={`${Styletemp2.prog} ${Styletemp2.skills}`} style={{width:`${CrentUser ? info.Skillprog5 : "50"}%`, backgroundColor: color1}}>

                        </span>
                        </div>
                    </div>
                    <div className={Styletemp2.exp}>
                        <div className={`${Styletemp2.qayb} ${Styletemp2.date_compny} ${Styletemp2.SKILLS}`}>
                            <h4  className={Styletemp2.Ciwaan_hoose}> {CrentUser ? info.Skillname6 : "Skill Name Here"}</h4>
                        </div>
                        <div className={`${Styletemp2.qayb} ${Styletemp2.info} ${Styletemp2.SKILLS}`}>
                        <span className={`${Styletemp2.prog} ${Styletemp2.skills}`} style={{width:`${CrentUser ? info.Skillprog6 : "50"}%`, backgroundColor: color1}}>
                        </span>
                        </div>
                    </div>
                </div>
                <div className={`${Styletemp2.sections} ${Styletemp2.Interest}`}>
                    <h3 style={{color: color1}} className={Styletemp2.ciwaano_left}>INTARESTES</h3>
                    <ul className={Styletemp2.interst}>
                        <li className={Styletemp2.lits_inters}>
                        <i style={{color: color1}}  className="fa-solid fa-circle-dot"></i> {CrentUser  ? info.Inters1 : "Name"} 
                        </li>
                        <li className={Styletemp2.lits_inters}>
                        <i style={{color: color1}}  className="fa-solid fa-circle-dot"></i> {CrentUser  ? info.Inters2 : "Name"} 
                        </li>
                        <li className={Styletemp2.lits_inters}>
                        <i style={{color: color1}}  className="fa-solid fa-circle-dot"></i> {CrentUser  ? info.Inters3 : "Name"} 
                        </li>
                        <li className={Styletemp2.lits_inters}>
                        <i style={{color: color1}}  className="fa-solid fa-circle-dot"></i> {CrentUser  ? info.Inters4 : "Name"}
                        </li>

                    </ul>
                </div>
                
            </div>
        </div>
    )
 }

 export default Template2