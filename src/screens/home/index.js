import React from "react";
import About from "../../components/Sections/About/About";
import Features from "../../components/Sections/Feature/Features";
import Feedback from "../../components/Sections/Feedback/Feedback";
import Freetrial from "../../components/Sections/Freetrial/Freetrial";
import Herosection from "../../components/Sections/Hero/Herosection";
import Price from "../../components/Sections/Pricing/Price";
import Service from "../../components/Sections/Service/Service";
import RecentStory from "../../components/Sections/RecentStory/RecentStory";
import Users from "../../components/Sections/User/Users";
import Clients from "./../../components/HappyClients/Clients";
import Services from "../services";
import ReadyToTalk from "../../components/ready-to-talk/readyToTalk";
import { partner } from "../../helper/ImageUrl";
import Partners from "../../components/partners/partners";
import PartnerAbout from "../../components/partners-about/parternsAbout";
import Faqs from "../../components/faqs/faqs";
import Projects from "../projects/projects";

const Home = () => {
  return (
    <div>
      <Herosection />
      <br/>
      <br/>
      <Features heading={"WE CREATE UNIQUE WEB SOLUTIONS"} />
      <About />
      <Services link={window.location.pathname} />
      <Projects link={window.location.pathname}/>
      <PartnerAbout/>
      <Users />
      <Faqs/>
      
      {/* <Price /> */}
      {/* <Feedback /> */}
      <RecentStory />
      {/* <Freetrial /> */}
      <Clients />
    </div>
  );
};

export default Home;
