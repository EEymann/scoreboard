//This is a stateful component, so we have to import component from react
import React, { Component } from 'react';

class Stopwatch extends Component {

  state = {
    isRunning: false,
    elapsedTime: 0,
    previousTime: 0
  };

  componentDidMount() {
      this.intervalID = setInterval(() => this.tick(), 100)
  }
  
// If isRunning is true, update the timer. Current time is stored in the variable now,
// then, update state. Update two pieces of state here: previousTime & elapsedTime,
// previous time gets updated to now so we can use it to calculate the elapsed time or the time since the previous tick.
// The elapsedTime value increases by the amount of miliseconds that have elapsed since the last tick. 
// We determine the elapsedTime by calculating the difference between now's time stamp and the time stamp stored in state.previousTime
// Then, increase the elapsedTime by adding the difference to this.state.elapsedTime.
// So each time tick runs, if isRunning is true, setState is going to update elapsedTime using the difference between previousTime and now.
// At the same time, it updates previousTime to Date.now. 
// This is exectuted over and over as long as timer is running. 

  tick = () => {
    if (this.state.isRunning) {
      const now = Date.now();
      this.setState( prevState => ({
        previousTime: now,
        elapsedTime: prevState.elapsedTime + (now - this.state.previousTime)
      }));
    }
  }

//When triggered, state = opposite of whatever current state is, causing the button to toggle between "start" and "stop"
  handleStopwatch = () => {
    this.setState( prevState => ({
      isRunning: !prevState.isRunning //The oppososite of the current state
    }));
    if (!this.state.isRunning) {
      this.setState({ previousTime: Date.now() }); // Date.now returns the exact number of milliseconds elapsed since Jan 1st of 1970
    }
  }

  //When triggered, reset button is updated to 0
  handleReset = () => {
    this.setState({ elapsedTime: 0})
  }

  render() {

    const seconds = Math.floor(this.state.elapsedTime / 1000) //Converts miliseconds to seconds

    return (
      <div className="stopwatch">
        <h2>Stopwatch</h2>
        <span className="stopwatch-time">
          { seconds } 
        </span>
        <button onClick={this.handleStopwatch}>
        {this.state.isRunning ? 'Stop' : 'Start'}
        </button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

export default Stopwatch;