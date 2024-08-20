import React from "react";
import styles from './Header.module.css'
import logo from "../images/own_slice_logo_no_background.png"

export default function Header(props){
    return (
        <header className={styles.header}>
            <div className={styles.title_subtitle}>
                    <h1>Own Slice</h1>
                    <p>Your Slice of Portugal</p>  
                </div>
            <img src={logo} height={170} alt="logo" />
                
        </header>
    )
}