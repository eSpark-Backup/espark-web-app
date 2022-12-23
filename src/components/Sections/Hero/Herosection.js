import React from "react";
// import mlMainPic from "../../../../src/assets/images/ml-banner-image/ml-main-pic.png";
import one from "../../../../src/assets/images/ml-banner-image/one.png";
import two from "../../../../src/assets/images/ml-banner-image/two.png";
import three from "../../../../src/assets/images/ml-banner-image/three.png";
import four from "../../../../src/assets/images/ml-banner-image/four.png";
import five from "../../../../src/assets/images/ml-banner-image/five.png";
import six from "../../../../src/assets/images/ml-banner-image/six.png";
import seven from "../../../../src/assets/images/ml-banner-image/seven.png";
import eleven from "../../../../src/assets/images/ml-banner-image/eleven.png";
import eight from "../../../../src/assets/images/ml-banner-image/eight.png";
import nine from "../../../../src/assets/images/ml-banner-image/nine.png";
import ten from "../../../../src/assets/images/ml-banner-image/ten.png";

import { shapes } from "../../../helper/ImageUrl";
import { Link } from "react-router-dom";

function Herosection({ heading1 }) {
  return (
    <div class="ml-main-section">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-12">
            <div class="ml-banner-content">
              <h1>
                {" "}
                Our Mission{" "}
                <span>
                  <Link class="navbar-brand" to="/">
                    <img
                      src={
                        "https://cliply.co/wp-content/uploads/2019/05/371905140_MEET_ROBOT_400px.gif"
                      }
                      alt="logo"
                      width={100}
                    />
                  </Link>
                </span>{" "}
              </h1>

              <p>
                eSpark Consulting Group is a consultancy firm that offers
                services in software and embedded systems design, web
                development using JavaScript frameworks like React.js, Vue.js,
                and Node.js, as well as Java, HTML, and CSS, and mobile app
                development for Android and iOS using frameworks like React
                Native, Swift, and Flutter. We also have a team for quality
                assurance. Our team uses advanced technology and expertise to
                design products that meet modern technical requirements and
                needs for the future market.
              </p>
              {/* <p>
                To provide a complete one stop single end solution, we also
                provide responsive, stable and dynamic web solutions to our
                clients using the popular JavaScript Frameworks React.js,
                Vue.js, Node.js JavaScript, Java, HTML and CSS. We have a team
                of experienced people that develop custom and innovative mobile
                applications in Android and iOS using frameworks like React
                Native, Flutter, Swift and Java.
              </p> */}
              {/* <p>
                We also have an in-house quality assurance team that completes
                the project development life cycle where all the development is
                tested by the SQA team and then forwarded only when the project
                has reached near to perfection. We present a team that has the
                energy and wisdom to design products that meets modern technical
                requirements and needs and for future market reality.
              </p> */}
              {heading1 === "Services" ? null : (
                <Link to={"/lets-talk"}>
                  <a class="btn btn-secondary">Quote Now</a>
                </Link>
              )}
            </div>
          </div>
          <div class="col-lg-6 col-md-12">
            <div class="ml-banner-image">
              <img
                src={one}
                class="animate__animated animate__fadeIn animate__delay-2s"
                alt="image"
              />
              <img
                src={two}
                class="animate__animated animate__fadeInUp animate__delay-1s"
                alt="image"
              />
              <img
                src={three}
                class="animate__animated animate__fadeInUp animate__delay-0.5s"
                alt="image"
              />
              <img
                src={four}
                class="animate__animated animate__fadeInUp animate__delay-2s"
                alt="image"
              />
              <img
                src={five}
                class="animate__animated animate__fadeInDown animate__delay-2.5s"
                alt="image"
              />
              <img
                src={six}
                class="animate__animated animate__fadeInDown animate__delay-1.9s"
                alt="image"
              />
              <img
                src={seven}
                class="animate__animated animate__fadeInDown animate__delay-2.1s"
                alt="image"
              />
              <img
                src={eight}
                class="animate__animated animate__fadeInDown animate__delay-1.9s"
                alt="image"
              />
              <img
                src={nine}
                class="animate__animated animate__fadeInDown animate__delay-1.7s"
                alt="image"
              />
              <img
                src={ten}
                class="animate__animated animate__fadeInDown animate__delay-1.5s"
                alt="image"
              />
              <img
                src={eleven}
                class="animate__animated animate__fadeInUp animate__delay-0.4s"
                alt="image"
              />
              {/* <img
                src={mlMainPic}
                class="animate__animated animate__fadeInUp animate__delay-0.5s"
                alt="image"
              /> */}
            </div>
          </div>
        </div>
      </div>
      {shapes?.map((item, index) => (
        <div key={index} className={item.className}>
          <img src={item.imgUrl} alt={item.alt} />{" "}
        </div>
      ))}
    </div>
  );
}

export default Herosection;
