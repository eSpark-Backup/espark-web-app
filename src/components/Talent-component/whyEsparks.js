import React from "react";
import styles from "./style.module.css";
import { hiringWhyEspark } from "../../helper/whyEsparkTalent";
import CountUp, { useCountUp } from "react-countup";

const WhyeSparks = () => {
  useCountUp({
    ref: "counter",
    start: 10,
    end: 1234567,
    enableScrollSpy: true,
    scrollSpyDelay: 1000,
  });
  return (
    <div className={`container-fluid ${styles.hiringContainer}`}>
      {/* {/ <div className="row"> /} */}
      {hiringWhyEspark.map((items) => {
        return (
          <div>
            <div className={` ${styles.box}`}>
              <div>
                <img src={items.icon} className={styles.boxImage} alt="" />
              </div>
              <div className={styles.boxText} />
              <CountUp
                start={items.starts}
                end={items.ends}
                enableScrollSpy
                className={styles.boxText}
              />
            </div>
            <p className={styles.heading}>{items.text}</p>
          </div>
        );
      })}
      {/* {/ </div> /} */}
    </div>
  );
};

export default WhyeSparks;
