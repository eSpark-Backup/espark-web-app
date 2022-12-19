import React from "react";
import { services } from "../../helper/services";
import image1 from "../../assets/images/repair-banner-image/repair-banner-img.png";

const HeroSectionOne = ({ heading, paragrah }) => {
  const filterData = services.filter((item) => item.name === heading);

  return (
    <div>
      <div class="repair-main-banner">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <div class="repair-banner-content">
                <h1>{filterData[0].name}</h1>
                <p
                  dangerouslySetInnerHTML={{
                    __html: filterData[0].data.shortDescription,
                  }}
                ></p>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="repair-banner-image">
                {filterData[0].data.image?.slice(1).map((item) => {
                  return <img src={item} alt="image" />;
                })}
              </div>
            </div>
          </div>

          <div className="project-detail-desc pt-80 pb-0">
            <p>
            {filterData[0].data.extraContent}
            </p>
            
          </div>
          <div className="project-detail-desc  pb-0">
            <h4>
            {filterData[0].data.heading}
            </h4>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSectionOne;
