import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './WanderersList.css'; // Importera CSS-filen

function WanderersList() {
  const [wanderers, setWanderers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://localhost:7198/api/Wanderers/120/group-members/sorted-by-distance')
      .then(response => {
        setWanderers(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data: {error.message}</p>;

  return (
    <div className="wanderers-list">
      <h1>Ditt team</h1>
      <div className="cards-container">
        {wanderers.map((item) => (
          <div className="card" key={item.wanderer.id}>
            <h2>{item.wanderer.name}</h2>
            <p>Email: {item.wanderer.email}</p>
            <p>Distance: {item.distance.toFixed(2)} km</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WanderersList;