import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Layout from '../components/Layout';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import VenueDetail from '../pages/VenueDetail';
import CreateVenue from '../pages/CreateVenue';

function AppRouter() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="/venue/:id" component={VenueDetail} />
          <Route path="/create-venue" component={CreateVenue} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default AppRouter;
