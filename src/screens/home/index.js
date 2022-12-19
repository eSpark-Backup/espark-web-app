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

const Home = () => {
  return (
    <div>
      <Herosection />
      <br/>
      <br/>
      <Features heading={"WE CREATE UNIQUE WEB SOLUTIONS"} />
      <About />

      {/* <Service /> */}
      {/* <Users /> */}
      {/* <Price /> */}
      {/* <Feedback /> */}
      <RecentStory />
      {/* <Freetrial /> */}
      <Clients />
    </div>
  );
};

export default Home;
