import { useState, useEffect } from 'react';
import { fetchBookingsWithOwner } from '../services/handlers/fetchOwnerHandler'; 

function useVenueOwner(id) {
  const [owner, setOwner] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchOwnerDetails() {
      try {
        const { owner } = await fetchBookingsWithOwner(id);
        setOwner(owner);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching owner:', error);
        setLoading(false);
      }
    }

    fetchOwnerDetails();
  }, [id]);

  return { owner, loading };
}

export default useVenueOwner;
