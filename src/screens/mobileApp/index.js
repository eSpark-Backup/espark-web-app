import React from "react";
import HeroSectionTwo from "../../components/Hero/HeroSectionTwo";
import About from "../../components/Sections/About/About";
import "./style.css";
import Slider from "react-slick";

const MobileApp = () => {
  const features = [
    {
      name: "Order History",
      path: "M25.27,86.92c-1.81,0-3.26-1.46-3.26-3.26s1.47-3.26,3.26-3.26h21.49c1.81,0,3.26,1.46,3.26,3.26s-1.46,3.26-3.26,3.26 H25.27L25.27,86.92L25.27,86.92z M61.1,77.47c-0.96,0-1.78-0.82-1.78-1.82c0-0.96,0.82-1.78,1.78-1.78h4.65c0.04,0,0.14,0,0.18,0 c1.64,0.04,3.1,0.36,4.33,1.14c1.37,0.87,2.37,2.19,2.92,4.15c0,0.04,0,0.09,0.05,0.14l0.46,1.82h39.89c1,0,1.78,0.82,1.78,1.78 c0,0.18-0.05,0.36-0.09,0.55l-4.65,18.74c-0.18,0.82-0.91,1.37-1.73,1.37l0,0l-29.18,0c0.64,2.37,1.28,3.65,2.14,4.24 c1.05,0.68,2.87,0.73,5.93,0.68h0.04l0,0h20.61c1,0,1.78,0.82,1.78,1.78c0,1-0.82,1.78-1.78,1.78H87.81l0,0 c-3.79,0.04-6.11-0.05-7.98-1.28c-1.92-1.28-2.92-3.46-3.92-7.43l0,0L69.8,80.2c0-0.05,0-0.05-0.04-0.09 c-0.27-1-0.73-1.69-1.37-2.05c-0.64-0.41-1.5-0.59-2.51-0.59c-0.05,0-0.09,0-0.14,0H61.1L61.1,77.47L61.1,77.47z M103.09,114.13 c2.42,0,4.38,1.96,4.38,4.38s-1.96,4.38-4.38,4.38s-4.38-1.96-4.38-4.38S100.67,114.13,103.09,114.13L103.09,114.13L103.09,114.13z M83.89,114.13c2.42,0,4.38,1.96,4.38,4.38s-1.96,4.38-4.38,4.38c-2.42,0-4.38-1.96-4.38-4.38S81.48,114.13,83.89,114.13 L83.89,114.13L83.89,114.13z M25.27,33.58c-1.81,0-3.26-1.47-3.26-3.26c0-1.8,1.47-3.26,3.26-3.26h50.52 c1.81,0,3.26,1.46,3.26,3.26c0,1.8-1.46,3.26-3.26,3.26H25.27L25.27,33.58L25.27,33.58z M7.57,0h85.63c2.09,0,3.99,0.85,5.35,2.21 s2.21,3.26,2.21,5.35v59.98h-6.5V7.59c0-0.29-0.12-0.56-0.31-0.76c-0.2-0.19-0.47-0.31-0.76-0.31l0,0H7.57 c-0.29,0-0.56,0.12-0.76,0.31S6.51,7.3,6.51,7.59v98.67c0,0.29,0.12,0.56,0.31,0.76s0.46,0.31,0.76,0.31h55.05 c0.61,2.39,1.3,4.48,2.23,6.47H7.57c-2.09,0-3.99-0.85-5.35-2.21C0.85,110.24,0,108.34,0,106.25V7.57c0-2.09,0.85-4,2.21-5.36 S5.48,0,7.57,0L7.57,0L7.57,0z M25.27,60.25c-1.81,0-3.26-1.46-3.26-3.26s1.47-3.26,3.26-3.26h50.52c1.81,0,3.26,1.46,3.26,3.26 s-1.46,3.26-3.26,3.26H25.27L25.27,60.25L25.27,60.25z",
      description:
        "It can help you keep track of your spending and budget more effectively. By being able to see a detailed record of all your past orders.",
    },
    {
      name: "Financial Decisions",
      path: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",
      description:
        "You can get a better understanding of where your money is going and make more informed financial decisions.with this app.",
    },
    {
      name: "Fully Fuctional",
      path: "M25.27,86.92c-1.81,0-3.26-1.46-3.26-3.26s1.47-3.26,3.26-3.26h21.49c1.81,0,3.26,1.46,3.26,3.26s-1.46,3.26-3.26,3.26 H25.27L25.27,86.92L25.27,86.92z M61.1,77.47c-0.96,0-1.78-0.82-1.78-1.82c0-0.96,0.82-1.78,1.78-1.78h4.65c0.04,0,0.14,0,0.18,0 c1.64,0.04,3.1,0.36,4.33,1.14c1.37,0.87,2.37,2.19,2.92,4.15c0,0.04,0,0.09,0.05,0.14l0.46,1.82h39.89c1,0,1.78,0.82,1.78,1.78 c0,0.18-0.05,0.36-0.09,0.55l-4.65,18.74c-0.18,0.82-0.91,1.37-1.73,1.37l0,0l-29.18,0c0.64,2.37,1.28,3.65,2.14,4.24 c1.05,0.68,2.87,0.73,5.93,0.68h0.04l0,0h20.61c1,0,1.78,0.82,1.78,1.78c0,1-0.82,1.78-1.78,1.78H87.81l0,0 c-3.79,0.04-6.11-0.05-7.98-1.28c-1.92-1.28-2.92-3.46-3.92-7.43l0,0L69.8,80.2c0-0.05,0-0.05-0.04-0.09 c-0.27-1-0.73-1.69-1.37-2.05c-0.64-0.41-1.5-0.59-2.51-0.59c-0.05,0-0.09,0-0.14,0H61.1L61.1,77.47L61.1,77.47z M103.09,114.13 c2.42,0,4.38,1.96,4.38,4.38s-1.96,4.38-4.38,4.38s-4.38-1.96-4.38-4.38S100.67,114.13,103.09,114.13L103.09,114.13L103.09,114.13z M83.89,114.13c2.42,0,4.38,1.96,4.38,4.38s-1.96,4.38-4.38,4.38c-2.42,0-4.38-1.96-4.38-4.38S81.48,114.13,83.89,114.13 L83.89,114.13L83.89,114.13z M25.27,33.58c-1.81,0-3.26-1.47-3.26-3.26c0-1.8,1.47-3.26,3.26-3.26h50.52 c1.81,0,3.26,1.46,3.26,3.26c0,1.8-1.46,3.26-3.26,3.26H25.27L25.27,33.58L25.27,33.58z M7.57,0h85.63c2.09,0,3.99,0.85,5.35,2.21 s2.21,3.26,2.21,5.35v59.98h-6.5V7.59c0-0.29-0.12-0.56-0.31-0.76c-0.2-0.19-0.47-0.31-0.76-0.31l0,0H7.57 c-0.29,0-0.56,0.12-0.76,0.31S6.51,7.3,6.51,7.59v98.67c0,0.29,0.12,0.56,0.31,0.76s0.46,0.31,0.76,0.31h55.05 c0.61,2.39,1.3,4.48,2.23,6.47H7.57c-2.09,0-3.99-0.85-5.35-2.21C0.85,110.24,0,108.34,0,106.25V7.57c0-2.09,0.85-4,2.21-5.36 S5.48,0,7.57,0L7.57,0L7.57,0z M25.27,60.25c-1.81,0-3.26-1.46-3.26-3.26s1.47-3.26,3.26-3.26h50.52c1.81,0,3.26,1.46,3.26,3.26 s-1.46,3.26-3.26,3.26H25.27L25.27,60.25L25.27,60.25z",
      description:
        "You can easily change your profile information conveniently and in an efficient way to keep your personal or professional information up-to-date.",
    },
  ];
  const settings = {
    dots: false,
    infinite: true,
    speed: 100,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };
  return (
    <div>
      <HeroSectionTwo
        heading1={"Command دو "}
        paragarph={
          "<strong> Command دو </strong> allows you to order and command an office boy to get lunch for you can be incredibly convenient and efficient. Imagine being able to simply pull out your phone, open the app, and place an order for your favourite lunch items without ever having to leave your desk."
        }
        features={features}
      />
      <div className="pt-5">
        <About id={1} />
        <About id={2} />
      </div>
      <div class="cta-area ptb-80">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-7 col-md-6">
              <div class="cta-content">
                <h3>Download App from google Play store </h3>
              </div>
            </div>
            <div class="col-lg-5 col-md-6">
              <div class="cta-right-content">
                {/* <div class="hosting-price">
                  <span>Starting at only</span>
                  <h4>$4.75/mo*</h4>
                </div> */}
                <div className="d-flex">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.commanddo"
                    target="_blank"
                  >
                    <img
                      src={require("../../assets/images/App Screenshots/Command Do App Screenshots/btn-playstore.png")}
                      alt=""
                      width={200}
                    />
                  </a>
                  {/* <a
                    href="https://play.google.com/store/apps/details?id=com.commanddo"
                    target="_blank"
                    
                  >
                    <img
                      src={require("../../assets/images/App Screenshots/Command Do App Screenshots/btn-apple.png")}
                      alt=""
                      width={200}
                    />
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-5">
        <Slider {...settings}>
          <div>
            <img
              src={require("../../assets/images/App Screenshots/Command Do App Screenshots/Screenshot 2022-12-26 184345.png")}
              alt=""
              width={250}
            />
          </div>
          <div>
            <img
              src={require("../../assets/images/App Screenshots/Command Do App Screenshots/Screenshot 2022-12-26 184444.png")}
              alt=""
              width={250}
            />
          </div>{" "}
          <div>
            <img
              src={require("../../assets/images/App Screenshots/Command Do App Screenshots/Screenshot 2022-12-26 190406.png")}
              alt=""
              width={250}
            />
          </div>{" "}
          <div>
            <img
              src={require("../../assets/images/App Screenshots/Command Do App Screenshots/Screenshot 2022-12-26 184623.png")}
              alt=""
              width={250}
            />
          </div>{" "}
          <div>
            <img
              src={require("../../assets/images/App Screenshots/Command Do App Screenshots/Screenshot 2022-12-26 184535.png")}
              alt=""
              width={250}
            />
          </div>{" "}
          <div>
            <img
              src={require("../../assets/images/App Screenshots/Command Do App Screenshots/Screenshot 2022-12-26 190520.png")}
              alt=""
              width={250}
            />
          </div>
          <div>
            <img
              src={require("../../assets/images/App Screenshots/Command Do App Screenshots/Screenshot 2022-12-26 190804.png")}
              alt=""
              width={250}
            />
          </div>
          <div>
            <img
              src={require("../../assets/images/App Screenshots/Command Do App Screenshots/image (6).png")}
              alt=""
              width={250}
            />
          </div>{" "}
          <div>
            <img
              src={require("../../assets/images/App Screenshots/Command Do App Screenshots/image (7).png")}
              alt=""
              width={250}
            />
          </div>
          <div>
            <img
              src={require("../../assets/images/App Screenshots/Command Do App Screenshots/image (8).png")}
              alt=""
              width={250}
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default MobileApp;
