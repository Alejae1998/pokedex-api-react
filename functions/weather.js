const fetch = require('node-fetch');
require('dotenv').config();

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
};
// eslint-disable-next-line no-unused-vars
exports.handler = async (event, context) => {
  try {
    const geocodingResponse = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${event.queryStringParameters.searchFilter}&appid=${process.env.WEATHER_KEY}`
    );

    const [{ lat, lon }] = await geocodingResponse.json();

    const weatherResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${process.env.WEATHER_KEY}`
    );

    const weatherData = await weatherResponse.json();

    return {
      statusCode: 200,
      headers,

      body: JSON.stringify({ weatherData }),
    };
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed fetching data' }),
    };
  }
};