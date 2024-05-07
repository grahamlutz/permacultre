import React, { useState } from 'react';
import axios from 'axios';

const PlantList = () => {
  const [location, setLocation] = useState('');
  const [plants, setPlants] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(`/api/plants/${location}`);
      setPlants(response.data);
    } catch (error) {
      console.error('Error fetching plant data:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter your location"
        />
        <button type="submit">Get Plants</button>
      </form>

      <ul>
        {plants.map((plant) => (
          <li key={plant.id}>{plant.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PlantList;