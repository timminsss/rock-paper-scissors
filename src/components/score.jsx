// import "../component-css/button.css";
import logo from './images/logo.svg';

const Score = ({ total, onClick }) => {
  return (
    <div>
      <div className="scoreboard w-75 mx-auto p-5 my-5 shadow rounded d-flex justify-content-between">
        <img src={logo} className="app-logo" alt="logo" />
        <div className="score-box bg-light py-3 px-5 rounded">
          <p className="score my-auto px-4">SCORE</p>
          <p className="score my-auto fw-bolder">{total}</p>
        </div>
      </div>
      <button onClick={onClick} className="btn btn-lg btn-light shadow fw-bolder h-50">RESET</button>
    </div>
  );
}

export default Score;
