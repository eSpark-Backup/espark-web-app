import React from "react";
import TeamCard from "../../components/teamCard/teamcard";

import Title from "../../components/title/title";
import { team } from "../../helper/team";
import { Helmet } from 'react-helmet';

const Teams = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Teams</title>
        <meta name="description" content="my project" />
      </Helmet>
      <Title title={"Our Teams"} />
      <TeamCard data={team} />;
    </div>
  );
};

export default Teams;
