import hardware_img from "../assets/images/hardware/banner_img.jpg";
import software_img from "../assets/images/iot-banner-image/iot-main-img1.png";

export const products = [
  {
    id: 1,
    name: "Software Products",
    image: software_img,
    data: [
      {
        name: "eSpark Lunch App",
        image:
          "https://startp-next.envytheme.com/images/iot-features-image/iot-feature-image1.png",
        detail:
          "<p>eSpark Consultants is a complete solution provider for modern software development imparting latest methods and techniques to tackle the increasing software advancements. We began our journey in 2015 and are working hard since then to bring a big smile on the face of our customers by making them visible among their competitors</p><br/><p>We are passionate about providing solutions that represent real value for money. We understand and believe you can’t afford to waste your investment for such a crucial aspect of your business by leaving it in the hands of amateurs. You are investing not only money, but your time when you decide to design and develop your project with us.</p><p>Times and conditions change so rapidly that we must keep our aim constantly focused on the future</p> <br/><p>CEO eSpark</p>",
        button: true,
        sectionId: 1,
        routeLink: "/espark-app",
      },
    ],
  },
  {
    id: 2,
    name: "Hardware Products",
    image: hardware_img,
    data: [
      {
        name: "Data logger",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/5/5d/Datalogger.jpg",
        button: false,
        sectionId: 1,
        routeLink: "/espark-app",
        detail:
          "<p>A data logger (also datalogger or data recorder) is an electronic device that records data over time or about location either with a built-in instrument or sensor or via external instruments and sensors. Increasingly, but not entirely, they are based on a digital processor (or computer), and called digital data loggers (DDL). They generally are small, battery-powered, portable, and equipped with a microprocessor, internal memory for data storage, and sensors. Some data loggers interface with a personal computer and use software to activate the data logger and view and analyze the collected data, while others have a local interface device (keypad, LCD) and can be used as a stand-alone device.</p>",
      },
      {
        name: "",
        image:
          "https://cdn3.volusion.com/pgqfm.mgqub/v/vspfiles/photos/TMCM-1310-2.jpg?v-cache=1533117277",
        button: false,
        sectionId: 3,
        routeLink: "/espark-app",
        detail:
          "<p>From light displays and IoT devices to signage and manufacturing processes, the Raspberry Pi Pico series gives you the power to control countless home, hobby, and industrial operations.</p><br/><p>Programmable in C and MicroPython, Pico is adaptable to a vast range of applications and skill levels, and getting started is as easy as dragging and dropping a file.</p><br/><p>More experienced users can take advantage of Raspberry Pi Pico's rich peripheral set, including SPI, I2C, and eight Programmable I/O (PIO) state machines for custom peripheral support.</p><br/><p>Now available with wireless connectivity or pre-soldered headers, for even more flexibility in your projects.</p><br/>",
      },
      {
        name: "EtherCAT based Stepper Driver",
        image:
          "https://cdn3.volusion.com/pgqfm.mgqub/v/vspfiles/photos/TMCM-1310-2.jpg?v-cache=1533117277",
        button: false,
        sectionId: 2,
        routeLink: "/espark-app",
        detail:
          "<p>The TMCM-1310 is a single axis stepper motor controller/driver standalone board with closed loop support. For communication an USB interface and EtherCAT®* are provided. The module supports motor currents up to 3A RMS and supply voltages up to 48V nominal. The module offers inputs for one incremental a/b/n (TTL, open-collector and differential inputs) or absolute SSI encoders (selectable in software). There are dedicated stop switch inputs, 8 general purpose inputs, and 8 general purpose outputs.</p><br/>",
      },
    ],
  },
];
