import React from "react";
import TeamCard from "../../components/teamCard/teamcard";

import Title from "../../components/title/title";
import { team } from "../../helper/team";
import SEO from '../../utils/SEO';

const Teams = () => {
  const location = window.location.href
 console.log(location, "locatioan")
  return (
    <div>
      <SEO title="Teams" description="eSpark web app"/>
      <Title title={"Our Teams"} />
      <TeamCard data={team} />;
    </div>
  );
};

export default Teams;
