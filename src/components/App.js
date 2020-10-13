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

  
  handleScoreChange = (delta) => {
    // this.setState( prevState => ({
    //   score: prevState.score + 1
    // }));
    console.log(delta);
  }


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
        {this.state.players.map( player =>
          <Player 
            name={player.name}
            score={player.score}
            id={player.id}
            key={player.id.toString()}
            changeScore={this.handleScoreChange} 
            removePlayer={this.handleRemovePlayer}           
          />
        )}
      </div>
    );
  }
}

export default App;
