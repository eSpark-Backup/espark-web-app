import React from "react";
import { Link } from "react-router-dom";
import style from "./style.module.css";

const BlogsCard = ({ image, title, para, link, btn_text }) => {
  const words = para.split(" ");
  const limitedPara = words.slice(0, 20).join(" ") + "...";
  const heading = title.split(" ");
  const limitedtitle = heading.slice(0, 4).join(" ") + "...";
  return (
    <div
      className={`${style.blogsCard}  d-flex align-items-center flex-column justify-content-center`}>
      {/* <img className={`${style.blogsCardImg}`} src={image} alt={title} /> */}
      <Link to={link}>
        <img
          className={`${style.blogsCardImg}`}
          src={
            image
              ? image
              : "https://thumbs.dreamstime.com/b/blog-information-website-concept-workplace-background-text-view-above-127465079.jpg"
          }
          alt={title}
        />
        <h2 className={`${style.blogsCardHeading} my-auto text-justify`}>
          {limitedtitle}
        </h2>
      </Link>
      <p
        className={`${style.blogsCardPara} my-auto text-justify`}
        dangerouslySetInnerHTML={{
          __html: limitedPara,
        }}
      />
      <Link className={`${style.blogsCardbtn} mt-auto mr-auto `} to={link}>
        {btn_text}
      </Link>
    </div>
  );
};

export default BlogsCard;
