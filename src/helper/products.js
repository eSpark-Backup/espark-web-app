import image2 from "../assets/images/repair-banner-image/repair-shape-circle.png";
import image3 from "../assets/images/repair-banner-image/repair-shape1.png";
import image4 from "../assets/images/repair-banner-image/repair-shape2.png";

import man_and_women from "../assets/images/man-and-women.png";
import circle_1 from "../assets/images/circle-1.png";
import cta_shape_1 from "../assets/images/cta-shape-1.png";

const hash = () => {
  const s4 = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  };
  return `${s4()}${s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`;
};
const productItems = (id, heading, des, image1, image2, image3, bold) => {
  return {
    id: id,
    heading: heading,
    description: des,
    imgUrlMan: image1,
    imgUrlCircle: image2,
    imgUrlCta: image3,
    bold: bold,
  };
};
export const products = [
  {
    id: hash(),
    name: "Software",
    icon: "glyphicon glyphicon-upload"
  },
  {
    id: hash(),
    name: "Hardware",
    icon: "glyphicon glyphicon-download"

  },];