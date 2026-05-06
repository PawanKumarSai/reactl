import React from "react";
import { MoveRight } from "lucide-react";

const RightCardContent = (props) => {
  return (
    <div className="h-full w-full top-0 bottom-0 absolute p-8 flex flex-col justify-between">
      <h2 className="bg-white rounded-full text-xl font-semi-bold w-10 h-10 flex justify-center items-center">
        {props.id}
      </h2>
      <div>
        <p className="text-white text-shadow-2xs text-xl leading-relaxed mb-14">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum,
          debitis nisi? Sunt dolores ullam aliquam blanditiis pariatur molestiae
          quod inventore.
        </p>
        <div className="flex justify-between">
          <button
            style={{ backgroundColor: props.color }}
            className=" rounded-full px-8 py-3 text-white font-medium text-lg "
          >
            {props.tag}
          </button>
          <button className=" rounded-full px-3 py-2 text-white font-medium text-lg ">
            <MoveRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightCardContent;
