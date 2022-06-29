import { useState } from 'react';
import { getYelpData } from './services/fetch-utils';
import Spinner from './Spinner';

export default function YelpSearch() {
  const [yelpData, setYelpData] = useState([]);
  const [yelpQuery, setYelpQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  async function handleYelpSubmit(e) {
    e.preventDefault();

    setIsLoading(true);

    const response = await getYelpData(yelpQuery);
    setYelpData(response.data.businesses);
    setIsLoading(false);
  }

  return (
    <section className="yelp">
      <form onSubmit={handleYelpSubmit}>
        <input onChange={(e) => setYelpQuery(e.target.value)} />
        search yelp for a city
        <button>Search Yelp</button>
      </form>
      {isLoading ? (
        <Spinner />
      ) : (
        yelpData.map(({ name, price, phone, image_url }, i) => (
          <div key={name + i}>
            <h2>{name}</h2>
            <p>${price}</p>
            <p>{phone}</p>
            <img src={image_url} />
          </div>
        ))
      )}
    </section>
  );
}