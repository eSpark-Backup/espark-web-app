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
  const selectDropdown = (e) => {
    const selectedValue = e.target.value;
    setActive(selectedValue);
    setSelectDropdown(team[selectedValue]);
  };
  const setSelectDropdown = (item) => {
    setTeamData(item);
  };
  return (
    <div className="container-fluid">
      <div className="multi-button teams-leads hide">
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
        <select
          class="form-select"
          aria-label="Default select example"
          value={active}
          onChange={(e) => {
            selectDropdown(e);
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
    </div>
  );
}

export default TeamSection;
