import image2 from "../assets/images/repair-banner-image/repair-shape-circle.png";
import image3 from "../assets/images/repair-banner-image/repair-shape1.png";
import image4 from "../assets/images/repair-banner-image/repair-shape2.png";

import man_and_women from "../assets/images/man-and-women.png";
import circle_1 from "../assets/images/circle-1.png";
import cta_shape_1 from "../assets/images/cta-shape-1.png";




import work_img_1 from "../assets/images/works-image/works-image1.jpg";
import work_img_2 from "../assets/images/works-image/works-image2.jpg";
import work_img_3 from "../assets/images/works-image/works-image3.jpg";
import work_img_4 from "../assets/images/works-image/works-image4.jpg";
import work_img_5 from "../assets/images/works-image/works-image5.jpg";
import work_img_6 from "../assets/images/works-image/works-image6.jpg";

import Team_1 from '../assets/images/team-image/team1.jpg'

const hash = () => {
  const s4 = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  };
  return `${s4()}${s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`;
};

const projectsItems = (id, heading, des) => {
  return {
    id: id,
    heading: heading,
    description: des,
  };
};

const projectsDetails = (id, imgUrl, heading,paragraph,btnName) => {
  return {
    id: id,
    img: imgUrl,
    heading: heading,
    paragraph:paragraph,
    btnName:btnName
  };
};
const carouselDetails = (id, imgUrl, name, h3_span, h3_span2, paragraph) => {
  return {
    id: id,
    img: imgUrl,
    name:name,
    h3_span:h3_span,
    h3_span2:h3_span2,
    paragraph:paragraph
  };
};

export const projects = [
  {
    id: hash(),
    name: "Seek Social",
    data: {
      image: work_img_1,
      content: [
        projectsItems(
          1,
          "Seek Social",
          "Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.",
        )
      ],
      details:[
        projectsDetails(1,work_img_1,"Leading Big Data Analytics Company","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.","Get Started")
      ],
      carousel:[
        carouselDetails(1,work_img_1, "Josh Butler", "Marketing", 'Manager', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua')
      ]
    },
  },
  {
    id: hash(),
    name: "Shop & Great",
    data: {
      image: [
        work_img_2,
      ],
      content: [
        projectsItems(
          2,
          "Shop & Great",
          "Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.",
        )
      ],
      details:[
        projectsDetails(1, work_img_2, "Leading Big Data Analytics Company","Leading Big Data Analytics Company","Get Started")
      ],
      carousel:[
        carouselDetails(2,work_img_2, "Butler", "Marketing", 'Manager', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua')
      ]
     },
  },
  {
    id: hash(),
    name: "Sazgar",
    data: {
      image: [
        work_img_3,
      ],
      content: [
        projectsItems(
          3,
          "Sazgar",
          "Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.",
        )
      ],
      details:[
        projectsDetails(3,work_img_3,"Leading Big Data Analytics Company","Leading Big Data Analytics Company","Get Started")
      ] ,
      carousel:[
        carouselDetails(3,work_img_3, "Butler", "Marketing", 'Manager', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua')
      ] },
  },


];
