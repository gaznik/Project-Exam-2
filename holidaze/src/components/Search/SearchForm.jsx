import React from 'react';
import SearchResults from './SearchResults';
import useSearch from '../../hooks/useSearch';

function SearchForm() {
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
      {searchQuery ? <SearchResults venues={searchResult} /> : null}
    </div>
  );
}

export default SearchForm;
