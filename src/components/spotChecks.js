import React, { Component } from "react";

class InputTest extends React.Component {
  constructor() {
    super();
    this.state = { input: " ", checkInput: true };
  }
  enterValue = (event) => {
    this.setState({ input: event.target.value });
  };
  changeValue = (event) => {
    this.setState({ input: "Something else" });
  };
  alertInputFunction = (event) => {
    alert(this.state.input);
  };
  checkedbox = (event) => {
    this.setState({ checkInput: event.target.checked });
  };
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.input}
          onChange={this.enterValue}
        />
        <input
          type="checkbox"
          checked={this.state.checkInput}
          onChange={this.checkedbox}
        />
        <button onClick={this.changeValue}>show sth else btn</button>
        <button onClick={this.alertInputFunction}>Alert</button>
      </div>
    );
  }
}

export default InputTest;
