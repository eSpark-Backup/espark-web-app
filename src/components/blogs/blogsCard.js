import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../button/button'
import style from './style.module.css'

const BlogsCard = ({ image, title, para, link, btext }) =>  {
    return (
        <div className={`${style.blogsCard} `}>
            <img className={`${style.blogsCardImg}`} src={image} alt={title} />
            <h2 className={`${style.blogsCardHeading}`}>{title}</h2>
            <p className={`${style.blogsCardPara}`} dangerouslySetInnerHTML={{
                                  __html: para}} />
            <Link className={`${style.blogsCardbtn}`} to={link}>
                {btext}
            </Link>
        </div>
    )
}

export default BlogsCard;