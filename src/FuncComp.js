import React, { useState } from "react";

const FuncComp = (props) => {
  const [number, setNumber] = useState(props.initNumber);
  // let numberState = useState(5);
  // let number = numberState[0];
  // let setNumber = numberState[1];

  const [_date, setDate] = useState(new Date().toString());
  // let dateState = useState(new Date().toString());
  // let _date = dateState[0];
  // let setDate = dateState[1];

  return (
    <div className="container">
      <h2>function style component</h2>
      <p>Number : {number}</p>
      <p>Date : {_date}</p>
      <input
        type="button"
        value="randomNumber"
        onClick={() => {
          setNumber(Math.random());
        }}
      ></input>
      <input
        type="button"
        value="randomDate"
        onClick={() => {
          setDate(new Date().toString());
        }}
      ></input>
    </div>
  );
};
export default FuncComp;
