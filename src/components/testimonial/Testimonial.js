import Slider from "react-slick";

import "./Testimonial.css";
import style from "./Testimonial.css";
import { FaLongArrowAltRight } from "react-icons/fa";

const PreviousBtn = (props) => {
  console.log(props);
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <FaLongArrowAltRight className={style.arrowSize} />
      {/* <ArrowBackIos style={{ color: "gray", fontSize: "45px" }} /> */}
    </div>
  );
};
const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <FaLongArrowAltRight className={style.arrowSize} />
      {/* <ArrowForwardIos style={{ color: "gray", fontSize: "45px" }} /> */}
    </div>
  );
};
const Testimonial = () => {
  return (
    <div
      className="testimonial"
    // style={{ display: "flex", justifyContent: "center", marginTop: 50 }}
    >
      <div style={{ width: "100%", textAlign: "center" }} >
        <Slider prevArrow={<PreviousBtn />} nextArrow={<NextBtn />} dots >
          <Card img="https://www.tutorialrepublic.com/examples/images/clients/1.jpg" />
          <Card img="https://www.tutorialrepublic.com/examples/images/clients/2.jpg" />
          <Card img="https://www.tutorialrepublic.com/examples/images/clients/3.jpg" />
        </Slider>
      </div>
    </div>
  );
};

const Card = ({ img }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        color: "gray",
      }}
    >
      <img src={img} alt="upwork" style={{
        width: 120,
        height: 120,
        border: "1px solid lightgray",
        padding: 7,
        marginBottom: 20,
      }} />
      <p className="hasni">
        eSpark Consultants is a complete solution provider for modern software development imparting latest methods and techniques to tackle the increasing software advancements. We began our journey in 2015 and are working hard since then to bring a big smile on the face of our customers by making them visible among their competitors We are passionate about providing solutions that represent real value for money.
      </p>
      <p style={{ fontStyle: "italic", marginTop: 25 }}>
        <span style={{ fontWeight: 500, color: "green" }}>PAULA WILSON</span> ,
        Media Analyst
      </p>
    </div>
  );
};

export default Testimonial;
