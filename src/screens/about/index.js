import React from "react";

import Herosection from "../../components/Sections/Hero/Herosection";
import AboutImage from "../../../src/assets/images/About-us-image/aboutUs.svg";
import SectionTitle from "../../components/sectionTitle";
import OurJourney from "../../components/aboutComponents/ourJourney";
import OurTeam from "../../components/aboutComponents/ourTeam";
import OurExecutives from "../../components/aboutComponents/ourExecutives";
import OurGoalStatement from "../../components/aboutComponents/ourGoalStatement";
import OurPartner from "../../components/aboutComponents/ourPartner";

export default function About() {
  return (
    <React.Fragment>
      <Herosection
        title="Why eSpark?"
        paragraph="We focus on custom tailored software and IoT based solutions for our businesses. Through our broad range of services that can help clients and businesses to optimize their operations, save cost and promote their businesses most effectively. Whether you need help with software development, hardware design, or technology consulting, eSpark Consulting Group has the expertise to help you achieve your goals."
        ShowButton={false}
        images={AboutImage}
      />

      <div>
        {/* <OurPartner /> */}
        <SectionTitle heading={"Our Goal Statement"} paddingTop={80}/>
        <OurGoalStatement />
        <SectionTitle heading={"Our Journey"} paddingTop={80}/> 
        <OurJourney />
        <SectionTitle heading={"Our Executives"} paddingTop={80}/>
        <OurExecutives />
        <SectionTitle heading={"Meet The Team"} paddingTop={80}/>
        <OurTeam />
      </div>
    </React.Fragment>
  );
}
