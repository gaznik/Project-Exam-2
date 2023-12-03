import React from 'react';
import Venues from '../../components/Venues';
import SearchForm from '../../components/Search/SearchForm';
import SearchResults from '../../components/Search/SearchResults';
import '../../styles/HomePage.css';

function HomePage() {
  return (
    <div>
      <h2>Welcome to Holidaze</h2>
      <SearchForm className="search-bar" />
      <SearchResults className="search-results" />
      <Venues className="venue-list" />
    </div>
  );
}

export default HomePage;
