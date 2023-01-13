import img_1 from '../assets/images/projects/img_1.png'
import img_2 from '../assets/images/projects/img_2.png'
import img_3 from '../assets/images/projects/img_3.png'
import img_4 from '../assets/images/projects/img_4.png'
import img_10 from '../assets/images/projects/img_10.png'
import img_13 from '../assets/images/projects/img_13.png'
import img_15 from '../assets/images/projects/img_15.png'
import img_16 from '../assets/images/projects/img_16.png'
import img_17 from '../assets/images/projects/img_17.png'
import img_18 from '../assets/images/projects/img_18.png'
import img_19 from '../assets/images/projects/img_19.png'
import img_23 from '../assets/images/projects/img_23.png'
import img_24 from '../assets/images/projects/img_24.png'
import img_26 from '../assets/images/projects/img_26.png'
import img_27 from '../assets/images/projects/img_27.png'
import img_29 from '../assets/images/projects/img_29.png'
import img_31 from '../assets/images/projects/img_31.png'
import img_34 from '../assets/images/projects/img_34.png'
import img_36 from '../assets/images/projects/img_36.png'
import img_45 from '../assets/images/projects/img_45.png'
import img_48 from '../assets/images/projects/img_48.png'
import img_49 from '../assets/images/projects/img_49.png'
import img_50 from '../assets/images/projects/img_50.png'
import img_53 from '../assets/images/projects/img_53.png'
import img_55 from '../assets/images/projects/img_55.png'
import img_56 from '../assets/images/projects/img_56.png'
import img_62 from '../assets/images/projects/img_62.png'
import img_63 from '../assets/images/projects/img_63.png'

const hash = () => {
  const s4 = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  };
  return `${s4()}${s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`;
};

export const projects = [
  {
    id: hash(),
    data: {
      name: "Alternative Asset",
      image: img_1,
      projectUrl: "https://alternative-asset.co.uk/",
    },
  },
  {
    id: hash(),
    data: {
      name: "Appolos's Boxing & Fitness",
      image: img_2,
      projectUrl: "https://www.apollosboxing.co.uk/",
    },
  },
  {
    id: hash(),
    data: {
      image: img_3,
      projectUrl: "https://billadvice.co.uk/",
      name: "Bill Advice",
    },
  },
  {
    id: hash(),
    data: {
      image: img_4,
      projectUrl: "https://cbe-uk.com/",
      name: "Custom Built Exhibitions",
    },
  },
  {
    id: hash(),
    data: {
      image: img_10,
      projectUrl: "https://cms-spares.co.uk/",
      name: "Corby Mechanical Services",
    },
  },
  {
    id: hash(),
    data: {
      image: img_13,
      projectUrl: "https://adaptgas.co.uk/",
      name: "Adapt Gas",
    },
  },
  {
    id: hash(),
    data: {
      image: img_15,
      projectUrl: "https://contidisanbonifacio.com/",
      name: "Conti Di San Bonifacio",
    },
  }
  ,
  {
    id: hash(),
    data: {
      image: img_16,
      projectUrl: "https://www.beonesolutions.com/",
      name: "Be One Soultions",
    },
  }
  ,
  {
    id: hash(),
    data: {
      image: img_17,
      projectUrl: "https://ionenergysolutions.com/",
      name: "Ion Energy Solutions.",
    },
  }
  ,
  {
    id: hash(),
    data: {
      image: img_18,
      projectUrl: "https://inteligex.com/",
      name: "Inteligex",
    },
  }
  ,
  {
    id: hash(),
    data: {
      image: img_19,
      projectUrl: "https://www.limetreelondon.com/",
      name: "Lime Tree london",
    },
  }
  ,
  {
    id: hash(),
    data: {
      image: img_23,
      projectUrl: "https://luner.io/",
      name: "Luner.io",
    },
  }
  ,
  {
    id: hash(),
    data: {
      image: img_24,
      projectUrl: "https://www.glitzygiftz.co.uk/",
      name: "Glitzy Giftz",
    },
  }
  , {
    id: hash(),
    data: {
      image: img_26,
      projectUrl: "https://livewellnutritionuk.com/",
      name: "Live Well Nutrition Uk",
    },
  }
  ,
  {
    id: hash(),
    data: {
      image: img_27,
      projectUrl: "https://hayletscommunicate.com/",
      name: "Hay Lets Communicate",
    },
  }
  ,
  {
    id: hash(),
    data: {
      image: img_29,
      projectUrl: "https://faithletsgrow.com/",
      name: "Faith Lets Grow",
    },
  }
  ,
  {
    id: hash(),
    data: {
      image: img_31,
      projectUrl: "https://emerynails.co.uk/",
      name: "Emery Nails Ltd",
    },
  },
  {
    id: hash(),
    data: {
      image: img_34,
      projectUrl: "https://www.livejournal.com/",
      name: "Live Journal",
    },
  }
  ,
  {
    id: hash(),
    data: {
      image: img_36,
      projectUrl: "https://supernovaweddingdesign.co.uk/",
      name: "Supernova Wedding Design",
    },
  }
  ,
  {
    id: hash(),
    data: {
      image: img_45,
      projectUrl: "https://www.seniorwaste.com/",
      name: "Senior Waste",
    },
  }
  ,
  {
    id: hash(),
    data: {
      image: img_48,
      projectUrl: "https://timeless-treatments.co.uk/",
      name: "Timeless Treatments",
    },
  }
  ,
  {
    id: hash(),
    data: {
      image: img_49,
      projectUrl: "https://www.profileplan.com/",
      name: "Profile Plan",
    },
  }
  ,
  {
    id: hash(),
    data: {
      image: img_50,
      projectUrl: "https://traveltradeready.net/",
      name: "Travel Trader Ready",
    },
  }
  ,
  {
    id: hash(),
    data: {
      image: img_53,
      projectUrl: "https://www.im4l.co.uk/",
      name: "Insure Me For Less",
    },
  }

  ,
  {
    id: hash(),
    data: {
      image: img_55,
      projectUrl: "https://shop-dnd.com/",
      name: "Shop Dnd",
    },
  }
  ,
  {
    id: hash(),
    data: {
      image: img_56,
      projectUrl: "https://www.themailingroom.com/",
      name: "The Mailing Room",
    },
  }
  ,
  {
    id: hash(),
    data: {
      image: img_62,
      projectUrl: "https://watt.co.uk/",
      name: "Watt",
    },
  }
  ,
  {
    id: hash(),
    data: {
      image: img_63,
      projectUrl: "https://the.badstar.studio/",
      name: "Badstar",
    },
  }
  ,
];
