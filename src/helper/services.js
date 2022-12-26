import image2 from "../assets/images/repair-banner-image/repair-shape-circle.png";
import image3 from "../assets/images/repair-banner-image/repair-shape1.png";
import image4 from "../assets/images/repair-banner-image/repair-shape2.png";
import content from "../assets/images/services-image/content_writing.png";
import IT_Consulting from "../assets/images/services-image/IT_Consulting.png";
import marketing from "../assets/images/services-image/Digital_Marketing.png";
import commerce from "../assets/images/services-image/e-commerce.png";
import Design from "../assets/images/services-image/Graphic-Design.png";
import IOT from "../assets/images/services-image/IOT.png";
import PCB from "../assets/images/services-image/PCB.png";
import SEO from "../assets/images/services-image/SEO.png";
import UI from "../assets/images/services-image/UIUX Designing.png";
import web_design from "../assets/images/services-image/Web-Designing.png";

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

const serviceItems = (id, heading, des, image1, image2, image3, bold) => {
  return {
    id: id,
    heading: heading,
    description: des,
    imgUrlMan: image1,
    imgUrlCircle: image2,
    imgUrlCta: image3,
    bold: bold,
  };
};

export const services = [
  {
    id: hash(),
    icon: "",
    name: "Web Development",
    data: {
      image: [web_design, image2, image3, image4],
      content: [
        serviceItems(
          1,
          "SEO Friendly website",
          "We can create for you a beautiful SEO friendly website that can boost up your sales and website traffic. We have assisted various businesses who have asked us to develop a website for them that would allow them to recognize a new place for their brand.",
          man_and_women,
          circle_1,
          cta_shape_1
        ),
        serviceItems(
          2,
          "COST EFFECTIVE SOLUTIONS",
          "We provide you with cost effective solutions for your website. We know how important it is for your business to have proper traffic and properly defines your brand therefore we develop a proper strategy for the future growth of your website.",
          man_and_women,
          cta_shape_1,
          circle_1
        ),
        serviceItems(
          3,
          "Taking care of your business",
          "The Websites we create are optimized. Our Agile Methodology of development is proven and effective. No worrying as we have an expert web development team. Our web developers are experienced and certified. We build responsive websites that auto adapt to device screens",
          man_and_women,
          "",
          cta_shape_1
        ),
      ],
      shortDescription:
        "<p>If you need an app developing, a partial- or full-custom website, or anything in between – eSpark Consulting and our development experts have you covered!<br/> <br/><strong>A website with a perfect design is incomplete without the high- quality website development.</strong></p><p>As you know our technology is advancing day by day and businesses are also making effectual use of technology. Everyone requires a website that possesses creative and eye-catching layouts and designs that attract users and appeal them to go with it.</p>",
      extraContent:
        "<strong>A website with a perfect design is incomplete without the high- quality website development.</strong> <br/> <br/> <p>As you know our technology is advancing day by day and businesses are also making effectual use of technology. Everyone requires a website that possesses creative and eye-catching layouts and designs that attract users and appeal them to go with it.</p>",
      heading: "Strengthening your web connections",
    },
  },
  {
    id: hash(),
    icon: "",
    name: "UI UX Design",
    data: {
      image: [UI, image2, image3, image4],
      content: [
        serviceItems(
          1,
          "UI Design:",
          "We expand intuitive and graphically fascinating person interfaces for web sites, Mobile web sites, and alertness software. Whether you want to decorate an existing utility’s person interface or you’re beginning a new initiative. The value of a software product is at once related with its person interface. This is one factor of the software, despite the fact that negligible in terms of improvement effort, impacts 90% of its impression and person enjoy. A nicely designed interface shall we the consumer accomplish their task without problems. We use our expertise of interface layout standards along side guy-gadget interface usability assessments to present you a product you can be proud of.",
          man_and_women,
          circle_1,
          cta_shape_1
        ),
        serviceItems(
          2,
          "Website Design / Redesign:",
          "A agency’s website is its face to the sector. It is likewise becoming the preferred way to do enterprise across the world and for this reason has to reflect the kind of corporation it represents and be seasoned-active to its target market. Combined with usability and accessibility, design can be the most essential detail of a web venture. An appealing look and feel in the correct tone of voice will dramatically improve a websites audience participation and stickiness. Your brands might be reflected extra appropriately and return visits will soar. As designers, we ensure that site visitors to web sites we create are capable without difficulty navigate across the web site and locate the statistics they’re searching out. We additionally ensure that the website is capable of develop in content material and functionality with time. By expertise our patron’s enterprise approach, clients, and opposition in detail, we set up a completely unique, value-effective web presence that builds and reinforces their emblem and educates their clients.",
          man_and_women,
          cta_shape_1,
          circle_1
        ),
        serviceItems(
          3,
          "Animation:",
          "Over the closing decade Flash has proved to be one of the maximum elegant and famous web design technologies. It allows developers and customers to revel in the entire freedom of creation, creates a positive effect on visitors and complements your message. These days technologies like HTML5 and Javascript may be used to develop also very compelling animations. If you have a product or business enterprise that you need to demonstrate an lively presentation is an powerful way to meet it. With professionals on this discipline you’ll use the actual energy of animation reinforcing the impact that your website online creates. Whatever era you select the best use of animation will add elegance and dynamics for your assignment..",
          man_and_women,
          circle_1,
          cta_shape_1
        ),
        serviceItems(
          4,
          "Multimedia Solutions:",
          "We create effective multimedia abilties for enhancing internet interactivity, product demonstrations and company displays. Interactive displays assist in increasing the focal point of your target audience, and ensure that the point of interest isn’t misplaced! The use of multimedia developed in Adobe Flash, HTML5 or Silverlight in a internet site, if used within the proper way, can substantially boom the impact on your audience and assist raise your website above your competitors. It can offer electricity on your exhibit of products or services and may deliver your message with most effect.",
          man_and_women,
          cta_shape_1,
          circle_1
        ),
        serviceItems(
          5,
          "Banner Design:",
          "We increase banners for net and mobile sites that can be used as effective commercial and promoting gear. Banners are normally animated the usage of Flash or lively GIFs. Flash and animated GIF banners have foremost makes use of at the internet, firstly as an addition on your organizations’ internet site providing intensity and injecting ‘existence’ into a static internet page. The other principal use is as an marketing device, with the banner positioned strategically on any other website providing an attention-grabbing hyperlink, drawing customers who might also have in no way located you or your internet site.",
          man_and_women,
          circle_1,
          cta_shape_1
        ),
        serviceItems(
          6,
          "Presentation Design:",
          "Whatever your want for a presentation, whether it be for corporate events or a convention. We can create shows to in shape all wishes. We decorate those new displays and existing displays by using including:",
          man_and_women,
          cta_shape_1,
          circle_1
        ),
        serviceItems(
          7,
          "E-Newsletter Design:",
          "We are designing e-newsletters which could deliver your message on your audience efficiently. Improving your company identity, clarify your message and attracting the recipients to the core of the commercial enterprise.",
          man_and_women,
          circle_1,
          cta_shape_1
        ),
      ],
      shortDescription:
        "<p>If you need an UI/UX Design , eSpark Consulting and our Front end Designer experts have you covered!</p>",
      extraContent:
        "<strong > UI/UX design specialists will work closely with you to conceive a mobile, desktop or web app that both satisfies its users and meets your specific business and industry requirements..</strong> <br/><br/> <p>We are one of the leading web design business enterprise within the Middle-East and Pakistan and we construct innovative user interfaces that obtain splendid consequences on time and on price range. Our customers use our services to supply the all-important ‘wow element’ to their online presence. We can unleash your agency’s complete capability on the web and supply a extremely advantageous go back to your internet site investments. We recognize a way to make a website a precious asset for your commercial enterprise – the way to generate extra leads, increase sales, positioning your enterprise logo nicely and increasing purchaser loyalty.</p><p>In order to make your website more competitive eSpark Consulting Group assist you to to attract, convert and retain extra customers by efficiently improving your internet presence.</p>",
      heading: "Leading UI/UX Design Agency That Will Level Up Your Business",
    },
  },
  {
    id: hash(),
    name: "Graphic Design",
    data: {
      image: [Design, image2, image3, image4],
      content: [
        serviceItems(
          1,
          "Save money & time",
          "we offer affordable prices to all the people and we have comparatively low prices for custom design from others.",
          man_and_women,
          circle_1,
          cta_shape_1
        ),
        serviceItems(
          2,
          "More creativity",
          "We have creative people who have worked with clients from all over the world and can generate a large number of ideas or solutions to problems in no time.",
          man_and_women,
          cta_shape_1,
          circle_1
        ),
        serviceItems(
          3,
          "A world of design",
          "A perfect group of freelancers ready to work with you until you are satisfied with our designs.We keep ourselves updated with the latest trends of Graphic Designing around the globe and we understand its needs and also what value we can add to these trends. Thus, we are serving the global market with our best solutions of Graphic Design and Multimedia as per your demand and paving an online way to your success in business.",
          man_and_women,
          circle_1,
          cta_shape_1
        ),
      ],
      shortDescription:
        "<p>Online or off, eye-catching visuals are a great way to grab someone’s attention. No matter your project or campaign, the Catalyst Solutins Provider at eSpark Consulting have the creative skills to make you stand out…</p>",
      extraContent:
        "<strong> Your brand is your business and one of the most critical part important of your brand is your logo. Ensuring that your business logo configuration is extraordinary and speaks to precisely what your association rely on, is the initial step for ensuring brand achievement.</strong> <br /> <br /> <p>You will find here graphic design gigs across various industries. Find the ones that suit your needs and budget both-creativity at its best.</p> <strong>Work directly with designer</strong><br /> <br /><strong>Fixed prices and terms</strong> <br /> <br /><strong>Suitable for every budget</strong>",
      heading: "Adding Creativity to your Triumph",
    },
  },
  {
    id: hash(),
    icon: "",
    name: "Web Design",
    data: {
      image: [web_design, image2, image3, image4],
      content: [
        serviceItems(
          2,
          "E commerce Websites",
          "When you’re selling online, you want to make sure that your website represents who you are and what you do. After all, it’s your chance to make an impression on your customers. And we are here to help you make that impression everlasting.",
          man_and_women,
          cta_shape_1,
          circle_1
        ),
        serviceItems(
          3,
          "SMALL BUSINESS",
          "If your business has not fully developed yet, and still you want us to design your website; then we can easily help you in developing your business. We can provide a suitable design for the website of your company that would not only help you to attract the customers but would also allow you to grow your small company.",
          man_and_women,
          circle_1,
          cta_shape_1
        ),
        serviceItems(
          4,
          "Search Engine Optimization",
          "we design and create the websites for you that perform well in the SEO context and help you to climb the desired position of the search engines so that you would be able to increase the traffic to your website. We Analyze, Plan, Create and Deliver you the website in the best way possible and it will surely satisfy you.",
          man_and_women,
          cta_shape_1,
          circle_1
        ),
      ],
      shortDescription:
        "Product lifecycle services from prototyping to product support and everything in between , Our Team of eSpark Is looking Forward for your sollutions..",
      extraContent:
        "<strong>A great website designed by an expert Web Designer is what you Need for you brand.</strong> <br /> <br /> <p>It’s not easy to design the highly responsive designs that would be attracting the eyes of the people. It takes a lot of effort along the proper planning. We consider planning to be the core element in designing; as we need to customize the designs and craft the aesthetically impressive designs that would lock the success for you.We design for you.</p>",
      heading: "Custom websites at affordable prices",
    },
  },
  {
    id: hash(),
    icon: "",
    name: "Digital e-Commerce",
    data: {
      image: [commerce, image2, image3, image4],
      content: [
        serviceItems(
          2,
          "DESIGNING A NEW ONLINE PRESENCE",
          "A good web design is easy to use, aesthetically pleasing, and suits the user group and brand of the website. Our webpages are designed with a focus on simplicity, so that no extraneous information and functionality that might distract or confuse users appears.",
          man_and_women,
          cta_shape_1,
          circle_1
        ),
        serviceItems(
          3,
          "CUSTOM BUILT RESPONSIVE MOBILE FRIENDLY",
          "Two of the most common methods for designing websites that work well both on desktop and mobile are responsive and adaptive design.Preserving a layout that is as consistent as possible between devices is crucial to maintaining user trust and engagement. Our e commerce website design and development services are low-priced and sensible which take into account a wide range of organizations whether huge or little. While the quality hits the roof, the price remains on the ground for you to conveniently get the best outcome at the lowest possible cost.",
          man_and_women,
          circle_1,
          cta_shape_1
        ),
      ],
      shortDescription:
        "Technologies, programming languages, frameworks & tools we leverage to develop your product , we are here for your E-commerce solutions..",
      extraContent:
        "<strong> If your online business site isn’t showing up at the highest level, then permit us to grow organic traffic for your website.</strong> <br /> <br /> <p>Our digital e-commerce make a major impact on your organic visibility and allow you to get the desired results for your e-commerce business. Every customer is treated individually and is provided with custom solutions according to the brand, targeted audience, and other relevant specifications.</p>",
      heading: "Digital e-commerce is always the one",
    },
  },
  {
    id: hash(),
    icon: "",
    name: "Digital Marketing",
    data: {
      image: [marketing, image2, image3, image4],
      content: [
        serviceItems(
          2,
          "DIGITAL COMPETITIVE ANALYSIS",
          "We conducting a marketing competitive analysis that helps your website to: <br /> Compare the topics, tactics, and channels driving market performance for you and your competitors. Uncover opportunities to outperform the competition and differentiate your brand.Benchmark your brand against competitors, industry leaders, and market influencers.",
          man_and_women,
          cta_shape_1,
          circle_1
        ),
        serviceItems(
          3,
          "CONTENT MARKETING",
          "Content marketing is a form of marketing focused on creating, publishing, and distributing content for a targeted audience online. We are here to provide you with the best content marketing that will target your desired audience and will increase your website traffic",
          man_and_women,
          circle_1,
          cta_shape_1
        ),
        serviceItems(
          4,
          " Our best digital marketing Services may help your business more attractive, increase traffic and sales as well convert more qualified buyers online.",
          "",
          man_and_women,
          cta_shape_1,
          circle_1
        ),
      ],
      shortDescription:
        "As part of our suite of agency services, eSpark Consulting also share our knowledge with others by providing professional marketing.",
      extraContent:
        "<strong>Marketing has always been about connecting with your audience in the right place and at the right time.</strong> <br/> <br/> <p>Our skilled team of digital marketers will create, manage, and deliver top-performing digital marketing campaigns for your business. digital marketing is a strategy to create links with your buyers so we make every digital strategy prominent. We make use of many digital tactics and channels to connect your website with customers. We change your website to a business’s online branding asset.</p>",
      heading: "Bring out your business to the whole world",
    },
  },

  {
    id: hash(),
    icon: "",
    name: "Content Writing",
    data: {
      image: [content, image2, image3, image4],
      content: [
        serviceItems(
          2,
          "Exclusive Content",
          "We use different content types to suit your brand in different ways. we don’t think that a certain type of content will serve you, we write content in different ways to suit your brand.",
          man_and_women,
          cta_shape_1,
          circle_1
        ),
        serviceItems(
          3,
          "Quick Turnaround Time",
          "Our writers take turnaround times seriously, so most orders on our marketplace are completed within 24 hours. If you need one piece of high-quality content created quickly or you’re looking to scale up, our workforce will make it happen.",
          man_and_women,
          circle_1,
          cta_shape_1
        ),
        serviceItems(
          4,
          "High Quality",
          "We believe your site’s content should be unique, specific and high-quality. It should not be mass-produced or outsourced on a large number of other sites. We always keep this in mind that your content should be created primarily to give visitors a good user experience.",
          man_and_women,
          cta_shape_1,
          circle_1
        ),
        serviceItems(
          5,
          "We believe that ",
          "“Good content is not storytelling. It’s telling your story well”",
          man_and_women,
          circle_1,
          cta_shape_1
        ),
      ],
      shortDescription:
        "the experts at eSpark Consulting and the agency services we provide can certainly ease the burden and help you get it right!",
      extraContent:
        "<strong>Whatever industry you’re in, you need experts who can augment your audience. We are the one you’re looking for</strong><br /> <br /> <p>Content writing is the process of planning, writing and editing web content, typically for digital marketing purposes and we carefully follow all these steps to ensure a perfect content for you that includes blog posts and articles, scripts for videos and podcasts. We also write content for specific platforms, such as tweetstorms on Twitter or text posts on Reddit.</p>",
      heading: "Content is the reason search began in the first place",
    },
  },
  {
    id: hash(),
    icon: "",
    name: "Search Engine Optimization",
    data: {
      image: [SEO, image2, image3, image4],
      content: [
        serviceItems(
          2,
          "GOOGLE RANKING",
          "Google ranking systems are designed to do just that: sort through hundreds of billions of webpages in our Search index to find the most relevant. We are here to make it happen for you and as you know fresh content from a creative mind plays a bigger role for your website.",
          man_and_women,
          cta_shape_1,
          circle_1
        ),
        serviceItems(
          3,
          "Content Optimization",
          "Making sure your content is written in a way that it can reach the largest possible target audience. process of optimizing content includes making sure associated keywords are present, adding meta and title tags, and relevant links.",
          man_and_women,
          circle_1,
          cta_shape_1
        ),
        serviceItems(
          4,
          "Search engine optimization is a powerful and cost-effective method of online marketing.",
          "",
          man_and_women,
          cta_shape_1,
          circle_1
        ),
      ],
      shortDescription:
        "Page one of a search engine is the modern equivalent of the high street… Find out how expert agency services in the field of search engine optimisation eSpark Consulting can help you climb the rankings & claim your spot!",
      extraContent:
        "<strong>Whatever industry you’re in, you need experts who can augment your audience. We are the one you’re looking for</strong><br /> <br /> <p>We provide complete support to help you rank top on the search engine.Search is often the primary source of digital traffic for brands and complements other marketing channels. We can provide you greater visibility and ranking higher in search results than your competition.</p>",
      heading: "Good SEO work only gets better over time",
    },
  },
  {
    id: hash(),
    icon: "",
    name: "IT Consulting",
    data: {
      image: [IT_Consulting, image2, image3, image4],
      content: [
        serviceItems(
          2,
          "Our Responsibilities",
          <div class="col-lg-8 features-details">
            <div class="features-details-desc">
              <ul class="features-details-list">
                <li>meet with clients to determine requirements</li>
                <li>work with clients to define the scope of a project</li>
                <li>plan timescales and the resources needed</li>
                <li>
                  be involved in sales and support, and where appropriate,
                  maintain contact with client organisations
                </li>
                <li>
                  clarify a client’s system specifications, understand their
                  work practices and the nature of their business
                </li>
                <li>
                  identify potential clients and build and maintain contacts.
                </li>
              </ul>
            </div>
          </div>,
          man_and_women,
          cta_shape_1,
          circle_1
        ),
        serviceItems(
          3,
          "Our Aim:",
          <div class="col-lg-6 features-details">
            <div class="features-details-desc">
              <ul>
                <li>Align IT with strategic business initiatives.</li>
                <li>
                  Provide solutions that are both flexible and scalable to adapt
                  to a constantly changing market.
                </li>
                <li>
                  Strategize, develop and implement new ingenuities with optimal
                  speed to remain competitive.
                </li>
              </ul>
              <strong>You just have to trust us and We’ll Raise you UP.</strong>
            </div>
          </div>,
          man_and_women,
          circle_1,
          cta_shape_1
        ),
      ],
      shortDescription:
        "IT strategy development and consulting services to enhance business productivity , eSpark Team is ready for yor help..",
      extraContent:
        "<strong>IT consulting services are advisory services for you and we will help you assess different technology strategies for your business.</strong> <p>Our IT Services help our customers make the most of their IT investments, from providing system integration solutions, application development and management services and more.We will consider all aspects of a situation and propose a number of solutions, all with clearly defined pros and cons. Essentially, we believe that major changes to your IT infrastructure calls for a clearly defined process.</p><p>We’ll provide you strategic guidance  with regard to technology and IT infrastructures and will enable major business processes through enhancements to IT. We provide guidance and technical expertise.</p>",
      heading: "Strategy and technology consultants for your Business.",
    },
  },
  {
    id: hash(),
    icon: "",
    name: "IoT Product Development including Technical Support",
    data: {
      image: [IOT, image2, image3, image4],
      content: [],
      shortDescription:
        "IoT is the science of connecting physical devices using the internet to build a smart and connected world and we offer you the best services regarding that.",
      extraContent:
        "<strong>IoT is the science of connecting physical devices using the internet to build a smart and connected world. IoT uses smart software solutions and makes it possible for objects to communicate with one another. </strong> <br /> <br /> <p>Our IoT development solution helps in increasing business efficiencies by streamlining processes using the power of technology. We help you integrate mobility with IoT solution so that you have every control at your fingertips. You can manage everything using your smartphone irrespective of the device involved in IoT product development. In true sense, you experience a connected world!</p> <p>We have with us a team of highly proficient and veteran IoT app developers who use the most advanced technology to offer a complete range of app development services for the Internet of Things. A wide range of IoT app development services offered by us include many IOT services.</p> <p>You will diagnose and troubleshoot software and hardware problems and help our customers install applications and programs. <strong>Technical Support</strong> Engineer <strong>responsibilities</strong> include resolving network issues, configuring operating systems and using remote desktop connections to provide immediate <strong> support</strong>.</p>",
      heading:
        "The IoT will generate an enormous, truly unprecedented amount of precise information about buyers and their needs. It’s a marketer’s dream come true.",
    },
  },
  {
    id: hash(),
    icon: "",
    name: "PCB Layout and Designing",
    data: {
      image: [PCB, image2, image3, image4],
      content: [],
      shortDescription:
        "We have many talented members having many ideas and guidelines that can be drawn up for the design and layout of a PCB.",
      extraContent:
        "<strong>The PCB layout and design is a specialist skill requiring knowledge of not only of the PCB design software and PCB CAD system, but also a variety of standards and techniques used to ensure that the basic circuit design is successfully transferred to an overall printed circuit board that can be manufactured in an electronics circuit manufacturing environment.</strong> <br /> <br /> <p>We are one of those specialist that will satisfy you with our designs.</p> <p>There are many ideas and guidelines that can be drawn up for the design and layout of a PCB. The list below covers a number of them. Obviously there are more, and the PCB design guidelines list below should not be thought of as a complete list.</p> <p>In order that the PCB design guidelines can be followed more easily, the guidelines are split into sections :</p> <ul><li>Board constraint design guidelines – those covering the initial constraints on the board</li> <li>Overall layout design guidelines</li> <li>Guidelines associated with the planes or layers</li> <li>Track design guidelines</li> <li>Thermal issues</li> <li>Signal integrity and RF considerations</li></ul> <p>These PCB design guidelines should be addressed before the main design of the circuit starts. They should effectively be some of the first elements of the component placement and that our moto.</p>",
      heading: "Design is a formal response to a strategic question",
    },
  },
  {
    id: hash(),
    icon: "",
    name: "Embedded Firmware Development",
    data: {
      image: [
        "https://startp-next.envytheme.com/images/bigdata-analytics/discover-img1.png",
        image2,
        image3,
        image4,
      ],
      content: [],
      shortDescription:
        "Embedded firmware is the flash memory chip that stores specialized software running in a chip in an embedded device to control its functions. In eSpark we have talented people working closely so that no error occurs in firmware.",
      extraContent:
        "<strong > Embedded firmware is the flash memory chip that stores specialized software running in a chip in an embedded device to control its functions.</strong> <br/><br/> <p>Digital transformation is touching upon various physical objects, making them smart and powerful. The engine for such devices is embedded software that is an integral part of the rapidly developing IoT ecosystem. Here’s a short list of some popular languages for software and embedded firmware development.</p> <ul><li> <strong>C/C++: C </strong> is something of a legacy language for embedded systems and tends to be preferred over C++.</li><li> <strong >Hardware Description Languages (HDLs): </strong> The most popular are probably VHDL or Verilog. If you’re programming an FPGA or designing an ASIC, use an HDL to define digital logic. SystemVerilog is a good choice if you are designing a system with extensive digital logic.</li> <li> <strong >Python/MicroPython:</strong >Python is great for software applications, but many do not prefer it due to the periodic garbage collection operations required, which may create some latency problems. However, there is such a huge developer community around Python that developers can access a huge range of functionality and powerful computing capabilities.</li></ul>",
      heading:
        "Quality isn’t something that can be argued into an article or promised into it. It must be put there",
    },
  },
  {
    id: hash(),
    icon: "",
    name: "Electrical Schematic Design",
    data: {
      image: [
        "https://startp-next.envytheme.com/images/agency-image/agency-services-img1.jpg",
        image2,
        image3,
        image4,
      ],
      content: [],
      shortDescription:
        "Schematic design is the first phase of basic services for project design. Here we first provide you with the design and will recreate our designs until you are satisfied.",
      extraContent:
        "<strong> Schematic design is the first phase of basic services for project design.We consider this stage in a project, the design professional that describes the project three-dimensionally. A range of alternative design concepts are explored to define the character of the completed project and an optimum realization of the project program.</strong> <br /> <br /><p>Scheme Design stage will generally be used for Planning Submission Stage. The scheme design will provide a developed stage of design that coordinates other design disciplines, such as Structural, Civils and Services to such a level to enable Contractor Costs to be obtained. Coordinated design with other disciplines.</p><p>We are here to provide you with all the necessary details so that you can trust us to start a project with us.</p>",
      heading: "Design adds value faster than it adds costs",
    },
  },
  {
    id: hash(),
    icon: "",
    name: "Reverse Engineering",
    data: {
      image: [
        "https://startp-next.envytheme.com/images/agency-image/agency-services-img1.jpg",
        image2,
        image3,
        image4,
      ],
      content: [],
      shortDescription:
        "Reverse engineering can be an invaluable tool for learning how to use a particular programming language or how to work on a particular type of application, beginners can use the technique to improve their skills.",
      extraContent:
        "<strong>Reverse-engineering is used for many purposes: as a learning tool, as a way to make new, compatible products that are cheaper than what’s currently on the market.</strong> <br /> <br /> <p>Reverse engineering can be an invaluable tool for learning how to use a particular programming language or how to work on a particular type of application, beginners can use the technique to improve their skills.</p><p>Whether it’s rebuilding a car engine or diagramming a sentence, people can learn about many things simply by taking them apart and putting them back together again. That, in a nutshell, is the concept behind reverse-engineering—breaking something down in order to understand it, build a copy or improve it.</p> <p>A process that was originally applied only to hardware, reverse-engineering is now applied to software, databases and even human DNA. Reverse-engineering is especially important with computer hardware and software. Programs are written in a language, say C++ or Java, that’s understandable by other programmers. But to run on a computer, they have to be translated by another program, called a compiler, into the ones and zeros of machine language.</p>",
      heading:
        "There is no such thing as a boring project. There are only boring executions",
    },
  },
  {
    id: hash(),
    icon: "",
    name: "PCB Manufacturing and Mass Production",
    data: {
      image: [PCB, image2, image3, image4],
      content: [
        serviceItems(
          2,
          "",
          <div class="col-lg-6 features-details">
            <div class="features-details-desc">
              <h3>PCB design process</h3>
              <ul class="features-details-list">
                <li>
                  COMPONENT PLACEMENT. The PCB design process begins by
                  converting a schematic diagram into a physical circuit board
                  layout.
                </li>
                <li>
                  PCB ROUTING. The PCB routing process is both an art and a
                  science.
                </li>
                <li>
                  ECAD-MCAD INTEGRATION. Nearly every electronics design exists
                  within a mechanical product.
                </li>
              </ul>
            </div>
          </div>,
          man_and_women,
          cta_shape_1,
          circle_1
        ),
        serviceItems(
          3,
          "",
          <div class="col-lg-6 features-details">
            <div class="features-details-desc">
              <ul class="features-details-list">
                <li>
                  We can guarantee the same PCB material, relative to your first
                  time ordering.
                </li>
                <li>
                  Full automated manufacturing process can grasp the quality of
                  each piece PCB board.
                </li>
                <li>
                  High efficiency of time control and reasonable price
                  advantage.
                </li>
              </ul>
            </div>
          </div>,
          man_and_women,
          circle_1,
          cta_shape_1
        ),
      ],
      shortDescription:
        "The manufacture of the PCBs is normally achieved using a chemical etching process. This process is very unique and our developers work very hard for our clients satisfaction.",
      extraContent:
        "<p>The manufacture of the <strong>PCBs </strong> is normally achieved using a chemical etching process.</p> <br /> <p> <strong>Printed Circuit Board (PCB)</strong> fabrication is the assembly method for circuit boards used in electronic and computer devices. The layers of the board are put together along with the specific surface pattern so it can be used in electronics <strong>manufacturing</strong>.</p>",
      heading: "You must have a supplier relationship of constant improvement",
    },
  },
  {
    id: hash(),
    icon: "",
    name: "Part Searching and Analysis",
    data: {
      image: [
        "https://startp-next.envytheme.com/images/agency-image/agency-services-img1.jpg",
        image2,
        image3,
        image4,
      ],
      content: [
        serviceItems(
          2,
          "Components like:",
          "Transistor,IC ,Resistor ,Capacitor ,Diode We never compromise quality when it comes to parts selection. Our sources are always derived from renowned suppliers such as Digikey, Mouser, Farnell among others.",
          man_and_women,
          cta_shape_1,
          circle_1
        ),
      ],
      shortDescription:
        "Selecting the most cost effective yet reliable electronic components from reputed supplier that best match the requirements of the product.",
      extraContent:
        "<strong>Selecting the most cost effective yet reliable electronic components from reputed supplier that best match the requirements of the product.</strong><br /> <br /> <p>Our professional methodology involves first understanding the complete requirements of the product. We then proceed to analyse the best suited parts that can ensure noise reduction, cost effectiveness, logic implementation, hazard immunity and reliability. This is found by thoroughly studying the datasheets of parts and then short listing the correct components. After short listing, the prices are compared from several suppliers, ultimately settling upon those that match the quality standarda yet ensuring less cost.</p>",
      heading:
        "With our present knowledge on hardware we can face any challenges coming towards us and select best components for your project.",
    },
  },
  {
    id: hash(),
    icon: "",
    name: "Components Library Design",
    data: {
      image: [
        "https://startp-next.envytheme.com/images/agency-image/agency-services-img1.jpg",
        image2,
        image3,
        image4,
      ],
      content: [
        serviceItems(
          2,
          "",
          <div class="col-lg-6 features-details">
            <div class="features-details-desc">
              <h3>Who you are</h3>
              <ul class="features-details-list">
                <li>An agency building component libraries for clients.</li>
                <li>An in-house development team.</li>
                <li>
                  A freelancer working in one or both of those environments..
                </li>
              </ul>
            </div>
          </div>,
          man_and_women,
          cta_shape_1,
          circle_1
        ),
        serviceItems(
          3,
          "",
          "We are simply here to provide our clients with all the knowledge we have. We are available to work anytime. we are an agency that delivers front-end code (amongst many other things) to clients. We usually hand over the code we write to either the client’s in-house developers or a third-party back-end development agency for implementation into whatever application or CMS is being built. The libraries we hand over actually rarely live on in the format that we deliver them – instead they are often serve as more of a kind of ‘implementation documentation’ for other developers. We always encourage our clients to use what we deliver as a starting point for a more integrated, ‘living’ component system, but integration is hard and how to persist the work we deliver is a per-project consideration, and often largely determined by the depth of the client’s commitment to deeply integrating a modularised, component-based design and development mindset into their everyday workflow.",
          man_and_women,
          circle_1,
          cta_shape_1
        ),
      ],
      shortDescription:
        "Our group of talented people work very hard to organize components in a meaningful way that is beneficial for our clients task.",
      extraContent:
        "<strong>A collection of components, organised in a meaningful manner, and often (but not necessarily) providing some way to browse and preview those components and their associated assets.</strong>",
      heading: "Design is intelligence made visible",
    },
  },
];
