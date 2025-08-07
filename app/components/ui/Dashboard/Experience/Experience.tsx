import React from "react";
import { ExperienceSectionList } from "./ExperienceSection";
import Reveal from "../../Reveal";
import { positions_responsibilties } from "@/app/utils/company-accomplishments";

const Experience = () => {
  return (
    <Reveal id="experience">
      <div className="flex flex-col items-center mt-10 h-fit lg:h-screen">
        <div className="text-center py-10 text-2xl sm:text-4xl font-extrabold">
          EXPERIENCE
        </div>
        <ExperienceSectionList
          companyName="Webmalaya Tech Enterprise"
          companyArea=", Kathmandu Nepal"
          dates="(Jan 2022 - Present)"
          positions_responsibilties={positions_responsibilties}
        />
      </div>
    </Reveal>
  );
};

export default Experience;
