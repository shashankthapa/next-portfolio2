import Link from "next/link";
import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex justify-center space-x-10 w-full p-10 text-3xl overflow-hidden">
      <Link href="https://www.facebook.com/U1traVoilet" target="_blank">
        <FaFacebook className="transition-transform duration-300 transform hover:scale-105 text-3xl hover:text-green-400 cursor-pointer" />
      </Link>
      <Link href="https://www.instagram.com/shashankthap4/" target="_blank">
        <FaInstagramSquare className="transition-transform duration-300 transform hover:scale-105 text-3xl hover:text-green-400 cursor-pointer" />
      </Link>
      <Link href="https://github.com/Shashankthapa" target="_blank">
        <FaGithub className="transition-transform duration-300 transform hover:scale-105 text-3xl hover:text-green-400 cursor-pointer" />
      </Link>
    </div>
  );
};

export default Footer;
