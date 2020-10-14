//This is a controled component, used to get the value of an input field 
//This is still the recommended React way to control form elements.
//Controled components have internal state and require functions to update state.
//They make it easier to modify or validate user input or filter results based on user input in real time.
//Control components with state call render on every keystroke, where as in refs, render is only called once.

import React, { Component } from 'react';

class AddPlayerForm extends Component {
//1. Create a value state
  state= { 
    value: '' 
  }
//2.Write a function to update the value state
  handleValueChange = (e) => {
    this.setState({ value: e.target.value});
  }


  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addPlayer(this.state.value);
    this.setState({ value: ''}); //Clears field upon submit
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
        type="text"
        value={this.state.value}
        //3.Wire the input field to the function using an onChange event:
        onChange={this.handleValueChange}
        placeholder="Enter a player's name"
         />

         <input
         type="submit"
         value="Add Player"
          />
      </form>
    );
  }
}

  
export default AddPlayerForm;