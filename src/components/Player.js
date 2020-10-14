import React, { PureComponent } from 'react';
import Counter from './Counter'


//PureComponent is a more performant version of component
//It's another way you might see classes written in react
//PureComponent implements a lifecycle method behind the scenes called:
//shouldComponentUpdate that runs a shallow comparison of props and state.
//The lifecycle method automatically checks whether a rerender is required for the component,
//and calls render only if it detects changes in state or props 
//This gives you the chance to skip rerendering when the component state or props haven't changed.
//Now only the player with the updated score will rerender as opposed to the entire list of players.

class Player extends PureComponent {
  render() {
    console.log(this.props.name + ' rendered')
    return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={() => this.props.removePlayer(this.props.id)}>✖</button>
          { this.props.name }
        </span>
  
        <Counter score={this.props.score}
          index={this.props.index}
          changeScore={this.props.changeScore}
        />
      </div>
    );
  }
}
// const Player = (this.props) => {

// }

export default Player;