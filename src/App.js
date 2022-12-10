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
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ar" element={<HomeAr />} />
        <Route path="/so" element={<HomeSo />} />
        <Route path="/Login" element={<Login />} />
        <Route path="ar/Login" element={<LoginAr />} />
        <Route path="so/Login" element={<LoginSo />} />
        <Route path="/Register" element={<Register/>} />
        <Route path="ar/Register" element={<RegisterAr/>} />
        <Route path="so/Register" element={<RegisterSo/>} />
        <Route path="/Editcv/:id" element={<Editcv/>} />
        <Route path="/ar/Editcv/:id" element={<EditcvAR/>} />
        <Route path="/so/Editcv/:id" element={<EditcvSo/>} />
        <Route path="/Addcv" element={<Addcv />} />
        <Route path="/ar/Addcv" element={<AddcvAr />} />
        <Route path="/so/Addcv" element={<AddcvSo />} />
      </Routes>
    </div>
  );
}

export default App;
