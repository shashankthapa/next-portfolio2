import React from "react";
import TechStackContainer from "./TechStackContainer";

const TechStack = () => {
  return (
    <article className="text-sm mt-5">
      <div className="font-bold italic">Proficient in :</div>
      <div className="grid grid-cols-1 md:lg:grid-cols-3 gap-2 py-2 md:lg:w-[60%]">
        <TechStackContainer stack="Next" />
        <TechStackContainer stack="React" />
        <TechStackContainer stack="Node" />
        <TechStackContainer stack="Express" />
        <TechStackContainer stack="Tailwind" />
        <TechStackContainer stack="Bootstrap" />
        <TechStackContainer stack="MongoDB" />
      </div>
    </article>
  );
};

export default TechStack;
