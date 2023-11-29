import React, { useState, useEffect } from 'react';
import DisplaySearchResults from '../SearchResults';
import { API_BASE_URL, VENUES_ENDPOINT } from '../../utils/api/constants';

function Search() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResult, setSearchResult] = useState([]);

  const venueUrl = API_BASE_URL + VENUES_ENDPOINT; 

  async function handleSearch() {
    try {
      const response = await fetch(venueUrl);
      const result = await response.json();
      handleKeyUp(result);
    } catch (error) {
      console.log(error);
    }
  }

  function handleKeyUp(venues) {
    const filteredSearch = venues.filter((venue) =>
      venue.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResult(filteredSearch);
  }

  useEffect(() => {
    handleSearch();
  }, [searchQuery]);

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
