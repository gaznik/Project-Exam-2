import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from '../../pages/Home';
import Profile from '../../pages/Profile';
import DisplayVenueDetails from '../../pages/VenueDetails';
import CreateVenue from '../../pages/CreateVenue';


function AppRouter() {
 return (
  
      <Routes>
         <Route path="/" element={<Home />} /> 
         <Route path="/profile" element={<Profile />} /> 
         <Route path="/venues/:id" element={<DisplayVenueDetails />} />
         <Route path="/create-venue" element={CreateVenue} />
      </Routes> 
   
 );
}


export default AppRouter;