import React from "react";
import Partners from "../../components/partners/partners";
import ReadyToTalk from "../../components/ready-to-talk/readyToTalk";
import Users from "../../components/Sections/User/Users";
import ThreeColumn from "../../components/three-column/threeColumn";
import Title from "../../components/title/title";
import TwoColumns from "../../components/two-column/twoColumns";
import UserExpectation from "../../components/user-expectation/userExpectation";
import { partner, shapes } from "../../helper/ImageUrl";

export default function About() {
  return (
    <React.Fragment>
      <Title title={"WE LOVE WHAT WE DO IT'S OUR PASSION"} data={shapes} />
      <TwoColumns
        imgUrl="https://esparkconsultants.com/static/media/about4.5f1757d33ddea5ac950c.png"
        imgAlt="image"
        heading2="About Us"
        paragraph="eSpark Consultants is a complete solution provider for modern software development imparting latest methods and techniques to tackle the increasing software advancements. We began our journey in 2015 and are working hard since then to bring a big smile on the face of our customers by making them visible among their competitors We are passionate about providing solutions that represent real value for money. We understand and believe you can’t afford to waste your investment for such a crucial aspect of your business by leaving it in the hands of amateurs. <p> You are investing not only money, but your time when you decide to design and develop your project with us. Times and conditions change so rapidly that we must keep our aim constantly focused on the future</p>"
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
        href="/lets-talk"
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
        href="/lets-talk"
      />
    </React.Fragment>
  );
}
