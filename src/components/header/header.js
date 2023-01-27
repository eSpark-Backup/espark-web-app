import React, { useState } from "react";
import { services } from "../../helper/services";
import { products } from "../../helper/products";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import GetInTouch from "../getInTouch/GetInTouch";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineCaretRight } from "react-icons/ai";

const Header = () => {
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const [isNavCollapsed, setIsNavCollapsed] = useState(false);
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  const location = useLocation();
  const isAppScreen = location.pathname === "/espark-app";

  const newData = [...services].reverse();

  return (
    <header id="header" class="headroom is-sticky">
      <div class="startp-nav">
        <div class="container">
          <nav class="navbar navbar-expand-md navbar-light">
            <Link class="navbar-brand" to="/">
              <img
                src={require(isAppScreen
                  ? "../../assets/images/logoApp.png"
                  : "../../assets/images/logo.png")}
                alt="logo"
                className="logo"
                width={120}
                height={isAppScreen && 60}
              />
            </Link>

            <button
              class={
                isNavCollapsed
                  ? "custom-toggler navbar-toggler "
                  : "custom-toggler navbar-toggler collapsed"
              }
              type="button"
              data-toggle="collapse"
              data-target="/navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded={isNavCollapsed ? true : false}
              aria-label="Toggle navigation"
              onClick={handleNavCollapse}
            >
              <span class="icon-bar top-bar tes"></span>
              <span class="icon-bar middle-bar tes"></span>
              <span class="icon-bar bottom-bar tes"></span>
            </button>
            <div
              className={
                isNavCollapsed
                  ? "collapse navbar-collapse show"
                  : "collapse navbar-collapse"
              }
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/"
                    onClick={() => setIsNavCollapsed(false)}
                  >
                    Home
                  </Link>
                </li>
                <li class="nav-item" onClick={() => setIsNavCollapsed(false)}>
                  <Link class="nav-link" to="/about">
                    About
                  </Link>
                </li>
                <li class="nav-item" onClick={() => setIsNavCollapsed(false)}>
                  <Link class="nav-link" to="/project">
                    Projects
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/services">
                    Services
                  </Link>
                  <ul class="dropdown-menu ">
                    {newData?.slice(0, 2)?.map((child) => {
                      return (
                        <li
                          class="nav-item"
                          onClick={() => setIsNavCollapsed(false)}
                        >
                          <Link class="nav-link" to={`#`}>
                            <AiOutlineCaretRight /> {child.name}
                          </Link>
                          <ul class="dropdown-menu ">
                            {child.childs.map((item) => {
                              return (
                                <li
                                  class="nav-item"
                                  onClick={() => setIsNavCollapsed(false)}
                                >
                                  <i
                                    class="fa fa-envelope-square"
                                    aria-hidden="true"
                                  ></i>
                                  <Link
                                    class="nav-link"
                                    to={`services/${item.path}`}
                                  >
                                    {item.name}
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        </li>
                      );
                    })}
                  </ul>
                </li>
                <li class="nav-item" onClick={() => setIsNavCollapsed(false)}>
                  <Link class="nav-link" to="/contact">
                    Contact Us
                  </Link>
                </li>

                <li class="nav-item" onClick={() => setIsNavCollapsed(false)}>
                  <Link class="nav-link" to="/products">
                    Products
                  </Link>
                </li>
                <li class="nav-item" onClick={() => setIsNavCollapsed(false)}>
                  <Link class="nav-link" to="/careers">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>

            <div class="others-option">
              {isAppScreen ? (
                <a
                  href="https://play.google.com/store/apps/details?id=com.commanddo"
                  class="btn btn-light"
                  target="_blanks"
                >
                  Download Now
                </a>
              ) : (
                <Link class="btn btn-light" onClick={onOpenModal}>
                  Quote Now
                </Link>
              )}
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
