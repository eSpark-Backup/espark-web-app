import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { createClient } from "@sanity/client";
import SectionTitle from "../../components/sectionTitle";
import HubspotForm from "react-hubspot-form";
import { ShimmerTable } from "react-shimmer-effects";
// Import other necessary components/styles here


const client = createClient({
  projectId: "958pip7i",
  dataset: "production",
  useCdn: false,
  apiVersion: "2022-03-07",
});

const CareerDetails = () => {
  const { jobId } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const jobData = await client.fetch(`*[_type == "job" && _id == "${jobId}"][0]`);
        setJob(jobData);
      } catch (error) {
        console.error("Error fetching job data:", error);
      }
    };
  
    if (jobId) {
      fetchJobs();
    }
  }, [jobId]);

  return (
    <div className="container-fluid">
      {job && (
        <div className="row pt-80">
            <SectionTitle heading={job.jobTitle} width={0} />
            <div className="col-lg-7">
            <p>{job.shortDescription}</p>
            {job.detailsDescription.map((block, index) => (
              <div key={index}>
                {/* Render each block */}
                {block.children.map((child, i) => (
                  <p key={i}>{child.text}</p>
                ))}
              </div>
            ))}
          </div>
          <div className="col-lg-5">
            <SectionTitle padding={10} heading={"Apply For This Position"} my={2} />
            {/* Embed HubSpot form */}
            <div className="pt-80">
              <HubspotForm
                region="na1"
                portalId="24460292"
                formId="5a46ec1b-fea2-444f-906b-5cf0cd30a8da"
                onSubmit={() => console.log("Submit!")}
                onReady={(form) => console.log("Form ready!")}
                loading={
                  <div>
                    {/* Use ShimmerTable as loading indicator */}
                    <ShimmerTable row={5} col={1} />
                  </div>
                }
              />
            </div>
            {/* Add GetInTouch component or other components as needed */}
          </div>
        </div>
      )}
    </div>
  );
};

export default CareerDetails;
