import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { services } from "../../helper/services";
import SectionTitle from "./../../components/sectionTitle/index";
import ProcessCircle from "../../components/circle/processCircle";
import Herosection from "../../components/Sections/Hero/Herosection";
import CenteredTabs from "../../components/tabMui/centeredTab";
import TabCard from "../tabCard/tabCard";
import TabDescription from "../tabDescription/tabDescription";
import styles from "./style.module.css";
import { shapes } from "../../helper/ImageUrl";
import Title from "../../components/title/title";
import { useEffect } from "react";

const ServiceDetail = () => {
  const params = useParams();
  const filterData = services.filter((item) => params.id === item.path);
  const getId = localStorage.getItem("child_id");

  const [tabCard, setTabCard] = useState({});
  const [tabSelect, setSelectTab] = useState("");

  useEffect(() => {
    setSelectTab(getId);
  }, [getId]);

  const cardHandler = (item) => {
    const { name } = item;
    setSelectTab(name);
    localStorage?.setItem("child_id", name);
    setTabCard(item);
  };
  return (
    <>
      <Herosection
        title={filterData[0]?.name}
        paragraph={filterData[0]?.content}
        images={filterData[0]?.image}
        ShowButton={false}
        serviceClass={"service"}
      />
      <div className={`container-fluid ptb-80 ${styles.gaps} `}>
        <SectionTitle
          heading={"Smart Services for Smarter Businesses​"}
          paragraph={<p></p>}
        />

        <CenteredTabs
          cardHandler={cardHandler}
          tabSelect={tabSelect}
          tabData={filterData[0]?.childs}
        />
        <TabCard tabCard={tabCard ?? null} />

        <TabDescription
          discrption={filterData[0]?.quote}
          image={filterData[0]?.quoteImage}
          title={filterData.title}
        />
      </div>
      <ProcessCircle />
    </>
  );
};

export default ServiceDetail;
