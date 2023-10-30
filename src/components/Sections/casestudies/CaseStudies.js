import React, { useState, useEffect } from "react";
import SectionTitle from "../../sectionTitle";
import styles from "./style.module.css";
import { projects } from "./../../../helper/projects";
import Galleryimages from "./indeximages";

const Portfolio = ({ data, title }) => {
  const [newstate, setNewstate] = useState(projects[0]);
  const getPortfolioId = localStorage.getItem("portfolio_id");

  const filterData = (name) => {
    let filtered = projects.filter((item) => item.name === name);
    localStorage.setItem("portfolio_id", name);
    setNewstate(filtered);
  };

  useEffect(() => {
    filterData("App Development");
  }, []);

  return (
    <div className="container-fluid ptb-80">
      <SectionTitle heading={title} />
      <div className={`row d-flex justify-content-center`} style={{ gap: "20px" }}>
        {projects.map((items) => {
          return (
            <p
              key={items.name}
              className={
                getPortfolioId === items.name
                  ? `${styles.filterTabSelected}`
                  : `${styles.filterTab}`
              }
              onClick={() => filterData(items.name, items.id)}
            >
              {items.name}
            </p>
          );
        })}
      </div>
      <div className="row pt-5 mt-3" style={{ cursor: "pointer" }}>
        {newstate[0] &&
          newstate[0]?.childs?.map((item, index) => {
            let overlayClass = "";
            if (getPortfolioId === "App Development") {
              overlayClass = styles.tab1Overlay;
            } else if (getPortfolioId === "Web Development") {
              overlayClass = styles.tab2Overlay;
            } else if (getPortfolioId === "PCB Designing") {
              overlayClass = styles.tab3Overlay;
            }
            return (
              <div
                key={item.id}
                className="col-12 col-sm-6 col-md-6 col-lg-4 mt-2 mb-30"
              >
                  <div className={styles.imagesWrapper}>
                    <div className={`position-absolute w-100 d-flex flex-row justify-content-end `}>
                      
                    </div>
                    <div className={styles.imageContainer}>
                      <img
                        src={item?.image}
                        className={styles.portfolioimages}
                        alt="Background Image"
                        loading="lazy"
                      />
                      {item.projectUrl && (
                        <img
                          src={item.projectUrl}
                          className={` ${overlayClass}`}
                          alt="Overlay Image"
                          loading="lazy"
                        />
                      )}
                    </div>
                    <div className={`${styles.badge} text-center `}>
                        {item?.category}
                      </div>
                  </div>
                </div>
            );
          })}
      </div>
    </div>
  );
};

export default Portfolio;
