import React from "react";
import { Link } from "react-router-dom";
import GradiantCards from "../../components/cards/gradiantCards/gradiantCards";
import Herosection from "../../components/Sections/Hero/Herosection";
import ServiceStyleFive from "../../components/Sections/Service/serviceStyleFive";
import ServiceStyleOne from "../../components/Sections/Service/serviceStyleOne";
import Title from "../../components/title/title";
import { shapes } from "../../helper/ImageUrl";
import { services } from "../../helper/services";
import NotFound from "../not-found/notFound";


const Services = ({ link }) => {
  return (
    <div style={{textAlign:'center'}} >
        {link !== "/" ? <><Title title={"WE HELP BRANDS AND MAKE NEW FANS"} data={shapes} paragraph={ "We provide the exceptional service we’d want to experience ourselves <br/> <strong>Let’s make something awesome together.</strong>"}/><ServiceStyleFive data={services} link={link} /> </> : <><ServiceStyleFive data={services.slice(0,6)} link={link} />  </> }
    </div>
  );
};  


export default Services;
