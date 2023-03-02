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

import DatabaseDevelopment from "../assets/images/services/database-development.svg";
import DatabaseDevelopmentQuote from "../assets/images/services/database-development-quote.svg";
import PostGreSQLDatabase from "../assets/images/services/postgre-sql-database.svg";
import NoSQLFirebaseMongoDB from "../assets/images/services/nosql-firebase-mangodb.svg";
import MicrosoftSQL from "../assets/images/services/microsoft-sql.svg";
import PHPmySQL from "../assets/images/services/php-mysql.svg";

import EmbeddedSystemsDesign from "../assets/images/services/embedded-systems-design.svg";
import EmbeddedSystemsDesignQuote from "../assets/images/services/embedded-systems-design-quote.svg";
import FirmwareDevelopment from "../assets/images/services/firmware-development.svg";
import PCBDesignAssembly from "../assets/images/services/pcb-design-assembly.svg";
import RaspberryPiPythonMatlab from "../assets/images/services/raspberry-pi-python-matlab.svg";
import EmbeddedLinuxRTOS from "../assets/images/services/embedded-linux-rtos.svg";

// import QAWebPlugiDesktopDevelopment from "../assets/images/services/qa-web-plugin-desktop-development.svg";
// import QAWebPluginandDesktopDevelopmentQuote from "../assets/images/services/embedded-systems-design-quote.svg";
// import QAManualWebMobileApp from "../assets/images/services/qa-manual-web-mobile-app.svg";
// import LUAPluginDevelopment from "../assets/images/services/lua-plugin-development.svg";
// import DotNetMVVMDevelopment from "../assets/images/services/dot-net-mvvm-development.svg";


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
  };
};

export const services = [
  {
    id: hash(),
    name: "Web Application Development",
    path: "web-app-development",
    content:
      "We have an experienced and professional Front End & Backend Developer Team to execute your defined requirements enthusiastically.",
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
    content:
      "We have an experienced and professional Front End & Backend Developer Team to execute your defined requirements enthusiastically.",
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
  {
    id: hash(),
    name: "Database Development ",
    path: "database-development",
    content: "We offer PostGRES database development services for robust and efficient data management.",
    image: DatabaseDevelopment,
    quote: "We have perfected the art of mobile applications. With over a decade of experience under our belt, our technically trained iOS developers, Android developers, and designers deliver state-of-the-art, responsive, and engaging mobile applications. Here at eSpark, we excel at creating end-to-end tailor-made mobile solutions using the latest technologies with a seamless interface, frictionless navigation, and stunning visuals.",
    quoteImage: DatabaseDevelopmentQuote,
    childs: [
      serviceItems(hash(), "Postgre SQL Database​", "Postgre SQL Database​", "Our PostGRES database development services will allow you to manage massive amounts of data while ensuring data security and integrity. Our team of expert developers will design and construct a scalable database that suits your company's requirements. We are experts at creating intricate, data-driven programmes with plenty of transactions. We provide quick data retrieval, simple maintenance, and enhanced performance with our PostGRES database building services.​​", PostGreSQLDatabase),
      serviceItems(hash(), "NoSQL / Firebase / MongoDB​", "NoSQL / Firebase / MongoDB​", "Your ability to store, handle, and retrieve data in a flexible and scalable manner is made possible by our NoSQL/Firebase/MongoDB development services. No matter if you require a database for a web application, IoT device, or mobile app, our skilled developers can offer a tailored solution that satisfies your requirements. We can assist you in selecting the ideal NoSQL database platform for your needs and price range. Our developers have experience developing highly scalable, fault-tolerant, and simple-to-maintain NoSQL databases.", NoSQLFirebaseMongoDB),
      serviceItems(hash(), "Microsoft SQL​", "Microsoft SQL​", "You can get a dependable and secure data storage solution from our Microsoft SQL development services. Our skilled developers can create and implement a custom database that suits your needs, whether you need to manage data for a small business or an enterprise-level corporation. We specialise in creating highly accessible, secure, and scalable Microsoft SQL databases. Additionally, our experts can aid in the migration of your current databases to Microsoft SQL, assuring a seamless changeover with little downtime.", MicrosoftSQL),
      serviceItems(hash(), "PHP mySQL​", "PHP mySQL​", "We provide a cost-effective method for managing data in web applications with our PHP mySQL development services. To match your business needs, a bespoke mySQL database can be designed and implemented by our talented experts. We specialise in creating web applications that are very responsive and have a PHP mySQL backend for quick data access and simple maintenance. Additionally, our experts can assist you with converting your current database to PHP mySQL, assuring a seamless transition with little downtime", PHPmySQL),
    ]
  },
  {
    id: hash(),
    name: "Embedded Systems Design ",
    path: "embedded-systems-design",
    content: "We provide C/C++ firmware development services for efficient and reliable embedded systemsWe provide C/C++ firmware development services for efficient and reliable embedded systems.",
    image: EmbeddedSystemsDesign,
    quote: "We have perfected the art of mobile applications. With over a decade of experience under our belt, our technically trained iOS developers, Android developers, and designers deliver state-of-the-art, responsive, and engaging mobile applications. Here at eSpark, we excel at creating end-to-end tailor-made mobile solutions using the latest technologies with a seamless interface, frictionless navigation, and stunning visuals.",
    quoteImage: EmbeddedSystemsDesignQuote,
    childs: [
      serviceItems(hash(), "Firmware Development C / C++​", "Firmware Development C / C++​", "For developing firmware for embedded devices, we provide dependable C/C++ firmware development services. Custom firmware that satisfies your business requirements can be designed and implemented by our skilled experts. Our expertise lies in the creation of high-performance firmware that is tailored for embedded systems, resulting in quick boot times and effective resource management. Also, you can get assistance from our expertise with firmware testing and optimisation.​​", FirmwareDevelopment),
      serviceItems(hash(), "PCB Design and Assembly", "PCB Design and Assembly", "For all of your circuit board requirements, you can rely on the excellent quality and dependability of our PCB design and assembly services. Custom PCBs can be designed and assembled by our skilled developers to match your company's needs. To guarantee the greatest level of quality and dependability for the circuit boards, we employ cutting-edge tools and methods. Our team can also help you with prototyping, testing, and optimisation services for PCBs", PCBDesignAssembly),
      serviceItems(hash(), "Raspberry Pi Python / Matlab​", "Raspberry Pi Python / Matlab​", "For creating IoT solutions, our Raspberry Pi Python/Matlab development services provide a flexible and potent option. Our skilled developers can create and deploy unique Raspberry Pi solutions that satisfy your company's needs. For simple sensor and other peripheral integration, we specialise in creating high-performance solutions that interact with the Raspberry Pi's GPIO using Python/Matlab.", RaspberryPiPythonMatlab),
      serviceItems(hash(), "Embedded Linux / RTOS (Zephyr, ESP-IDF)​","Embedded Linux / RTOS (Zephyr, ESP-IDF)​", "Custom Embedded Linux/RTOS solutions that match your company's needs can be designed and implemented by our talented developers. We specialise in creating high-performance, embedded system-optimised solutions that guarantee quick boot times and effective resource use. Our team will assist you with the testing, optimisation, and porting of Embedded Linux/RTOS using well-liked platforms like Zephyr and ESP-IDF.", EmbeddedLinuxRTOS),
    ]
  },
  // {
  //   id: hash(),
  //   name: "QA and Web Plugin and Desktop Development",
  //   path: "qa-Web-Plugin-desktop-development",
  //   content: "We provide C/C++ firmware development services for efficient and reliable embedded systemsWe provide C/C++ firmware development services for efficient and reliable embedded systems.",
  //   image: QAWebPluginandDesktopDevelopment,
  //   quote: "We have perfected the art of mobile applications. With over a decade of experience under our belt, our technically trained iOS developers, Android developers, and designers deliver state-of-the-art, responsive, and engaging mobile applications. Here at eSpark, we excel at creating end-to-end tailor-made mobile solutions using the latest technologies with a seamless interface, frictionless navigation, and stunning visuals.",
  //   quoteImage: QAWebPluginandDesktopDevelopmentQuote,
  //   childs: [
  //     serviceItems(hash(), "QA Manual Web and Mobile App​", "QA Manual Web and Mobile App​", "To ensure that your web and mobile applications satisfy high-quality requirements, use our manual QA testing services. Functional and non-functional testing will be carried out by our team of skilled QA testers to find any potential problems that might have an influence on the user experience. Together, we will create test plans, carry them out, and report on any difficulties that arise. Our aim is to guarantee that your mobile and online applications work as intended and deliver a great user experience​​", QAManualWebMobileApp),
  //     serviceItems(hash(), "LUA Plugin Development", "LUA Plugin Development", "Our LUA plugin development services offer a versatile and portable way to increase the functionality of your applications. Our skilled team of developers will collaborate with you to build and deploy unique plugins that satisfy your company's needs. We are experts at creating high-performance plugins that are quick and effective. Our LUA plugin development services can assist you in achieving your objectives, whether you need to interact with third-party software or add new capabilities", LUAPluginDevelopment),
  //     serviceItems(hash(), ".Net MVVM Development​", ".NET MVVM Development​", "Our.Net MVVM development services offer a cutting-edge and effective method for creating software programmes. The Model-View-ViewModel (MVVM) pattern will be used by our team of skilled developers to create scalable and maintainable apps. We specialise in creating high-performance software programmes that are tailored to your company's requirements. We create software solutions that are quick and effective using the most recent.Net frameworks and tools. Our.Net MVVM development services will assist you in achieving your objectives, regardless of whether you need to create a desktop, web, or mobile application.", DotNetMVVMDevelopment),
  //   ]
  // },

]
