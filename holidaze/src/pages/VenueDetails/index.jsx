import React from 'react';
import DisplayVenueDetails from "../../components/DisplayVenueDetails";
import { Helmet, HelmetProvider } from 'react-helmet-async';

function VenueDetails() {
  return (
    <HelmetProvider>
      <div>
        <div className='application'>
          <Helmet>
            <link rel="icon" href="icons/loading.png" />
          </Helmet>
        </div>
        <DisplayVenueDetails />
      </div>
    </HelmetProvider>
  );
}

export default VenueDetails;
