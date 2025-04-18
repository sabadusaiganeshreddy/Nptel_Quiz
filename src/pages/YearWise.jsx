// src/pages/YearWise.jsx

import React, { useState } from "react";
import { Container, Form, Button, Card } from "react-bootstrap";
import questionsData from "../data/questions";

const YearWise = ({ onStartQuiz }) => {
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedUnits, setSelectedUnits] = useState([]);

  const years = Object.keys(questionsData);

  const handleUnitChange = (e) => {
    const { value, checked } = e.target;
    setSelectedUnits((prev) =>
      checked ? [...prev, value] : prev.filter((unit) => unit !== value)
    );
  };

  const handleStart = () => {
    if (!selectedYear || selectedUnits.length === 0) {
      alert("Please select both year and units");
      return;
    }

    onStartQuiz({
      selectedYear,
      selectedUnits,
    });
  };

  return (
    <Container className="mt-4">
      <Card className="p-4">
        <h4>Select Year</h4>
        <Form.Select
          className="mb-3"
          onChange={(e) => setSelectedYear(e.target.value)}
        >
          <option value="">-- Select Year --</option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </Form.Select>

        {selectedYear && (
          <>
            <h5>Select Units</h5>
            {Object.keys(questionsData[selectedYear] || {}).map((unit) => (
              <Form.Check
                key={unit}
                type="checkbox"
                label={`Unit ${unit}`}
                value={unit}
                onChange={handleUnitChange}
              />
            ))}
          </>
        )}

        <Button className="mt-4" onClick={handleStart}>
          Start Quiz
        </Button>
      </Card>
    </Container>
  );
};

export default YearWise;
