import {useEffect, useState} from 'react'

function Card({ card, onCardClick }) {
  if (!card) return null;

  return (
    <div className="card" onClick={onCardClick}>
      <h3>{card.name}</h3>
      <img src={card.image} alt={card.name} />
    </div>
  )
}

export default Card