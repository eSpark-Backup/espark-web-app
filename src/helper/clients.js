import upWork from "../assets/images/upwork.png";

const hash = () => {
  const s4 = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  };
  return `${s4()}${s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`;
};

export const clients = [
  {
    _id: hash(),
    image: upWork,
    name: "Julie King",
    designation: "Web developer needed to do a website build-out",
    testimonial: "Excellent experience, hope to hire again",
  },
  {
    _id: hash(),
    image: upWork,
    name: "Zealous SEO",
    designation: "WordPress Customization Help",
    testimonial: "Great WordPress builder, will work again",
  },
  {
    _id: hash(),
    image: upWork,
    name: "Briana Olson",
    designation: "Website WordPress specialist",
    testimonial:
      "Although the project was very short, they came in with the right attitude and delivered amazing results.",
  },
  {
    _id: hash(),
    image: upWork,
    name: "jesper bendsen",
    designation: "Woocommerce",
    testimonial:
      " Great Job, reliable and quick developer. Good execution and ideas.",
  },
  {
    _id: hash(),
    image: upWork,
    name: "Gross2net",
    designation: "WordPress Site - CMS platform",
    testimonial:
      "Was very helpful and supportive...Did everything and even more as per the task requirements!",
  },
  {
    _id: hash(),
    image: upWork,
    name: "Conti di San Bonifacio",
    designation: "Ecommerce",
    testimonial:
      "Great Job, reliable and quick developer. Good execution and ideas.",
  },
];
