import React from "react";
import { useParams } from "react-router-dom";
import HeroSectionOne from "../../components/Hero/HeroSectionOne";

const ServiceDetail = () => {
  const params = useParams();
  return (
    <div>
      <HeroSectionOne heading={params.id} />
    </div>
  );
};

export default ServiceDetail;
