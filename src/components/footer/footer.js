import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import Event from "./../event/event";
import Privacy from "./../../screens/privacy/Privacy";
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

import { GrMapLocation } from "react-icons/gr";
import { BsGlobe } from "react-icons/bs";

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
            <div className="col-lg-2 col-md-6 col-sm-6 footer" >
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
                    <Link to="tel:+923336006055">
                      <FaPhoneAlt /> +92(333-6006055)
                    </Link>
                  </li>
                  <li>
                    <Link to="mailto:info@eSparkConsultingGroup.com">
                      <MdAttachEmail /> Info@eSparkConsultingGroup.com
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <BsGlobe /> www.eSparkConsultingGroup.com
                    </Link>
                  </li>
                  <li >
                    <Link to="/">
                     <FaMapMarkerAlt />   301/B 3rd Floor & 401/A 4th Floor,Blossom Trade Centre,Block 1, Gulistan-e-Johar Karachi,74300
                    </Link>
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
    </>
  );
};

export default Footer;
