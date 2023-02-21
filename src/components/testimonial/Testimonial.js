import Slider from "react-slick";
import "./style.css";
import { clients } from "../../helper/clients";
import {
  MdOutlineArrowForwardIos,
  MdOutlineArrowBackIos,
} from "react-icons/md";

const PreviousBtn = (props) => {
  console.log(props);
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <MdOutlineArrowBackIos className="arrowSize" />
      {/* <ArrowBackIos style={{ color: "gray", fontSize: "45px" }} /> */}
    </div>
  );
};
const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <MdOutlineArrowForwardIos className="arrowSize" />
      {/* <ArrowForwardIos style={{ color: "gray", fontSize: "45px" }} /> */}
    </div>
  );
};
const Testimonial = () => {
  return (
    <div className="testimonial">
      <div className="subtesti">
        <Slider prevArrow={<PreviousBtn />} nextArrow={<NextBtn />}>
          {clients?.map((item) => {
            return (
              <>
                <div className="imgbox">
                  <img
                    className="image"
                    src={item.image}
                    alt={item.testimonial}
                  />
                </div>
                <div className="testibox">
                  <p className="name">{item.name}</p>
                  <p className="designation">{item.designation}</p>
                  <p className="testimonialText">{item.testimonial}</p>
                </div>
              </>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
