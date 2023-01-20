import rock from './images/rock.svg';
import paper from './images/paper.svg';
import scissors from './images/scissors.svg';

const Choices = ({ plays, handleChoice }) => {
  return (
    <div>
      {plays.map((hand, index) => (
        <img alt={ hand }
          className={`${hand} choice rounded-circle shadow p-5 m-5`}
          onClick={() => handleChoice(hand)}
          src={ hand === 'rock' ? rock : hand === 'paper' ? paper : scissors }
          key={index}/>
      ))}
    </div>
  )
}

export default Choices;
