import React from 'react';
import Router from './routes';
import './App.css';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Router />
    </div>
  );
}

export default App;
