import React from "react";
import { useRef } from "react";
import Slider from "react-slick";
import { serviceData } from "../../../../helper/serviceCards";
import { services } from "../../../../helper/services";
import ServicesCard from "../../../services-card/servicesCard";
import "./serviceSlider.css";
import { Animated } from "react-animated-css";
import { Link } from "react-router-dom";

function ServiceSlider() {
  const sliderRef = useRef(null);
  const CustomNextArrow = ({ onClick }) => {
    return (
      <div className="nextBtn" onClick={onClick}>
        <svg
          width="22"
          height="34"
          viewBox="0 0 22 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M1.92306 1.84619L18.0769 17.2977L1.92306 31.4616"
            stroke="white"
            stroke-width="5"
          />
        </svg>
      </div>
    );
  };

  const CustomPrevArrow = ({ onClick }) => {
    return (
      <div className="btnPre" onClick={onClick}>
        <svg
          width="22"
          height="34"
          viewBox="0 0 22 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20.0769 1.84616L3.9231 17.2977L20.0769 31.4615"
            stroke="white"
            stroke-width="5"
          />
        </svg>
      </div>
    );
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };
  {
    const settings = {
      autoplay: false,
      autoplaySpeed: 3000,
      dots: false,
      initialSlide: 1,
      swipe: false,
      swipeToSlide: false,
      infinite: true,
      speed: 3000,
      slidesToShow: 4,
      slidesToScroll: 4,
      centerMode: false,
      nextArrow: <CustomNextArrow />,
      prevArrow: <CustomPrevArrow />,
      responsive: [
        {
          breakpoint: 1700,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 1500,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
      ],
    };
    return (
      <>
        <div className="sliderMobileResponsive">
          <Slider {...settings}>
            {services.map((item) => (
              <div>
                <Link to={`/services/${item.path}`}>
                  <ServicesCard
                    image={item.icon}
                    image2={item.icon2}
                    title={item.name}
                    para={item.discription}
                  />
                </Link>
              </div>
            ))}
          </Slider>
        </div>
        <div className="mobileResponsive">
          <div className="row">
            {services.slice(0, 5).map((item) => (
              <div className="col-sm-12 col-md-3 col-lg-3 ">
                <Link to={`/services/${item.path}`}>
                  <ServicesCard
                    image={item.icon}
                    image2={item.icon2}
                    title={item.name}
                    para={item.discription}
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default ServiceSlider;
