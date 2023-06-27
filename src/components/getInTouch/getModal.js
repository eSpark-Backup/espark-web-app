import React from "react";
import { hireDevelopersDetails } from "../../helper/Talent";

const GetModal = ({ items, getid, handleDevTypeClick }) => {
  const final = hireDevelopersDetails.filter((item) => {
    return item.id === getid;
  });
  return (
    <div className="hireModalsContainer" id="developer">
      <div className="container">
        <div class="row gy-1 gx-1">
          {final.map((item) => {
            return (
              <>
                <div className="ImageContainer">
                  <img src={item.images} className="imagesHire" />
                </div>
                {item.btns &&
                  item.btns.map((btnItem, index) => (
                    <div className=" col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6 ">
                      <button key={index} onClick={() => handleDevTypeClick(btnItem.btn1)} className="developerBtn">
                        {btnItem.btn1}
                      </button>
                    </div>
                  ))}
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default GetModal;
