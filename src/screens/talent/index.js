import React from "react";
import Herosection from "../../components/Sections/Hero/Herosection";
import heroImage from "../../assets/images/talent-image/DASH BOARD.svg";
import HowItWorks from "../../components/Talent-component/HowItWorks/HowItWorks";
import WhyeSparks from "../../components/Talent-component/whyEsparks";
import SectionTitle from "../../components/sectionTitle";
import style from "./style.module.css";
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
      <SectionTitle
        heading={"Why eSpark?"}
        paragraph={<p>We Have Completed 100+ Projects Successfully</p>}
      />
      <WhyeSparks />
      <div className={style.hiretalent}>
        <SectionTitle
          height={0}
          padding={3}
          heading={
            "eSpark makes growing remote and international teams effortless"
          }
        />
        <div className={style.whyButton}>
          <button className={style.butntext}>Schedule Event</button>
        </div>
      </div>
      <StartProject />
    </div>
  );
};
export default Talent;
