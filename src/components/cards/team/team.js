import React from "react";

function Team({ name, designation, imageUrl }) {
  return (
    <div className="single-team">
      <div className="team-image">
        <img
          src={
            imageUrl
              ? imageUrl
              : "https://png.pngtree.com/element_our/png/20181206/users-vector-icon-png_260862.jpg"
          }
          alt="image"
        />
      </div>
      <div className="team-content">
        <div className="team-info">
          <h3>{name}</h3>
          <span>{designation}</span>
        </div>
      </div>
    </div>
  );
}

export default Team;
