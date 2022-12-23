import React from "react";
import { Link } from "react-router-dom";

export default function ReadyToTalk({ h3, p1, btn, href, getStated }) {
  return (
    <div className="ready-to-talk">
      <div className="container">
        <h3>{h3}</h3>
        <p>{p1}</p>
        <Link className="btn btn-primary" to={href}>
          {btn}
        </Link>
        <span>
          <Link to={href}>{getStated}</Link>
        </span>
      </div>
    </div>
  );
}
