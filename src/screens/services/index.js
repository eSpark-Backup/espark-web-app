import React from "react";
import GradiantCards from "../../components/cards/gradiantCards/gradiantCards";
import Herosection from "../../components/Sections/Hero/Herosection";
import ServiceStyleFive from "../../components/Sections/Service/serviceStyleFive";
import Title from "../../components/title/title";
import { shapes } from "../../helper/ImageUrl";
import { services } from "../../helper/services";

const Services = () => {
  return (
    <div>
      <Title title={"Services"} data={shapes} />
      {/* <GradiantCards data={services} /> */}
      <ServiceStyleFive data={services} />
    </div>
  );
};

export default Services;
