import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { shapes } from "../../../helper/ImageUrl";
import style from './style.module.css'
const ServiceStyleFive = ({ data,link }) => {
  const order =(a, b)=> {
    return a < b ? -1 : (a > b ? 1 : 0);
}
  return (
    <div>
      <div class="agency-services-area">
        <div class="container">
          <div class="row justify-content-center">
            {data.sort().map((item) => {
              return (
                <div class="col-lg-4 col-sm-6 col-md-6">
                  <div class="agency-services-box">
                    <img src={item.data.image[0]} alt="image" height={300} />
                    <div class="content">
                      <h3>
                        <a href="/service-details/">{item.name}</a>
                      </h3>
                      <Link
                        class="read-more-btn"
                        to={`/services-detail/${item.name}`}
                      >
                        Read More
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
                          <circle cx="12" cy="12" r="10"></circle>
                          <line x1="12" y1="8" x2="12" y2="16"></line>
                          <line x1="8" y1="12" x2="16" y2="12"></line>
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            }).sort(order)}
             {link == '/' ? <Link to={'/services'} className={style.btnMargin}>
                    <a className='btn btn-secondary'   >GO TO Services<FaLongArrowAltRight  className={style.arrowSize}/></a>
              </Link> : ""}
          </div>
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
