import rock from './images/rock.svg';
import paper from './images/paper.svg';
import scissors from './images/scissors.svg';

const GameOutcome = ({ choicesState, youWin, onClick }) => {
  return (
    <div>
      <div>
        <h2 className="my-5 fw-bold">{ youWin }</h2>
      </div>
      <div className="gameOutcome d-flex justify-content-between mx-auto w-50 ">
        <div>
          <h2 className="fw-bold">YOUR CHOICE</h2>
          <img src={ choicesState.player === 'rock' ? rock : choicesState.player === 'paper' ? paper : scissors } alt={choicesState.player}
            className={`${choicesState.player} choice bg-light rounded-circle shadow p-5 m-5`}/>
        </div>
        <div>
          <h2 className="fw-bold">HOUSE CHOICE</h2>
          <img src={ choicesState.comp === 'rock' ? rock : choicesState.comp === 'paper' ? paper : scissors } alt={choicesState.comp}
            className={`${choicesState.comp} choice bg-light rounded-circle shadow p-5 m-5`}/>
        </div>
      </div>
      <button onClick={onClick} className="btn btn-lg btn-dark shadow p-3 fw-bolder">PLAY AGAIN?</button>
    </div>
  );
}

export default GameOutcome;
