import hardware_img from "../assets/images/hardware/banner_img.jpg";
import software_img from "../assets/images/iot-banner-image/iot-main-img1.png";

export const products = [
  {
    id: 1,
    name: "Software Products",
    image: software_img,
    data: [
      {
        name: " Command دو ",
        image:
          "https://play-lh.googleusercontent.com/B8DijOQgHXMif3UkHsWnCEMtbteswC57GoGWtx6vQ8HSokvhaAFkAGE103bg0LA46Xw=w2560-h1440-rw",
        detail:
          "<p>Command دو allows you to order and command an office boy to get lunch for you can be incredibly convenient and efficient. Imagine being able to simply pull out your phone, open the app, and place an order for your favourite lunch items without ever having to leave your desk.</p> <br/>  <strong>Simplify Your Life With Commandدو Our App Offers</strong> <br/> <br/> <ul><li>Provide internal office use services for employees and employers.</li><li>Communicate daily tasks to office boys</li><li>Add Reminders and Apply Notifications for all your office tasks.</li><li>Call and chat with your fellow and rate office boys/cleaners.</li><li> Order Lunch from the cafeteria and View Order Histories.</li></ul>",
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
          "<p>A data logger (a data recorder) is an electronic device that records data over time or about location either with a built-in instrument or sensor or via external instruments and sensors. Increasingly, but not entirely, they are based on a digital processor (or computer), and called digital data loggers (DDL). They generally are small, battery-powered, portable, and equipped with a microprocessor, internal memory for data storage, and sensors. Some data loggers interface with a personal computer and use software to activate the data logger and view and analyze the collected data, while others have a local interface device (keypad, LCD) and can be used as a stand-alone device.</p>",
      },
      {
        name: "",
        image:
          "https://cdn3.volusion.com/pgqfm.mgqub/v/vspfiles/photos/TMCM-1310-2.jpg?v-cache=1533117277",
        button: false,
        sectionId: 3,
        routeLink: "/espark-app",
        detail: `<p>From light displays and IoT devices to signage and manufacturing processes, the Raspberry Pi Pico series gives you the power to control countless home, hobby, and industrial operations.</p><br/><p>Programmable in C and MicroPython, Pico is adaptable to a vast range of applications and skill levels, and getting started is as easy as dragging and dropping a file.</p><br/><p>More experienced users can take advantage of Raspberry Pi Pico's rich peripheral set, including SPI, I2C, and eight Programmable I/O (PIO) state machines for custom peripheral support.</p><br/><p>Now available with wireless connectivity or pre-soldered headers, for even more flexibility in your projects.</p><br/>`,
      },
      {
        name: "EtherCAT based Stepper Driver",
        image:
          "https://cdn3.volusion.com/pgqfm.mgqub/v/vspfiles/photos/TMCM-1310-2.jpg?v-cache=1533117277",
        button: false,
        sectionId: 2,
        routeLink: "/espark-app",
        detail:
          "<p>The TMCM-1310 is a single-axis stepper motor controller/driver standalone board with closed-loop support. For communication, a USB interface and EtherCAT®* are provided. The module supports motor currents up to 3A RMS and supplies up to 48V nominal voltages. The module offers inputs for one incremental a/b/n (TTL, open-collector and differential inputs) or absolute SSI encoders (selectable in software). There are dedicated stop-switch inputs, 8 general-purpose inputs, and 8 general-purpose outputs.</p><br/>",
      },
    ],
  },
];
