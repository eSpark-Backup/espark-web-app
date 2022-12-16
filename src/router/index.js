import React from "react";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import About from "../screens/about";
import Blog from "../screens/blog/blog";
import Home from "../screens/home";
import Projects from "../screens/projects/projects";
import Services from "../screens/services";
import ServiceDetail from "../screens/services/serviceDetail";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/project", element: <Projects /> },
    { path: "/blog", element: <Blog /> },
    { path: "/services", element: <Services /> },
    { path: "/services-detail", element: <ServiceDetail /> },
  ]);

  return routes;
};

const AppWraper = () => {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};

export default AppWraper;
