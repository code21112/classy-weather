import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = { count: 0 };
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
  }

  handleIncrement() {
    // console.log("handleAdd triggered");
    // console.log("this", this);
    this.setState((curState) => {
      return { count: curState.count + 1 };
    });
  }

  handleDecrement() {
    // if (this.state.count === 0) return;
    this.setState((curState) => {
      return {
        count: curState.count - 1,
      };
    });
  }

  render() {
    const date = new Date("June 21 2024");
    date.setDate(date.getDate() + this.state.count);

    return (
      <div>
        <button onClick={this.handleIncrement}>+</button>
        <span>{date.toDateString()}</span>
        <span>[{this.state.count}]</span>
        <button onClick={this.handleDecrement}>-</button>
      </div>
    );
  }
}

export default Counter;
