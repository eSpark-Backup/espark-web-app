import React, { useState } from "react";
import { services } from "../../helper/services";
import { products } from "../../helper/products";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import GetInTouch from "../getInTouch/GetInTouch";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineCaretRight } from "react-icons/ai";
import "./header.css";

const Header = () => {
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const [isNavCollapsed, setIsNavCollapsed] = useState(false);
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  const location = useLocation();
  const isAppScreen = location.pathname === "/espark-app";

  const [iconShow, setIconShow] = useState(false);

  const [dropDownId, setDropDownId] = useState();
  const newData = [...services].reverse();

  const handleMouseEnter = (_id) => {
    setDropDownId(_id);
    setIconShow(true);
  };
  const handleMouseLeave = (_id) => {
    setDropDownId(10);
    setIconShow(false);
  };

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
                  ? "custom-toggler navbar-toggler customColor "
                  : "custom-toggler navbar-toggler customColor collapsed"
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
                  ? "collapse navbar-collapse show d-flex autoSize"
                  : "collapse navbar-collapse"
              }
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav marginEnd">
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/"
                    onClick={() => setIsNavCollapsed(false)}
                  >
                    <span className="itemTxt">Home</span>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/services">
                    <span className="itemTxt">Services</span>
                  </Link>
                  <ul class="dropdown-menu  list-bgrd">
                    {newData?.slice(0, 4)?.map((child) => {
                      return (
                        <>
                          <li
                            class="nav-item ulItemsColor"
                            onClick={() => setIsNavCollapsed(false)}
                            onMouseEnter={() => {
                              handleMouseEnter(child.id);
                            }}
                            onMouseLeave={() => {
                              handleMouseLeave(child.id);
                            }}
                          >
                            <Link class="nav-link" to={`#`}                         
> 
                              {child.dropDown == true ? (
                                child.id == dropDownId ? (
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    class="bi bi-chevron-up"
                                    viewBox="0 0 16 16"
                                  >
                                    {" "}
                                    <path
                                      fill-rule="evenodd"
                                      d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
                                    />{" "}
                                  </svg>
                                ) : (
                                  <svg
                                    width="14"
                                    height="9"
                                    viewBox="0 0 14 9"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M13.2439 1.53943L6.77649 8.00684L0.309082 1.53943L1.45705 0.391464L6.77649 5.71091L12.0959 0.391464L13.2439 1.53943Z"
                                      fill="black"
                                    />
                                  </svg>
                                )
                              ) : (
                                ""
                              )}
                              {child.name}
                            </Link>
                            {child.dropDown == true && (
                              <ul class="dropdown-menu menuDropDown  list-bgrd"                 
                              >
                                {child?.childs.map((item) => {
                                  return (
                                    <li
                                      class="nav-item ulItemsColor"
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
                            )}
                          </li>
                        </>
                      );
                    })}
                  </ul>
                </li>
                <li class="nav-item" onClick={() => setIsNavCollapsed(false)}>
                  <Link class="nav-link" to="/about">
                    <span className="itemTxt">Portfolio</span>
                  </Link>
                </li>
                <li class="nav-item" onClick={() => setIsNavCollapsed(false)}>
                  <Link class="nav-link" to="/project">
                    <span className="itemTxt">Careers</span>
                  </Link>
                </li>

                <li class="nav-item" onClick={() => setIsNavCollapsed(false)}>
                  <Link class="nav-link" to="/contact">
                    <span className="itemTxt">Blogs</span>
                  </Link>
                </li>

                {/* <li class="nav-item" onClick={() => setIsNavCollapsed(false)}>
                  <Link class="nav-link" to="/products">
                    Products
                  </Link>
                </li>
                <li class="nav-item" onClick={() => setIsNavCollapsed(false)}>
                  <Link class="nav-link" to="/careers">
                    Careers
                  </Link>
                </li> */}
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
                <div className="headerBtn" onClick={onOpenModal}>
                  <span className="btn-content ">Lets Talk</span>
                </div>
                // <Link class="btn btn-light" >
                //   Quote Now
                // </Link>
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
