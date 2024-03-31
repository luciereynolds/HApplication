import React, { useState, useEffect } from "react";
import LowLevelContent1 from "./LowLevelContent/LowLevelContent1";
import LowLevelContent2 from "./LowLevelContent/LowLevelContent2";
import LowLevelContent3 from "./LowLevelContent/LowLevelContent3";
import LowLevelContent4 from "./LowLevelContent/LowLevelContent4";
import LowLevelContent5 from "./LowLevelContent/LowLevelContent5";
import BinaryCounter from "./LowLevelContent/BinaryCounter";
import TranslationExercise from "./LowLevelContent/TranslationExercise";
import ConfettiButton from "./ConfettiButton";

const LowLevelLesson = () => {
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0);
  const totalLessons = 7;

  useEffect(() => {
    // Retrieve completion status from local storage
    const lowLevelLessonCompletionStatus = JSON.parse(localStorage.getItem("lowLevelLessonCompletion")) || 0;
    setCurrentLessonIndex(lowLevelLessonCompletionStatus);
  }, []);

  const handleNext = () => {
    const nextIndex = currentLessonIndex + 1;
    if (nextIndex === totalLessons) {
      window.location.href = "/lessons";
    } else {
      setCurrentLessonIndex(nextIndex);
      // Update completion status in local storage
      localStorage.setItem("lowLevelLessonCompletion", JSON.stringify(nextIndex));
    }
  };

  const handleBack = () => {
    const prevIndex = Math.max(0, currentLessonIndex - 1);
    setCurrentLessonIndex(prevIndex);
    // Update completion status in local storage
    localStorage.setItem("lowLevelLessonCompletion", JSON.stringify(prevIndex));
  };

  const progressPercentage = ((currentLessonIndex + 1) / totalLessons) * 100;

  return (
    <div className="container-fluid" style={{ padding: "50px", paddingTop: "0px" }}>
      <div className="row text-light" style={{ display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", backgroundColor: "#2eba68", borderRadius: "20px", padding: "1rem" }}>
        <h3 style={{ margin: 0 }}>Low Level Operations and Architecture</h3>
      </div>
      <div className="row" style={{ height: "75vh", overflowY: "auto" }}>
        {currentLessonIndex === 0 && <LowLevelContent1 />}
        {currentLessonIndex === 1 && <LowLevelContent2 />}
        {currentLessonIndex === 2 && <LowLevelContent3 />}
        {currentLessonIndex === 3 && <BinaryCounter />}
        {currentLessonIndex === 4 && <LowLevelContent4 />}
        {currentLessonIndex === 5 && <LowLevelContent5 />}
        {currentLessonIndex === 6 && <TranslationExercise />}
      </div>
      <div className="row" style={{ textAlign: "center" }}>
        <div className="col">
          <button className="lesson-button" onClick={handleBack} disabled={currentLessonIndex === 0}>
            Back
          </button>
        </div>
        <div className="col">
          <div>
            <progress value={progressPercentage} max="100"></progress>
            <p>{`${progressPercentage.toFixed(0)}% Complete`}</p>
          </div>
        </div>
        <div className="col">
          {currentLessonIndex === totalLessons - 1 ? (
            <ConfettiButton />
          ) : (
            <button className="lesson-button" onClick={handleNext}>
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default LowLevelLesson;
