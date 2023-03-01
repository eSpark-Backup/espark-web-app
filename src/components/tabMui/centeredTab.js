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
        console.log(tabSelect, "iteeeeeeeeeeem");
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
            <h6
              className={
                tabSelect === item.id
                  ? `${styles.txtColorTab}`
                  : `${styles.txtColorTabs}`
              }
            >
              {item.title}
            </h6>
          </div>
        );
      })}
      {/* {services.map(item => <div className= {tabSelect == item.select ? `${styles.selectedTab}` :`${styles.cursorType}`} onClick ={()=>{cardHandler(item.id,item.childs)}} >
            <h3 className= {tabSelect == item.select ? `${styles.txtColorTab}` :`${styles.txtColorTabs}`} >{item.title}<br/>{item.select == 3 ? "Elementor Development":"Development"}</h3>
        </div>)} */}
    </div>
  );
}

export default CenteredTabs;
