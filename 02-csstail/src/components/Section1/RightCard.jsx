import React from "react";

import RightCardContent from "./RightCardContent";

const RightCard = (props) => {
  return (
    <div className="h-full w-80 bg-red-200 rounded-4xl shrink-0 overflow-hidden relative">
      <img className="h-full w-full object-cover" src={props.img} alt="" />
      <RightCardContent id={props.id} tag={props.tag} color={props.color} />
    </div>
  );
};

export default RightCard;
