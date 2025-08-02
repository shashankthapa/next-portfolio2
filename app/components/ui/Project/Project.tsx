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
        <div className="flex flex-col items-end mt-5 md:lg:mt-10 ">
          <div className="mt-3 px-5 w-full lg:w-[55%] space-y-5 md:lg:space-y-9">
            <ProjectCard
              projectSrc="https://spotify-profile.herokuapp.com/"
              imageSrc="/images/spotify.png"
              projectName={project_1}
            />
            <ProjectCard
              projectSrc="https://github.com/Shashankthapa/employee-management-system"
              imageSrc="/images/employee-management.png"
              projectName={project_2}
            />
          </div>
        </div>
      </div>
    </Reveal>
  );
};

export default Project;
