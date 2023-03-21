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
        title="eSpark Consulting Group Portfolio"
        paragraph="We love technology and creating cool stuff with it. From designing software, hardware, and mechanical projects, everything we do is up-to-date with the latest trends. Our design process and products help our clients stay ahead of their competitors. So far, we've completed over 150+ projects that are innovative and top-notch quality, helping us to grow and succeed. Our focus on quality and innovation has helped us build long-term relationships with our clients, many of whom have been with us for years.We offer a range of services, including Iot, software development, IT consulting, project management, and more."
        images={heroImage}
        ShowButton={false}
      />
      <Portfolio data={projects} title="Our Case Studies" />
    </>
  );
}
