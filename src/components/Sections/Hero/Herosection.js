import React from "react";
import Button from "../../button/button";
import styles from "./style.module.css";
function Herosection({
  buttonText,
  buttonUrl,
  buttonDesign,
  ShowButton,
  paragraph,
  title,
  images,
  serviceClass,
  homeclass,
  animation,
  imgResize = false,
}) {
  return (
    <>
      <div className="ml-main-section">
        <div className="container-fluid">
          <div className="row">
            <div
              className={`${styles.headingColumn} col-lg-6 col-md-12 col-sm-12 .col-xl-4 `}
            >
              <div
                className={
                  serviceClass
                    ? `${styles.serviceText} ml-banner-content`
                    : "ml-banner-content"
                }
              >
                <h1 className={styles.heading}>{title}</h1>

                <p
                  className={`${styles.paraTexts}`}
                  dangerouslySetInnerHTML={{
                    __html: paragraph,
                  }}
                ></p>

                {ShowButton ? (
                  <Button
                    className={styles.button}
                    title={buttonText}
                    link={buttonUrl}
                    design={buttonDesign}
                  />
                ) : (
                  ""
                )}
              </div>
            </div>
            <div
              className={
                serviceClass
                  ? `animate__animated animate__fadeInDown animate__delay-1.5s col-lg-6 col-md-12 col-sm-12 text-center img-fluid `
                  : `animate__animated animate__fadeInDown animate__delay-1.5s col-lg-6 col-md-2 col-sm-12 .col-xl-8 text-center img-fluid  ${styles.imageHero}`
              }
            >
              {animation && (
                <p
                  className={styles.paraTexts}
                  dangerouslySetInnerHTML={{
                    __html: animation,
                  }}
                ></p>
              )}
              <img
                src={images}
                className={imgResize ? `${styles.hireimage}` : `${styles.images}`}
                alt="image"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.headingColumnMobile} col-sm-12 col-md-12`}>
        <div className="ml-banner-content p-20">
          <h1 className={styles.heading}>{title}</h1>

          <p className={`${styles.paraTexts} pb-3`}>{paragraph}</p>
          <div className="d-flex">
            {ShowButton ? (
              <Button
                className={styles.button}
                title={buttonText}
                link={buttonUrl}
                design={2}
              />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Herosection;
