import React, { useState, useEffect } from 'react';
import DisplaySearchResults from '../SearchResults';
import { API_BASE_URL, VENUES_ENDPOINT } from '../../utils/api/constants';

function Search() {
  const [searchQuery, setSearchQuery] = useState('');
  const [allVenues, setAllVenues] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const chunkSize = 100; 

  const venueUrl = `${API_BASE_URL}${VENUES_ENDPOINT}`;

  async function fetchAllVenues(offset, venuesSoFar = []) {
    try {
      const response = await fetch(`${venueUrl}?offset=${offset}&limit=${chunkSize}`);
      const result = await response.json();
      const updatedVenues = [...venuesSoFar, ...result];
      

      if (result.length === chunkSize) {
        return fetchAllVenues(offset + chunkSize, updatedVenues);
        
      } else {
        return updatedVenues;
      }
    } catch (error) {
      console.log(error);
      return venuesSoFar;
    }
  }

  async function handleSearch() {
    const venues = await fetchAllVenues(0);
    
    setAllVenues(venues);
  }

  function handleKeyUp() {
    const filteredSearch = allVenues.filter((venue) =>
      venue.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResult(filteredSearch);
  }

  useEffect(() => {
    handleSearch();
  
  }, []); 

  useEffect(() => {
    handleKeyUp();
    
  }, [searchQuery, allVenues]); 

  return (
    <div>
      <form>
        <label htmlFor='search'>Search for venues:</label>
        <input
          type='search'
          id='search'
          name='search'
          placeholder='Search for venues'
          onChange={(e) => setSearchQuery(e.target.value)}
          value={searchQuery}
        />
      </form>
      {searchQuery ? <DisplaySearchResults venues={searchResult} /> : null}
    </div>
  );
}

export default Search;
