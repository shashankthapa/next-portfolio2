import React from "react";
import Image from "next/image";
import Reveal from "../../Reveal";
import TechStack from "./TechStack";
import Link from "next/link";
import Button from "./Button";

const Hero = () => {
  return (
    <Reveal
      id="hero"
      width="100%"
      cssPropertyMotion="flex flex-col lg:flex-row justify-center items-center md:lg:p-20 w-full gap-3 sm:gap-5 md:gap-10"
      cssProperty="flex py-10 px-2 items-center h-fit"
    >
      <div className="font-sans text-4xl md:text-5xl lg:text-6xl w-full sm:w-full lg:md:w-[40%]">
        <div className="mt-10 font-extrabold mb-4 lg:mb-10">
          <h1>HI SHASHANK HERE.</h1>
          <p className="text-sm sm:text-2xl">I MAKE PIXEL PERFECT WEBSITES</p>
        </div>
        <div className="text-xl font-bold w-full">
          FULL Stack Developer with 1 year of experience building performant,
          user-focused web apps.
        </div>
        <div>
          <TechStack />
        </div>
        <div className="flex space-x-2">
          <Link href="/contact">
            <Button name="Contact Me" />
          </Link>
          <Link href="/resume/shashank_thapa_resume.pdf" target="_blank">
            <Button name="Download My Resume" />
          </Link>
        </div>
      </div>
      <div className="relative w-[50%] lg:w-[20%] aspect-square">
        <Image
          className="rounded-full sm:w-fit "
          src="/images/shashank.jpeg"
          alt="Shashank"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    </Reveal>
  );
};

export default Hero;
