import {useEffect, useState} from 'react'

function Card({ card ,scoreBoard, score}) {
  if (!card) return null;

  return (
    <div onClick={scoreBoard}>
      <ScoreBoard score={score} />
      

      <h3>{card.name}</h3>
      <img src={card.image} alt={card.name} />
    </div>
  )
}

export default Card