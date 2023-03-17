import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import {
  FaAngleDoubleRight,
  FaFacebookF,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTwitter,
} from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { MdAttachEmail } from "react-icons/md";

import ScrollTopButton from "./ScrollTopButton";

const Footer = () => {
  return (
    <>
      <footer className="footer-area ">
        <div className="container footer_areas">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="single-footer-widget">
                <div className="logo">
                  <a href="/">
                    <img
                      src={require("../../assets/images/logo.png")}
                      alt="logo"
                    />
                  </a>
                </div>
                <p>
                  eSpark Consulting Group is a full-carrier software development
                  employer presenting Enterprise Software Development,
                  Application Development (Desktop, Web & Mobile), Product
                  Development, Digital Commerce,UI/UX Design and IT Consulting
                  services.
                </p>
                <div>
                  <ul className="social-links">
                    <li>
                      <a
                        href="https://www.facebook.com/eSparkConsGroup"
                        className="facebook"
                        target="_blank"
                      >
                        <FaFacebookF />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twitter.com/eSparkConsGroup"
                        className="twitter"
                        target="_blank"
                      >
                        <FaTwitter />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/esparkconsultantsgroup"
                        className="instagram"
                        target="_blank"
                      >
                        <AiFillInstagram />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/company/esparkconsgroup"
                        className="linkedin"
                        target="_blank"
                      >
                        <FaLinkedinIn />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6 footer">
              <div className="single-footer-widget pl-5">
                <h3>Explore</h3>
                <ul className="list">
                  <li>
                    <Link to="/">
                      <FaAngleDoubleRight /> Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/about">
                      <FaAngleDoubleRight /> About us
                    </Link>
                  </li>
                  <li>
                    <Link to="/project">
                      <FaAngleDoubleRight /> Projects
                    </Link>
                  </li>
                  <li>
                    <Link to="/services">
                      <FaAngleDoubleRight /> Services
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact">
                      <FaAngleDoubleRight /> Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/products">
                      <FaAngleDoubleRight /> Products
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6 footers">
              <div className="single-footer-widget">
                <h3>Useful Links</h3>
                <ul className="list">
                  <li>
                    <Link to="/privacy-policy">
                      <FaAngleDoubleRight /> Privacy-policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 footers">
              <div className="single-footer-widget">
                <h3>Contact Detail</h3>
                <ul className="list">
                  <li>
                    <a href="tel:+923336006055">
                      <FaPhoneAlt /> +92(333-6006055)
                    </a>
                  </li>
                  <li>
                    <a href="mailto:info@eSparkConsultingGroup.com">
                      <MdAttachEmail /> Info@eSparkConsultingGroup.com
                    </a>
                  </li>
                  {/* <li>
                    <a href="/">
                      <BsGlobe /> www.eSparkConsultingGroup.com
                    </a>
                  </li> */}
                  <li>
                    <a
                      href="https://www.google.com/maps/dir//eSpark+Consulting+Group+301%2FB+3rd+Floor+%26+401%2FA+4th+Floor,+Blossom+Trade+Centre+Block+1+Gulistan-e-Johar,+Karachi,+74300/@24.929158,67.115604,14z/data=!4m5!4m4!1m0!1m2!1m1!1s0x3eb33feab1c28595:0xa3b2a5dc2f97a82e"
                      target="_blank"
                      style={{ width: "90%", textAlign: "left" }}
                    >
                      <FaMapMarkerAlt /> <span>301/B 3rd Floor & 401/A 4th
                      Floor, Blossom &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Trade Centre, Block 1, Gulistan-e-Johar
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Karachi, 74300</span>
                        
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="copyright">
        <div className="col-lg-12 col-md-12">
          <div className="">
            <p>
              Copyright © 2023. All Rights Reserved{" "}
              <a href="/" target="_blank">
                eSpark Consulting Group
              </a>
            </p>
          </div>
        </div>
      </div>
      <ScrollTopButton />
    </>
  );
};

export default Footer;
