import React from "react";
import ProjectCard from "./ProjectCard";
import { project_1, project_2 } from "../../../utils/project-details";
import Reveal from "../Reveal";

const Project = () => {
  return (
    <Reveal id="project">
      <div className="flex flex-col items-center mt-10 h-fit overflow-hidden">
        <div className="text-center text-2xl sm:text-4xl font-extrabold p-10">
          <h1>PROJECTS</h1>
        </div>
        <ProjectCard
          projectSrc="https://spotify-profile.herokuapp.com/"
          imageSrc="/images/spotify.png"
          projectName={project_1}
        />
      </div>
    </Reveal>
  );
};

export default Project;
