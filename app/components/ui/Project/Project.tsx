import React from "react";
import ProjectCard from "./ProjectCard";
import { project_1 } from "../../../utils/project-details";
import Reveal from "../Reveal";

const Project = () => {
  return (
    <Reveal id="project">
      <div className="flex justify-center w-full p-5 md:lg:p-10 ">
        <div className="flex flex-col items-start  mt-10 h-fit md:lg:max-w-[40%]">
          <div className="text-center w-full text-2xl sm:text-4xl font-extrabold p-10">
            <div>PROJECTS</div>
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
