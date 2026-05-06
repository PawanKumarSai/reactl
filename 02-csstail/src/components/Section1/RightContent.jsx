import React from "react";
import RightCard from "./RightCard";

const RightContent = (props) => {
  return (
    <div
      id="right"
      className="h-full flex flex-nowrap overflow-x-auto rounded-4xl gap-10 w-2/3 p-6"
    >
      {props.users.map(function (elem, idx) {
        return (
          <RightCard
            key={idx}
            id={idx}
            img={elem.img}
            tag={elem.tag}
            color={elem.color}
          />
        );
      })}
    </div>
  );
};

export default RightContent;
