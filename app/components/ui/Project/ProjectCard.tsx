import React from "react";

interface projectProps {
  projectName: [string, string, string[]];
}

const ProjectCard: React.FC<projectProps> = ({ projectName }) => {
  return (
    <div className="p-5">
      <div className="flex space-x-2 items-center text-lg font-bold">
        <p>{projectName[0]}</p>
      </div>
      <div>
        <div className="italic">{projectName[1]}</div>
        {projectName[2].map((key, idx) => (
          <div className="text-sm" key={idx}>{key}</div>
        ))}
      </div>
    </div>
    // </section>
  );
};

export default ProjectCard;
