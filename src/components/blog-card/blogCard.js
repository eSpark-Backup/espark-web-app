import React from "react";

export default function BlogCard({ data }) {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          {data.map((item, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="single-blog-post">
                <div className="blog-image">
                  <a href="/blog-details/">
                    <img src={item.imgUrl} alt="image" />
                  </a>
                  <div className="date">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <rect
                        x="3"
                        y="4"
                        width="18"
                        height="18"
                        rx="2"
                        ry="2"
                      ></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>{" "}
                    {item.btnName}
                  </div>
                </div>
                <div className="blog-post-content">
                  <h3>
                    <a href="/blog-details/">{item.h3}</a>
                  </h3>
                  <span>
                    {item.span_1} <a href="#">{item.span_2}</a>
                  </span>
                  <p>{item.p}</p>
                  <a className="read-more-btn" href="/blog-details/">
                    {item.p2}{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
