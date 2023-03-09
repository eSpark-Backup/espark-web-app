import React from 'react'
import Button from '../button/button'
import style from './style.module.css'

const blogsCard = ({ image, title, para, link, btext }) =>  {
    return (
        <div className={`${style.blogsCard} `}>
            <img className={`${style.blogsImg}`} src={{ image } ? { image } : "https://thumbs.dreamstime.com/b/blog-information-website-concept-workplace-background-text-view-above-127465079.jpg"
            } alt={title} />
            <h2 className={`${style.blogsHeading}`}>{title}</h2>
            <p className={`${style.blogsPara}`}>{para} </p>
            <Button link={link} title={btext} design={2} />
        </div>
    )
}

export default blogsCard;