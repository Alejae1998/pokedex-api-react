export async function getPokemons(name) {
  const rawResponse = await fetch(
    `http://localhost:52554/.netlify/functions/pokemons?name=${name}`
  );
  const data = await rawResponse.json();

  return data;
}
