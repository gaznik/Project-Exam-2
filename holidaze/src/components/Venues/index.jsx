import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { makeApiRequest } from '../../utils/api/apiRequest';


function Venues() {
  const [venues, setVenues] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const [currentPage, setCurrentPage] = useState(1);
  const [venuesPerPage] = useState(10);

  useEffect(() => {
    async function fetchVenues() {
      try {
        const response = await makeApiRequest(
          'venues',
          'GET',
          null,
          venuesPerPage,
          (currentPage - 1) * venuesPerPage,
         
        );
        setVenues(response); 
        setLoading(false);
      } catch (error) {
        console.error('Error fetching venues:', error);
        setLoading(false);
      }
    }

    fetchVenues();
  }, [currentPage, venuesPerPage]);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

 

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
          <div>
            <button onClick={prevPage} disabled={currentPage === 1}>
              Previous
            </button>
            <button onClick={nextPage}>
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Venues;
