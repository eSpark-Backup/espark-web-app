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

export const products = [
  {
    id: hash(),
    name: "Software Products",
    data: [
      {
        name: "eSpark Mobile Application",
        image:
          "https://startp-next.envytheme.com/images/iot-features-image/iot-feature-image1.png",
        detail:
          "<p>eSpark Consultants is a complete solution provider for modern software development imparting latest methods and techniques to tackle the increasing software advancements. We began our journey in 2015 and are working hard since then to bring a big smile on the face of our customers by making them visible among their competitors</p><br/><p>We are passionate about providing solutions that represent real value for money. We understand and believe you can’t afford to waste your investment for such a crucial aspect of your business by leaving it in the hands of amateurs. You are investing not only money, but your time when you decide to design and develop your project with us.</p><p>Times and conditions change so rapidly that we must keep our aim constantly focused on the future</p> <br/><p>CEO eSpark</p>",
        button: true,
        sectionId: 1,
        routeLink: "/espark-app",
      },
      {
        name: "eSpark Mobile Application",
        image:
          "https://startp-next.envytheme.com/images/iot-features-image/iot-feature-image1.png",
        detail:
          "<p>eSpark Consultants is a complete solution provider for modern software development imparting latest methods and techniques to tackle the increasing software advancements. We began our journey in 2015 and are working hard since then to bring a big smile on the face of our customers by making them visible among their competitors</p><br/><p>We are passionate about providing solutions that represent real value for money. We understand and believe you can’t afford to waste your investment for such a crucial aspect of your business by leaving it in the hands of amateurs. You are investing not only money, but your time when you decide to design and develop your project with us.</p><p>Times and conditions change so rapidly that we must keep our aim constantly focused on the future</p> <br/><p>CEO eSpark</p>",
        button: true,
        sectionId: 2,
        routeLink: "/espark-app",
      },
    ],
  },
  {
    id: hash(),
    name: "Hardware Products",
    data: [
      {
        name: "RP2040",
        image:
          "https://o.remove.bg/downloads/345cca86-d7b1-4748-ae8b-f65aab94b26c/image-removebg-preview.png",
        button: false,
        sectionId: 1,
        routeLink: "/espark-app",
        detail:
          "<p>Designed by Raspberry Pi, RP2040 features a dual-core Arm Cortex-M0+ processor with 264kB internal RAM and support for up to 16MB of off-chip flash. A wide range of flexible I/O options includes I2C, SPI, and - uniquely - Programmable I/O (PIO). These support endless possible applications for this small and affordable package.</p>",
      },
      {
        name: "",
        image:
          "https://hackster.imgix.net/uploads/attachments/1367566/wokwi-esp32-micropython-32_QHafDv4Rjj.gif?auto=compress&gifq=35&w=680&h=510&fit=max",
        button: false,
        sectionId: 3,
        routeLink: "/espark-app",
        detail:
          "<p>From light displays and IoT devices to signage and manufacturing processes, the Raspberry Pi Pico series gives you the power to control countless home, hobby, and industrial operations.</p><br/><p>Programmable in C and MicroPython, Pico is adaptable to a vast range of applications and skill levels, and getting started is as easy as dragging and dropping a file.</p><br/><p>More experienced users can take advantage of Raspberry Pi Pico's rich peripheral set, including SPI, I2C, and eight Programmable I/O (PIO) state machines for custom peripheral support.</p><br/><p>Now available with wireless connectivity or pre-soldered headers, for even more flexibility in your projects.</p><br/>",
      },
    ],
  },
];
