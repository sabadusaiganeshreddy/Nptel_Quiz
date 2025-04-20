import React, { useState } from "react";
import { Container, Form, Button, Card, Row, Col, Badge } from "react-bootstrap";
import { 
  ArrowLeft, 
  Play, 
  Calendar, 
  Layers,
  BookOpen
} from 'react-feather';

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

// Course theme colors
const courseColors = {
  "cloud-computing": "primary",
  "computer-networks": "info",
  "data-analytics": "success",
  "affective-computing": "secondary"
};

// Course titles
const courseTitles = {
  "cloud-computing": "Cloud Computing",
  "computer-networks": "Computer Networks & Protocols",
  "data-analytics": "Data Analytics with Python",
  "affective-computing": "Affective Computing"
};

const YearWise = ({ onStartQuiz, onBackToHome, selectedCourse }) => {
  const questionsData = allCourses[selectedCourse];
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedUnits, setSelectedUnits] = useState([]);
  
  const courseColor = courseColors[selectedCourse] || "primary";
  const courseTitle = courseTitles[selectedCourse] || "Selected Course";

  const years = Object.keys(questionsData);

  // Calculate available questions for selected year and units
  const getQuestionCount = () => {
    if (!selectedYear || selectedUnits.length === 0) return 0;
    
    let count = 0;
    selectedUnits.forEach(unit => {
      const unitQuestions = questionsData[selectedYear]?.[unit] || [];
      count += unitQuestions.length;
    });
    return count;
  };

  const handleUnitChange = (e) => {
    const { value, checked } = e.target;
    setSelectedUnits((prev) =>
      checked ? [...prev, value] : prev.filter((unit) => unit !== value)
    );
  };

  const handleSelectAllUnits = () => {
    if (!selectedYear) return;
    setSelectedUnits(Object.keys(questionsData[selectedYear] || {}));
  };

  const handleClearUnits = () => {
    setSelectedUnits([]);
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
    <Container className="py-4">
      <Card className="shadow-sm border-0 mb-4">
        <Card.Header className={`bg-${courseColor} bg-opacity-10 py-3`}>
          <div className="d-flex align-items-center">
            <BookOpen size={20} className={`text-${courseColor} me-2`} />
            <h4 className="mb-0">{courseTitle} - Year-wise Practice</h4>
          </div>
        </Card.Header>
        
        <Card.Body className="p-4">
          <Row>
            <Col md={6} className="mb-4 mb-md-0">
              <div className="mb-4">
                <div className="d-flex align-items-center mb-2">
                  <Calendar size={18} className={`text-${courseColor} me-2`} />
                  <h5 className="mb-0">Select Year</h5>
                </div>
                <Form.Select
                  className="py-2"
                  value={selectedYear}
                  onChange={(e) => {
                    setSelectedYear(e.target.value);
                    setSelectedUnits([]);
                  }}
                >
                  <option value="">-- Select Year --</option>
                  {years.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </Form.Select>
                
                {selectedYear && (
                  <p className="text-muted small mt-2">
                    Selected: <Badge bg={courseColor}>{selectedYear}</Badge>
                  </p>
                )}
              </div>
              
              {selectedYear && (
                <div>
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <div className="d-flex align-items-center">
                      <Layers size={18} className={`text-${courseColor} me-2`} />
                      <h5 className="mb-0">Select Units</h5>
                    </div>
                    <div>
                      <Button 
                        variant="link" 
                        size="sm" 
                        className="p-0 me-2" 
                        onClick={handleSelectAllUnits}
                      >
                        Select All
                      </Button>
                      <Button 
                        variant="link" 
                        size="sm" 
                        className="p-0 text-secondary" 
                        onClick={handleClearUnits}
                      >
                        Clear
                      </Button>
                    </div>
                  </div>
                  <div className="border rounded p-3" style={{maxHeight: "200px", overflowY: "auto"}}>
                    <Row>
                      {Object.keys(questionsData[selectedYear] || {}).map((unit) => (
                        <Col xs={6} key={unit}>
                          <Form.Check
                            type="checkbox"
                            id={`unit-${unit}`}
                            label={`Unit ${unit}`}
                            value={unit}
                            checked={selectedUnits.includes(unit)}
                            onChange={handleUnitChange}
                            className="mb-2"
                          />
                        </Col>
                      ))}
                    </Row>
                  </div>
                  
                  {selectedUnits.length > 0 && (
                    <p className="text-muted small mt-2">
                      Selected: {selectedUnits.sort((a, b) => a - b).map(unit => (
                        <Badge bg={courseColor} className="me-1" key={unit}>Unit {unit}</Badge>
                      ))}
                    </p>
                  )}
                </div>
              )}
            </Col>
            
            <Col md={6}>
              <Card className={`bg-light border-0 h-100`}>
                <Card.Body className="d-flex flex-column justify-content-center align-items-center text-center p-4">
                  <div className={`rounded-circle bg-${courseColor} bg-opacity-10 p-3 mb-3`}>
                    <Calendar size={32} className={`text-${courseColor}`} />
                  </div>
                  
                  <h5>Quiz Summary</h5>
                  <p className="mb-2">Course: <strong>{courseTitle}</strong></p>
                  <p className="mb-2">Mode: <strong>Year-wise Practice</strong></p>
                  
                  {selectedYear && (
                    <p className="mb-2">Year: <strong>{selectedYear}</strong></p>
                  )}
                  
                  {selectedUnits.length > 0 && (
                    <p className="mb-2">Units: <strong>{selectedUnits.sort((a, b) => a - b).map(u => u).join(', ')}</strong></p>
                  )}
                  
                  <p className="mb-0">
                    <Badge bg={getQuestionCount() > 0 ? 'success' : 'warning'} className="fs-6 mt-2">
                      {getQuestionCount()} Questions Available
                    </Badge>
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Card.Body>
        
        <Card.Footer className="bg-white py-3">
          <div className="d-flex justify-content-between align-items-center flex-wrap gap-2">
            <Button 
              variant="outline-secondary" 
              onClick={onBackToHome}
              className="d-flex align-items-center"
            >
              <ArrowLeft size={18} className="me-1" /> Back to Course
            </Button>
            
            <Button 
              variant={courseColor} 
              onClick={handleStart}
              className="d-flex align-items-center"
              disabled={!selectedYear || selectedUnits.length === 0 || getQuestionCount() === 0}
            >
              <Play size={18} className="me-1" /> Start Quiz
            </Button>
          </div>
        </Card.Footer>
      </Card>
    </Container>
  );
};

export default YearWise;