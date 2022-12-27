import React from "react";
import TeamCard from "../../components/teamCard/teamcard";

import Title from "../../components/title/title";
import { team } from "../../helper/team";

const Teams = () => {
  return (
    <div>
      <Title title={"Our Teams"} />
      <div className="row justify-content-center">
        {team.map((item) => {
          return <TeamCard item={item} />;
        })}
      </div>
    </div>
  );
};

export default Teams;
