import React from "react";
import styles from './TextLeft.module.css';

export default function TextLeft(params){
    return (
        <div className={styles.home_text}>
            <div className={styles.left}>
                <h3>{params.title}</h3>
                <p>{params.text}</p>
            </div>
            <div className={styles.right}>
                <img src={params.src} alt="" />
            </div>
        </div>
    )
}