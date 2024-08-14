import React from "react";
import styles from './Value.module.css';
import bond_image from '../images/bond.png'

export default function Value(){
    return (
        <div className={styles.home_text}>
            <div className={styles.left}>
                <img src={bond_image} alt="" />
            </div>
            <div className={styles.right}>
                <h3>Values</h3>
                <ul>
                    <li>Trust</li>
                    <li>Community</li>
                    <li>Simplicity</li>
                    <li>Innovation</li>
                </ul>
            </div>
        </div>
    )
}