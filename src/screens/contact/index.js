import React from "react";
import GetInTouch from "../../components/getInTouch/GetInTouch";
import Title from "../../components/title/title";
import { shapes } from "../../helper/ImageUrl";

const Contact = () => {
  return (
    <div>
      <Title
        title={"LET'S MAKE SOMETHING AWESOME TOGETHER"}
        data={shapes}
        paragraph={
          "Please don’t hesitate in contacting us with any question you may have. <br/> We will get back to you as soon as possible."
        }
      />
      <div class="contact-info-area ptb-80">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-4 col-md-6 col-sm-6">
              <div class="contact-info-box">
                <div class="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <h3>Mail Here</h3>
                <p>
                  <a href="mailto:info@esparkconsultants.com">
                    <span
                      class="__cf_email__"
                      data-cfemail="bddcd9d0d4d3fdcec9dccfc9cd93ded2d0"
                    >
                      info@esparkconsultants.com
                    </span>
                  </a>
                </p>
                <p>
                  <a href="mailto:esparkconsgroup@gmail.com">
                    <span
                      class="__cf_email__"
                      data-cfemail="a4cdcac2cbe4d7d0c5d6d0d48ac7cbc9"
                    >
                      esparkconsgroup@gmail.com
                    </span>
                  </a>
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-6">
              <div class="contact-info-box">
                <div class="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <h3>Visit Here</h3>
                <p>
                  301/B 3rd Floor & 401/A 4th Floor, Blossom Trade Centre, Block
                  1 Gulistan-e-Johar, Karachi, 74300
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-6">
              <div class="contact-info-box">
                <div class="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <h3>Call Here</h3>
                <p>
                  <a href="tel:+92 323 2788259">+92 323 2788259</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <iframe
        src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=eSpark Consulting Group&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        width="100%"
        height="450"
        loading="lazy"
      ></iframe>
      <GetInTouch />
    </div>
  );
};

export default Contact;
