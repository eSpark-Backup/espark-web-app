import React from "react";
import TeamCard from "../../components/teamCard/teamcard";
import { team } from "../../helper/team";

const Teams = () => {
  return (
    <div style={{ backgroundColor: "#009189" }}>
      {/* <Title title={"Our Teams"} /> */}
      <TeamCard data={team} />
    </div>
  );
};

export default Teams;
