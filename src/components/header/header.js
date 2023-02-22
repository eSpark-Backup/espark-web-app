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

  const [selected, setSelected] = useState(0);

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
                    onClick={() => {
                      setSelected(0);
                      setIsNavCollapsed(false);
                    }}
                  >
                    <span
                      class={selected == 0 ? "itemTxt selected" : "itemTxt "}
                    >
                      Home{" "}
                    </span>
                  </Link>
                </li>
                <li class="nav-item" onClick={() => setSelected(1)}>
                  <Link class="nav-link" to="/services">
                    <span
                      class={selected == 1 ? "itemTxt selected" : "itemTxt "}
                    >
                      Services{" "}
                      <svg
                        width="14"
                        height="9"
                        viewBox="0 0 14 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M-9.99769e-07 1.1762C0.141427 0.721149 0.482915 0.442572 0.799883 0.154746C1.05396 -0.0760532 1.45194 -0.032128 1.70992 0.201369C1.76216 0.248762 1.8112 0.300778 1.85917 0.35318C3.53001 2.16413 5.20049 3.97546 6.87026 5.78757C6.90863 5.82918 6.93706 5.8812 6.9758 5.9363C7.03727 5.87349 7.07707 5.83496 7.11438 5.79412C8.79836 3.96891 10.4816 2.14371 12.1653 0.318888C12.4662 -0.00708247 12.8365 -0.108418 13.1364 0.13394C13.4164 0.360116 13.6687 0.644088 13.8819 0.945014C14.0753 1.2182 14.0163 1.59503 13.813 1.86552C13.7757 1.91522 13.7352 1.96223 13.6936 2.00731C11.666 4.20626 9.6384 6.40522 7.61044 8.60379C7.29916 8.94131 6.94239 9.01568 6.61121 8.8053C6.53019 8.75367 6.45699 8.68277 6.39019 8.60995C4.35512 6.40522 2.31934 4.20087 0.290317 1.98997C0.167368 1.85588 0.0955877 1.66593 0.000354708 1.50178C-5.45965e-08 1.39313 -1.00403e-06 1.28486 -9.99769e-07 1.1762Z"
                          fill="#3359A2"
                        />
                      </svg>
                    </span>
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
                            <Link class="nav-link" to={`#`}>
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
                              <ul class="dropdown-menu menuDropDown  list-bgrd">
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
                <li
                  className="nav-item"
                  onClick={() => {
                    setSelected(2);
                    setIsNavCollapsed(false);
                  }}
                >
                  <Link class="nav-link" to="/about">
                    <span
                      class={selected == 2 ? "itemTxt selected" : "itemTxt"}
                    >
                      Portfolio
                    </span>
                  </Link>
                </li>
                <li
                  className="nav-item"
                  onClick={() => {
                    setSelected(3);
                    setIsNavCollapsed(false);
                  }}
                >
                  <Link class="nav-link" to="/project">
                    <span
                      class={selected == 3 ? "itemTxt selected" : "itemTxt "}
                    >
                      Careers
                    </span>
                  </Link>
                </li>
                <li
                  className="nav-item"
                  onClick={() => {
                    setSelected(4);
                    setIsNavCollapsed(false);
                  }}
                >
                  <Link class="nav-link" to="/contact">
                    <span
                      class={selected == 4 ? "itemTxt selected" : "itemTxt "}
                    >
                      Blogs
                    </span>
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
