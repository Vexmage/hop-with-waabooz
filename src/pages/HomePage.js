// src/pages/HomePage.js
import React, { useState, useEffect } from 'react';
import { fetchWordOfTheDay } from '../services/wordService';  // Import service

const HomePage = () => {
  const [word, setWord] = useState(null);

  useEffect(() => {
    const fetchWord = async () => {
      const today = new Date().toISOString().split('T')[0]; // e.g., "2024-10-24"
      try {
        const wordData = await fetchWordOfTheDay(today);
        console.log("Fetched word data:", wordData);
        setWord(wordData);
      } catch (error) {
        console.error("Error fetching word of the day:", error);
      }
    };

    fetchWord();
  }, []);

  return (
    <div>
      {word ? (
        <div>
          <h1>{word.wordOjibwe}</h1>
          <p>Translation: {word.translation}</p>
          <p>Pronunciation: {word.pronunciation}</p>
        </div>
      ) : (
        <p>Loading word of the day...</p>
      )}
    </div>
  );
};

export default HomePage;
