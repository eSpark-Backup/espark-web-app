import React, { useState, useEffect } from "react";
import SectionTitle from "../../sectionTitle";
import styles from "./style.module.css";
import { projects } from "./../../../helper/projects";
import { Modal } from "react-responsive-modal";
import GetInTouch from "../../getInTouch/GetInTouch";
import MyGallery from "./indexgel";
import Gallery from ".";
import WSPGallery from "./WSPGallery";

const Portfolio = ({ data, title }) => {
  const [newstate, setNewstate] = useState(projects[0]);
  const getPortfolioId = localStorage.getItem("portfolio_id");

  const [openDrawer, setOpenDrawer] = useState(false);

  const [open, setOpen] = useState(false);
  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  const filterData = (name) => {
    let filtered = projects.filter((item) => item.name === name);
    localStorage.setItem("portfolio_id", name);
    setNewstate(filtered);
  };
  useEffect(() => {
    filterData("Software Service");
  }, []);
  const onOpenModal = () => {
    setOpen(true);
    toggleDrawer();
  };
  const onCloseModal = () => setOpen(false);

  const galleryImages = [
    ...(projects[0]?.childs?.map((items) => ({
      img: items.image,
    })) || []),
  ];
  // {
  //   img: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  // },
  // {
  //   img: "https://images.pexels.com/photos/3861458/pexels-photo-3861458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  // },
  // {
  //   img: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  // },
  // {
  //   img: "https://images.pexels.com/photos/1194713/pexels-photo-1194713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  // },
  // {
  //   img: "https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  // },
  // {
  //   img: "https://images.pexels.com/photos/1712/sunglasses-apple-iphone-desk.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  // },

  return (
    <div className="container ptb-80">
      <SectionTitle heading={title} />
      <div className={`d-flex justify-content-around `}>
        {projects.map((items) => {
          console.log("------------============", items);
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
      <div className="row pt-5 mt-3 ">
        {newstate[0] &&
          newstate[0]?.childs?.map((item) => {
            // console.log(item);
            return (
              <div className="col-12 col-sm-6 col-md-6 col-lg-4 mt-2 mb-30">
                {/* <a href={item?.projectUrl} target="_blank"> */}
                <div className={styles.wrapper}>
                  <div className={styles.imagesWrapper} onClick={onOpenModal}>
                    <img
                      src={item?.image}
                      className={styles.images}
                      alt={"image"}
                    />
                    <div className={`${styles.middleText}`}>
                      <div className={styles.OverlayText}>{item?.category}</div>
                    </div>
                    {/* <div className={`${styles.middleImg}`}>
                      <div>
                        <img
                          src={item?.overlayImage}
                          className={styles.OverlayImage}
                          alt={"image"}
                        />
                      </div>
                    </div> */}
                  </div>
                  <div className={styles.titleWrapper}>
                    <h3 className={` ${styles.titleText}`}>{item?.name}</h3>
                  </div>
                </div>
                {/* </a> */}
                <div className={styles.modals}></div>
                <Modal
                  open={open}
                  onClose={onCloseModal}
                  center
                  className={styles.modalsss}
                >
                  {/* <Gallery modal={true} modelClose={(e) => setOpen(e)} /> */}
                  <MyGallery modal={true} modelClose={(e) => setOpen(e)} />
                  {/* <WSPGallery
                    galleryImages={galleryImages}
                    modal={true}
                    modelClose={(e) => setOpen(e)}
                  /> */}
                  &nbsp;
                </Modal>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Portfolio;
