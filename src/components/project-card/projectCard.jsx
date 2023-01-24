import React from "react";
import Button from "../button/button";
import style from "./style.module.css";

export default function ProjectCard({ data, link }) {
  return (
    <div className={`works-area pt-70 pb-50 ${style.galleryContainer}`}>
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
                <Button link={item.data.projectUrl} design={10} />
                <div className="works-content">
                  <h3>
                    {item.data.name.charAt(0) +
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
          <Button title="Explore Projects" link={"/project"} design={1} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
