import React from "react";

export default function Title({ title, data, paragraph }) {
  return (
    <div className="page-title-area">
      <div className="d-table">
        <div className="d-table-cell">
          <div className="container">
            <h1>{title}</h1>
            <p
              style={{ fontSize: 20 }}
              dangerouslySetInnerHTML={{ __html: paragraph }}
            ></p>
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
