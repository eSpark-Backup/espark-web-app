import React, { useState, useEffect } from "react";
import { services } from "../../helper/services";
import { products } from "../../helper/products";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import GetInTouch from "../getInTouch/GetInTouch";
import { Link } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <header id="header" class="headroom  is-sticky">
      <div class="startp-nav">
        <div class="container">
          <nav class="navbar navbar-expand-md navbar-light">
            <Link class="navbar-brand" to="/">
              <img
                src={require("../../assets/images/logo.png")}
                alt="logo"
                className="logo"
                width={120}
              />
            </Link>
            <button
              class={
                !isNavCollapsed
                  ? "custom-toggler navbar-toggler "
                  : "custom-toggler navbar-toggler collapsed"
              }
              type="button"
              data-toggle="collapse"
              data-target="/navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded={!isNavCollapsed ? true : false}
              aria-label="Toggle navigation"
              onClick={handleNavCollapse}
            >
              <span class="icon-bar top-bar"></span>
              <span class="icon-bar middle-bar"></span>
              <span class="icon-bar bottom-bar"></span>
            </button>
            <div
              className={
                !isNavCollapsed
                  ? "collapse navbar-collapse show"
                  : "collapse navbar-collapse"
              }
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto">
                <li className="nav-item" onClick={handleNavCollapse}>
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li class="nav-item" onClick={handleNavCollapse}>
                  <Link class="nav-link" to="/about">
                    About
                  </Link>
                </li>
                <li class="nav-item" onClick={handleNavCollapse}>
                  <Link class="nav-link" to="/project">
                    Works
                  </Link>
                </li>
                <li class="nav-item" >
                  <Link class="nav-link" to="/services">
                    Services
                  </Link>
                  <ul class="dropdown-menu ">
                    {services.map((item) => {
                      return (
                        <li class="nav-item" onClick={handleNavCollapse} >
                          <i
                            class="fa fa-envelope-square"
                            aria-hidden="true"
                          ></i>
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
                <li class="nav-item" onClick={handleNavCollapse}>
                  <Link class="nav-link" to="/lets-talk">
                    Lets-Talk
                  </Link>
                </li>

                <li class="nav-item" onClick={handleNavCollapse}>
                  <Link class="nav-link" to="/products">
                    Products
                  </Link>
                  {/* <ul class="dropdown-menu-products">
                    {products.map((item) => {
                      return (
                        <li class="nav-item">
                          <i
                            class="fa fa-envelope-square"
                            aria-hidden="true"
                          ></i>
                          <Link
                            class="nav-link"
                            to={`products-detail/${item.name}`}
                          >
                            {item.name}
                          </Link>
                        </li>
                      );
                    })}
                  </ul> */}
                </li>

                {/* <li class="nav-item">
                  <Link class="nav-link" to="/#">
                    Careers
                  </Link>
                </li> */}
              </ul>
            </div>
            <div class="others-option">
              <Link class="btn btn-light" onClick={onOpenModal}>
                Quote Now
              </Link>
            </div>
            <Modal open={open} onClose={onCloseModal} center>
              <GetInTouch modal={true} modelClose={(e) => setOpen(e)} />
            </Modal>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
