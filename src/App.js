import React, { useState } from 'react'
import './App.css';
import Score from './components/score.jsx'
import GameWrapper from './components/game-wrapper.jsx'
import GamePlay from './components/game-play.jsx';
import GameOutcome from './components/game-outcome.jsx';
import Choices from './components/choices.jsx';

// const choices = [ 'rock', 'paper', 'scissors']
const Actions = {
  Rock: 'rock',
  Paper: 'paper',
  Scissors: 'scissors',
  Unselected: ''
}
const plays = [ Actions.Paper, Actions.Rock, Actions.Scissors]

const App = () => {

  const [choices, setChoices] = useState({
    player: Actions.Unselected,
    comp: Actions.Unselected});
  const [total, setTotal] = useState(0);
  const [winner, setWinner] = useState();

  const houseChoice = () => {
    return plays[Math.floor(Math.random() * 3)];
  }

  const whoWins = (choice, computerChoice) => {
    const winningCombinations = [[Actions.Rock, Actions.Scissors], [Actions.Paper, Actions.Rock], [Actions.Scissors, Actions.Paper]]
    setChoices({
      player: choice,
      comp: computerChoice
    });
    if (choice === computerChoice) {
      return ("IT'S A DRAW!")
    } else if (winningCombinations.some(i => i.toString() === [choice, computerChoice].toString())) {
      setTotal(total + 1);
      return ("YOU WIN 🥳")
    } else {
      return ("YOU LOSE 😭")
    }
  }

  const rockHandler = () => {
    const computerChoice = houseChoice()
    setWinner(whoWins(Actions.Rock, computerChoice));
  }

  const paperHandler = () => {
    const computerChoice = houseChoice()
    setWinner(whoWins(Actions.Paper, computerChoice));
  }
  const scissorsHandler = () => {
    const computerChoice = houseChoice()
    setWinner(whoWins(Actions.Scissors, computerChoice));
  }

  const handleChoice = (playerChoice) => {
    const computerChoice = houseChoice()
    console.log(`player choice ${playerChoice}`)
    console.log(`comp choice ${computerChoice}`)
    setWinner(whoWins(playerChoice, computerChoice));
  }

  const playAgainHandler = () => {
    setChoices({
      player: Actions.Unselected,
      comp: Actions.Unselected
    });
    setWinner();
  }

  const resetHandler = () => {
    setChoices({
      player: Actions.Unselected,
      comp: Actions.Unselected
    });
    setTotal(0);
    setWinner();
  }

  return (
    <div className="App">
      <Score total={total} onClick={resetHandler}/>
      <GameWrapper>
        {
          choices.player === '' ?
            <Choices> {
              (plays.map((hand, index) => {
                  return (
                    <GamePlay
                      key={index}
                      choice={hand}
                      // onClick={handleChoice(hand)}
                      // onClick={
                      //   hand === Actions.Rock ? handleChoice(Actions.Rock)
                      //   : hand === Actions.Paper ? handleChoice(Actions.Paper)
                      //   : handleChoice(Actions.Scissors)
                      //  }
                      onClick={
                        hand === Actions.Rock ? rockHandler
                        : hand === Actions.Paper ? paperHandler
                        : scissorsHandler
                       }
                    />
                  )
                }))
              }
            </Choices>
            :
            <GameOutcome
              choicesState={choices}
              youWin={winner}
              onClick={playAgainHandler}
            >
            </GameOutcome>
        }
      </ GameWrapper>
    </div>
  );
}

export default App;
