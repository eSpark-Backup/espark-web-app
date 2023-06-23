import React from "react";
import { Link } from "react-router-dom";
import { MdAttachEmail } from "react-icons/md";

const ButtonMailto = ({ mailto, label, showIcon }) => {
  return (
    <Link
      to="#"
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => {
        window.location.href = `mailto:${mailto}`;
        e.preventDefault();
      }}
    >
      {showIcon && (
        <MdAttachEmail
          className="icon"
          size={22}
          style={{ marginRight: "5px" }}
        />
      )}
      <span
        style={{
          color: "#070707",
          fontSize: "18px",
          fontFamily: "Poppins",
          lineHeight: "100%",
        }}
      >
        {label}
      </span>
    </Link>
  );
};

ButtonMailto.defaultProps = {
  showIcon: true,
};

export default ButtonMailto;
