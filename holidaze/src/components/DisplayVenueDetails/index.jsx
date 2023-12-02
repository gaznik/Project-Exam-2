import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchVenueDetails } from '../../services/handlers/venueDetailHandler'; 

function DisplayVenueDetails() {
  const { id } = useParams();
  const [venueDetails, setVenueDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchDetails() {
      try {
        const response = await fetchVenueDetails(id);
        setVenueDetails(response);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching venue details:', error);
        setLoading(false);
      }
    }

    fetchDetails();
  }, [id]);

  return (
    <div>
      <h1>The Venue Details</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {venueDetails ? (
            <div>
              <h2>{venueDetails.name}</h2>
              <p>Description: {venueDetails.description}</p>
              <p>Price: {venueDetails.price}</p>
              {venueDetails.meta && (
                <div>
                  <div className="flex justify-between text-sm">
                    <p className="mr-2">Wifi:</p>
                    <p>{venueDetails.meta.wifi ? 'yes' : 'no'}</p>
                  </div>
                  <div className="flex justify-between text-sm">
                    <p className="mr-2">Breakfast:</p>
                    <p>{venueDetails.meta.breakfast ? 'yes' : 'no'}</p>
                  </div>
                  <div className="flex justify-between text-sm">
                    <p className="mr-2">Parking:</p>
                    <p>{venueDetails.meta.parking ? 'yes' : 'no'}</p>
                  </div>
                  <div className="flex justify-between text-sm">
                    <p className="mr-2">Pets:</p>
                    <p>{venueDetails.meta.pets ? 'yes' : 'no'}</p>
                  </div>
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
      )}
    </div>
  );
}

export default DisplayVenueDetails;
