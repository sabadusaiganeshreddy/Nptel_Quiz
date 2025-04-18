// src/pages/HomePage.jsx

import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const HomePage = ({ onModeSelect }) => {
  return (
    <Container className="text-center mt-5 d-flex flex-column justify-content-between" style={{ minHeight: "90vh" }}>
      <div>
        <h1 className="mb-4">NPTEL Quiz App</h1>
        <h2 className="mb-4">Cloud Computing</h2>
        <p className="mb-4">Select how you want to practice:</p>
        <Row className="justify-content-center">
          <Col xs={12} md={6} lg={4} className="d-flex flex-column gap-3">
            <Button
              variant="primary"
              size="lg"
              onClick={() => onModeSelect('year-wise')}
            >
              📅 Year-wise Quiz
            </Button>

            <Button
              variant="success"
              size="lg"
              onClick={() => onModeSelect('unit-wise')}
            >
              📚 Unit-wise Quiz
            </Button>
          </Col>
        </Row>
      </div>

      {/* ❤️ Footer */}
      <footer className="mt-5 text-muted" style={{ fontSize: "0.9rem" }}>
        Made with ❤️ by <strong>Sai Ganesh Reddy</strong>
      </footer>
    </Container>
  );
};

export default HomePage;
