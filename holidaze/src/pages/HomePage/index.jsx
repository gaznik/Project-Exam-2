import React from 'react';
import Venues from '../../components/Venues';
import DisplaySearchResults from '../../components/SearchResults';
import Search from '../../components/Search';

function HomePage() {
  return (
    <div>
      <h2>Welcome to Holidaze</h2>
      <Search />
      <DisplaySearchResults />
      <Venues />
    </div>
  );
}

export default HomePage;
