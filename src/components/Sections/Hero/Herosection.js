import React from "react";
import Button from "../../button/button";
import styles from "./style.module.css";
function Herosection({
  buttonText,
  buttonUrl,
  ShowButton,
  heading1,
  paragraph,
  title,
  images,
  serviceClass,
}) {
  return (
    <>
      <div class="ml-main-section">
        <div class="container-fluid">
          <div class="row">
            <div class={`${styles.headingColumn} col-lg-5 col-md-12 col-sm-12`}>
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
                  <Button title={buttonText} link={buttonUrl} design={13} />
                ) : (
                  ""
                )}
              </div>
            </div>
            <div
              class={
                serviceClass
                  ? `${styles.service} animate__animated animate__fadeInDown animate__delay-1.5s col-lg-6 col-md-12 col-sm-12 text-center `
                  : `animate__animated animate__fadeInDown animate__delay-1.5s col-lg-7 col-md-2 col-sm-12 text-center `
              }>
              <img src={images} class={styles.image} alt="image" />
            </div>
          </div>
        </div>
      </div>
      <div class={`${styles.headingColumnMobile} col-sm-12`}>
        <div class="ml-banner-content">
          <h1 className={styles.heading}>{title}</h1>

          <p className={styles.paraText}>{paragraph}</p>
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
