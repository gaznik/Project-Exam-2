import React from 'react';
import { Route, Routes } from 'react-router-dom';

import HomePage from '../../pages/HomePage';
import ProfilePage from '../../pages/ProfilePage';
import VenueDetails from '../../pages/VenueDetails';
import CreateVenue from '../../pages/CreateVenue';
import UpdateVenue from '../../pages/UpdateVenue';


function AppRouter() {
 return (
  
      <Routes>
         <Route path="/" element={<HomePage />} /> 
         <Route path="/profile" element={<ProfilePage />} /> 
         <Route path="/venues/:id" element={<VenueDetails />} />
         <Route path="/createVenue" element={<CreateVenue />} />
         <Route path="/updateVenue/:id" element={<UpdateVenue />} />
      </Routes> 
   
 );
}


export default AppRouter;