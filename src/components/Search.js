import React, { useState } from 'react';
import axios from 'axios';
import { Box, Button, TextField } from '@mui/material';

const Search = () => {
  const [location, setLocation] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [amenities, setAmenities] = useState('');

  const handleSearch = async () => {
    try {
      // Make the API request to the backend search endpoint
      const response = await axios.post('/api/search', {
        location,
        propertyType,
        amenities
      });

      // Handle the API response and update the component's state or navigate to a new page
      const searchResults = response.data;
      console.log(searchResults); // Do something with the search results
    } catch (error) {
      console.error('Error searching:', error);
    }
  };

  return (
    <Box>
      <TextField
        label="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <TextField
        label="Property Type"
        value={propertyType}
        onChange={(e) => setPropertyType(e.target.value)}
      />
      <TextField
        label="Amenities"
        value={amenities}
        onChange={(e) => setAmenities(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleSearch}>
        Search
      </Button>
    </Box>
  );
};

export default Search;
