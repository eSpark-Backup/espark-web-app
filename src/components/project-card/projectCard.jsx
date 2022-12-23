import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import style from "./style.module.css";

export default function ProjectCard({ data, link }) {
  return (
    <div className="works-area pt-80 pb-50">
      <div class="container">
        {link !== "/" && (
          <div class="section-title text-left">
            <h2>
              Our Latest <span>Projects</span>
            </h2>
          </div>
        )}
      </div>
      <div className="container">
        <div className="row justify-content-center">
          {data.map((item, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="single-works">
                <img className="img" src={item.data.image} alt="image" />
                <a className="icon" href={item.data.projectUrl} target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
                    <path
                      d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z"
                      data-name="Right"
                    />
                  </svg>
                </a>
                <div className="works-content">
                  <h3>
                    {item.data.name.charAt(0).toUpperCase() +
                      item.data.name.slice(1)}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={style.txtCenter}>
        {link == "/" ? (
          <Link to={"/project"}>
            <a className="btn btn-secondary">
              GO To Projects
              <FaLongArrowAltRight className={style.arrowSize} />
            </a>
          </Link>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
