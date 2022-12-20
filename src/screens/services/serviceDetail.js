import React from "react";
import { useParams } from "react-router-dom";
import HeroSectionOne from "../../components/Hero/HeroSectionOne";
import { serviceItems } from "../../helper/ImageUrl";
import { services } from "../../helper/services";

const ServiceDetail = () => {
  const params = useParams();
  const filterData = services.filter((item) => item.name === params.id);

  const even = (item) => {
    return (
      <div class="repair-cta-area bg-0f054b ">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <div class="cta-repair-content">
                <h3>{item.heading}</h3>
                <p>{item.description}</p>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="cta-repair-img">
                <img src={item.imgUrlMan} />
              </div>
            </div>
          </div>
        </div>
        <div class="circle-box">
          <img src={item.imgUrlCircle} />
        </div>
        <div class="cta-shape">
          <img src={item.imgUrlCta} />
        </div>
      </div>
    );
  };

  const odd = (item) => {
    return (
      <div class="repair-cta-area-odd">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <div class="cta-repair-img-odd">
                <img src={item.imgUrlMan} />
              </div>
            </div>
            <div class="col-lg-6">
              <div class="cta-repair-content-odd">
                <h3>{item.heading}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="circle-box-odd">
          <img src={item.imgUrlCircle} />
        </div>
        <div class="cta-shape-odd">
          <img src={item.imgUrlCta} />
        </div>
      </div>
    );
  };
  return (
    <div>
      <HeroSectionOne filterData={filterData} />
      <div className="container">
        <div class="row align-items-center pb-80">
          <div class="col-lg-6 features-details-image">
            <img src={filterData[0].data.image[0]} alt="image" />
          </div>
          <div class="col-lg-6 features-details">
            <div class="features-details-desc">
              <h2 className="pb-50">{filterData[0]?.data.heading}</h2>
              <p
                dangerouslySetInnerHTML={{
                  __html: filterData[0]?.data.extraContent,
                }}
              ></p>
            </div>
          </div>
        </div>
      </div>

      {filterData[0]?.data?.content.map((item) => {
        if (item.id % 2 === 0) {
          return even(item);
        } else {
          return odd(item);
        }
      })}
    </div>
  );
};

export default ServiceDetail;
