import React, { useEffect, useState } from "react";
import { services } from "../../helper/services";
import { products } from "../../helper/products";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import GetInTouch from "../getInTouch/GetInTouch";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineCaretRight } from "react-icons/ai";
import "./header.css";
import LayoutOne from "./../../layout/layoutOne";
import Title from "./../title/title";
import Button from "./../button/button";
import Drawer from "react-modern-drawer";
import { Collapse } from "react-collapse";

//import styles 👇
import "react-modern-drawer/dist/index.css";

const Header = ({ scrollToLetsTalk }) => {
  const [open, setOpen] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
    if (pathname.includes("services")) {
      setIsCollapsed(true);
    } else {
      setIsCollapsed(false);
    }
  };

  const onOpenModal = () => {
    setOpen(true);
    setIsNavCollapsed(false);
    setOpenDrawer(false);
  };
  const onCloseModal = () => setOpen(false);

  const { pathname } = useLocation();

  useEffect(() => {
    if (!pathname.includes("/services")) {
      localStorage.clear("child_id");
      setSelectTab("");
    }
  }, [pathname]);

  const [isNavCollapsed, setIsNavCollapsed] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isChildCollapsed, setIsChildCollapsed] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  const location = useLocation();
  const isAppScreen = location.pathname === "/espark-app";

  const [iconShow, setIconShow] = useState(false);

  const [dropDownId, setDropDownId] = useState();
  const newData = [...services].reverse();

  const [selected, setSelected] = useState(0);

  const getId = localStorage.getItem("child_id");
  const getServiceId = localStorage.getItem("id");
  const [tabSelect, setSelectTab] = useState("");

  useEffect(() => {
    setSelectTab(getId);
  }, [getId]);

  function handleBothDrawers() {
    handleNavCollapse();
    toggleDrawer();
  }
  // const mobileLink = (item) => {
  //   toggleDrawer();
  //   localStorage.setItem("child_id", item.name);
  // };

  const removeChildId = (item) => {
    localStorage.clear("child_id");
    localStorage.setItem("id", item.path);
  };

  const toggleChildCollapse = (serviceId) => {
    setSelectedService((prev) => (prev === serviceId ? null : serviceId));
    localStorage.clear("child_id");
    localStorage.setItem("id", serviceId);
    toggleDrawer();
  };
  return (
    <header id="header" className="headroom is-sticky">
      <div className="startp-nav">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-md navbar-light">
            <Link className="navbar-brand" to="/">
              <img
                src={require(isAppScreen
                  ? "../../assets/images/logoApp.png"
                  : "../../assets/images/logo.png")}
                alt="logo"
                className="logo"
                width={210}
                height={isAppScreen ? 60 : "auto"}
              />
            </Link>
            <button
              className={
                openDrawer
                  ? "custom-toggler navbar-toggler customColor "
                  : "custom-toggler navbar-toggler customColor collapsed"
              }
              type="button"
              data-toggle="collapse"
              data-target="/navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded={isNavCollapsed ? true : false}
              aria-label="Toggle navigation"
              onClick={handleBothDrawers}
              style={{ boxShadow: "none" }}
            >
              <span className="icon-bar top-bar tes"></span>
              <span className="icon-bar middle-bar tes"></span>
              <span className="icon-bar bottom-bar tes"></span>
            </button>
            <div
              className={
                isNavCollapsed
                  ? "collapse navbar-collapse show d-flex flex-column align-items-start"
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
                      className={
                        pathname === "/" ? "itemTxt selected" : "itemTxt "
                      }
                    >
                      Home{" "}
                    </span>
                  </Link>
                </li>
                <li className="nav-item" onClick={() => setSelected(1)}>
                  <Link className="nav-link">
                    <span
                      className={
                        pathname?.includes("services")
                          ? "itemTxt selected"
                          : "itemTxt "
                      }
                    >
                      Services
                      <svg
                        width="3"
                        height="6"
                        viewBox="0 0 14 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M-9.99769e-07 1.1762C0.141427 0.721149 0.482915 0.442572 0.799883 0.154746C1.05396 -0.0760532 1.45194 -0.032128 1.70992 0.201369C1.76216 0.248762 1.8112 0.300778 1.85917 0.35318C3.53001 2.16413 5.20049 3.97546 6.87026 5.78757C6.90863 5.82918 6.93706 5.8812 6.9758 5.9363C7.03727 5.87349 7.07707 5.83496 7.11438 5.79412C8.79836 3.96891 10.4816 2.14371 12.1653 0.318888C12.4662 -0.00708247 12.8365 -0.108418 13.1364 0.13394C13.4164 0.360116 13.6687 0.644088 13.8819 0.945014C14.0753 1.2182 14.0163 1.59503 13.813 1.86552C13.7757 1.91522 13.7352 1.96223 13.6936 2.00731C11.666 4.20626 9.6384 6.40522 7.61044 8.60379C7.29916 8.94131 6.94239 9.01568 6.61121 8.8053C6.53019 8.75367 6.45699 8.68277 6.39019 8.60995C4.35512 6.40522 2.31934 4.20087 0.290317 1.98997C0.167368 1.85588 0.0955877 1.66593 0.000354708 1.50178C-5.45965e-08 1.39313 -1.00403e-06 1.28486 -9.99769e-07 1.1762Z"
                          fill={
                            pathname?.includes("services")
                              ? "#00a099"
                              : "#3359A2"
                          }
                        />
                      </svg>
                    </span>
                    <ul className="dropdown-menu">
                      {services.map((item, index) => {
                        return (
                          <li key={index + "nav-item"} className={`nav-item`}>
                            <i
                              className="fa fa-envelope-square"
                              aria-hidden="true"
                            ></i>
                            <Link
                              className={"nav-link d-flex flex-column"}
                              onClick={() => removeChildId(item)}
                              to={`services/${item.path}`}
                            >
                              <span
                                className={
                                  item.path === getServiceId
                                    ? "nav-selected"
                                    : null
                                }
                              >
                                {" "}
                                {item.title}
                              </span>

                              <span
                                style={{
                                  color: "black",
                                  fontSize: 10,
                                  lineHeight: 1.1,
                                }}
                              >
                                {item.slug}
                              </span>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                    {/* <div id="serveDrop">
                      <div className="serveDropInner d-flex justify-content-between">
                        {services.map((items, index) => {
                          return (
                            <div
                              className={
                                index == 0
                                  ? "contents w-75 ps-5"
                                  : index === 1
                                  ? "contents w-100 ps-5"
                                  : index === 2
                                  ? "contents w-75 "
                                  : index === 3
                                  ? "contents w-75"
                                  : "contents w-100 pe-5"
                              }
                            >
                              <Link
                                id="linkss"
                                className="linkClass"
                                onClick={() => localStorage.clear("child_id")}
                                to={`/services/${items.path}`}
                              >
                                <p className="heading ">{items.title}</p>
                              </Link>
                              {items.childs.map((item) => {
                                return (
                                  <>
                                    <Link
                                      className={`my-2 ptag linkClass ${
                                        item.name === tabSelect &&
                                        "selectedColor"
                                      }`}
                                      to={`/services/${items.path}`}
                                      onClick={() =>
                                        localStorage.setItem(
                                          "child_id",
                                          item.name
                                        )
                                      }
                                    >
                                      {item.name}
                                    </Link>
                                    <br />
                                  </>
                                );
                              })}
                            </div>
                          );
                        })}
                      </div>
                    </div> */}
                  </Link>
                </li>
                <li
                  className="nav-item"
                  onClick={() => {
                    setSelected(2);
                    setIsNavCollapsed(false);
                  }}
                >
                  <Link className="nav-link" to="/portfolio">
                    <span
                      className={
                        pathname === "/portfolio"
                          ? "itemTxt selected"
                          : "itemTxt"
                      }
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
                  <Link className="nav-link" to="/careers">
                    <span
                      className={
                        pathname.includes("/careers")
                          ? "itemTxt selected"
                          : "itemTxt "
                      }
                    >
                      careers
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
                  <Link className="nav-link" to="/upcoming">
                    <span
                      className={
                        pathname.includes("/blogs")
                          ? "itemTxt selected"
                          : "itemTxt "
                      }
                    >
                      Blogs
                    </span>
                  </Link>
                </li>
              </ul>
              <div className="d-none dropButton w-100">
                <Button design={3} onClick={onOpenModal} title={"Let’s Talk"} />
              </div>
            </div>

            <div className="others-option">
              {isAppScreen ? (
                <a
                  href="https://play.google.com/store/apps/details?id=com.commanddo"
                  className="btn btn-light"
                  target="_blanks"
                >
                  Download Now
                </a>
              ) : (
                <div className="headerBtn smallNone">
                  <div onClick={scrollToLetsTalk} className="btn-content">
                    <span>Let’s Talk</span>
                  </div>
                </div>
              )}
            </div>
            <Modal open={open} onClose={onCloseModal} center>
              <GetInTouch modal={true} modelClose={(e) => setOpen(e)} />
            </Modal>
          </nav>
        </div>
      </div>
      <Drawer
        open={openDrawer}
        onClose={toggleDrawer}
        lockBackgroundScroll
        overlayColor={"transparent"}
        direction="left"
        className="w-75 drawer"
      >
        <div>
          <div className="mobileDrawer d-felx align-items-center">
            <Link className="navbar-brand" to="/">
              <img
                src={require(isAppScreen
                  ? "../../assets/images/logoApp.png"
                  : "../../assets/images/logo.png")}
                alt="logo"
                className="logo"
                width={210}
                height={isAppScreen ? 60 : "auto"}
              />
            </Link>
          </div>
          <div className="drawerScroll">
            <Link
              to="/"
              className={
                pathname === "/"
                  ? "mobileDrawer mobileSelected"
                  : "mobileDrawer"
              }
              onClick={toggleDrawer}
            >
              <span>Home</span>
            </Link>

            <Link
              className={
                pathname?.includes("services")
                  ? "mobileDrawer mobileSelected"
                  : "mobileDrawer"
              }
              onClick={() => setIsCollapsed(!isCollapsed)}
            >
              <span>Services</span>
              <svg
                width="3"
                height="6"
                viewBox="0 0 14 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M-9.99769e-07 1.1762C0.141427 0.721149 0.482915 0.442572 0.799883 0.154746C1.05396 -0.0760532 1.45194 -0.032128 1.70992 0.201369C1.76216 0.248762 1.8112 0.300778 1.85917 0.35318C3.53001 2.16413 5.20049 3.97546 6.87026 5.78757C6.90863 5.82918 6.93706 5.8812 6.9758 5.9363C7.03727 5.87349 7.07707 5.83496 7.11438 5.79412C8.79836 3.96891 10.4816 2.14371 12.1653 0.318888C12.4662 -0.00708247 12.8365 -0.108418 13.1364 0.13394C13.4164 0.360116 13.6687 0.644088 13.8819 0.945014C14.0753 1.2182 14.0163 1.59503 13.813 1.86552C13.7757 1.91522 13.7352 1.96223 13.6936 2.00731C11.666 4.20626 9.6384 6.40522 7.61044 8.60379C7.29916 8.94131 6.94239 9.01568 6.61121 8.8053C6.53019 8.75367 6.45699 8.68277 6.39019 8.60995C4.35512 6.40522 2.31934 4.20087 0.290317 1.98997C0.167368 1.85588 0.0955877 1.66593 0.000354708 1.50178C-5.45965e-08 1.39313 -1.00403e-06 1.28486 -9.99769e-07 1.1762Z"
                  fill="#3359A2"
                />
              </svg>
            </Link>
            <Collapse isOpened={isCollapsed}>
              {services.map((items, index) => {
                return (
                  <div key={index}>
                    <Link
                      className={
                        pathname?.includes(`/services/${items.path}`)
                          ? "mobileDrawer serviceChild d-flex flex-column"
                          : "mobileDrawer  serviceChild d-flex flex-column"
                      }
                      to={`/services/${items.path}`}
                      onClick={() => toggleChildCollapse(items.path)}
                    >
                      <span
                        className={
                          items.path === getServiceId
                            ? "nav-selected"
                            : "mobileheading"
                        }
                      >
                        {" "}
                        {items.title}
                      </span>

                      <span
                        style={{
                          color: "black",
                          fontSize: 10,
                          lineHeight: 1.0,
                        }}
                      >
                        {items.slug}
                      </span>
                    </Link>
                    {/* <Collapse isOpened={selectedService === items.path}>
                      {items.childs.map((item, childIndex) => {
                        return (
                          <div
                            key={childIndex}
                            className="mobileDrawerCollapse collapseChild d-flex flex-column"
                          >
                            <Link
                              className={`a ${
                                item.name === tabSelect &&
                                "mobileSelectedCollapse"
                              }`}
                              to={`/services/${items.path}`}
                              onClick={() => mobileLink(item)}
                            >
                              {item.name}
                            </Link>
                            <br />
                          </div>
                        );
                      })}
                    </Collapse> */}
                  </div>
                );
              })}
            </Collapse>
            <Link
              to="/portfolio"
              className={
                pathname === "/portfolio"
                  ? "mobileDrawer mobileSelected"
                  : "mobileDrawer"
              }
              onClick={toggleDrawer}
            >
              <span>Portfolio</span>
            </Link>
            <Link
              to="/careers"
              className={
                pathname.includes("/careers")
                  ? "mobileDrawer mobileSelected"
                  : "mobileDrawer"
              }
              onClick={toggleDrawer}
            >
              <span>careers</span>
            </Link>
            <Link
              to="/upcoming"
              className={
                pathname.includes("/blogs")
                  ? "mobileDrawer mobileSelected"
                  : "mobileDrawer"
              }
              onClick={toggleDrawer}
            >
              <span>Blogs</span>
            </Link>
          </div>
          <Link className="w-100 p-2 fixed-bottom" to={`/hire-a-talent`}>
            <Button
              design={14}
              onClick={() => setOpenDrawer(false)}
              title={"Let’s Talk"}
            />
          </Link>
        </div>
      </Drawer>
    </header>
  );
};

export default Header;
