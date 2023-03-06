import React from 'react'
import PortfolioImg from "../../../src/assets/images/hero-section/CARRERS.svg";
import Herosection from "../../components/Sections/Hero/Herosection";

const Portfolio = () => {
  return (
    <div>
        <Herosection
        title="eSpark Consulting Group Case Studies "
        paragraph="Our main goal is to collaborate with innovative and focused startups and enterprises by designing and developing their business products to help them maximize their revenue. we have worked on 100+ robust and intuitive mobile and web applications for android and iOS to date"
        images={PortfolioImg}
        ShowButton={false}
        className="career"
      />
    </div>
  )
}

export default Portfolio