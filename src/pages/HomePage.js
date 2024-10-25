// src/pages/HomePage.js
import React, { useState, useEffect } from 'react';
import { fetchWordOfTheDay } from '../services/wordService';
import { Spinner, Card, Container, Row, Col } from 'react-bootstrap';

const HomePage = () => {
  const [word, setWord] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWord = async () => {
      const today = new Date().toISOString().split('T')[0]; // e.g., "2024-10-25"
      try {
        const wordData = await fetchWordOfTheDay(today);
        setWord(wordData);
      } catch (error) {
        console.error("Error fetching word of the day:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchWord();
  }, []);

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          {loading ? (
            <div className="text-center">
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </div>
          ) : word ? (
            <Card className="text-center">
              <Card.Body>
                <Card.Title>{word.wordOjibwe}</Card.Title>
                <Card.Text>Translation: {word.translation}</Card.Text>
                <Card.Text>Pronunciation: {word.pronunciation}</Card.Text>
              </Card.Body>
            </Card>
          ) : (
            <p>No word of the day found for today.</p>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
