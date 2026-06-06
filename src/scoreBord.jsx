import {useEffect, useState} from 'react'

function ScoreBoard() {
  const [score, setScore] = useState(0);
   function updateScore () {
      setScore(score + 1)

   }
    useEffect (() => {
      scoreBoard()
    }, [score])
      
  return (
    <div className="score-board">,scoreBoard={scoreBoard} score={score}</div>
  )
}

export default ScoreBoard