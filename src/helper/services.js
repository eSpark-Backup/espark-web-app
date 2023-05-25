import WebApplicationDevelopment from "../assets/images/services/web-app-development.svg";
import WebApplicationDevelopmentQuote from "../assets/images/services/web-app-development-quote.svg";
import WebApplicationDevelopmentIcon from "../assets/images/services/web-app-development-icon.svg";
import WebApplicationDevelopmentIconHover from "../assets/images/services/web-app-development-icon-hover.svg";
import ReactVueDevelopment from "../assets/images/services/react-vue-app-development.svg";
import AspDotNetDevelopment from "../assets/images/services/asp-dot-net-development.svg";
import NodeJSDevelopment from "../assets/images/services/node-js-development.svg";
import WordpressShopifyDevelopment from "../assets/images/services/wordpress-shopify-development.svg";

import MobileApplicationDevelopment from "../assets/images/services/mobile-app-development.svg";
import MobileApplicationDevelopmentQuote from "../assets/images/services/mobile-app-development-quote.svg";
import MobileApplicationDevelopmentIcon from "../assets/images/services/mobile-app-development-icon.svg";
import MobileApplicationDevelopmentIconHover from "../assets/images/services/mobile-app-development-icon-hover.svg";
import AndroidAppDevelopment from "../assets/images/services/android-app-development.svg";
import IosAppDevelopment from "../assets/images/services/ios-app-development.svg";
import ReactNativeAppDevelopment from "../assets/images/services/react-native-app-development.svg";
import FlutterAppDevelopment from "../assets/images/services/flutter-app-development.svg";

import DatabaseDevelopment from "../assets/images/services/database-development.svg";
import DatabaseDevelopmentQuote from "../assets/images/services/database-development-quote.svg";
import DatabaseDevelopmentIcon from "../assets/images/services/database-development-icon.svg";
import DatabaseDevelopmentIconHover from "../assets/images/services/database-development-icon-hover.svg";
import PostGreSQLDatabase from "../assets/images/services/postgre-sql-database.svg";
import NoSQLFirebaseMongoDB from "../assets/images/services/nosql-firebase-mangodb.svg";
import MicrosoftSQL from "../assets/images/services/microsoft-sql.svg";
import PHPmySQL from "../assets/images/services/php-mysql.svg";

import EmbeddedSystemsDesign from "../assets/images/services/embedded-systems-design.svg";
import EmbeddedSystemsDesignQuote from "../assets/images/services/embedded-systems-design-quote.svg";
import EmbeddedSystemsDesignIcon from "../assets/images/services/embedded-systems-design-icon.svg";
import EmbeddedSystemsDesignIconHover from "../assets/images/services/embedded-systems-design-icon-hover.svg";
import FirmwareDevelopment from "../assets/images/services/firmware-development.svg";
import PCBDesignAssembly from "../assets/images/services/pcb-design-assembly.svg";
import RaspberryPiPythonMatlab from "../assets/images/services/raspberry-pi-python-matlab.svg";
import EmbeddedLinuxRTOS from "../assets/images/services/embedded-linux-rtos.svg";

import QAWebPluginandDesktopDevelopment from "../assets/images/services/qa-web-plugin-desktop-development.svg";
import QAWebPluginandDesktopDevelopmentQuote from "../assets/images/services/qa-web-plugin-desktop-development-quote.svg";
import QAWebPluginandDesktopDevelopmentIcon from "../assets/images/services/qa-web-plugin-desktop-development-icon.svg";
import QAWebPluginandDesktopDevelopmentIconHover from "../assets/images/services/qa-web-plugin-desktop-development-icon-hover.svg";
import QAManualWebMobileApp from "../assets/images/services/qa-manual-web-mobile-app.svg";
import LUAPluginDevelopment from "../assets/images/services/lua-plugin-development.svg";
import DotNetMVVMDevelopment from "../assets/images/services/dot-net-mvvm-development.svg";

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
    slug: "Turning your app ideas into reality.",
    title: "Mobile App Development",
    name: "App Development",
    path: "mobile-app-development",
    content:
      "eSpark Consulting Group is fully committed to delivering outstanding web app development services that are specifically designed to meet the unique requirements of our clients. Our team of highly skilled developers has the expertise and knowledge required to develop customized solutions that are not only efficient and reliable, but also cost-effective.",
    hpname: "App<br> Development",
    discription:
      "We develop sleek looking native and hybrid mobile apps for iOS & Android to ensure the customer satisfaction and performance at the core.",
    image: MobileApplicationDevelopment,
    quote:
      "eSpark Consulting Group is dedicated to providing exceptional mobile app development services that are tailored to the individual needs of our clients. Our team of skilled developers possess the necessary expertise and knowledge to create customized solutions that are both efficient and reliable, while remaining cost-effective.",
    quoteImage: MobileApplicationDevelopmentQuote,
    icon: MobileApplicationDevelopmentIcon,
    icon2: MobileApplicationDevelopmentIconHover,
    childs: [
      serviceItems(
        hash(),
        "Android App Development",
        "Android App",
        "Build top-notch Android applications with eSpark, which will be completely designed for your business needs. Our group of professionals create innovative and user-friendly android applications with key features like exclusivity and customer satisfaction. We have the expertise to create android applications for various sectors including retail, fashion, healthcare, and much more.",
        AndroidAppDevelopment
      ),
      serviceItems(
        hash(),
        "iOS App Development",
        "iOS App",
        "Build top-notch customizable iOS applications designed to boost your business’s potential and reach.Our group of professionals create innovative and user-friendly iOS applications suitable for all iOS range of products offering easy accessibility and customer satisfaction. We have the expertise to create iOS applications for various industries like retail, fashion, healthcare, and much more.",
        IosAppDevelopment
      ),
      serviceItems(
        hash(),
        "React Native App Development",
        "React Native App",
        "Do you want the end user to have the best performance and user experience? Our React Native App Development Service will provide you with exactly that. Our experts will develop a react native application which will not only help you modernize your business’s functionality but also generate higher revenue. Having top-notch performance and user experience will make your business stand out.",
        ReactNativeAppDevelopment
      ),
      serviceItems(
        hash(),
        "Flutter App Development",
        "Flutter App",
        "Our Flutter application development will provide you with easy functionality, and an exclusive UI design. Our Flutter application development service is one of the best solutions for mobile application development, enabling smooth and easy cross-platform giving your application a uniform appearance.",
        FlutterAppDevelopment
      ),
    ],
  },
  {
    id: hash(),
    slug: "Building dynamic web solutions for you.",
    title: "Web Application Development",
    name: "Web Application Development",
    path: "web-app-development",
    hpname: "Web Application Development",
    content:
      "eSpark Consulting Group offers comprehensive web app development services to help businesses create dynamic and responsive web applications. Our team of experienced developers has expertise in a wide range of technologies and platforms, including React/Vue development, ASP.NET development, Node.js development, WordPress/Shopify development, and more.",
    discription:
      "We have an experienced and professional Front End & Backend Developer Team to execute your defined requirements enthusiastically.",
    image: WebApplicationDevelopment,
    quote:
      "eSpark Consulting Group is dedicated to providing excellent database development services that cater to the specific needs of our clients. Our team of skilled database developers possess the necessary expertise and knowledge to create tailored solutions that are both efficient and reliable, while still remaining cost-effective.",
    quoteImage: WebApplicationDevelopmentQuote,
    icon: WebApplicationDevelopmentIcon,
    icon2: WebApplicationDevelopmentIconHover,
    childs: [
      serviceItems(
        hash(),
        "React / Vue Development",
        "React / Vue Development",
        "Our React/Vue development services offer a cutting-edge and efficient method for creating online applications. React/Vue will be used by our skilled developers to create interactive and dynamic web applications that satisfy your business needs. We are experts at creating high-performance software that is quick and effective. Our React/Vue development services can help you accomplish your goals whether you need to create a simple web application or a complex one.",
        ReactVueDevelopment
      ),
      serviceItems(
        hash(),
        "ASP.NET Development",
        "ASP.NET Development",
        "Our ASP.Net development services will provide you with a responsive, high-speed, and effortless web application to navigate. Our professional developers have expertise in creating .Net development services exclusively for top-class customer satisfaction, helping businesses achieve higher revenue. We offer .Net development services for a wide range of leading industries like education, entertainment, retail, and much more.",
        AspDotNetDevelopment
      ),
      serviceItems(
        hash(),
        "Node.JS Development",
        "Node.JS Development",
        "Our expert NodeJS Developers create scalable and real-time applications that operate efficiently in data-intensive environments. Our professional developers have expertise in NodeJS development giving your customers exclusive top-class customer satisfaction and helping businesses achieve higher revenue.",
        NodeJSDevelopment
      ),
      serviceItems(
        hash(),
        "Wordpress / Shopify Development",
        " Wordpress / Shopify Development",
        "We offer a flexible and user-friendly alternative for creating websites with our Wordpress/Shopify services.   Our Wordpress/Shopify services can assist you in achieving your objectives, whether you need to create an e-commerce website, corporate website, or portfolio website.",
        WordpressShopifyDevelopment
      ),
    ],
  },
  {
    id: hash(),
    slug: "Designing efficient embedded systems solutions.",
    title: "Embedded Systems Design",
    name: "Embedded Systems Design",
    hpname: "Embedded<br> Systems Design",
    path: "embedded-systems-design",
    content:
      "eSpark Consulting Group provides a comprehensive suite of embedded design system services to help businesses develop cutting-edge hardware and software solutions for their unique needs. Our team of experienced engineers and designers has expertise in a wide range of technologies and platforms, including C/C++, Python/MATLAB, Raspberry Pi, and embedded Linux/RTOS (Zephyr, ESP-IDF).",
    discription:
      "We Help You Build Embedded Systems From The Ground Up, Working With You Every Step Of The Way. We offer a range of related services.",
    image: EmbeddedSystemsDesign,
    quote:
      "At eSpark Consulting Group, we are committed to delivering high-quality embedded design system services that meet our clients' unique requirements. Our team of experienced engineers and designers has the expertise and knowledge needed to develop custom solutions that are efficient, reliable, and cost-effective.",
    quoteImage: EmbeddedSystemsDesignQuote,
    icon: EmbeddedSystemsDesignIcon,
    icon2: EmbeddedSystemsDesignIconHover,
    childs: [
      serviceItems(
        hash(),
        "Firmware Development C / C++",
        "Firmware Development C / C++",
        "For developing firmware for embedded devices, we provide dependable C/C++ firmware development services. Custom firmware that satisfies your business requirements can be designed and implemented by our skilled experts. Our expertise lies in the creation of high-performance firmware that is tailored for embedded systems, resulting in quick boot times and effective resource management. Also, you can get assistance from our expertise with firmware testing and optimization.",
        FirmwareDevelopment
      ),
      serviceItems(
        hash(),
        "PCB Design and Assembly",
        "PCB Design and Assembly",
        "For all of your circuit board requirements, you can rely on the excellent quality and dependability of our PCB design and assembly services. Custom PCBs can be designed and assembled by our skilled developers to match your company's needs. To guarantee the greatest level of quality and dependability for the circuit boards, we employ cutting-edge tools and methods. Our team can also help you with prototyping, testing, and optimization services for PCBs.",
        PCBDesignAssembly
      ),
      serviceItems(
        hash(),
        "Raspberry Pi Python / Matlab",
        "Raspberry Pi Python / Matlab",
        "For creating IoT solutions, our Raspberry Pi Python/MATLAB development services provide a flexible and potent option. Our skilled developers can create and deploy unique Raspberry Pi solutions that satisfy your company's needs. For simple sensor and other peripheral integration, we specialize in creating high-performance solutions that interact with the Raspberry Pi's GPIO using Python/MATLAB.",
        RaspberryPiPythonMatlab
      ),
      serviceItems(
        hash(),
        "Embedded Linux / RTOS (Zephyr, ESP-IDF)",
        "Embedded Linux / RTOS (Zephyr, ESP-IDF)",
        "Custom Embedded Linux/RTOS solutions that match your company's needs can be designed and implemented by our talented developers. We specialize in creating high-performance, embedded system-optimized solutions that guarantee quick boot times and effective resource use. Our team will assist you with the testing, optimization, and porting of Embedded Linux/RTOS using well-liked platforms like Zephyr and ESP-IDF.",
        EmbeddedLinuxRTOS
      ),
    ],
  },
  {
    id: hash(),
    slug: "Creating efficient, scalable databases solutions.",
    title: "Database Development",
    name: "Database Development",
    hpname: "Database Development",
    path: "database-development",
    content:
      "eSpark Consulting Group provides comprehensive database development services to help businesses manage their data effectively. Our team of experienced database developers has expertise in a wide range of technologies and platforms, including PostgreSQL, Microsoft SQL, PHP MySQL, NoSQL databases like Firebase and MongoDB.",
    discription:
      "We can build and manage your databases according to your requirements so that you can securely and efficiently control and process your data.",
    image: DatabaseDevelopment,
    quote:
      "eSpark Consulting Group is dedicated to providing excellent database development services that cater to the specific needs of our clients. Our team of skilled database developers possess the necessary expertise and knowledge to create tailored solutions that are both efficient and reliable, while remaining cost-effective.",
    quoteImage: DatabaseDevelopmentQuote,
    icon: DatabaseDevelopmentIcon,
    icon2: DatabaseDevelopmentIconHover,
    childs: [
      serviceItems(
        hash(),
        "PostgreSQL Database",
        "PostgreSQL Database",
        "Our PostgreSQL database development services will allow you to manage massive amounts of data while ensuring data security and integrity. Our team of expert developers will design and construct a scalable database that suits your company's requirements. We are experts at creating intricate, data-driven programs with plenty of transactions. We provide quick data retrieval, simple maintenance, and enhanced performance with our PostgreSQL database building services.",
        PostGreSQLDatabase
      ),
      serviceItems(
        hash(),
        "NoSQL / Firebase / MongoDB",
        "NoSQL / Firebase / MongoDB",
        "Your ability to store, handle, and retrieve data in a flexible and scalable manner is made possible by our NoSQL/Firebase/MongoDB development services. No matter if you require a database for a web application, IoT device, or mobile app, our skilled developers can offer a tailored solution that satisfies your requirements. We can assist you in selecting the ideal NoSQL database platform for your needs and price range. Our developers have experience developing highly scalable, fault-tolerant, and simple-to-maintain NoSQL databases.",
        NoSQLFirebaseMongoDB
      ),
      serviceItems(
        hash(),
        "Microsoft SQL",
        "Microsoft SQL",
        "You can get a dependable and secure data storage solution from our Microsoft SQL development services. Our skilled developers can create and implement a custom database that suits your needs, whether you need to manage data for a small business or an enterprise-level corporation. We specialize in creating highly accessible, secure, and scalable Microsoft SQL databases. Additionally, our experts can aid in the migration of your current databases to Microsoft SQL, assuring a seamless changeover with little downtime.",
        MicrosoftSQL
      ),
      serviceItems(
        hash(),
        "PHP MySQL",
        "PHP MySQL",
        "We provide a cost-effective method for managing data in web applications with our PHP MySQL development services. To match your business needs, a bespoke MySQL database can be designed and implemented by our talented experts. We specialize in creating web applications that are very responsive and have a PHP MySQL backend for quick data access and simple maintenance. Additionally, our experts can assist you with converting your current database to PHP MySQL, assuring a seamless transition with little downtime.",
        PHPmySQL
      ),
    ],
  },

  {
    id: hash(),
    slug: "Powerful desktop solutions for businesses.",
    title: "QA / Plugin / Desktop Development",
    name: "QA and Desktop Development",
    hpname: "QA and Desktop<br> Development",
    path: "qa-web-plugin-desktop-development",
    content:
      "Our QA services include both manual and automated testing for web and mobile applications. Our expert QA team will help you identify any potential issues with your software, ensuring that it is running smoothly and meeting your business goals. We use the latest tools and techniques to provide comprehensive testing services that help our clients achieve optimal results.",
    discription:
      "We provides high quality QA services worldwide. We have an exceptional team of consultants that understand your requirements and consult you with the best solutions applicable.",
    image: QAWebPluginandDesktopDevelopment,
    quote:
      "At eSpark Consulting Group, we pride ourselves on our ability to deliver top-quality solutions to our clients. Our team of experts has years of experience in the industry and is committed to staying up to date with the latest trends and technologies. We work closely with our clients to understand their unique needs and develop customized solutions that address those needs in the most efficient and effective manner possible.",
    quoteImage: QAWebPluginandDesktopDevelopmentQuote,
    icon: QAWebPluginandDesktopDevelopmentIcon,
    icon2: QAWebPluginandDesktopDevelopmentIconHover,
    childs: [
      serviceItems(
        hash(),
        "SQA Web and Mobile Applications",
        "SQA Web and Mobile Applications",
        "To ensure that your web and mobile applications satisfy high-quality requirements, use our manual QA testing services. Functional and non-functional testing will be carried out by our team of skilled QA testers to find any potential problems that might have an influence on the user experience. Together, we will create test plans, carry them out, and report on any difficulties that arise. Our aim is to guarantee that your mobile and online applications work as intended and deliver a great user experience.",
        QAManualWebMobileApp
      ),
      serviceItems(
        hash(),
        "LUA Plugin Development",
        "LUA Plugin Development",
        "Our LUA Plugin development services offer a versatile and portable way to increase the functionality of your applications. Our skilled team of developers will collaborate with you to build and deploy unique plugins that satisfy your company's needs. We are experts at creating high-performance plugins that are quick and effective. Our LUA Plugin development services can assist you in achieving your objectives, whether you need to interact with third-party software or add new capabilities.",
        LUAPluginDevelopment
      ),
      serviceItems(
        hash(),
        ".Net MVVM Development",
        ".NET MVVM Development",
        "Our.Net MVVM development services offer a cutting-edge and effective method for creating software programmers. The Model-View-View Model (MVVM) pattern will be used by our team of skilled developers to create scalable and maintainable apps. We specialize in creating high-performance software programs that are tailored to your company's requirements. We create software solutions that are quick and effective using the most recent.Net frameworks and tools. Our.Net MVVM development services will assist you in achieving your objectives, regardless of whether you need to create a desktop, web, or mobile application.",
        DotNetMVVMDevelopment
      ),
    ],
  },
];
