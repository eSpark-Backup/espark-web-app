import React from "react";
import BestServices from "../../components/Sections/BestServices/bestServices";
import ServiceStyleFive from "../../components/Sections/Service/serviceStyleFive";
import Title from "../../components/title/title";
import { shapes } from "../../helper/ImageUrl";
import { services } from "../../helper/services";
import style from "./style.module.css";

const Services = ({ link }) => {

const servicesData = [...services].reverse()

  return (
    <div className={style.textCenter}>
      <>


    
        <Title
          title={"WE HELP BRANDS AND MAKE NEW FANS"}
          data={shapes}
          paragraph={
            "We provide the exceptional service we’d want to experience ourselves <br/> <strong>Let’s make something awesome together.</strong>"
          }
        />

          <div className="container">
        <BestServices/>

          </div>
        <ServiceStyleFive
          data={link !== "/" ? services : servicesData.slice(0, 1)}
          link={link}
        />{" "}
      </>
    </div>
  );
};

export default Services;
