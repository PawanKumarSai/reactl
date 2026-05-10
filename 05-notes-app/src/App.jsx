import { useState } from "react";
import { Delete, X } from "lucide-react";

const App = () => {
  const [title, settitle] = useState("");
  const [details, setDetails] = useState("");
  const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    const copyTask = [...task];
    copyTask.push({ title, details });
    setTask(copyTask);

    settitle("");
    setDetails("");
    console.log(title, details);
  };

  const deleteNote = (idx) => {
    const copyTask = [...task];
    copyTask.splice(idx, 1);
    setTask(copyTask);
    console.log("deleted");
  };

  return (
    <div className="h-screen lg:flex bg-black">
      <form
        className="p-10 flex flex-col items-start lg: w-1/2 gap-4"
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <h2 className="text-white font-extrabold text-4xl self-center">
          Add Notes
        </h2>

        <input
          type="text"
          placeholder="Enter Notes Heading"
          className="px-5 py-2 w-full border-2 rounded text-white font-medium"
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
          }}
        />
        <textarea
          type="text"
          className="text-white px-5 py-2 w-full border-2 rounded h-32 font-medium "
          placeholder="Write Details"
          value={details}
          onChange={(e) => {
            setDetails(e.target.value);
          }}
        />
        <button className="bg-white text-black hover:bg-amber-100 active:bg-gray-500 px-5 py-2 rounded w-full font-medium">
          Add Notes
        </button>
      </form>
      <div className=" lg:w-1/2 lg:border-l-2 border-white p-10 ">
        <h1 className="text-3xl text-white font-bold w-3/4 text-center">
          Recent Notes
        </h1>
        <div className="flex flex-wrap items-start justify-start gap-6 mt-5 ml-20 overflow-auto h-[90%]">
          {task.map((elem, idx) => {
            return (
              <div
                key={idx}
                className=" flex justify-between flex-col relative h-52 w-40 bg-cover pt-7 pb-4 px-4 rounded-xl bg-[url('https://static.vecteezy.com/system/resources/thumbnails/010/793/873/small/a-lined-note-paper-covered-with-transparent-tape-on-a-yellow-background-with-a-white-checkered-pattern-free-png.png')]"
              >
                <div>
                  <h3 className="leading-tight text-lg font-bold py-3">
                    {elem.title}
                  </h3>
                  <p className=" leadinf-tight text-xs font-semibold text-gray-600 ">
                    {elem.details}
                  </p>
                </div>
                <button
                  onClick={(idx) => {
                    deleteNote(idx);
                  }}
                  className="w-full font-bold bg-red-500 cursor-pointer active:scale-95 hover:bg-red-300 rounded-3xl py-1 text-xs"
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;

// //<img
//           src="https://static.vecteezy.com/system/resources/thumbnails/049/578/155/small/a-black-and-white-drawing-of-a-man-writing-png.png"
//           alt=""
//           className="rotate-y-180 mr-40 mt-10 h-60"
//         />
