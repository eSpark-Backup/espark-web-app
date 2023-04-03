import React from "react";
import { Link } from "react-router-dom";
import { FaLongArrowAltRight, FaRegArrowAltCircleRight } from "react-icons/fa";
import style from "./style.module.css";
const Button = ({ title, link, design, type, onClick, disabled }) => {
  if (design === null) {
    return null;
  }
  if (design === 0) {
    return (
      <div>
        <button type={type} class="submit roundbutton">
          {title}
        </button>
      </div>
    );
  }
  if (design === 1) {
    return (
      <>
        <Link
          to={link}
          className={style.btnMargin}
          onClick={onClick}
          disabled={disabled}>
          <button className="roundbutton rounded-pill">
            {title}
            <FaLongArrowAltRight className={style.arrowSize} />
          </button>
        </Link>
      </>
    );
  }
  if (design === 2) {
    return (
      <>
        <Link
          to={link}
          className={style.btnMargin}
          onClick={onClick}
          disabled={disabled}>
          <button className="roundbutton rounded-pill">{title}</button>
        </Link>
      </>
    );
  }
  if (design === 3) {
    return (
      <>
        <button
          class="btn btn-light rounded-pill"
          to={link}
          onClick={onClick}
          style={{ width: "100%", boxShadow: "none" }}
          disabled={disabled}>
          {title}
        </button>
      </>
    );
  }
  if (design === 4) {
    return (
      <div>
        <Link
          class="btn btn-primary rounded-pill"
          to={link}
          onClick={onClick}
          disabled={disabled}>
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
        <Link class="btn btn-primary rounded-pill" to={link}>
          {title}
        </Link>
      </div>
    );
  }
  if (design === 6) {
    return (
      <div>
        <Link class="read-more-btn " to={link} onClick={onClick}>
          {title}
          {"  "}
          <FaLongArrowAltRight style={{ marginTop: 0 }} margin={0} />
        </Link>
      </div>
    );
  }
  if (design === 7) {
    return (
      <div>
        <Link class="read-more-btn" to={link}>
          {title}
        </Link>
      </div>
    );
  }
  if (design === 8) {
    return (
      <button onClick={onClick} className={`${style.blogDetailsButton}`}>
        {title}
      </button>
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
  if (design === 11) {
    return (
      <>
        <a
          href={link}
          target="_blank"
          className={style.btnMargin}
          onClick={onClick}
          disabled={disabled}>
          <button className="roundbutton">{title}</button>
        </a>
      </>
    );
  }

  if (design === 12) {
    return (
      <>
        <a
          href={link}
          target="_blank"
          className={style.btnMargin}
          onClick={onClick}
          disabled={disabled}>
          <button
            className="roundbutton rounded-pill"
            style={{
              width: "236.18px",
              fontSize: 30,
              height: 46,
              boxShadow: "none",
              fontWeight: 600,
            }}>
            {title}
          </button>
        </a>
      </>
    );
  }
  if (design === 13) {
    return (
      <>
        <a
          href="#newDiv_0"
          className={style.btnMargin}
          onClick={onClick}
          disabled={disabled}>
          <button className="roundbutton rounded-pill">{title}</button>
        </a>
      </>
    );
  }
};

export default Button;
