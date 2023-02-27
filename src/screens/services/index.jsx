import React from "react";
import ServiceStyleFive from "../../components/Sections/Service/serviceStyleFive";
import Title from "../../components/title/title";
import { shapes } from "../../helper/ImageUrl";
import { services } from "../../helper/services";
import style from "./style.module.css";
import { useState } from "react";
import tabs from "../../helper/tabs";

const Services = ({ link }) => {
  const servicesData = [...services].reverse();

  return (
    <div className={style.textCenter}>
      <>
        <Title title={"WE HELP BRANDS AND MAKE NEW FANS"} data={shapes} />
    
        <ServiceStyleFive
          data={link !== "/" ? services : servicesData.slice(0, 1)}
          link={link}
        />
      </>
    </div>
  );
};

export default Services;
