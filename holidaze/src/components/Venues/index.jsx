import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
        <div>
          <ul>
            {venues.map((venue) => (
              <li key={venue.id}>
                <Link to={`/venues/${venue.id}`}>
                  {venue.name} - {venue.location.address}, {venue.location.city}, {venue.location.country}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Venues;
