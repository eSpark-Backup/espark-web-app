import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { FaFacebookF, FaMapMarkerAlt, FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { MdAttachEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

// import { HiChevronDoubleRight } from "react-icons/hi";

import ScrollTopButton from "./ScrollTopButton";
import { HashLink } from "react-router-hash-link";
import * as constants from "../../constants/constants";

const Footer = () => {
  const FOOTER_ABOUT = constants.FOOTER_ABOUT;
  const ABOUT_US = constants.ABOUT_US;
  const UPCOMING_EVENTS = constants.UPCOMING_EVENTS;
  const BLOG_NEWS = constants.BLOG_NEWS;
  const FAQ_QUESTION = constants.FAQ_QUESTION;
  const TESTIMONIAL = constants.TESTIMONIAL;
  const PRIVACY_POLICY = constants.PRIVACY_POLICY;
  const CONTACT_DETAIL_TITLE = constants.CONTACT_DETAIL_TITLE;
  const PHONE_NUMBER = constants.PHONE_NUMBER;
  const EMAIL_ADDRESS = constants.EMAIL_ADDRESS;
  const ADDRESS = constants.ADDRESS;
  return (
    <>
      <div className="footers">
        <footer className="footer-area">
          <div className="container-fluid  footer_areas ">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="single-footer-widget single-footer-widget-mobile ">
                  <div className="logo">
                    <Link href="/">
                      <img
                        src={require("../../assets/images/logo.png")}
                        alt="logo"
                      />
                    </Link>
                  </div>
                  <p className="footer-about footer-about-mobile ">
                    {FOOTER_ABOUT}
                  </p>
                  <div>
                    <ul className="social-links ">
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
                          href="https://www.instagram.com/esparkconsultantsgroup"
                          className="instagram"
                          target="_blank"
                        >
                          <AiFillInstagram />
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
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6 footer">
                <div className="single-footer-widget pl-5 explores exploreSectionWidth">
                  <h3>Explore</h3>
                  <ul className="list">
                    <li>
                      <Link to="/upcomming">{ABOUT_US}</Link>
                    </li>
                    <li>
                      <Link to="/upcomming">{UPCOMING_EVENTS}</Link>
                    </li>
                    <li>
                      <Link to="/upcomming">{BLOG_NEWS}</Link>
                    </li>
                    <li>
                      <Link to="/upcomming">{FAQ_QUESTION}</Link>
                    </li>
                    <li>
                      <Link to="/#Testimonials">{TESTIMONIAL}</Link>
                    </li>
                    <li>
                      <Link to="/privacy-policy">{PRIVACY_POLICY}</Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-4 col-md-4 col-sm-12 footers">
                <div className="single-footer-widget contacts-det">
                  <h3>{CONTACT_DETAIL_TITLE}</h3>

                  <table className="contact-table">
                    <tbody>
                      <tr className="d-flex">
                        <td>
                          <FaPhoneAlt className="icon-margin" />
                        </td>
                        <td>
                          <a href="tel:+923232788259">{PHONE_NUMBER}</a>
                        </td>
                      </tr>

                      <tr className="d-flex">
                        <td>
                          <MdAttachEmail className="icon-margin" />
                        </td>
                        <td>
                          <a href="mailto:info@eSparkConsultingGroup.com">
                            {EMAIL_ADDRESS}
                          </a>
                        </td>
                      </tr>
                      <tr className="d-flex">
                        <td>
                          <FaMapMarkerAlt className="icon-margin" />
                        </td>
                        <td>
                          <a
                            href="https://www.google.com/maps/dir//eSpark+Consulting+Group+301%2FB+3rd+Floor+%26+401%2FA+4th+Floor,+Blossom+Trade+Centre+Block+1+Gulistan-e-Johar,+Karachi,+74300/@24.929158,67.115604,14z/data=!4m5!4m4!1m0!1m2!1m1!1s0x3eb33feab1c28595:0xa3b2a5dc2f97a82e"
                            target="_blank"
                            className="anchorss"
                          >
                            {ADDRESS}
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <div className="copyright">
          <div className="col-lg-12 col-md-12">
            <div className="">
              <p>{constants.RESERVED}</p>
            </div>
          </div>
        </div>
      </div>
      <ScrollTopButton />
    </>
  );
};

export default Footer;
