function Mobile({ Lan }) {
  const storage_language01 = () => {
    const lang = localStorage.getItem("lan");
    if (lang === "En") {
      localStorage.setItem("lan", "Ar");
    } else {
      localStorage.setItem("lan", "Ar");
    }
  };
  const storage_language02 = () => {
    const lang = localStorage.getItem("lan");
    if (lang === "En") {
      localStorage.setItem("lan", "so");
    } else {
      localStorage.setItem("lan", "so");
    }
  };
  return (
    <>
      <div
        id="mobile_languge"
        className={Lan ? "nav_lang active" : "nav_lang active"}
      >
        <div className="language_ul">
          <div className="lan_list">
            <a href="/ar" className="anchar" onClick={storage_language01}>
              <div className="calan">
                <img src="/Images/saudi-arabia.png" alt="calan" />
              </div>
              Arbic
            </a>
          </div>
          <div className="lan_list">
            <a href="/so" className="anchar" onClick={storage_language02}>
              <div className="calan">
                <img src="/Images/somaliland.png" alt="calan" />
              </div>
              somali
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Mobile;
