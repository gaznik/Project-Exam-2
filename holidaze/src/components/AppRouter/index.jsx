import React from 'react';
import { Route, Routes } from 'react-router-dom';

import HomePage from '../../pages/HomePage';
import ProfilePage from '../../pages/ProfilePage';
import VenueDetails from '../../pages/VenueDetails';
import CreateVenue from '../../pages/CreateVenue';


function AppRouter() {
 return (
  
      <Routes>
         <Route path="/" element={<HomePage />} /> 
         <Route path="/profile" element={<ProfilePage />} /> 
         <Route path="/venues/:id" element={<VenueDetails />} />
         <Route path="/create-venue" element={CreateVenue} />
      </Routes> 
   
 );
}


export default AppRouter;