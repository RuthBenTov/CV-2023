import React, { useEffect } from "react";
import "./projectCardStyle.scss";

import AOS from "aos";
import "aos/dist/aos.css";

const ProjectCard = () => {
  const project = {
    ImageUrl:
      "https://cdn.pixabay.com/photo/2023/12/22/19/56/hinduism-8464313_640.jpg",
    name: "Project Name",
    description:
      "Project description eated and loremdes cription of the project to be created and loremdes cription of the project to be created and loremde scription of the project to be created and lorem.",
    tags: ["React", "Redux", "Browser"],
    demoUrl: "https://github.com/",
    gitUrl: "https://github.com/",
  };
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className="projectCard" data-aos="fade-up">
      <img src={project.ImageUrl} alt="" />
      <div className="cardContent">
        <h3 className="projectName">{project.name}</h3>
        <p className="description">{project.description}</p>
        <div className="tags">
          {project.tags.map((tag, index) => (
            <span key={index} className="tag">
              #{tag}{" "}
            </span>
          ))}
        </div>
        <div className="btns">
          <button className="viewDemo">View Demo</button>
          <button className="viewCode">View Code</button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
