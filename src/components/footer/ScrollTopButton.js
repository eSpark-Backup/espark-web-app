import React from "react";
import scrollToTop from "./ScrollToTop";
import { AiOutlineArrowUp } from "react-icons/ai";

const ScrollToTop = () => {
  React.useEffect(() => {
    scrollToTop();
  }, []);
  return (
    <div className="rn-progress-parent">
      <AiOutlineArrowUp className="svg-inner" size={22} />
    </div>
  );
};

export default ScrollToTop;
