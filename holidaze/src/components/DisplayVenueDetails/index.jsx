import React from 'react';
import { Link } from 'react-router-dom';
import useVenueDetails from '../../hooks/useVenueDetails';
import DeleteVenue from '../VenueManager/DeleteVenue';
import { useParams } from 'react-router-dom';
import useVenueOwner from '../../hooks/useVenueOwner';
import { loggedInUsername } from '../../utils/userStatus';

function DisplayVenueDetails() {
  const { id } = useParams();
  const { venueDetails, loading: venueLoading } = useVenueDetails();
  const { owner, loading: ownerLoading } = useVenueOwner(id); 
  const loading = venueLoading || ownerLoading;

  const username = loggedInUsername();
  const isOwner = owner === username;

  return (
    <div>
      {isOwner && (
        <React.Fragment>
          <DeleteVenue />
          <Link to={`/updateVenue/${id}`}>Update venue info</Link>
        </React.Fragment>
      )}

      {venueDetails ? (
        <div>
          <h2>{venueDetails.name}</h2>
          <p>Description: {venueDetails.description}</p>
          <p>Price: {venueDetails.price}</p>
          {venueDetails.meta && (
            <div>
              <p>Wifi: {venueDetails.meta.wifi ? 'yes' : 'no'}</p>
              <p>Breakfast: {venueDetails.meta.breakfast ? 'yes' : 'no'}</p>
              <p>Parking: {venueDetails.meta.parking ? 'yes' : 'no'}</p>
              <p>Pets: {venueDetails.meta.pets ? 'yes' : 'no'}</p>
            </div>
          )}
          {venueDetails.media && venueDetails.media.length > 0 && (
            <div>
              <p>Image:</p>
              <img src={venueDetails.media[0]} alt="Venue" />
            </div>
          )}
        </div>
      ) : (
        <p>No details available for this venue.</p>
      )}
    </div>
  );
}

export default DisplayVenueDetails;
