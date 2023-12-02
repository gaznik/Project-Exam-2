import React from 'react';
import DisplayVenueDetails from "../../components/DisplayVenueDetails";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import DisplayBooking from '../../components/Booking/DisplayBooking';

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
        <DisplayBooking />
      </div>
    </HelmetProvider>
  );
}

export default VenueDetails;
