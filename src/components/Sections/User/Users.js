import React from "react";
import "./style.css";
import { completedProject } from "../../../helper/projectComplate";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "./AnimatedProgressProvider";
import { easeQuadInOut } from "d3-ease";
import AnimatedProgressProvider from "./AnimatedProgressProvider";
import "react-circular-progressbar/dist/styles.css";
import SectionTitle from "../../sectionTitle";

function Users() {
  return (
    <div>
      <div className="container pb-80">
        <SectionTitle
          heading={"Our Achievements"}
          paragraph={
            <p>
               We have satisfied all our foremost clients by engineering
              <br />
              efficacious projects through our dynamically established teams
            </p>
          }
          portFolio="portfolio"
        />
        <div className="row mt-3">
          {completedProject.map((item) => {
            return (
              <div class="col-6 col-sm-6 col-md-6 col-lg-3  pt-5 ">
                <CircularProgressbar
                  value={item.value}
                  text={`${item.numbers}`}
                  background
                  backgroundPadding={6}
                  styles={buildStyles({
                    backgroundColor: item.bgcolor,
                    textColor: "#fff",
                    pathColor: "#fff",
                    trailColor: "transparent",
                  })}
                />
                <div className="project_title">
                  <h2>{item.title}</h2>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Users;
