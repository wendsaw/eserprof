// App.jsx
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './components/Layout'; // Assure-toi que le chemin est correct

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
