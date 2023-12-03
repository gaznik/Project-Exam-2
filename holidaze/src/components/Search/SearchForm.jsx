import React from 'react';
import SearchResults from './SearchResults';
import useSearch from '../../hooks/useSearch';
import '../../styles/HomePage.css';

function SearchForm() {
  const { searchQuery, searchResult, handleInputChange } = useSearch();

  return (
    <div className="my-4"> 
      <form className="input-group search-bar">
        <label htmlFor="search" className="visually-hidden">Search for venues:</label>
        <input
          type="search"
          id="search"
          name="search"
          className="form-control"
          placeholder="Search for venues"
          onChange={(e) => handleInputChange(e.target.value)}
          value={searchQuery}
        />
      </form>
      {searchQuery && <SearchResults venues={searchResult} />} 
    </div>
  );
}

export default SearchForm;
