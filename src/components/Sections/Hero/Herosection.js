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
}) {
  return (
    <>
      <div class="ml-main-section">
        <div class="container-fluid">
          <div class="row">
            <div
              class={`${styles.headingColumn} col-lg-6 col-md-12 col-sm-12 `}>
              <div
                class={
                  serviceClass
                    ? `${styles.serviceText} ml-banner-content`
                    : "ml-banner-content"
                }>
                <h1 className={styles.heading}>{title}</h1>

                <p
                  className={styles.paraTexts}
                  dangerouslySetInnerHTML={{
                    __html: paragraph,
                  }}></p>

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
              class={
                serviceClass
                  ? `${styles.service} animate__animated animate__fadeInDown animate__delay-1.5s col-lg-6 col-md-12 col-sm-12 text-center img-fluid `
                  : `animate__animated animate__fadeInDown animate__delay-1.5s col-lg-6 col-md-2 col-sm-12 text-center img-fluid  ${styles.imageHero}`
              }>
              <img src={images} class={`${styles.images}`} alt="image" />
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.headingColumnMobile} col-sm-12 col-md-12`}>
        <div class="ml-banner-content p-20">
          <h1 className={styles.heading}>{title}</h1>

          <p className={`${styles.paraText} pb-3`}>{paragraph}</p>
          <div className="d-flex">
            {ShowButton ? (
              <Button title={buttonText} link={buttonUrl} design={2} />
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
