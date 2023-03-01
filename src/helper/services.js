import image2 from "../assets/images/repair-banner-image/repair-shape-circle.png";
import image3 from "../assets/images/repair-banner-image/repair-shape1.png";
import image4 from "../assets/images/repair-banner-image/repair-shape2.png";
import content from "../assets/images/services-image/content_writing.png";
import IT_Consulting from "../assets/images/services-image/IT_Consulting.png";
import marketing from "../assets/images/services-image/Digital_Marketing.png";
import engineering from "../assets/images/services-image/Reverse_Engineering.png";
import embedded from "../assets/images/services-image/Embedded_Firmware_Development.png";
import electrical from "../assets/images/services-image/Electrical_Schmeatic_Designs.png";
import Analysis from "../assets/images/services-image/Part_Searching_and_Analysis.png";
import commerce from "../assets/images/services-image/Digital_e-Commerce.png";
import Design from "../assets/images/services-image/Graphic_Design.png";
import IOT from "../assets/images/services-image/IoT_Product_Development_including_Technical_Support.png";
import PCB from "../assets/images/services-image/PCB_Layout_and_Designing.png";
import SEO from "../assets/images/services-image/Search_Engine_Optimization.png";
import UI from "../assets/images/services-image/UI_UX_Designing.png";
import web_design from "../assets/images/services-image/Web_Designing.png";
import componet from "../assets/images/services-image/Components_Library_Design.png";
import web_development from "../assets/images/services-image/Web_Development.png";
import PCB2 from "../assets/images/services-image/PCB-Manufacturing-and-Mass-Production.png";
import man_and_women from "../assets/images/man-and-women.png";
import circle_1 from "../assets/images/circle-1.png";
import cta_shape_1 from "../assets/images/cta-shape-1.png";

import WebApplicationDevelopment from "../assets/images/services/web-app-development.svg";
import ReactVueDevelopment from "../assets/images/services/react-vue-app-development.svg";
import ReactVueDevelopmentQuote from "../assets/images/services/react-vue-app-development-quote.svg";
import AspDotNetDevelopment from "../assets/images/services/asp-dot-net-development.svg";
import AspDotNetDevelopmentQuote from "../assets/images/services/asp-dot-net-development-quote.svg";
import NodeJSDevelopment from "../assets/images/services/node-js-development.svg";
import NodeJsDevelopmentQuote from "../assets/images/services/node-js-development-quote.svg";
import WordpressShopifyDevelopment from "../assets/images/services/wordpress-shopify-development.svg";
import WordpressShopifyDevelopmentQuote from "../assets/images/services/react-vue-app-development-quote.svg";

import MobileApplicationDevelopment from "../assets/images/services/mobile-app-development.svg";
import AndroidAppDevelopment from "../assets/images/services/android-app-development.svg";
import AndroidAppDevelopmentQuote from "../assets/images/services/android-app-development-quote.svg";
import IosAppDevelopment from "../assets/images/services/ios-app-development.svg";
import IosAppDevelopmentQuote from "../assets/images/services/ios-app-development-quote.svg";
import ReactNativeAppDevelopment from "../assets/images/services/react-native-app-development.svg";
import ReactNativeAppDevelopmentQuote from "../assets/images/services/react-native-app-development-quote.svg";
import FlutterAppDevelopment from "../assets/images/services/flutter-app-development.svg";
import FlutterDevelopmentQuote from "../assets/images/services/flutter-app-development-quote.svg";

const hash = () => {
  const s4 = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  };
  return `${s4()}${s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`;
};

const serviceItems = (id, title, name, content, image, quote, quoteImage) => {
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
    icon: "",
    name: "Web Application Development",
    path: "web-app-development",
    content:
      "We have an experienced and professional Front End & Backend Developer Team to execute your defined requirements enthusiastically.",
    image: WebApplicationDevelopment,
    childs: [
      serviceItems(
        hash(),
        "React / Vue Development",
        "React / Vue Development",
        "Our Angular development service will provide you with a responsive, high-speed, and effortless web application to navigate. ​",
        ReactVueDevelopment,
        "We are a leading custom web app development company that creates scalable web applications, web portals and solutions with high-quality standards. Thoroughly examining your preferences, requirements and expectations, our community of 100+ developers deliver top-notch web app development services to enhance your customer retention and boost brand equity.",
        ReactVueDevelopmentQuote
      ),
      serviceItems(
        hash(),
        "ASP.NET Development",
        "ASP.NET Development",
        "Our Angular development service will provide you with a responsive, high-speed, and effortless web application to navigate. ​",
        AspDotNetDevelopment,
        "We are a leading custom web app development company that creates scalable web applications, web portals and solutions with high-quality standards. Thoroughly examining your preferences, requirements and expectations, our community of 100+ developers deliver top-notch web app development services to enhance your customer retention and boost brand equity.",
        AspDotNetDevelopmentQuote
      ),
      serviceItems(
        hash(),
        "Node.JS Development",
        "Node.JS Development",
        "Our Angular development service will provide you with a responsive, high-speed, and effortless web application to navigate. ​",
        NodeJSDevelopment,
        "We are a leading custom web app development company that creates scalable web applications, web portals and solutions with high-quality standards. Thoroughly examining your preferences, requirements and expectations, our community of 100+ developers deliver top-notch web app development services to enhance your customer retention and boost brand equity.",
        NodeJsDevelopmentQuote
      ),
      serviceItems(
        hash(),
        "Wordpress / Shopify Development ",
        " Wordpress / Shopify Development ",
        "Our Angular development service will provide you with a responsive, high-speed, and effortless web application to navigate. ​",
        WordpressShopifyDevelopment,
        "We are a leading custom web app development company that creates scalable web applications, web portals and solutions with high-quality standards. Thoroughly examining your preferences, requirements and expectations, our community of 100+ developers deliver top-notch web app development services to enhance your customer retention and boost brand equity.",
        WordpressShopifyDevelopmentQuote
      ),
    ],
  },
  {
    id: hash(),
    icon: "",
    name: "Mobile App Development",
    path: "mobile-app-development",
    content:
      "We have an experienced and professional Front End & Backend Developer Team to execute your defined requirements enthusiastically.",
    image: MobileApplicationDevelopment,
    childs: [
      serviceItems(
        hash(),
        "Android App Development Service.​",
        "Android App​",
        "Build top-notch Android applications with eSpark, which will be completely designed for your business needs.​​",
        AndroidAppDevelopment,
        "We have perfected the art of mobile applications. With over a decade of experience under our belt, our technically trained iOS developers, Android developers, and designers deliver state-of-the-art, responsive, and engaging mobile applications. Here at eSpark, we excel at creating end-to-end tailor-made mobile solutions using the latest technologies with a seamless interface, frictionless navigation, and stunning visuals.",
        AndroidAppDevelopmentQuote
      ),
      serviceItems(
        hash(),
        "iOS App Development Service.​",
        "iOS App​",
        "Build top-notch customizable iOS applications designed to boost your business’s potential and reach.​",
        IosAppDevelopment,
        "Our group of professionals create innovative and user-friendly iOS applications suitable for all iOS range of products offering easy accessibility and customer satisfaction. We have the expertise to create iOS applications for various industries like retail, fashion, healthcare, and much more.​",
        IosAppDevelopmentQuote
      ),
      serviceItems(
        hash(),
        "React Native App Development Service.​",
        "React NAtive App​",
        "Do you want the end user to have the best performance and user experience? Our React Native App Development Service will provide you with exactly that. ​​",
        ReactNativeAppDevelopment,
        "Our experts will develop a react native application which will not only help you modernize your business’s functionality but also generate higher revenue. Having top-notch performance and user experience will make your business stand out.​",
        ReactNativeAppDevelopmentQuote
      ),
      serviceItems(
        hash(),
        "Flutter App Development Service.​",
        "React NAtive App​",
        "Do you want the end user to have the best performance and user experience? Our React Native App Development Service will provide you with exactly that. ​",
        FlutterAppDevelopment,
        "Our Flutter application development service is one of the best solutions for mobile application development, enabling smooth and easy cross-platform giving your application a uniform appearance. ​",
        FlutterDevelopmentQuote
      ),
    ],
  },
];
