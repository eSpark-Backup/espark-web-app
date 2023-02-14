import React from "react";
import About from "../../components/Sections/About/About";
import WhyeSpark from "../../components/Sections/WhyeSpark/WhyeSpark";
import Herosection from "../../components/Sections/Hero/Herosection";
import Users from "./../../components/Sections/User/Users";
import Services from "../services";
import PartnerAbout from "../../components/partners-about/parternsAbout";
import Projects from "../projects/projects";
import LetsTalk from "../../components/LetsTalk/LetsTalk";

const Home = () => {
  const currentRoute = window.location.pathname;
  return (
    <div>
      <Herosection
        heading={"The Ultimate Partner for Software and Iot Solutions"}
      />
      <WhyeSpark heading={"Why eSpark?"} />
      <About id={2} />
      <Services link={currentRoute} />
      <Users />
      <Projects link={currentRoute} />
      <PartnerAbout />
      <LetsTalk />
    </div>
  );
};

export default Home;
