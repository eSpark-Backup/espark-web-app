import React from "react";

const Header = () => {
  return (
    <header id="header" className="headroom">
      <div className="startp-nav">
        <div className="container">
          <nav className="navbar navbar-expand-md navbar-light">
            <a className="navbar-brand" href="/it-startup/">
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
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link" href="/#">
                    Home
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </a>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="nav-link" href="/it-startup/">
                        IT Startup
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/it-startup-2/">
                        IT Startup Two
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link active" href="index.htm">
                        IOT
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/hosting/">
                        Hosting
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/machine-learning/">
                        Machine Learning
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/machine-learning-2/">
                        Machine Learning 2
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/bigdata-analytics/">
                        Bigdata Analytics
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/digital-agency/">
                        Digital Agency
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/digital-agency-portfolio/">
                        Digital Agency Portfolio
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/pc-repair/">
                        PC Repair
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/about">
                    About{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </a>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="nav-link" href="/about-1/">
                        About Style 1
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/about-2/">
                        About Style 2
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/about-3/">
                        About Style 3
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/#">
                    Pages{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </a>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="nav-link" href="/#">
                        Features{" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a className="nav-link" href="/features/">
                            Features
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="/feature-details/">
                            Features Details
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/#">
                        Services{" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a className="nav-link" href="/services-1/">
                            Services Style 1
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="/services-2/">
                            Services Style 2
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="/services-3/">
                            Services Style 3
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="/services-4/">
                            Services Style 4
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="/services-5/">
                            Services Style 5
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="/service-details/">
                            Services Details
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/feedback/">
                        Feedback
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/project">
                        Projects{" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a className="nav-link" href="/projects-1/">
                            Project Style 1
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="/projects-2/">
                            Project Style 1
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="/project-details/">
                            Project Details
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/team/">
                        Team
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/pricing/">
                        Pricing
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/#">
                        User{" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a className="nav-link" href="/login/">
                            Login
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="/sign-up/">
                            Sign Up
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="/forgot-password/">
                            Forgot Password
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/faq/">
                        FAQ&#x27;s
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/coming-soon/">
                        Coming Soon
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/404/">
                        404 Error Page
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/#">
                    Shop{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </a>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="nav-link" href="/shop/">
                        Shop
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/checkout/">
                        Checkout
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/blog">
                    Blog{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </a>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="nav-link" href="/blog-1/">
                        Blog Grid
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/blog-2/">
                        Blog Right Sidebar
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/blog-3/">
                        Blog Grid 2
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/blog-4/">
                        Blog Right Sidebar 2
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/blog-5/">
                        Blog Grid 3
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/blog-6/">
                        Blog Right Sidebar 3
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/blog-details/">
                        Blog Details
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/contact/">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="others-option">
              
              <a className="btn btn-light" href="/contact/">
                Support
              </a>
              <a className="btn btn-primary" href="/login/">
                Login
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
