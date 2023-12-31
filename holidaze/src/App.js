import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import Layout from './components/Layout';
import AppRouter from './components/AppRouter';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
<Router>
<Layout>
<AppRouter />
</Layout>
</Router>
    </div>
  );
}

export default App;
