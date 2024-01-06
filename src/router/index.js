import React, { useEffect } from "react";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import About from "../screens/about";
import Blog from "../screens/blog/blog";
import Contact from "../screens/contact";
import Home from "../screens/home";
import Projects from "../screens/projects/projects";
import Services from "../screens/services";
import ServiceDetail from "../screens/services/serviceDetail";
import LayoutOne from "../layout/layoutOne";
import ProjectDetails from "../screens/project-details/projectDetails";
import Products from "../screens/products";
import MobileApp from "../screens/mobileApp";
import Privacy from "./../screens/privacy/Privacy";
import NotFound from "../screens/not-found/notFound";
import Teams from "../screens/teams/teams";
import BlogDetail from "../screens/blog/blog-detail";
import Careers from "../screens/careers";
import JobDetail from "../screens/careers/jobDetail";
import SEO from "./../utils/SEO";
import Event from "./../components/event/event";
import Upcoming from "../screens/upcoming-page";
import Talent from "../screens/talent";
import  { Jobs } from "../screens/jobs";
import CareerDetails from "../screens/jobs/details";

const AppRoutes = () => {
  const data = window.scrollTo(0, 0);

  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/about-us", element: <About /> },
    { path: "/portfolio", element: <Projects /> },
    { path: "/project-detail/:id", element: <ProjectDetails /> },
    { path: "/blogs/:id", element: <BlogDetail /> },
    // { path: "/hire-a-talent", element: <Talent /> },
    { path: "/blogs", element: <Blog /> },
    { path: "/services", element: <Services /> },
    // { path: "/products", element: <Products /> },
    { path: "/services/:id", element: <ServiceDetail /> },
    // { path: "/contact", element: <Contact /> },
    // { path: "/espark-app", element: <MobileApp /> },
    { path: "/privacy-policy", element: <Privacy /> },
    // { path: "/teams", element: <Teams /> },
    // { path: "/event", element: <Event /> },
    // { path: "/appointments", element: <Contact /> },
    { path: "/careers", element: <Careers /> },
    { path: "/upcoming", element: <Upcoming /> },
    { path: "/careers/:id", element: <JobDetail /> },
    { path: "/job", element: <Jobs /> },
    { path: "/job/:jobId", element: <CareerDetails /> },
    // { path: "/job", element: <JobList /> },
    { path: "/*", element: <NotFound /> },
  ]);
  return routes;
};

const AppWraper = () => {
  return (
    <Router>
      <LayoutOne>
        <SEO />
        <AppRoutes />
      </LayoutOne>
    </Router>
  );
};
export default AppWraper;
