import React, { useState, useEffect } from "react";
import { Container, Card, Button, Alert, ProgressBar } from "react-bootstrap";
import { 
  CheckCircle, 
  XCircle, 
  ChevronLeft, 
  ChevronRight, 
  Home,
  HelpCircle
} from 'react-feather';

// Course-wise imports
import cloudComputing from "../data/cloudComputing";
import computerNetworks from "../data/computerNetworks";
import dataAnalytics from "../data/dataAnalytics";
import affectiveComputing from "../data/affectiveComputing";

// Map for accessing by course key
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

const QuizPage = ({ quizData, onBackToHome }) => {
  if (!quizData) {
    return (
      <Container className="text-center mt-5">
        <Card className="shadow-sm border-0 p-4">
          <HelpCircle size={48} className="text-danger mx-auto mb-3" />
          <h4>Invalid quiz data. Please go back and try again.</h4>
          <Button className="mt-3 mx-auto" style={{ maxWidth: "200px" }} onClick={onBackToHome}>Back to Home</Button>
        </Card>
      </Container>
    );
  }

  const {
    selectedCourse,
    selectedYear,
    selectedUnits,
    selectedUnit,
    selectedYears,
    mode,
  } = quizData;

  const questionsData = allCourses[selectedCourse];
  const courseColor = courseColors[selectedCourse] || "primary";

  const [quizQuestions, setQuizQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [checked, setChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const questions = [];

    if (mode === "year-wise") {
      selectedUnits.forEach((unit) => {
        const unitQuestions = questionsData[selectedYear]?.[unit] || [];
        questions.push(...unitQuestions);
      });
    }

    if (mode === "unit-wise") {
      selectedYears.forEach((year) => {
        const unitQuestions = questionsData[year]?.[selectedUnit] || [];
        questions.push(...unitQuestions);
      });
    }

    // Shuffle questions for better practice
    const shuffled = [...questions].sort(() => 0.5 - Math.random());
    setQuizQuestions(shuffled);
  }, [questionsData, selectedYear, selectedUnits, selectedYears, selectedUnit, mode]);

  useEffect(() => {
    // Calculate score whenever userAnswers changes
    if (quizQuestions.length > 0) {
      let correct = 0;
      Object.keys(userAnswers).forEach(qId => {
        const question = quizQuestions.find(q => q.id === qId);
        if (question) {
          const correctAnswer = question.answer;
          const userAnswer = userAnswers[qId];
          
          if (Array.isArray(correctAnswer)) {
            if (arraysEqual(correctAnswer, userAnswer)) correct++;
          } else {
            if (userAnswer === correctAnswer) correct++;
          }
        }
      });
      setScore(correct);
    }
  }, [userAnswers, quizQuestions]);

  const currentQuestion = quizQuestions[currentQuestionIndex];
  const userAnswer = userAnswers[currentQuestion?.id] ?? [];

  const handleOptionClick = (optionIndex) => {
    if (checked) return; // Prevent changing answer after checking

    const qid = currentQuestion.id;
    const correctAnswer = currentQuestion.answer;

    if (Array.isArray(correctAnswer)) {
      const updated = userAnswer.includes(optionIndex)
        ? userAnswer.filter((i) => i !== optionIndex)
        : [...userAnswer, optionIndex];
      setUserAnswers({ ...userAnswers, [qid]: updated });
    } else {
      setUserAnswers({ ...userAnswers, [qid]: optionIndex });
    }

    setChecked(false);
    setIsCorrect(null);
  };

  const handleCheckAnswer = () => {
    const correctAnswer = currentQuestion.answer;
    const answer = userAnswers[currentQuestion.id];

    if (
      answer === undefined ||
      (Array.isArray(correctAnswer) && answer.length === 0)
    ) {
      alert("Please select an option before checking.");
      return;
    }

    const isCorrectAnswer = Array.isArray(correctAnswer)
      ? arraysEqual(correctAnswer, answer)
      : answer === correctAnswer;

    setIsCorrect(isCorrectAnswer);
    setChecked(true);
  };

  const arraysEqual = (a, b) => {
    if (!Array.isArray(a) || !Array.isArray(b)) return false;
    if (a.length !== b.length) return false;
    return [...a].sort().every((val, i) => val === [...b].sort()[i]);
  };

  const handleNext = () => {
    setCurrentQuestionIndex((prev) => prev + 1);
    setChecked(false);
    setIsCorrect(null);
  };

  const handlePrev = () => {
    setCurrentQuestionIndex((prev) => prev - 1);
    setChecked(false);
    setIsCorrect(null);
  };

  if (quizQuestions.length === 0) {
    return (
      <Container className="text-center mt-5">
        <Card className="shadow-sm border-0 p-4">
          <HelpCircle size={48} className="text-warning mx-auto mb-3" />
          <h4>No questions found for selected criteria.</h4>
          <p className="text-muted">Try selecting different units or years.</p>
          <Button className="mt-3 mx-auto" style={{ maxWidth: "200px" }} onClick={onBackToHome}>
            Back to Home
          </Button>
        </Card>
      </Container>
    );
  }

  // Calculate progress percentage
  const progress = ((currentQuestionIndex + 1) / quizQuestions.length) * 100;
  
  return (
    <Container className="py-4">
      {/* Progress section */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5 className="mb-0">
          Question {currentQuestionIndex + 1} of {quizQuestions.length}
        </h5>
        <div className="d-flex align-items-center">
          <span className="me-2">Score: {score}/{Object.keys(userAnswers).length}</span>
          <Button variant="outline-secondary" size="sm" onClick={onBackToHome}>
            <Home size={16} className="me-1" /> Home
          </Button>
        </div>
      </div>
      
      <ProgressBar 
        now={progress} 
        variant={courseColor}
        className="mb-4 shadow-sm" 
        style={{ height: "8px" }}
      />

      {/* Question card */}
      <Card className="shadow-sm border-0 mb-4">
        <Card.Header className={`bg-${courseColor} bg-opacity-10 py-3`}>
          <h5 className="mb-0">
            <strong>Q{currentQuestionIndex + 1}:</strong> {currentQuestion.question}
          </h5>
        </Card.Header>
        <Card.Body className="px-4 py-3">
          <div className="mb-3">
            {currentQuestion.options.map((opt, index) => {
              const isSelected = Array.isArray(userAnswer)
                ? userAnswer.includes(index)
                : userAnswer === index;

              const isCorrectOption = Array.isArray(currentQuestion.answer)
                ? currentQuestion.answer.includes(index)
                : currentQuestion.answer === index;

              let variant = "outline-secondary";
              let iconElement = null;

              if (checked) {
                if (isCorrectOption) {
                  variant = "success";
                  iconElement = <CheckCircle size={18} className="text-success" />;
                } else if (isSelected && !isCorrectOption) {
                  variant = "danger";
                  iconElement = <XCircle size={18} className="text-danger" />;
                }
              } else if (isSelected) {
                variant = courseColor;
              }

              return (
                <Button
                  key={index}
                  variant={variant}
                  className="d-flex align-items-center justify-content-between mb-2 w-100 text-start text-wrap py-2 px-3"
                  onClick={() => handleOptionClick(index)}
                  disabled={checked}
                >
                  <span>{opt}</span>
                  {iconElement}
                </Button>
              );
            })}
          </div>

          {checked && (
            <Alert 
              className="d-flex align-items-center mt-3" 
              variant={isCorrect ? "success" : "danger"}
            >
              {isCorrect ? (
                <>
                  <CheckCircle size={20} className="me-2" />
                  <div>
                    <strong>Correct!</strong> 
                    {currentQuestion.explanation && (
                      <p className="mb-0 mt-1">{currentQuestion.explanation}</p>
                    )}
                  </div>
                </>
              ) : (
                <>
                  <XCircle size={20} className="me-2" />
                  <div>
                    <strong>Incorrect.</strong> 
                    {currentQuestion.explanation && (
                      <p className="mb-0 mt-1">{currentQuestion.explanation}</p>
                    )}
                  </div>
                </>
              )}
            </Alert>
          )}
        </Card.Body>
        <Card.Footer className="bg-white py-3">
          <div className="d-flex flex-column flex-md-row justify-content-between gap-2">
            <Button 
              variant={checked ? "outline-secondary" : "warning"}
              className="d-flex align-items-center justify-content-center"
              onClick={handleCheckAnswer}
              disabled={checked}
            >
              <CheckCircle size={18} className="me-2" /> Check Answer
            </Button>

            <div className="d-flex gap-2">
              <Button
                variant="outline-secondary"
                className="d-flex align-items-center"
                onClick={handlePrev}
                disabled={currentQuestionIndex === 0}
              >
                <ChevronLeft size={18} className="me-1" /> Previous
              </Button>
              <Button
                variant={courseColor}
                className="d-flex align-items-center"
                onClick={handleNext}
                disabled={currentQuestionIndex === quizQuestions.length - 1}
              >
                Next <ChevronRight size={18} className="ms-1" />
              </Button>
            </div>
          </div>
        </Card.Footer>
      </Card>
    </Container>
  );
};

export default QuizPage;