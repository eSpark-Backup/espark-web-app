import React from "react";
import style from "./style.module.css";

function ServicesCard({ image, image2, title, para }) {
  return (
    <div className="p-4">
      <div className={` ${style.mainCardWrapper}`}>
        <div className={`${style.appDevWrapper}`}>
          <div className={style.logoImg}>
              <img className={style.image} src={image} alt={title} />
              <img className={style.himage} src={image2} alt={title} />
          </div>
          <p className={style.txtCardService} dangerouslySetInnerHTML={{ __html: title }}></p>
          <p className={style.txtCardService_para}>{para}</p>
        </div>
        <div className={style.readMoreDiv}>
          <h1 className={style.readMoreTxt}>Read More</h1>
          <p>
            <svg
              width="27"
              height="10"
              viewBox="0 0 27 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M27 5L21.4564 10L20.5996 9.09536L24.4676 5.61125H0V4.38875H24.4676L20.5996 0.892421L21.4564 0L27 5Z"
                fill="#949292"
              />
            </svg>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ServicesCard;
