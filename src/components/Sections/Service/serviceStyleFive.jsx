import React from "react";
import { Link } from "react-router-dom";
import { shapes } from "../../../helper/ImageUrl";

import style from './style.module.css'
import Button from "../../button/button";
import Title from "../../title/title";
const ServiceStyleFive = ({ data, link }) => {

  const newData = [...data].reverse()

  return (
    <div>
      <div className="agency-services-area">
        <div className="container">
          {newData?.slice(0,2)?.map((child) => {
            return (
              <div className="row justify-content-center p-20">
               {link === "/" ?null: <Title title={child.name} link={window.location.pathname} /> }
                {
                  child.childs.map(item => {
                    return (
                      <div className="col-lg-4 col-sm-6 col-md-6">
                        <div className="agency-services-box">
                          <img src={item?.data?.image[0]} alt="img" height={300} className={style.serviceImg} />
                          <div className={`content ${style.contents}`}>
                            <h6>
                              <Link to={`/services/${item.path}`}>{item.name}</Link>
                            </h6>
                            <Link
                              className="read-more-btn"
                              to={`/services/${item.path}`}
                            >
                              Read More
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              >
                                <circle cx="12" cy="12" r="10"></circle>
                                <line x1="12" y1="8" x2="12" y2="16"></line>
                                <line x1="8" y1="12" x2="16" y2="12"></line>
                              </svg>
                            </Link>
                          </div>
                        </div>
                      </div>
                    );

                  })
                }
              </div>

            )
          })}


          {link === '/' ?
            <Button title="Go To Services" link="/services" design={1} />
            : ""}
        </div>
        {shapes?.map((item, index) => (
          <div key={index} className={item.className}>
            <img src={item.imgUrl} alt={item.alt} />{" "}
          </div>
        ))}

      </div>
    </div>
  );
};

export default ServiceStyleFive;
