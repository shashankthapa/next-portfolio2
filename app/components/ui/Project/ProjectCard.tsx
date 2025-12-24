import React from "react";

interface projectProps {
  projectName: [string, string, string[]];
}

const ProjectCard: React.FC<projectProps> = ({ projectName }) => {
  return (
    <div>
      <div className="text-lg font-bold">
        <p>{projectName[0]}</p>
      </div>
      <div className="italic">{projectName[1]}</div>
      <div className="ml-5">
        {projectName[2].map((key, idx) => (
          <ul key={idx} className="list-disc mt-1">
            <li className="text-sm">{key}</li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
