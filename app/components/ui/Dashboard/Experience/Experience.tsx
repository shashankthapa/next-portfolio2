import React from "react";
import { ExperienceSectionList } from "./ExperienceSection";
import Reveal from "../../Reveal";
import { positions_responsibilties } from "@/app/utils/company-accomplishments";

const Experience = () => {
  return (
    <Reveal id="experience">
      <div className="flex justify-center w-full p-5 md:lg:p-10">
        <div className="flex flex-col items-center md:lg:max-w-[40%]">
          <div className="text-center py-10 text-2xl sm:text-4xl font-extrabold">
            EXPERIENCE
          </div>
          <ExperienceSectionList
            companyName="Webmalaya Tech Enterprise"
            companyArea=", Kathmandu Nepal"
            dates="(Jan 2025 - Present)"
            positions_responsibilties={positions_responsibilties}
          />
        </div>
      </div>
    </Reveal>
  );
};

export default Experience;
