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
            <TextRight 
                title="Vision"
                text="OwnSlice aims to democratize property ownership by making it accessible, enjoyable, and profitable for groups of friends looking to invest in Portugal. We believe in transforming the dream of owning a property into a shared reality, where each partner has an equal stake and a clear understanding of their rights and responsibilities."
                src={lisbon_image}/> 
            <TextLeft 
                title="Mission" 
                text="Our mission is to simplify the process of joint property ownership by providing a seamless, legally secure, and stress-free experience. From legal agreements to mortgage facilitation, OwnSlice empowers individuals to invest confidently in Portugal's thriving real estate market."
                src={arco_triunfo_image}/> 
            <TextRight 
                title="Values" 
                src={bond_image}
                list_items={[
                    {id: "1", li: "Trust"},
                    {id: "2", li: "Community"},
                    {id: "3", li: "Simplicity"},
                    {id: "4", li: "Innovation"}
                ]}/>   
            <Footer /> 
        </div>
    )
}