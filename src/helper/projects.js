import DualCamerabg from "../assets/images/projects/App-Development/Backgrounds/DUAL-CAMERA05.png";
import IonMeterbg from "../assets/images/projects/App-Development/Backgrounds/ION-metter04.png";
import RealOdorsbg from "../assets/images/projects/App-Development/Backgrounds/REALODERS06.png";
import Itarianbg from "../assets/images/projects/App-Development/Backgrounds/itarain03.png";
import OrderRightbg from "../assets/images/projects/App-Development/Backgrounds/orderright02.png";
import Paranyamabg from "../assets/images/projects/App-Development/Backgrounds/paranyama01.png";
import DualCamera from "../assets/images/projects/App-Development/DualCamera.png";
import IonMeter from "../assets/images/projects/App-Development/ION Metter.png";
import OrderRight from "../assets/images/projects/App-Development/Orderright.png";
import Pranayama from "../assets/images/projects/App-Development/Paryanma.png";
import RealOdors from "../assets/images/projects/App-Development/REALODERS.png";
import Itarian from "../assets/images/projects/App-Development/itarian.png";

import Nucal from "../assets/images/projects/Web-Development/Nucal.png";
import TimelessTreatment from "../assets/images/projects/Web-Development/Timeless-treatment.png";
import TravelTradeReady from "../assets/images/projects/Web-Development/Travel-Trade-Ready.png";
import Trendify from "../assets/images/projects/Web-Development/Trendify.png";
import Nucalbg from "../assets/images/projects/Web-Development/backgrounds/NUCAL.png";
import TravelTradeReadybg from "../assets/images/projects/Web-Development/backgrounds/TRVEL-TRADE-READY.png";
import Trendifybg from "../assets/images/projects/Web-Development/backgrounds/Trendify.png";
import KineticTherapybg from "../assets/images/projects/Web-Development/backgrounds/kentic-therapy.png";
import SeekSocialbg from "../assets/images/projects/Web-Development/backgrounds/seek-social.png";
import TimelessTreatmentbg from "../assets/images/projects/Web-Development/backgrounds/timeless-treatment.png";
import KineticTherapy from "../assets/images/projects/Web-Development/kenatic-therapy.png";
import SeekSocial from "../assets/images/projects/Web-Development/seek-social.png";

import SwitchBox from "../assets/images/projects/PCB-Design/01.png";
import LCDBoard from "../assets/images/projects/PCB-Design/02.png";
import CatanBoard from "../assets/images/projects/PCB-Design/03.png";
import WaterMonitor from "../assets/images/projects/PCB-Design/04.png";
import PCBbg from "../assets/images/projects/PCB-Design/background/1.png";

const hash = () => {
  const s4 = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  };
  return `${s4()}${s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`;
};
const projectItems = (image, projectUrl, name, category, subCategory) => {
  return {
    id: hash(),
    image: image,
    projectUrl: projectUrl,
    name: name,
    category: category,
    imageArray: subCategory,
  };
};

export const projects = [
  {
    id: hash(),
    name: "App Development",
    path: "app-development",
    childs: [
      projectItems(
        DualCamerabg,
        DualCamera,
        "Dual Camera",
        "One lens typically provides in-depth information, while the other captures the image. This enables impressive portrait mode effects and improves low-light performance.",
        []
      ),
      projectItems(
        Paranyamabg,
        Pranayama,
        "Paranyama App",
        "Offers a convenient way to access guided breathing exercises and meditation techniques, helping users improve their overall well-being.",
        []
      ),
      projectItems(
        IonMeterbg,
        IonMeter,
        "Ion Meter",
        "Provides a user-friendly interface for data visualization and analysis, allowing users to make informed decisions based on accurate measurement.",
        []
      ),
      projectItems(
        Itarianbg,
        Itarian,
        "Itarian",
        "This application enables remote monitoring, security, and support, making IT administration more streamlined and responsive.",
        []
      ),
      projectItems(
        OrderRightbg,
        OrderRight,
        "Order Right",
        "They streamline the entire order-to-delivery process, enhancing customer satisfaction and operational efficiency",
        []
      ),
      projectItems(
        RealOdorsbg,
        RealOdors,
        "RealOdors",
        "They simplify property searches and real estate interactions for a more efficient and informed experience.",
        []
      ),
    ],
  },
  {
    id: hash(),
    name: "Web Development",
    path: "web-development",
    category: "Web",
    childs: [
      projectItems(
        SeekSocialbg,
        SeekSocial,
        "Seek Social",
        "Offer a range of features like user profiles, search functions, and messaging tools to foster connections and interactions.",
        []
      ),
      projectItems(
        TimelessTreatmentbg,
        TimelessTreatment,
        "Timeless Treatment",
        "This website is an essential destination for those looking to make informed decisions about their timeless beauty journey.",
        []
      ),
      projectItems(
        TravelTradeReadybg,
        TravelTradeReady,
        "Travel Trade Ready",
        "A comprehensive platform for businesses in the travel and tourism industry to connect, collaborate, and stay informed about the latest industry trends.",
        []
      ),
      projectItems(
        Trendifybg,
        Trendify,
        "Trendify",
        "It's a go-to destination for fashion enthusiasts seeking style guidance and product insights. A dynamic online platform that showcases the latest fashion trends.",
        []
      ),
      projectItems(
        Nucalbg,
        Nucal,
        "Nucal",
        "offers valuable information, product details, and customer resources, making it a one-stop destination for those interested in optimizing their nutritional health.",
        []
      ),
      projectItems(
        KineticTherapybg,
        KineticTherapy,
        "Kinetic Therapy",
        "This website serves as a valuable resource for patients seeking expert physical therapy services and rehabilitation A valuable resource to start your journey towards improved health.",
        []
      ),
    ],
  },
  {
    id: hash(),
    name: "PCB Designing",
    path: "pcb-designing",
    category: "PCB",
    childs: [
      projectItems(
        PCBbg,
        WaterMonitor,
        "Water Monitor",
        "It encompasses cutting-edge printed circuit board (PCB) designs that enable real-time monitoring of various water parameters such as pH levels, conductivity, and contamination.",
        []
      ),
      projectItems(
        PCBbg,
        CatanBoard,
        "Catan Board",
        "It offers intricate PCB designs with embedded sensors, allowing for interactive gameplay and automated resource tracking.",
        []
      ),
      projectItems(
        PCBbg,
        LCDBoard,
        "LCD Board",
        "This system caters to businesses, institutions, and organizations seeking to implement dynamic and customizable visual communication solutions.",
        []
      ),
      projectItems(
        PCBbg,
        SwitchBox,
        "Switch Box",
        "It is an innovative system that provides efficient PCB layouts that enhance the functionality and reliability of switch boxes used in automation, electronics, and industrial applications.",
        []
      ),
      // projectItems(img_31, "https://emerynails.co.uk/", "Emery Nails Ltd"),
      // projectItems(img_34, "https://www.livejournal.com/", "Live Journal"),
      // projectItems(
      //   img_36,
      //   "https://supernovaweddingdesign.co.uk/",
      //   "Supernova Wedding Design"
      // ),
      // projectItems(img_45, "https://www.seniorwaste.com/", "Senior Waste"),
      // projectItems(
      //   img_48,
      //   "https://timeless-treatments.co.uk/",
      //   "Timeless Treatments"
      // ),
      // projectItems(img_49, "https://www.profileplan.com/", "Profile Plan"),
      // projectItems(
      //   img_50,
      //   "https://traveltradeready.net/",
      //   "Travel Trader Ready"
      // ),
      // projectItems(img_53, "https://www.im4l.co.uk/", "Insure Me For Less"),
      // projectItems(img_55, "https://shop-dnd.com/", "Shop Dnd"),
      // projectItems(
      //   img_56,
      //   "https://www.themailingroom.com/",
      //   "The Mailing Room"
      // ),
      // projectItems(
      //   img_1,
      //   "https://alternative-asset.co.uk/",
      //   "Alternative Asset"
      // ),
      // projectItems(
      //   img_2,
      //   "https://www.apollosboxing.co.uk/",
      //   "Appolos's Boxing & Fitness"
      // ),
      // projectItems(img_62, "https://watt.co.uk/", "Watt"),
      // projectItems(img_63, "https://the.badstar.studio/", "Badstar"),
    ],
  },
];
