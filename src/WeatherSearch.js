import { useState } from 'react';
import { getWeatherData } from './services/fetch-utils';
import Spinner from './Spinner';

export default function WeatherSearch() {
  const [weatherData, setWeatherData] = useState([]);
  const [weatherQuery, setWeatherQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  async function handleWeatherSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    const response = await getWeatherData(weatherQuery);
    setWeatherData(response.weatherData.daily);
    setIsLoading(false);
  }

  return (
    <section className="weather">
      <form onSubmit={handleWeatherSubmit}>
        <input onChange={(e) => setWeatherQuery(e.target.value)} />
        Search the weather
        <button>Get Weather</button>
      </form>
      {isLoading ? (
        <Spinner />
      ) : (
        weatherData.map(({ temp, clouds, dt }, i) => (
          <div key={temp + clouds + dt + i}>
            <h2>{temp.day} degrees</h2>
            <p>{clouds}% cloud cover</p>
            <p>{String(new Date(dt * 1000))}</p>
          </div>
        ))
      )}
    </section>
  );
}
