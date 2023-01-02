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
<<<<<<< Updated upstream
      <Title title={"Our Leaders"} />
=======
      <SEO title="Teams" description="eSpark web app"/>
      <Title title={"Our Teams"} />
>>>>>>> Stashed changes
      <TeamCard data={team} />;
    </div>
  );
};

export default Teams;
