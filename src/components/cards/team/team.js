import React from "react";

function Team({ name, designation, imageUrl, mainImage }) {
  return (
    // <div className="single-team">
    //   <div className="team-image">
    //     <img
    //       src={
    //         imageUrl
    //           ? imageUrl
    //           : "https://png.pngtree.com/element_our/png/20181206/users-vector-icon-png_260862.jpg"
    //       }
    //       alt="image"
    //     />
    //   </div>
    //   <div className="team-content">
    //     <div className="team-info">
    //       <h3>{name}</h3>
    //       <span>{designation}</span>
    //     </div>
    //   </div>
    // </div>
    <div className="profile-card">
      <div class="img">
        <img
          src={
            imageUrl
              ? imageUrl
              : "https://png.pngtree.com/element_our/png/20181206/users-vector-icon-png_260862.jpg"
          }
        />
      </div>
      <div class="caption">
        <h3>{name}</h3>
        <p>{designation}</p>
      </div>
    </div>
  );
}

export default Team;
