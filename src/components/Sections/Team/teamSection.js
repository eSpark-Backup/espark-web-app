import React from "react";
import { shapes } from "../../../helper/ImageUrl";
import { team } from "../../../helper/team";
import Title from "../../title/title";
import "./style.css";

import { useState } from "react";

function TeamSection({ data }) {
  const [active, setActive] = useState(0);

  const [teamData, setTeamData] = useState(data);

  const setData = (item, index) => {
    setTeamData(item);
    setActive(index);
  };
  const setData2 = (item) => {
    setTeamData(item);
  };
  return (
    <div className="container-fluid">
      <div 
      className="multi-button teams-leads hide"
      >
        {team.map((item, index) => {
          return (
            <button
              className={active === index && "active"}
              onClick={() => setData(item, index)}
            >
              &nbsp; {item.teamName}
            </button>
          );
        })}
      </div>
        <div className=" hides">
          <select class="form-select" aria-label="Default select example" 
            value={active}
            onChange={(e) => {
              const selectedValue = e.target.value;
              setActive(selectedValue);
              setData2(team[selectedValue]);
            }}
          >
            {team.map((item, index) => {
              return (
                <option key={index} value={index}>
                 {item.teamName}
                </option>
              );
            })}
          </select>
        </div>
      <div className="employee-details">
        <div className="profile-card2">
          <div className="img">
            <img src={teamData.imageUrl} />
          </div>
          <div className="caption2">
            <h3>{teamData.name}</h3>
            <p>{teamData.designation}</p>
          </div>
        </div>
      </div>
      <div className="main row">
        {teamData?.teamMembers?.map((item, index) => {
          if (!item.imageUrl) {
            return null;
          }
          return (
            <div className="col-lg-3 profile-card">
              <div className="img">
                <img src={item.imageUrl} />
              </div>
              <div className="caption">
                <h3>{item.name}</h3>
                <p>{item.designation}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* <div className="main">
        {team.map((item, index) => {
          return (
            <>
              {item.teamMembers.map((items) => (
                <div className="profile-card">
                  <div className="img">
                    <img src={items.imageUrl} />
                  </div>
                  <div className="caption">
                    <h3>{items.name}</h3>
                    <p>{items.designation}</p>
                  </div>
                </div>
              ))}
            </>
          );
        })}
      </div> */}
      {/* {team.map((item, index) => {
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
              className="ml-feedback-area ptb-80"
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
          </>
        );
      })} */}
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
                  mainImage={true}
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
    </div>
  );
}

export default TeamSection;
