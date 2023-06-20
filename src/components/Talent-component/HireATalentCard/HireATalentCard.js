import React, { useState } from "react";
import Slider from "react-slick";
import { hireDevelopers } from "../../../helper/hireATalent";
import styles from "./style.module.css";
import LeftSwipe from "../../../assets/images/hire-a-developer/LeftSwipe.svg";
import RightSwipe from "../../../assets/images/hire-a-developer/RightSwipe.svg";
import { Modal } from "react-responsive-modal";
import GetInTouch from "../../getInTouch/GetInTouch";
import GetModal from "../../getInTouch/getModal";
import Calendly from "../../CalendlyMeeting/calendly";

const HirATalentCard = () => {
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const [getid, setGetid] = useState('');
  const [showMeetingModal, setShowMeetingModal] = useState(false);
  const [devSelected, setDevSelected] = useState();

  const onOpenModal = (items) => {
    setOpen(true);
    // console.log("onclick ---->>" , items)
    setGetid(items.id)


    // setIsNavCollapsed(false);
    // setOpenDrawer(false);
  };
  console.log(getid, "onclick <<------");

  const onCloseModal = () => { setOpen(false); setShowMeetingModal(false); }



  const changeSlider = (sum) => {
    if (index == 5 && sum == 1) {
      setIndex(0);
    } else if (index == 0 && sum == -1) {
      setIndex(5);
    } else {
      setIndex(index + sum);
    }
  };

  const CustomNextArrow = ({ onClick }) => {
    return (
      <div onClick={onClick}>
        <img src={RightSwipe} className={styles.rightSlideBtn} />
      </div>
    );
  };

  const CustomPrevArrow = ({ onClick }) => {
    return (
      <div onClick={onClick}>
        <img src={LeftSwipe} className={styles.leftSlideBtn} />
      </div>
    );
  };

  const handleDevTypeClick = (devTitle) => {
    setDevSelected(devTitle);
    setShowMeetingModal(true);
  };

  const settings = {
    autoplay: false,
    autoplaySpeed: 3000,
    dots: false,
    initialSlide: 1,
    swipe: false,
    swipeToSlide: false,
    infinite: true,
    // speed: 3000,
    slidesToShow: 4,
    slidesToScroll: 4,
    centerMode: false,
    centerPadding: -10,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 2560,
        settings: {
          slidesToShow: 4,
          arrows: true,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode: true,
          centerPadding: -10,
        },
      },
      {
        breakpoint: 1900,
        settings: {
          slidesToShow: 3,
          arrows: true,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: true,
          draggable: true,
          swipe: true,
        },
      },
      {
        breakpoint: 1196,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: true,
          draggable: true,
          swipe: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: true,
          draggable: true,
          swipe: true,
        },
      },
      {
        breakpoint: 786,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: true,
          draggable: true,
          swipe: true,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: true,
          draggable: true,
          swipe: true,
        },
      },
    ],
  };

  return (
    <>
      <div className="my-5">
        <div className="container-fluid">
          <div className={`row ${styles.desktop}`}>
            {hireDevelopers.map((items) => {
              return (
                <div className={`my-2 mx-auto ${styles.hireDevContainer}`}>
                  <div className={styles.hireDevContents}>
                    <p className={styles.hireDevHeading}>{items.title}</p>
                    <p className={`hireDevPara ${styles.hireDevPara}`}>{items.descriptions}</p>
                  </div>
                  <div className={styles.hireTalent}>
                    <button
                      className={styles.hireDevButton}
                      // onClick={() => onOpenModal(items)}
                      onClick={() => onOpenModal(items)}

                    >
                      Hire a Talent
                    </button>
                  </div>

                </div>
              );
            })}
          </div>
        </div>
        <div className={`${styles.mobile}`}>
          <Slider {...settings}>
            {hireDevelopers.map((item) => (
              <div>
                <div className={styles.hireDevContainer}>
                  <div className={styles.hireDevContents}>
                    <p className={styles.hireDevHeading}>{item.title}</p>
                    <p className={styles.hireDevPara}>{item.descriptions}</p>
                  </div>
                  <div className={styles.hireTalent}>
                    <button
                      className={styles.hireDevButton}
                      // onClick={() => onOpenModal(item)}
                      onClick={() => onOpenModal(item)}
                    >
                      Hire a Talent
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <Modal open={open} onClose={onCloseModal} showCloseIcon={false} center>
        {/* <GetInTouch modal={true} modelClose={(e) => setOpen(e)} /> */}
        {showMeetingModal ? <Calendly devSelected={devSelected}/> : <GetModal modal={true} modelClose={(e) => setOpen(e)} getid={getid} handleDevTypeClick={handleDevTypeClick} />}
      </Modal>
    </>
  );
};

export default HirATalentCard;
