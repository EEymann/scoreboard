import React, { Component } from 'react';
import Header from './Header';
import Player from './Player' //Also brings in counter

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
  

  
  // handleScoreChange = (index, delta) => {
  //   this.setState( prevState => ({
  //     score: prevState.players[index].score += delta
  //   }));
    
  // }


  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  }

  render() {
    return (
      <div className="scoreboard">
        <Header 
          title="Scoreboard" 
          totalPlayers={this.state.players.length} 
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
          />
        )}
      </div>
    );
  }
}

export default App;
