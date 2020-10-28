import React from "react";

let classStyle = "color:red";
class ClassComp extends React.Component {
  state = {
    number: this.props.initNumber,
    date: new Date().toString(),
  };

  componentWillMount() {
    console.log("%cclass => componentWillMount", classStyle);
  }

  componentDidMount() {
    console.log("%cclass => componentDidMount", classStyle);
  }
  render() {
    console.log("%cclass => render", classStyle);
    return (
      <div className="container">
        <h2>class style component</h2>
        <p>Number : {this.state.number}</p>
        <p>Date : {this.state.date}</p>
        <input
          type="button"
          value="random"
          onClick={() => {
            this.setState({
              number: Math.random(),
            });
          }}
        ></input>
        <input
          type="button"
          value="date"
          onClick={() => {
            this.setState({
              date: new Date().toString(),
            });
          }}
        ></input>
      </div>
    );
  }
}
export default ClassComp;
