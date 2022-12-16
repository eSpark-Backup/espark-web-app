import React from "react";
import { services } from "../../helper/services";

const Header = () => {
  return (
    <header id="header" class="headroom  is-sticky">
      <div class="startp-nav">
        <div class="container">
          <nav class="navbar navbar-expand-md navbar-light">
            <a class="navbar-brand" href="/it-startup/">
              <img src={require("../../assets/images/logo.png")} alt="logo" />
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
                  <a className="nav-link" href="/#">
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
                          <a class="nav-link" href="/services-1/">
                            {item.name}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/#">
                    Lets-Talk
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/#">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div class="others-option">
              <a class="btn btn-light" href="/Quote Now/">
                Quote Now
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
