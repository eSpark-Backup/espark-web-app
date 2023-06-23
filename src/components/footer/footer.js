import React from "react";
import { Link } from "react-router-dom";
import ButtonMailto from "../button/ButtonMailto";
import ScrollTopButton from "./ScrollTopButton";
import "./style.css";
import { FaPhoneAlt } from "react-icons/fa";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { FaFacebookF, FaMapMarkerAlt, FaTwitter } from "react-icons/fa";
import PakistanFlag from "../../assets/images/Pakistan.svg";
import UnitedKingdomFlag from "../../assets/images/UnitedKingdom.svg";

const Footer = () => {
  const socialLinks = [
    {
      name: "Facebook",
      link: "https://www.facebook.com/esparkconsultants",
      icon: <FaFacebookF />,
    },
    {
      name: "Twitter",
      link: "https://twitter.com/esparkconsult",
      icon: <FaTwitter />,
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/esparkconsultants/",
      icon: <AiFillInstagram />,
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/company/esparkconsgroup/",
      icon: <AiFillLinkedin />,
    },
  ];

  const mailtoAddress = [
    "sales@esparkconsultants.com",
    "info@esparkconsultants.com",
    "hr@esparkconsultants.com",
  ];

  const footerLinks = [
    { name: "About Us", link: "/about-us" },
    { name: "Upcoming Events", link: "/upcoming" },
    { name: "Blog & News", link: "/upcoming" },
    { name: "FAQs", link: "/faq" },
    { name: "Testimonials", link: "/#Testimonials" },
    { name: "Privacy Policy", link: "/privacy-policy" },
  ];

  const locations = [
    {
      country: { name: "Pakistan", flag: PakistanFlag },
      contact: {
        phone: "+92(333-6006055)",
        tel: "tel:+92333-6006055",
      },
      address: `301/B 3rd Floor & 401/A 4th Floor, Blossom 
      Trade Centre, Block 1 Gulistan-e-Johar, 
      Karachi, 74300`,
      location:
        "https://www.google.com/maps/dir//eSpark+Consulting+Group+301%2FB+3rd+Floor+%26+401%2FA+4th+Floor,+Blossom+Trade+Centre+Block+1+Gulistan-e-Johar,+Karachi,+74300/@24.929158,67.115604,14z/data=!4m5!4m4!1m0!1m2!1m1!1s0x3eb33feab1c28595:0xa3b2a5dc2f97a82e",
    },
    {
      country: { name: "United Kingdom", flag: UnitedKingdomFlag },
      contact: {
        phone: "+44(20 3286 5975)",
        tel: "tel:+442032865975",
      },
      address: `27 Old Gloucester Street, London, 
      WC1N 3AX.`,
      location:
        "https://www.google.com/maps/dir//eSpark+Consulting+Group+301%2FB+3rd+Floor+%26+401%2FA+4th+Floor,+Blossom+Trade+Centre+Block+1+Gulistan-e-Johar,+Karachi,+74300/@24.929158,67.115604,14z/data=!4m5!4m4!1m0!1m2!1m1!1s0x3eb33feab1c28595:0xa3b2a5dc2f97a82e",
    },
  ];

  return (
    <>
      <div className="footers">
        <footer className="footer-area pt-4">
          <div className="container-fluid">
            <div className="row ">
              <div className="col-xl-3 col-lg-4 col-sm-12">
                <div className="single-footer-widget">
                  <div className="logo">
                    <Link href="/">
                      <img
                        src={require("../../assets/images/logo.png")}
                        alt="logo"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-9 col-lg-8 col-sm-12 flex">
                <div className="row justify-content-start ">
                  <div className="col-auto">
                    <h3>Email Us</h3>
                  </div>

                  {mailtoAddress.map((mailto, index) => (
                    <div
                      className="col-auto d-flex align-items-center"
                      key={`email-address-${index}`}
                    >
                      <ButtonMailto mailto={mailto} label={mailto} />
                    </div>
                  ))}
                </div>
              </div>

              <div className="col-12 py-4">
                <div className="divider"></div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="single-footer-widget">
                  <p className="footer-about">
                    At eSpark Consulting Group, we provide customized and
                    innovative software IoT-based. Our broad range of services
                    is aimed to help businesses optimize their processes, reduce
                    costs, and efficiently promote their operations.
                  </p>
                  <div>
                    <ul className="social-links ">
                      {socialLinks.map((socialLink, index) => (
                        <li key={`social-links-${index}`}>
                          <a
                            className="p-2"
                            href={socialLink.link}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {socialLink.icon}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              {locations.map((location, index) => (
                <div
                  key={`location-${index}`}
                  className="col-lg-4 col-md-4 col-sm-12 footers"
                >
                  <div className="row">
                    <div className="col-auto "></div>
                    <div className="col-auto d-flex flex-row align-items-center">
                      <img
                        className="flag me-2"
                        src={location.country.flag}
                        alt={location.country.name + "flag"}
                      />
                      <h6 className="text-dark fw-semibold">
                        {location.country.name}
                      </h6>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-auto d-flex ">
                      <div className="d-flex justify-content-right py-1">
                        <FaMapMarkerAlt className="icon-margin font-14 " />
                      </div>
                      <div>
                        <a
                          href={location.location}
                          target="_blank"
                          rel="noreferrer"
                          style={{ whiteSpace: "pre-line" }}
                        >
                          {location.address}
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-auto d-flex">
                      <div className="d-flex justify-content-right py-1">
                        <FaPhoneAlt className="icon-margin font-14 px-4" />
                      </div>
                      <div>
                        <a
                          href={location.contact.tel}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {location.contact.phone}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </footer>
        <div className="copyright">
          <div className="container-fluid">
            <div className="row justify-content-between py-2">
              <div className="col-auto">
                <p className="fw-semibold">
                  &copy; 2023 eSpark Consulting Group . All Rights Reserved
                </p>
              </div>

              <div className="col-auto">
                <ul className="row footer-nav-list">
                  {footerLinks.map((footerLink, index) => (
                    <li className="col-auto" key={`footer-link-${index}`}>
                      <Link to={footerLink.link}>{footerLink.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ScrollTopButton />
    </>
  );
};

export default Footer;
