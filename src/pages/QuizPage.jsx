import React, { useState, useEffect } from "react";
import { Container, Card, Button, Alert } from "react-bootstrap";
import questionsData from "../data/questions";

const QuizPage = ({ quizData, onBackToHome }) => {
  if (!quizData) {
    return (
      <Container className="text-center mt-5">
        <h4>Invalid quiz data. Please go back and try again.</h4>
        <Button className="mt-3" onClick={onBackToHome}>
          Back
        </Button>
      </Container>
    );
  }

  const {
    selectedYear,
    selectedUnits,
    selectedUnit,
    selectedYears,
    mode
  } = quizData;

  const [quizQuestions, setQuizQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [checked, setChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);

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

    setQuizQuestions(questions);
  }, [selectedYear, selectedUnits, selectedYears, selectedUnit, mode]);

  const currentQuestion = quizQuestions[currentQuestionIndex];
  const userAnswer = userAnswers[currentQuestion?.id] ?? [];

  const handleOptionClick = (optionIndex) => {
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
        <h4>No questions found for selected criteria.</h4>
        <Button className="mt-3" onClick={onBackToHome}>
          Back
        </Button>
      </Container>
    );
  }

  return (
    <Container className="mt-4">
      <Card className="p-4 d-flex flex-column justify-content-between">
        <div>
          <h5>
            Q{currentQuestionIndex + 1}: {currentQuestion.question}
          </h5>

          <div className="mt-3">
            {currentQuestion.options.map((opt, index) => (
          <Button
          key={index}
          variant={
            checked
              ? Array.isArray(currentQuestion.answer)
                ? currentQuestion.answer.includes(index)
                  ? "success"
                  : userAnswer.includes(index)
                    ? "danger"
                    : "outline-secondary"
                : currentQuestion.answer === index
                ? "success"
                : userAnswer === index
                ? "danger"
                : "outline-secondary"
              : Array.isArray(userAnswer)
              ? userAnswer.includes(index)
                ? "primary"
                : "outline-secondary"
              : userAnswer === index
              ? "primary"
              : "outline-secondary"
          }
          className="d-block mb-2 w-100 text-start"
          onClick={() => handleOptionClick(index)}
        >
          {opt}
        </Button>
        
            ))}
          </div>

          <div className="d-flex justify-content-between gap-2 mt-3"> 
            <Button variant="warning" onClick={handleCheckAnswer}>
              ✅ Check Answer
            </Button>
            <div className="d-flex gap-2">
              <Button
                variant="secondary"
                onClick={handlePrev}
                disabled={currentQuestionIndex === 0}
              >
                ⬅ Previous
              </Button>
              <Button
                onClick={handleNext}
                disabled={currentQuestionIndex === quizQuestions.length - 1}
              >
                ➡ Next
              </Button>
              <Button
                variant="outline-secondary"
                onClick={onBackToHome}
              >
                🔙 Back to Home
              </Button>
            </div>
          </div>

          {checked && (
            <Alert className="mt-3" variant={isCorrect ? "success" : "danger"}>
              {isCorrect ? "✅ Correct!" : "❌ Incorrect."}
            </Alert>
          )}
        </div>
      </Card>
    </Container>
  );
};

export default QuizPage;