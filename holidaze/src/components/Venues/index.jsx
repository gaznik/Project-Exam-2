import React from 'react';
import { Link } from 'react-router-dom';
import { useFetchVenues } from '../../hooks/useVenueData';
import { ListGroup, ListGroupItem, Button } from 'react-bootstrap';

function Venues() {
  const { venues, loading, currentPage, nextPage, prevPage } = useFetchVenues();
  const fallbackImage = 'https://www.assistsheffield.org.uk/sites/default/files/styles/large/public/field/image/house_icon.png?itok=-Fbg54Pa';

  return (
    <div>
      <h1>Venues</h1>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <ListGroup>
            {venues.map((venue) => (
              <ListGroupItem key={venue.id}>
                <Link to={`/venues/${venue.id}`}>
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <h5>{venue.name}</h5>
                      <p>{venue.location.address}, {venue.location.city}, {venue.location.country}</p>
                    </div>
                    {venue.media && (
                      <img
                        src={venue.media}
                        alt={`Thumbnail for ${venue.name}`}
                        onError={(e) => {
                          e.target.src = fallbackImage;
                        }}
                        className="img-thumbnail"
                        style={{ maxWidth: '100px', maxHeight: '100px' }}
                      />
                    )}
                    {!venue.media && (
                      <img
                        src={fallbackImage}
                        alt={`Fallback Thumbnail for ${venue.name}`}
                        className="img-thumbnail"
                        style={{ maxWidth: '100px', maxHeight: '100px' }}
                      />
                    )}
                  </div>
                </Link>
              </ListGroupItem>
            ))}
          </ListGroup>
          <div className="mt-3">
            <Button className="native-button" onClick={prevPage} disabled={currentPage === 1}>
              Previous
            </Button>
            <Button onClick={nextPage} className="ms-2 native-button">
              Next
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Venues;
