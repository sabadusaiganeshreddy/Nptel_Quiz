import React, { useState } from "react";
import CourseSelect from "./pages/CourseSelect"; // 🆕 replaces HomePage
import YearWise from "./pages/YearWise";
import UnitWise from "./pages/UnitWise";
import QuizPage from "./pages/QuizPage";

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

  return (
    <>
      {!selectedCourse && (
        <CourseSelect onCourseSelect={handleCourseSelect} />
      )}

      {selectedCourse && !mode && (
        <div className="text-center mt-5">
          <h2 className="mb-4 text-capitalize">
            {selectedCourse.replace(/-/g, " ")}
          </h2>
          <p className="mb-3">Select how you want to practice:</p>
          <button
            className="btn btn-primary me-2"
            onClick={() => handleModeSelect("year-wise")}
          >
            📅 Year-Wise
          </button>
          <button
            className="btn btn-success"
            onClick={() => handleModeSelect("unit-wise")}
          >
            📚 Unit-Wise
          </button>
        </div>
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
