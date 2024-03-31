import React, { useState, useEffect } from "react";
import SortingLessonDTS from "./DataTypeContent/SortingLessonDTS";
import DataTypeContent1 from "./DataTypeContent/DataTypeContent1";
import DataTypeContent2 from "./DataTypeContent/DataTypeContent2";
import DataTypeContent3 from "./DataTypeContent/DataTypeContent3";
import DataTypeContent4 from "./DataTypeContent/DataTypeContent4";
import TestComponent from "./DataTypeContent/KnowledgeTest";
import ConfettiButton from "./ConfettiButton";

const DataTypeLesson = () => {
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0);
  const totalLessons = 6;

  useEffect(() => {
    // Retrieve completion status from local storage
    const dataTypeLessonCompletionStatus = JSON.parse(localStorage.getItem("dataTypeLessonCompletion")) || 0;
    setCurrentLessonIndex(dataTypeLessonCompletionStatus);
  }, []);

  const handleNext = () => {
    const nextIndex = currentLessonIndex + 1;
    if (nextIndex === totalLessons) {
      window.location.href = "/lessons";
    } else {
      setCurrentLessonIndex(nextIndex);
      // Update completion status in local storage
      localStorage.setItem("dataTypeLessonCompletion", JSON.stringify(nextIndex));
    }
  };

  const handleBack = () => {
    const prevIndex = Math.max(0, currentLessonIndex - 1);
    setCurrentLessonIndex(prevIndex);
    // Update completion status in local storage
    localStorage.setItem("dataTypeLessonCompletion", JSON.stringify(prevIndex));
  };

  const progressPercentage = ((currentLessonIndex + 1) / totalLessons) * 100;

  return (
    <div className="container-fluid" style={{ padding: "50px", paddingTop: "0px" }}>
      <div className="row text-light" style={{ display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", backgroundColor: "#6a5bcf", borderRadius: "20px", padding: "1rem" }}>
        <h3 style={{ margin: 0 }}>Data Types and Structures</h3>
      </div>
      <div className="row" style={{ height: "75vh", overflowY: "auto" }}>
        {currentLessonIndex === 0 && <DataTypeContent1 />}
        {currentLessonIndex === 1 && <DataTypeContent2 />}
        {currentLessonIndex === 2 && <DataTypeContent3 />}
        {currentLessonIndex === 3 && <DataTypeContent4 />}
        {currentLessonIndex === 4 && <SortingLessonDTS />}
        {currentLessonIndex === 5 && <TestComponent />}
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

export default DataTypeLesson;
