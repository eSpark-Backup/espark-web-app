import React from "react";
import BestServices from "../../components/Sections/BestServices/bestServices";
import ServiceStyleFive from "../../components/Sections/Service/serviceStyleFive";
import Title from "../../components/title/title";
import { shapes } from "../../helper/ImageUrl";
import { services } from "../../helper/services";
import style from "./style.module.css";

import SectionTitle from "../../components/sectionTitle";
import CenteredTabs from "../../components/tabMui/centeredTab";
import TabCard from "../tabCard/tabCard";
import { useState } from "react";
import tabs from "../../helper/tabs";

const Services = ({ link }) => {
  const servicesData = [...services].reverse();
  const [tabCard, setTabCard] = useState({ ...tabs[0].cardData });
  const [tabSelect, setSelectTab] = useState(0);

  const cardHandler = (select, cardData) => {
    setSelectTab(select);
    setTabCard({ ...cardData });
  };

  return (
    <div className={style.textCenter}>
      <>
        <Title title={"WE HELP BRANDS AND MAKE NEW FANS"} data={shapes} />
        <div className="container">
          <SectionTitle
            heading={"Smart Services for Smarter Businesses​"}
            paragraph={<p></p>}
          />
          <CenteredTabs cardHandler={cardHandler} tabSelect={tabSelect} />
          <TabCard tabCard={tabCard} />
          <BestServices />
        </div>
        <ServiceStyleFive
          data={link !== "/" ? services : servicesData.slice(0, 1)}
          link={link}
        />
      </>
    </div>
  );
};

export default Services;
