import React from "react";

export default function Title({ title, data }) {
  return (
    <div className="page-title-area">
      <div className="d-table">
        <div className="d-table-cell">
          <div className="container">
            <h2>{title}</h2>
          </div>
        </div>
      </div>
      {data?.map((item, index) => (
        <div key={index} className={item.className}>
          <img src={item.imgUrl} alt={item.alt} />{" "}
        </div>
      ))}
    </div>
  );
}
