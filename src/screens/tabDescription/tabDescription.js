import React from "react";
import   "./tabDescription.css";
import '../../assets/css/responsive.css'

function TabDescription({ discrption, image, title }) {
  return (
    <div className="d-flex justify-content-center tabDiv" >
    <div className="tabWrapper">
      <p className= "txtDescription"  >{discrption}</p>
      <div className= "imgPlacement" >
        <img src={image} alt={title}   width={"100%"} height="100%"/>
      </div>
    </div>
     </div>
  );
}

export default TabDescription;
