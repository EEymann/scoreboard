import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter';


//PureComponent is a more performant version of component
//It's another way you might see classes written in react
//PureComponent implements a lifecycle method behind the scenes called:
//shouldComponentUpdate that runs a shallow comparison of props and state.
//The lifecycle method automatically checks whether a rerender is required for the component,
//and calls render only if it detects changes in state or props 
//This gives you the chance to skip rerendering when the component state or props haven't changed.
//Now only the player with the updated score will rerender as opposed to the entire list of players.

class Player extends PureComponent {

  static propTypes = {
    changeScore: PropTypes.func,
    removePlayer: PropTypes.func,
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    id: PropTypes.number,
    index: PropTypes.number
  };

  render() { //In classes, in classes props are not accessed through a props parameter, like they are in functions. To destructur from this.props, you use a variable assignment. 
    const {
      name,
      id,
      score,
      index,
      removePlayer,
      changeScore
     } = this.props;
    console.log(name + ' rendered')
    return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={() => removePlayer(id)}>✖</button>
          { name }
        </span>
  
        <Counter score={score}
          index={index}
          changeScore={changeScore}
        />
      </div>
    );
  }
}

export default Player;