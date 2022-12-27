import React from "react";
import ProjectCard from "../../components/project-card/projectCard";
import { projects } from "../../helper/projects";
import "./style.css";
import { Fade } from "react-slideshow-image";
import Title from "../../components/title/title";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";

export default function Projects({ link }) {
  const AutoplaySlider = withAutoplay(AwesomeSlider);
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
        // <Fade {...properties} scale={1.4}>

        <div
          id="carouselExampleIndicators"
          class="carousel slide carouselPic"
          data-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active ">
              <AutoplaySlider
                infinite={true}
                bullets={false}
                play={true}
                cancelOnInteraction={false} // should stop playing on user interaction
                interval={6000}
                animation="fallAnimation"
              >
                {projects.map((item, index) => {
                  return (
                    <div class="closer-sliderrs">
                      <img
                        class="d-block "
                        src={item.data.image}
                        alt="Third slide"
                      />
                    </div>
                  );
                })}
              </AutoplaySlider>
            </div>
          </div>
        </div>
      ) : (
        // </Fade>
        <Title
          title={"THINGS WE'VE MADE"}
          paragraph="<p> We believe our work speaks for itself. Browse our most recent projects below<br/>
        and enjoy our handmade work with love for every detail.</p>"
          link={link}
        />
      )}

      {link !== "/" ? (
        <ProjectCard data={projects} link={link} />
      ) : (
        <ProjectCard data={projects.slice(0, 6)} link={link} />
      )}
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
