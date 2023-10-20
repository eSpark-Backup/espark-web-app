import React, { useState, useEffect } from "react";
import SectionTitle from "../../sectionTitle";
import styles from "./style.module.css";
import { projects } from "./../../../helper/projects";
import Galleryimages from "./indeximages";

const Portfolio = ({ data, title }) => {
  const [newstate, setNewstate] = useState(projects[0]);
  const getPortfolioId = localStorage.getItem("portfolio_id");

  // const [imageArray, setImageArray] = useState([]);

  // const [open, setOpen] = useState(false);

  const filterData = (name) => {
    let filtered = projects.filter((item) => item.name === name);
    localStorage.setItem("portfolio_id", name);
    setNewstate(filtered);
  };
  useEffect(() => {
    filterData("App Development");
  }, []);
  // const openGallery = (item) => {
  //   setImageArray(item.imageArray);
  //   setOpen(true);
  // };

  return (
    <div className="container-fluid ptb-80">
      <SectionTitle heading={title} />
      <div className={`d-flex justify-content-around `}>
        {projects.map((items) => {
          return (
            <>
              <p
                className={
                  getPortfolioId === items.name
                    ? `${styles.filterTabSelected}`
                    : `${styles.filterTab}`
                }
                onClick={() => filterData(items.name, items.id)}
              >
                {items.name}
              </p>
            </>
          );
        })}
      </div>
      <div className="row pt-5 mt-3" style={{ cursor: "pointer" }}>
        {newstate[0] &&
          newstate[0]?.childs?.map((item) => {
            return (
              <div
                className="col-12 col-sm-6 col-md-6 col-lg-4 mt-2 mb-30"
                // onClick={() => openGallery(item)}
              >
                <div className={styles.wrapper}>
                  <div className={styles.imagesWrapper}>
                    <div
                      className={`position-absolute w-100 p-3 d-flex flex-row justify-content-end `}
                    >
                      <div className={`${styles.badge} text-center `}>
                        {item?.category}
                      </div>
                    </div>
                    <div className={styles.imageContainer}>
                      <img
                        src={item?.image}
                        className={styles.portfolioimages}
                        alt={"imagess"}
                      />
                    </div>
                  </div>
                  {/* <div className={styles.titleWrapper}>
                    <h3 className={` ${styles.titleText}`}>{item?.name}</h3>
                  </div> */}
                </div>
              </div>
            );
          })}
      </div>
      {/* <Galleryimages images={imageArray} open={open} setOpen={setOpen} /> */}
    </div>
  );
};

export default Portfolio;
