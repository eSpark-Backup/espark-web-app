import React from "react";
import Button from "../../button/button";
import styles from "./style.module.css";
function Herosection({buttonText, buttonUrl, ShowButton, heading1, paragraph, title, images}) {
  return (
    <div class="ml-main-section">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-12">
            <div class="ml-banner-content">
              <h1 className={styles.heading}>{title}</h1>

              <p className={styles.paraText}>
                {paragraph}
              </p>

              {ShowButton === false ? null : (
                <Button title={buttonText} link={buttonUrl} design={2} />
              )}
            </div>
          </div>
          <div class="col-lg-6 col-md-12">
            <img src={images} alt="image" />
          </div>
        </div>
      </div>
    </div>
 
  );
}

export default Herosection;
