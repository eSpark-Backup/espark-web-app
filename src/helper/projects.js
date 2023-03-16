import img_1 from "../assets/images/projects/img_1.png";
import img_2 from "../assets/images/projects/img_2.png";
import img_3 from "../assets/images/projects/img_3.png";
import img_4 from "../assets/images/projects/img_4.png";
import img_10 from "../assets/images/projects/img_10.png";
import img_13 from "../assets/images/projects/img_13.png";
import img_15 from "../assets/images/projects/img_15.png";
import img_16 from "../assets/images/projects/img_16.png";
import img_17 from "../assets/images/projects/img_17.png";
import img_18 from "../assets/images/projects/img_18.png";
import img_19 from "../assets/images/projects/img_19.png";
import img_23 from "../assets/images/projects/img_23.png";
import img_24 from "../assets/images/projects/img_24.png";
import img_26 from "../assets/images/projects/img_26.png";
import img_27 from "../assets/images/projects/img_27.png";
import img_29 from "../assets/images/projects/img_29.png";
import img_31 from "../assets/images/projects/img_31.png";
import img_34 from "../assets/images/projects/img_34.png";
import img_36 from "../assets/images/projects/img_36.png";
import img_45 from "../assets/images/projects/img_45.png";
import img_48 from "../assets/images/projects/img_48.png";
import img_49 from "../assets/images/projects/img_49.png";
import img_50 from "../assets/images/projects/img_50.png";
import img_53 from "../assets/images/projects/img_53.png";
import img_55 from "../assets/images/projects/img_55.png";
import img_56 from "../assets/images/projects/img_56.png";
import img_62 from "../assets/images/projects/img_62.png";
import img_63 from "../assets/images/projects/img_63.png";

const hash = () => {
  const s4 = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  };
  return `${s4()}${s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`;
};
const projectItems = (image, projectUrl, name) => {
  return {
    id: hash(),
    image: image,
    projectUrl: projectUrl,
    name: name,
  };
};

export const projects = [
  {
    id: hash(),
    name: "Software Service",
    path: "software-service",
    childs: [
      projectItems(
        img_1,
        "https://alternative-asset.co.uk/",
        "Alternative Asset"
      ),
      projectItems(
        img_2,
        "https://www.apollosboxing.co.uk/",
        "Appolos's Boxing & Fitness"
      ),
      projectItems(img_3, "https://billadvice.co.uk/", "Bill Advice"),
      projectItems(img_4, "https://cbe-uk.com/", "Custom Built Exhibitions"),
      projectItems(
        img_10,
        "https://cms-spares.co.uk/",
        "Corby Mechanical Services"
      ),
      projectItems(img_13, "https://adaptgas.co.uk/", "Adapt Gas"),
      projectItems(
        img_15,
        "https://contidisanbonifacio.com/",
        "Conti Di San Bonifacio"
      ),
      projectItems(
        img_16,
        "https://www.beonesolutions.com/",
        "Be One Soultions"
      ),
      projectItems(
        img_17,
        "https://ionenergysolutions.com/",
        "Ion Energy Solutions."
      ),
      projectItems(img_18, "https://inteligex.com/", "Inteligex"),
      projectItems(
        img_19,
        "https://www.limetreelondon.com/",
        "Lime Tree london"
      ),
      projectItems(img_23, "https://luner.io/", "Luner.io"),
      projectItems(img_24, "https://www.glitzygiftz.co.uk/", "Glitzy Giftz"),
      projectItems(
        img_26,
        "https://livewellnutritionuk.com/",
        "Live Well Nutrition Uk"
      ),
      projectItems(
        img_27,
        "https://hayletscommunicate.com/",
        "Hay Lets Communicate"
      ),
      projectItems(img_29, "https://faithletsgrow.com/", "Faith Lets Grow"),
      projectItems(img_31, "https://emerynails.co.uk/", "Emery Nails Ltd"),
      projectItems(img_34, "https://www.livejournal.com/", "Live Journal"),
      projectItems(
        img_36,
        "https://supernovaweddingdesign.co.uk/",
        "Supernova Wedding Design"
      ),
      projectItems(img_45, "https://www.seniorwaste.com/", "Senior Waste"),
      projectItems(
        img_48,
        "https://timeless-treatments.co.uk/",
        "Timeless Treatments"
      ),
      projectItems(img_49, "https://www.profileplan.com/", "Profile Plan"),
      projectItems(
        img_50,
        "https://traveltradeready.net/",
        "Travel Trader Ready"
      ),
      projectItems(img_53, "https://www.im4l.co.uk/", "Insure Me For Less"),
      projectItems(img_55, "https://shop-dnd.com/", "Shop Dnd"),
      projectItems(
        img_56,
        "https://www.themailingroom.com/",
        "The Mailing Room"
      ),
      projectItems(img_62, "https://watt.co.uk/", "Watt"),
      projectItems(img_63, "https://the.badstar.studio/", "Badstar"),
    ],
  },
  {
    id: hash(),
    name: "Hardware Service",
    path: "hardware-service",
    childs: [
      projectItems(
        img_1,
        "https://alternative-asset.co.uk/",
        "Alternative Asset"
      ),
      projectItems(
        img_2,
        "https://www.apollosboxing.co.uk/",
        "Appolos's Boxing & Fitness"
      ),
      projectItems(img_3, "https://billadvice.co.uk/", "Bill Advice"),
      projectItems(img_4, "https://cbe-uk.com/", "Custom Built Exhibitions"),
      projectItems(
        img_10,
        "https://cms-spares.co.uk/",
        "Corby Mechanical Services"
      ),
      projectItems(img_13, "https://adaptgas.co.uk/", "Adapt Gas"),
      projectItems(
        img_15,
        "https://contidisanbonifacio.com/",
        "Conti Di San Bonifacio"
      ),
      projectItems(
        img_16,
        "https://www.beonesolutions.com/",
        "Be One Soultions"
      ),
      projectItems(
        img_17,
        "https://ionenergysolutions.com/",
        "Ion Energy Solutions."
      ),
      projectItems(img_18, "https://inteligex.com/", "Inteligex"),
      projectItems(
        img_19,
        "https://www.limetreelondon.com/",
        "Lime Tree london"
      ),
      projectItems(img_23, "https://luner.io/", "Luner.io"),
      projectItems(img_24, "https://www.glitzygiftz.co.uk/", "Glitzy Giftz"),
      projectItems(
        img_26,
        "https://livewellnutritionuk.com/",
        "Live Well Nutrition Uk"
      ),
      projectItems(
        img_27,
        "https://hayletscommunicate.com/",
        "Hay Lets Communicate"
      ),
      projectItems(img_29, "https://faithletsgrow.com/", "Faith Lets Grow"),
      projectItems(img_31, "https://emerynails.co.uk/", "Emery Nails Ltd"),
      projectItems(img_34, "https://www.livejournal.com/", "Live Journal"),
      projectItems(
        img_36,
        "https://supernovaweddingdesign.co.uk/",
        "Supernova Wedding Design"
      ),
      projectItems(img_45, "https://www.seniorwaste.com/", "Senior Waste"),
      projectItems(
        img_48,
        "https://timeless-treatments.co.uk/",
        "Timeless Treatments"
      ),
      projectItems(img_49, "https://www.profileplan.com/", "Profile Plan"),
      projectItems(
        img_50,
        "https://traveltradeready.net/",
        "Travel Trader Ready"
      ),
      projectItems(img_53, "https://www.im4l.co.uk/", "Insure Me For Less"),
      projectItems(img_55, "https://shop-dnd.com/", "Shop Dnd"),
      projectItems(
        img_56,
        "https://www.themailingroom.com/",
        "The Mailing Room"
      ),
      projectItems(img_62, "https://watt.co.uk/", "Watt"),
      projectItems(img_63, "https://the.badstar.studio/", "Badstar"),
    ],
  },
  {
    id: hash(),
    name: "Mechanical Service",
    path: "mechanical-service",
    childs: [
      projectItems(
        img_1,
        "https://alternative-asset.co.uk/",
        "Alternative Asset"
      ),
      projectItems(
        img_2,
        "https://www.apollosboxing.co.uk/",
        "Appolos's Boxing & Fitness"
      ),
      projectItems(img_3, "https://billadvice.co.uk/", "Bill Advice"),
      projectItems(img_4, "https://cbe-uk.com/", "Custom Built Exhibitions"),
      projectItems(
        img_10,
        "https://cms-spares.co.uk/",
        "Corby Mechanical Services"
      ),
      projectItems(img_13, "https://adaptgas.co.uk/", "Adapt Gas"),
      projectItems(
        img_15,
        "https://contidisanbonifacio.com/",
        "Conti Di San Bonifacio"
      ),
      projectItems(
        img_16,
        "https://www.beonesolutions.com/",
        "Be One Soultions"
      ),
      projectItems(
        img_17,
        "https://ionenergysolutions.com/",
        "Ion Energy Solutions."
      ),
      projectItems(img_18, "https://inteligex.com/", "Inteligex"),
      projectItems(
        img_19,
        "https://www.limetreelondon.com/",
        "Lime Tree london"
      ),
      projectItems(img_23, "https://luner.io/", "Luner.io"),
      projectItems(img_24, "https://www.glitzygiftz.co.uk/", "Glitzy Giftz"),
      projectItems(
        img_26,
        "https://livewellnutritionuk.com/",
        "Live Well Nutrition Uk"
      ),
      projectItems(
        img_27,
        "https://hayletscommunicate.com/",
        "Hay Lets Communicate"
      ),
      projectItems(img_29, "https://faithletsgrow.com/", "Faith Lets Grow"),
      projectItems(img_31, "https://emerynails.co.uk/", "Emery Nails Ltd"),
      projectItems(img_34, "https://www.livejournal.com/", "Live Journal"),
      projectItems(
        img_36,
        "https://supernovaweddingdesign.co.uk/",
        "Supernova Wedding Design"
      ),
      projectItems(img_45, "https://www.seniorwaste.com/", "Senior Waste"),
      projectItems(
        img_48,
        "https://timeless-treatments.co.uk/",
        "Timeless Treatments"
      ),
      projectItems(img_49, "https://www.profileplan.com/", "Profile Plan"),
      projectItems(
        img_50,
        "https://traveltradeready.net/",
        "Travel Trader Ready"
      ),
      projectItems(img_53, "https://www.im4l.co.uk/", "Insure Me For Less"),
      projectItems(img_55, "https://shop-dnd.com/", "Shop Dnd"),
      projectItems(
        img_56,
        "https://www.themailingroom.com/",
        "The Mailing Room"
      ),
      projectItems(img_62, "https://watt.co.uk/", "Watt"),
      projectItems(img_63, "https://the.badstar.studio/", "Badstar"),
    ],
  },
];
