import React from "react";
import Title from "../../components/title/title";
import ProjectCard from "../../components/project-card/projectCard";
import { shapes } from "../../helper/ImageUrl";
import { projects } from "../../helper/projects";


export default function Projects() {
  return (
    <React.Fragment>
      <Title
        title={"Our Works"}
        data={shapes}
      />
      <ProjectCard
        data={projects}
        // data={[
        //   {
        //     imgUrl: work_img_1,
        //     h3: "Incredible infrastructure",
        //     p: "Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.",
        //   },
        //   {
        //     imgUrl: work_img_2,
        //     h3: "UI/UX Design",
        //     p: "Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.",
        //   },
        //   {
        //     imgUrl: work_img_3,
        //     h3: "Apps Development",
        //     p: "Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.",
        //   },
        //   {
        //     imgUrl: work_img_4,
        //     h3: "Mock-up Design",
        //     p: "Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.",
        //   },
        //   {
        //     imgUrl: work_img_5,
        //     h3: "E-commerce",
        //     p: "Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.",
        //   },
        //   {
        //     imgUrl: work_img_6,
        //     h3: "Web Design",
        //     p: "Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.",
        //   },
        // ]}
      />
      {/* <ProjectNestedCard
        data={[
          { imgUrl: work_img_1 },
          { imgUrl: work_img_1 },
          { imgUrl: work_img_1 },
          { imgUrl: work_img_1 },
        ]}
      />
      <NetworkMarketing /> */}
    </React.Fragment>
  );
}
