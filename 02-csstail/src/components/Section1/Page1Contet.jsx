import React from "react";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

const Page1Contet = (props) => {
  return (
    <div className="pt-4 pb-4 py-9 px-10  h-[90vh] flex items-center gap-10">
      <LeftContent />
      <RightContent users={props.users} />
    </div>
  );
};

export default Page1Contet;
