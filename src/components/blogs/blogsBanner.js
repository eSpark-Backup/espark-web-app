import React from 'react'
import style from './style.module.css'

const blogsBanner = ({ title }) => {
    return (
        <div className={`${style.topRow} row`} >
            <div className={`${style.topContainer} container align-self-center`} >
                <h1 className={`${style.topText}`}>{title}</h1>
            </div>
        </div>
    )
}

export default blogsBanner;
