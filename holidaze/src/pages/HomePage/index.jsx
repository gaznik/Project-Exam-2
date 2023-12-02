import React from 'react';
import Venues from '../../components/Venues';
import SearchForm from '../../components/Search/SearchForm';
import SearchResults from '../../components/Search/SearchResults';

function HomePage() {
  return (
    <div>
      <h2>Welcome to Holidaze</h2>
      <SearchForm />
      <SearchResults />
      <Venues />
    </div>
  );
}

export default HomePage;
