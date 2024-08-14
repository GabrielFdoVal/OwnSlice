import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../views/Home";
import AboutUs from "../views/AboutUs";
import Services from "../views/Services";
import Contact from "../views/Contact";

export default function Content(props) {
    return (
        <div>
            <Routes>                
                <Route path="/" element={<Home />}/>      
                <Route path="/aboutus" element={<AboutUs />}/>    
                <Route path="/services" element={<Services />}/>    
                <Route path="/contact" element={<Contact />}/>    
            </Routes>
        </div>
    )
}