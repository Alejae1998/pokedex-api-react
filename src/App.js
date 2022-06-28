import { useEffect, useState } from 'react';
import './App.css';
import { getPokemons } from './services/fetch-utils';
import Spinner from './Spinner';
function App() {
  const [pokemons, setPokemons] = useState([]);
  const [query, setQuery] = useState('a');
  const [isLoading, setIsLoading] = useState(false);

  async function load() {
    setIsLoading(true);
    // console.log('pokemon');
    const {
      data: { results },
    } = await getPokemons(query);

    setIsLoading(false);

    setPokemons(results);
  }

  useEffect(() => {
    load();
  }, []); //eslint-disable-line

  async function handleSearch(e) {
    e.preventDefault();

    load();
  }

  return (
    <div className="App">
      <form onSubmit={handleSearch}>
        <input onChange={(e) => setQuery(e.target.value)} />
        <button>Search</button>
      </form>
      <header className="App-header">
        {isLoading ? (
          <Spinner />
        ) : (
          pokemons.map(({ pokemon, height, weight, url_image }, i) => (
            <div key={pokemon + i}>
              <h2>Pokename: {pokemon}</h2>
              <p>Height: {height} pokefeet</p>
              <p>Weight: {weight} pokepounds</p>
              <img src={url_image} />
            </div>
          ))
        )}
      </header>
    </div>
  );
}

export default App;
