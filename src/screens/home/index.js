import React from "react";
import About from "../../components/Sections/About/About";
import Features from "../../components/Sections/Feature/Features";
import Herosection from "../../components/Sections/Hero/Herosection";
import RecentStory from "../../components/Sections/RecentStory/RecentStory";
import Clients from "./../../components/HappyClients/Clients";
import Users from "./../../components/Sections/User/Users";
import Services from "../services";
import ReadyToTalk from "../../components/ready-to-talk/readyToTalk";
import { partner, shapes } from "../../helper/ImageUrl";
import Partners from "../../components/partners/partners";
import PartnerAbout from "../../components/partners-about/parternsAbout";
import { faqsQuestions } from "../../helper/faqs";

import Projects from "../projects/projects";
import Faqs from "../faqs/faqs";

const Home = () => {
  const currentRoute = window.location.pathname;
  return (
    <div>
      <Herosection />
      <Features heading={"WE CREATE UNIQUE SOLUTIONS"} />
      <About id={2} />
      <Services link={currentRoute} />
      <Users />
      <Projects link={currentRoute} />
      <PartnerAbout  />
      {/* <Price /> */}
      {/* <Feedback /> */}
      {/* <RecentStory /> */}
      <Faqs imgs={shapes} data={faqsQuestions} />
      {/* <Faqs data={shapes} /> */}
      {/* <Freetrial /> */}
      <Clients />
    </div>
  );
};

export default Home;
