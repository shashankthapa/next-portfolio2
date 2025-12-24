import React from "react";

interface ExperienceProps {
  companyName: string;
  companyPosition?: string;
  companyAccomplishments: string[];
}

interface ExperiencePropsList {
  companyName: string;
  companyArea: string;
  dates: string;
  positions_responsibilties: details;
}

interface details {
  [key: string]: date_responsibilities;
}

interface date_responsibilities {
  date: string;
  responsibilties: string[];
}

export const ExperienceSection: React.FC<ExperienceProps> = ({
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
  );
};

export const ExperienceSectionList: React.FC<ExperiencePropsList> = ({
  companyName,
  companyArea,
  positions_responsibilties,
}) => {
  return (
    <div className="p-5">
      <div className="lg:list-disc text-sm sm:text-2xl">
        <span className="font-bold">{companyName}</span>
        {companyArea}
        {dates}
      </div>

      <div className="mt-4 space-y-4">
        {Object.entries(positions_responsibilties).map(([role, details]) => (
          <div key={role}>
            <h4 className="font-semibold">{role}</h4>
            <ul className="list-disc ml-5 mt-2 space-y-1">
              {details.responsibilties.map((item, index) => (
                <li key={index} className="text-sm">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
