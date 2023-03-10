import React from 'react'
import style from './style.module.css'

const BlogsBanner = ({ title }) => {
    return (
        <div className={`${style.topRow} row`} >
            <div className={`${style.topContainer} container d-flex align-items-center justify-content-center align-content-center text-left flex-column `} >
                <div className='col-lg-10 col-md-12 col-sm-12'>
                    <h1 className={`${style.topText}`}>{title}</h1></div>
            </div>
        </div>
    )
}

export default BlogsBanner;
