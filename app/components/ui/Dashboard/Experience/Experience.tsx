import React from "react";
import { ExperienceSectionList } from "./ExperienceSection";
import Reveal from "../../Reveal";
import {
  positions_responsibilties_dxp,
  positions_responsibilties_siddhant,
  positions_responsibilties_webmalaya,
} from "@/app/utils/company-accomplishments";

const Experience = () => {
  return (
    <Reveal id="experience">
      <div className="flex justify-center w-full">
        <div className="flex pl-8 flex-col lg:max-w-[60%]">
          <div className="text-2xl py-10 sm:text-4xl font-extrabold">
            EXPERIENCE
          </div>
          <ExperienceSectionList
            companyName="Webmalaya Tech Enterprise"
            companyArea=", Kathmandu Nepal"
            positions_responsibilties={positions_responsibilties_webmalaya}
          />
          <ExperienceSectionList
            companyName="Siddhant College of Engineering"
            companyArea=", Pune India"
            positions_responsibilties={positions_responsibilties_siddhant}
          />
          <ExperienceSectionList
            companyName="DXP Systems"
            companyArea=", Pune India"
            positions_responsibilties={positions_responsibilties_dxp}
          />
        </div>
      </div>
    </Reveal>
  );
};

export default Experience;


