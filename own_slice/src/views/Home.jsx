import React from "react";
import Header from '../components/Header.jsx';
import Navbar from "../components/Navbar.jsx";
import Vision from "../components/Vision.jsx";
import Mission from "../components/Mission.jsx";
import Value from "../components/Value.jsx";
import Footer from "../components/Footer.jsx";

export default function Home(props) {
    return (
        <div>
            <Header />                
            <Navbar />
            <Vision /> 
            <Mission /> 
            <Value /> 
            <Footer /> 
        </div>
    )
}