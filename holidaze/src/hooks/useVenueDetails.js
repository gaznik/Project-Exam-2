import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchVenueDetails } from '../services/handlers/venueDetailsHandler';

function useVenueDetails() {
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

  return { venueDetails, loading };
}

export default useVenueDetails;
