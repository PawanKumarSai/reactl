import React, { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");

  const submitHandler = (e) => {
    e.preventDefault(e);
    console.log("Form Submitted by", title);
    setTitle("");
  };
  return (
    <div className="bg-gray-500 h-screen font-bold flex items-center justify-center">
      <form
        className="bg-white flex flex-col justify-center items-center p-10 rounded-4xl"
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <input
          placeholder="Enter your name"
          type="text"
          className="box-border px-6 py-4 mb-5"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        ></input>
        <button className="bg-green-600 p-3 hover:bg-green-400">Submit</button>
      </form>
    </div>
  );
};

export default App;
