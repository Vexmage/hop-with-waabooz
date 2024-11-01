// src/pages/HomePage.js
import React, { useState, useEffect } from 'react';
import { fetchWordOfTheDay } from '../services/wordService';
import { Card, Container, Row, Col, Spinner } from 'react-bootstrap';
import '../styles/HomePage.css';

const HomePage = () => {
  const [word, setWord] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWord = async () => {
      try {
        const wordData = await fetchWordOfTheDay();
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
    <Container className="home-page mt-5">
      <Row className="justify-content-center">
        {/* Daily Word Card */}
        <Col md={8} lg={6}>
          {loading ? (
            <div className="text-center">
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </div>
          ) : word ? (
            <Card className="mb-4 text-center">
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

        {/* Rabbit Guide Placeholder */}
        <Col md={8} lg={6} className="d-flex justify-content-center">
          <div className="rabbit-placeholder">
            {/* Blue box as placeholder for Rabbit Guide */}
            <p className="text-white">Waabooz will guide you here!</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
