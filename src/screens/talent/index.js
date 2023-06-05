import React from "react";
import Herosection from "../../components/Sections/Hero/Herosection";
import heroImage from "../../assets/images/talent-image/DASH BOARD.svg";
import HowItWorks from '../../components/Talent-component/HowItWorks/HowItWorks';
import WhyeSparks from "../../components/Talent-component/whyEsparks";
import SectionTitle from "../../components/sectionTitle";
import style from "./style.module.css";

const Talent = () => {
  return (
    <div>
      <Herosection
        title={`Hire employees in Pakistan, hassle-free`}
        paragraph="With eSpark, your business can easily hire employees in Pakistan.
         No more worrying about local laws, complex tax systems, or managing international payroll. 
         eSpark takes <br/> care of everything in 50+ countries."
        images={heroImage}
        ShowButton={true}
        buttonText={"Hire a Talent"}
        buttonUlr={"newDiv_0"}
        buttonDesign={13}     
      />   
       <HowItWorks />
        <SectionTitle
        heading={"Why eSpark?"}
        paragraph={<p>We Have Completed 100+ Projects Successfully</p>}
      />
      <WhyeSparks />
      <div className={style.hiretalent}>
        <p className={style.para}>
          eSpark makes growing remote and international
          <br />
          teams effortless{" "}
        </p>
        <div className={style.button}>
          <button className={style.butntext}>Schedule Event</button>
        </div>
      </div>
     
    </div>
  );
};
export default Talent;
