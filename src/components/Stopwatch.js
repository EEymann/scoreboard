//This is a stateful component, so we have to import component from react
import React, { Component } from 'react';

class Stopwatch extends Component {

  state = {
    isRunning: false
  };

//When triggered, state = opposite of whatever current state is, causing the button to toggle between "start" and "stop"
  handleStopwatch = () => {
    this.setState({
      isRunning: !this.state.isRunning //The oppososite of the current state
    });
  }

  render() {
    return (
      <div className="stopwatch">
        <h2>Stopwatch</h2>
        <span className="stopwatch-time">0</span>
        <button onClick={this.handleStopwatch}>
        {this.state.isRunning ? 'Stop' : 'Start'}
        </button>
        <button>Reset</button>
      </div>
    );
  }
}

export default Stopwatch;