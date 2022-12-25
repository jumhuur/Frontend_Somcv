import Home from "./Components/Home/Home";
import {Routes, Route} from "react-router-dom"
import Login from "./Components/login/Login";
import Register from "./Components/Singup/Singup";
import Editcv from "./Components/Editcv/Editcv";
import HomeAr from "./Components/Home/HomeAr";
import EditcvAR from "./Components/Editcv/EditcvAr";
import RegisterAr from "./Components/Singup/SingupAr";
import LoginAr from "./Components/login/LoginAr";
import HomeSo from "./Components/Home/HomeSo";
import LoginSo from "./Components/login/LoginSo";
import RegisterSo from "./Components/Singup/SingupSo";
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
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ar" element={<HomeAr />} />
        <Route path="/so" element={<HomeSo />} />
        <Route path="/Login" element={<LoginModr />} />
        <Route path="ar/Login" element={<LoginModrAr />} />
        <Route path="so/Login" element={<LoginModrSo />} />
        <Route path="/Register" element={<SingupModern/>} />
        {/* <Route path="/singup" element={<SingupModern/>} /> */}
        <Route path="ar/Register" element={<SingupModernAr/>} />
        <Route path="so/Register" element={<SingupModernSo/>} />
        <Route path="/Editcv/:id" element={<Editcv/>} />
        <Route path="/ar/Editcv/:id" element={<EditcvAR/>} />
        <Route path="/so/Editcv/:id" element={<EditcvSo/>} />
        <Route path="/Addcv" element={<Addcv />} />
        <Route path="/ar/Addcv" element={<AddcvAr />} />
        <Route path="/so/Addcv" element={<AddcvSo />} />
        <Route path="*" element ={<Unuvalibe />} />
      </Routes>
    </div>
  );
}

export default App;
