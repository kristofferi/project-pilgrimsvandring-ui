import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './EventsList.css'; // Importera CSS-filen

function EventsList() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://localhost:7198/api/events')
      .then(response => {
        setEvents(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Lägg till ledande nolla
    const day = String(date.getDate()).padStart(2, '0'); // Lägg till ledande nolla
    return `${year}-${month}-${day}`;
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data: {error.message}</p>;

  return (
    <div className="Events-list">
      <h1>Events</h1>
      <div className="cards-container">
        {events.map((item) => (
          <div className="card" key={item.id}>
            <h2>{item.name}</h2>
            <p>Beskrivning: {item.description}</p>
            <p>Datum: {formatDate(item.dateTime)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventsList;