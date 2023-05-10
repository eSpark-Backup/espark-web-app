import React from 'react'
import styles from "./style.module.css";
import exactive4 from '../../assets/images/About-us-image/exective 4.png'
import exactive3 from '../../assets/images/About-us-image/exective 3.png'

const OurExecutives = () => {
  return (
    <div className="container-fluid my-2">
        <div class={`${styles.hexagone} my-4`}>
          <div class={styles.hexagoneBackground}>
            <div class="row ">
              <div class=" col-md-6 col-lg-3 aboutImgDiv">
                <img src={exactive4} className={styles.exactiveImage} />
              </div>
              <div class=" col-md-12 col-lg-9 aboutPara">
                <p className="exactiveHeading">lorem ipsom</p>
                <p className="exactivePra">
                  at, tincidunt ac nec Praesent non. Donec urna lacus, leo.
                  Quisque sit nisi non. elit Nullam fringilla fringilla
                  elementum quis tincidunt faucibus ullamcorper orci sit non Nam
                  Quisque eget Donec Cras tempor id turpis lobortis, Lorem eget
                  in consectetur Sed eu in ipsum convallis. Praesent eget
                  lobortis, nec tincidunt at, tincidunt ac nec Praesent non.
                  Donec urna lacus, leo. Quisque sit nisi non. elit Nullam
                  fringilla fringilla elementum quis tincidunt faucibus
                  ullamcorper
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class={styles.hexagoneRight}>
          <div class={styles.hexagoneBackground}>
            <div class="row ">
              <div class=" col-md-12 col-lg-9 aboutParaRight">
                <p className="exactiveHeading">lorem ipsom</p>
                <p className="exactivePra">
                  at, tincidunt ac nec Praesent non. Donec urna lacus, leo.
                  Quisque sit nisi non. elit Nullam fringilla fringilla
                  elementum quis tincidunt faucibus ullamcorper orci sit non Nam
                  Quisque eget Donec Cras tempor id turpis lobortis, Lorem eget
                  in consectetur Sed eu in ipsum convallis. Praesent eget
                  lobortis, nec tincidunt at, tincidunt ac nec Praesent non.
                  Donec urna lacus, leo. Quisque sit nisi non. elit Nullam
                  fringilla fringilla elementum quis tincidunt faucibus
                  ullamcorper
                </p>
              </div>
              <div class=" col-md-6 col-lg-3 aboutImgDiv Right">
                <img src={exactive3} className={styles.exactiveImage} />
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default OurExecutives;