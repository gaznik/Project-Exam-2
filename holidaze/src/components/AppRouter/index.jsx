import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout';

function AppRouter() {
  return (
    <Router>
      <Layout>
        <Switch>
          
        </Switch>
      </Layout>
    </Router>
  );
}

export default AppRouter;
