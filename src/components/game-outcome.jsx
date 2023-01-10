import rock from './images/rock.svg';
import paper from './images/paper.svg';
import scissors from './images/scissors.svg';

const GameOutcome = ({ choice, computerChoice, youWin, onClick }) => {
  return (
    <div>
      <div>
        <h2 className="my-5 fw-bold">{ youWin }</h2>
      </div>
      <div className="gameOutcome d-flex justify-content-between mx-auto w-50 ">
        <div>
          <h2 className="fw-bold">YOUR CHOICE</h2>
          <img src={ choice === 'rock' ? rock : choice === 'paper' ? paper : scissors } alt={choice}
            className={`${choice} choice bg-light rounded-circle shadow p-5 m-5`}/>
        </div>
        <div>
          <h2 className="fw-bold">HOUSE CHOICE</h2>
          <img src={ computerChoice === 'rock' ? rock : computerChoice === 'paper' ? paper : scissors } alt={computerChoice}
            className={`${computerChoice} choice bg-light rounded-circle shadow p-5 m-5`}/>
        </div>
      </div>
      <button onClick={onClick} className="btn btn-lg btn-dark shadow p-3 fw-bolder">PLAY AGAIN?</button>
    </div>
  );
}

export default GameOutcome;
