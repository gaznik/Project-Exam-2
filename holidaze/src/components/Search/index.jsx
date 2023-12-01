import React from 'react';
import DisplaySearchResults from '../SearchResults';
import useSearch from '../../hooks/useSearch';

function Search() {
  const { searchQuery, searchResult, handleInputChange } = useSearch();

  return (
    <div>
      <form>
        <label htmlFor='search'>Search for venues:</label>
        <input
          type='search'
          id='search'
          name='search'
          placeholder='Search for venues'
          onChange={(e) => handleInputChange(e.target.value)}
          value={searchQuery}
        />
      </form>
      {searchQuery ? <DisplaySearchResults venues={searchResult} /> : null}
    </div>
  );
}

export default Search;
