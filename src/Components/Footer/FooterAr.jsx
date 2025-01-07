import { Link } from "react-router-dom";

function FooterAr() {
  return (
    <>
      <div className="footer" dir="rtl">
        <div className="haye">
          <div className="footer_cointainer">
            <div className="parts_footer">
              <div className="logo_footer">
                <img src="/Images/logo-whiteAr.png" alt="logo_footer" />
                <h2>صومالي سيفي</h2>
              </div>
              <div className="info_footer">
                <p style={{ textAlign: "right" }}>
                  شبكة صوم سيفي هي شركة
                  <br />
                  هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم
                  توليد هذا النص من مولد النص العربى،
                  <span>&#169;</span> 2022-2023
                </p>
              </div>
            </div>
            <div className="parts_footer">
              <div className="links_footer">
                <ul className="footer_links">
                  <li className="footer_links_items">
                    <Link to={"/"}>
                      <span>
                        <i className="fa-solid fa-file-lines"></i>
                      </span>{" "}
                      شروط الإستخدام
                    </Link>
                  </li>
                  <li className="footer_links_items">
                    <Link to={"/ar/register"}>
                      <span>
                        <i className="fa-solid fa-user"></i>
                      </span>{" "}
                      حساب جديد
                    </Link>
                  </li>
                  <li className="footer_links_items">
                    <Link to={"/ar/Login"}>
                      <span>
                        <i className="fa-solid fa-right-to-bracket"></i>
                      </span>{" "}
                      تسجيل الدخول
                    </Link>
                  </li>
                  <li className="footer_links_items">
                    <Link to={"/"}>
                      <span>
                        <i className="fa-solid fa-compress"></i>
                      </span>{" "}
                      خدمات
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="parts_footer">
              <div className="contect_us_footer">
                <h2 className="ciwaan_footer" style={{ textAlign: "right" }}>
                  24/7
                </h2>
                <p>إتصل قسم إذارة الموقع من هنا </p>
                <div className="socila_footer">
                  <div className="social">
                    <i className="fa-brands fa-twitter"></i>
                  </div>
                  <div className="social">
                    <i className="fa-brands fa-whatsapp"></i>
                  </div>
                  <div className="social">
                    <i className="fa-brands fa-facebook"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="AUTH">
            <p style={{ color: "#fff", fontSize: "1rem" }}>
              تصميم وتطوير: المهندس جمهور
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default FooterAr;
