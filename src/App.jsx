import React, { useState } from "react";
import HomePage from "./pages/HomePage";
import YearWise from "./pages/YearWise";
import QuizPage from "./pages/QuizPage";
import UnitWise from "./pages/UnitWise";


function App() {
  const [mode, setMode] = useState(null);
  const [quizData, setQuizData] = useState(null);

  const handleModeSelect = (selectedMode) => {
    setMode(selectedMode);
  };

  const handleStartQuiz = (data) => {
    setQuizData(data);
  };

  const handleBackToHome = () => {
    setQuizData(null);
    setMode(null);
  };

  return (
    <>
      {!mode && <HomePage onModeSelect={handleModeSelect} />}

      {mode === "year-wise" && !quizData && (
        <YearWise
          onStartQuiz={handleStartQuiz}
          onBackToHome={handleBackToHome} // ✅ passing back handler
        />
      )}
{mode === "unit-wise" && !quizData && (
  <UnitWise
    onStartQuiz={handleStartQuiz}
    onBackToHome={handleBackToHome}
  />
)}

      {quizData && (
        <QuizPage
          quizData={quizData}
          onBackToHome={handleBackToHome}
        />
      )}
    </>
  );
}

export default App;
