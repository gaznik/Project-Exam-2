import React from 'react';
import { Link } from 'react-router-dom';

function DisplaySearchResults({ venues }) {
  const hasInput = venues !== null; 
  const noMatchingVenues = venues && venues.length === 0; 

  if (hasInput && noMatchingVenues) {
    return (
      <div>
        <p>No results</p>
      </div>
    );
  }

  return (
    <div>
      {venues &&
        venues.map((result) => {
          const { id, name } = result;
          return (
            <div key={id}>
              <ul>
                <Link to={`/venues/${id}`}>
                  <li>{name}</li>
                </Link>
              </ul>
            </div>
          );
        })}
    </div>
  );
}

export default DisplaySearchResults;
