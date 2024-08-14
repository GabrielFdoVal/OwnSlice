import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../views/Home";
import AboutUs from "../views/AboutUS";

export default function Content(props) {
    return (
        <div>
            <Routes>                
                <Route path="/" element={<Home />}/>      
                <Route path="/aboutus" element={<AboutUs />}/>    
            </Routes>
        </div>
    )
}