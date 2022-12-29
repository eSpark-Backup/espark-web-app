import React from "react";
import { FaFacebookF, FaGitlab, FaInstagram, FaInstagramSquare, FaTwitter } from "react-icons/fa";
import { category } from "../../helper/category";
import { shapes } from "../../helper/ImageUrl";
import CategoryCard from "../cards/categoryCard/categoryCard";
import Team from "../cards/team/team";
import TeamSection from "../Sections/Team/teamSection";
import Title from "../title/title";
import './teamCard.css'

export default function TeamCard({ data }) {
  return (
    <>
    <div className="row justify-content-center">
      {category.map(item =><div className="col-lg-4 my-2" >
              <CategoryCard header={item.name}  />
          </div> )}
    </div>
    <TeamSection/>
    </>
  );
}
