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
    image:
      "https://pbs.twimg.com/profile_images/1389671445953921029/8D3jABqV_400x400.jpg",
    name: "Julie King",
    designation: "Web developer needed to do a website build-out",
    commet: "Excellent experience, hope to hire again",
  },
  {
    _id: hash(),
    image:
      "https://pbs.twimg.com/profile_images/1389671445953921029/8D3jABqV_400x400.jpg",
    name: "Zealous SEO",
    designation: "WordPress Customization Help",
    commet: "Great WordPress builder, will work again",
  },
  {
    _id: hash(),
    image:
      "https://pbs.twimg.com/profile_images/1389671445953921029/8D3jABqV_400x400.jpg",
    name: "Briana Olson",
    designation: "Website WordPress specialist",
    commet:
      "Although the project was very short, they came in with the right attitude and delivered amazing results. Things that were blocking us were suddenly unblocked, and things that weren't clear were suddenly made clear. All thanks to their experience and knowledge. I would definitely recommend it!",
  },
  {
    _id: hash(),
    image:
      "https://pbs.twimg.com/profile_images/1389671445953921029/8D3jABqV_400x400.jpg",
    name: "jesper bendsen",
    designation: "Woocommerce",
    commet:
      " Great Job, reliable and quick developer. Good execution and ideas.",
  },
  {
    _id: hash(),
    image:
      "https://pbs.twimg.com/profile_images/1389671445953921029/8D3jABqV_400x400.jpg",
    name: "Gross2net",
    designation: "WordPress Site - CMS platform",
    commet:
      "Was very helpful and supportive...Did everything and even more as per the task requirements!",
  },
  {
    _id: hash(),
    image:
      "https://pbs.twimg.com/profile_images/1389671445953921029/8D3jABqV_400x400.jpg",
    name: "Conti di San Bonifacio",
    designation: "Ecommerce",
    commet:
      "Great Job, reliable and quick developer. Good execution and ideas.",
  },
];
