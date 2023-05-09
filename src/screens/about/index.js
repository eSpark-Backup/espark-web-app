import React from "react";

import Partners from "../../components/partners/partners";
import ReadyToTalk from "../../components/ready-to-talk/readyToTalk";
import Users from "../../components/Sections/User/Users";
import ThreeColumn from "../../components/three-column/threeColumn";
import Title from "../../components/title/title";
import TwoColumns from "../../components/two-column/twoColumns";
import UserExpectation from "../../components/user-expectation/userExpectation";
import { partner, shapes } from "../../helper/ImageUrl";
import styles from "./style.module.css";
import Herosection from "../../components/Sections/Hero/Herosection";
import companyName from "../../../src/assets/images/About-us-image/company.png";
import Orical from "../../../src/assets/images/About-us-image/Oricle.png";
import yourLogo from "../../../src/assets/images/About-us-image/yourlogo.png";
import hexa from "../../../src/assets/images/About-us-image/hexa.png";
import frams from "../../../src/assets/images/About-us-image/frams.png";
import exactive1 from "../../../src/assets/images/About-us-image/exective 1.png";
import exactive3 from "../../../src/assets/images/About-us-image/exective 3.png";
import exactive4 from "../../../src/assets/images/About-us-image/exective 4.png";
import exactive2 from "../../../src/assets/images/About-us-image/exective 2.png";
import aboutImage from "../../../src/assets/images/About-us-image/aboutUs.svg";
import SectionTitle from "../../components/sectionTitle";
import { aboutData } from "../../helper/aboutus";
import "./style.css";

export default function About() {
  return (
    <React.Fragment>
      <Herosection
        title="About page data"
        paragraph="eSpark Consultants is a complete solution provider for modern software development imparting the latest methods and techniques to tackle the increasing software advancements. We began our journey in 2015 and have been working hard since then to bring a big smile to the face of our customers by making them visible among their competitors. We are passionate about providing solutions that represent real value for money. We understand and believe you can’t afford to waste your investment for such a crucial aspect of your business by leaving it in the hands of amateurs.
      You are investing not only money but your time when you decide to design and develop your project with us."
        ShowButton={false}
        images={aboutImage}
      />

      <div className="container-fluid my-3 d-flex">
        <div className={styles.lines}></div>
        <div className={styles.aboutText}>
          <span className={styles.aboutLorem}>LoremIpsum</span>
        </div>
        <div className={styles.lines}></div>
      </div>
      <div className={` ${styles.partners}`}>
        <div className={`d-flex justify-content-between  ${styles.partne}`}>
          <div>
            <img src={Orical} className={styles.partnerImages} />
          </div>
          <div>
            <img src={hexa} className={styles.partnerImages} />
          </div>
          <div>
            <img src={frams} className={styles.partnerImages} />
          </div>
          <div>
            <img src={companyName} className={styles.partnerImages} />
          </div>
          <div>
            <img src={yourLogo} className={styles.partnerImages} />
          </div>
        </div>
      </div>
      <div className={`container my-4 d-flex ${styles.lineBottom}`}>
        <div className={styles.lines}></div>
        <div className={styles.aboutText}>
          <span className={styles.review}>Review</span>
        </div>
        <div className={styles.lines}></div>
      </div>
      <SectionTitle heading={"Our Goal Statement"} />
      <div className={`${styles.containerWraper} container-fluid`}>
        <div className={`row`}>
          <div className={`col-lg-8  ${styles.ourValueContainer}`}>
            <p className={styles.our}>our </p>
            <p className={styles.value}>Value</p>
            <div className={`row  ${styles.aboutRows}`}>
              {aboutData.map((items) => {
                return (
                  <>
                    <div
                      className={`col-4 col-sm-4 col-lg-2 ${styles.aboutCol}`}
                    >
                      <div class={styles.hexagon}>
                        <span className={styles.hexgonText}>{items.icon}</span>
                        <div class={styles.face1}></div>
                        <div class={styles.face2}></div>
                      </div>
                    </div>
                    <div
                      className={`col-8 col-sm-8 col-lg-4 ${styles.aboutCol}`}
                    >
                      <div class={styles.hexago}>
                        <div class={styles.HexaTitle}>{items.title}</div>
                        <div class={styles.HexaContenta}>
                          <p className={styles.HexaContent}>
                            {items.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
          <div className={`col-lg-4  ${styles.ourVisionContainer}`}>
            {/* <h3 className={styles.ourVissions}>Our vission</h3> */}
            <p className={styles.ours}>our </p>
            <p className={styles.Vision}>Vision</p>
            <p className={styles.aboutParagraph}>
              quis eu volutpat luctus eget convallis. maximus In at eget non.
              scelerisque dolor facilisis consectetur sollicitudin. sit tempor
              non, vehicula, elit urna eget <br />
              <br /> vitae massa eu tincidunt ultrices enim. sodales. nisi sit
              quis eu In dolor tincidunt dolor non ipsum luctus vitae eget vitae
              vitae quis orci elementum odio Ut <br />
              <br />
              efficitur. commodo tincidunt nisl. lobortis, maximus ex diam risus
              adipiscing consectetur turpis turpis tincidunt nisi leo. at,
              felis, leo. libero, ultrices
            </p>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <SectionTitle heading={"Our Executives"} />



      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <div class="row">
              <div class="col-4">
                
              </div>
              <div class="col-8">

              </div>
            </div>
            <div class="newhexagon double">
            </div>
          </div>
        </div>
      </div>


      {/* <div class="newhexagon"></div>
          <div class="hexagon image"></div>
          <div class="newhexagon double"></div> */}




      <div className={styles.mainContainer}>
        <div className="container-fluid my-2 py-5">
          <div className={`row ${styles.hex1}`}>
            <div className=" col-md-4 col-lg-4">
              <div class={` ${styles.hexBackground}`}>
                <div class={`${styles.hex1}`}>
                  <div class={styles.hexBackground1}>
                    <img src={exactive4} className={styles.exactiveImage} />
                  </div>
                </div>
              </div>
            </div>
            <div className=" col-md-8 col-lg-8">
              <p
                style={{ color: "white", paddingRight: "11%" }}
                className={styles.paraIndex}
              >
                at, tincidunt ac nec Praesent non. Donec urna lacus, leo.
                Quisque sit nisi non. elit Nullam fringilla fringilla elementum
                quis tincidunt faucibus ullamcorper orci sit non Nam Quisque
                eget Donec Cras tempor id turpis lobortis, Lorem eget in
                consectetur Sed eu in ipsum convallis. Praesent eget lobortis,
                nec tincidunt at, tincidunt ac nec Praesent non. Donec urna
                lacus, leo. Quisque sit nisi non. elit Nullam fringilla
                fringilla elementum quis tincidunt faucibus ullamcorper
              </p>
            </div>
          </div>
        </div>

      </div>
      {/* <div className={styles.mainContainer}>
          <div className="container-fluid my-2">
            <div className={`row ${styles.hex1 }`}>
            <div className=" col-md-8 col-lg-8">
                <p style={{color: 'white', paddingLeft :'11%'}} className={styles.paraIndex}>
                  at, tincidunt ac nec Praesent non. Donec urna lacus, leo. Quisque
                  sit nisi non. elit Nullam fringilla fringilla elementum quis
                  tincidunt faucibus ullamcorper orci sit non Nam Quisque eget Donec
                  Cras tempor id turpis lobortis, Lorem eget in consectetur Sed eu
                  in ipsum convallis. Praesent eget lobortis, nec tincidunt at,
                  tincidunt ac nec Praesent non. Donec urna lacus, leo. Quisque sit
                  nisi non. elit Nullam fringilla fringilla elementum quis tincidunt
                  faucibus ullamcorper
                 
                </p>
              </div>
              <div className=" col-md-4 col-lg-4">
                <div class={` ${styles.hexBackground}`}>
                  <div class={`${styles.hex1} `}>
                    <div class={styles.hexBackground1}>
                      <img src={exactive4} className={styles.exactiveImage} />
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div> */}

      {/* <div class="container-fluid">
        <div class={`row  ${styles.hex1}`}>
          <div class="col-sm-4 col-md-4 col-lg-4 ">
            <div class={` ${styles.hexBackground1}`}>
              <img src={exactive4} className={styles.exactiveImage} />
              <div class={`${styles.hex} `}>
                  <div class={styles.hexBackground}>
                    <img src={exactive4} className={styles.exactiveImage} />
                  </div>
                </div>
            </div>
          </div>
          <div class="col-sm-8 col-md-8 col-lg-4 ">
            <p>
              at, tincidunt ac nec Praesent non. Donec urna lacus, leo. Quisque
              sit nisi non. elit Nullam fringilla fringilla elementum quis
              tincidunt faucibus ullamcorper orci sit non Nam Quisque eget Donec
              Cras tempor id turpis lobortis, Lorem eget in consectetur Sed eu
              in ipsum convallis. Praesent eget lobortis, nec tincidunt at,
              tincidunt ac nec Praesent non. Donec urna lacus, leo. Quisque sit
              nisi non. elit Nullam fringilla fringilla elementum quis tincidunt
              faucibus ullamcorper
            </p>
          </div>
        </div>
      </div> */}

      {/* {aboutData.map((items) => {
        console.log(items, "item");
        return <></>;
      })} */}

      {/* <div className="container">
      <p>You can divide with any text you like.</p>
      <p>For instance this...</p>
      <hr className= {styles.hrText} data-content="AND" />
      <p>...this...</p>
      <hr className={styles.hrText} data-content="OR" />
      <p>...even this!</p>
    </div> */}

      {/* <Title title={"WE LOVE WHAT WE DO"} data={shapes} />
      <TwoColumns
        imgUrl="https://esparkconsultants.com/static/media/about4.5f1757d33ddea5ac950c.png"
        imgAlt="image"
        heading2="About Us"
        paragraph="eSpark Consultants is a complete solution provider for modern software development imparting the latest methods and techniques to tackle the increasing software advancements. We began our journey in 2015 and have been working hard since then to bring a big smile to the face of our customers by making them visible among their competitors. We are passionate about providing solutions that represent real value for money. We understand and believe you can’t afford to waste your investment for such a crucial aspect of your business by leaving it in the hands of amateurs.
        You are investing not only money but your time when you decide to design and develop your project with us. Time changes so rapidly that we must keep our aim constantly focused on the future.        
        </p>"
        id={1}
      />
      <ThreeColumn
        data={[
          {
            h3: "Insightful software",
            p: "eSpark has a vision for the successful optimization of customer products and system development cycles.",
          },
          {
            h3: "Record",
            p: "We have a history of implementing effective processes to translate and align business requirements with IT requirements in a timely and effective manner.",
          },
          {
            h3: "Focus",
            p: "eSpark enables its customers to focus on the growth of larger applications that further support commercial operations.",
          },
        ]}
      />

      <ReadyToTalk
        h3="Ready to talk?"
        p1="Our team is here to answer your question about eSpark"
        btn="Contact Us"
        href="/contact"
        getStated=""
      />
      <Partners h5="" data={partner} />
      <UserExpectation
        h2="How We Are Unique"
        p1="Both eSpark's product and its focus on results are on the customer. The level of usefulness of a tool is frequently determined by the depth of knowledge and experience of each user. Because of this, eSpark ensures that customers have a solid understanding of the fundamentals upon which to build through its extensive education and training programs. eSpark also knows how important inteGREATTM is to the customer's bottom line; so it offers proficient administrations to help with absorbing the application into tasks straightforwardly."
        data={[
          { qty: "2015", title: "COMPANY FORMATION" },
          { qty: "300+", title: "COMPLETED PROJECTS" },
          { qty: "200", title: "SATISFIED CUSTOMERS" },
          { qty: "20+", title: "TALENTED ESPARKS" },
        ]}
        h3="Have any question about us?"
        p2="Don"
        p2_span="t hesitate to contact us"
        btnTitle="Contact Us"
        href="/contact"
      /> */}
    </React.Fragment>
  );
}
