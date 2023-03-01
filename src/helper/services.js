import WebApplicationDevelopment from "../assets/images/services/web-app-development.svg";
import WebApplicationDevelopmentQuote from "../assets/images/services/web-app-development-quote.svg";
import ReactVueDevelopment from "../assets/images/services/react-vue-app-development.svg";
import AspDotNetDevelopment from "../assets/images/services/asp-dot-net-development.svg";
import NodeJSDevelopment from "../assets/images/services/node-js-development.svg";
import WordpressShopifyDevelopment from "../assets/images/services/wordpress-shopify-development.svg";

import MobileApplicationDevelopment from "../assets/images/services/mobile-app-development.svg";
import MobileApplicationDevelopmentQuote from "../assets/images/services/mobile-app-development-quote.svg";
import AndroidAppDevelopment from "../assets/images/services/android-app-development.svg";
import IosAppDevelopment from "../assets/images/services/ios-app-development.svg";
import ReactNativeAppDevelopment from "../assets/images/services/react-native-app-development.svg";
import FlutterAppDevelopment from "../assets/images/services/flutter-app-development.svg";

// import DatabaseDevelopment from "../assets/images/services/database-development.svg";
// import DatabaseDevelopmentQuote from "../assets/images/services/database-development-quote.svg";
// import PostGreSQLDatabase from "../assets/images/services/postgre-sql-database.svg";
// import NoSQLFirebaseMongoDB from "../assets/images/services/nosql-firebase-mangodb.svg";
// import MicrosoftSQL from "../assets/images/services/microsoft-sql.svg";
// import PHPmySQL from "../assets/images/services/php-mysql.svg";

// import EmbeddedSystemsDesign from "../assets/images/services/embedded-systems-design.svg";
// import EmbeddedSystemsDesignQuote from "../assets/images/services/embedded-systems-design-quote.svg";
// import FirmwareDevelopment from "../assets/images/services/firmware-development.svg";
// import PCBDesignAssembly from "../assets/images/services/pcb-design-assembly.svg";
// import RaspberryPiPythonMatlab from "../assets/images/services/raspberry-pi-python-matlab.svg";
// import EmbeddedLinuxRTOS from "../assets/images/services/embedded-linux-rtos.svg";

// import QAWebPluginandDesktopDevelopment from "../assets/images/services/embedded-systems-design.svg";
// import QAWebPluginandDesktopDevelopmentQuote from "../assets/images/services/embedded-systems-design-quote.svg";
// import QAManualWebMobileApp from "../assets/images/services/firmware-development.svg";
// import LUAPluginDevelopment from "../assets/images/services/pcb-design-assembly.svg";
// import DotNetMVVMDevelopment from "../assets/images/services/raspberry-pi-python-matlab.svg";


const hash = () => {
  const s4 = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  };
  return `${s4()}${s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`;
};

const serviceItems = (id, title, name, content, image) => {
  return {
    id: id,
    title: title,
    name: name,
    content: content,
    image: image,
    quote: quote,
    quoteImage: quoteImage,
  };
};


export const services = [
  {
    id: hash(),
    name: "Web Application Development",
    path: "web-app-development",
    content: "We have an experienced and professional Front End & Backend Developer Team to execute your defined requirements enthusiastically.",
    image: WebApplicationDevelopment,
    quote: "We are a leading custom web app development company that creates scalable web applications, web portals and solutions with high-quality standards. Thoroughly examining your preferences, requirements and expectations, our community of 100+ developers deliver top-notch web app development services to enhance your customer retention and boost brand equity.",
    quoteImage: WebApplicationDevelopmentQuote,
    childs: [
      serviceItems(hash(), "React / Vue Development", "React / Vue Development", "Our Angular development service will provide you with a responsive, high-speed, and effortless web application to navigate. ​", ReactVueDevelopment),
      serviceItems(hash(), "ASP.NET Development", "ASP.NET Development", "Our Angular development service will provide you with a responsive, high-speed, and effortless web application to navigate. ​", AspDotNetDevelopment),
      serviceItems(hash(), "Node.JS Development", "Node.JS Development", "Our Angular development service will provide you with a responsive, high-speed, and effortless web application to navigate. ​", NodeJSDevelopment),
      serviceItems(hash(), "Wordpress / Shopify Development ", " Wordpress / Shopify Development ", "Our Angular development service will provide you with a responsive, high-speed, and effortless web application to navigate. ​", WordpressShopifyDevelopment),
    ]
  },
  {
    id: hash(),
    name: "Mobile App Development",
    path: "mobile-app-development",
    content: "We have an experienced and professional Front End & Backend Developer Team to execute your defined requirements enthusiastically.",
    image: MobileApplicationDevelopment,
    quote: "We have perfected the art of mobile applications. With over a decade of experience under our belt, our technically trained iOS developers, Android developers, and designers deliver state-of-the-art, responsive, and engaging mobile applications. Here at eSpark, we excel at creating end-to-end tailor-made mobile solutions using the latest technologies with a seamless interface, frictionless navigation, and stunning visuals.",
    quoteImage: MobileApplicationDevelopmentQuote,
    childs: [
      serviceItems(hash(), "Android App Development Service.​", "Android App​", "Build top-notch Android applications with eSpark, which will be completely designed for your business needs.​​", AndroidAppDevelopment),
      serviceItems(hash(), "iOS App Development Service.​", "iOS App​", "Build top-notch customizable iOS applications designed to boost your business’s potential and reach.​", IosAppDevelopment),
      serviceItems(hash(), "React Native App Development Service.​", "React NAtive App​", "Do you want the end user to have the best performance and user experience? Our React Native App Development Service will provide you with exactly that. ​​", ReactNativeAppDevelopment),
      serviceItems(hash(), "Flutter App Development Service.​", "React NAtive App​", "Do you want the end user to have the best performance and user experience? Our React Native App Development Service will provide you with exactly that. ​", FlutterAppDevelopment),
    ]
  },
  // {
  //   id: hash(),
  //   name: "Database Development ",
  //   path: "database-development",
  //   content: "We offer PostGRES database development services for robust and efficient data management.",
  //   image: DatabaseDevelopment,
  //   quote: "We have perfected the art of mobile applications. With over a decade of experience under our belt, our technically trained iOS developers, Android developers, and designers deliver state-of-the-art, responsive, and engaging mobile applications. Here at eSpark, we excel at creating end-to-end tailor-made mobile solutions using the latest technologies with a seamless interface, frictionless navigation, and stunning visuals.",
  //   quoteImage: DatabaseDevelopmentQuote,
  //   childs: [
  //     serviceItems(hash(), "Postgre SQL Database​", "Lorem ipsum dolor sit amet consectetur. Vestibulum egestas erat in egestas. Integer arcu venenatis tempor egestas.​​", PostGreSQLDatabase),
  //     serviceItems(hash(), "NoSQL / Firebase / MongoDB​", "NoSQL / Firebase / MongoDB​", "Lorem ipsum dolor sit amet consectetur.Vestibulum egestas erat in egestas.Integer arcu venenatis tempor egestas.", NoSQLFirebaseMongoDB),
  //     serviceItems(hash(), "Microsoft SQL​", "Microsoft SQL​", "Lorem ipsum dolor sit amet consectetur.Vestibulum egestas erat in egestas.Integer arcu venenatis tempor egestas.", MicrosoftSQL),
  //     serviceItems(hash(), "PHP mySQL​", "PHP mySQL​", "Lorem ipsum dolor sit amet consectetur.Vestibulum egestas erat in egestas.Integer arcu venenatis tempor egestas.", PHPmySQL),
  //   ]
  // },
  // {
  //   id: hash(),
  //   name: "Embedded Systems Design ",
  //   path: "embedded-systems-design",
  //   content: "We provide C/C++ firmware development services for efficient and reliable embedded systemsWe provide C/C++ firmware development services for efficient and reliable embedded systems.",
  //   image: EmbeddedSystemsDesign,
  //   quote: "We have perfected the art of mobile applications. With over a decade of experience under our belt, our technically trained iOS developers, Android developers, and designers deliver state-of-the-art, responsive, and engaging mobile applications. Here at eSpark, we excel at creating end-to-end tailor-made mobile solutions using the latest technologies with a seamless interface, frictionless navigation, and stunning visuals.",
  //   quoteImage: EmbeddedSystemsDesignQuote,
  //   childs: [
  //     serviceItems(hash(), "Firmware Development C / C++​", "Firmware Development C / C++​", "Lorem ipsum dolor sit amet consectetur. Vestibulum egestas erat in egestas. Integer arcu venenatis tempor egestas.​​", FirmwareDevelopment),
  //     serviceItems(hash(), "PCB Design and Assembly", "PCB Design and Assembly", "Lorem ipsum dolor sit amet consectetur.Vestibulum egestas erat in egestas.Integer arcu venenatis tempor egestas.", PCBDesignAssembly),
  //     serviceItems(hash(), "Raspberry Pi Python / Matlab​", "Raspberry Pi Python / Matlab​", "Lorem ipsum dolor sit amet consectetur.Vestibulum egestas erat in egestas.Integer arcu venenatis tempor egestas.", RaspberryPiPythonMatlab),
  //     serviceItems(hash(), "Embedded Linux / RTOS (Zephyr, ESP-IDF)​", "Embedded Linux / RTOS (Zephyr, ESP-IDF)​", "Lorem ipsum dolor sit amet consectetur.Vestibulum egestas erat in egestas.Integer arcu venenatis tempor egestas.", EmbeddedLinuxRTOS),
  //   ]
  // },
  // {
  //   id: hash(),
  //   name: "QA and Web Plugin and Desktop Development",
  //   path: "qa-Web-Plugin-desktop-development",
  //   content: "We provide C/C++ firmware development services for efficient and reliable embedded systemsWe provide C/C++ firmware development services for efficient and reliable embedded systems.",
  //   image: QAWebPluginandDesktopDevelopment,
  //   quote: "We have perfected the art of mobile applications. With over a decade of experience under our belt, our technically trained iOS developers, Android developers, and designers deliver state-of-the-art, responsive, and engaging mobile applications. Here at eSpark, we excel at creating end-to-end tailor-made mobile solutions using the latest technologies with a seamless interface, frictionless navigation, and stunning visuals.",
  //   quoteImage: QAWebPluginandDesktopDevelopmentQuote,
  //   childs: [
  //     serviceItems(hash(), "QA Manual Web and Mobile App​", "QA Manual Web and Mobile App​", "Lorem ipsum dolor sit amet consectetur. Vestibulum egestas erat in egestas. Integer arcu venenatis tempor egestas.​​", QAManualWebMobileApp),
  //     serviceItems(hash(), "LUA Plugin Development", "LUA Plugin Development", "Lorem ipsum dolor sit amet consectetur.Vestibulum egestas erat in egestas.Integer arcu venenatis tempor egestas.", LUAPluginDevelopment),
  //     serviceItems(hash(), ".Net MVVM Development​", ".NET MVVM Development​", "Lorem ipsum dolor sit amet consectetur.Vestibulum egestas erat in egestas.Integer arcu venenatis tempor egestas.", DotNetMVVMDevelopment),
  //   ]
  // },

]