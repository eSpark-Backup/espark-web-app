import React from "react";
import { Link } from "react-router-dom";

const HeroSectionOne = ({ filterData }) => {
  return (
    <div>
      <div class="repair-main-banner">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <div class="repair-banner-content">
                <h1>{filterData[0]?.name}</h1>
                <p
                  dangerouslySetInnerHTML={{
                    __html: filterData[0]?.data?.shortDescription,
                  }}
                ></p>
                <Link class="btn btn-primary" href="/lets-talk">
                  Get A Quote Now
                </Link>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="repair-banner-image">
                {filterData[0]?.data?.image?.map((item) => {
                  return (
                    <>
                      <img src={item} alt="image" />
                    </>
                  );
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
