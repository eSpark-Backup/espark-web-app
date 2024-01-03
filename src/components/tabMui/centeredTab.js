import React, { useEffect, useRef } from "react";
import styles from "./style.module.css";
import Slider from "react-slick";

function CenteredTabs({ cardHandler, tabSelect, tabData }) {
  const selectRef = useRef(null);
  const getId = localStorage.getItem("child_id");

  useEffect(() => {
    cardHandler(
      getId === null
        ? tabData[0]
        : tabData?.filter((item) => getId === item.name)[0]
    );
    if (selectRef.current) {
      selectRef.current.value = tabData[0].title;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getId, tabData, ]);

  const CustomNextArrow = ({ onClick }) => {
    return (
      <div onClick={onClick} className={styles.nextButtons}>
        <svg
          width="22"
          height="34"
          viewBox="0 0 22 34"
          fill="#11A79c"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.0769 1.84616L3.9231 17.2977L20.0769 31.4615"
            stroke="white"
            strokeWidth="5"
          />
        </svg>
      </div>
    );
  };

  const CustomPrevArrow = ({ onClick }) => {
    return (
      <div onClick={onClick} className={styles.prevButtons}>
        <svg
          width="22"
          height="34"
          viewBox="0 0 22 34"
          fill="#11A79c"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.92306 1.84619L18.0769 17.2977L1.92306 31.4616"
            stroke="white"
            strokeWidth="5"
          />
        </svg>
      </div>
    );
  };

  const settings = {
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 760,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: 0,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 566,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: 0,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: 0,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 340,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: 0,
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className={styles.centeredWrapper}>
        {tabData?.map((item) => {
          return (
            <div
              className={styles.selectedTab}
              onClick={() => {
                cardHandler(item);
                if (selectRef.current) {
                  selectRef.current.value = item.title;
                }
              }}
            >
              <p
                className={
                  tabSelect === item.name
                    ? `${styles.txtColorTab}`
                    : `${styles.txtColorTabs}`
                }
              >
                {item.title}
              </p>
              <div className={styles.barDiv}>
                {tabSelect === item.name && <hr className={styles.bar} />}
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.centeredWrapperMobile}>
        <div className={styles.sliderWrapper}>
          <Slider {...settings}>
            {tabData.map((item) => (
              <div className={styles.tabsButtonDiv}>
                <div
                  onClick={() => {
                    cardHandler(item);
                    if (selectRef.current) {
                      selectRef.current.value = item.title;
                    }
                  }}
                >
                  <p
                    className={
                      tabSelect === item.name
                        ? ` ${styles.SelectedtabsButton} `
                        : `${styles.tabsButton}`
                    }
                  >
                    {item.name}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default CenteredTabs;
