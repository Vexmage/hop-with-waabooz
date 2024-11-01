import React from 'react';
import HomePage from './pages/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';  // Bootstrap import
import './App.css';  // Custom styles for the app

function App() {
  return (
    <div className="App">
      <header className="app-header text-center p-4">
        <h1>Hop with Waabooz</h1>
        <p>Your daily guide to learning Ojibwe with Waabooz the Rabbit!</p>
      </header>
      <HomePage />
    </div>
  );
}

export default App;
