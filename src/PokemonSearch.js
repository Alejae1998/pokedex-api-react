import { useState } from 'react';
import { getPokemons } from './services/fetch-utils';
import Spinner from './Spinner';

export default function PokemonSearch() {
  const [pokemons, setPokemons] = useState([]);
  const [query, setQuery] = useState('pikachu');
  const [isLoading, setIsLoading] = useState(false);

  async function handlePokemonSubmit(e) {
    e.preventDefault();

    setIsLoading(true);

    const {
      data: { results },

    } = await getPokemons(query);

    setIsLoading(false);
    setPokemons(results);

  }

  return (
    <section className="pokemon">
      <form onSubmit={handlePokemonSubmit}>
        <input onChange={(e) => setQuery(e.target.value)} />
        <button>Search</button>
      </form>
      {isLoading ? (
        <Spinner />
      ) : (
        pokemons.map(({ pokemon, height, weight, url_image }, i) => (
          <div key={pokemon + i}>
            <h2>Name: {pokemon}</h2>
            <p>Height: {height}</p>
            <p>Weight: {weight}</p>
            <img src={url_image} />
          </div>
        ))
      )}
    </section>
  );
}