import React, { Component } from 'react';
import Header from './Header';
import Player from './Player' //Also brings in counter
import AddPlayerForm from './AddPlayerForm';
import { render } from 'react-dom';

// This lets you export your components to other files
class App extends Component {
  state = {
    players: [
      {
        name: "Kitty",
        score: 0,
        id: 1
      },
      {
        name: "Puppy",
        score: 0,
        id: 2
      },
      {
        name: "Frog",
        score: 0,
        id: 3
      },
      {
        name: "Toad",
        score: 0,
        id: 4
      }
    ]
  };

  // player id counter
  prevPlayerId = 4;

  handleScoreChange = (index, delta) => {
    this.setState( prevState => {
      // New 'players' array - a copy of the previous 'players' state
      const updatedPlayers = [ ...prevState.players ];
      
      // A copy of the player object we're targeting
      const updatedPlayer = { ...updatedPlayers[index] };

      // Update the target player's score
      updatedPlayer.score += delta;
      
      // Update the 'players' array with the target player's latest score
      updatedPlayers[index] = updatedPlayer;

      // Update the 'players' state without mutating the original state
      return {
        players: updatedPlayers
      };
    });
  }
  
  handleAddPlayer = (name) => {
    this.setState( prevState => {
      return {
      players: [
        ...prevState.players,
        {
        name,
        score: 0,
        id: this.prevPlayerId += 1 
        }
      ]
    };
  });
}

  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  }

  getHighScore = () => {
    const scores = this.state.players.map( p => p.score );
    const highScore = Math.max(...scores);
    if (highScore) {
      return highScore;
    }
    return null;
  }
  

  render() {
    const highScore = this.getHighScore();

    return (
      <div className="scoreboard">
        <Header 
          players={this.state.players} 
        />
  
        {/* Players list */}
        {this.state.players.map( (player, index) =>
          <Player 
            name={player.name}
            score={player.score}
            id={player.id}
            key={player.id.toString()}
            index={index}
            changeScore={this.handleScoreChange} 
            removePlayer={this.handleRemovePlayer}
            isHighScore={highScore === player.score} //Is a player's 'score' prop equal to the high score?          
          />
        )}

        <AddPlayerForm addPlayer={this.handleAddPlayer} />
      </div>
    );
  }
}



export default App;
