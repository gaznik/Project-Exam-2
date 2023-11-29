import { useState, useEffect } from 'react';
import { makeApiRequest } from '../api/apiRequest';

export function useFetchVenues() {
  const [venues, setVenues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const venuesPerPage = 10;

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

  return {
    venues,
    loading,
    currentPage,
    setCurrentPage,
    nextPage,
    prevPage,
  };
}
