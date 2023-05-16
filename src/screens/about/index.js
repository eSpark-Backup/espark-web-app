import React from "react";

import Partners from "../../components/partners/partners";
import ReadyToTalk from "../../components/ready-to-talk/readyToTalk";
import Users from "../../components/Sections/User/Users";
import ThreeColumn from "../../components/three-column/threeColumn";
import Title from "../../components/title/title";
import TwoColumns from "../../components/two-column/twoColumns";
import UserExpectation from "../../components/user-expectation/userExpectation";
import { partner, shapes } from "../../helper/ImageUrl";
import styles from "./style.module.css";
import Herosection from "../../components/Sections/Hero/Herosection";
import companyName from "../../../src/assets/images/About-us-image/company.png";
import Orical from "../../../src/assets/images/About-us-image/Oricle.png";
import yourLogo from "../../../src/assets/images/About-us-image/yourlogo.png";
import hexa from "../../../src/assets/images/About-us-image/hexa.png";
import frams from "../../../src/assets/images/About-us-image/frams.png";
import exactive1 from "../../../src/assets/images/About-us-image/exective 1.png";
import exactive3 from "../../../src/assets/images/About-us-image/exective 3.png";
import exactive4 from "../../../src/assets/images/About-us-image/exective 4.png";
import exactive2 from "../../../src/assets/images/About-us-image/exective 2.png";
import aboutImage from "../../../src/assets/images/About-us-image/aboutUs.svg";
import SectionTitle from "../../components/sectionTitle";
import { aboutData } from "../../helper/aboutus";
import "./style.css";
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
        images={aboutImage}
      />

      <div>
        <OurPartner />
        <SectionTitle heading={"Our Goal Statement"} paddingTop={80} />
        <OurGoalStatement />
        <SectionTitle heading={"Our Journey"} paddingTop={80} />
        <OurJourney />
        <SectionTitle heading={"Our Executives"} paddingTop={80} />
        <OurExecutives />
        <SectionTitle heading={"Meet The Team"} paddingTop={80} />
        <OurTeam />
      </div>
    </React.Fragment>
  );
}
