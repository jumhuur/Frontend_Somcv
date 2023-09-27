import { useState } from "react";
import { useProtectedPage } from "../Context/Auth";
import { Usecvcontext } from "../Context/Cv";

export const Usesingup = () => {
  const [Error, setError] = useState(null);
  const [Looding, setLooding] = useState(false);
  const { dispatch, ACTIONS, setDatA } = useProtectedPage();
  const { Getallcv } = Usecvcontext();
  const Singupuser = async (Email, Password, Magac) => {
    setLooding(true);
    setError(false);
    const response = await fetch(
      "https://frontend-somcv.vercel.app/Api/RegisterUser",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ Email, Password, Magac }),
      }
    );

    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
      setLooding(false);
    }

    if (response.ok) {
      setError(false);
      // setloacal stroge
      localStorage.setItem("user", JSON.stringify(json));
      dispatch({ type: ACTIONS.LOGIN, payload: json });
      Getallcv();
      setLooding(false);
      setDatA();
    }
  };

  return { Singupuser, Looding, Error };
};
