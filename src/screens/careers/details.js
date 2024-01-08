import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import client from "../../utils/sanityClient";
import SectionTitle from "../../components/sectionTitle";
import HubspotForm from "react-hubspot-form";
import { ShimmerTable } from "react-shimmer-effects";
import BlockContent from "@sanity/block-content-to-react";
import "./style.css"
// Import other necessary components/styles here

const CareerDetails = () => {
  const { jobId } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const jobData = await client.fetch(
          `*[_type == "job" && _id == "${jobId}"][0]`
        );
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
    <div className="container-fluid jobDetails">
      {job && (
        <div className="row pt-80">
          <SectionTitle heading={job.jobTitle} width={0} />
          <div className="col-lg-7">
            <p>
              <b>Job Description – {job.jobTitle}</b>
            </p>
            <p>{job.shortDescription}</p>
            {/* Render detailsDescription using BlockContent */}
            <BlockContent blocks={job.detailsDescription} 
            serializers={{
              types: {
                // Add a serializer for 'block' type to handle spacing between blocks
                block: ({ node, children }) => <p style={{ marginTop: '15px', }}>{children}</p>,
              },
            }}
            />
          </div>
          <div className="col-lg-5">
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
            {/* Add GetInTouch component or other components as needed */}
          </div>
        </div>
      )}
    </div>
  );
};

export default CareerDetails;
