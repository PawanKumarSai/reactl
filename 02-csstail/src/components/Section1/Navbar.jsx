import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-8 py-9">
      <h4 className="bg-black text-white px-5 py-2 rounded-full uppercase ">
        Target Audience
      </h4>
      <button className="bg-gray-200 uppercase px-6 py-2 rounded-full tracking-wider text-sm">
        Digital Banking Platform
      </button>
    </div>
  );
};

export default Navbar;
