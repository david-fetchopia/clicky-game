import React, { Component } from 'react';
import './App.css';
import Main from './components/Main'
import players from "./players.json"

class App extends Component {
  state = {
    guessArray: [],
    score: 0,
    topScore: 0,
  }

  clickHandler = card => {
    let score = this.state.score;
    let guessedArray = this.state.guessArray;

    if (guessedArray[card.name]) {
      alert("You already guessed " + card.name);
      this.setState({
        topScore: Math.max(this.state.score, this.state.topScore),
        guessArray: [],
        score: 0
      });

    } else {
      guessedArray[card.name] = true;
      this.setState({
        guessArray: guessedArray,
        score: ++score
      })
    }
  }

  render(){
    return (
      <div>
        <nav className="navbar">
          <ul>
            <li className="brand">
              <a href="/">Toronto Raptors Clicky Game</a>
            </li>
            <li>Click an image to begin!</li>
            <li>
              Score: {this.state.score} | Top Score: {this.state.topScore}
            </li>
          </ul>
        </nav>
        <header className="header">
          <h1>Toronto Raptors Clicky Game!</h1>
          <h2>Click on an image to earn points, but don't click on any more than once!</h2>
        </header>
        <Main players={players}
              clickHandler={this.clickHandler}/>

        <footer className="footer">
          <div className="bottom">
            Clicky Game!
            <img alt="react" src="./favicon.ico"></img>
          </div>
        </footer>
      </div>
    );
  }
  
}

export default App;
