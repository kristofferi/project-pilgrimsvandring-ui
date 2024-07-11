import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import axios from 'axios';
import L from 'leaflet';

// Fixing the default icon issue with leaflet and react-leaflet
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

const MapComponent = () => {
    const [points, setPoints] = useState([]);

    useEffect(() => {
        axios.get('https://localhost:7198/api/PointsOfInterest')
            .then(response => {
                setPoints(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the points!", error);
            });
    }, []);

    return (
        <MapContainer center={[59.3257, 18.07]} zoom={12} style={{ height: '100vh', width: '100%' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            {points.map(point => (
                <Marker key={point.id} position={[point.coordinates.latitude, point.coordinates.longitude]}>
                    <Popup>
                        <strong>{point.name}</strong><br />
                        {point.description}<br />
                        <a href={point.url} target="_blank" rel="noopener noreferrer">Mer info</a>
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
};

export default MapComponent;
