import { useState } from "react";
import { Usecvcontext } from "../Context/Cv";
export const UseDawnload = () => {
  const { Getallcv } = Usecvcontext();
  const [Error, setError] = useState(null);
  const [Looding, setLooding] = useState(false);
  const Download = async (Name, Price) => {
    setLooding(true);
    setError(false);
    const response = await fetch(
      "https://frontend-somcv.vercel.app/Api/addDownload",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ Name, Price }),
      }
    );
    const json = await response.json();
    if (!response.ok) {
      setError(json.error);
      setLooding(false);
    }
    if (response.ok) {
      setError(false);
      setLooding(false);
      Getallcv();
    }
  };

  return { Download, Looding, Error };
};
