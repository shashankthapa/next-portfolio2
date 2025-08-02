import React from "react";
import ExperienceSection from "./ExperienceSection";
import {
  companyAccomplishments_1,
  companyAccomplishments_2,
} from "../../../../utils/company-accomplishments";
import Reveal from "../../Reveal";

const Experience = () => {
  return (
    <Reveal id="experience">
      <div className="mt-10 h-fit lg:h-screen">
        <div className="text-center p-10 text-2xl sm:text-4xl font-extrabold">
          EXPERIENCE
        </div>
        <div className="flex flex-col items-end mt-5 md:lg:mt-10">
          <div className="lg:border-l-1 mt-3 px-5 w-full lg:w-[55%] space-y-2 md:lg:space-y-5 text-sm">
            <ExperienceSection
              companyName="DXP Systems - Viman-Nagar, Pune (2023-2024)"
              companyPosition="Software Developer"
              companyAccomplishments={companyAccomplishments_1}
            />
            <ExperienceSection
              companyName="Siddhant College of Engineering - Sudumbare, Pune (2022-2023)"
              companyPosition="Lecturer"
              companyAccomplishments={companyAccomplishments_2}
            />
          </div>
        </div>
      </div>
    </Reveal>
  );
};

export default Experience;
