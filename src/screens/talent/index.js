import heroImage from "../../assets/images/talent-image/DASH BOARD.svg";
import Herosection from "../../components/Sections/Hero/Herosection";
import HowItWorks from "../../components/Talent-component/HowItWorks/HowItWorks";
import WhyeSparks from "../../components/Talent-component/whyEsparks";
import SectionTitle from "../../components/sectionTitle";

import HirATalentCard from "../../components/Talent-component/HireATalentCard/HireATalentCard";
import SaveTimeBudget from "../../components/Talent-component/SaveTimeBudget";
import StartProject from "../../components/Talent-component/Start-Projects/StartProject";

import Benefit from "../../components/Talent-component/Benafit/benefit";
import Hrplatform from "../../components/Talent-component/HrPlatform/HrPlatform";

import * as constants from "../../constants/constants";

const Talent = () => {
  const handleStartProjectButtonClick = () => {
    const hirATalentCardSection = document.getElementById("hirATalentCard");
    if (hirATalentCardSection) {
      const offset = 200; // Adjust this value to determine the amount of scroll
      const scrollPosition = hirATalentCardSection.offsetTop - offset;
      window.scrollTo({ top: scrollPosition, behavior: "smooth" });
    }
  };
  const title = constants.HIRE_TALENT_TITLE;
  const para = constants.HIRE_TALENT_PARA;
  const hireATalent = constants.HIRE_TALENT;
  const whyEsparks = constants.WHY_ESPARK;
  const completedProjects = constants.COMPLETED_PROJECTS;
  return (
    <div>
      <Herosection
        title={title}
        paragraph={para}
        images={heroImage}
        imgResize={true}
        ShowButton={true}
        buttonText={hireATalent}
        buttonUrl={"#hire-talent"}
        buttonDesign={13}
      />
      <Benefit />
      <HowItWorks />
      <SaveTimeBudget />
      <div id="hirATalentCard">
        <HirATalentCard />
      </div>
      <Hrplatform />
      <SectionTitle
        heading={whyEsparks}
        paragraph={<p>{completedProjects}</p>}
      />
      <WhyeSparks />
      <StartProject onStartProjectButtonClick={handleStartProjectButtonClick} />
    </div>
  );
};
export default Talent;
