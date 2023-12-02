import React from 'react';
import DisplayVenueDetails from "../../components/DisplayVenueDetails";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import VenueCalendar from '../../components/Booking/VenueCalendar';

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
        <VenueCalendar />
      </div>
    </HelmetProvider>
  );
}

export default VenueDetails;
