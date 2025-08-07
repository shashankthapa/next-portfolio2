import React from "react";

interface projectProps {
  projectName: string[];
  imageSrc: string;
  projectSrc?: string;
}

const ProjectCard: React.FC<projectProps> = ({ projectName }) => {
  return (
    <div className="flex flex-col w-full sm:w-[70%] p-10 space-y-1">
      <div className="flex space-x-2 items-center text-lg font-bold">
        <p>{projectName[0]}</p>
      </div>
      <div className="italic">{projectName[1]}</div>
      <div className="text-sm">{projectName[2]}</div>
    </div>
    // </section>
  );
};

export default ProjectCard;
