import GameOutcome from './game-outcome.jsx';
import PlayAgain from './play-again.jsx';

const results = ({ winner, playAgainHandler, choices }) => {
  return (
    <div className="results">
      <GameOutcome
              choicesState={choices}
              youWin={winner}
              onClick={playAgainHandler}
      />
      <PlayAgain onClick={playAgainHandler}/>
    </div>
  );
}

export default results;
