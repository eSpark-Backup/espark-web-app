import React from "react";
import Partners from "../../components/partners/partners";
import ReadyToTalk from "../../components/ready-to-talk/readyToTalk";
import TeamCarousel from "../../components/team-carousel/teamCarousel";
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
        imgUrl="https://esparkconsultants.com/wp-content/uploads/2020/09/3081627-2048x1365-1-1300x867.jpg"
        imgAlt="image"
        heading2="About Us"
        paragraph1="eSpark Consultants is a complete solution provider for modern software development imparting latest methods and techniques to tackle the increasing software advancements. We began our journey in 2015 and are working hard since then to bring a big smile on the face of our customers by making them visible among their competitors"
        paragraph2="We are passionate about providing solutions that represent real value for money. We understand and believe you can’t afford to waste your investment for such a crucial aspect of your business by leaving it in the hands of amateurs. You are investing not only money, but your time when you decide to design and develop your project with us."
        paragraph3="Times and conditions change so rapidly that we must keep our aim constantly focused on the future"
        paragraph4="CEO eSpark"
      />
      <ThreeColumn
        data={[
          {
            h3: "Our History",
            p: "Lorem ipsum dolor sit amet, con se ctetur adipiscing elit. In sagittis eg esta ante, sed viverra nunc tinci dunt nec elei fend et tiram.",
          },
          {
            h3: "Our Mission",
            p: "Lorem ipsum dolor sit amet, con se ctetur adipiscing elit. In sagittis eg esta ante, sed viverra nunc tinci dunt nec elei fend et tiram.",
          },
          {
            h3: "Who We Are",
            p: "Lorem ipsum dolor sit amet, con se ctetur adipiscing elit. In sagittis eg esta ante, sed viverra nunc tinci dunt nec elei fend et tiram.",
          },
        ]}
      />
      <TeamCarousel
        heading2="Our Awesome Team"
        paragraph1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <ReadyToTalk
        h3="Ready to talk?"
        p1="Our team is here to answer your question about StartP"
        btn="Contact Us"
        href="index.htm#"
        getStated="Or, get started now with a free trial"
      />
      <Partners
        h5="More that 1.5 million businesses and organizations use StartP"
        data={partner}
      />
      <UserExpectation
        h2="We always try to understand users expectation"
        p1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua."
        data={[
          { qty: "180k", title: "Downloaded" },
          { qty: "20K", title: "Feedback" },
          { qty: "500+", title: "Workers" },
          { qty: "70+", title: "Contributors" },
        ]}
        h3="Have any question about us?"
        p2="Don"
        p2_span="t hesitate to contact us"
        btnTitle="Contact Us"
        href="/contact/"
      />
    </React.Fragment>
  );
}
