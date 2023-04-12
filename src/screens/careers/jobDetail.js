import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ShimmerTable,
  ShimmerText,
  ShimmerThumbnail,
} from "react-shimmer-effects";
import GetInTouch from "../../components/getInTouch/GetInTouch";
import Title from "../../components/title/title";
import { getSingleOpeningJobs } from "../../utils/utils";
import { ShemarLengths } from "./../../helper/Shemars";
import SectionTitle from "../../components/sectionTitle";
import HubspotContactForm from "../../components/HobspotForm/hubSpotForm";
import HubspotForm from "react-hubspot-form";

const JobDetail = ({ appliedFor }) => {
  const params = useParams();
  const [singleJob, setSingleJob] = useState([]);

  useEffect(() => {
    const main = async () => {
      const data = await getSingleOpeningJobs(params.id);
      setSingleJob(data);
    };
    main();
  }, []);

  return (
    <div className="container-fluid ">
      <div className="row">
        <div className="pt-80">
          <SectionTitle heading={singleJob?.title?.rendered} width={0} />
        </div>
        {singleJob?.title ? (
          <>
            <div className="col-lg-7">
              <div className="jobsInfo">
                {" "}
                <p>
                  <strong>Job Category: </strong>{" "}
                  {singleJob?.acf.job_category[0]}
                </p>
                <p>
                  <strong>Job Type: </strong> {singleJob?.acf.job_type[0]},{" "}
                  {singleJob?.acf.job_type[1]}
                </p>
                <p>
                  <strong>Job Location: </strong>{" "}
                  {singleJob?.acf.job_location[0]},{" "}
                  {singleJob?.acf.job_location[1]}
                </p>
              </div>
              <div
                className=" jobDetails"
                dangerouslySetInnerHTML={{
                  __html: singleJob?.content?.rendered,
                }}
              ></div>
            </div>
          </>
        ) : (
          <div className="col-lg-7">
            {ShemarLengths.map((item) => {
              return (
                <div class="row">
                  <div class="col-lg-4">
                    <ShimmerThumbnail
                      height={150}
                      width={200}
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
          </div>
        )}
        <div className="col-lg-5 pb-80">
          <SectionTitle
            padding={10}
            heading={"Apply For This Position"}
            my={2}
          />

          <div className="pt-80">
            <HubspotForm
              region="na1"
              portalId="24460292"
              formId="5a46ec1b-fea2-444f-906b-5cf0cd30a8da"
              onSubmit={() => console.log("Submit!")}
              onReady={(form) => console.log("Form ready!")}
              loading={
                <div>
                  <ShimmerTable row={5} col={1} />
                </div>
              }
            />
          </div>
          {/* <GetInTouch
            modal={true}
            link={window.location.pathname}
            h1={singleJob?.title?.rendered}
            appliedFor={singleJob?.title?.rendered}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
