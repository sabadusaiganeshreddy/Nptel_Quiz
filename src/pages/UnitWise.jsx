import React, { useState } from "react";
import { Container, Form, Button, Card, Row, Col, Badge } from "react-bootstrap";
import { 
  ArrowLeft, 
  Play, 
  FileText, 
  Calendar,
  BookOpen
} from 'react-feather';

// Course-wise imports
import cloudComputing from "../data/cloudComputing";
import computerNetworks from "../data/computerNetworks";
import dataAnalytics from "../data/dataAnalytics";
import affectiveComputing from "../data/affectiveComputing";

// Dynamic map for course-wise access
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

const UnitWise = ({ onStartQuiz, onBackToHome, selectedCourse }) => {
  const questionsData = allCourses[selectedCourse];
  const [selectedUnit, setSelectedUnit] = useState("");
  const [selectedYears, setSelectedYears] = useState([]);
  
  const courseColor = courseColors[selectedCourse] || "primary";
  const courseTitle = courseTitles[selectedCourse] || "Selected Course";

  const allYears = Object.keys(questionsData);
  const allUnits = Array.from({ length: 12 }, (_, i) => `${i + 1}`); // Units 1 to 12

  // Calculate available questions for selected unit and years
  const getQuestionCount = () => {
    if (!selectedUnit || selectedYears.length === 0) return 0;
    
    let count = 0;
    selectedYears.forEach(year => {
      const unitQuestions = questionsData[year]?.[selectedUnit] || [];
      count += unitQuestions.length;
    });
    return count;
  };

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
    <Container className="py-4">
      <Card className="shadow-sm border-0 mb-4">
        <Card.Header className={`bg-${courseColor} bg-opacity-10 py-3`}>
          <div className="d-flex align-items-center">
            <BookOpen size={20} className={`text-${courseColor} me-2`} />
            <h4 className="mb-0">{courseTitle} - Unit-wise Practice</h4>
          </div>
        </Card.Header>
        
        <Card.Body className="p-4">
          <Row>
            <Col md={6} className="mb-4 mb-md-0">
              <div className="mb-4">
                <div className="d-flex align-items-center mb-2">
                  <FileText size={18} className={`text-${courseColor} me-2`} />
                  <h5 className="mb-0">Select Unit</h5>
                </div>
                <Form.Select
                  className="py-2"
                  value={selectedUnit}
                  onChange={(e) => setSelectedUnit(e.target.value)}
                >
                  <option value="">-- Select Unit --</option>
                  {allUnits.map((unit) => (
                    <option key={unit} value={unit}>
                      Unit {unit}
                    </option>
                  ))}
                </Form.Select>
                
                {selectedUnit && (
                  <p className="text-muted small mt-2">
                    Selected: <Badge bg={courseColor}>Unit {selectedUnit}</Badge>
                  </p>
                )}
              </div>
              
              <div>
                <div className="d-flex align-items-center mb-2">
                  <Calendar size={18} className={`text-${courseColor} me-2`} />
                  <h5 className="mb-0">Select Years</h5>
                </div>
                <div className="border rounded p-3" style={{maxHeight: "200px", overflowY: "auto"}}>
                  <Row>
                    {allYears.map((year) => (
                      <Col xs={6} key={year}>
                        <Form.Check
                          type="checkbox"
                          id={`year-${year}`}
                          label={year}
                          value={year}
                          onChange={handleYearChange}
                          className="mb-2"
                        />
                      </Col>
                    ))}
                  </Row>
                </div>
                
                {selectedYears.length > 0 && (
                  <p className="text-muted small mt-2">
                    Selected: {selectedYears.map(year => (
                      <Badge bg={courseColor} className="me-1" key={year}>{year}</Badge>
                    ))}
                  </p>
                )}
              </div>
            </Col>
            
            <Col md={6}>
              <Card className={`bg-light border-0 h-100`}>
                <Card.Body className="d-flex flex-column justify-content-center align-items-center text-center p-4">
                  <div className={`rounded-circle bg-${courseColor} bg-opacity-10 p-3 mb-3`}>
                    <BookOpen size={32} className={`text-${courseColor}`} />
                  </div>
                  
                  <h5>Quiz Summary</h5>
                  <p className="mb-2">Course: <strong>{courseTitle}</strong></p>
                  <p className="mb-2">Mode: <strong>Unit-wise Practice</strong></p>
                  
                  {selectedUnit && (
                    <p className="mb-2">Unit: <strong>{selectedUnit}</strong></p>
                  )}
                  
                  {selectedYears.length > 0 && (
                    <p className="mb-2">Years: <strong>{selectedYears.join(', ')}</strong></p>
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
              disabled={!selectedUnit || selectedYears.length === 0 || getQuestionCount() === 0}
            >
              <Play size={18} className="me-1" /> Start Quiz
            </Button>
          </div>
        </Card.Footer>
      </Card>
    </Container>
  );
};

export default UnitWise;