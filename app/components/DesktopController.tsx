"use client"

import React from 'react'
import styles from './styles/desktop.module.css'

export default function DesktopController({children}: {readonly children: React.ReactNode}){
    return(
        <div className={styles.desktopController}>
            {children}
        </div>
    )
}