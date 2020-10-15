
import React from 'react';
import Proptypes from 'prop-types';

const Counter = ({index, score, changeScore }) => {
    return (
      <div className="counter">
        <button className="counter-action decrement" onClick={() => changeScore(index, -1)}> - </button>
        <span className="counter-score">{ score }</span>
        <button className="counter-action increment" onClick={() => changeScore(index, +1)}> + </button>
      </div>
    );
}
  //The propTypes object contains the props being passed to the component as its keys.
  //The counter component accepts three props: index, score and changeScore
  Counter.propTypes = {
    index: Proptypes.number,
    score: Proptypes.number,
    changeScore: Proptypes.func
  };

  export default Counter;