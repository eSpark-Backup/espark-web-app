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

const serviceItems = (id, heading, des, image1, image2, image3) => {
  return {
    id: id,
    heading: heading,
    description: des,
    imgUrlMan: image1,
    imgUrlCircle: image2,
    imgUrlCta: image3,
  };
};

export const services = [
  {
    id: hash(),
    icon: "",
    name: "Web Development",
    data: {
      image: [
        "https://i.pinimg.com/originals/5c/31/e0/5c31e0344d4204044cf874b0b1489b82.jpg",
        image2,
        image3,
        image4,
      ],
      content: [
        serviceItems(
          1,
          "SEO Friendly website",
          "We can create for you a beautiful SEO friendly website that can boost up your sales and website traffic. We have assisted various businesses who have asked us to develop a website for them that would allow them to recognize a new place for their brand.",
          man_and_women,
          circle_1,
          cta_shape_1
        ),
        serviceItems(
          2,
          "COST EFFECTIVE SOLUTIONS",
          "We provide you with cost effective solutions for your website. We know how important it is for your business to have proper traffic and properly defines your brand therefore we develop a proper strategy for the future growth of your website.",
          man_and_women,
          cta_shape_1,
          circle_1
        ),
        serviceItems(
          3,
          "Taking care of your business",
          "The Websites we create are optimized. Our Agile Methodology of development is proven and effective. No worrying as we have an expert web development team. Our web developers are experienced and certified. We build responsive websites that auto adapt to device screens",
          man_and_women,
          "",
          cta_shape_1
        ),
      ],
      shortDescription:
        "<p>If you need an app developing, a partial- or full-custom website, or anything in between – eSpark Consulting and our development experts have you covered!<br/> <br/><strong>A website with a perfect design is incomplete without the high- quality website development.</strong></p><p>As you know our technology is advancing day by day and businesses are also making effectual use of technology. Everyone requires a website that possesses creative and eye-catching layouts and designs that attract users and appeal them to go with it.</p>",
      extraContent: "",
      heading: "Strengthening your web connections",
    },
  },
  {
    id: hash(),
    icon: "",
    name: "UI UX Design",
    data: {
      image: [
        "https://i.pinimg.com/originals/17/96/9e/17969e50ddb959b1a9fb3020d835f2e4.png",
        image2,
        image3,
        image4,
      ],
      content: [],
      shortDescription: "hekjkljdkljsklajdkljaskdjklj",
      extraContent: "",
      heading: "",
    },
  },
  {
    id: hash(),
    icon: "",
    name: "Web Design",
    data: {
      image: [
        "https://images.ctfassets.net/gg4ddi543f5b/7AHjFKPTt6B5ZwI8oI52rN/862db70ca26d7a72ce642932527e252d/web-design-workflow-blog.png",
        image2,
        image3,
        image4,
      ],
      content: [],
      shortDescription: "hekjkljdkljsklajdkljaskdjklj",
      extraContent: "",
      heading: "",
    },
  },
  {
    id: hash(),
    icon: "",
    name: "Digital e-Commerce",
    data: {
      image: [
        "https://startp-next.envytheme.com/images/agency-image/agency-services-img3.jpg",
        image2,
        image3,
        image4,
      ],
      content: [],
      shortDescription: "hekjkljdkljsklajdkljaskdjklj",
      extraContent: "",
      heading: "",
    },
  },
  {
    id: hash(),
    icon: "",
    name: "Digital Marketing",
    data: {
      image: [
        "https://site.paytabs.com/wp-content/uploads/2017/10/shutterstock_394814632.jpg",
        image2,
        image3,
        image4,
      ],
      content: [],
      shortDescription: "hekjkljdkljsklajdkljaskdjklj",
      extraContent: "",
      heading: "",
    },
  },
  {
    id: hash(),
    icon: "",
    name: "Graphic Design",
    data: {
      image: [
        "https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JhcGhpYyUyMGRlc2lnbnxlbnwwfHwwfHw%3D&w=1000&q=80",
        image2,
        image3,
        image4,
      ],
      content: [],
      shortDescription: "hekjkljdkljsklajdkljaskdjklj",
      extraContent: "",
      heading: "",
    },
  },
  {
    id: hash(),
    icon: "",
    name: "Content Writing",
    data: {
      image: [
        "https://www.feedough.com/wp-content/uploads/2022/05/Content-writing.png",
        image2,
        image3,
        image4,
      ],
      content: [],
      shortDescription: "hekjkljdkljsklajdkljaskdjklj",
      extraContent: "",
      heading: "",
    },
  },
  {
    id: hash(),
    icon: "",
    name: "Search Engine Optimization",
    data: {
      image: [
        "https://www.gomage.com/m1wp/wp-content/uploads/2020/04/Search-Engine-Optimization-Techniques_-5-Basic-Strategies.png",
        image2,
        image3,
        image4,
      ],
      content: [],
      shortDescription: "hekjkljdkljsklajdkljaskdjklj",
      extraContent: "",
      heading: "",
    },
  },
  {
    id: hash(),
    icon: "",
    name: "IT Consulting",
    data: {
      image: [
        "https://startp-next.envytheme.com/images/agency-image/agency-services-img1.jpg",
        image2,
        image3,
        image4,
      ],
      content: [],
      shortDescription: "hekjkljdkljsklajdkljaskdjklj",
      extraContent: "",
      heading: "",
    },
  },
  {
    id: hash(),
    icon: "",
    name: "IoT Product Development including Technical Support",
    data: {
      image: [
        "https://startp-next.envytheme.com/images/about2.jpg",
        image2,
        image3,
        image4,
      ],
      content: [],
      shortDescription: "hekjkljdkljsklajdkljaskdjklj",
      extraContent: "",
      heading: "",
    },
  },
  {
    id: hash(),
    icon: "",
    name: "PCB Layout and Designing",
    data: {
      image: [
        "https://startp-next.envytheme.com/images/agency-image/agency-services-img6.jpg",
        image2,
        image3,
        image4,
      ],
      content: [],
      shortDescription: "hekjkljdkljsklajdkljaskdjklj",
      extraContent: "",
      heading: "",
    },
  },
  {
    id: hash(),
    icon: "",
    name: "Embedded Firmware Development",
    data: {
      image: [
        "https://startp-next.envytheme.com/images/bigdata-analytics/discover-img1.png",
        image2,
        image3,
        image4,
      ],
      content: [],
      shortDescription: "hekjkljdkljsklajdkljaskdjklj",
      extraContent: "",
      heading: "",
    },
  },
  {
    id: hash(),
    icon: "",
    name: "Electrical Schematic Design",
    data: {
      image: [
        "https://startp-next.envytheme.com/images/agency-image/agency-services-img1.jpg",
        image2,
        image3,
        image4,
      ],
      content: [],
      shortDescription: "hekjkljdkljsklajdkljaskdjklj",
      extraContent: "",
      heading: "",
    },
  },
  {
    id: hash(),
    icon: "",
    name: "Reverse Engineering",
    data: {
      image: [
        "https://startp-next.envytheme.com/images/agency-image/agency-services-img1.jpg",
        image2,
        image3,
        image4,
      ],
      content: [],
      shortDescription: "hekjkljdkljsklajdkljaskdjklj",
      extraContent: "",
      heading: "",
    },
  },
  {
    id: hash(),
    icon: "",
    name: "PCB Manufacturing and Mass Production",
    data: {
      image: [
        "https://startp-next.envytheme.com/images/agency-image/agency-services-img1.jpg",
        image2,
        image3,
        image4,
      ],
      content: [],
      shortDescription: "hekjkljdkljsklajdkljaskdjklj",
      extraContent: "",
      heading: "",
    },
  },
  {
    id: hash(),
    icon: "",
    name: "Part Searching and Analysis",
    data: {
      image: [
        "https://startp-next.envytheme.com/images/agency-image/agency-services-img1.jpg",
        image2,
        image3,
        image4,
      ],
      content: [],
      shortDescription: "hekjkljdkljsklajdkljaskdjklj",
      extraContent: "",
      heading: "",
    },
  },
  {
    id: hash(),
    icon: "",
    name: "Components Library Design",
    data: {
      image: [
        "https://startp-next.envytheme.com/images/agency-image/agency-services-img1.jpg",
        image2,
        image3,
        image4,
      ],
      content: [],
      shortDescription: "hekjkljdkljsklajdkljaskdjklj",
      extraContent: "",
      heading: "",
    },
  },
];
