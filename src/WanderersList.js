import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './WanderersList.css'; // Import CSS file

function WanderersList() {
    const [wanderers, setWanderers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('https://localhost:7198/api/Wanderers/120/team-members/sorted-by-distance')
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
                {wanderers.map((item, index) => {
                    if (!item || !item.wanderer) {
                        return <div className="card" key={index}>Invalid wanderer data</div>;
                    }

                    const { wanderer, distance } = item;
                    return (
                        <div className="card" key={wanderer.id}>
                            <h2>{wanderer.name}</h2>
                            <p>Email: {wanderer.email}</p>
                            <p>Distance: {distance.toFixed(2)} km</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default WanderersList;
