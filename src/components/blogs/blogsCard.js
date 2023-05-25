import React from "react";
import { Link } from "react-router-dom";
import  './blogRedesign.css'

const BlogsCard = ({ image, title, para, link, btn_text, word, }) => {
  const words = para.split(" ");
  const limitedPara = words.slice(0, word ? word : 20).join(" ") + "...";
  const heading = title.split(" ");
  const limitedtitle = heading.slice(0, 4).join(" ") + "...";
  return (
    <div
      className={`blogsCard d-flex align-items-center flex-column justify-content-left ` }
    >
      {/* <img className={`blogsCardImg}`} src={image} alt={title} /> */}

      <Link to={link}>
      <div className={"blogCardWrapper"} style={{backgroundImage:`url(${image})`}}>

        {/* <img
          className={`blogsCardImg}`}
          src={
            image
              ? image
              : "https://thumbs.dreamstime.com/b/blog-information-website-concept-workplace-background-text-view-above-127465079.jpg"
          }
          alt={title}
        /> */}
                    </div>

        <h2 className={`blogsCardHeading} my-auto text-justify mt-3`}>
          {limitedtitle}
        </h2>
      </Link>
      <div
        className={`blogsCardPara my-auto text-justify mt-1  p-2`}
        dangerouslySetInnerHTML={{
          __html: limitedPara,
        }}
      />
      <Link className={`blogsCardbtn mt-auto mr-auto `} to={link}>
        {btn_text}
      </Link>
    </div>
  );
};

export default BlogsCard;
