import React from "react";
import Header from '../components/Header.jsx';
import Navbar from "../components/Navbar.jsx";
import TextLeft from "../components/TextLeft.jsx";
import TextRight from "../components/TextRight.jsx";
import Footer from "../components/Footer.jsx";
import arco_triunfo_image from '../images/arco_triunfo.png';
import bond_image from '../images/bond.png';
import lisbon_image from '../images/lisbon_image.png'

export default function Home(props) {
    return (
        <div>
            <Header />  
            <Navbar />
        </div>
    )
}