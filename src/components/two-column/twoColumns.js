import React from "react";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";

export default function TwoColumns({
  imgUrl,
  imgAlt,
  heading2,
  paragraph,
  button,
  id,
  link,
}) {
  const appScreenShot = [
    {
      image:
        "https://play-lh.googleusercontent.com/B8DijOQgHXMif3UkHsWnCEMtbteswC57GoGWtx6vQ8HSokvhaAFkAGE103bg0LA46Xw=w2560-h1440-rw",
    },
    {
      image:
        "https://play-lh.googleusercontent.com/KhE2NwcWvABK4o9afoms5nktSGevMLKHxxk0AIf_cfjv7jgHmLcQLkMb4SP3fHhgEQ8=w2560-h1440-rw",
    },
    {
      image:
        "https://play-lh.googleusercontent.com/HSDS0ILQqZ4YbZUSAj8n6z7DI0ceCX9HZdlShoHFyGfwj3R03390-Mh4ptk1zI11G0Y=w2560-h1440-rw",
    },
    {
      image:
        "https://play-lh.googleusercontent.com/ynEJOIeqm2jaRUdK3LzgfBL2q34VfZiU02pLR184M-m4waCYCu8e5ldP_TOlqKUiPOqR=w2560-h1440-rw",
    },
    {
      image:
        "https://play-lh.googleusercontent.com/bmzuHbsOTEdeJCzqn5J11kbUoD0E8H4Nngw1oes40jAsOk6bmT56jT-BIjnv-9WEEBQ=w2560-h1440-rw",
    },
    {
      image:
        "https://play-lh.googleusercontent.com/STN0VIqhflzygsryji0OlyrgGEBFdQhlAOiJIEqR8sIxmwZb48zSBQmdbADYb2CD9g=w2560-h1440-rw",
    },
    {
      image:
        "https://play-lh.googleusercontent.com/CAAdXVWDEf7OKzixMhZphx3kH5MBvMnqEN8MabMpYRE7wF2IeZX9UQEZ6Fv3LHugROE=w2560-h1440-rw",
    },
    {
      image:
        "https://play-lh.googleusercontent.com/WL50DZKIP7oM0iUG6QL3XdoMYgSBYf_aoLXOikCGkGBG85w2qKPIJkmYE5X2yVHmkyZX=w2560-h1440-rw",
    },
  ];

  if (id === 1) {
    return (
      <div className="about-area ptb-80">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="about-image text-center">
                {heading2.includes("Command") ? (
                  <>
                    <Carousel
                      centerMode
                      centerSlidePercentage={100}
                      showThumbs={false}
                      showIndicators={false}
                      showArrows={false}
                      emulateTouch
                      infiniteLoop
                    >
                      {appScreenShot.map((items) => {
                        return (
                          <div>
                            <img
                              src={items.image}
                              alt="images"
                              style={{ width: "300px" }}
                            />
                          </div>
                        );
                      })}
                    </Carousel>
                  </>
                ) : (
                  <img src={imgUrl} alt={imgAlt} width={300} />
                )}
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="about-content">
                <div className="section-title">
                  <h2 style={{ textTransform: "none" }}>{heading2}</h2>
                  <div className="bar"></div>
                  <p dangerouslySetInnerHTML={{ __html: paragraph }}></p>
                </div>
                {button && (
                  <Link class="btn btn-secondary" to={link}>
                    Read More
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (id === 2) {
    return (
      <div className="about-area ptb-80" style={{ backgroundColor: "#e5e6e7" }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="about-content">
                <div className="section-title">
                  <h2>{heading2}</h2>
                  <div className="bar"></div>
                  <p dangerouslySetInnerHTML={{ __html: paragraph }}></p>
                </div>
                {button && (
                  <Link class="btn btn-primary" to="/espark-app">
                    Read More
                  </Link>
                )}
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="about-image">
                <img src={imgUrl} alt={imgAlt} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (id === 3) {
    return (
      <div class="cta-area pt-5">
        <div class="container">
          <div class="row ">
            <div class="col-lg-2 col-md-2 col-sm-12">
              <div class="cta-content cta-content2">
                <img
                  src="https://assets.raspberrypi.com/static/14fc26731cfe6ef875c1e156c3d80f6f/acdfe/pico-board-transparent.webp"
                  alt=""
                  class="img"
                />
              </div>
            </div>
            <div class="col-lg-8 col-md-8">
              <div class="cta-right-content text-center text-white">
                <div class="textDiv">
                  <h6 dangerouslySetInnerHTML={{ __html: paragraph }}></h6>
                </div>
              </div>
            </div>
            <div class="col-lg-2 col-md-2 cal-sm-12">
              <div class="cta-content ">
                <img
                  src="https://assets.raspberrypi.com/static/14fc26731cfe6ef875c1e156c3d80f6f/acdfe/pico-board-transparent.webp"
                  alt=""
                  class="img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
