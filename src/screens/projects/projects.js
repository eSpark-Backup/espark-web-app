import React from "react";
import { projects } from "../../helper/projects";
import "./style.css";
import Portfolio from "../../components/Sections/casestudies/CaseStudies";
import Herosection from "../../components/Sections/Hero/Herosection";
import heroImage from "../../assets/images/portfolio.svg";


export default function Projects() {

  return (
    <>
      <Herosection
        title={"eSpark Consulting Group Case Studies "}
        paragraph="Our main goal is to collaborate with innovative and focused startups and enterprises by designing and developing their business products to help them maximize their revenue. we have worked on 100+ robust and intuitive mobile and web applications for android and iOS to date"
        images={heroImage}
        ShowButton={false}
      />
      <Portfolio data={projects} title="Our Case Studies" />
    </>
  );
}
