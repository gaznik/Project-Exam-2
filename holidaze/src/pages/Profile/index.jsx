import React from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import DisplayProfile from '../../components/Profile';

function Profile() {
  return (
    <HelmetProvider>
      <div>
        <div>
          <Helmet>
            <meta charset="utf-8" />
            <link rel="icon" href="icons/loading.png" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>{"username"} | Holidaze</title>
            <meta name="description" content="You can update your profile, see your bookings and venues." />
          </Helmet>
        </div>
        <DisplayProfile />
      </div>
    </HelmetProvider>
  );
}

export default Profile;
