import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className='flex flex-wrap justify-center gap-10 p-5'>
      {technologies.map((technology) => (
        <div className='w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
