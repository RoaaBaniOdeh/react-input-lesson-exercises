import React, { Component } from 'react';

class Exercise2 extends Component {

constructor() {
    super()
    this.state = {
        name: "",
        fruit: ""
    }
}
enterValue = (event) => {
    if(event.target.id ==="name-input")  this.setState({ name: event.target.value });
    else  this.setState({ fruit: event.target.value },()=>{console.log(this.state.name+" + "+this.state.fruit)});

  };
render() {
    return (
        <div>
            <input id="name-input" value={this.state.name} onChange={this.enterValue} />
            <select id="select-input" onChange={this.enterValue} > 
             <option value="apple">apple</option>
             <option value="figs">figs</option>
             <option value="bannana">bannana</option>
             <option value="strawberry">strawberry</option>
            </select>
        </div>
    );
}
}

export default Exercise2;