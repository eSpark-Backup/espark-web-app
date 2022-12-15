import React from "react";

const Header = () => {
  return (
    <header id="header" class="headroom">
      <div class="startp-nav">
        <div class="container">
          <nav class="navbar navbar-expand-md navbar-light">
            <a class="navbar-brand" href="/it-startup/">
              <img src={require("../../assets/images/logo.png")} alt="logo" />
            </a>
            <button
              class="navbar-toggler navbar-toggler-right collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="icon-bar top-bar"></span>
              <span class="icon-bar middle-bar"></span>
              <span class="icon-bar bottom-bar"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                  <a class="nav-link" href="/#">
                    Home
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewbox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </a>
                  <ul class="dropdown-menu">
                    <li class="nav-item">
                      <a class="nav-link" href="/it-startup/">
                        IT Startup
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="/it-startup-2/">
                        IT Startup Two
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link active" href="index.htm">
                        IOT
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="/hosting/">
                        Hosting
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="/machine-learning/">
                        Machine Learning
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="/machine-learning-2/">
                        Machine Learning 2
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="/bigdata-analytics/">
                        Bigdata Analytics
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="/digital-agency/">
                        Digital Agency
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="/digital-agency-portfolio/">
                        Digital Agency Portfolio
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="/pc-repair/">
                        PC Repair
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/#">
                    About{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewbox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </a>
                  <ul class="dropdown-menu">
                    <li class="nav-item">
                      <a class="nav-link" href="/about-1/">
                        About Style 1
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="/about-2/">
                        About Style 2
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="/about-3/">
                        About Style 3
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/#">
                    Pages{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewbox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </a>
                  <ul class="dropdown-menu">
                    <li class="nav-item">
                      <a class="nav-link" href="/#">
                        Features{" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewbox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </a>
                      <ul class="dropdown-menu">
                        <li class="nav-item">
                          <a class="nav-link" href="/features/">
                            Features
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="/feature-details/">
                            Features Details
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="/#">
                        Services{" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewbox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </a>
                      <ul class="dropdown-menu">
                        <li class="nav-item">
                          <a class="nav-link" href="/services-1/">
                            Services Style 1
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="/services-2/">
                            Services Style 2
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="/services-3/">
                            Services Style 3
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="/services-4/">
                            Services Style 4
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="/services-5/">
                            Services Style 5
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="/service-details/">
                            Services Details
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="/feedback/">
                        Feedback
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="/#">
                        Projects{" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewbox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </a>
                      <ul class="dropdown-menu">
                        <li class="nav-item">
                          <a class="nav-link" href="/projects-1/">
                            Project Style 1
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="/projects-2/">
                            Project Style 1
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="/project-details/">
                            Project Details
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="/team/">
                        Team
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="/pricing/">
                        Pricing
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="/#">
                        User{" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewbox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </a>
                      <ul class="dropdown-menu">
                        <li class="nav-item">
                          <a class="nav-link" href="/login/">
                            Login
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="/sign-up/">
                            Sign Up
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="/forgot-password/">
                            Forgot Password
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="/faq/">
                        FAQ&#x27;s
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="/coming-soon/">
                        Coming Soon
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="/404/">
                        404 Error Page
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/#">
                    Shop{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewbox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </a>
                  <ul class="dropdown-menu">
                    <li class="nav-item">
                      <a class="nav-link" href="/shop/">
                        Shop
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="/checkout/">
                        Checkout
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/#">
                    Blog{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewbox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </a>
                  <ul class="dropdown-menu">
                    <li class="nav-item">
                      <a class="nav-link" href="/blog-1/">
                        Blog Grid
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="/blog-2/">
                        Blog Right Sidebar
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="/blog-3/">
                        Blog Grid 2
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="/blog-4/">
                        Blog Right Sidebar 2
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="/blog-5/">
                        Blog Grid 3
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="/blog-6/">
                        Blog Right Sidebar 3
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="/blog-details/">
                        Blog Details
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/contact/">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div class="others-option">
              
              <a class="btn btn-light" href="/contact/">
                Support
              </a>
              <a class="btn btn-primary" href="/login/">
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
