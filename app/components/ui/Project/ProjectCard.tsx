import React from "react";
import Image from "next/image";
import { MdOutlineArrowOutward } from "react-icons/md";
import Link from "next/link";

interface projectProps {
  projectName: string[];
  imageSrc: string;
  projectSrc: string;
}

const ProjectCard: React.FC<projectProps> = ({
  projectName,
  imageSrc,
  projectSrc,
}) => {
  return (
    <section className="transition-transform duration-300 h-full transform hover:scale-101 flex flex-col items-center lg:flex-row space-x-10 px-4">
      <div className="relative w-full lg:w-[55%] h-50">
        <Image
          className="rounded-sm"
          src={imageSrc}
          alt="spotify_project"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="flex flex-col w-full py-10 space-y-1">
        <Link
          className="hover:text-green-500"
          href={projectSrc}
          target="_blank"
        >
          <div className="flex space-x-2 items-center text-lg font-bold">
            <p>{projectName[0]}</p>
            <div>
              <MdOutlineArrowOutward />
            </div>
          </div>
        </Link>
        <div>{projectName[1]}</div>
      </div>
    </section>
  );
};

export default ProjectCard;
