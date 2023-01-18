import React, { useState } from "react";
import CategoryCard from "../cards/categoryCard/categoryCard";
import TeamSection from "../Sections/Team/teamSection";
import "./teamCard.css";
import { category, team } from "./../../helper/team";

export default function TeamCard() {
  return (
    <>
      <div className="row justify-content-center p-5">
        {category.map((item) => (
          <div className="col-lg-4 head">
            <CategoryCard
              header={item.name}
              image={item.image}
              des={item.message}
            />
          </div>
        ))}
      </div>
      <TeamSection data={team[0]} />
    </>
  );
}
