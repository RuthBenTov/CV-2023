import React, { useState } from "react";
import ProjectCard from "../../components/Projects/ProjectCard";
import "./projectsPageStyle.scss";
const Projects = () => {
  const [chosenCategory, setChosenCategory] = useState("all");
  return (
    <div id="projectsPageId" className="projectsPage">
      <h1 className="header">Projects</h1>
      <div className="projectsCat">
        <div
          onClick={() => {
            setChosenCategory("all");
          }}
          className={`category ${chosenCategory === "all" && "isActive"}`}
        >
          All
        </div>
        <div
          onClick={() => {
            setChosenCategory("vanilla");
          }}
          className={`category ${chosenCategory === "vanilla" && "isActive"}`}
        >
          Vanilla
        </div>
        <div
          onClick={() => {
            setChosenCategory("front&back");
          }}
          className={`category ${
            chosenCategory === "front&back" && "isActive"
          }`}
        >
          Front & Back
        </div>
        <div
          onClick={() => {
            setChosenCategory("apps");
          }}
          className={`category ${chosenCategory === "apps" && "isActive"}`}
        >
          Apps
        </div>
      </div>
      <div className="projectsCards">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
};

export default Projects;
