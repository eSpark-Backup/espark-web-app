import React from "react";
import { useParams } from "react-router";
import { Fade } from "react-slideshow-image";
import ProjectNestedCard from "../../components/project-nested-card/projectNestedCard";
import { projects } from "../../helper/projects";

export default function ProjectDetails() {
  const params = useParams();
  const filterProjects = projects.filter((item) => item.name == params.id);

  const properties = {
    prevArrow: (
      <button className="owl-nav1">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
          <path
            d="M24 12.001H2.914l5.294-5.295-.707-.707L1 12.501l6.5 6.5.707-.707-5.293-5.293H24v-1z"
            data-name="Left"
          />
        </svg>
      </button>
    ),
    nextArrow: (
      <button className="owl-nav1">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
          <path
            d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z"
            data-name="Right"
          />
        </svg>
      </button>
    ),
  };
  return (
    <>
      <Fade {...properties} scale={1.4}>
        {filterProjects.map((item, index) => {
          return (
            <div className="each-slide" key={index}>
              <div
                className="img"
                style={{ backgroundImage: `url(${item.data.image})` }}
              >
                <div className="content">
                  {item.data.carousel.map((car) => {
                    return (
                      <>
                        <h1>{car.name}</h1>
                        <span>{car.h3_span}</span>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </Fade>
    </>
  );
}
