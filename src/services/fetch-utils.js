export async function getPokemons(name) {
  const rawResponse = await fetch(
    `http://localhost:8888/.netlify/functions/pokemon?name=${name}`
  );
  const data = await rawResponse.json();

  return data;
}


export async function getYelpData(searchFilter) {
  const rawResponse = await fetch(`/.netlify/functions/yelp?searchFilter=${searchFilter}`);
  const data = await rawResponse.json();

  return data;
}

export async function getWeatherData(searchFilter) {
  const rawResponse = await fetch(`/.netlify/functions/weather?searchFilter=${searchFilter}`);
  const data = await rawResponse.json();

  return data;
}
