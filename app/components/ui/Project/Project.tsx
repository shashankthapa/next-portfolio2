import ProjectCard from "./ProjectCard";
import { project_1 } from "../../../utils/project-details";
import Reveal from "../Reveal";

const Project = () => {
  return (
    <Reveal id="project">
      <div className="flex justify-center w-full py-10">
        <div className="flex flex-col mt-10 lg:max-w-[60%] pl-8 w-full">
          <div className="w-full text-2xl sm:text-4xl font-extrabold py-5">
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
