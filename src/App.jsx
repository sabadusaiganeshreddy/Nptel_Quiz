import React, { useState } from "react";
import { Container, Card, Row, Col, Button } from "react-bootstrap";
import { 
  Calendar, 
  Layers, 
  ArrowLeft,
  BookOpen 
} from 'react-feather';
import CourseSelect from "./pages/CourseSelect";
import YearWise from "./pages/YearWise";
import UnitWise from "./pages/UnitWise";
import QuizPage from "./pages/QuizPage";

// Course titles
const courseTitles = {
  "cloud-computing": "Cloud Computing",
  "computer-networks": "Computer Networks & Protocols",
  "data-analytics": "Data Analytics with Python",
  "affective-computing": "Affective Computing"
};

// Course theme colors
const courseColors = {
  "cloud-computing": "primary",
  "computer-networks": "info",
  "data-analytics": "success",
  "affective-computing": "secondary"
};

function App() {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [mode, setMode] = useState(null);
  const [quizData, setQuizData] = useState(null);

  const handleCourseSelect = (course) => {
    setSelectedCourse(course);
  };

  const handleModeSelect = (selectedMode) => {
    setMode(selectedMode);
  };

  const handleStartQuiz = (data) => {
    setQuizData({
      ...data,
      selectedCourse, // include course info in quizData
    });
  };

  const handleBackToCourseSelect = () => {
    setSelectedCourse(null);
    setMode(null);
    setQuizData(null);
  };

  const courseTitle = selectedCourse ? courseTitles[selectedCourse] || selectedCourse.replace(/-/g, " ") : "";
  const courseColor = selectedCourse ? courseColors[selectedCourse] || "primary" : "primary";

  return (
    <>
      {!selectedCourse && (
        <CourseSelect onCourseSelect={handleCourseSelect} />
      )}

      {selectedCourse && !mode && (
        <Container fluid className="d-flex flex-column min-vh-100 bg-light">
          {/* Header */}
          <header className="py-3 bg-white shadow-sm">
            <Container>
              <div className="d-flex align-items-center">
                <BookOpen className="me-2 text-primary" size={24} />
                <h1 className="h4 mb-0">NPTEL Study Assistant</h1>
              </div>
            </Container>
          </header>

          {/* Main Content */}
          <Container className="flex-grow-1 py-4">
            <Card className="shadow-sm border-0 mb-4">
              <Card.Header className={`bg-${courseColor} bg-opacity-10 py-3`}>
                <div className="d-flex align-items-center">
                  <BookOpen size={20} className={`text-${courseColor} me-2`} />
                  <h4 className="mb-0">{courseTitle} - Select Mode</h4>
                </div>
              </Card.Header>
              
              <Card.Body className="p-4 text-center">
                <h5 className="mb-4">How would you like to practice?</h5>
                
                <Row className="g-4 justify-content-center">
                  <Col xs={12} md={5}>
                    <Card 
                      className="h-100 border-0 shadow-sm cursor-pointer" 
                      onClick={() => handleModeSelect("year-wise")}
                      style={{ cursor: 'pointer' }}
                    >
                      <Card.Body className="d-flex flex-column align-items-center text-center p-4">
                        <div className={`rounded-circle bg-primary bg-opacity-10 p-3 mb-3`}>
                          <Calendar size={32} className="text-primary" />
                        </div>
                        <h5>Year-Wise Practice</h5>
                        <p className="text-muted mb-0">
                          Practice questions from a specific year across multiple units
                        </p>
                      </Card.Body>
                    </Card>
                  </Col>
                  
                  <Col xs={12} md={5}>
                    <Card 
                      className="h-100 border-0 shadow-sm cursor-pointer" 
                      onClick={() => handleModeSelect("unit-wise")}
                      style={{ cursor: 'pointer' }}
                    >
                      <Card.Body className="d-flex flex-column align-items-center text-center p-4">
                        <div className={`rounded-circle bg-success bg-opacity-10 p-3 mb-3`}>
                          <Layers size={32} className="text-success" />
                        </div>
                        <h5>Unit-Wise Practice</h5>
                        <p className="text-muted mb-0">
                          Practice questions from a specific unit across multiple years
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
                    onClick={handleBackToCourseSelect}
                    className="d-flex align-items-center"
                  >
                    <ArrowLeft size={18} className="me-1" /> Back to Courses
                  </Button>
                </div>
              </Card.Footer>
            </Card>
          </Container>

          {/* Footer */}
          <footer className="py-3 bg-white border-top">
            <Container>
              <p className="text-center text-muted mb-0 small">
                Made with <span className="text-danger">❤️</span> by <strong>Sai Ganesh Reddy</strong>
              </p>
            </Container>
          </footer>
        </Container>
      )}

      {selectedCourse && mode === "year-wise" && !quizData && (
        <YearWise
          onStartQuiz={handleStartQuiz}
          onBackToHome={handleBackToCourseSelect}
          selectedCourse={selectedCourse}
        />
      )}

      {selectedCourse && mode === "unit-wise" && !quizData && (
        <UnitWise
          onStartQuiz={handleStartQuiz}
          onBackToHome={handleBackToCourseSelect}
          selectedCourse={selectedCourse}
        />
      )}

      {quizData && (
        <QuizPage
          quizData={quizData}
          onBackToHome={handleBackToCourseSelect}
        />
      )}
    </>
  );
}

export default App;