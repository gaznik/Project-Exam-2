import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { makeApiRequest } from '../../utils/api/apiRequest';
import Search from '../Search'; 

function Venues() {
  const [venues, setVenues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredVenues, setFilteredVenues] = useState([]);

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

  useEffect(() => {
    const filtered = venues.filter((venue) =>
      venue.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredVenues(filtered);
  }, [searchQuery, venues]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      <h1>Venues</h1>
      <Search searchQuery={searchQuery} handleSearch={handleSearch} />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <ul>
            {filteredVenues.map((venue) => (
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
