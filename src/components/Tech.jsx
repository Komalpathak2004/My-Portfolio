import React from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  const renderTechnology = (technology) => {
    return (
      <div
        className='w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 flex items-center justify-center'
        key={technology.name}
      >
        {technology.icon ? (
          <BallCanvas icon={technology.icon} />
        ) : (
          <div className='w-full h-full flex items-center justify-center bg-gray-200'>
            <span className='text-gray-600'>Icon not available</span>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className='flex flex-wrap justify-center gap-5 p-5'>
      {technologies.map(renderTechnology)}
    </div>
  );
};

export default SectionWrapper(Tech, "");
