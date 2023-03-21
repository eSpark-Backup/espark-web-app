import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ShimmerText, ShimmerThumbnail } from "react-shimmer-effects";
import GetInTouch from "../../components/getInTouch/GetInTouch";
import Title from "../../components/title/title";
import { getSingleOpeningJobs } from "../../utils/utils";
import { ShemarLengths } from "./../../helper/Shemars";

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
    <div className="container-fluid">
      <Title title={singleJob?.title?.rendered} />
      <div className="row">
        {singleJob?.title ? (
          <p
            className="col-lg-6 paragraph"
            dangerouslySetInnerHTML={{
              __html: singleJob?.content?.rendered,
            }}
          ></p>
        ) : (
          <div className="col-lg-6">
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
        <div className="col-lg-6">
          <GetInTouch
            modal={true}
            link={window.location.pathname}
            h1={singleJob?.title?.rendered}
            appliedFor={singleJob?.title?.rendered}
          />{" "}
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
