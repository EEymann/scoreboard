//This uses Refs. 
//Refs let you access and interact with DOM nodes or React elements created in the render method.
//They make it possible to do the more traditional DOM manipulation.
//Commonly used to access form elements and get their values.
//*Earlier, you learned how to update the value of an input field using state,
//by creating a controlled component or a component with internally controlled state.
//See AddPlayerForm1.js to see the orignal way to do this.
//AddPlayerForm1.js is still the recommended way to control form elements. Especially if you need to validate user input in real time, or filter results with every key stroke.
//However, if you're building a form that does not require internal state, you can make use of the ref attribute,
//..instead of writing an event handler for every state update. 


import React, { Component } from 'react';

class AddPlayerForm extends Component {

  //Step 4: delete the state object because we're no longer using the value state.
  // state= { 
  //   value: ''
  // }

  //1. Create a ref named playerInput.
  //2. Attach this ref to the text input in the render method.
  playerInput = React.createRef();

  //Step 5: delete this function because of step 4
  // handleValueChange = (e) => {
  //   this.setState({ value: e.target.value});
  // }


  handleSubmit = (e) => {
    e.preventDefault();
    //Step 3: Instead of passing the value state to the addPlayer callback,
    //pass it the ref with this.playerInput
    //If the ref is a form element, you get the value of the ref with .current.value
    this.props.addPlayer(this.playerInput.current.value);
    //Step 6: delete this too: this.setState({ value: ''}); //Clears field upon submit 
    //Step 8: reset the form:
    e.currentTarget.reset();
  }

  render() {
    console.log(this.playerInput);
    //returns an object with current pointing to input element
    return (
      <form onSubmit={this.handleSubmit}>
        <input
        type="text"
        //Step 2: attach ref to text input
        //This puts a reference to the input on AddPlayerForm class..
        //When the input is rendered onto the page, it returns the reference which you can access..
        //with this.playerInput
        ref={this.playerInput}
        //Step 7 delete this too because of step 4:
        // value={this.state.value}
        // onChange={this.handleValueChange}
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