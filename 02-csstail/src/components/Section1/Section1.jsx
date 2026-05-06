import React from "react";
import Navbar from "./Navbar";
import Page1Contet from "./Page1Contet";

const Section1 = (props) => {
  return (
    <div className="h-screen w-full ">
      <Navbar />
      <Page1Contet users={props.users} />
    </div>
  );
};

export default Section1;
