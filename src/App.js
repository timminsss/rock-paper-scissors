import React, { useState } from 'react'
import './App.css';
import Score from './components/score.jsx'
import GameWrapper from './components/game-wrapper.jsx';
import Choices from './components/choices.jsx';
import Results from './components/results.jsx';

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

  const handleChoice = (hand) => {
    const computerChoice = houseChoice()
    setWinner(whoWins(hand, computerChoice));
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
          choices.player === Actions.Unselected ?
            <Choices
            plays={plays}
            handleChoice={handleChoice}
            />
          :
            <Results
            winner={winner}
            playAgainHandler={playAgainHandler}
            choices={choices}
            />
        }
      </ GameWrapper>
    </div>
  );
}

export default App;
