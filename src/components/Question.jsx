import React from "react";
import styles from './Service.module.css';

export default function Question(params){
    const lis = params.list_items ? params.list_items.map(item => {
        return <li key={item.id}>
            {item.li}
        </li>
    }) : null;
    return (
        <div className={styles.home_text}>
            <div>
                <h3>{params.title}</h3>
                <p>{params.text}</p>
                <div className={styles.lista}>
                    <ul>
                        {lis}
                    </ul>
                </div>
            </div>
        </div>
    )
}