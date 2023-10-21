import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { location: "Lisbon" };
    this.fetchWeather = this.fetchWeather.bind(this);
  }
  fetchWeather() {
    console.log("loading data...");
    console.log("this", this);
  }

  render() {
    return (
      <div className="app">
        <h1>Classy-weather</h1>
        <div className="input">
          <input
            type="text"
            placeholder="Search for location"
            value={this.state.location}
            onChange={(e) => this.setState({ location: e.target.value })}
          />
        </div>
        <button className="input" onClick={this.fetchWeather}>
          Get weather
        </button>
      </div>
    );
  }
}

export default App;
