import { useEffect, useState} from 'react'
import Cardgrid from './cardgrid'
import ScoreBoard from './scoreBord'
import './App.css'


function App() {
  const [score, setScore] = useState(0);
  
  const updateScore = () => {
    setScore(score + 1);
  };

  return (
    <div className="app">
      <ScoreBoard score={score} />
      <Cardgrid onCardClick={updateScore} />
    </div>
  )
}

export default App