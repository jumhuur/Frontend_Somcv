import { useProtectedPage } from "../../Context/Auth"
import { Usecvcontext } from "../../Context/Cv"
import Styletemp2 from "./Template2.module.css"
 function Template2So({color1}){
    const {CrentUser} = useProtectedPage()
    const {info} = Usecvcontext()
    return (
        <div className={Styletemp2.page_cv_container}>
            <div className={Styletemp2.cv_doc}>
                <div className={Styletemp2.image_and_name}>
                    <div className={Styletemp2.image}  style={{backgroundImage: `Url(${CrentUser ? info.Image : "/Images/User.png"})`}}>
                    <img src={CrentUser ? info.Image : "/Images/User.png"} alt="image_user" />
                    </div>
                    <h2>{CrentUser ? info.Name : "Bare Cali Mooge"}</h2>
                    <h3 style={{color: color1}} className={Styletemp2.Jobtitle}>{CrentUser ? info.Jobtitle : "Ciwaanka shaqada"}</h3>
                    <div className={Styletemp2.qurxin}>
                        <span></span>
                    </div>
                    <div className={Styletemp2.person_contects}>
                        <h2 className={Styletemp2.ciwaan}>Goobaha Xidhiidhka</h2>
                        <ul className={Styletemp2.ul_contect}>
                            <li className={Styletemp2.list_contect}>
                            <i  style={{color: color1}} className="fa-solid fa-phone"></i>  {CrentUser ? info.Tell : " 063-4XXXXXXX"}
                            </li>
                            <li className={Styletemp2.list_contect}>
                            <i  style={{color: color1}} className="fa-solid fa-envelope"></i>  {CrentUser ? info.Cvemail : " Tusaale23@hotmail.com"}
                            </li>
                            <li className={Styletemp2.list_contect}>
                            <i  style={{color: color1}} className="fa-solid fa-location-dot"></i> {CrentUser ? info.Location : "Wadankaaga | Magaalada"}
                            </li>
                            
                        </ul>
                    </div>
                    <div  className={Styletemp2.qurxin}>
                        <span></span>
                    </div>
                    <div className={`${Styletemp2.person_contects} ${Styletemp2.edecation}`}>
                        <h2 className={Styletemp2.ciwaan}>Waxbarasho</h2>
                        <div className={Styletemp2.heer_waxbrasho}>
                            <h3  style={{color: color1}} className={Styletemp2.Ciwaan_hoose}>{CrentUser ? info.Edyear1 : "2022-2030"}</h3>
                            <p className={Styletemp2.qoraal_hoose}>
                             {CrentUser ? info.Eddesc1 : "Tusaale Heerka Waxbarasho"}
                            </p>
                            <h4  style={{color: color1}} className={Styletemp2.Ciwaan_hoose}><i className="fa-solid fa-graduation-cap"></i> {CrentUser ? info.Edunivername1 : "Magaca Goobta"}</h4>
                        </div>
                        <div className={Styletemp2.heer_waxbrasho}>
                            <h3  style={{color: color1}} className={Styletemp2.Ciwaan_hoose}>{CrentUser ? info.Edyear2 : "2022-2030"}</h3>
                            <p className={Styletemp2.qoraal_hoose}>
                             {CrentUser ? info.Eddesc2 : "Tusaale Heerka Waxbarasho"}
                            </p>
                            <h4  style={{color: color1}} className={Styletemp2.Ciwaan_hoose}><i className="fa-solid fa-graduation-cap"></i> {CrentUser ? info.Edunivername2 : "Magaca Goobta"}</h4>
                        </div>
                        <div className={Styletemp2.heer_waxbrasho}>
                            <h3  style={{color: color1}} className={Styletemp2.Ciwaan_hoose}>{CrentUser ? info.Edyear3 : "2022-2030"}</h3>
                            <p className={Styletemp2.qoraal_hoose}>
                             {CrentUser ? info.Eddesc3 : "Tusaale Heerka Waxbarasho"}
                            </p>
                            <h4  style={{color: color1}} className={Styletemp2.Ciwaan_hoose}><i className="fa-solid fa-graduation-cap"></i> {CrentUser ? info.Edunivername3 : "Magaca Goobta"}</h4>
                        </div>
                    </div>
                    <div className={Styletemp2.qurxin}>
                        <span></span>
                    </div>
                    <div  className={`${Styletemp2.person_contects} ${Styletemp2.Luuqadaha}`}>
                        <h2 className={Styletemp2.ciwaan}>Luuqadaha</h2>
                        <div className={Styletemp2.heer_waxbrasho}>
                            <h3 className={`${Styletemp2.Ciwaan_hoose} ${Styletemp2.Langugage}`}>{CrentUser ? info.Langname1 : "Magaca Luuqada"} {CrentUser ? info.Langprog1 : "50"}%</h3>
                            <div className={Styletemp2.lan_prog}>
                                <span className={Styletemp2.prog}  style={{width:`${CrentUser ? info.Langprog1 : "50"}%`, backgroundColor: color1}}>

                                </span>
                            </div>
                            <h3 className={`${Styletemp2.Ciwaan_hoose} ${Styletemp2.Langugage}`}>{CrentUser ? info.Langname2 : "Magaca Luuqada"} {CrentUser ? info.Langprog2 : "50"}%</h3>
                            <div className={Styletemp2.lan_prog}>
                                <span className={Styletemp2.prog} style={{width:`${CrentUser ? info.Langprog2 : "50"}%`, backgroundColor: color1}}>

                                </span>
                            </div>
                            <h3 className={`${Styletemp2.Ciwaan_hoose} ${Styletemp2.Langugage}`}>{CrentUser ? info.Langname3 : "Magaca Luuqada"} {CrentUser ? info.Langprog3 : "50"}%</h3>
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
                    <h3 style={{color: color1}} className={Styletemp2.ciwaano_left}>IGU SAABSAN</h3>
                    <p className={Styletemp2.qoraal_hoose}>
                    {CrentUser ? info.Profile : "  Lorem Ipsum is simply dummy text of the  Lorem Ipsum is simply dummy text of the Lorem Ipsum is simply dummy text of the Lorem Ipsum is simply dummy text of the Lorem Ipsum is simply dummy text of the "}
                  
                    </p>
                </div>
                <div className={`${Styletemp2.sections} ${Styletemp2.Exprians}`}>
                    <h3 style={{color: color1}} className={Styletemp2.ciwaano_left}>KHIBRADAHA SHAQO</h3>
                    <div className={Styletemp2.exp}>
                        <div className={`${Styletemp2.qayb} ${Styletemp2.date_compny}`}>
                            <h4 className={Styletemp2.Ciwaan_hoose}>{CrentUser ? info.Exyear1 : "2022-2030"}</h4>
                            <h4  className={Styletemp2.Ciwaan_hoose}><i className="fa-solid fa-building"></i> {CrentUser ? info.Excompnay1 : "Magaca shirkada"}</h4>
                        </div>
                        <div className={`${Styletemp2.qayb} ${Styletemp2.info}`}>
                            <h4 style={{color: color1}} className={Styletemp2.Ciwaan_hoose}>{CrentUser ? info.Exjob1 : "Ciwaanka shaqada "}</h4>
                            <p className={Styletemp2.qoraal_hoose}>
                            {CrentUser ? info.Exdesc1 : "Warbixin Kooban oo Ku Saabsan shaqadan Aad qaban jirtay ayaa Halkan Lagu qorayaa "}</p>
                        </div>
                    </div>
                    <div className={Styletemp2.exp}>
                        <div className={`${Styletemp2.qayb} ${Styletemp2.date_compny}`}>
                            <h4 className={Styletemp2.Ciwaan_hoose}>{CrentUser ? info.Exyear2 : "2022-2030"}</h4>
                            <h4 className={Styletemp2.Ciwaan_hoose}><i className="fa-solid fa-building"></i> {CrentUser ? info.Excompnay2 : "Magaca shirkada"} </h4>
                        </div>
                        <div className={`${Styletemp2.qayb} ${Styletemp2.info}`}>
                            <h4 style={{color: color1}} className={Styletemp2.Ciwaan_hoose}>{CrentUser ? info.Exjob2 : "Ciwaanka shaqada "}</h4>
                            <p className={Styletemp2.qoraal_hoose}>
                            {CrentUser ? info.Exdesc2 : "Warbixin Kooban oo Ku Saabsan shaqadan Aad qaban jirtay ayaa Halkan Lagu qorayaa "}</p>
                        </div>
                    </div>
                    <div className={Styletemp2.exp}>
                        <div className={`${Styletemp2.qayb} ${Styletemp2.date_compny}`}>
                            <h4 className={Styletemp2.Ciwaan_hoose}>{CrentUser ? info.Exyear3 : "2022-2030"}</h4>
                            <h4 className={Styletemp2.Ciwaan_hoose}><i className="fa-solid fa-building"></i> {CrentUser ? info.Excompnay3 : "Magaca shirkada"} </h4>
                        </div>
                        <div className={`${Styletemp2.qayb} ${Styletemp2.info}`}>
                            <h4 style={{color: color1}} className={Styletemp2.Ciwaan_hoose}>{CrentUser ? info.Exjob3 : "Ciwaanka shaqada "}</h4>
                            <p className={Styletemp2.qoraal_hoose}>
                            {CrentUser ? info.Exdesc3 : "Warbixin Kooban oo Ku Saabsan shaqadan Aad qaban jirtay ayaa Halkan Lagu qorayaa "}</p>
                        </div>
                    </div>
                </div>
                <div className={`${Styletemp2.sections} ${Styletemp2.Exprians}`}>
                    <h3 style={{color: color1}} className={Styletemp2.ciwaano_left}>XIRFADO</h3>
                    <div className={Styletemp2.exp}>
                        <div className={`${Styletemp2.qayb} ${Styletemp2.date_compny} ${Styletemp2.SKILLS}`}>
                            <h4  className={Styletemp2.Ciwaan_hoose}> {CrentUser ? info.Skillname : "Magaca Xirfada"} </h4>
                        </div>
                        <div className={`${Styletemp2.qayb} ${Styletemp2.info} ${Styletemp2.SKILLS}`}>
                        <span className={`${Styletemp2.prog} ${Styletemp2.skills}`} style={{width:`${CrentUser ? info.Skillprog : "50"}%`, backgroundColor: color1}}>

                        </span>
                        </div>
                    </div>
                    <div className={Styletemp2.exp}>
                        <div className={`${Styletemp2.qayb} ${Styletemp2.date_compny} ${Styletemp2.SKILLS}`}>
                            <h4  className={Styletemp2.Ciwaan_hoose}> {CrentUser ? info.Skillname1 : "Magaca Xirfada"} </h4>
                        </div>
                        <div className={`${Styletemp2.qayb} ${Styletemp2.info} ${Styletemp2.SKILLS}`}>
                        <span className={`${Styletemp2.prog} ${Styletemp2.skills}`} style={{width:`${CrentUser ? info.Skillprog1 : "50"}%`, backgroundColor: color1}}>

                        </span>
                        </div>
                    </div>
                    <div className={Styletemp2.exp}>
                        <div className={`${Styletemp2.qayb} ${Styletemp2.date_compny} ${Styletemp2.SKILLS}`}>
                            <h4  className={Styletemp2.Ciwaan_hoose}> {CrentUser ? info.Skillname2 : "Magaca Xirfada"} </h4>
                        </div>
                        <div className={`${Styletemp2.qayb} ${Styletemp2.info} ${Styletemp2.SKILLS}`}>
                        <span className={`${Styletemp2.prog} ${Styletemp2.skills}`} style={{width:`${CrentUser ? info.Skillprog2 : "50"}%`, backgroundColor: color1}}>

                        </span>
                        </div>
                    </div>
                    <div className={Styletemp2.exp}>
                        <div className={`${Styletemp2.qayb} ${Styletemp2.date_compny} ${Styletemp2.SKILLS}`}>
                            <h4  className={Styletemp2.Ciwaan_hoose}> {CrentUser ? info.Skillname3 : "Magaca Xirfada"} </h4>
                        </div>
                        <div className={`${Styletemp2.qayb} ${Styletemp2.info} ${Styletemp2.SKILLS}`}>
                        <span className={`${Styletemp2.prog} ${Styletemp2.skills}`} style={{width:`${CrentUser ? info.Skillprog3 : "50"}%`, backgroundColor: color1}}>

                        </span>
                        </div>
                    </div>
                    <div className={Styletemp2.exp}>
                        <div className={`${Styletemp2.qayb} ${Styletemp2.date_compny} ${Styletemp2.SKILLS}`}>
                            <h4  className={Styletemp2.Ciwaan_hoose}> {CrentUser ? info.Skillname4 : "Magaca Xirfada"}</h4>
                        </div>
                        <div className={`${Styletemp2.qayb} ${Styletemp2.info} ${Styletemp2.SKILLS}`}>
                        <span className={`${Styletemp2.prog} ${Styletemp2.skills}`} style={{width:`${CrentUser ? info.Skillprog4 : "50"}%`, backgroundColor: color1}}>

                        </span>
                        </div>
                    </div>
                    <div className={Styletemp2.exp}>
                        <div className={`${Styletemp2.qayb} ${Styletemp2.date_compny} ${Styletemp2.SKILLS}`}>
                            <h4  className={Styletemp2.Ciwaan_hoose}> {CrentUser ? info.Skillname5 : "Magaca Xirfada"} </h4>
                        </div>
                        <div className={`${Styletemp2.qayb} ${Styletemp2.info} ${Styletemp2.SKILLS}`}>
                        <span className={`${Styletemp2.prog} ${Styletemp2.skills}`} style={{width:`${CrentUser ? info.Skillprog5 : "50"}%`, backgroundColor: color1}}>

                        </span>
                        </div>
                    </div>
                    <div className={Styletemp2.exp}>
                        <div className={`${Styletemp2.qayb} ${Styletemp2.date_compny} ${Styletemp2.SKILLS}`}>
                            <h4  className={Styletemp2.Ciwaan_hoose}> {CrentUser ? info.Skillname6 : "Magaca Xirfada"}</h4>
                        </div>
                        <div className={`${Styletemp2.qayb} ${Styletemp2.info} ${Styletemp2.SKILLS}`}>
                        <span className={`${Styletemp2.prog} ${Styletemp2.skills}`} style={{width:`${CrentUser ? info.Skillprog6 : "50"}%`, backgroundColor: color1}}>
                        </span>
                        </div>
                    </div>
                </div>
                <div className={`${Styletemp2.sections} ${Styletemp2.Interest}`}>
                    <h3 style={{color: color1}} className={Styletemp2.ciwaano_left}>WAXAAN XIISEYO</h3>
                    <ul className={Styletemp2.interst}>
                        <li className={Styletemp2.lits_inters}>
                        <i style={{color: color1}}  className="fa-solid fa-circle-dot"></i> {CrentUser  ? info.Inters1 : "Magac"} 
                        </li>
                        <li className={Styletemp2.lits_inters}>
                        <i style={{color: color1}}  className="fa-solid fa-circle-dot"></i> {CrentUser  ? info.Inters2 : "Magac"} 
                        </li>
                        <li className={Styletemp2.lits_inters}>
                        <i style={{color: color1}}  className="fa-solid fa-circle-dot"></i> {CrentUser  ? info.Inters3 : "Magac"} 
                        </li>
                        <li className={Styletemp2.lits_inters}>
                        <i style={{color: color1}}  className="fa-solid fa-circle-dot"></i> {CrentUser  ? info.Inters4 : "Magac"}
                        </li>

                    </ul>
                </div>
                
            </div>
        </div>
    )
 }

 export default Template2So