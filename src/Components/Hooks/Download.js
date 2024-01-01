import { useState } from "react";
import { Usecvcontext } from "../Context/Cv";
export const UseDawnload = () => {
  const { Getallcv } = Usecvcontext();
  const [Error, setError] = useState(null);
  const [Looding, setLooding] = useState(false);
  // download massage
  const SentMassage = async (Name_shaqsi, Qiimaha) => {
    const Massage = `Ku Soo Dhawaaw Shabakada SoomaliCv Cv Cusub Ayuu Download-garaystay ${Name_shaqsi.toLocaleUpperCase()} oo Qiimihiisu Yahay $${Qiimaha}`;
    const send = await fetch(`http://localhost:8800/Api/Message`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ Massage }),
    });
    const response = await send.json();
    if (!send.ok) {
      console.log("Qalad ayaa jira massage lama dirin");
    }
    if (send.ok) {
      console.log(response);
    }
  };
  const Download = async (Name, Price) => {
    setLooding(true);
    setError(false);
    const response = await fetch("http://localhost:8800/Api/addDownload", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ Name, Price }),
    });
    const json = await response.json();
    if (!response.ok) {
      setError(json.error);
      setLooding(false);
    }
    if (response.ok) {
      setError(false);
      setLooding(false);
      Getallcv();
      SentMassage(Name, Price);
    }
  };

  return { Download, Looding, Error };
};
