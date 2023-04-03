import React from "react";
import { ourProcess } from "../../helper/processCricle";
import SectionTitle from "../sectionTitle";
import "./style.css";

function ProcessCircle() {
  return (
    <div className="container-fluid ptb-80 my-5">
      <SectionTitle heading={"Our Process​"} />
      <div className="row d-flex justify-content-around process-circle">
        {ourProcess?.map((item) => (
          <div className="col-lg-2 col-md-4 col-sm-6 col-xs-6 process-circle-wrapper">
            <div className="process-circle-items">
              <img
                src={require(`../../assets/images/our-process/${item.title}.png`)}
                alt={item.title}
              />
              <p>{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProcessCircle;
