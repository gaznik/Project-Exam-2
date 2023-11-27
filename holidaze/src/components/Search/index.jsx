import React from 'react';

function Search({ searchQuery, handleSearch }) {
  return (
    <input
      type="text"
      placeholder="Search venues..."
      value={searchQuery}
      onChange={handleSearch}
    />
  );
}

export default Search;
