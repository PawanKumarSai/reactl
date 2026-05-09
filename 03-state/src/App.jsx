//Batch updating
import React, { useState } from "react";

const App = () => {
  const [num, setnum] = useState(10);

  const btnClicked = () => {
    setnum((prev) => prev + 1);
    setnum((prev) => prev + 1);
    setnum((prev) => prev + 1);
  };
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={btnClicked}>Click</button>
    </div>
  );
};

export default App;

//using the arrow function

// import React, { useState } from "react";

// const App = () => {
//   const [num, setnum] = useState({ user: "sat", age: 12 });
//   const btnClicked = () => {
//     setnum((prev) => ({ ...prev, user: "pawan", age: "20" }));
//   };
//   return (
//     <div>
//       <h1>
//         {num.user}, {num.age}
//       </h1>
//       <button onClick={btnClicked}>Click</button>
//     </div>
//   );
// };

// export default App;

//***************************************************************************************************************************************************************** */
//Understand the changes with objects and arrays.

// import React, { useState } from "react";

// const App = () => {
//   const [num, setnum] = useState({ user: "Sarthak", age: 16 });

//   const btnClicked = () => {
//     const newnum = { ...num };
//     newnum.user = "pawan";
//     newnum.age = 19;
//     setnum(newnum);
//   };

//   return (
//     <div className="h-screen bg-gray-600 flex items-center justify-center">
//       <div className="bg-white flex flex-col items-center justify-center p-10 rounded-4xl">
//         <h1 className="text-2xl font-bold mb-5">
//           {num.user},{num.age}
//         </h1>
//         <button
//           onClick={btnClicked}
//           className="bg-green-700 hover:bg-green-400 px-4 py-2 font-semibold text-white"
//         >
//           Click
//         </button>
//       </div>
//     </div>
//   );
// };

// export default App;

//************************************************************************************************************************************************* */
//Understanding the state concept

// import React, { useState } from "react";

// const App = () => {
//   const [count, setcount] = useState(2);

//   function increaseNum() {
//     setcount(count + 1);
//   }
//   function decreasecount() {
//     setcount(count - 1);
//   }

//   return (
//     <div className="bg-gray-900 h-screen flex justify-center items-center">
//       <div className="bg-white rounded-3xl shadow-2xl p-10 flex flex-col text-center">
//         <h1 className="text-2xl font-bold mb-6 ">{count}</h1>
//         <div className="gap-6 flex justify-center">
//           <button
//             onClick={increaseNum}
//             className="bg-red-600 hover:bg-red-400 px-6 py-2 rounded-full text-white text-lg transition"
//           >
//             Increase
//           </button>
//           <button
//             onClick={decreasecount}
//             className="bg-green-600 hover:bg-green-300 px-6 py-2 rounded-full text-lg"
//           >
//             Decrease
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;
