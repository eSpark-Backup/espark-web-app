import React from "react";
import { useParams } from "react-router-dom";
import HeroSectionOne from "../../components/Hero/HeroSectionOne";
import { services } from "../../helper/services";
import styles from "./style.module.css";


const ServiceDetail = () => {
  const params = useParams();
  
  const filterData = services.filter((item) => item.path === params.id);

  const even = (item) => {
    return (
      <>
        <div class="repair-cta-area bg-0f054b ">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-6 ">
                <div class="cta-repair-content">
                  <h3>{item.heading}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="cta-repair-img">
                  <img src={item.imgUrlMan} alt="cta-repair-img" />
                </div>
              </div>
            </div>
          </div>
          <div class={`circle-box ${styles.circleBox}`}>
            <img src={item.imgUrlCircle} alt="circle-box" />
          </div>
          <div class={`cta-shape`}>
            <img src={item.imgUrlCta} alt="cta-shape" />
          </div>
        </div>
      </>
    );
  };

  const odd = (item) => {
    return (
      <div class="repair-cta-area-odd">
        <div class="container">
          <div class="row align-items-center flex-column-reverse flex-lg-row">
            <div class="col-lg-6">
              <div class="cta-repair-img-odd">
                <img src={item.imgUrlMan}  alt="cta-repair-img"/>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="cta-repair-content-odd">
                <h3 className={styles.tex}>{item.heading}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          </div>
        </div>
        <div class={`circle-box-odd ${styles.circleBoxOdd}`}>
          <img src={item.imgUrlCircle} alt="cta-circle" />
        </div>
        <div class={`cta-shape-odd `}>
          <img src={item.imgUrlCta}  alt="cta-shape"/>   
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
            <img src={filterData[0].data.image[0]} alt="image" className={styles.imgDetails}/>
          </div>
          <div class="col-lg-6 features-details mt-3">
            <div class="features-details-desc">
              <h2 className="pb-50 mt-5">{filterData[0]?.data.heading}</h2>
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
