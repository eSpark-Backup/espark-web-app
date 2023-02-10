import React from "react";
import About from "../../components/Sections/About/About";
import WhyeSpark from "../../components/Sections/WhyeSpark/WhyeSpark";
import Herosection from "../../components/Sections/Hero/Herosection";
import Users from "./../../components/Sections/User/Users";
import Services from "../services";
import { shapes } from "../../helper/ImageUrl";
import PartnerAbout from "../../components/partners-about/parternsAbout";
import { faqsQuestions } from "../../helper/faqs";
import Projects from "../projects/projects";
import Faqs from "../faqs/faqs";
import Portfolio from "../../components/Sections/portfolio/Portfolio";
import { projects } from "../../helper/projects";

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
      {/* <Projects link={currentRoute} /> */}
      <Portfolio data={projects.slice(0, 4)} />
      <PartnerAbout />
      <Faqs imgs={shapes} data={faqsQuestions} />
    </div>
  );
};

export default Home;
