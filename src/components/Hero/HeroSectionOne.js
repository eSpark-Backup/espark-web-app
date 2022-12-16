import React from "react";
import { services } from "../../helper/services";

const HeroSectionOne = ({ heading, paragrah }) => {
  const filterData = services.filter((item) => item.name === "Web Development");
  console.log(filterData[0].data.image);
  return (
    <div>
      <div class="repair-main-banner">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <div class="repair-banner-content">
                <h1>Your Local Computer Repair Experts!</h1>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don&#x27;t
                  look even slightly believable.
                </p>
              </div>
            </div>

            <div class="col-lg-6">
              <div class="repair-banner-image">
                {filterData[0].data.image?.map((item) => {
                  return <img src={item} alt="image" />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSectionOne;
