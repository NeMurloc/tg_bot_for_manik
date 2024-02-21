import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import "./App.css";
import Services from "./pages/ServicesPage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="posts" element={<Posts />}/>
           <Route path="about" element={<About />}/>   */}
        {/* <Route path="selectCity" element={<SelectCity/>}/> */}
        <Route path="*" element={<Services/>}/>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
