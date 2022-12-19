import React, { useEffect, useState } from "react";
import { services } from "../../helper/services";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import GetInTouch from "../getInTouch/GetInTouch";
import { Link } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <header id="header" class="headroom  is-sticky">
      <div class="startp-nav">
        <div class="container">
          <nav class="navbar navbar-expand-md navbar-light">
            <a class="navbar-brand" href="/">
              <img
                src={require("../../assets/images/logo.png")}
                alt="logo"
                width={100}
              />
            </a>
            <button
              className="navbar-toggler navbar-toggler-right collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="icon-bar top-bar"></span>
              <span className="icon-bar middle-bar"></span>
              <span className="icon-bar bottom-bar"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/about">
                    About
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/project">
                    Works
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/services">
                    Services
                  </a>
                  <ul class="dropdown-menu">
                    {services.map((item) => {
                      return (
                        <li class="nav-item">
                          <Link
                            class="nav-link"
                            to={`services-detail/${item.name}`}
                          >
                            {item.name}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/lets-talk">
                    Lets-Talk
                  </a>
                </li>
                
                <li class="nav-item">
                  <a class="nav-link" href="/lets-talk">
                    Product
                  </a>
                </li>
                
              
          
                {/* <li class="nav-item">
                  <a class="nav-link" href="/#">
                    Careers
                  </a>
                </li> */}
              </ul>
            </div>
            <div class="others-option">
              <a class="btn btn-light" onClick={onOpenModal}>
                Quote Now
              </a>
            </div>
            <Modal open={open} onClose={onCloseModal} center>
              <GetInTouch />
            </Modal>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
