import React from "react";
import { shapes } from "../../../helper/ImageUrl";
import { team } from "../../../helper/team";
import Team from "../../cards/team/team";
import Title from "../../title/title";

function TeamSection({ data }) {
  return (
    <>
      {team.map((item) => (
        <>
          <Title title={item.teamName} data={shapes} />
          <div className="row justify-content-center my-5">
            <div className="col-lg-4">
              <div className="d-flex justify-content-center align-items-center w-100 h-100">
                <Team
                  name={item.name}
                  designation={item.designation}
                  imageUrl={item.imageUrl}
                />
              </div>
            </div>{" "}
            <div className="col-lg-8">
              <div
                className="row "
                style={{ display: "flex", justifyContent: "space-around" }}
              >
                {item.teamMembers.map((item) => (
                  <div className="col-lg-3">
                    <Team
                      name={item.name}
                      designation={item.designation}
                      imageUrl={item.imageUrl}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      ))}
    </>
  );
}

export default TeamSection;
