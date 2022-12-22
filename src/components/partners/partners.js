import React from "react";

export default function Partners({ h5, data }) {
  return (
    <div className="partner-area partner-section">
      <div className="container">
        <h5>{h5}</h5>
        <div className="partner-inner">
          <div className="row justify-content-center">
            {data.map((item, index) => (
              <div className="col-lg-2 col-md-3 col-6" key={index}>
                {" "}
                <a href="/ab">
                  <img src={item.imgUrl} alt="partner" />
                  <img src={item.hoverImage} alt="partner" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
