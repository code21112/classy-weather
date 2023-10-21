import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = { counter: 0 };
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
  }

  handleIncrement() {
    // console.log("handleAdd triggered");
    // console.log("this", this);
    this.setState((curState) => {
      return { counter: curState.counter + 1 };
    });
  }

  handleDecrement() {
    if (this.state.counter === 0) return;
    this.setState((curState) => {
      return {
        counter: curState.counter - 1,
      };
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleIncrement}>+</button>
        <span>{this.state.counter}</span>
        <button onClick={this.handleDecrement}>-</button>
      </div>
    );
  }
}

export default Counter;
