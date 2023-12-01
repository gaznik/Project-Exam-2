import { useState, useEffect } from 'react';
import { fetchAllVenues } from '../services/handlers/searchHandler';

function useSearch() {
  const [searchQuery, setSearchQuery] = useState('');
  const [allVenues, setAllVenues] = useState([]);
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    async function handleSearch() {
      const venues = await fetchAllVenues();
      setAllVenues(venues);
    }

    handleSearch();
  }, []);

  useEffect(() => {
    const filteredSearch = allVenues.filter((venue) =>
      venue.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResult(filteredSearch);
  }, [searchQuery, allVenues]);

  const handleInputChange = (value) => {
    setSearchQuery(value);
  };

  return { searchQuery, searchResult, handleInputChange };
}

export default useSearch;
