import React from "react";
import Slider from "react-slick";
import "./style.css";
import "../../assets/css/responsive.css";
import { clients } from "../../helper/clients";
import {
  MdOutlineArrowForwardIos,
  MdOutlineArrowBackIos,
} from "react-icons/md";

const PreviousBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <MdOutlineArrowBackIos className="arrowSize" />
    </div>
  );
};
const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <MdOutlineArrowForwardIos className="arrowSize" />
    </div>
  );
};

const settings = {
  autoplay: false,
  dots: true,
  initialSlide: 1,
  swipe: false,
  swipeToSlide: false,
  infinite: true,
  nextArrow: <NextBtn />,
  prevArrow: <PreviousBtn />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        arrows: true,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        arrows: true,
      },
    },
    {
      breakpoint: 426,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        arrows: false,
      },
    },
  ],
};

const Testimonial = () => {
  return (
    <div className="testimonial ">
      <div className="subtesti ">
        <Slider {...settings}>
          {clients?.map((item, index) => {
            return (
              <React.Fragment key={"imgbox" + index}>
                <div className="imgbox ">
                  <img
                    className="image "
                    src={item.image}
                    alt={item.testimonial}
                  />
                </div>
                <div className="testibox ">
                  <p className="name">{item.name}</p>
                  <p className="designation">{item.designation}</p>
                  <p className="testimonialText">{item.testimonial}</p>
                </div>
              </React.Fragment>
            );
          })}
        </Slider>
        <div className="new_class"></div>
      </div>
    </div>
  );
};

export default Testimonial;
