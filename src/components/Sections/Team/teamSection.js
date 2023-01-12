import React from "react";
import { shapes } from "../../../helper/ImageUrl";
import { team } from "../../../helper/team";
import Team from "../../cards/team/team";
import Title from "../../title/title";
import "./style.css";

import { useState } from "react";

function TeamSection() {
  const [changeClass, setChangeClass] = useState(false);

  return (
    <>
      {team.map((item, index) => {
        if (!item.imageUrl) {
          return null;
        }
        return (
          <>
            <Title title={item.teamName} data={shapes} />

            <div
              onClick={() => setChangeClass(!changeClass)}
              className={changeClass ? "out" : "overlay-user"}
            >
              <div
                className="row justify-content-center p-5 overlay-user"
                style={{ display: changeClass ? "flex" : "none" }}
              >
                {item.teamMembers.map((items) => (
                  <div className="col-lg-2 info-box">
                    <img src={items.imageUrl} alt="image" />
                    <div style={{ marginTop: 10 }}>
                      <strong className="name">{items.name}</strong>
                      <p className="des">{items.designation}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div
              key={index + 1}
              class="ml-feedback-area ptb-80"
              style={{ filter: changeClass ? "blur(10px)" : null }}
            >
              <div className="container">
                <div className="teams-section">
                  <div className="team-image">
                    <img
                      onClick={() => setChangeClass(!changeClass)}
                      className="animate_animated animate_fadeInUp animate_delay-1s"
                      src={
                        item.imageUrl
                          ? item.imageUrl
                          : "https://cdn-icons-png.flaticon.com/512/219/219983.png"
                      }
                      alt="image"
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                </div>
                {item.teamMembers.map((items, indexx) => (
                  <>
                    <div className={`user-shape${indexx + 1}`}>
                      <div className="team-image-small">
                        <img
                          className={`animate__animated animate__fadeInDown animate__delay-${indexx}s`}
                          src={
                            items.imageUrl
                              ? items.imageUrl
                              : "https://cdn-icons-png.flaticon.com/512/219/219983.png"
                          }
                          alt="Hollywood Sign on The Hill"
                          data-toggle="popover"
                          data-content="And here's some amazing content. It's very engaging. Right?"
                          data-trigger="hover"
                        />
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </div>
            {/* )} */}
          </>
        );
      })}
      {/* {team.map((item) => (
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
      ))} */}
    </>
  );
}

export default TeamSection;
