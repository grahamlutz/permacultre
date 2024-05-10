import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import axios from 'axios';

const PlantList = () => {
  const [location, setLocation] = useState('');
  const [plants, setPlants] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(`/api/plants/${location}`);
      setPlants(response.data[0].data);
      console.log(response.data[0].data);
    } catch (error) {
      console.error('Error fetching plant data:', error);
    }
  };

  return (
    <div>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        
        <TextField id="standard-basic" label="Zip Code" variant="standard" />
        <Button onClick={handleSubmit}>
            Submit
        </Button>
      </Box>
      
      <ul>
        {plants.map((plant) => ( 
          <li key={plant.id}>{plant.scientific_name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PlantList;