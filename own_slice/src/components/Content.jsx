import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../views/Home";
import AboutUs from "../views/About_us";
import Services from "../views/Services";
import Contact from "../views/Contact";
import FAQ from "../views/Faq";

export default function Content(props) {
    return (
        <div>
            <Routes>                
                <Route path="/" element={<Home />}/>      
                <Route path="/aboutus" element={<AboutUs />}/>    
                <Route path="/services" element={<Services />}/>    
                <Route path="/contact" element={<Contact />}/>    
                <Route path="/faq" element={<FAQ />}/>
            </Routes>
        </div>
    )
}