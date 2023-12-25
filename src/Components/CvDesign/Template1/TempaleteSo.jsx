import { useProtectedPage } from "../../Context/Auth";
import { Usecvcontext } from "../../Context/Cv";
import Styletemp1 from "./Template1.module.css";
import React from "react";
function TemplateSo({ cv, color1, color2 }) {
  const { CrentUser } = useProtectedPage();
  const { info } = Usecvcontext();
  return (
    <>
      <div className={Styletemp1.page_cv_container}>
        <div
          className={Styletemp1.cv_doc}
          style={{ backgroundColor: `${color1}` }}
        >
          <div className={Styletemp1.image_and_name}>
            <div
              className={Styletemp1.image}
              style={{
                backgroundImage: `Url(${
                  CrentUser ? info.Image : "/Images/User.png"
                })`,
              }}
            >
              <img
                src={CrentUser ? info.Image : "/Images/User.png"}
                alt="image_user"
              />
            </div>
            <h2>{CrentUser ? info.Name : "Bare Cali Mooge"}</h2>
            <h3 style={{ color: color2 }}>
              {CrentUser ? info.Jobtitle : "Ciwaanka shaqada"}
            </h3>
            <div className={Styletemp1.qurxin}>
              <span></span>
            </div>
            <div className={Styletemp1.person_contects}>
              <h2 className={Styletemp1.ciwaan}>Goobaha Xidhiidhka</h2>
              <ul className={Styletemp1.ul_contect}>
                <li className={Styletemp1.list_contect}>
                  <i
                    style={{ color: color2 }}
                    className="fa-solid fa-phone"
                  ></i>{" "}
                  {CrentUser ? info.Tell : " 063-4XXXXXXX"}
                </li>
                <li className={Styletemp1.list_contect}>
                  <i
                    style={{ color: color2 }}
                    className="fa-solid fa-envelope"
                  ></i>{" "}
                  {CrentUser ? info.Cvemail : " Tusaale123@hotmail.com"}
                </li>
                <li className={Styletemp1.list_contect}>
                  <i
                    style={{ color: color2 }}
                    className="fa-solid fa-location-dot"
                  ></i>{" "}
                  {CrentUser ? info.Location : "Wadankaag | Magaalada"}
                </li>
              </ul>
            </div>
            <div className={Styletemp1.qurxin}>
              <span></span>
            </div>
            <div
              className={`${Styletemp1.person_contects} ${Styletemp1.edecation}`}
            >
              <h2 className={Styletemp1.ciwaan}>Waxbarashada</h2>
              <div className={Styletemp1.heer_waxbrasho}>
                <h3
                  style={{ color: color2 }}
                  className={Styletemp1.Ciwaan_hoose}
                >
                  {CrentUser ? info.Edyear1 : "2022-2030"}
                </h3>
                <p className={Styletemp1.qoraal_hoose}>
                  {CrentUser ? info.Eddesc1 : "Tusaale Heerka Waxbarasho"}
                </p>
                <h4
                  style={{ color: color2 }}
                  className={Styletemp1.Ciwaan_hoose}
                >
                  <i className="fa-solid fa-graduation-cap"></i>{" "}
                  {CrentUser ? info.Edunivername1 : "Magaca Goobta"}
                </h4>
              </div>
              <div className={Styletemp1.heer_waxbrasho}>
                <h3
                  style={{ color: color2 }}
                  className={Styletemp1.Ciwaan_hoose}
                >
                  {CrentUser ? info.Edyear2 : "2022-2030"}
                </h3>
                <p className={Styletemp1.qoraal_hoose}>
                  {CrentUser ? info.Eddesc2 : "Tusaale Heerka Waxbarasho"}
                </p>
                <h4
                  style={{ color: color2 }}
                  className={Styletemp1.Ciwaan_hoose}
                >
                  <i className="fa-solid fa-graduation-cap"></i>{" "}
                  {CrentUser ? info.Edunivername2 : "Magaca Goobta"}
                </h4>
              </div>
              <div className={Styletemp1.heer_waxbrasho}>
                <h3
                  style={{ color: color2 }}
                  className={Styletemp1.Ciwaan_hoose}
                >
                  {CrentUser ? info.Edyear3 : "2022-2030"}
                </h3>
                <p className={Styletemp1.qoraal_hoose}>
                  {CrentUser ? info.Eddesc3 : "Tusaale Heerka Waxbarasho"}
                </p>
                <h4
                  style={{ color: color2 }}
                  className={Styletemp1.Ciwaan_hoose}
                >
                  <i className="fa-solid fa-graduation-cap"></i>{" "}
                  {CrentUser ? info.Edunivername3 : "Magaca Goobta"}
                </h4>
              </div>
            </div>
            <div className={Styletemp1.qurxin}>
              <span></span>
            </div>
            <div
              className={`${Styletemp1.person_contects} ${Styletemp1.Luuqadaha}`}
            >
              <h2 className={Styletemp1.ciwaan}>Luuqadaha</h2>
              <div className={Styletemp1.heer_waxbrasho}>
                <h3
                  className={`${Styletemp1.Ciwaan_hoose} ${Styletemp1.Langugage}`}
                >
                  {CrentUser ? info.Langname1 : "Magaca Luuqada"}{" "}
                  {CrentUser ? info.Langprog1 : "50"}%
                </h3>
                <div className={Styletemp1.lan_prog}>
                  <span
                    className={Styletemp1.prog}
                    style={{
                      width: `${CrentUser ? info.Langprog1 : "50"}%`,
                      backgroundColor: color2,
                    }}
                  ></span>
                </div>
                <h3
                  className={`${Styletemp1.Ciwaan_hoose} ${Styletemp1.Langugage}`}
                >
                  {CrentUser ? info.Langname2 : "Magaca Luuqada"}{" "}
                  {CrentUser ? info.Langprog2 : "50"}%
                </h3>
                <div className={Styletemp1.lan_prog}>
                  <span
                    className={Styletemp1.prog}
                    style={{
                      width: `${CrentUser ? info.Langprog2 : "50"}%`,
                      backgroundColor: color2,
                    }}
                  ></span>
                </div>
                <h3
                  className={`${Styletemp1.Ciwaan_hoose} ${Styletemp1.Langugage}`}
                >
                  {CrentUser ? info.Langname3 : "Magaca Luuqada"}{" "}
                  {CrentUser ? info.Langprog3 : "50"}%
                </h3>
                <div className={Styletemp1.lan_prog}>
                  <span
                    className={Styletemp1.prog}
                    style={{
                      width: `${CrentUser ? info.Langprog3 : "50"}%`,
                      backgroundColor: color2,
                    }}
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={Styletemp1.work_info}>
          <div className={`${Styletemp1.sections} ${Styletemp1.Profile}`}>
            <h3 style={{ color: color2 }} className={Styletemp1.ciwaano_left}>
              Igu saabsan
            </h3>
            <p className={Styletemp1.qoraal_hoose}>
              {CrentUser
                ? info.Profile
                : "  Lorem Ipsum is simply dummy text of the  Lorem Ipsum is simply dummy text of the Lorem Ipsum is simply dummy text of the Lorem Ipsum is simply dummy text of the Lorem Ipsum is simply dummy text of the "}
            </p>
          </div>
          <div className={`${Styletemp1.sections} ${Styletemp1.Exprians}`}>
            <h3 style={{ color: color2 }} className={Styletemp1.ciwaano_left}>
              Khibrado Shaqo
            </h3>
            <div className={Styletemp1.exp}>
              <div className={`${Styletemp1.qayb} ${Styletemp1.date_compny}`}>
                <h4 className={Styletemp1.Ciwaan_hoose}>
                  {CrentUser ? info.Exyear1 : "2022-2030"}
                </h4>
                <h4 className={Styletemp1.Ciwaan_hoose}>
                  <i className="fa-solid fa-building"></i>{" "}
                  {CrentUser ? info.Excompnay1 : "Magaca shirkada"}
                </h4>
              </div>
              <div className={`${Styletemp1.qayb} ${Styletemp1.info}`}>
                <h4
                  style={{ color: color2 }}
                  className={Styletemp1.Ciwaan_hoose}
                >
                  {CrentUser ? info.Exjob1 : "Ciwaanka shaqada"}
                </h4>
                <p className={Styletemp1.qoraal_hoose}>
                  {CrentUser
                    ? info.Exdesc1
                    : "Warbixin Kooban oo Ku Saabsan shaqadan Aad qaban jirtay ayaa Halkan Lagu qorayaa "}
                </p>
              </div>
            </div>
            <div className={Styletemp1.exp}>
              <div className={`${Styletemp1.qayb} ${Styletemp1.date_compny}`}>
                <h4 className={Styletemp1.Ciwaan_hoose}>
                  {CrentUser ? info.Exyear2 : "2022-2030"}
                </h4>
                <h4 className={Styletemp1.Ciwaan_hoose}>
                  <i className="fa-solid fa-building"></i>{" "}
                  {CrentUser ? info.Excompnay2 : "Magaca shirkada"}{" "}
                </h4>
              </div>
              <div className={`${Styletemp1.qayb} ${Styletemp1.info}`}>
                <h4
                  style={{ color: color2 }}
                  className={Styletemp1.Ciwaan_hoose}
                >
                  {CrentUser ? info.Exjob2 : "Ciwaanka shaqada"}
                </h4>
                <p className={Styletemp1.qoraal_hoose}>
                  {CrentUser
                    ? info.Exdesc2
                    : "Warbixin Kooban oo Ku Saabsan shaqadan Aad qaban jirtay ayaa Halkan Lagu qorayaa "}
                </p>
              </div>
            </div>
            <div className={Styletemp1.exp}>
              <div className={`${Styletemp1.qayb} ${Styletemp1.date_compny}`}>
                <h4 className={Styletemp1.Ciwaan_hoose}>
                  {CrentUser ? info.Exyear3 : "2022-2030"}
                </h4>
                <h4 className={Styletemp1.Ciwaan_hoose}>
                  <i className="fa-solid fa-building"></i>{" "}
                  {CrentUser ? info.Excompnay3 : "Magaca shirkada"}{" "}
                </h4>
              </div>
              <div className={`${Styletemp1.qayb} ${Styletemp1.info}`}>
                <h4
                  style={{ color: color2 }}
                  className={Styletemp1.Ciwaan_hoose}
                >
                  {CrentUser ? info.Exjob3 : "Ciwaanka shaqada"}
                </h4>
                <p className={Styletemp1.qoraal_hoose}>
                  {CrentUser
                    ? info.Exdesc3
                    : "Warbixin Kooban oo Ku Saabsan shaqadan Aad qaban jirtay ayaa Halkan Lagu qorayaa "}
                </p>
              </div>
            </div>
          </div>
          <div className={`${Styletemp1.sections} ${Styletemp1.Exprians}`}>
            <h3 style={{ color: color2 }} className={Styletemp1.ciwaano_left}>
              Xirfadaha
            </h3>
            <div className={Styletemp1.exp}>
              <div
                className={`${Styletemp1.qayb} ${Styletemp1.date_compny} ${Styletemp1.SKILLS}`}
              >
                <h4 className={Styletemp1.Ciwaan_hoose}>
                  {" "}
                  {CrentUser ? info.Skillname : "Magaca Xirfadaada"}{" "}
                </h4>
              </div>
              <div
                className={`${Styletemp1.qayb} ${Styletemp1.info} ${Styletemp1.SKILLS}`}
              >
                <span
                  className={`${Styletemp1.prog}  ${Styletemp1.skills}`}
                  style={{
                    width: `${CrentUser ? info.Skillprog : "50"}%`,
                    backgroundColor: color2,
                  }}
                ></span>
              </div>
            </div>
            <div className={Styletemp1.exp}>
              <div
                className={`${Styletemp1.qayb} ${Styletemp1.date_compny} ${Styletemp1.SKILLS}`}
              >
                <h4 className={Styletemp1.Ciwaan_hoose}>
                  {" "}
                  {CrentUser ? info.Skillname1 : "Magaca Xirfadaada"}{" "}
                </h4>
              </div>
              <div
                className={`${Styletemp1.qayb} ${Styletemp1.info} ${Styletemp1.SKILLS}`}
              >
                <span
                  className={`${Styletemp1.prog}  ${Styletemp1.skills}`}
                  style={{
                    width: `${CrentUser ? info.Skillprog1 : "50"}%`,
                    backgroundColor: color2,
                  }}
                ></span>
              </div>
            </div>
            <div className={Styletemp1.exp}>
              <div
                className={`${Styletemp1.qayb} ${Styletemp1.date_compny} ${Styletemp1.SKILLS}`}
              >
                <h4 className={Styletemp1.Ciwaan_hoose}>
                  {" "}
                  {CrentUser ? info.Skillname2 : "Magaca Xirfadaada"}{" "}
                </h4>
              </div>
              <div
                className={`${Styletemp1.qayb} ${Styletemp1.info} ${Styletemp1.SKILLS}`}
              >
                <span
                  className={`${Styletemp1.prog}  ${Styletemp1.skills}`}
                  style={{
                    width: `${CrentUser ? info.Skillprog2 : "50"}%`,
                    backgroundColor: color2,
                  }}
                ></span>
              </div>
            </div>
            <div className={Styletemp1.exp}>
              <div
                className={`${Styletemp1.qayb} ${Styletemp1.date_compny} ${Styletemp1.SKILLS}`}
              >
                <h4 className={Styletemp1.Ciwaan_hoose}>
                  {" "}
                  {CrentUser ? info.Skillname3 : "Magaca Xirfadaada"}{" "}
                </h4>
              </div>
              <div
                className={`${Styletemp1.qayb} ${Styletemp1.info} ${Styletemp1.SKILLS}`}
              >
                <span
                  className={`${Styletemp1.prog}  ${Styletemp1.skills}`}
                  style={{
                    width: `${CrentUser ? info.Skillprog3 : "50"}%`,
                    backgroundColor: color2,
                  }}
                ></span>
              </div>
            </div>
            <div className={Styletemp1.exp}>
              <div
                className={`${Styletemp1.qayb} ${Styletemp1.date_compny} ${Styletemp1.SKILLS}`}
              >
                <h4 className={Styletemp1.Ciwaan_hoose}>
                  {" "}
                  {CrentUser ? info.Skillname4 : "Magaca Xirfadaada"}
                </h4>
              </div>
              <div
                className={`${Styletemp1.qayb} ${Styletemp1.info} ${Styletemp1.SKILLS}`}
              >
                <span
                  className={`${Styletemp1.prog}  ${Styletemp1.skills}`}
                  style={{
                    width: `${CrentUser ? info.Skillprog4 : "50"}%`,
                    backgroundColor: color2,
                  }}
                ></span>
              </div>
            </div>
            <div className={Styletemp1.exp}>
              <div
                className={`${Styletemp1.qayb} ${Styletemp1.date_compny} ${Styletemp1.SKILLS}`}
              >
                <h4 className={Styletemp1.Ciwaan_hoose}>
                  {" "}
                  {CrentUser ? info.Skillname5 : "Magaca Xirfadaada"}{" "}
                </h4>
              </div>
              <div
                className={`${Styletemp1.qayb} ${Styletemp1.info} ${Styletemp1.SKILLS}`}
              >
                <span
                  className={`${Styletemp1.prog}  ${Styletemp1.skills}`}
                  style={{
                    width: `${CrentUser ? info.Skillprog5 : "50"}%`,
                    backgroundColor: color2,
                  }}
                ></span>
              </div>
            </div>
            <div className={Styletemp1.exp}>
              <div
                className={`${Styletemp1.qayb} ${Styletemp1.date_compny} ${Styletemp1.SKILLS}`}
              >
                <h4 className={Styletemp1.Ciwaan_hoose}>
                  {" "}
                  {CrentUser ? info.Skillname6 : "Magaca Xirfadaada"}
                </h4>
              </div>
              <div
                className={`${Styletemp1.qayb} ${Styletemp1.info} ${Styletemp1.SKILLS}`}
              >
                <span
                  className={`${Styletemp1.prog}  ${Styletemp1.skills}`}
                  style={{
                    width: `${CrentUser ? info.Skillprog6 : "50"}%`,
                    backgroundColor: color2,
                  }}
                ></span>
              </div>
            </div>
          </div>
          <div className={`${Styletemp1.sections} ${Styletemp1.Interest}`}>
            <h3 style={{ color: color2 }} className={Styletemp1.ciwaano_left}>
              Waxan xiiseeyo
            </h3>
            <ul className={Styletemp1.interst}>
              <li className={Styletemp1.lits_inters}>
                <i
                  style={{ color: color2 }}
                  className="fa-solid fa-circle-dot"
                ></i>{" "}
                {CrentUser ? info.Inters1 : "Magaca"}
              </li>
              <li className={Styletemp1.lits_inters}>
                <i
                  style={{ color: color2 }}
                  className="fa-solid fa-circle-dot"
                ></i>{" "}
                {CrentUser ? info.Inters2 : "Magaca"}
              </li>
              <li className={Styletemp1.lits_inters}>
                <i
                  style={{ color: color2 }}
                  className="fa-solid fa-circle-dot"
                ></i>{" "}
                {CrentUser ? info.Inters3 : "Magaca"}
              </li>
              <li className={Styletemp1.lits_inters}>
                <i
                  style={{ color: color2 }}
                  className="fa-solid fa-circle-dot"
                ></i>{" "}
                {CrentUser ? info.Inters4 : "Magaca"}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default TemplateSo;
