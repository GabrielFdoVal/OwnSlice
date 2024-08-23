import React from "react";
import styles from './Header.module.css'
import logo from "../images/own_slice_logo_no_background.png"

export default function Header(props){
    return (
        <header className={styles.header}>
            <div className={styles.title_subtitle}>
                <h1 className={styles.title_yellow}>own</h1>
                <h1 className={styles.title_blue}>slice</h1>
            </div>
            <p>Your Slice of Portugal</p>  
                
        </header>
    )
}