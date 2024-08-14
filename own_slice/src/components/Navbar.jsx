import React from "react";
import styles from './Navbar.module.css'
import { Link } from "react-router-dom";

export default function Navbar(){
    return (
        <div>
            
            <nav className={styles.nav}>
                <Link to="/"><p>Home</p></Link>                
                <Link to="/aboutus"><p>About Us</p></Link>
                <Link to="/"><p>Services</p></Link>
                <Link to="/"><p>Contact</p></Link>
            </nav>
        </div>
        
    )
}