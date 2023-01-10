import React, { useState } from 'react'
import './App.css';
import Score from './components/score.jsx'
import GameWrapper from './components/game-wrapper.jsx'
import GamePlay from './components/game-play.jsx';
import GameOutcome from './components/game-outcome.jsx';
import Choices from './components/choices.jsx';

const choices = [ 'rock', 'paper', 'scissors']

const App = () => {
  let [game, setGame] = useState({
    choice: '',
    compChoice: '',
    total: 0,
    winner: ''
  });

  const houseChoice = () => {
    return choices[Math.floor(Math.random() * 3)];
  }

  const whoWins = (choice, computerChoice) => {
    if ((choice === 'rock' && computerChoice === 'scissors') ||
      (choice === 'paper' && computerChoice === 'rock') ||
      (choice === 'scissors' && computerChoice === 'paper'))
      {
        return true
      } else {
        return false
      }
  }

  const rockHandler = (e) => {
    const computerChoice = houseChoice()
    const score = whoWins('rock', computerChoice) ? game.total + 1 : game.total
    const winner = whoWins('rock', computerChoice) ? 'YOU WIN 🥳' : 'YOU LOSE 😭'
    setGame({
      ...game,
      choice: 'rock',
      compChoice: computerChoice,
      total: score,
      winner: winner
    })

  }

  const paperHandler = (e) => {
    const computerChoice = houseChoice()
    const score = whoWins('paper', computerChoice) ? game.total + 1 : game.total
    const winner = whoWins('paper', computerChoice) ? 'YOU WIN 🥳' : 'YOU LOSE 😭'
    setGame({
      ...game,
      choice: 'paper',
      compChoice: computerChoice,
      total: score,
      winner: winner
    })
  }
  const scissorsHandler = (e) => {
    const computerChoice = houseChoice()
    const score = whoWins('scissors', computerChoice) ? game.total + 1 : game.total
    const winner = whoWins('scissors', computerChoice) ? 'YOU WIN 🥳' : 'YOU LOSE 😭'
    setGame({
      ...game,
      choice: 'scissors',
      compChoice: computerChoice,
      total: score,
      winner: winner
    })
  }

  const playAgainHandler = (e) => {
    setGame({
      ...game,
      choice: '',
      compChoice: '',
      winner: ''
    })
  }

  const resetHandler = (e) => {
    setGame({
      ...game,
      choice: '',
      compChoice: '',
      total: 0,
      winner: ''
    })
  }

  return (
    <div className="App">
      <Score total={game.total} onClick={resetHandler}/>
      <GameWrapper>
        {
          !game.choice ?
            <Choices> {
              (choices.map((hand, index) => {
                  return (
                    <GamePlay
                      key={index}
                      choice={hand}
                      onClick={
                        hand === 'rock' ? rockHandler
                        : hand === 'paper' ? paperHandler
                        : scissorsHandler
                      }
                    />
                  )
                }))
              }
            </Choices>
            :
            <GameOutcome
              choice={game.choice}
              computerChoice={game.compChoice}
              youWin={game.winner}
              onClick={playAgainHandler}
            >
            </GameOutcome>
        }
      </ GameWrapper>
    </div>
  );
}

export default App;
