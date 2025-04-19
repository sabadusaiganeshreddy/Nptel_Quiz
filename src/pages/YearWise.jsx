import React, { useState } from "react";
import { Container, Form, Button, Card } from "react-bootstrap";

// Import all course-wise question data
import cloudComputing from "../data/cloudComputing";
import computerNetworks from "../data/computerNetworks";
import dataAnalytics from "../data/dataAnalytics";
import affectiveComputing from "../data/affectiveComputing";


// Mapping course keys to their question sets
const allCourses = {
  "cloud-computing": cloudComputing,
  "computer-networks": computerNetworks,
  "data-analytics": dataAnalytics,
  "affective-computing": affectiveComputing,
};

const YearWise = ({ onStartQuiz, onBackToHome, selectedCourse }) => {
  const questionsData = allCourses[selectedCourse];
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
      selectedCourse,
      mode: "year-wise",
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

        <div className="d-flex justify-content-between align-items-center mt-4 flex-wrap gap-2">
          <Button variant="outline-secondary" onClick={onBackToHome}>
            🔙 Back to Course
          </Button>
          <Button variant="primary" onClick={handleStart}>
            🚀 Start Quiz
          </Button>
        </div>
      </Card>
    </Container>
  );
};

export default YearWise;
