import React from 'react'
import { Link } from 'react-router-dom'
import style from './style.module.css'

const BlogsCard = ({ image, title, para, link, btext }) =>  {
    return (
        <div className={`${style.blogsCard} `}>
            {/* <img className={`${style.blogsCardImg}`} src={image} alt={title} /> */}
            <img className={`${style.blogsCardImg}`} src={
        image
            ? image
            : "https://thumbs.dreamstime.com/b/blog-information-website-concept-workplace-background-text-view-above-127465079.jpg"
    }  alt={title} />
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