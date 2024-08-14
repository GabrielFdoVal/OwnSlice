import React, { useState } from "react"
import styles from './App.module.css'
import {BrowserRouter} from 'react-router-dom'
import Content from "../components/Content.jsx"

export default function App(props){
    return (
        <div className={styles.app}>
            <BrowserRouter>
                <Content />
            </BrowserRouter>
        </div>
    )
}