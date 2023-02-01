import React from "react";
import { Link } from "react-router-dom";
import { FaLongArrowAltRight, FaRegArrowAltCircleRight } from "react-icons/fa";
import style from "./style.module.css";
const Button = ({ title, link, design, type, onClick }) => {


  if (design === null) {
    return null;
  } if (design === 0) {
    return (
      <div>
        <button type={type} class="btn btn-secondary">
          {title}
        </button>
      </div>
    );
  }
  if (design === 1) {
    return (
      <div>
        <Link to={link} className={style.btnMargin}>
          <button className="btn btn-secondary">
            {title}
            <FaLongArrowAltRight className={style.arrowSize} />
          </button>
        </Link>
      </div>
    );
  }
  if (design === 2) {
    return (
      <div>
        <Link to={link} className={style.btnMargin}>
          <button className="btn btn-secondary">
            {title}
          </button>
        </Link>
      </div>
    );
  }
  if (design === 3) {
    return (
      <div>
        <Link class="btn btn-light" onClick={onClick}>
          {title}
        </Link>
      </div>
    );
  }
  if (design === 4) {
    return (
      <div>
        <Link class="btn btn-primary " to={link}>
          {title}
          {"  "}
          <FaRegArrowAltCircleRight margin={10} />
        </Link>
      </div>
    );
  }
  if (design === 5) {
    return (
      <div>
        <Link class="btn btn-primary " to={link}>
          {title}
        </Link>
      </div>
    );
  }
  if (design === 6) {
    return (
      <div>
        <Link class="read-more-btn " to={link}>
          {title}
          {"  "}
          <FaRegArrowAltCircleRight margin={10} />
        </Link>
      </div>
    );
  }
  if (design === 7) {
    return (
      <div>
        <Link class="read-more-btn " to={link}>
          {title}
        </Link>
      </div>
    );
  }
  if (design === 8) {
    return (
      <a onClick={link}>{title}</a>
    );
  }
  if (design === 9) {
    return (
      <a href={link} rel="nofollow" target="_blank">
        {title}
      </a>
    );
  }
  if (design === 10) {
    return (
      <a className="icon" href={link} target="_blank">
        <FaLongArrowAltRight />
      </a>
    );
  }

}

export default Button;
