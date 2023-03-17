import React, { useState,useEffect } from "react";
import SectionTitle from "../../sectionTitle";
import styles from "./style.module.css";
import { projects } from "./../../../helper/projects";

const Portfolio = ({ data, title }) => {

  const [newstate, setNewstate] = useState(projects[0])
  const getPortfolioId = localStorage.getItem('portfolio_id')

  const filterData = (name) => {
    let filtered =  projects.filter((item) =>item.name === name)
    localStorage.setItem('portfolio_id', name)
    setNewstate(filtered)
   };
  useEffect(()=>{
    filterData("Software Service")
  },[])
  return (
    <div className="container ptb-80">
      <SectionTitle heading={title} />
      <div className="d-flex justify-content-around">
        {projects.map((items) => {
          return (
            <>
              <p
                className={
                  getPortfolioId  === items.name
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
      <div className="row pt-5 mt-3 ">
        {newstate[0] && newstate[0]?.childs?.map((item) => {
          return (
            <div className="col-sm-6 col-md-4 col-lg-4 mt-2 mb-30">
              <a href={item?.projectUrl} target="_blank">
                <div className={styles.wrapper}>
                  <div className={styles.imagesWrapper}>
                    <img
                      src={item?.image}
                      className={styles.images}
                      alt={"image"}
                    />
                  </div>
                  <div className={styles.titleWrapper}>
                    <h3 className={styles.titleText}>{item?.name}</h3>
                  </div>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
