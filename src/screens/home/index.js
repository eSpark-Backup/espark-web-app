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
import heroImage from "../../../src/assets/images/hero-section/hero-image.svg";
import Portfolio from "../Portfolio";


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
      buttonText={'Learn More'}
      buttonUrl={'/services/'}
      />
      {/* <Portfolio /> */}
      <WhyeSpark heading={"Why eSpark?"} />
      <About id={2} />
      <Services link={currentRoute} />
      <Users />
      <Projects link={currentRoute} />
      <PartnerAbout />
      <Faqs imgs={shapes} data={faqsQuestions} />
    </div>
  );
};

export default Home;
