import React from "react";
import { Link } from "react-router-dom";

export default function UserExpectation({
  h2,
  p1,
  data,
  h3,
  p2,
  p2_span,
  btnTitle,
  href,
}) {
  return (
    <div className="funfacts-area ptb-80">
      <div className="container">
        <div className="section-title">
          <h2>{h2}</h2>
          <div className="bar"></div>
          <p>{p1}</p>
        </div>

        <div className="row">
          {data.map((item) => (
            <div className="col-lg-3 col-md-3 col-6">
              <div className="funfact">
                <h3>{item.qty}</h3>
                <p>{item.title}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="contact-cta-box">
          <h3>{h3}</h3>
          <p>
            {p2}&#x27;{p2_span}
          </p>
          <Link to={href}>
          <a className="btn btn-primary">
            {btnTitle}
          </a>
          </Link>
         
        </div>
        <div className="map-bg">
          <img src={require("../../assets/images/map.png")} alt="map" />
        </div>
      </div>
    </div>
  );
}
