import React, { useState, useEffect } from "react";
import { Container, Card, Button, Alert } from "react-bootstrap";
import questionsData from "../data/questions";

const QuizPage = ({ quizData, onBackToHome }) => {
  if (!quizData || !quizData.selectedYear || !quizData.selectedUnits) {
    return (
      <Container className="text-center mt-5">
        <h4>Invalid quiz data. Please go back and try again.</h4>
        <Button className="mt-3" onClick={onBackToHome}>
          Back
        </Button>
      </Container>
    );
  }

  const { selectedYear, selectedUnits } = quizData;
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [checked, setChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    const questions = [];
    selectedUnits.forEach((unit) => {
      const unitQuestions = questionsData[selectedYear]?.[unit] || [];
      questions.push(...unitQuestions);
    });
    setQuizQuestions(questions);
  }, [selectedYear, selectedUnits]);

  const currentQuestion = quizQuestions[currentQuestionIndex];
  const userAnswer = userAnswers[currentQuestion?.id] ?? [];

  const handleOptionClick = (optionIndex) => {
    const qid = currentQuestion.id;
    const correctAnswer = currentQuestion.answer;

    // If MSQ, allow multi-select
    if (Array.isArray(correctAnswer)) {
      const updated = userAnswer.includes(optionIndex)
        ? userAnswer.filter((i) => i !== optionIndex)
        : [...userAnswer, optionIndex];
      setUserAnswers({ ...userAnswers, [qid]: updated });
    } else {
      setUserAnswers({ ...userAnswers, [qid]: optionIndex });
    }

    // Reset checked state when changing selection
    setChecked(false);
    setIsCorrect(null);
  };

  const handleCheckAnswer = () => {
    const correctAnswer = currentQuestion.answer;
    const answer = userAnswers[currentQuestion.id];

    if (answer === undefined || (Array.isArray(correctAnswer) && answer.length === 0)) {
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
        <h4>No questions found for selected year and units.</h4>
        <Button className="mt-3" onClick={onBackToHome}>Back</Button>
      </Container>
    );
  }

  return (
    <Container className="mt-4">
      <Card className="p-4">
        <h5>Q{currentQuestionIndex + 1}: {currentQuestion.question}</h5>

        <div className="mt-3">
          {currentQuestion.options.map((opt, index) => {
            const isSelected = Array.isArray(userAnswer)
              ? userAnswer.includes(index)
              : userAnswer === index;

            const isCorrectOption = Array.isArray(currentQuestion.answer)
              ? currentQuestion.answer.includes(index)
              : currentQuestion.answer === index;

            let variant = "outline-secondary";
            if (checked) {
              if (isCorrectOption) variant = "success";
              else if (isSelected && !isCorrectOption) variant = "danger";
            } else {
              if (isSelected) variant = "primary";
            }

            return (
              <Button
                key={index}
                variant={variant}
                className="d-block mb-2 w-100 text-start"
                onClick={() => handleOptionClick(index)}
              >
                {opt}
              </Button>
            );
          })}
        </div>

        <div className="d-flex gap-2 mt-3 flex-wrap">
          <Button variant="warning" onClick={handleCheckAnswer}>
            ✅ Check Answer
          </Button>
          <Button variant="secondary" onClick={handlePrev} disabled={currentQuestionIndex === 0}>
            ⬅ Previous
          </Button>
          <Button onClick={handleNext} disabled={currentQuestionIndex === quizQuestions.length - 1}>
            ➡ Next
          </Button>
        </div>

        {checked && (
          <Alert className="mt-3" variant={isCorrect ? "success" : "danger"}>
            {isCorrect ? "✅ Correct!" : "❌ Incorrect."}
          </Alert>
        )}

        <div className="d-flex justify-content-end mt-3"> {/* Added this div */}
          <Button
            variant="outline-secondary"
            className="mb-3"
            onClick={onBackToHome}
          >
            🔙 Back to Home
          </Button>
        </div>

      </Card>
    </Container>
  );
};

export default QuizPage;