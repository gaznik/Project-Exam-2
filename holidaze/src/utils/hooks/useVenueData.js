import { useState, useEffect } from 'react';
import { fetchVenuesList } from '../../components/Venues/venuesUtil'; 

export function useFetchVenues() {
  const [venues, setVenues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const venuesPerPage = 10;

  useEffect(() => {
    async function fetchVenues() {
      try {
        const fetchedVenues = await fetchVenuesList(venuesPerPage, (currentPage - 1) * venuesPerPage);
        setVenues(fetchedVenues);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching venues:', error);
        setLoading(false);
      }
    }

    fetchVenues();
  }, [currentPage, venuesPerPage]);

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return {
    venues,
    loading,
    currentPage,
    nextPage,
    prevPage,
  };
}
