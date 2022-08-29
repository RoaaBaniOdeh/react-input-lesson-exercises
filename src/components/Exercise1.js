import React, { Component } from 'react';

class Exercise1 extends Component {

    constructor() {
        super()
        this.state = {
            name: "",
            age: ""
        }
    }
    enterValue = (event) => {
      if(event.target.id ==="name-input")  this.setState({ name: event.target.value });
      else   this.setState({ age: event.target.value });
      };
    alertInputFunction = (event) => {
        alert(this.state.name +this.state.age);
      };
    render() {
        return (
            <div>
                <input id="name-input" value={this.state.name} onChange={this.enterValue} />
                <input id="age-input" value={this.state.age} onChange={this.enterValue}/>
                <button onClick={this.alertInputFunction}>Go to Bar</button>
            </div>
        );
    }
}

export default Exercise1;