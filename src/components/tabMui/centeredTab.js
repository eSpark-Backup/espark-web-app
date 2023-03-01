import React, { useEffect } from "react";
import styles from "./style.module.css";

function CenteredTabs({ cardHandler, tabSelect, tabData }) {
  useEffect(() => {
    cardHandler(tabData[0]);
  }, [tabData]);

  return (
    <div className={styles.centeredWrapper}>
      {tabData?.map((item) => {
        return (
          <div
            className={styles.selectedTab}
            onClick={() => {
              cardHandler(item);
            }}
          >
            <p
              className={
                tabSelect === item.id
                  ? `${styles.txtColorTab}`
                  : `${styles.txtColorTabs}`
              }
            >
              {item.title}
            </p>
            <div className={styles.barDiv}>{tabSelect === item.id && <hr className={styles.bar} />}</div>
          </div>
        );
      })}
    </div>
  );
}

export default CenteredTabs;
