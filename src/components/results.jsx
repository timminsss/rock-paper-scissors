import GameOutcome from './game-outcome.jsx';

const results = ({ winner, playAgainHandler, choices }) => {
  return (
    <div className="results">
      <GameOutcome
              choicesState={choices}
              youWin={winner}
              onClick={playAgainHandler}
      />
    </div>
  );
}

export default results;
