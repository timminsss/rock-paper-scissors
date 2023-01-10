import rock from './images/rock.svg';
import paper from './images/paper.svg';
import scissors from './images/scissors.svg';

const GamePlay = ({ choice, onClick }) => {
  return (
      <img alt={ choice }
          className={`${choice} choice rounded-circle shadow p-5 m-5`}
          onClick={ onClick }
          src={ choice === 'rock' ? rock : choice === 'paper' ? paper : scissors }/>
  );
}

export default GamePlay;
