import React from "react";
import TeamCard from "../../components/teamCard/teamcard";

import Title from "../../components/title/title";
import { team } from "../../helper/team";
import { Helmet } from 'react-helmet';

const Teams = () => {
  return (
    <div>
      <Title title={"Our Leaders"} />
      <TeamCard data={team} />;
    </div>
  );
};

export default Teams;
