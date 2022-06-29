export async function getPokemons(searchFilter) {
  const rawResponse = await fetch(
    `http://localhost:8888/.netlify/functions/pokemon?searchFilter=${searchFilter}`
  );
  const data = await rawResponse.json();

  return data;
}

export async function getYelpData(searchFilter) {
  const rawResponse = await fetch(
    `http://localhost:8888/.netlify/functions/yelp?searchFilter=${searchFilter}`
  );
  const data = await rawResponse.json();

  return data;
}

export async function getWeatherData(searchFilter) {
  const rawResponse = await fetch(
    `http://localhost:8888/.netlify/functions/weather?searchFilter=${searchFilter}`
  );
  const data = await rawResponse.json();

  return data;
}
