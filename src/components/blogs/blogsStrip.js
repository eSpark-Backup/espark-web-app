import React from 'react'
import { Link } from 'react-router-dom'
import style from './style.module.css'

const BlogsStrip = ({ title, para, link, btext }) =>  {
    return (
        <div className={`${style.blogsStrip}`}>
            <h2 className={`${style.blogsStripHeading}`}>{title}</h2>
            <p className={`${style.blogsStripPara}`} dangerouslySetInnerHTML={{
                                  __html: para}} />
            <Link className={`${style.blogsStripbtn}`} to={link}>
                {btext}
            </Link>
        </div>
    )
}

export default BlogsStrip;