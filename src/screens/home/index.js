import React from "react";
import WhyeSpark from "../../components/Sections/WhyeSpark/WhyeSpark";
import Herosection from "../../components/Sections/Hero/Herosection";
import Users from "./../../components/Sections/User/Users";
import PartnerAbout from "../../components/partners-about/parternsAbout";
import LetsTalk from "../../components/LetsTalk/LetsTalk";
import Portfolio from "../../components/Sections/portfolio/Portfolio";
import { projects } from "../../helper/projects";
import heroImage from "../../../src/assets/images/hero-section/banner-image.png";
import ServicesRecreate from "./../../components/Sections/services-recreate/index";

const Home = () => {
  const currentRoute = window.location.pathname;
  return (
    <div>
      <Herosection
        title={"The Ultimate Partner for Software and Iot Solutions"}
        paragraph="eSpark Consulting Group is a software and embedded system design
                    company that specializes in delivering innovative and
                    high-quality solutions to our clients. Our team of experts has
                    years of experience in the industry and a passion for technology
                    that drives us to stay ahead of the curve and deliver
                    cutting-edge solutions"
        images={heroImage}
        ShowButton={true}
        buttonText={"Learn More"}
        buttonUrl={"/services/"}
      />
      <WhyeSpark heading={"Why eSpark?"} />
      <ServicesRecreate link={currentRoute} />
      <Users />
      <Portfolio data={projects.slice(0, 4)} />
      <PartnerAbout />
      <LetsTalk />
    </div>
  );
};

export default Home;
