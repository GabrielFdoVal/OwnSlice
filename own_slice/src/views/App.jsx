import React, { useState } from "react"
import styles from './App.module.css'
import {HashRouter} from 'react-router-dom'
import Content from "../components/Content.jsx"

export default function App(props){
    return (
        <div className={styles.app}>
            <HashRouter>
                <Content />
            </HashRouter>
        </div>
    )
}