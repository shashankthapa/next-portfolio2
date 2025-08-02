import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex w-full justify-center mt-5">
      <div className="flex w-full md:w-[40%] items-center p-2">
        <div className="relative w-[10%] aspect-square">
          <Image
            className="rounded-xl"
            src="/images/logo.png"
            alt="Logo"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <ul className="flex justify-around w-full">
          <li className="cursor-pointer hover:text-green-400">
            <Link href="#hero">Introduction</Link>
          </li>
          <li className="cursor-pointer hover:text-green-400">
            <Link href="#project">Projects</Link>
          </li>
          <li className="cursor-pointer hover:text-green-400">
            <Link href="#experience">Experience</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
