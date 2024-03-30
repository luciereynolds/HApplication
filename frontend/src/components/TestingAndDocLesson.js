import React, { useState } from "react";

import TestingContent1 from "./TestingDocContent/TestingContent1";
import TestingContent2 from "./TestingDocContent/TestingContent2";
import WordConnectionTask from "./TestingDocContent/WordConnectionTask";
import TestingContent3 from "./TestingDocContent/TestingContent3";
import TestingContent4 from "./TestingDocContent/TestingContent4";
import TestingContent5 from "./TestingDocContent/TestingContent5";
import TestingContent6 from "./TestingDocContent/TestingContent6";
import ConfettiButton from "./ConfettiButton";

const Lessons = () => {
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0);

  const handleNext = () => {
    if (currentLessonIndex === totalLessons - 1) {
      // If it's the last lesson, navigate back to the lessons page
      window.location.href = "/lessons";
    } else {
      setCurrentLessonIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handleBack = () => {
    setCurrentLessonIndex((prevIndex) => Math.max(0, prevIndex - 1));
  };

  const totalLessons = 7; // Set the total number of lessons

  const progressPercentage = ((currentLessonIndex + 1) / totalLessons) * 100;
  
  // returns lesson content to be called in SortingLesson
  return (
    <div className="container-fluid" style={{ padding: "50px", paddingTop: "0px" }}>
      <div className="row text-light" style={{ display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", backgroundColor: "#e978eb", borderRadius: "20px", padding: "1rem" }}>
        <h3 style={{ margin: 0 }}>Testing and Documenting Solutions</h3>
      </div>
      <div className="row" style={{ height: "75vh", overflowY: "auto" }}>
        {currentLessonIndex === 0 && <TestingContent1 />}
        {currentLessonIndex === 1 && <TestingContent2 />}
        {currentLessonIndex === 2 && <WordConnectionTask />}
        {currentLessonIndex === 3 && <TestingContent3 />}
        {currentLessonIndex === 4 && <TestingContent4 />}
        {currentLessonIndex === 5 && <TestingContent5 />}
        {currentLessonIndex === 6 && <TestingContent6 />}
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
          {currentLessonIndex === totalLessons - 1 ? ( // Conditionally render ConfettiButton if it's the last lesson
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

export default Lessons;
