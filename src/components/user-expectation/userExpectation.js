import React from "react";
import Button from "../button/button";

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
        <div className="contact-cta-box row ">
          <div class="col-lg-8">
            <h3>{h3}</h3>
            <p>
              {p2}&#x27;{p2_span}
            </p>
          </div>
          <div class="col-lg-4">
            <Button
              title={btnTitle}
              link={href}
              design={2}
            />
          </div>
        </div>
        <div className="map-bg">
          <img src={require("../../assets/images/map.png")} alt="map" />
        </div>
      </div>
    </div>
  );
}
