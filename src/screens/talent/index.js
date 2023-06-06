import React from "react";
import Herosection from "../../components/Sections/Hero/Herosection";
import heroImage from "../../assets/images/talent-image/DASH BOARD.svg";
import HowItWorks from "../../components/Talent-component/HowItWorks/HowItWorks";
import HirATalentCard from "../../components/Talent-component/HireATalentCard/HireATalentCard";
import SaveTimeBudget from "../../components/Talent-component/SaveTimeBudget";
import StartProject from "../../components/Talent-component/Start-Projects/StartProject";
// import HowItWorks from '../../components/Talent-component/HowItWorks/HowItWorks';
import Benefit from "../../components/Talent-component/Benafit/benefit";
import Hrplatform from "../../components/Talent-component/HrPlatform/HrPlatform";
// import StartProject from '../../components/Talent-component/Start-Projects/StartProject';

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
      <Benefit />
      <HowItWorks />
      <SaveTimeBudget />
      <HirATalentCard />
      <Hrplatform />
      <StartProject />
    </div>
  );
};
export default Talent;
