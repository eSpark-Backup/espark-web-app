import React from "react";
import { useParams } from "react-router-dom";
import { services } from "../../helper/services";
import SectionTitle from "./../../components/sectionTitle/index";
import ProcessCircle from "../../components/circle/processCircle";
import Herosection from "../../components/Sections/Hero/Herosection";

const ServiceDetail = () => {
  const params = useParams();
  const getDataFromParams = services.map((item) =>
    item.childs.filter((filterItem) => params.id === filterItem.path)
  );
  const filterData = getDataFromParams.flat(1);

  return (
    <div>
      <Herosection
        title={filterData[0]?.name}
        paragraph={filterData[0]?.data?.shortDescription}
        images={filterData[0].data.image[0]}
        ShowButton={false}
      />
      <div className="container ptb-80">
        <SectionTitle heading={"Our Process​"}  />
        <ProcessCircle />
      </div>
    </div>
  );
};

export default ServiceDetail;
