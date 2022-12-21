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
        name: "eSpark Mobile Application",
        image:
          "https://startp-next.envytheme.com/images/iot-features-image/iot-feature-image1.png",
        detail:
          "<p>eSpark Consultants is a complete solution provider for modern software development imparting latest methods and techniques to tackle the increasing software advancements. We began our journey in 2015 and are working hard since then to bring a big smile on the face of our customers by making them visible among their competitors</p><br/><p>We are passionate about providing solutions that represent real value for money. We understand and believe you can’t afford to waste your investment for such a crucial aspect of your business by leaving it in the hands of amateurs. You are investing not only money, but your time when you decide to design and develop your project with us.</p><p>Times and conditions change so rapidly that we must keep our aim constantly focused on the future</p> <br/><p>CEO eSpark</p>",
        button: true,
        sectionId: 1,
        routeLink: "/espark-app",
      },
      {
        name: "eSpark Mobile Application",
        image:
          "https://startp-next.envytheme.com/images/iot-features-image/iot-feature-image1.png",
        detail:
          "<p>eSpark Consultants is a complete solution provider for modern software development imparting latest methods and techniques to tackle the increasing software advancements. We began our journey in 2015 and are working hard since then to bring a big smile on the face of our customers by making them visible among their competitors</p><br/><p>We are passionate about providing solutions that represent real value for money. We understand and believe you can’t afford to waste your investment for such a crucial aspect of your business by leaving it in the hands of amateurs. You are investing not only money, but your time when you decide to design and develop your project with us.</p><p>Times and conditions change so rapidly that we must keep our aim constantly focused on the future</p> <br/><p>CEO eSpark</p>",
        button: true,
        sectionId: 2,
        routeLink: "/espark-app",
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
