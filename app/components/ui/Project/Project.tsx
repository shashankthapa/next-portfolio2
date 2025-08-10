import React from "react";
import ProjectCard from "./ProjectCard";
import { project_1 } from "../../../utils/project-details";
import Reveal from "../Reveal";

const Project = () => {
  return (
    <Reveal id="project">
      <div className="flex flex-col items-center mt-10 h-fit overflow-hidden">
        <div className="w-full lg:w-[65%]">
          <div className="text-center text-2xl sm:text-4xl font-extrabold p-10">
            <h1>PROJECTS</h1>
          </div>
          <ProjectCard
            projectName={[
              project_1[0] as string,
              project_1[1] as string,
              project_1[2] as string[],
            ]}
          />
        </div>
      </div>
    </Reveal>
  );
};

export default Project;
