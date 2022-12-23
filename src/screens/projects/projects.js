import React from "react";
import ProjectCard from "../../components/project-card/projectCard";
import { projects } from "../../helper/projects";
import "./style.css";
import { Fade } from "react-slideshow-image";

export default function Projects({link}) {
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
    <React.Fragment>
      <Fade {...properties} scale={1.4}>
        {projects.map((item, index) => {
          return (
            <div className="each-slide carouselMargin" key={index}  >
              <div
                className="img"
                style={{ backgroundImage: `url(${item.data.image})` }}
              ></div>
            </div>
          );
        })}
      </Fade>
    
     {link !== '/' ? <ProjectCard data={projects} link={link} /> : <ProjectCard data={projects.slice(0,6)} link={link} />}   
      {/* <ProjectNestedCard
        data={[
          { imgUrl: work_img_1 },
          { imgUrl: work_img_1 },
          { imgUrl: work_img_1 },
          { imgUrl: work_img_1 },
        ]}
      />
      <NetworkMarketing /> */}
    </React.Fragment>
  );
}
