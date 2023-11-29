import React from 'react';
import { Link } from 'react-router-dom';
import { useFetchVenues } from '../../utils/hooks/useVenueData'; 

function Venues() {
  const { venues, loading, currentPage, nextPage, prevPage } = useFetchVenues();

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