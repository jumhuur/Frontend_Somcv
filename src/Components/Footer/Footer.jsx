import {Link} from "react-router-dom"

function Footer() {
    return (
        <>
        <div className="footer">
            <div className="haye">
                <div className="footer_cointainer">
                <div className="parts_footer">
                    <div className="logo_footer">
                        <img src="/Images/logo-white.svg" alt="logo_footer" /> 
                    </div>
                    <div className="info_footer">
                        <p>
                            Shabakada soomali cv waxaa kuu fiyaar 
                            <br />
                            cv-yo kala duwan oo nashqad walba leh waxanay kuu hawl 
                            fududaynaysaa inaad diyaarsato cv-qurux badan waxkhti yar 
                            gudaheed <span>&#169;</span> 2022-2022
                        </p>
                    </div>
                </div>
                <div className="parts_footer">
                    <div className="links_footer">
                        <ul className="footer_links">
                            <li className="footer_links_items">
                                <Link to={"/"}>
                                    <span><i className="fa-solid fa-file-lines"></i></span> Shuruuda Adeegsiga
                                </Link>
                            </li>
                            <li className="footer_links_items">
                            <Link to={"/Register"}>
                            <span><i className="fa-solid fa-user"></i></span> Samayso Akoon
                            </Link>
                            </li>
                            <li className="footer_links_items">
                            <Link to={"/Login"}>
                            <span><i className="fa-solid fa-right-to-bracket"></i></span> Gal Akoon Hore
                            </Link>
                            </li>
                            <li className="footer_links_items">
                            <Link to={"/"}>
                            <span><i className="fa-solid fa-compress"></i></span> Adeegyo
                            </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="parts_footer">
                    <div className="contect_us_footer">
                        <h2 className="ciwaan_footer">24/7</h2>
                        <p>Kala Xidhiidh Halkan Hoose Mamaulka shabakada</p>
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

            </div>
        </div>
        
        </>
    )
}

export default Footer