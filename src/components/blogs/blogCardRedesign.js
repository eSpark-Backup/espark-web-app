import React from 'react'
import { Link } from 'react-router-dom';
import  './blogRedesign.css'

function BlogCardRedesign({image,limitedtitle,wordLimit,btn_text,link,para,cardSelection}) {
  const words = para.split(" ");
  const limitedPara =  cardSelection == "largeCards" ?  words.slice(0, wordLimit ? wordLimit : 20).join(" ") + "..." : words.slice(0,30).join(" ")
  const heading = limitedtitle.split(" ");
  const title =  cardSelection == "largeCards" ? heading.slice(0, 3).join(" ") + "..." :heading.slice(0, 4).join(" ") + "...";


  return (
    <div  className='singleCardMargin  h-100 d-flex flex-column justify-content-between   ' >
         <div   className={cardSelection =="largeCards" ? "redesignBlogCardWrapper" : "redesignBlogSmallCards"}  >
              {/* <img width="100%" height="100%" className={"blogImage"} src={ image ? image : "https://thumbs.dreamstime.com/b/blog-information-website-concept-workplace-background-text-view-above-127465079.jpg"} /> */}
              <img width="100%" height="100%" className={"blogImage"} src={ image ? image : "https://thumbs.dreamstime.com/b/blog-information-website-concept-workplace-background-text-view-above-127465079.jpg"} />
        </div> 
        <div >
              <h3 className={`mt-3 blogsCardHeading `} >{title}</h3>
        </div> 

        <div   className= {cardSelection == "largeCards" ?  'd-flex    heightAdjustLargeCard' :' heightAdjustSmallCard'} >
          <div
            className={`blogsCardPara  mt-3 p-1 `}
            dangerouslySetInnerHTML={{
              __html: limitedPara,
            }}
            />
       
          </div>
          <div  >
              <Link className={`blogsCardbtn mt-auto mr-auto `} to={link}>
                {btn_text}
              </Link>
            </div>
    </div>
  )
}

export default BlogCardRedesign