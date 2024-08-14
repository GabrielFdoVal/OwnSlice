import React from "react";
import styles from './Mission.module.css';
import arco_triunfo_image from '../images/arco_triunfo.png'

export default function Mission(){
    return (
        <div className={styles.home_text}>
            <div className={styles.left}>
                <h3>Mission</h3>
                <p>Our mission is to simplify the process of joint property ownership by providing a seamless, legally secure, and stress-free experience. 
                    From legal agreements to mortgage facilitation, OwnSlice empowers individuals to invest confidently in Portugal's thriving real estate market.
                </p>
            </div>
            <div className={styles.right}>
                <img src={arco_triunfo_image} alt="" />
            </div>
        </div>
    )
}