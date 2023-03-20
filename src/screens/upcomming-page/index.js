import React from "react";
import Herosection from "../../components/Sections/Hero/Herosection";
import commingSoon from "../../assets/images/comming-soon.png";

const Upcomming = () => {
  return (
    <>
      <Herosection
        title={"Comming Soon"}
        paragraph={
          "This section is currently under development we will update content as soon as available"
        }
        images={commingSoon}
        ShowButton={true}
        buttonText={"< Back to Home"}
        buttonUrl={"/"}
        buttonDesign={2}

      />
    </>
  );
};

export default Upcomming;
