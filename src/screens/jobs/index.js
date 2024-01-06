import React, { useEffect, useState } from "react";
import sanityClient from "../../utils/sanityClient";
import Moment from "react-moment";
import Button from "../../components/button/button";
import Herosection from "../../components/Sections/Hero/Herosection";
import CareerImg from "../../assets/images/hero-section/Careerherosection.svg";
import { createClient } from "@sanity/client";
import { ShimmerText, ShimmerThumbnail } from "react-shimmer-effects";
import { ShemarLength } from "./../../helper/Shemars";

export const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [jobTitles, setJobTitles] = useState([]);
  const [selectedJobTitle, setSelectedJobTitle] = useState("");
  const [showMessage, setShowMessage] = useState(false);


  // Creating Sanity client
  const client = createClient({
    projectId: "958pip7i",
    dataset: "production",
    useCdn: false,
    apiVersion: "2022-03-07"
  });

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const jobData = await client.fetch('*[_type == "job"]'); // Fetch job data from Sanity
        setJobs(jobData);
        setFilteredJobs(jobData); // Initially, set filtered jobs to all jobs

        // Extract unique job titles from jobs to populate the dropdown
        const uniqueJobTitles = [...new Set(jobData.map((job) => job.jobTitle))];
        setJobTitles(uniqueJobTitles);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };
    fetchJobs();
  }, [client]);

  const handleJobTitleFilter = (e) => {
    const selectedTitle = e.target.value;
    setSelectedJobTitle(selectedTitle); // Update the selected job title

    // Filter jobs based on job title
    if (selectedTitle === "") {
      setFilteredJobs(jobs); // If "All" is selected, show all jobs
    } else {
      const filtered = jobs.filter((job) => job.jobTitle === selectedTitle);
      setFilteredJobs(filtered); // Update the filtered jobs
    }
  };
  return (
    <div>
      <Herosection
        title="CAREERS"
        paragraph="Our career pathways provide premium opportunities to establish dynamic skillset and talent. We structure productive roadmaps for our employees to start off their IT career with an endless spirit. Our teams are formed by passing each candidate through effective technical assessments. Join any of our productive teams based on your prerequisite expertise, and make your professional career a brilliance."
        images={CareerImg}
        ShowButton={false}
      />
      <div className="container-fluid containerMarginBottom containerMarginTop">
        <div>
          <select
            id="jobTitleFilter"
            value={selectedJobTitle}
            onChange={handleJobTitleFilter}
          >
            <option value="">All</option>
            {jobTitles.map((title, index) => (
              <option key={index} value={title}>
                {title}
              </option>
            ))}
          </select>
        </div>
        {filteredJobs.length > 0 ? (
          <ul>
            {filteredJobs.map((job) => (
              <li key={job._id} className="careers">
                <div className="row border-top p-5">
                  <div className="col-lg-3 col-md-3 col-sm-12">
                    <h4>{job.jobTitle}</h4>
                    {/* You can replace this with your actual date */}
                    <p>
                      Karachi
                      <br />
                      <Moment format="YYYY/MM/DD">2024-01-05</Moment>
                    </p>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <h4>Description</h4>
                    <p>{job.shortDescription}</p>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-12 d-flex align-items-center justify-content-center cardsBtn">
                    <Button
                      title="Apply Now"
                      link={`/job/${job._id}`} // Update link to individual job page
                      design={1}
                    />
                  </div>
                </div>
              </li>
            ))}
            <div>
              {filteredJobs.map((job, index) => (
                <div key={index} className="careerMobile careerCard my-3">
                  <div className="card-body">
                    <div className="row py-3">
                      <div className="col-12">
                        <h4>{job.jobTitle}</h4>
                        {/* You can replace this with your actual date */}
                        <p className="cardtitle">Karachi</p>
                        <p>
                          <Moment format="YYYY/MM/DD">2024-01-05</Moment>
                        </p>
                        <hr className="career-hr my-2" />
                      </div>
                      <div className="col-12">
                        <p className="cardDesc">{job.shortDescription}</p>
                      </div>
                      <div className="col-12 cardbtn">
                        <Button title="Apply Now" link={job.link} design={1} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ul>
        ) : showMessage ? (
          <div className="notfound">Not found try another filter</div>
        ) : (
          ShemarLength?.map((item) => {
            return (
              <div className="row">
                <div className="col-lg-4">
                  <ShimmerThumbnail
                    height={150}
                    width={300}
                    categoryStyle="STYLE_THREE"
                  />
                </div>
                <div className="col-lg-8">
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
