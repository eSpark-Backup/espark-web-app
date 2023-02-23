import React, { useState } from "react";
import { services } from "../../../helper/services";
import Button from "../../button/button";
import styles from "./style.module.css";

function BestServices() {
  let defaultValue = services[0].data;
  const [servicesJson, setServicesJson] = useState(defaultValue);

  const tabhandler = (data) => {
    console.log(data);
    setServicesJson({ ...data });
  };

  return (
    <>
      <div className="row">
      </div>
      <div className="row my-5 p-2 ">
        <div className="col-12 col-md-6">
          <div></div>
          <h2 className={styles.headingIOT}>{servicesJson.heading}</h2>
          <p className="my-3"> {servicesJson.shortDescription}</p>
          <p>{servicesJson.extraContent}​</p>
          <div className={`my-1 ${styles.textAlignLeft}`}>
            <Button title="Read More" link={""} design={2} />
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div>
            <img
              width={"98%"}
              src="https://s3-alpha-sig.figma.com/img/7631/f4ff/4b2f9937b3a12974e12e439cfcacb7ab?Expires=1678060800&Signature=C0SzNUQ7CLDlkx1J0hs0EWUO-UbAed0AiZpgZkydBhVLlhg7bbTHr6XHr0G-56hnB8O4S4A4fAMn-2t29gtDrESok5DGIHb~cJ0ZtxdZERHyL56K206aj8IMIXBZ2QJwiU3G3rEKoUzovT6NAXWzjcUVnXFn4uvc~Y2s0SmP1xA7z4c-yqAyozQG1XqdpJU1CiUL5YHKre4iZwLBomdQrIA2CmV~lmoSWFPrA5bSVStpD6cH6~suK2Xv1gSj6bnZjkyxaptiVsSSJt67X5grGEXOS0mI47gI1S4j14ynfSzrRB3vfjVIw71SnFzlrk7dgoSzm72XE-5LsXrEoXD5Cg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            ></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default BestServices;
