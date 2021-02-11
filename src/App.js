import React, { Component } from "react";

import "./App.css";

import lines from "./images/lines.png";
import number from "./images/num.png";

let interval = null;
let r = 255;
let cf = 2 * Math.PI * r;

class App extends Component {
  state = { speed: 0, length: 0 };

  timer = () => {
    this.setState({
      speed: this.state.speed + 1,
      length: this.state.length + 5.02,
    });

    if (this.state.speed === 220) {
      clearInterval(interval);
    }
  };

  componentDidMount() {
    interval = setInterval(this.timer, 1000);
  }
  componentWillUnmount() {
    clearInterval(interval);
  }
  render() {
    {
      return (
        <div className="root">
          <svg className="meter" xmlns="http://www.w3.org/2000/svg">
            <circle
              xmlns="http://www.w3.org/2000/svg"
              className="circle width"
              stroke="#EE9A34"
              r="255"
              id="svg_4"
              cy="50%"
              cx="50%"
              style={{
                strokeDasharray: this.state.length + "," + cf,
              }}
            ></circle>
            <circle
              className="circle width"
              cx="50%"
              cy="50%"
              stroke="#7CCCE5"
              r="255"
              style={{ strokeDasharray: 0 + "," + cf }}
            ></circle>
          </svg>
          <div className="speed_count">
            <label className="speed_val">{this.state.speed}</label>
            <label className="unit">kmh</label>
          </div>
          <img src={lines} alt="lines" className="lines" />
          <img src={number} alt="numbers" className="number" />
        </div>
      );
    }
  }
}

export default App;
