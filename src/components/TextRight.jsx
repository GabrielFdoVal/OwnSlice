import React from "react";
import styles from './TextRight.module.css';

export default function TextRight(params){
    const lis = params.list_items ? params.list_items.map(item => {
        return <li key={item.id}>
            {item.li}
        </li>
    }) : null;

    const content = params.text ?
    <div className={styles.right}>
        <h3>{params.title}</h3>
        <p>{params.text}</p>
    </div> : 
    <div className={styles.right}>
        <h3>{params.title}</h3>
            <ul>
                {lis}
            </ul>
    </div>;
    return (
        <div className={styles.home_text}>
            <div className={styles.left}>
                <img src={params.src} alt="" />
            </div>
        {content}    
        </div>
    )
}