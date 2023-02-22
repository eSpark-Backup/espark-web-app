import React from "react";
import ProjectCard from "../../components/project-card/projectCard";
import { projects } from "../../helper/projects";
import "./style.css";
import Title from "../../components/title/title";
import Slider from "react-slick";
import { shapes } from "./../../helper/ImageUrl";
import Portfolio from "../../components/Sections/portfolio/Portfolio";

export default function Projects({ link }) {
  const settings = {
    dots: false,
    className: "center",
    centerMode: true,
    autoplay: true,
    slidesToShow: 3,
    speed: 1000,

    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

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
      {link !== "/" ? (
        <div className="project-slider ">
          <Slider>
            {projects.map((item, index) => {
              return (
                <div key={1}>
                  <img src={item.data.image} alt="Third slide" />
                </div>
              );
            })}
          </Slider>
          {shapes?.map((item, index) => (
            <div key={index} className={item.className}>
              <img src={item.imgUrl} alt={item.alt} />{" "}
            </div>
          ))}
        </div>
      ) : (
        <Title
          title={"Things We’ve Created"}
          paragraph="<p> We believe our work speaks for itself. Browse our most recent  projects<br/>below. Explore more and enjoy our work in detail.</p>"
          link={link}
        />
      )}

      {link !== "/" ? (
        <Portfolio data={projects} link={link} />
      ) : (
        <ProjectCard data={projects.slice(0, 6)} link={link} />
      )}
    </React.Fragment>
  );
}
