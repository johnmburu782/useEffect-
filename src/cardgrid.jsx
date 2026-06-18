import {useEffect, useState} from 'react'
import Card from './card'

function Cardgrid({ onCardClick }) {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    async function fetchPokemon() {
      const promises = [];

      for (let i = 1; i <= 12; i++) {
        promises.push(
          fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
            .then(res => res.json())
        );
      }

      const data = await Promise.all(promises);

      setCards(
        data.map(pokemon => ({
          id: pokemon.id,
          name: pokemon.name,
          image: pokemon.sprites.front_default,
        }))
      );
    }

    fetchPokemon();
  }, []);

  return (
    <div className="card-grid">
        {cards.map(card => (
          <Card key={card.id} card={card} onCardClick={onCardClick} />
        ))}
    </div>
  )
}

export default Cardgrid