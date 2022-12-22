import React from "react";
import About from "../../components/Sections/About/About";
import Features from "../../components/Sections/Feature/Features";
import Herosection from "../../components/Sections/Hero/Herosection";
import RecentStory from "../../components/Sections/RecentStory/RecentStory";
import Clients from "./../../components/HappyClients/Clients";

const Home = () => {
  return (
    <div>
      <Herosection />
      <br />
      <br />
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
