import React from "react";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import About from "../screens/about";
import Blog from "../screens/blog/blog";
import Home from "../screens/home";
import Projects from "../screens/projects/projects";
import Services from "../screens/services";
import ServiceDetail from "../screens/services/serviceDetail";
import LayoutOne from "../layout/layoutOne";
import ProjectDetails from "../screens/project-details/projectDetails";
import Privacy from "./../screens/privacy/Privacy";
import NotFound from "../screens/not-found/notFound";
import BlogDetail from "../screens/blog/blog-detail";
import SEO from "./../utils/SEO";
import Upcoming from "../screens/upcoming-page";
import "./../components/event/style.css";
import  { Jobs } from "../screens/careers";
import CareerDetails from "../screens/careers/details";

const AppRoutes = () => {
  const data = window.scrollTo(0, 0);
  console.log("Scroll",data)

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
    { path: "/upcoming", element: <Upcoming /> },
    { path: "/careers", element: <Jobs /> },
    { path: "/careers/:jobId", element: <CareerDetails /> },
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
