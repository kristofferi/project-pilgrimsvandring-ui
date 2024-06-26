import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ApiComponent() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://localhost:7198/api/PointsOfInterest')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        setError(error.message);
      });
  }, []);

  return (
    <div>
      <h2>Points of Interest</h2>
      {error && <p>Error: {error}</p>}
      {data.length > 0 ? (
        <ul>
          {data.map(point => (
            <li key={point.id}>{point.name}</li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default ApiComponent;
