import React, { useState } from "react";
import { Container, Form, Button, Card } from "react-bootstrap";
import questionsData from "../data/questions";

const UnitWise = ({ onStartQuiz, onBackToHome }) => {
  const [selectedUnit, setSelectedUnit] = useState("");
  const [selectedYears, setSelectedYears] = useState([]);

  const allYears = Object.keys(questionsData);
  const allUnits = Array.from({ length: 12 }, (_, i) => `${i + 1}`); // Units 1 to 12

  const handleYearChange = (e) => {
    const { value, checked } = e.target;
    setSelectedYears((prev) =>
      checked ? [...prev, value] : prev.filter((year) => year !== value)
    );
  };

  const handleStart = () => {
    if (!selectedUnit || selectedYears.length === 0) {
      alert("Please select both unit and years");
      return;
    }

    onStartQuiz({
      selectedUnit,
      selectedYears,
      mode: "unit-wise"
    });
  };

  return (
    <Container className="mt-4">
      <Card className="p-4">
        <h4>Select Unit</h4>
        <Form.Select
          className="mb-3"
          onChange={(e) => setSelectedUnit(e.target.value)}
        >
          <option value="">-- Select Unit --</option>
          {allUnits.map((unit) => (
            <option key={unit} value={unit}>
              Unit {unit}
            </option>
          ))}
        </Form.Select>

        <h5>Select Years</h5>
        {allYears.map((year) => (
          <Form.Check
            key={year}
            type="checkbox"
            label={year}
            value={year}
            onChange={handleYearChange}
          />
        ))}

        <div className="d-flex justify-content-between align-items-center mt-4">
          <Button variant="outline-secondary" onClick={onBackToHome}>
            🔙 Back to Home
          </Button>
          <Button variant="primary" onClick={handleStart}>
            Start Quiz
          </Button>
        </div>

      </Card>
    </Container>
  );
};

export default UnitWise;