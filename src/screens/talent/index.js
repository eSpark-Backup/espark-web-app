import React from "react";
import Herosection from "../../components/Sections/Hero/Herosection";
import heroImage from "../../assets/images/talent-image/DASH BOARD.svg";
import HowItWorks from "../../components/Talent-component/HowItWorks/HowItWorks";
import HirATalentCard from "../../components/Talent-component/HireATalentCard/HireATalentCard";
import SaveTimeBudget from "../../components/Talent-component/SaveTimeBudget";
import HashLinkObserver from "react-hash-link";

const Talent = () => {
  return (
    <div>
      <Herosection
        title={`Hire employees in Pakistan, hassle-free`}
        paragraph="With eSpark, your business can easily hire employees in Pakistan.
         No more worrying about local laws, complex tax systems, or managing international payroll. 
         eSpark takes care of everything in 50+ countries."
        images={heroImage}
        ShowButton={true}
        buttonText={"Hire a Talent"}
        buttonUrl={"#hire-talent"}
        buttonDesign={13}
      />
      <HowItWorks />
      <SaveTimeBudget />
      <HirATalentCard />
    </div>
  );
};
export default Talent;
