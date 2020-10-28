import "./App.css";
import FuncComp from "./FuncComp";
import ClassComp from "./ClassComp";
import { useState } from "react";

function App() {
  let [funcShow, setFuncShow] = useState(true);
  let [classShow, setClassShow] = useState(true);

  return (
    <div className="container">
      <h1>Hello World</h1>
      <input
        type="button"
        value="remove func"
        onClick={function () {
          setFuncShow(false);
        }}
      />
      <input
        type="button"
        value="remove comp"
        onClick={function () {
          setClassShow(false);
        }}
      />
      {funcShow ? <FuncComp initNumber={2} /> : null}
      {classShow ? <ClassComp initNumber={2} /> : null}
    </div>
  );
}

export default App;
