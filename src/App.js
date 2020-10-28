import "./App.css";
import FuncComp from "./FuncComp";
import ClassComp from "./ClassComp";

function App() {
  return (
    <div className="container">
      <h1>Hello World</h1>
      <FuncComp initNumber={2} />
      <ClassComp initNumber={2} />
    </div>
  );
}

export default App;
