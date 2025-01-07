import Home from "./Components/Home/Home";
import { Routes, Route, Navigate } from "react-router-dom";
import Editcv from "./Components/Editcv/Editcv";
import HomeAr from "./Components/Home/HomeAr";
import EditcvAR from "./Components/Editcv/EditcvAr";
import HomeSo from "./Components/Home/HomeSo";
import EditcvSo from "./Components/Editcv/EditcvSo";
import Addcv from "./Components/Addcv/Addcv";
import AddcvAr from "./Components/Addcv/AddcvAr";
import AddcvSo from "./Components/Addcv/AddcvSo";
import SingupModern from "./Components/Singup/Singup_modern";
import SingupModernAr from "./Components/Singup/Singup_modernAr";
import SingupModernSo from "./Components/Singup/Singup_modernSo";
import LoginModr from "./Components/login/login_m";
import LoginModrSo from "./Components/login/login_mSo";
import LoginModrAr from "./Components/login/login_mAr";
import Unuvalibe from "./Components/Notfound/404";
import UpdateCv from "./Components/Updatecv/Updatecv";
import { useProtectedPage } from "./Components/Context/Auth";
import OneJob from "./Components/Jobs/OneJob/OneJob";
import NotFound_EN from "./Components/Notfound/404";
import NotFound_AR from "./Components/Notfound/404Ar";
import NotFound_SO from "./Components/Notfound/404So";
function App() {
  const { CrentUser } = useProtectedPage();
  const lang = localStorage.getItem("lan");
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ar" element={<HomeAr />} />
        <Route path="/so" element={<HomeSo />} />
        <Route
          path="/Login"
          element={!CrentUser ? <LoginModr /> : <Navigate to={"/"} />}
        />
        <Route
          path="ar/Login"
          element={!CrentUser ? <LoginModrAr /> : <Navigate to={"/ar"} />}
        />
        <Route
          path="so/Login"
          element={!CrentUser ? <LoginModrSo /> : <Navigate to={"/so"} />}
        />
        <Route
          path="/Register"
          element={!CrentUser ? <SingupModern /> : <Navigate to={"/"} />}
        />
        {/* <Route path="/singup" element={<SingupModern/>} /> */}
        <Route
          path="ar/Register"
          element={!CrentUser ? <SingupModernAr /> : <Navigate to={"/ar"} />}
        />
        <Route
          path="so/Register"
          element={!CrentUser ? <SingupModernSo /> : <Navigate to={"/so"} />}
        />
        <Route
          path="/Editcv/:id"
          element={CrentUser ? <Editcv /> : <Navigate to={"/"} />}
        />
        <Route
          path="/ar/Editcv/:id"
          element={CrentUser ? <EditcvAR /> : <Navigate to={"/ar"} />}
        />
        <Route
          path="/so/Editcv/:id"
          element={CrentUser ? <EditcvSo /> : <Navigate to={"/so"} />}
        />
        <Route
          path="/Addcv"
          element={CrentUser ? <Addcv /> : <Navigate to={"/"} />}
        />
        <Route path="/updateCv/:Id" element={<UpdateCv />} />
        <Route
          path="/ar/Addcv"
          element={CrentUser ? <AddcvAr /> : <Navigate to={"/ar"} />}
        />
        <Route
          path="/so/Addcv"
          element={CrentUser ? <AddcvSo /> : <Navigate to={"/so"} />}
        />
        <Route path="/job/:Id" element={<OneJob />} />
        <Route
          path="*"
          element={
            lang == "so" ? (
              <NotFound_SO />
            ) : lang == "Ar" ? (
              <NotFound_AR />
            ) : (
              <NotFound_EN />
            )
          }
        />
      </Routes>
    </div>
  );
}

export default App;
