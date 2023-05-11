import React from "react";
import styles from "./style.module.css";
import exactive4 from "../../assets/images/About-us-image/exective 4.png";
import exactive3 from "../../assets/images/About-us-image/exective 3.png";

const OurExecutives = () => {
  return (
    <div>
      <div className={`container-fluid  my-2 ${styles.fullscreen} `}>
        <div class={`${styles.hexagone} my-4`}>
          <div class={styles.hexagoneBackground}>
            <div class="row ">
              <div
                class={`col-12 col-sm-12 col-md-12 col-lg-4 ${styles.aboutImgDiv}`}
              >
                <img src={exactive4} className={styles.exactiveImage} />
              </div>
              <div
                class={` col-12 col-sm-12 col-md-12 col-lg-8 ${styles.aboutParaLeft}`}
              >
                <p className={styles.exactiveHeading}>Lorem Ipsom</p>
                <p className={styles.exactivePra}>
                  at, tincidunt ac nec Praesent non. Donec urna lacus, leo.
                  Quisque sit nisi non. elit Nullam fringilla fringilla
                  elementum quis tincidunt faucibus ullamcorper <br /> <br />{" "}
                  orci sit non Nam Quisque eget Donec Cras tempor id turpis
                  lobortis, Lorem eget in consectetur Sed eu in ipsum convallis.
                  Praesent eget lobortis, nec tincidunt at, tincidunt ac nec
                  Praesent non. Donec urna lacus, leo. Quisque sit nisi non.
                  elit Nullam fringilla fringilla elementum quis tincidunt
                  faucibus ullamcorper
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class={`${styles.hexagoneRight} `}>
          <div class={styles.hexagoneBackground}>
            <div class="row ">
              <div
                class={` col-sm-12 col-md-8 col-lg-8 ${styles.aboutParaRight}`}
              >
                <p className={styles.exactiveHeadingRight}>Lorem Ipsom</p>
                <p className={styles.exactivePraRight}>
                  at, tincidunt ac nec Praesent non. Donec urna lacus, leo.
                  Quisque sit nisi non. elit Nullam fringilla fringilla
                  elementum quis tincidunt faucibus ullamcorper <br /> <br />{" "}
                  orci sit non Nam Quisque eget Donec Cras tempor id turpis
                  lobortis, Lorem eget in consectetur Sed eu in ipsum convallis.
                  Praesent eget lobortis, nec tincidunt at, tincidunt ac nec
                  Praesent non. Donec urna lacus, leo. Quisque sit nisi non.
                  elit Nullam fringilla fringilla elementum quis tincidunt
                  faucibus ullamcorper
                </p>
              </div>
              <div
                className={`col-sm-12 col-md-4 col-lg-4 ${styles.aboutImgDiv}`}
              >
                <img src={exactive3} className={styles.exactiveImageRight} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurExecutives;
