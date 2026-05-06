import React from "react";

import HeroText from "./HeroText";
import Arrow from "./Arrow";
const LeftContent = () => {
  return (
    <div className="h-full w-1/3 justify-between flex flex-col ">
      <HeroText />
      <Arrow />
    </div>
  );
};

export default LeftContent;
