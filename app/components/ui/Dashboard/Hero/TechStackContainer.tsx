import React from "react";

interface techProps {
  stack: string;
}

const TechStackContainer: React.FC<techProps> = ({ stack }) => {
  return (
    <div className="flex items-center justify-center py-2 bg-slate-800 rounded-xl text-slate-200 font-semibold hover:text-green-400 hover:cursor-pointer">
      {stack}
    </div>
  );
};

export default TechStackContainer;
