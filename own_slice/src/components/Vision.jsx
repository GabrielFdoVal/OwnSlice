import React from "react";
import styles from './Vision.module.css';
import lisbon_image from '../images/lisbon_image.png'

export default function Vision(){
    return (
        <div className={styles.home_text}>
            <div className={styles.left}>
                <img src={lisbon_image} alt="" />
            </div>
            <div className={styles.right}>
                <h3>Vision</h3>
                <p>OwnSlice aims to democratize property ownership by making it accessible, enjoyable, and profitable for groups of friends looking to invest in Portugal.
                    We believe in transforming the dream of owning a property into a shared reality, 
                    where each partner has an equal stake and a clear understanding of their rights and responsibilities.
                </p>
            </div>
        </div>
    )
}