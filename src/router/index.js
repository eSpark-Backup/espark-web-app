import React, { useEffect } from "react";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import Header from "../components/header/header";
import About from "../screens/about";
import Blog from "../screens/blog/blog";
import Contact from "../screens/contact";
import Home from "../screens/home";
import Projects from "../screens/projects/projects";
import Services from "../screens/services";
import ServiceDetail from "../screens/services/serviceDetail";
import LayoutOne from "../layout/layoutOne";
import ProjectDetails from "../screens/project-details/projectDetails";
import MobileApp from "../screens/mobileApp";

const AppRoutes = () => {
  const data = window.scrollTo(0, 0);

  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/project", element: <Projects /> },
    { path: "/project-detail/:id", element: <ProjectDetails /> },
    { path: "/blog", element: <Blog /> },
    { path: "/services", element: <Services /> },
    { path: "/services-detail/:id", element: <ServiceDetail /> },
    { path: "/lets-talk", element: <Contact /> },
    { path: "/espark-app", element: <MobileApp /> },
  ]);
  return routes;
};

const AppWraper = () => {
  return (
    <Router>
      <LayoutOne>
        <AppRoutes />
      </LayoutOne>
    </Router>
  );
};

export default AppWraper;
