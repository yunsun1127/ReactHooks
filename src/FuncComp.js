import React, { useState, useEffect } from "react";

let funcStyle = "color:blue";
let funId = 0;

const FuncComp = (props) => {
  const [number, setNumber] = useState(props.initNumber);
  // let numberState = useState(5);
  // let number = numberState[0];
  // let setNumber = numberState[1];

  const [_date, setDate] = useState(new Date().toString());
  // let dateState = useState(new Date().toString());
  // let _date = dateState[0];
  // let setDate = dateState[1];

  // side effect
  useEffect(function () {
    console.log(
      "%cfunc => useEffect (componentDidMount & componentDidUpdate) " + ++funId,
      funcStyle
    );
    document.title = number + ` : ` + _date;

    // Effect with CleanUp
    return function CleanUp() {
      console.log(
        "%cfunc => useEffect return (componentDidMount & componentDidUpdate) " +
          ++funId,
        funcStyle
      );
    };
  });

  console.log("%cfunc => render " + ++funId, funcStyle);
  return (
    <div className="container">
      <h2>function style component</h2>
      <p>Number : {number}</p>
      <p>Date : {_date}</p>
      <input
        type="button"
        value="random"
        onClick={() => {
          setNumber(Math.random());
        }}
      ></input>
      <input
        type="button"
        value="date"
        onClick={() => {
          setDate(new Date().toString());
        }}
      ></input>
    </div>
  );
};
export default FuncComp;
