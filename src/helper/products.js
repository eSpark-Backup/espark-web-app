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

export const products = [
  {
    id: hash(),
    name: "Software Products",
    data: [
      {
        name: "",
        image: "",
        detail: "",
      },
    ],
  },
  {
    id: hash(),
    name: "Hardware Products",
    data: [
      {
        name: "",
        image: "",
        detail: "",
      },
    ],
  },
];
