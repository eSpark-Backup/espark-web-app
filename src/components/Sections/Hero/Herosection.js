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
}) {
  return (
    <>
      <div class="ml-main-section">
        <div class="container">
          <div class="row">
            <div
              class={`${styles.headingColumn} col-lg-6 col-md-12 col-sm-12 `}
            >
              <div class="ml-banner-content">
                <h1 className={styles.heading}>{title}</h1>

                <p className={styles.paraText}>{paragraph}</p>

                {ShowButton === false ? null : (
                  <Button title={buttonText} link={buttonUrl} design={2} />
                )}
              </div>
            </div>

            <img
              src={images}
              alt="image"
              class="col-lg-6 col-md-12 col-sm-12 text-center"
            />
          </div>
        </div>
      </div>
      <div class={`${styles.headingColumnMobile}   col-sm-12`}>
        <div class="ml-banner-content">
          <h1 className={styles.heading}>{title}</h1>

          <p className={styles.paraText}>{paragraph}</p>
          <div className="d-flex ">
            {ShowButton === false ? null : (
              <Button title={buttonText} link={buttonUrl} design={2} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Herosection;
