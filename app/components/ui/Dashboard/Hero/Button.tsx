"use client";

import React from "react";

interface ButtonProps {
  name: string;
}

const Button = ({ name }: ButtonProps) => {
  return (
    <div className="flex mt-5 overflow-hidden">
      <button className="text-sm border p-5 cursor-pointer hover:text-yellow-300 outline-none text-slate-200 bg-slate-900 font-bold rounded-2xl">
        {name}
      </button>
    </div>
  );
};

export default Button;
