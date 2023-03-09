import React from 'react'
import Button from '../button/button'
import style from './style.module.css'

const blogsStrip = ({ title, para, link, btext }) =>  {
    return (
        <div className={`${style.blogsCard}`}>
            <h2 className={`${style.blogsHeading}`}>{title}</h2>
            <p className={`${style.blogsPara}`}>{para} </p>
            <Button link={link} title={btext} design={2} />
        </div>
    )
}

export default blogsStrip;