import React, { useEffect } from "react";
import tabs from "../../helper/tabs";
import styles from "./style.module.css";
import { services } from "./../../helper/services";

function CenteredTabs({ cardHandler, tabSelect, tabData }) {
  useEffect(() => {
    cardHandler(tabData[0]);
  }, [tabData]);

  return (
    <div className="d-flex justify-content-between">
      {tabData?.map((item) => {
        return (
          <div
            className={
              tabSelect === item.id
                ? `${styles.selectedTab}`
                : `${styles.cursorType}`
            }
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
          </div>
        );
      })}
    </div>
  );
}

export default CenteredTabs;
