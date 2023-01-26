import React, { useEffect } from "react";
import { useState } from "react";
import Moment from "react-moment";
import Title from "../../components/title/title";
import { getOpeningJobs } from "../../utils/utils";
import HeroSectionThree from "./../../components/Hero/HeroSectionThree";
import About from "./../../components/Sections/About/About";
import "./style.css";
import { Link } from "react-router-dom";
import { ShimmerText, ShimmerThumbnail } from "react-shimmer-effects";
import { ShemarLength } from "./../../helper/Shemars";
import { optionData } from "./../../utils/utils";
import Button from "../../components/button/button";
const Careers = () => {
  const [careersData, setCareersData] = useState([]);
  const [getCat, setGetCat] = useState([]);
  const [allData, setAllData] = useState([]);


  useEffect(() => {
    const main = async () => {
      const data = await getOpeningJobs();
      setCareersData(data);
      const getDatafromJobs = optionData(data);
      setGetCat(getDatafromJobs);
      setAllData(data);
    };
    main();
  }, []);

  console.log("careersData", careersData);

  const inputFeilds = (category, inputFor) => {
    return (
      <div className="col-lg-4">
        <select
          class="form-select"
          aria-label="Default select example"
          onChange={(e) => {
            selectCategory(e);
          }}
        >
          {category?.map((item) => {
            return <option value={item + "," + inputFor}>{item}</option>;
          })}
        </select>
      </div>
    );
  };

  const selectCategory = (e) => {
    const categories = e.target.value;
    const split = categories.split(",");
    console.log(split[1]);

    const cat = allData.filter((item) => {
      if (split[1] === "job_cat" && item.acf.job_category.includes(split[0])) {
        console.log("running condition 1")
          return item;
        }
        // return item;
      
      if (split[1] === "job_type" && item.acf.job_type.includes(split[0])) {
        return item;
      }
      if (split[1] === "job_location" && item.acf.job_location.includes(split[0])) {
        return item;
      }
      // return cat
    });
    setCareersData([...cat]);
  };

  return (
    <>
      <div style={{ marginTop: 200 }}>
        <HeroSectionThree
          heading1="CAREERS"
          paragraph="eSpark Consulting Group has been delivering premium IT-enabled business solutions to a wide array of client organizations for over four decades.
        We have remained at the cutting edge of enterprise technology by making employee excellence our top priority. 
        We believe in cultivating a working environment that supports innovation and creative thinking"
          link={window.location.pathname}
          bgimage={
            "https://www.pngarts.com/files/1/Career-Transparent-Images.png"
          }
        />
      </div>
      {/* <Title
        title={"Why Join Systems? "}
        paragraph={`
          <strong>
            Techies, innovators, developers, and free-thinkers… you’ve come to
            the right place.
          </strong>
          <hr/> 
          <p>eSpark Consulting Group has been delivering premium IT-enabled business solutions to a wide array of client organizations for over four decades.
           We have remained at the cutting edge of enterprise technology by making employee excellence our top priority. 
           We believe in cultivating a working environment that supports innovation and creative thinking.</p>
           <p>We give you opportunities to excel and achieve the global recognition that you deserve!</p>
           `}
        link={window.location.pathname}
      /> */}
      <div class="container">
        {/* <div class="row text-center">
          <div class="col-lg-3">
            <img
              src="https://cdn-ehkbn.nitrocdn.com/ArrWIMUNxpAHqSwfohEzubEDfmzMeQdz/assets/images/optimized/rev-7816105/wp-content/uploads/2019/11/New-Project-40.png"
              alt=""
            />
          </div>
          <div class="col-lg-6">
            <img
              src="https://cdn-ehkbn.nitrocdn.com/ArrWIMUNxpAHqSwfohEzubEDfmzMeQdz/assets/images/optimized/rev-7816105/wp-content/uploads/2019/10/careers-1-1.png"
              alt=""
            />
          </div>
          <div class="col-lg-3">
            <img
              src="https://cdn-ehkbn.nitrocdn.com/ArrWIMUNxpAHqSwfohEzubEDfmzMeQdz/assets/images/optimized/rev-7816105/wp-content/uploads/2019/10/careers-3.png"
              alt=""
            />
          </div>
        </div>

        <section className="section-title">
          <h1>What Comes Next?</h1>
          <div className="bar"></div>
          <About
            id={2}
            h1={true}
            p={
              <div className="section-p">
                <h2>Apply</h2>
                <p>
                  Scroll through the open vacancies below and apply for
                  positions that align with your particular skillset.
                </p>
                <h2>Review</h2>
                <p>
                  Our expert recruiters review your application. They will
                  screen your résumé and find the best fit for you.
                </p>
                <h2>Interviews</h2>
                <p>
                  We have a competency-based interviewing process to identify
                  the people who will thrive in our environment. Each department
                  has its own criteria, but they usually revolve round the
                  recruiter’s phone screen, the hiring manager’s interview, and
                  a combination of technical screens, panel interviews, and team
                  presentations.
                </p>
                <h2>Onboarding</h2>
                <p>
                  Once you’ve received the “Welcome Aboard” message, our
                  onboarding experience will polish and set you up for your
                  professional journey with Systems Limited.
                </p>
              </div>
            }
            img={
              "https://cdn-ehkbn.nitrocdn.com/ArrWIMUNxpAHqSwfohEzubEDfmzMeQdz/assets/images/optimized/rev-7816105/wp-content/uploads/2019/10/careers-steps.png"
            }
          />
        </section>
        
        <section className="section-title">
          <About
            id={1}
            h1={true}
            p={
              <div className="section-p">
                <h2>Employee Benefits</h2>
                <div className="bar"></div>
                <ul>
                  <li>
                    <h3>Paid leaves, including parental leave</h3>
                  </li>
                  <li>
                    <h3>Allowances (fuel and mobile phone)</h3>
                  </li>
                  <li>
                    <h3> Paid certification</h3>
                  </li>
                </ul>
              </div>
            }
            img={
              "https://cdn-ehkbn.nitrocdn.com/ArrWIMUNxpAHqSwfohEzubEDfmzMeQdz/assets/images/source/rev-7816105/wp-content/uploads/2019/11/careers-collage-2.png"
            }
          />
        </section> */}

        {careersData && (
          <Title title={"Open Vacancies"} link={window.location.pathname} />
        )}

        {/* {console.log(careersData, "careers")} */}

        <div className="row">
          {inputFeilds(getCat.category, "job_cat")}
          {inputFeilds(getCat.type, "job_type")}
          {inputFeilds(getCat.location, "job_location")}
        </div>
        <br />
        {careersData?.length ? (
          careersData?.map((item) => {
            return (
              <div className="row border-top p-3">
                <div class="col-12 col-sm-3 ">
                  <h4 id="data_job_num1" data-job-num="1">
                    {item?.title?.rendered}
                  </h4>
                  <p>
                    Karachi
                    <br />
                    <Moment format="YYYY/MM/DD">{item.date_gmt}</Moment>
                  </p>
                </div>
                <div class="col-12 col-sm-6 ">
                  <h4>Description</h4>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: item?.excerpt.rendered,
                    }}
                  ></p>
                </div>
                <div class="col-lg-3 d-flex align-items-center justify-content-center">
                  <Button title="Apply Now" link={`/vacancies/${item.id}`} design={1} />

                </div>
              </div>
            );
          })
        ) : (
          <>
            {ShemarLength.map((item) => {
              return (
                <div class="row">
                  <div class="col-lg-4">
                    <ShimmerThumbnail
                      height={150}
                      width={300}
                      categoryStyle="STYLE_THREE"
                    />
                  </div>
                  <div class="col-lg-8">
                    <ShimmerText
                      line={5}
                      gap={10}
                      items={3}
                      categoryStyle="STYLE_THREE"
                    />
                  </div>
                </div>
              );
            })}
          </>
        )}
      </div>
    </>
  );
};

export default Careers;
