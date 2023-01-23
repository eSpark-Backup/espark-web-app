import React from "react";

export default function Title({ title, data, paragraph, link }) {
  return (
    <div
      className="page-title-area"
      style={{
        paddingTop: link === "/" || "/teams" ? 50 : null,
        textAlign: link === "/careers" ? "left" : null,
      }}
    >
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
