import React from "react";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import Home from "../screens/home";

const AppRoutes = () => {
  let routes = useRoutes([{ path: "/", element: <Home /> }]);

  return routes;
};

const AppWraper = () => {
  return (
    <Router>
      <AppRoutes />;
    </Router>
  );
};

export default AppWraper;
