import React from "react";
import { Link } from "react-router-dom";
import style from "./style.module.css";

const BlogsCard = ({ image, title, para, link, btn_text }) => {
  const words = para.split(" ");
  const limitedPara = words.slice(0, 20).join(" ") + "...";
  return (
    <div className={`${style.blogsCard} `}>
      {/* <img className={`${style.blogsCardImg}`} src={image} alt={title} /> */}
      <img
        className={`${style.blogsCardImg}`}
        src={
          image
            ? image
            : "https://thumbs.dreamstime.com/b/blog-information-website-concept-workplace-background-text-view-above-127465079.jpg"
        }
        alt={title}
      />
      <h2 className={`${style.blogsCardHeading} text-justify`}>{title}</h2>
      <p
        className={`${style.blogsCardPara} text-justify`}
        dangerouslySetInnerHTML={{
          __html: limitedPara,
        }}
      />
      <Link className={`${style.blogsCardbtn}`} to={link}>
        {btn_text}
      </Link>
    </div>
  );
};

export default BlogsCard;
