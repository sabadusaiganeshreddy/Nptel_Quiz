import React, { useState } from "react";
import { Container, Form, Button, Card } from "react-bootstrap";

// 🧠 All course-wise imports
import cloudComputing from "../data/cloudComputing";
import computerNetworks from "../data/computerNetworks";
import dataAnalytics from "../data/dataAnalytics";
import affectiveComputing from "../data/affectiveComputing";


// 📦 Dynamic map for course-wise access
const allCourses = {
  "cloud-computing": cloudComputing,
  "computer-networks": computerNetworks,
  "data-analytics": dataAnalytics,
  "affective-computing": affectiveComputing,
};

const UnitWise = ({ onStartQuiz, onBackToHome, selectedCourse }) => {
  const questionsData = allCourses[selectedCourse];
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
      selectedCourse,
      mode: "unit-wise",
    });
  };

  return (
    <Container className="mt-4">
      <Card className="p-4">
        <h4 className="mb-3">Select Unit</h4>
        <Form.Select
          className="mb-4"
          onChange={(e) => setSelectedUnit(e.target.value)}
        >
          <option value="">-- Select Unit --</option>
          {allUnits.map((unit) => (
            <option key={unit} value={unit}>
              Unit {unit}
            </option>
          ))}
        </Form.Select>

        <h5 className="mb-2">Select Years</h5>
        {allYears.map((year) => (
          <Form.Check
            key={year}
            type="checkbox"
            label={year}
            value={year}
            onChange={handleYearChange}
          />
        ))}

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

export default UnitWise;
