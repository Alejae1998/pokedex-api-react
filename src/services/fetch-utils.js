export async function getPokemons(name) {
  const rawResponse = await fetch(
    `http://localhost:8888/.netlify/functions/pokemon?name=${name}`
  );
  const data = await rawResponse.json();

  return data;
}
