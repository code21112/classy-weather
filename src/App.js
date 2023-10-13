import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = { counter: 0 };
  }
  render() {
    return (
      <div>
        <button>+</button>
        <span>{this.state.counter}</span>
        <button>-</button>
      </div>
    );
  }
}

export default Counter;
