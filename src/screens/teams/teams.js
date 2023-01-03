import React from "react";
import TeamCard from "../../components/teamCard/teamcard";

import Title from "../../components/title/title";
import { team } from "../../helper/team";

const Teams = () => {
  return (
    <div>
      <Title title={"Our Teams"} />
      <TeamCard data={team} />;
    </div>
  );
};

export default Teams;
