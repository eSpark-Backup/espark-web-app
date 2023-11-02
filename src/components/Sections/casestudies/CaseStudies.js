import React, { useState, useEffect } from "react";
import SectionTitle from "../../sectionTitle";
import styles from "./style.module.css";
import { projects } from "./../../../helper/projects";
import Galleryimages from "./indeximages";

const Portfolio = ({ data, title }) => {
  const [newstate, setNewstate] = useState(projects[0]);
  const getPortfolioId = localStorage.getItem("portfolio_id");
  const prevPortfolioId = localStorage.getItem("prev_portfolio_id");

  const filterData = (name) => {
    let filtered = projects.filter((item) => item.name === name);
    localStorage.setItem("prev_portfolio_id", getPortfolioId);
    localStorage.setItem("portfolio_id", name);
    setNewstate(filtered);
  };

  useEffect(() => {
    filterData("App Development");
  }, []);

  // Determine the appropriate overlayClass based on the previous and current tab
  const determineOverlayClass = () => {
    if (prevPortfolioId === "App Development") {
      if (getPortfolioId === "Web Development") {
        return styles.appToWebOverlay;
      } else if (getPortfolioId === "PCB Designing") {
        return styles.appToPCBOverlay;
      }
    } else if (prevPortfolioId === "Web Development") {
      if (getPortfolioId === "App Development") {
        return styles.webToAppOverlay;
      } else if (getPortfolioId === "PCB Designing") {
        return styles.webToPCBOverlay;
      }
    } else if (prevPortfolioId === "PCB Designing") {
      if (getPortfolioId === "App Development") {
        return styles.pcbToAppOverlay;
      } else if (getPortfolioId === "Web Development") {
        return styles.pcbToWebOverlay;
      }
    }
    return styles.appdefault; // Default overlay class
    
  };

  return (
    <div className="container-fluid ptb-80">
      <div style={{marginBottom:"-60px"}}>
      <SectionTitle heading={title} />
      </div>
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
            const overlayClass = determineOverlayClass();
            return (
              <div key={item.id} className="col-12 col-sm-6 col-md-6 col-lg-4 mt-2 mb-30">
                <div className={styles.imagesWrapper}>
                  <div className={`position-absolute w-100 d-flex flex-row justify-content-end `}>
                  </div>
                  <div className={styles.imageContainer}>
                    <img
                      src={item?.image}
                      className={styles.portfolioimages}
                      alt="Background Image"
                      loading="eager"
                    />
                    {item.projectUrl && (
                      <img
                        src={item.projectUrl}
                        className={` ${overlayClass}`}
                        alt="Overlay Image"
                        loading="eager"
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
