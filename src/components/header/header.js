import React, {  useState } from "react";
import { services } from "../../helper/services";
import { products  } from "../../helper/products";
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
            <Link class="navbar-brand" to="/">
              <img
                src={require("../../assets/images/logo.png")}
                alt="logo"
                width={100}
              />
            </Link>
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
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/about">
                    About
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/project">
                    Works
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/services">
                    Services
                  </Link>
                  <ul class="dropdown-menu ">
                    {services.map((item) => {
                      return (
                        <li class="nav-item">
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
                <li class="nav-item">
                  <Link class="nav-link" to="/lets-talk">
                    Lets-Talk
                  </Link>
                </li>

                <li class="nav-item">
                  <Link class="nav-link" to="/products">
                    Products
                  </Link>
                  <ul class="dropdown-menu-products">
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
                  </ul>
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
              <GetInTouch />
            </Modal>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
