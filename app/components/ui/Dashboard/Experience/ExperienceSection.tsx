import React from "react";

interface ExperienceProps {
  companyName: string;
  companyPosition: string;
  companyAccomplishments: string[];
}

const ExperienceSection: React.FC<ExperienceProps> = ({
  companyName,
  companyPosition,
  companyAccomplishments,
}) => {
  return (
    <>
      <ul>
        <li className="lg:list-disc lg:-m-1 text-sm sm:text-2xl font-bold">
          {companyName}
        </li>
        <p className="italic">{companyPosition}</p>
      </ul>

      <ul className="space-y-2 list-disc ml-4">
        {companyAccomplishments.map((accomplishments, id) => (
          <li key={id}>{accomplishments}</li>
        ))}
      </ul>
    </>
    // </div>
  );
};

export default ExperienceSection;
