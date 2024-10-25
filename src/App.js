import React from 'react';
import HomePage from './pages/HomePage';
import './App.css';  // Import the CSS file for styling

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <h1>Hop with Waabooz</h1>
        <p>Learn a new Ojibwe word every day with your guide, Waabooz!</p>
      </header>
      <HomePage />  {/* Main content */}
    </div>
  );
}

export default App;
