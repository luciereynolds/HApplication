import React, { useState } from "react";
import SortingLessonDTS from "./SortingLessonDTS";
import DataTypeLesson from "./DataTypeLesson";

const Lessons = () => {
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0);

  const handleNext = () => {
    setCurrentLessonIndex((prevIndex) => prevIndex + 1);
  };

  const handleBack = () => {
    setCurrentLessonIndex((prevIndex) => Math.max(0, prevIndex - 1));
  };

  return (
    <div className="container-fluid" style={{ height: "80vh" }}>
      <div className="row" style={{ paddingTop: "20px", textAlign: "center" }}>
        <h3>Data Types and Structures 🚀</h3>
      </div>
      <div className="row" style={{ height: "75vh", overflowY: "auto" }}>
        {currentLessonIndex === 0 && <DataTypeLesson />}
        {currentLessonIndex === 1 && <SortingLessonDTS />}
      </div>
      <div className="row" style={{ marginTop: "10px", marginBottom: "20px", textAlign: "center" }}>
        <div className="col">
          <button className="lesson-button" onClick={handleBack} disabled={currentLessonIndex === 0}>
            Back
          </button>
        </div>
        <div className="col">
          <button className="lesson-button" onClick={handleNext} disabled={currentLessonIndex === 1}>
            Next
          </button>
        </div>
        <p></p>
      </div>
    </div>
  );
};

export default Lessons;
