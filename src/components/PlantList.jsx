import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
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
    } catch (error) {
      console.error('Error fetching plant data:', error);
    }
  };

  return (
    <Container>
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
      <Divider />
      <Box>
        <List>
          {plants.map((plant) => ( 
              <ListItem key={plant.id} disablePadding>
                  <ListItemText primary={plant.scientific_name} />
              </ListItem>
          ))}
        </List>
      </Box>
    </Container>
  );
};

export default PlantList;