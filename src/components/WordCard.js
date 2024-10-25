import React from 'react';

const WordCard = ({ word }) => {
  return (
    <div>
      <h1>{word.wordOjibwe}</h1>
      <p>Translation: {word.translation}</p>
      <p>Pronunciation: {word.pronunciation}</p>
    </div>
  );
};

export default WordCard;
