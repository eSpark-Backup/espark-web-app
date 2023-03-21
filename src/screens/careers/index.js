import React, { useEffect } from "react";
import { useState } from "react";
import Moment from "react-moment";
import { getOpeningJobs } from "../../utils/utils";
import "./style.css";
import { ShimmerText, ShimmerThumbnail } from "react-shimmer-effects";
import { ShemarLength } from "./../../helper/Shemars";
import { optionData } from "./../../utils/utils";
import Button from "../../components/button/button";
import Herosection from "../../components/Sections/Hero/Herosection";
import CareerImg from "../../assets/images/hero-section/Careerherosection.svg";
import SectionTitle from "../../components/sectionTitle";
import { Link } from "react-router-dom";
const Careers = () => {
  const [careersData, setCareersData] = useState([]);
  const [getCat, setGetCat] = useState([]);
  const [allData, setAllData] = useState([]);
  const [showMessage, setShowMessage] = useState(false);
  const [filter, setFilter] = useState({
    job_cat: "",
    job_type: "Full Time",
    job_location: "Pakistan",
  });

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

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowMessage(true);
    }, 3000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  const inputFeilds = (category, inputFor) => {
    return (
      <div className="col-lg-4">
        <select
          class="form-select"
          aria-label="Default select example"
          onChange={(e) => {
            selectCategory(e);
          }}>
          {category?.map((item) => {
            return <option value={item + "," + inputFor}>{item}</option>;
          })}
        </select>
      </div>
    );
  };

  const selectCategory = (e) => {
    const categories = e.target.value;
    const categorySplitArr = categories.split(",");
    const value = categorySplitArr[0];
    const name = categorySplitArr[1];

    if (name === "job_cat") {
      let newData = applyFilter([...allData], {
        ...filter,
        [name]: value,
      });

      setCareersData(newData);

      setFilter({
        job_cat: value,
        job_type: "Full Time",
        job_location: "Pakistan",
      });
    } else {
      let newData = applyFilter([...allData], {
        ...filter,
        [name]: value,
      });

      setCareersData(newData);
      setFilter({
        ...filter,
        [name]: value,
      });
    }
  };

  const applyFilter = (jobs, filter) => {
    return jobs.filter((job) => {
      return (
        job.acf.job_category.includes(filter.job_cat) &&
        job.acf.job_type.includes(filter.job_type) &&
        job.acf.job_location.includes(filter.job_location)
      );
    });
  };

  return (
    <div>
      <Herosection
        title="CAREERS"
        paragraph="Our career pathways provide premium opportunities to establish dynamic skillset and talent. We structure productive roadmaps for our employees to start off their IT career with an endless spirit. Our teams are formed by passing each candidate through effective technical assessments. Join any of our productive teams based on your prerequisite expertise, and make your professional career a brilliance."
        images={CareerImg}
        ShowButton={false}
      />
      <div class="container containerMarginBottom  containerMarginTop">
        {careersData && (
          <div className="mb-3">
            <SectionTitle heading={"Open Vacancies"} />
          </div>
        )}

        <div className="row">
          {inputFeilds(getCat.category, "job_cat")}
          {inputFeilds(getCat.type, "job_type")}
          {inputFeilds(getCat.location, "job_location")}
        </div>
        <br />

        {careersData && careersData.length > 0 ? (
          careersData.map((item) => {
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
                    }}></p>
                </div>
                <div class="col-lg-3 d-flex align-items-center justify-content-center">
                  <Button
                    title="Apply Now"
                    link={`/careers/${item.id}`}
                    design={1}
                  />
                </div>
              </div>
            );
          })
        ) : showMessage ? (
          <div className="notfound">Not found try another filter</div>
        ) : (
          ShemarLength.map((item) => {
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
          })
        )}
      </div>
    </div>
  );
};

export default Careers;
