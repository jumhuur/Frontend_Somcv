import { useProtectedPage } from "../../Context/Auth"
import { Usecvcontext } from "../../Context/Cv"
import Styletemp1 from "./Template2Ar.module.css"
 function Template2Ar({color1}){
    const {CrentUser} = useProtectedPage()
    const {info} = Usecvcontext()
    return (
        <div className={Styletemp1.page_cv_container} dir="rtl">
            <div className={Styletemp1.cv_doc}>
                <div className={Styletemp1.image_and_name}>
                    <div className={Styletemp1.image}  style={{backgroundImage: `Url(${CrentUser ? info.Image : "/Images/User.png"})`}}>
                    <img src={CrentUser ? info.Image : "/Images/User.png"} alt="image_user" />
                    </div>
                    <h2>{CrentUser ? info.Name : "عمران على "}</h2>
                    <h3 style={{color:color1}} className={Styletemp1.Jobtitle} >{CrentUser ? info.Jobtitle : "غنوان الوظيفة"}</h3>
                    <div className={Styletemp1.qurxin}>
                        <span></span>
                    </div>
                    <div className={Styletemp1.person_contects}>
                        <h2 className={Styletemp1.ciwaan} style={{textAlign: "right"}}>معلومات الإتصال</h2>
                        <ul className={Styletemp1.ul_contect}>
                            <li className={`${Styletemp1.list_contect} ${Styletemp1.list_contect_en}`}>
                            <i style={{color:color1}} className="fa-solid fa-phone"></i>  {CrentUser ? info.Tell : " 063-4XXXXXXX"}
                            </li>
                            <li className={`${Styletemp1.list_contect} ${Styletemp1.list_contect_en}`}>
                            <i style={{color:color1}} className="fa-solid fa-envelope"></i>  {CrentUser ? info.Cvemail : " example123@hotmail.com"}
                            </li>
                            <li className={Styletemp1.list_contect}>
                            <i style={{color:color1}} className="fa-solid fa-location-dot"></i> {CrentUser ? info.Location : "وطن | المدية"}
                            </li>
                            
                        </ul>
                    </div>
                    <div  className={Styletemp1.qurxin}>
                        <span></span>
                    </div>
                    <div className={`${Styletemp1.person_contects} ${Styletemp1.edecation}`}>
                        <h2 className={Styletemp1.ciwaan} style={{textAlign: "right"}}>التعليم</h2>
                        <div className={Styletemp1.heer_waxbrasho}>
                            <h3 style={{color:color1}} className={Styletemp1.Ciwaan_hoose}>{CrentUser ? info.Edyear1 : "2022-2030"}</h3>
                            <p className={Styletemp1.qoraal_hoose} style={{textAlign: "right"}}>
                             {CrentUser ? info.Eddesc1 : "معلومات عن الجامعة أو الجه التعليمية"}
                            </p>
                            <h4 style={{color:color1}} className={Styletemp1.Ciwaan_hoose}><i className="fa-solid fa-graduation-cap"></i> {CrentUser ? info.Edunivername1 : "اسم الجه التعليمية"}</h4>
                        </div>
                        <div className={Styletemp1.heer_waxbrasho}>
                            <h3 style={{color:color1}} className={Styletemp1.Ciwaan_hoose}>{CrentUser ? info.Edyear2 : "2022-2030"}</h3>
                            <p className={Styletemp1.qoraal_hoose} style={{textAlign: "right"}}>
                             {CrentUser ? info.Eddesc2 : "معلومات عن الجامعة أو الجه التعليمية"}
                            </p>
                            <h4 style={{color:color1}} className={Styletemp1.Ciwaan_hoose}><i className="fa-solid fa-graduation-cap"></i> {CrentUser ? info.Edunivername2 : "اسم الجه التعليمية"}</h4>
                        </div>
                        <div className={Styletemp1.heer_waxbrasho}>
                            <h3 style={{color:color1}} className={Styletemp1.Ciwaan_hoose}>{CrentUser ? info.Edyear3 : "2022-2030"}</h3>
                            <p className={Styletemp1.qoraal_hoose} style={{textAlign: "right"}}>
                             {CrentUser ? info.Eddesc3 : "معلومات عن الجامعة أو الجه التعليمية"}
                            </p>
                            <h4 style={{color:color1}} className={Styletemp1.Ciwaan_hoose}><i className="fa-solid fa-graduation-cap"></i> {CrentUser ? info.Edunivername3 : "اسم الجه التعليمية"}</h4>
                        </div>
                    </div>
                    <div className={Styletemp1.qurxin}>
                        <span></span>
                    </div>
                    <div  className={`${Styletemp1.person_contects} ${Styletemp1.Luuqadaha}`}>
                        <h2 className={Styletemp1.ciwaan} style={{textAlign: "right"}}>اللغات</h2>
                        <div className={Styletemp1.heer_waxbrasho}>
                            <h3 className={`${Styletemp1.Ciwaan_hoose} ${Styletemp1.Langugage}`}>{CrentUser ? info.Langname1 : "اسم اللغة "} {CrentUser ? info.Langprog1 : "50"}%</h3>
                            <div className={Styletemp1.lan_prog}>
                                <span className={Styletemp1.prog}  style={{width:`${CrentUser ? info.Langprog1 : "50"}%`, backgroundColor:color1}}>

                                </span>
                            </div>
                            <h3 className={`${Styletemp1.Ciwaan_hoose} ${Styletemp1.Langugage}`}>{CrentUser ? info.Langname2 : "اسم اللغة "} {CrentUser ? info.Langprog2 : "50"}%</h3>
                            <div className={Styletemp1.lan_prog}>
                                <span className={Styletemp1.prog} style={{width:`${CrentUser ? info.Langprog2 : "50"}%`, backgroundColor:color1}}>

                                </span>
                            </div>
                            <h3 className={`${Styletemp1.Ciwaan_hoose} ${Styletemp1.Langugage}`}>{CrentUser ? info.Langname3 : "اسم اللغة "} {CrentUser ? info.Langprog3 : "50"}%</h3>
                            <div className={Styletemp1.lan_prog}>
                                <span className={Styletemp1.prog}  style={{width:`${CrentUser ? info.Langprog3 : "50"}%`, backgroundColor:color1}}>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={Styletemp1.work_info}>
                <div className={`${Styletemp1.sections} ${Styletemp1.Profile}`}>
                    <h3 style={{color:color1}} className={Styletemp1.ciwaano_left}>نبدة عني</h3>
                    <p className={Styletemp1.qoraal_hoose} style={{textAlign: "right"}}>
                    {CrentUser ? info.Profile : "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق."}
                  
                    </p>
                </div>
                <div className={`${Styletemp1.sections} ${Styletemp1.Exprians}`}>
                    <h3  style={{color:color1}}  className={Styletemp1.ciwaano_left}>الحبرات </h3>
                    <div className={Styletemp1.exp}>
                        <div className={`${Styletemp1.qayb} ${Styletemp1.date_compny}`}>
                            <h4 className={Styletemp1.Ciwaan_hoose}>{CrentUser ? info.Exyear1 : "2022-2030"}</h4>
                            <h4  className={Styletemp1.Ciwaan_hoose}><i  style={{color:color1}}  className="fa-solid fa-building"></i> {CrentUser ? info.Excompnay1 : "اسم الشركة"}</h4>
                        </div>
                        <div className={`${Styletemp1.qayb} ${Styletemp1.info}`}>
                            <h4  style={{color:color1}}  className={Styletemp1.Ciwaan_hoose}>{CrentUser ? info.Exjob1 : "عنوان الوظيفة"}</h4>
                            <p className={Styletemp1.qoraal_hoose} style={{textAlign: "right"}}>
                            {CrentUser ? info.Exdesc1 : "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى،"}</p>
                        </div>
                    </div>
                    <div className={Styletemp1.exp}>
                        <div className={`${Styletemp1.qayb} ${Styletemp1.date_compny}`}>
                            <h4 className={Styletemp1.Ciwaan_hoose}>{CrentUser ? info.Exyear2 : "2022-2030"}</h4>
                            <h4 className={Styletemp1.Ciwaan_hoose}><i  style={{color:color1}}  className="fa-solid fa-building"></i> {CrentUser ? info.Excompnay2 : "اسم الشركة"} </h4>
                        </div>
                        <div className={`${Styletemp1.qayb} ${Styletemp1.info}`}>
                            <h4  style={{color:color1}}  className={Styletemp1.Ciwaan_hoose}>{CrentUser ? info.Exjob2 : "عنوان الوظيفة"}</h4>
                            <p className={Styletemp1.qoraal_hoose} style={{textAlign: "right"}}>
                            {CrentUser ? info.Exdesc2 : "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى،"}</p>
                        </div>
                    </div>
                    <div className={Styletemp1.exp}>
                        <div className={`${Styletemp1.qayb} ${Styletemp1.date_compny}`}>
                            <h4 className={Styletemp1.Ciwaan_hoose}>{CrentUser ? info.Exyear3 : "2022-2030"}</h4>
                            <h4 className={Styletemp1.Ciwaan_hoose}><i  style={{color:color1}}  className="fa-solid fa-building"></i> {CrentUser ? info.Excompnay3 : "اسم الشركة"} </h4>
                        </div>
                        <div className={`${Styletemp1.qayb} ${Styletemp1.info}`}>
                            <h4  style={{color:color1}}  className={Styletemp1.Ciwaan_hoose}>{CrentUser ? info.Exjob3 : "عنوان الوظيفة"}</h4>
                            <p className={Styletemp1.qoraal_hoose} style={{textAlign: "right"}}>
                            {CrentUser ? info.Exdesc3 : "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى،"}</p>
                        </div>
                    </div>
                </div>
                <div className={`${Styletemp1.sections} ${Styletemp1.Exprians}`}>
                    <h3  style={{color:color1}}  className={Styletemp1.ciwaano_left}>الحرف</h3>
                    <div className={Styletemp1.exp}>
                        <div className={`${Styletemp1.qayb} ${Styletemp1.date_compny} ${Styletemp1.SKILLS}`}>
                            <h4  className={Styletemp1.Ciwaan_hoose}> {CrentUser ? info.Skillname : "اسم الحرفة "} </h4>
                        </div>
                        <div className={`${Styletemp1.qayb} ${Styletemp1.info} ${Styletemp1.SKILLS}`}>
                        <span className={`${Styletemp1.prog} ${Styletemp1.skills}`} style={{width:`${CrentUser ? info.Skillprog : "50"}%` , backgroundColor: color1}}>

                        </span>
                        </div>
                    </div>
                    <div className={Styletemp1.exp}>
                        <div className={`${Styletemp1.qayb} ${Styletemp1.date_compny} ${Styletemp1.SKILLS}`}>
                            <h4  className={Styletemp1.Ciwaan_hoose}> {CrentUser ? info.Skillname1 : "اسم الحرفة "} </h4>
                        </div>
                        <div className={`${Styletemp1.qayb} ${Styletemp1.info} ${Styletemp1.SKILLS}`}>
                        <span className={`${Styletemp1.prog} ${Styletemp1.skills}`} style={{width:`${CrentUser ? info.Skillprog1 : "50"}%` , backgroundColor: color1}}>

                        </span>
                        </div>
                    </div>
                    <div className={Styletemp1.exp}>
                        <div className={`${Styletemp1.qayb} ${Styletemp1.date_compny} ${Styletemp1.SKILLS}`}>
                            <h4  className={Styletemp1.Ciwaan_hoose}> {CrentUser ? info.Skillname2 : "اسم الحرفة "} </h4>
                        </div>
                        <div className={`${Styletemp1.qayb} ${Styletemp1.info} ${Styletemp1.SKILLS}`}>
                        <span className={`${Styletemp1.prog} ${Styletemp1.skills}`} style={{width:`${CrentUser ? info.Skillprog2 : "50"}%` , backgroundColor: color1}}>

                        </span>
                        </div>
                    </div>
                    <div className={Styletemp1.exp}>
                        <div className={`${Styletemp1.qayb} ${Styletemp1.date_compny} ${Styletemp1.SKILLS}`}>
                            <h4  className={Styletemp1.Ciwaan_hoose}> {CrentUser ? info.Skillname3 : "اسم الحرفة "} </h4>
                        </div>
                        <div className={`${Styletemp1.qayb} ${Styletemp1.info} ${Styletemp1.SKILLS}`}>
                        <span className={`${Styletemp1.prog} ${Styletemp1.skills}`} style={{width:`${CrentUser ? info.Skillprog3 : "50"}%` , backgroundColor: color1}}>

                        </span>
                        </div>
                    </div>
                    <div className={Styletemp1.exp}>
                        <div className={`${Styletemp1.qayb} ${Styletemp1.date_compny} ${Styletemp1.SKILLS}`}>
                            <h4  className={Styletemp1.Ciwaan_hoose}> {CrentUser ? info.Skillname4 : "اسم الحرفة "}</h4>
                        </div>
                        <div className={`${Styletemp1.qayb} ${Styletemp1.info} ${Styletemp1.SKILLS}`}>
                        <span className={`${Styletemp1.prog} ${Styletemp1.skills}`} style={{width:`${CrentUser ? info.Skillprog4 : "50"}%` , backgroundColor: color1}}>

                        </span>
                        </div>
                    </div>
                    <div className={Styletemp1.exp}>
                        <div className={`${Styletemp1.qayb} ${Styletemp1.date_compny} ${Styletemp1.SKILLS}`}>
                            <h4  className={Styletemp1.Ciwaan_hoose}> {CrentUser ? info.Skillname5 : "اسم الحرفة "} </h4>
                        </div>
                        <div className={`${Styletemp1.qayb} ${Styletemp1.info} ${Styletemp1.SKILLS}`}>
                        <span className={`${Styletemp1.prog} ${Styletemp1.skills}`} style={{width:`${CrentUser ? info.Skillprog5 : "50"}%` , backgroundColor: color1}}>

                        </span>
                        </div>
                    </div>
                    <div className={Styletemp1.exp}>
                        <div className={`${Styletemp1.qayb} ${Styletemp1.date_compny} ${Styletemp1.SKILLS}`}>
                            <h4  className={Styletemp1.Ciwaan_hoose}> {CrentUser ? info.Skillname6 : "اسم الحرفة "}</h4>
                        </div>
                        <div className={`${Styletemp1.qayb} ${Styletemp1.info} ${Styletemp1.SKILLS}`}>
                        <span className={`${Styletemp1.prog} ${Styletemp1.skills}`} style={{width:`${CrentUser ? info.Skillprog6 : "50"}%` , backgroundColor: color1}}>
                        </span>
                        </div>
                    </div>
                </div>
                <div className={`${Styletemp1.sections} ${Styletemp1.Interest}`}>
                    <h3  style={{color:color1}}  className={Styletemp1.ciwaano_left}>هواياتك</h3>
                    <ul className={Styletemp1.interst}>
                        <li className={Styletemp1.lits_inters}>
                        <i  style={{color:color1}}  className="fa-solid fa-circle-dot"></i> {CrentUser  ? info.Inters1 : "الهواية"} 
                        </li>
                        <li className={Styletemp1.lits_inters}>
                        <i  style={{color:color1}}  className="fa-solid fa-circle-dot"></i> {CrentUser  ? info.Inters2 : "الهواية"} 
                        </li>
                        <li className={Styletemp1.lits_inters}>
                        <i  style={{color:color1}}  className="fa-solid fa-circle-dot"></i> {CrentUser  ? info.Inters3 : "الهواية"} 
                        </li>
                        <li className={Styletemp1.lits_inters}>
                        <i  style={{color:color1}}  className="fa-solid fa-circle-dot"></i> {CrentUser  ? info.Inters4 : "الهواية"}
                        </li>

                    </ul>
                </div>
                
            </div>
        </div>
    )
 }

 export default Template2Ar