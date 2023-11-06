import React, { useState, useEffect } from 'react';
import { makeApiRequest } from '../../utils/api/apiRequest';

function Venues() {
    const [venues, setVenues] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      async function fetchVenues() {
        try {
          const response = await makeApiRequest('venues');
  
          setVenues(response); 
          setLoading(false);
        } catch (error) {
          console.error('Error fetching venues:', error);
          setLoading(false);
        }
      }
  
      fetchVenues();
    }, []); 
  
    return (
      <div>
        <h1>Venues</h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <ul>
            {venues.map((venue) => (
              <li key={venue.id}>
              {venue.name} - {venue.location.address}, {venue.location.city}, {venue.location.country}
            </li>
            
            ))}
          </ul>
        )}
      </div>
    );
  }
  
  export default Venues;
  