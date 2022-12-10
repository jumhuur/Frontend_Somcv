import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom"
import App from './App';
import "./Components/Static/Css/all.min.css";
import "./Components/Static/Css/main.css";
import "./Components/Static/Css/Normalize.css";
import "./Components/Static/Js/main.js";
import {ContextProvider} from "./Components/Context/Auth";
import {CvcontextProvaider} from "./Components/Context/Cv"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextProvider>
      <CvcontextProvaider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CvcontextProvaider>
   </ContextProvider>
  </React.StrictMode>
);

