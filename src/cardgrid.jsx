import {useEffect, useState} from 'react'

function Cardgrid() {
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
    <div>
        {cards.map(card => (
          <div key={card.id}>
            <h3>{card.name}</h3>
            <img src={card.image} alt={card.name} />
          </div>
        ))}
    </div>
  )
}

export default Cardgrid