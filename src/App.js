import { useEffect, useState } from 'react';
import './App.css';
import BoardGame from './components/boardGame/BoardGame';

const row = prompt("How many squares do you want on the board?");

const rowBoard = [];

for (let i = 0; i < row; i++) {
  rowBoard.push(i);
}

let endgame = false;

function App() {
  let random = Math.floor(Math.random() * row);
  const [ count, setCount ] = useState(0);
  const [ winnerPoint, setWinnerPoint ] = useState(random);
  const [ countDown, setCountDown ] = useState(30);

  useEffect(() => {
    const interval = setInterval(() => {
      setWinnerPoint(random);
    }, 375);
    return () => clearInterval(interval);
  })

  useEffect(() => {
    countDown > 0 && setTimeout(() => setCountDown(countDown - 1), 1000);
  }, [ countDown ]);

  if (!endgame) {
    if (countDown === 0) {
      setTimeout(() => {
        alert(`Your final score is: ${count}`);
      }, 100);
      setCount(0);
      endgame = true;
    }
  }

  return (
    <section className="board-container">
      <h1>Whack-a-Mole Game</h1>
      <h3>Countdown: {countDown}</h3>
      <div className="board-box">
        {rowBoard.map((index) =>
          <div key={index}>
            <BoardGame index={index} winnerPoint={winnerPoint} count={count} setCount={setCount} endgame={endgame} />
          </div>
        )}
      </div>
      <div className="score-box">
        <h3>Score: <span>{count}</span></h3>
      </div>
      <button onClick={() => window.location.reload()}>Restart Game</button>
    </section>
  );
}

export default App;
