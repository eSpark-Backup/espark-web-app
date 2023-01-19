import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
const HeroSectionOne = ({ filterData }) => {
  return (
    <>
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
                <Link class="btn btn-primary" to="/contact">
                  Quote Now
                </Link>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="repair-banner-image">
                {filterData[0]?.data?.image?.map((item, index) => {
                  return (
                    <>
                      {
                        index === 0?
                        <img src={item} alt="images" className="mainPics" />
                        : <img src={item} alt="images" />
                      }
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSectionOne;
