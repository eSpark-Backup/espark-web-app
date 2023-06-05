import React from 'react'
import Herosection from '../../components/Sections/Hero/Herosection';
import heroImage from "../../assets/images/talent-image/DASH BOARD.svg";
import HowItWorks from '../../components/Talent-component/HowItWorks/HowItWorks';
import StartProject from '../../components/Talent-component/Start-Projects/StartProject';

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
      <StartProject />
    </div>
  )
}
export default Talent;
