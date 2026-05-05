import React from "react";

const Card = (props) => {
  return (
    <div>
      <div className="card">
        <img src={props.img} alt="" />
        <h1>{props.user}</h1>
        <p>Age: {props.age}</p>
        <p>Preparing for AI/ML course</p>
        <button>View</button>
      </div>
    </div>
  );
};

export default Card;
